import { StepIndicator } from "@/components/ui/StepIndicator";

const phaseForStep = (step: number) => {
  if (step <= 1) return "Basics";
  if (step === 2 || step === 3) return "Details";
  return "Contact";
};

export function QuoteStepper({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-sm text-[#9CA3AF]">About 2–3 minutes</p>
        <p className="mt-1 font-medium">{phaseForStep(step)} phase</p>
      </div>
      <StepIndicator current={step + 1} total={total} />
    </div>
  );
}
