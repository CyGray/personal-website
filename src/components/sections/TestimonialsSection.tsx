import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <Container>
        <p className="text-sm text-[#9CA3AF]">Testimonials</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          What clients say
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {testimonials.slice(0, 4).map((t) => (
            <Card key={t.id} className="p-6">
              <p className="text-sm text-[#D1D5DB]">“{t.quote}”</p>
              <p className="mt-4 text-sm font-medium">{t.name}</p>
              <p className="text-sm text-[#9CA3AF]">{t.roleOrRelation}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
