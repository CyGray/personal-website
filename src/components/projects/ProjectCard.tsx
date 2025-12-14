import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Project } from "@/lib/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="p-5">
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

      <div className="mt-5">
        <Button href={`/projects/${project.slug}`} variant="secondary" className="w-full">
          View details
        </Button>
      </div>
    </Card>
  );
}
