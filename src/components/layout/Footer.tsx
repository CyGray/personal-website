// components/layout/Footer.tsx
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-[#1F2937]">
      <Container className="flex flex-col gap-2 py-10 text-sm text-[#9CA3AF] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Kyle. Built with Next.js.</p>
        <div className="flex gap-4">
          <a className="hover:text-white" href="/projects">
            Projects
          </a>
          <a className="hover:text-white" href="/quote">
            Quote
          </a>
          <a className="hover:text-white" href="/contact">
            Contact
          </a>
        </div>
      </Container>
    </footer>
  );
}
