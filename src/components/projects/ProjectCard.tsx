import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Project } from "@/lib/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block focus:outline-none focus:ring-2 focus:ring-[#16A34A]/50 rounded-2xl"
    >
      <Card className="overflow-hidden h-full transition hover:border-[#16A34A]/50 hover:bg-[#0F172A]">
        <div className="aspect-[4/3] w-full overflow-hidden border-b border-[#1F2937] bg-[#0B1120]">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-top transition duration-300 hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
        <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{project.typeLabel}</Badge>
          <Badge variant="muted">{project.statusLabel}</Badge>
        </div>

        <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-[#9CA3AF]">{project.shortDescription}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.primaryTech.slice(0, 4).map((t) => (
            <Badge key={t} variant="muted">
              {t}
            </Badge>
          ))}
        </div>
        </div>
      </Card>
    </Link>
  );
}
