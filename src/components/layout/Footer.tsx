// components/layout/Footer.tsx
import { Container } from "./Container";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#1F2937]">
      <Container className="flex flex-col gap-3 py-10 text-sm text-[#9CA3AF] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Kyle. Built with Next.js.</p>
        <div className="flex flex-wrap items-center gap-4 text-[#9CA3AF]">
          <a className="hover:text-white" href="/projects">
            Projects
          </a>
          <a className="hover:text-white" href="/quote">
            Quote
          </a>
          <a className="hover:text-white" href="/contact">
            Contact
          </a>
          <span className="hidden h-4 w-px bg-[#1F2937] sm:inline-block" aria-hidden="true" />
          <div className="flex items-center gap-3">
            <a className="hover:text-white" href="https://www.facebook.com/Kyle.Yuan.Uy" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a className="hover:text-white" href="https://www.instagram.com/kyleyuan.uy/" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a className="hover:text-white" href="https://discordapp.com/users/890930690340823100" aria-label="Discord">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a className="hover:text-white" href="https://www.linkedin.com/in/kyle-yuan-uy/" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
