import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import validator from 'validator';

// Rate limiting with automatic cleanup
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Cleanup old rate limit entries every 30 minutes
const cleanupInterval = setInterval(
  () => {
    const now = Date.now();
    for (const [ip, data] of rateLimitMap.entries()) {
      if (now >= data.resetTime + 30 * 60 * 1000) {
        // Extra 30 min buffer
        rateLimitMap.delete(ip);
      }
    }
  },
  30 * 60 * 1000
);

// Cleanup on process termination
process.on('SIGTERM', () => {
  clearInterval(cleanupInterval);
  rateLimitMap.clear();
});

// Comprehensive input sanitization for healthcare compliance
const sanitizeInput = (input: string): string => {
  if (!input || typeof input !== 'string') return '';

  return validator
    .escape(input.trim())
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

// Validate UK phone number
const isValidUKPhone = (phone: string): boolean => {
  if (!phone || phone.trim() === '') return true; // Phone is optional
  const cleaned = phone.replace(/[\s\-()]/g, '');
  const ukPhoneRegex = /^(?:(?:\+44|0)(?:7\d{9}|[123]\d{8,9}))$/;
  return ukPhoneRegex.test(cleaned);
};

// Map enquiryFor value to human-readable text
const getEnquiryForLabel = (value: string): string => {
  const labels: Record<string, string> = {
    myself: 'Themselves',
    child: 'Their child',
    other: 'Someone else',
  };
  return labels[value] || value;
};

// Map contactMethod value to human-readable text
const getContactMethodLabel = (value: string): string => {
  const labels: Record<string, string> = {
    email: 'Email',
    phone: 'Phone',
  };
  return labels[value] || value;
};

// Ensure the API key is set in your environment variables on Vercel as RESEND_API_KEY
const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  console.error('RESEND_API_KEY environment variable is not set');
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
          { success: false, error: 'Too many requests. Please try again later.' },
          { status: 429 }
        );
      }
      if (rateLimitData && now >= rateLimitData.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
      } else if (rateLimitData) {
        rateLimitMap.set(ip, {
          count: rateLimitData.count + 1,
          resetTime: rateLimitData.resetTime,
        });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    }

    const { name, email, phone, contactMethod, enquiryFor, message, gdprConsent, honeypot } =
      await req.json();

    // Honeypot check - if filled, return silent success (bots fill hidden fields)
    if (honeypot && honeypot.trim() !== '') {
      // Return success to bot but don't actually send email
      return NextResponse.json({ success: true });
    }

    // Sanitize inputs first
    const sanitizedName = sanitizeInput(name || '');
    const sanitizedEmail = sanitizeInput(email || '');
    const sanitizedPhone = sanitizeInput(phone || '');
    const sanitizedContactMethod = sanitizeInput(contactMethod || '');
    const sanitizedEnquiryFor = sanitizeInput(enquiryFor || '');
    const sanitizedMessage = sanitizeInput(message || '');

    // Validate required fields
    if (!sanitizedName || sanitizedName.length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please enter your name (at least 2 characters).' },
        { status: 400 }
      );
    }

    // Validate email format with library validation
    if (!validator.isEmail(sanitizedEmail)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Validate phone if provided
    if (sanitizedPhone && !isValidUKPhone(sanitizedPhone)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid UK phone number.' },
        { status: 400 }
      );
    }

    // Validate phone is required if contact method is phone
    if (sanitizedContactMethod === 'phone' && (!sanitizedPhone || sanitizedPhone.trim() === '')) {
      return NextResponse.json(
        { success: false, error: 'Please enter your phone number if you prefer phone contact.' },
        { status: 400 }
      );
    }

    // Validate contact method
    if (!['email', 'phone'].includes(sanitizedContactMethod)) {
      return NextResponse.json(
        { success: false, error: 'Please select how you would like to be contacted.' },
        { status: 400 }
      );
    }

    // Validate enquiry for
    if (!['myself', 'child', 'other'].includes(sanitizedEnquiryFor)) {
      return NextResponse.json(
        { success: false, error: 'Please select who this enquiry is for.' },
        { status: 400 }
      );
    }

    // Validate GDPR consent
    if (!gdprConsent) {
      return NextResponse.json(
        { success: false, error: 'Please confirm you consent to being contacted.' },
        { status: 400 }
      );
    }

    // Additional length validation
    if (sanitizedName.length > 100) {
      return NextResponse.json({ success: false, error: 'Name is too long.' }, { status: 400 });
    }

    if (sanitizedMessage.length > 1000) {
      return NextResponse.json(
        { success: false, error: 'Message is too long. Please keep it under 1000 characters.' },
        { status: 400 }
      );
    }

    // Check if resend is properly initialized
    if (!resend) {
      console.error('Resend not initialized - missing API key');
      return NextResponse.json(
        { success: false, error: 'Email service not configured.' },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: 'Contact Form <noreply@nextgentherapy.co.uk>',
      to: 'andreeatherapytoday@gmail.com',
      subject: `New Enquiry from ${sanitizedName} (${getEnquiryForLabel(sanitizedEnquiryFor)})`,
      replyTo: sanitizedEmail,
      html: `
        <h3>New Contact Form Submission</h3>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px; font-family: Arial, sans-serif;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Name</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${sanitizedName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></td>
          </tr>
          ${
            sanitizedPhone
              ? `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="tel:${sanitizedPhone}">${sanitizedPhone}</a></td>
          </tr>
          `
              : ''
          }
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Preferred Contact</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${getContactMethodLabel(sanitizedContactMethod)}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Enquiry For</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${getEnquiryForLabel(sanitizedEnquiryFor)}</td>
          </tr>
          ${
            sanitizedMessage
              ? `
          <tr>
            <td style="padding: 10px; font-weight: bold; vertical-align: top;">Message</td>
            <td style="padding: 10px;">
              <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
                ${sanitizedMessage}
              </div>
            </td>
          </tr>
          `
              : ''
          }
        </table>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
        <p><em>Reply directly to this email to respond to ${sanitizedName}</em></p>
        <p style="font-size: 12px; color: #666; margin-top: 20px;">This message was sent via the secure contact form at nextgentherapy.co.uk. The sender has consented to being contacted.</p>
      `,
      text: `New Contact Form Submission

Name: ${sanitizeForPlainText(sanitizedName)}
Email: ${sanitizedEmail}
${sanitizedPhone ? `Phone: ${sanitizedPhone}\n` : ''}Preferred Contact: ${getContactMethodLabel(sanitizedContactMethod)}
Enquiry For: ${getEnquiryForLabel(sanitizedEnquiryFor)}
${sanitizedMessage ? `\nMessage:\n${sanitizeForPlainText(sanitizedMessage)}\n` : ''}
---
Reply directly to this email to respond to ${sanitizeForPlainText(sanitizedName)}

This message was sent via the secure contact form at nextgentherapy.co.uk. The sender has consented to being contacted.`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    // Log error for debugging (optional)
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email.' }, { status: 500 });
  }
}
