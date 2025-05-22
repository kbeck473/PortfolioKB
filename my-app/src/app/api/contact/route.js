// src/app/api/contact/route.js
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, message } = await request.json();

  // configure transporter using SMTP creds stored in .env.local
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: +process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.MY_CONTACT_EMAIL,      // your email
      subject: `New message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}

        ${message}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
