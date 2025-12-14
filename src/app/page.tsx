// app/page.tsx
import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsPreviewSection } from "@/components/sections/ProjectsPreviewSection";
import { QuoteTeaserSection } from "@/components/sections/QuoteTeaserSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ProjectsPreviewSection />
      <QuoteTeaserSection />
      <ProcessSection />
      <TestimonialsSection />
      <section id="contact" className="py-16 sm:py-24">
        <Container>
          <FinalCTASection />
        </Container>
      </section>
    </main>
  );
}
