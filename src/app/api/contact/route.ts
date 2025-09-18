import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Rate limiting map
const rateLimitMap = new Map();

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Sanitize input function
const sanitizeInput = (input: string): string => {
  return input.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
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
      const { count, resetTime } = rateLimitMap.get(ip);
      if (now < resetTime && count >= maxRequests) {
        return NextResponse.json(
          { success: false, error: "Too many requests. Please try again later." },
          { status: 429 }
        );
      }
      if (now >= resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
      } else {
        rateLimitMap.set(ip, { count: count + 1, resetTime });
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

    // Validate email format on sanitized email
    if (!emailRegex.test(sanitizedEmail)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
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
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
          ${sanitizedMessage.replace(/\n/g, '<br>')}
        </div>
        <hr>
        <p><em>Reply directly to this email to respond to ${sanitizedFirstName}</em></p>
      `,
      text: `New Contact Form Submission\n\nFrom: ${sanitizedFirstName} ${sanitizedLastName}\nEmail: ${sanitizedEmail}\n\nMessage:\n${sanitizedMessage}\n\n---\nReply directly to this email to respond to ${sanitizedFirstName}`,
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
