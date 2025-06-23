import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Ensure the API key is set in your environment variables on Vercel as RESEND_API_KEY
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    // Basic validation (optional but recommended)
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required.' },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: 'Contact Form <luke@lstevens.dev>',
      to: 'luke@lstevens.dev',
      subject: `Contact Form Submission from ${firstName} ${lastName} <${email}>`,
      replyTo: email,
      text: `From: ${firstName} ${lastName} <${email}>\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    // Log error for debugging (optional)
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email.' }, { status: 500 });
  }
}
