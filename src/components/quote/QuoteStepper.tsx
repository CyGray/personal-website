import { StepIndicator } from "@/components/ui/StepIndicator";

export function QuoteStepper({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-sm text-[#9CA3AF]">Step {step + 1} of {total}</p>
        <p className="mt-1 font-medium">Project details</p>
      </div>
      <StepIndicator current={step + 1} total={total} />
    </div>
  );
}
