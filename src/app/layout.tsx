// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Kyle | Custom Web Apps & Business Tools",
  description:
    "I build custom web apps and tools that help businesses run, sell, and scale. Get a quote in 2–3 minutes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-[#030712] text-[#F9FAFB] antialiased">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
