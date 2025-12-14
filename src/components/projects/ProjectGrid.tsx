"use client";

import { useMemo, useState } from "react";
import { projects, ProjectTypeKey } from "@/lib/data/projects";
import { ProjectFilterBar } from "./ProjectFilterBar";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid({ mode }: { mode: "preview" | "full" }) {
  const [filter, setFilter] = useState<ProjectTypeKey | "all">("all");

  const list = useMemo(() => {
    const base = mode === "preview" ? projects.slice(0, 6) : projects;
    if (filter === "all") return base;
    return base.filter((p) => p.type === filter);
  }, [filter, mode]);

  return (
    <div className="space-y-5">
      <ProjectFilterBar value={filter} onChange={setFilter} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}
