"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";
import { QuoteStepper } from "./QuoteStepper";
import { QuoteStep } from "./QuoteStep";
import { QuoteSummary } from "./QuoteSummary";
import { QuoteEstimate } from "./QuoteEstimate";
import { defaultQuoteRequest, QuoteRequestDraft } from "@/lib/pricing/priceCalculator";

const isValidEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

export function QuoteLayout() {
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState<QuoteRequestDraft>(defaultQuoteRequest());
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const totalSteps = 5;

  const canGoBack = step > 0 && !submitted;
  const canGoNext = step < totalSteps - 1 && !submitted;

  const estimate = useMemo(() => {
    return QuoteEstimate.compute(draft);
  }, [draft]);

  const goNext = () => setStep((s) => Math.min(totalSteps - 1, s + 1));

  const handleSubmit = async () => {
    if (!draft.name.trim()) {
      setStep(4);
      setError("Name is required.");
      return;
    }

    const hasEmail = !!draft.email.trim();
    const hasHandle = !!draft.contactHandle.trim();

    if (!hasEmail && !hasHandle) {
      setStep(4);
      setError("Provide an email or a handle/phone number.");
      return;
    }

    if (hasEmail && !isValidEmail(draft.email.trim())) {
      setStep(4);
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setSubmitting(true);
      setError(null);
      const res = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(draft),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to submit quote.");
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Card className="p-6 sm:p-8">
        <p className="text-sm text-[#9CA3AF]">Submitted</p>
        <h1 className="mt-2 text-[24px] font-semibold leading-[1.3] tracking-tight sm:text-[28px]">
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
          <h1 className="mt-2 text-[32px] font-semibold leading-[1.2] tracking-tight sm:text-[40px]">
            Build your project plan
          </h1>
          <p className="mt-3 max-w-2xl text-[#9CA3AF]">
            Answer a few quick questions to get a ballpark estimate. I will follow up with details.
          </p>
          <p className="mt-2 text-sm text-[#9CA3AF]">About 2-3 minutes.</p>
        </div>

        <Card className="p-6">
          <QuoteStepper step={step} total={totalSteps} />

          <div className="mt-6">
            <QuoteStep step={step} draft={draft} setDraft={setDraft} goNext={goNext} />
          </div>

          <div className="mt-8 flex items-center gap-3">
            <Button
              type="button"
              variant="secondary"
              disabled={!canGoBack}
              className="min-w-[112px] bg-transparent border-0 text-[#16A34A] hover:bg-transparent shadow-none"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
            >
              <ArrowLeft className="h-4 w-4 opacity-70" strokeWidth={2} />
              <span className="opacity-70">Back</span>
            </Button>

            <div className="ml-auto flex gap-3">
              {canGoNext ? (
                <Button
                  type="button"
                  onClick={goNext}
                  className="min-w-[124px] bg-[#16A34A] text-white hover:bg-[#15803D]"
                >
                  Continue
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={handleSubmit}
                  disabled={submitting}
                  variant="primary"
                  className="min-w-[140px] bg-[#16A34A] text-white hover:bg-[#15803D] shadow-lg shadow-[#16A34A]/25"
                >
                  {submitting ? "Submitting..." : "Submit quote"}
                </Button>
              )}
            </div>
          </div>

          {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
        </Card>
      </div>

      <div className="space-y-4">
        <QuoteEstimate draft={draft} estimate={estimate} />
        <QuoteSummary draft={draft} estimate={estimate} />
      </div>
    </div>
  );
}
