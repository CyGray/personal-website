// components/layout/Header.tsx
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#1F2937] bg-[#030712]/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="/" className="font-semibold tracking-tight">
            Kyle
          </a>
          <nav className="hidden items-center gap-4 text-sm text-[#D1D5DB] sm:flex">
            <a className="hover:text-white" href="/projects">
              Projects
            </a>
            <a className="hover:text-white" href="/contact">
              Contact
            </a>
          </nav>
        </div>

        <Button href="/quote">Get a quote</Button>
      </Container>
    </header>
  );
}
