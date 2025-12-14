"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils/cn";
import { ProjectTypeKey, projects } from "@/lib/data/projects";

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
  const counts = useMemo(() => {
    const base: Record<string, number> = { all: projects.length };
    for (const t of tabs) {
      if (t.key === "all") continue;
      base[t.key] = projects.filter((p) => p.type === t.key).length;
    }
    return base;
  }, []);

  const activeIndex = Math.max(
    0,
    tabs.findIndex((t) => t.key === value)
  );

  return (
    <div className="w-full">
      <div
        className={cn(
          "relative flex w-full flex-wrap items-stretch rounded-2xl border border-[#1F2937] bg-[#0B1120] p-1"
        )}
      >
        <div
          className="pointer-events-none absolute inset-y-1 rounded-xl border border-[#16A34A]/30 bg-[#16A34A]/10 transition-all duration-300"
          style={{
            width: `calc(100% / ${tabs.length})`,
            transform: `translateX(${activeIndex * 100}%)`,
          }}
        />

        {tabs.map((t) => {
          const active = value === t.key;
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => onChange(t.key)}
              className={cn(
                "relative z-10 flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition",
                "text-[#D1D5DB] hover:text-white",
                active && "text-white"
              )}
              aria-pressed={active}
            >
              <span className="truncate">{t.label}</span>
              <span
                className={cn(
                  "min-w-[1.5rem] rounded-full border px-2 py-0.5 text-xs",
                  active
                    ? "border-transparent bg-transparent text-[#D1FAE5]"
                    : "border-[#1F2937] bg-[#111827] text-[#9CA3AF]"
                )}
              >
                {counts[t.key] ?? 0}
              </span>
            </button>
          );
        })}
      </div>

    </div>
  );
}
