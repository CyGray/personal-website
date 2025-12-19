import React from "react";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Compass, FileText, CheckCircle2, Hammer, RefreshCw, Rocket } from "lucide-react";

const phases = [
  {
    title: "Discover",
    outcome: "We clarify your goals, users, and constraints.",
    detail: "10-20 min call or async brief",
    Icon: Compass,
  },
  {
    title: "Plan",
    outcome: "I document scope and design the solution.",
    detail: "Scope + wireframe (or UI draft)",
    Icon: FileText,
  },
  {
    title: "Approve",
    outcome: "You review and approve before I build.",
    detail: "No surprises mid-build",
    Icon: CheckCircle2,
  },
  {
    title: "Build",
    outcome: "I implement, test, and keep you posted.",
    detail: "Frequent updates + demos",
    Icon: Hammer,
  },
  {
    title: "Iterate",
    outcome: "We refine based on feedback and real use.",
    detail: "Polish + fixes + improvements",
    Icon: RefreshCw,
  },
  {
    title: "Launch",
    outcome: "I deploy and help you go live smoothly.",
    detail: "Hosting + handoff support",
    Icon: Rocket,
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="hidden h-16 w-[3px] rounded-full bg-gradient-to-b from-[#16A34A]/60 via-[#16A34A]/20 to-transparent sm:block"
            />
            <div className="max-w-2xl">
              <p className="text-sm text-[#9CA3AF]">Process</p>
              <h2 className="mt-2 text-2xl font-semibold leading-[1.3] tracking-tight sm:text-[28px]">
                How I work
              </h2>
              <p className="mt-3 text-[#9CA3AF]">
                You stay involved. I handle the technical and design decisions and keep things clear from day one.
              </p>
              <p className="mt-2 text-sm text-[#D1D5DB]">Clear scope + clean build + smooth launch.</p>
            </div>
          </div>
        </Reveal>

        <div className="relative mt-8">
          {/* Desktop connector line */}
          <div className="pointer-events-none absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-[#16A34A]/35 via-[#1F2937] to-transparent lg:block" />

          <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {phases.map((p, i) => (
              <Reveal key={p.title} delay={100 + i * 90}>
                <Card className="h-full p-5">
                  <div className="flex h-full flex-col">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#1F2937] bg-[#0B1120]">
                        <p.Icon className="h-5 w-5 text-[#9CA3AF]" />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center justify-between gap-3">
                          <p className="font-semibold text-white">{p.title}</p>
                          <span className="text-xs text-[#9CA3AF]">{String(i + 1).padStart(2, "0")}</span>
                        </div>

                        <p className="mt-2 text-sm text-[#D1D5DB]">{p.outcome}</p>
                      </div>
                    </div>

                    <p className="mt-auto pt-4 text-xs text-[#9CA3AF]">{p.detail}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
