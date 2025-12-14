import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { QuoteRequestDraft, EstimateResult } from "@/lib/pricing/priceCalculator";

export function QuoteSummary({ draft }: { draft: QuoteRequestDraft; estimate: EstimateResult }) {
  const pairs: Array<[string, string]> = [
    ["Type", draft.projectType],
    ["Goal", draft.primaryGoal],
    ["Size", draft.size],
    ["Content", draft.contentReadiness],
    ["Approach", draft.iterationStyle],
    ["Functionality", draft.functionality],
    ["Data", draft.dataStorage],
    ["Timeline", draft.timeline],
    ["Budget", draft.budgetBand],
  ];

  return (
    <Card className="p-5">
      <p className="text-sm text-[#9CA3AF]">Summary</p>
      <div className="mt-4 grid gap-3">
        {pairs.map(([k, v]) => (
          <div key={k} className="flex items-center justify-between gap-3">
            <span className="text-sm text-[#9CA3AF]">{k}</span>
            <Badge variant="muted">{v}</Badge>
          </div>
        ))}

        <div className="flex items-start justify-between gap-3">
          <span className="text-sm text-[#9CA3AF]">Integrations</span>
          <div className="flex max-w-[240px] flex-wrap justify-end gap-2">
            {draft.integrations.length ? (
              draft.integrations.map((i) => (
                <Badge key={i} variant="muted">
                  {i}
                </Badge>
              ))
            ) : (
              <Badge variant="muted">none</Badge>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
