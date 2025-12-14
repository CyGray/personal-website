import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

const steps = [
  "We clarify your goals and constraints",
  "I document the scope and design the solution",
  "You review and approve the plan",
  "I build and test the product",
  "We iterate if needed",
  "I deploy and help you get it live",
];

export function ProcessSection() {
  return (
    <section id="process" className="py-16 sm:py-24">
      <Container>
        <p className="text-sm text-[#9CA3AF]">Process</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">How I work</h2>
        <p className="mt-3 max-w-2xl text-[#9CA3AF]">
          You’re involved throughout — I handle the technical and design decisions.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Card key={s} className="p-5">
              <p className="text-sm text-[#9CA3AF]">Step {i + 1}</p>
              <p className="mt-2 font-medium">{s}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
