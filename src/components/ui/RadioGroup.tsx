export function RadioGroup({
    value,
    onChange,
    options,
    hint,
  }: {
    value: string;
    onChange: (v: string) => void;
    hint?: string;
    options: Array<{ value: string; label: string; description?: string }>;
  }) {
    return (
      <div className="space-y-3">
        {options.map((o) => {
          const active = value === o.value;
          return (
            <button
              key={o.value}
              type="button"
              onClick={() => onChange(o.value)}
              className={`w-full rounded-xl border px-3 py-3 text-left transition ${
                active
                  ? "border-[#16A34A]/60 bg-[#16A34A]/10"
                  : "border-[#1F2937] bg-[#111827] hover:bg-[#0B1120]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-medium text-white">{o.label}</div>
                  {o.description && <div className="mt-1 text-sm text-[#9CA3AF]">{o.description}</div>}
                </div>
                <div className="pt-1">
                  <div
                    className={`h-4 w-4 rounded-full border ${
                      active ? "border-[#16A34A] bg-[#16A34A]" : "border-[#374151]"
                    }`}
                  />
                </div>
              </div>
            </button>
          );
        })}
        {hint && <p className="text-xs text-[#9CA3AF]">{hint}</p>}
      </div>
    );
  }
  