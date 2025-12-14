// app/projects/[slug]/page.tsx
import { Container } from "@/components/layout/Container";
import { projects } from "@/lib/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const dynamic = "force-static";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <main className="py-12 sm:py-16">
        <Container>
          <h1 className="text-2xl font-semibold">Project not found</h1>
        </Container>
      </main>
    );
  }

  return (
    <main className="py-12 sm:py-16">
      <Container>
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Badge>{project.typeLabel}</Badge>
          <Badge variant="muted">{project.statusLabel}</Badge>
        </div>

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 max-w-2xl text-[#9CA3AF]">{project.shortDescription}</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">Overview</h2>
              <p className="text-[#D1D5DB]">{project.problem}</p>
              <p className="text-[#D1D5DB]">{project.solution}</p>
            </section>

            <section className="mt-8 space-y-3">
              <h2 className="text-xl font-semibold">Key features</h2>
              <ul className="list-inside list-disc space-y-2 text-[#D1D5DB]">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-4 rounded-2xl border border-[#1F2937] bg-[#0B1120] p-5">
            <h3 className="text-lg font-semibold">Tech stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <Badge key={t} variant="muted">
                  {t}
                </Badge>
              ))}
            </div>

            <div className="pt-2">
              <Button href="/quote" className="w-full">
                Build something similar
              </Button>
              <Button href="/projects" variant="secondary" className="mt-2 w-full">
                Back to projects
              </Button>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
