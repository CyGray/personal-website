// components/layout/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

export function Header() {
  const pathname = usePathname() || "";
  const showQuoteCta = !pathname.startsWith("/quote");

  return (
    <header className="sticky top-0 z-40 border-b border-[#1F2937] bg-[#030712]/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-white">
            <Image
              src="/logo.png"
              alt="Kyle Uy logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg object-contain"
              priority
            />
            <span>Kyle Uy</span>
          </Link>
          <nav className="hidden items-center gap-4 text-sm text-[#D1D5DB] sm:flex">
            <Link className="hover:text-white" href="/projects">
              Projects
            </Link>
            <Link className="hover:text-white" href="/contact">
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-3 text-[#9CA3AF] sm:flex">
            <Link className="hover:text-white" href="https://www.facebook.com/Kyle.Yuan.Uy" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link className="hover:text-white" href="https://www.instagram.com/kyleyuan.uy/" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link className="hover:text-white" href="https://discordapp.com/users/890930690340823100" aria-label="Discord">
              <MessageCircle className="h-4 w-4" />
            </Link>
            <Link className="hover:text-white" href="https://www.linkedin.com/in/kyle-yuan-uy/" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>

          {showQuoteCta && <Button href="/quote">Get a quote</Button>}
        </div>
      </Container>
    </header>
  );
}
