import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function requireEnv(name: string, fallback?: string) {
  const val = process.env[name] || fallback;
  if (!val) {
    throw new Error(`Missing required env var ${name}`);
  }
  return val;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = (body?.name || "").toString().trim();
    const email = (body?.email || "").toString().trim();
    const message = (body?.message || "").toString().trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const host = requireEnv("SMTP_HOST");
    const port = Number(requireEnv("SMTP_PORT", "587"));
    const user = requireEnv("SMTP_USER");
    const pass = requireEnv("SMTP_PASS");
    const toEmail = requireEnv("CONTACT_TO_EMAIL", "work.uykyleyuan@gmail.com");

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for other ports
      auth: { user, pass },
    });

    const subject = `New contact from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: toEmail,
      replyTo: email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error", error);
    return NextResponse.json({ error: "Unable to send message" }, { status: 500 });
  }
}
