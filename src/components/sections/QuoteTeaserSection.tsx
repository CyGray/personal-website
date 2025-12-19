import React from "react";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, ListChecks, ShieldCheck, Lightbulb } from "lucide-react";

const steps = [
  "What you're building",
  "Goal",
  "Size",
  "Approach",
  "Functionality",
  "Integrations",
  "Timeline",
  "Contact",
];

export function QuoteTeaserSection() {
  return (
    <section id="quote" className="py-12 sm:py-20">
      <Container>
        <Card className="group relative overflow-hidden p-5 sm:p-7">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 opacity-[0.35] [background:radial-gradient(circle_at_20%_15%,rgba(22,163,74,0.16),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.06),transparent_55%)]" />
            <div className="absolute -top-24 left-1/2 h-48 w-[520px] -translate-x-1/2 rounded-full bg-[#16A34A]/10 blur-3xl" />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5" />
          </div>

          <div className="relative grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                <Sparkles className="h-4 w-4" />
                <span>Quote builder</span>
              </div>

              <h2 className="text-2xl font-semibold leading-[1.3] tracking-tight sm:text-[28px]">
                Get a ballpark quote in minutes.
              </h2>

              <p className="max-w-2xl text-[#9CA3AF]">
                Answer a few simple questions. You’ll get a price range and I’ll follow up with a clearer plan.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
                <TrustPill icon={ListChecks} label="2-3 minutes" />
                <TrustPill icon={ShieldCheck} label="No commitment" />
                <div className="hidden sm:block">
                  <TrustPill icon={Sparkles} label="Clear range" />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
                <Button href="/quote">
                  Start your quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <a
                  href="/contact"
                  className="text-sm text-[#D1D5DB] underline decoration-[#1F2937] underline-offset-4 hover:decoration-[#16A34A]"
                >
                  Prefer to message?
                </a>
              </div>

              <p className="hidden sm:flex items-center gap-2 text-xs text-[#9CA3AF]">
                <Lightbulb className="h-4 w-4 text-[#D1D5DB]" />
                <span>You can choose "Not sure yet" on any step and I’ll refine details during follow-up.</span>
              </p>
            </div>

            <div className="lg:hidden">
              <MiniPanel>
                <p className="text-xs text-[#9CA3AF]">Example output</p>

                <p className="mt-1 text-base font-semibold text-white">
                  <span className="text-[#D1FAE5]">$220 - $460</span>{" "}
                  <span className="text-sm font-normal text-[#9CA3AF]">estimated range</span>
                </p>

                <div className="mt-3 flex items-center justify-between text-xs text-[#9CA3AF]">
                  <span>Based on scope + complexity</span>
                  <span className="text-[#D1FAE5]">Floor: $60</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Chip>Web app</Chip>
                  <Chip>MVP</Chip>
                  <Chip>Auth</Chip>
                </div>
              </MiniPanel>
            </div>

            <div className="hidden space-y-3 lg:block">
              <MiniPanel>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white">What you’ll answer</p>
                  <span className="text-xs text-[#9CA3AF]">Step 1 of 8</span>
                </div>

                <div className="mt-3 h-2 w-full rounded-full bg-[#0B1120]">
                  <div className="h-2 w-[12%] rounded-full bg-[#16A34A]" />
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {steps.map((s, i) => (
                    <span
                      key={s}
                      className={[
                        "rounded-full border px-2.5 py-1 text-xs",
                        i === 0
                          ? "border-[#16A34A]/35 bg-[#16A34A]/10 text-[#D1FAE5]"
                          : "border-[#1F2937] bg-[#0B1120] text-[#D1D5DB]",
                      ].join(" ")}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </MiniPanel>

              <MiniPanel>
                <p className="text-xs text-[#9CA3AF]">Example output</p>
                <p className="mt-1 text-sm font-medium text-white">
                  Estimated range: <span className="text-[#D1FAE5]">$220 - $460</span>
                </p>
                <p className="mt-2 text-sm text-[#9CA3AF]">
                  Based on type + size + complexity. Final scope is confirmed with you before anything starts.
                </p>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <MiniStat label="Scope" value="MVP" />
                  <MiniStat label="Speed" value="Fast" />
                  <MiniStat label="UX" value="High" />
                </div>
              </MiniPanel>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}

function TrustPill({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-[#1F2937] bg-[#111827] px-3 py-1.5 text-sm text-[#D1D5DB] sm:py-2">
      <Icon className="h-4 w-4 text-[#9CA3AF]" />
      <span>{label}</span>
    </div>
  );
}

function MiniPanel({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-4">{children}</div>;
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-[#1F2937] bg-[#0B1120] px-3 py-2 text-center">
      <p className="text-[11px] text-[#9CA3AF]">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-[#D1D5DB]">{value}</p>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[#1F2937] bg-[#0B1120] px-2.5 py-1 text-xs text-[#D1D5DB]">
      {children}
    </span>
  );
}
