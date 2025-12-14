import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function QuoteTeaserSection() {
  return (
    <section id="quote" className="py-16 sm:py-24">
      <Container>
        <Card className="p-6 sm:p-8">
          <p className="text-sm text-[#9CA3AF]">Quote builder</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Not sure where to start?
          </h2>
          <p className="mt-3 max-w-2xl text-[#9CA3AF]">
            Use the quote builder to describe what you need in a few steps. You’ll get a rough price range,
            and I’ll follow up with details.
          </p>

          <ul className="mt-6 grid gap-2 text-sm text-[#D1D5DB] sm:grid-cols-3">
            <li>• Takes ~2–3 minutes</li>
            <li>• No commitment</li>
            <li>• Ballpark estimate</li>
          </ul>

          <div className="mt-7">
            <Button href="/quote">Start your quote</Button>
          </div>
        </Card>
      </Container>
    </section>
  );
}
