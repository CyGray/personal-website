export function StepIndicator({ current, total }: { current: number; total: number }) {
    const pct = Math.round((current / total) * 100);
    return (
      <div className="w-32">
        <div className="h-2 w-full rounded-full bg-[#111827]">
          <div className="h-2 rounded-full bg-[#16A34A]" style={{ width: `${pct}%` }} />
        </div>
      </div>
    );
  }
  