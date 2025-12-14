type Option = { value: string; label: string };

export function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: Option[];
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm text-[#D1D5DB]">{label}</span>
      <select
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-[#1F2937] bg-[#111827] px-3 py-2 text-sm text-white outline-none focus:border-[#16A34A]/60"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
