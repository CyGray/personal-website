import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section id="hero" className="py-16 sm:py-24">
      <Container>
        <p className="text-sm text-[#9CA3AF]">Custom web apps • business tools • e-commerce • automation</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          I build custom web apps and tools that help businesses run, sell, and scale.
        </h1>
        <p className="mt-4 max-w-2xl text-[#9CA3AF]">
          From simple MVPs to more complex systems — with clear scope, clear pricing, and room to iterate.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/quote">Get a quote</Button>
          <Button href="/projects" variant="secondary">
            View projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
