import { NextResponse } from "next/server";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDb } from "@/lib/firebase/server";
import { computeEstimate, QuoteRequestDraft } from "@/lib/pricing/priceCalculator";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as QuoteRequestDraft;

    if (!body?.email || !body?.name) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const db = getDb();
    const estimate = computeEstimate(body);

    const doc = await addDoc(collection(db, "quotes"), {
      draft: body,
      estimate,
      createdAt: serverTimestamp(),
      source: "portfolio-site",
    });

    return NextResponse.json({ id: doc.id, estimate }, { status: 201 });
  } catch (error) {
    console.error("Failed to save quote", error);
    return NextResponse.json({ error: "Failed to save quote." }, { status: 500 });
  }
}
