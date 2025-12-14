import { cn } from "@/lib/utils/cn";
import { ProjectTypeKey } from "@/lib/data/projects";

const tabs: Array<{ key: ProjectTypeKey | "all"; label: string }> = [
  { key: "all", label: "All" },
  { key: "web-app", label: "Web apps" },
  { key: "business-tool", label: "Business tools" },
  { key: "ecommerce", label: "E-commerce" },
  { key: "automation", label: "Automation" },
];

export function ProjectFilterBar({
  value,
  onChange,
}: {
  value: ProjectTypeKey | "all";
  onChange: (v: ProjectTypeKey | "all") => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((t) => (
        <button
          key={t.key}
          onClick={() => onChange(t.key)}
          className={cn(
            "rounded-full border border-[#1F2937] px-3 py-1.5 text-sm text-[#D1D5DB] transition hover:bg-[#111827]",
            value === t.key && "bg-[#111827] text-white"
          )}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
