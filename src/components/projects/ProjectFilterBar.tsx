"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils/cn";
import { ProjectTypeKey, projects } from "@/lib/data/projects";

const tabs: Array<{ key: ProjectTypeKey | "all"; label: string; short: string }> = [
  { key: "all", label: "All", short: "All" },
  { key: "web-app", label: "Web apps", short: "Web" },
  { key: "business-tool", label: "Business tools", short: "Business" },
  { key: "automation", label: "Automation", short: "Bots" },
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

  return (
    <div className="w-full">
      <div className="relative">
        <div
          className={cn(
            "relative mx-auto flex w-full max-w-full items-center justify-center gap-2 overflow-x-auto rounded-2xl border border-[#1F2937] bg-[#0B1120] px-3 py-3 whitespace-nowrap snap-x snap-mandatory",
            "[&::-webkit-scrollbar]:hidden",
            "scrollbar-width-none"
          )}
          style={{ scrollbarWidth: "none" }}
        >
          {tabs.map((t) => {
            const active = value === t.key;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => onChange(t.key)}
                className={cn(
                  "inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-4 py-2 text-xs font-medium transition sm:text-sm",
                  active
                    ? "border border-[#16A34A]/40 bg-[#16A34A]/10 text-white"
                    : "border border-[#1F2937] bg-[#0F172A] text-[#D1D5DB] hover:text-white"
                )}
                aria-pressed={active}
              >
                <span className="sm:hidden">{t.short}</span>
                <span className="hidden sm:inline">{t.label}</span>
                <span
                  className={cn(
                    "hidden min-w-[1.5rem] rounded-full border px-2 py-0.5 text-[11px] sm:inline-flex sm:text-xs",
                    active
                      ? "border-[#16A34A]/40 bg-[#16A34A]/10 text-[#D1FAE5]"
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
    </div>
  );
}
