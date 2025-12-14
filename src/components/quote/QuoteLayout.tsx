"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { QuoteStepper } from "./QuoteStepper";
import { QuoteStep } from "./QuoteStep";
import { QuoteSummary } from "./QuoteSummary";
import { QuoteEstimate } from "./QuoteEstimate";
import { defaultQuoteRequest, QuoteRequestDraft } from "@/lib/pricing/priceCalculator";

export function QuoteLayout() {
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState<QuoteRequestDraft>(defaultQuoteRequest());
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 8;

  const canGoBack = step > 0 && !submitted;
  const canGoNext = step < totalSteps - 1 && !submitted;

  const estimate = useMemo(() => {
    return QuoteEstimate.compute(draft);
  }, [draft]);

  if (submitted) {
    return (
      <Card className="p-6 sm:p-8">
        <p className="text-sm text-[#9CA3AF]">Submitted</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          Thanks — I’ve received your request
        </h1>
        <p className="mt-3 max-w-2xl text-[#9CA3AF]">
          I’ll review your submission and reach out using your preferred contact method.
        </p>
        <div className="mt-6">
          <Button href="/projects" variant="secondary">
            Back to projects
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
      <div className="space-y-6">
        <div>
          <p className="text-sm text-[#9CA3AF]">Quote builder</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Build your project plan
          </h1>
          <p className="mt-3 max-w-2xl text-[#9CA3AF]">
            Answer a few questions. You’ll get a rough price range, and I’ll follow up with details.
          </p>
          <p className="mt-2 text-sm text-[#9CA3AF]">Takes about 2–3 minutes.</p>
        </div>

        <Card className="p-6">
          <QuoteStepper step={step} total={totalSteps} />

          <div className="mt-6">
            <QuoteStep step={step} draft={draft} setDraft={setDraft} />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              type="button"
              variant="secondary"
              disabled={!canGoBack}
              onClick={() => setStep((s) => Math.max(0, s - 1))}
            >
              Back
            </Button>

            {canGoNext ? (
              <Button type="button" onClick={() => setStep((s) => Math.min(totalSteps - 1, s + 1))}>
                Continue
              </Button>
            ) : (
              <Button
                type="button"
                onClick={() => {
                  // TODO: Replace with API call + Firestore write + email notification.
                  console.log("SUBMIT DRAFT", { draft, estimate });
                  setSubmitted(true);
                }}
              >
                Submit and get follow-up
              </Button>
            )}
          </div>
        </Card>
      </div>

      <div className="space-y-4">
        <QuoteEstimate draft={draft} estimate={estimate} />
        <QuoteSummary draft={draft} estimate={estimate} />
      </div>
    </div>
  );
}
