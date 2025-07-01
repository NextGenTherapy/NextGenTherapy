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
const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Enhanced validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 },
      );
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedFirstName = sanitizeInput(firstName);
    const sanitizedLastName = sanitizeInput(lastName);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);

    await resend.emails.send({
      from: "Contact Form <luke@lstevens.dev>",
      to: "luke@lstevens.dev",
      subject: `Contact Form Submission from ${sanitizedFirstName} ${sanitizedLastName} <${sanitizedEmail}>`,
      replyTo: sanitizedEmail,
      text: `From: ${sanitizedFirstName} ${sanitizedLastName} <${sanitizedEmail}>\n\n${sanitizedMessage}`,
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
