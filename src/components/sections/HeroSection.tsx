import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { RotatingAccentText } from "@/components/ui/RotatingAccentText";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden py-10 sm:py-14">
      {/* local soft overlay to blend with global bg without blocking content */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030712]/40" />
        <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,white,transparent_70%)] bg-[#0B1120]/30" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col gap-1.5">
          <p className="text-sm text-[#9CA3AF]">Custom Web Apps / Business Tools / E-Commerce Web Apps / Bots</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            I build <RotatingAccentText />
            <br />
            that help businesses run, sell, and scale.
          </h1>
          <p className="mt-4 mb-2 max-w-2xl text-[#9CA3AF]">
            We'll build what matters first, then iterate based on your business, not guesses.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href="/quote">Get a quote</Button>
            <Button href="/projects" variant="secondary">
              View projects
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
