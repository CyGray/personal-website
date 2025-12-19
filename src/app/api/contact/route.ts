import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function requireEnv(name: string) {
  const val = process.env[name];
  if (!val) throw new Error(`Missing env: ${name}`);
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

    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = Number(process.env.SMTP_PORT || 465);
    const secure = (process.env.SMTP_SECURE || "true").toLowerCase() === "true";
    const user = requireEnv("SMTP_USER");
    const pass = requireEnv("SMTP_PASS");
    const to = process.env.CONTACT_TO || user;
    const from = process.env.CONTACT_FROM || user;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `New contact form message — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; line-height: 1.5;">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <pre style="white-space:pre-wrap; background:#0b1120; color:#e5e7eb; padding:12px; border-radius:12px;">${escapeHtml(
            message
          )}</pre>
        </div>
      `.trim(),
    });

    return NextResponse.json({ ok: true, message: "Thanks! Message sent — I'll reach out soon." });
  } catch (error) {
    console.error("Contact API error", error);
    return NextResponse.json({ error: "Unable to send message" }, { status: 500 });
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
