import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import validator from "validator";

// Rate limiting with automatic cleanup
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Cleanup old rate limit entries every 30 minutes
const cleanupInterval = setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of rateLimitMap.entries()) {
    if (now >= data.resetTime + (30 * 60 * 1000)) { // Extra 30 min buffer
      rateLimitMap.delete(ip);
    }
  }
}, 30 * 60 * 1000);

// Cleanup on process termination
process.on('SIGTERM', () => {
  clearInterval(cleanupInterval);
  rateLimitMap.clear();
});


// Comprehensive input sanitization for healthcare compliance
const sanitizeInput = (input: string): string => {
  if (!input || typeof input !== 'string') return '';

  return validator.escape(input.trim())
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .replace(/data:/gi, '')
    .substring(0, 1000); // Limit length for safety
};

// Safe text conversion for email (no HTML)
const sanitizeForPlainText = (input: string): string => {
  if (!input || typeof input !== 'string') return '';
  return input.trim().replace(/[<>]/g, '').substring(0, 5000);
};

// Ensure the API key is set in your environment variables on Vercel as RESEND_API_KEY
const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  console.error("RESEND_API_KEY environment variable is not set");
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    const now = Date.now();
    const windowMs = 15 * 60 * 1000; // 15 minutes
    const maxRequests = 5;

    if (rateLimitMap.has(ip)) {
      const rateLimitData = rateLimitMap.get(ip);
      if (rateLimitData && now < rateLimitData.resetTime && rateLimitData.count >= maxRequests) {
        return NextResponse.json(
          { success: false, error: "Too many requests. Please try again later." },
          { status: 429 }
        );
      }
      if (rateLimitData && now >= rateLimitData.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
      } else if (rateLimitData) {
        rateLimitMap.set(ip, { count: rateLimitData.count + 1, resetTime: rateLimitData.resetTime });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    }

    const { firstName, lastName, email, message } = await req.json();

    // Sanitize inputs first
    const sanitizedFirstName = sanitizeInput(firstName || '');
    const sanitizedLastName = sanitizeInput(lastName || '');
    const sanitizedEmail = sanitizeInput(email || '');
    const sanitizedMessage = sanitizeInput(message || '');

    // Enhanced validation on sanitized inputs
    if (!sanitizedFirstName || !sanitizedLastName || !sanitizedEmail || !sanitizedMessage) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 },
      );
    }

    // Validate email format with library validation
    if (!validator.isEmail(sanitizedEmail)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Additional length and content validation
    if (sanitizedFirstName.length > 50 || sanitizedLastName.length > 50) {
      return NextResponse.json(
        { success: false, error: "Name fields are too long." },
        { status: 400 }
      );
    }

    if (sanitizedMessage.length > 5000) {
      return NextResponse.json(
        { success: false, error: "Message is too long. Please keep it under 5000 characters." },
        { status: 400 }
      );
    }

    // Check if resend is properly initialized
    if (!resend) {
      console.error("Resend not initialized - missing API key");
      return NextResponse.json(
        { success: false, error: "Email service not configured." },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: "Contact Form <noreply@nextgentherapy.co.uk>",
      to: "andreeatherapytoday@gmail.com",
      subject: `New Contact Form Submission from ${sanitizedFirstName} ${sanitizedLastName}`,
      replyTo: sanitizedEmail,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>From:</strong> ${sanitizedFirstName} ${sanitizedLastName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0; white-space: pre-wrap; font-family: Arial, sans-serif;">
          ${sanitizedMessage}
        </div>
        <hr>
        <p><em>Reply directly to this email to respond to ${sanitizedFirstName}</em></p>
        <p style="font-size: 12px; color: #666; margin-top: 20px;">This message was sent via the secure contact form at nextgentherapy.co.uk</p>
      `,
      text: `New Contact Form Submission\n\nFrom: ${sanitizeForPlainText(sanitizedFirstName)} ${sanitizeForPlainText(sanitizedLastName)}\nEmail: ${sanitizedEmail}\n\nMessage:\n${sanitizeForPlainText(sanitizedMessage)}\n\n---\nReply directly to this email to respond to ${sanitizeForPlainText(sanitizedFirstName)}\n\nThis message was sent via the secure contact form at nextgentherapy.co.uk`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    // Log error for debugging (optional)
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email." },
      { status: 500 },
    );
  }
}
