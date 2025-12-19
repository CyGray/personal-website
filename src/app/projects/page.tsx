// app/projects/page.tsx
import { Container } from "@/components/layout/Container";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export const dynamic = "force-static";

export default function ProjectsPage() {
  return (
    <main className="py-12 sm:py-16">
      <Container>
        <div className="mb-8">
          <p className="text-sm text-[#9CA3AF]">Projects</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Work & case studies
          </h1>
          <p className="mt-3 max-w-2xl text-[#9CA3AF]">
            A focused selection of projects across web apps, business tools, and automation.
          </p>
        </div>

        <ProjectGrid mode="full" />
      </Container>
    </main>
  );
}
