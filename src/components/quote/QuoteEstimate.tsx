import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { QuoteRequestDraft } from "@/lib/pricing/priceCalculator";
import { EstimateResult } from "@/lib/pricing/priceCalculator";

export function QuoteEstimate({ draft, estimate }: { draft: QuoteRequestDraft; estimate: EstimateResult }) {
  return (
    <Card className="p-5">
      <p className="text-sm text-[#9CA3AF]">Estimated project range</p>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <span className="text-2xl font-semibold">{estimate.displayMin}</span>
        <span className="text-[#9CA3AF]">–</span>
        <span className="text-2xl font-semibold">{estimate.displayMax}</span>
        <Badge variant="muted">{estimate.currency}</Badge>
      </div>

      <p className="mt-3 text-sm text-[#9CA3AF]">
        This is a rough estimate based on your answers and adjusted for your region. It’s not a final quote — I’ll follow
        up to refine details.
      </p>

      {estimate.flags.length > 0 && (
        <div className="mt-4 space-y-2">
          {estimate.flags.map((f) => (
            <div key={f} className="rounded-xl border border-[#1F2937] bg-[#111827] px-3 py-2 text-sm text-[#D1D5DB]">
              {f}
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

// Static helper used in QuoteLayout useMemo
QuoteEstimate.compute = (draft: QuoteRequestDraft) => {
  const { computeEstimate } = require("@/lib/pricing/priceCalculator");
  return computeEstimate(draft);
};
