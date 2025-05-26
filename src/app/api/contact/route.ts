import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env["andreeatherapytoday@gmail.com"],
        pass: process.env.CONTACT_EMAIL_PASS, // app password
      },
    });

    await transporter.sendMail({
      from: email,
      to: "andreeatherapytoday@gmail.com",
      subject: `Contact Form Submission from ${firstName} ${lastName}`,
      text: message,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}