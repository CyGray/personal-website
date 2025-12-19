import { NextResponse } from "next/server";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDb } from "@/lib/firebase/server";
import { computeEstimate, QuoteRequestDraft } from "@/lib/pricing/priceCalculator";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const isValidEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

function requireEnv(name: string) {
  const val = process.env[name];
  if (!val) throw new Error(`Missing env: ${name}`);
  return val;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as QuoteRequestDraft;

    const name = (body?.name || "").toString().trim();
    const email = (body?.email || "").toString().trim();
    const contactHandle = (body as any)?.contactHandle ? String((body as any).contactHandle).trim() : "";

    if (!name) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }

    if (!email && !contactHandle) {
      return NextResponse.json({ error: "Provide an email or a handle/phone number." }, { status: 400 });
    }

    if (email && !isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const db = getDb();
    const estimate = computeEstimate(body);

    const doc = await addDoc(collection(db, "quotes"), {
      draft: body,
      estimate,
      createdAt: serverTimestamp(),
      source: "portfolio-site",
    });

    // Email notification (SMTP / Gmail)
    try {
      const host = process.env.SMTP_HOST || "smtp.gmail.com";
      const port = Number(process.env.SMTP_PORT || 465);
      const secure = (process.env.SMTP_SECURE || "true").toLowerCase() === "true";
      const user = requireEnv("SMTP_USER");
      const pass = requireEnv("SMTP_PASS");

      const to = process.env.QUOTE_TO || process.env.CONTACT_TO || user;
      const from = process.env.QUOTE_FROM || process.env.CONTACT_FROM || user;

      const transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: { user, pass },
      });

      const subject = `New quote request — ${name}`;
      const contactLine = email ? `Email: ${email}` : `Handle/Phone: ${contactHandle}`;

      await transporter.sendMail({
        from,
        to,
        replyTo: email || undefined,
        subject,
        text: `Quote ID: ${doc.id}\n${contactLine}\n\nEstimate: ${estimate.displayMin} – ${estimate.displayMax}\n\nDraft:\n${JSON.stringify(
          body,
          null,
          2
        )}`,
        html: `
          <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; line-height: 1.5;">
            <p><strong>Quote ID:</strong> ${escapeHtml(doc.id)}</p>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>${email ? "Email" : "Handle/Phone"}:</strong> ${escapeHtml(email || contactHandle)}</p>
            <p><strong>Estimate:</strong> ${escapeHtml(estimate.displayMin)} – ${escapeHtml(estimate.displayMax)}</p>
            <p style="margin-top:16px;"><strong>Draft</strong></p>
            <pre style="white-space:pre-wrap; background:#0b1120; color:#e5e7eb; padding:12px; border-radius:12px;">${escapeHtml(
              JSON.stringify(body, null, 2)
            )}</pre>
          </div>
        `.trim(),
      });
    } catch (mailError) {
      // Don't fail the submission if email fails; Firestore write already succeeded.
      console.error("Failed to send quote notification email", mailError);
    }

    return NextResponse.json({ id: doc.id, estimate }, { status: 201 });
  } catch (error) {
    console.error("Failed to save quote", error);
    return NextResponse.json({ error: "Failed to save quote." }, { status: 500 });
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
