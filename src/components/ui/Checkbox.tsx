export function Checkbox({
    checked,
    onChange,
    label,
  }: {
    checked: boolean;
    onChange: () => void;
    label: string;
  }) {
    return (
      <button
        type="button"
        onClick={onChange}
        className="flex w-full items-center gap-3 rounded-xl border border-[#1F2937] bg-[#111827] px-3 py-2 text-left text-sm text-[#D1D5DB] hover:bg-[#0B1120]"
      >
        <span
          className={`h-4 w-4 rounded border ${
            checked ? "border-[#16A34A] bg-[#16A34A]" : "border-[#374151] bg-transparent"
          }`}
        />
        <span>{label}</span>
      </button>
    );
  }
  