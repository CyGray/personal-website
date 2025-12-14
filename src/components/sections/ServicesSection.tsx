import React from "react";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Briefcase, LayoutGrid, ShoppingBag, Bot, ArrowRight } from "lucide-react";

type Service = {
  title: string;
  body: string;
  bestFor: string;
  typical: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
};

const featured: Service = {
  title: "Custom business & operations tools",
  body: "Dashboards and internal tools that streamline workflows and reduce manual work without making things complicated for your team.",
  bestFor: "Best for: internal systems, admin dashboards, role-based tools",
  typical: "Typical: auth + dashboard + database + reporting",
  icon: LayoutGrid,
  href: "/projects",
};

const items: Service[] = [
  {
    title: "Portfolio websites & landing pages",
    body: "Clean, professional sites that communicate clearly and convert visitors.",
    bestFor: "Best for: personal brands, agencies, local businesses",
    typical: "Typical: 1–5 pages + SEO + fast load",
    icon: Briefcase,
    href: "/projects",
  },
  {
    title: "E-commerce websites",
    body: "Custom storefronts with payments, integrations, and admin tools.",
    bestFor: "Best for: selling products/services online",
    typical: "Typical: catalog + checkout + admin",
    icon: ShoppingBag,
    href: "/projects",
  },
  {
    title: "Automation & bots",
    body: "Telegram bots and Python automation for integrations, alerts, and workflows.",
    bestFor: "Best for: alerts, workflows, integrations",
    typical: "Typical: commands + notifications + APIs",
    icon: Bot,
    href: "/projects",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-[#9CA3AF]">What I build</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              What I can help you build
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-[#9CA3AF]">
              I like building things that feel simple to use even when the logic behind them isn’t.
            </p>
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

        {/* Bento grid (Option A) */}
        <div className="mt-10 grid gap-4 lg:grid-cols-12 items-start">
          {/* Featured card spans same height as the stacked cards */}
          <BentoFeaturedCard {...featured} />

          {/* Supporting cards: force 3 clear rows on desktop */}
          <div className="grid gap-4 lg:col-span-5 lg:grid-rows-3">
            {items.map((it) => (
              <BentoCard key={it.title} {...it} />
            ))}
          </div>
        </div>

        {/* Game disclaimer */}
        <div className="mt-8 rounded-2xl border border-[#1F2937] bg-[#0B1120] p-4 text-sm text-[#9CA3AF]">
          <span className="text-[#D1D5DB]">Note:</span>{" "}
          Game projects shown in the portfolio are personal/experimental and not offered as freelance services.
        </div>
      </Container>
    </section>
  );
}

function BentoFeaturedCard({ title, body, bestFor, typical, icon: Icon, href }: Service) {
  const deliverables = [
    "User authentication & roles",
    "Admin dashboard",
    "Database & data modeling",
    "API integrations",
    "Responsive UI",
    "Deployment & hosting setup",
  ];

  const bestForText = bestFor.replace("Best for: ", "");
  const typicalText = typical.replace("Typical: ", "");

  return (
    <Card className="group relative overflow-hidden p-5 sm:p-6 lg:col-span-7 lg:row-span-3">
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.35] [background:radial-gradient(circle_at_20%_20%,rgba(22,163,74,0.16),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5" />
        <div className="absolute -top-24 left-1/2 h-48 w-[520px] -translate-x-1/2 rounded-full bg-[#16A34A]/10 blur-3xl" />
      </div>

      <div className="relative flex h-full flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-2.5">
              <Icon className="h-5 w-5 text-[#D1D5DB]" />
            </div>
            <div>
              <p className="text-xs text-[#9CA3AF]">Most common starting point</p>
              <h3 className="mt-0.5 text-lg font-semibold tracking-tight sm:text-xl">
                {title}
              </h3>
            </div>
          </div>

          <span className="shrink-0 rounded-full border border-[#16A34A]/30 bg-[#16A34A]/10 px-2.5 py-1 text-xs text-[#D1FAE5]">
            Featured
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#D1D5DB]">
          {body}
        </p>

        {/* Info blocks */}
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <InfoBlock label="Best for" value={bestForText} />
          <InfoBlock label="Typical" value={typicalText} />
        </div>

        {/* Deliverables */}
        <div className="mt-5">
          <p className="text-xs text-[#9CA3AF]">Common features</p>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {deliverables.map((d) => (
              <div
                key={d}
                className="rounded-xl border border-[#1F2937] bg-[#0B1120] px-3 py-2 text-xs text-[#D1D5DB]"
              >
                {d}
              </div>
            ))}
          </div>
        </div>

        {/* Fit & process */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-4">
            <p className="text-xs text-[#9CA3AF]">Good fit if</p>
            <ul className="mt-2 space-y-1 text-sm text-[#D1D5DB]">
              <li>• You want to start simple and iterate</li>
              <li>• You value clarity over buzzwords</li>
              <li>• You need something custom, not a template</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-4">
            <p className="text-xs text-[#9CA3AF]">How it usually goes</p>
            <p className="mt-2 text-sm text-[#D1D5DB]">
              Clarify → Design → Build → Iterate → Launch
            </p>
            <p className="mt-2 text-xs text-[#9CA3AF]">
              I stay involved after launch for fixes and improvements.
            </p>
          </div>
        </div>

        {/* Typical outcome (fills the remaining space with meaning) */}
        <div className="mt-5 rounded-2xl border border-[#1F2937] bg-[#0B1120] p-4">
          <p className="text-xs text-[#9CA3AF]">Typical outcome</p>
          <p className="mt-2 text-sm text-[#D1D5DB]">
            A tool your team actually uses: faster workflows, fewer errors, and clearer visibility
            with room to improve features over time.
          </p>
        </div>

        {/* Push CTA area to the bottom for a tidy “card footer” */}
        <div className="mt-auto pt-5">
          <div className="flex flex-wrap items-center gap-3">
            <Button href="/quote">
              Start a quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            {href && (
              <a
                href={href}
                className="text-sm text-[#D1D5DB] underline decoration-[#1F2937] underline-offset-4 hover:decoration-[#16A34A]"
              >
                See examples →
              </a>
            )}
          </div>

          <p className="mt-3 text-xs text-[#9CA3AF]">
            You’ll get a ballpark estimate first, then I’ll refine the plan with you in follow-up.
          </p>
        </div>
      </div>
    </Card>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#1F2937] bg-[#111827] px-4 py-3">
      <p className="text-xs text-[#9CA3AF]">{label}</p>
      <p className="mt-1 text-sm text-[#D1D5DB]">{value}</p>
    </div>
  );
}

function BentoCard({ title, body, bestFor, typical, icon: Icon, href }: Service) {
  return (
    <Card className="group relative overflow-hidden p-5">
      {/* subtle hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-48 w-48 rounded-full bg-[#16A34A]/10 blur-2xl" />
        <div className="absolute -right-24 -bottom-24 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
      </div>

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-3">
            <Icon className="h-5 w-5 text-[#D1D5DB]" />
          </div>

          {href && (
            <a
              href={href}
              className="text-xs text-[#9CA3AF] underline decoration-[#1F2937] underline-offset-4 hover:text-[#D1D5DB] hover:decoration-[#16A34A]"
            >
              Examples →
            </a>
          )}
        </div>

        <h3 className="mt-4 text-base font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-[#9CA3AF]">{body}</p>

        <div className="mt-4 space-y-2 text-sm">
          <p className="text-[#D1D5DB]">{bestFor}</p>
          <p className="text-[#9CA3AF]">{typical}</p>
        </div>
      </div>
    </Card>
  );
}
