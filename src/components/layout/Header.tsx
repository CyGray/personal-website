// components/layout/Header.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";
import { Facebook, Instagram, Linkedin, MessageCircle, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://www.facebook.com/Kyle.Yuan.Uy", label: "Facebook", Icon: Facebook },
  { href: "https://www.instagram.com/kyleyuan.uy/", label: "Instagram", Icon: Instagram },
  { href: "https://discordapp.com/users/890930690340823100", label: "Discord", Icon: MessageCircle },
  { href: "https://www.linkedin.com/in/kyle-yuan-uy/", label: "LinkedIn", Icon: Linkedin },
];

export function Header() {
  const pathname = usePathname() || "";
  const router = useRouter();
  const showQuoteCta = !pathname.startsWith("/quote");
  const isHome = useMemo(() => pathname === "/", [pathname]);

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => setMounted(true), []);

  // Debug: log when mobile menu renders and the class names used
  useEffect(() => {
    if (!mounted) return;
    // Only log in browser
    if (typeof window === "undefined") return;
    console.debug("[Header] Mobile menu state", {
      open,
      navClass: "w-full rounded-2xl border border-[#1F2937] bg-[#0B1120] px-6 py-6 text-4xl font-semibold text-white hover:bg-[#111827]",
      jumpClass: "w-full rounded-2xl border border-[#1F2937] bg-[#0B1120] px-6 py-6 text-4xl text-[#D1D5DB] hover:bg-[#111827]",
      quoteClass: "mt-1 w-full text-4xl font-semibold text-[#16A34A]",
    });
  }, [mounted, open]);

  // Close on route change
  useEffect(() => setOpen(false), [pathname]);

  // Lock scroll
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // ESC to close
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleNavigate = (href: string) => {
    setOpen(false);
    router.push(href);
  };

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
            {navLinks.map((l) => (
              <Link key={l.href} className="hover:text-white" href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-3 text-[#9CA3AF] sm:flex">
            {socials.map(({ href, label, Icon }) => (
              <Link key={href} className="hover:text-white" href={href} aria-label={label} target="_blank">
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>

          {showQuoteCta && (
            <div className="hidden sm:block">
              <Button href="/quote">Get a quote</Button>
            </div>
          )}

          <button
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#1F2937] bg-[#111827] text-white sm:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md sm:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onClick={() => setOpen(false)}
              >
                <motion.button
                  aria-label="Close menu"
                  className="absolute right-4 top-3 h-12 w-12 rounded-xl border border-[#1F2937] bg-[#111827] text-white"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  onClick={() => setOpen(false)}
                >
                  <X className="h-6 w-6" />
                </motion.button>
                <motion.div
                  className="flex w-full max-w-md flex-col items-stretch gap-6 px-12"
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.div
                    className="flex flex-col gap-6"
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={{
                      hidden: {},
                      show: {
                        transition: { staggerChildren: reduceMotion ? 0 : 0.06 },
                      },
                    }}
                  >
                    {navLinks.map((l) => (
                      <motion.button
                        key={l.href}
                        className="w-full rounded-2xl border border-[#1F2937] bg-[#0B1120] px-6 py-6 text-4xl font-semibold text-white hover:bg-[#111827] text-[42px]"
                        variants={{
                          hidden: { opacity: 0, y: reduceMotion ? 0 : 8 },
                          show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] } },
                          exit: { opacity: 0, y: reduceMotion ? 0 : 6, transition: { duration: 0.18, ease: "easeIn" } },
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleNavigate(l.href)}
                      >
                        {l.label}
                      </motion.button>
                    ))}

                    {isHome && (
                      <motion.button
                        className="w-full rounded-2xl border border-[#1F2937] bg-[#0B1120] px-6 py-6 text-4xl text-[#D1D5DB] hover:bg-[#111827] text-[42px]"
                        variants={{
                          hidden: { opacity: 0, y: reduceMotion ? 0 : 8 },
                          show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] } },
                          exit: { opacity: 0, y: reduceMotion ? 0 : 6, transition: { duration: 0.18, ease: "easeIn" } },
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setOpen(false);
                          window.location.hash = "#projects";
                        }}
                      >
                        Jump to Projects
                      </motion.button>
                    )}

                    {showQuoteCta && (
                      <motion.button
                        className="mt-1 w-full text-4xl font-semibold text-[#16A34A] text-[42px]"
                        initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: reduceMotion ? 0 : 6 }}
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1], delay: reduceMotion ? 0 : 0.04 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleNavigate("/quote")}
                      >
                        Get a quote
                      </motion.button>
                    )}
                  </motion.div>

                  <motion.div
                    className="mt-10 flex items-center justify-center gap-3 text-white"
                    initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.98 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {socials.map(({ href, label, Icon }) => (
                      <Link
                        key={href}
                        href={href}
                        aria-label={label}
                        target="_blank"
                        className="p-1"
                        onClick={() => setOpen(false)}
                      >
                        <Icon className="h-6 w-6" />
                      </Link>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
}
