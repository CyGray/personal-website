import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectsPreviewSection() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex gap-3">
              <span
                aria-hidden="true"
                className="hidden h-16 w-[3px] rounded-full bg-gradient-to-b from-[#16A34A]/60 via-[#16A34A]/20 to-transparent sm:block"
              />
              <div>
                <p className="text-sm text-[#9CA3AF]">Projects</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Proof, not promises
                </h2>
                <p className="mt-3 max-w-2xl text-[#9CA3AF]">
                  Browse a few examples, then use the quote builder if you want something similar.
                </p>
              </div>
            </div>
            <Button href="/projects" variant="secondary">
              View all projects
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8">
            <ProjectGrid mode="preview" />
          </div>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-8">
            <Button href="/quote">Seen enough? Get a quote</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
