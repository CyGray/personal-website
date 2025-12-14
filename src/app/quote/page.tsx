// app/quote/page.tsx
import { Container } from "@/components/layout/Container";
import { QuoteLayout } from "@/components/quote/QuoteLayout";

export const dynamic = "force-static";

export default function QuotePage() {
  return (
    <main className="py-12 sm:py-16">
      <Container>
        <QuoteLayout />
      </Container>
    </main>
  );
}
