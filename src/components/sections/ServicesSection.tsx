import React from "react";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Briefcase, LayoutGrid, ShoppingBag, Bot, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type Service = {
  title: string;
  body: string;
  icon: React.ComponentType<{ className?: string }>;
  chips?: string[];
  href?: string;
};

const featured: Service = {
  title: "Custom business & ops tools",
  body: "Dashboards and internal tools that streamline work without making life harder for your team.",
  chips: ["Auth & roles", "Dashboards", "Database"],
  icon: LayoutGrid,
  href: "/projects",
};

const items: Service[] = [
  {
    title: "Portfolio websites & landing pages",
    body: "Clear sites that explain what you do and convert visitors.",
    chips: ["SEO", "Fast load"],
    icon: Briefcase,
    href: "/projects",
  },
  {
    title: "E-commerce websites",
    body: "Custom storefronts with payments, admin, and the integrations you need.",
    chips: ["Checkout", "Admin"],
    icon: ShoppingBag,
    href: "/projects",
  },
  {
    title: "Automation & bots",
    body: "Telegram bots and automations for alerts, workflows, and API tasks.",
    chips: ["Alerts", "Workflows"],
    icon: Bot,
    href: "/projects",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <Container>
        {/* Header */}
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex gap-3">
              <span
                aria-hidden="true"
                className="hidden h-16 w-[3px] rounded-full bg-gradient-to-b from-[#16A34A]/60 via-[#16A34A]/20 to-transparent sm:block"
              />
              <div>
                <p className="text-sm text-[#9CA3AF]">What I build</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  What I can help you build
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-[#9CA3AF]">
                  I build software that feels simple to use, even when the logic behind it isn’t.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button href="/projects" variant="secondary">
                See projects
              </Button>
              <Button href="/quote">
                Get a quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Bento grid (Option A) */}
        <div className="mt-10 space-y-4">
          <Reveal>
            <div className="grid gap-4 lg:grid-cols-3">
              <FeaturedCard {...featured} />
            </div>
          </Reveal>
          <div className="grid gap-4 lg:grid-cols-3">
            {items.map((it, idx) => (
              <Reveal key={it.title} delay={100 + idx * 80}>
                <CompactCard {...it} />
              </Reveal>
            ))}
          </div>
        </div>

        <p className="mt-8 text-sm text-[#9CA3AF]">
          Best for teams that want something custom (not a template) and prefer to iterate.
        </p>
      </Container>
    </section>
  );
}

function FeaturedCard({ title, body, chips = [], icon: Icon, href }: Service) {
  return (
    <Card className="group relative overflow-hidden p-5 sm:p-6 lg:col-span-3">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.35] [background:radial-gradient(circle_at_20%_20%,rgba(22,163,74,0.16),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5" />
        <div className="absolute -top-24 left-1/2 h-40 w-[420px] -translate-x-1/2 rounded-full bg-[#16A34A]/10 blur-3xl" />
      </div>

      <div className="relative flex h-full flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-2.5">
              <Icon className="h-5 w-5 text-[#D1D5DB]" />
            </div>
            <div>
              <p className="text-xs text-[#9CA3AF]">Most common starting point</p>
              <h3 className="mt-0.5 text-lg font-semibold tracking-tight sm:text-xl">{title}</h3>
            </div>
          </div>
          <span className="shrink-0 rounded-full border border-[#16A34A]/30 bg-[#16A34A]/10 px-2.5 py-1 text-xs text-[#D1FAE5]">
            Featured
          </span>
        </div>

        <p className="max-w-2xl text-sm leading-relaxed text-[#D1D5DB]">{body}</p>

        {(chips?.length || href) && (
          <div className="flex flex-wrap items-center gap-2">
            {chips?.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[#1F2937] bg-[#0B1120] px-3 py-1 text-xs text-[#D1D5DB]"
              >
                {chip}
              </span>
            ))}
            {/* Hide examples link on small screens to avoid wrapping; only show on sm+ where space allows */}
            {href && (
              <a
                href={href}
                className="hidden w-full text-xs text-[#D1D5DB] underline decoration-[#1F2937] underline-offset-4 hover:decoration-[#16A34A] sm:inline-flex sm:w-auto sm:text-sm sm:ml-auto sm:text-right"
              >
                Examples →
              </a>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}

function CompactCard({ title, body, icon: Icon, href, chips = [] }: Service) {
  return (
    <Card className="group relative overflow-hidden p-5 transition hover:-translate-y-0.5 hover:border-[#16A34A]/20 hover:bg-[#0C1220]">
      <div className="relative flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-2.5">
            <Icon className="h-5 w-5 text-[#D1D5DB]" />
          </div>
          {href && (
            <a
              href={href}
              className="text-xs text-[#9CA3AF] underline decoration-[#1F2937] underline-offset-4 hover:text-[#D1D5DB] hover:decoration-[#16A34A]"
            >
              Examples ?
            </a>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="text-sm text-[#9CA3AF]">{body}</p>
        </div>

        {chips.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {chips.slice(0, 2).map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[#1F2937] bg-[#0B1120] px-3 py-1 text-xs text-[#D1D5DB]"
              >
                {chip}
              </span>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
