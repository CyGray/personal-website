import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = (body?.name || "").toString().trim();
    const email = (body?.email || "").toString().trim();
    const message = (body?.message || "").toString().trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // For now, do not send email; simply acknowledge receipt to the user.
    return NextResponse.json({ ok: true, message: "Thanks! We've been notified and will reach out soon." });
  } catch (error) {
    console.error("Contact API error", error);
    return NextResponse.json({ error: "Unable to send message" }, { status: 500 });
  }
}
