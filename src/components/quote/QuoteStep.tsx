"use client";

// Anti-bombardment constraints:
// - One primary decision per screen
// - 3-5 options max per question with a "Not sure" escape hatch
// - Descriptions hidden behind explicit info toggles (click/tap/focus)
// - Defaults preselected; keep each step light and scannable

import { Dispatch, SetStateAction, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  CalendarClock,
  CheckCircle,
  Cloud,
  CreditCard,
  Flame,
  Globe2,
  HelpCircle,
  Info,
  LayoutDashboard,
  Leaf,
  LineChart,
  Lock,
  Mail,
  MonitorSmartphone,
  PenLine,
  PlugZap,
  Puzzle,
  Rocket,
  Scale,
  Smartphone,
  Sprout,
  Star,
  Target,
  TreePine,
  Upload,
  Wrench,
  Cog,
  Clock,
  FlaskConical,
} from "lucide-react";
import { QuoteRequestDraft } from "@/lib/pricing/priceCalculator";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/TextArea";

type Props = {
  step: number;
  draft: QuoteRequestDraft;
  setDraft: Dispatch<SetStateAction<QuoteRequestDraft>>;
  goNext: () => void;
};

type CardOption<T extends string> = {
  value: T;
  label: string;
  icon: LucideIcon;
  blurb: string;
  details?: string;
};

const cardBase =
  "w-full rounded-xl border border-[#1F2937] bg-[#111827] p-3 text-left transition hover:bg-[#0B1120] focus:outline-none focus:ring-2 focus:ring-[#16A34A]/40";
const selectedClasses = "border-[#16A34A]/70 bg-[#16A34A]/5 shadow-inner shadow-[#16A34A]/10";
const selectedUnsureClasses = "border-[#FBBF24]/70 bg-[#FBBF24]/5 shadow-inner shadow-[#FBBF24]/10";

function SelectableCard<T extends string>({
  option,
  selected,
  detailsOpen,
  onSelect,
  onToggleDetail,
}: {
  option: CardOption<T>;
  selected: boolean;
  detailsOpen: boolean;
  onSelect: () => void;
  onToggleDetail: () => void;
}) {
  const IconComp = option.icon;
  const selectedClass = option.value === "not-sure" ? selectedUnsureClasses : selectedClasses;
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
        if (e.key === "Escape" && detailsOpen) {
          e.stopPropagation();
          onToggleDetail();
        }
      }}
      className={`${cardBase} ${selected ? selectedClass : ""}`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#0F172A] border border-[#1F2937]">
            <IconComp className="h-4 w-4 text-[#D1D5DB]" strokeWidth={1.5} />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-white">{option.label}</span>
              {selected && (
                <span className="rounded-full bg-[#16A34A]/10 px-2 py-[2px] text-xs text-[#16A34A]">Selected</span>
              )}
            </div>
            <p className="text-xs text-[#9CA3AF]">{option.blurb}</p>
          </div>
        </div>
        {option.details && (
          <button
            type="button"
            aria-label={`Details for ${option.label}`}
            className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#1F2937] text-[#9CA3AF] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#16A34A]/40"
            onClick={(e) => {
              e.stopPropagation();
              onToggleDetail();
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape" && detailsOpen) {
                e.stopPropagation();
                onToggleDetail();
              }
            }}
            aria-expanded={detailsOpen}
          >
            <Info className="h-4 w-4" strokeWidth={1.5} />
          </button>
        )}
      </div>
      {detailsOpen && option.details && (
        <div className="mt-3 rounded-lg border border-[#1F2937] bg-[#0F172A] p-3 text-xs text-[#D1D5DB]">
          {option.details}
        </div>
      )}
    </div>
  );
}

export function QuoteStep({ step, draft, setDraft, goNext }: Props) {
  const [openDetail, setOpenDetail] = useState<string | null>(null);
  const [selectedCapabilities, setSelectedCapabilities] = useState<string[]>([]);

  const set = <K extends keyof QuoteRequestDraft>(key: K, value: QuoteRequestDraft[K]) =>
    setDraft((d) => ({ ...d, [key]: value }));

  const setFromString = <K extends keyof QuoteRequestDraft>(key: K) => (value: string) =>
    set(key, value as QuoteRequestDraft[K]);

  const handleDetailsToggle = (value: string) => {
    setOpenDetail((prev) => (prev === value ? null : value));
  };

  const projectOptions: CardOption<QuoteRequestDraft["projectType"]>[] = [
    { value: "web-app", label: "Web app", icon: MonitorSmartphone, blurb: "Dashboards, portals, tools", details: "Internal tools, client portals, SaaS, dashboards." },
    { value: "website", label: "Website", icon: Globe2, blurb: "Marketing / content", details: "Marketing sites, landing pages, docs, portfolios." },
    { value: "mobile-app", label: "Mobile app", icon: Smartphone, blurb: "iOS / Android UI", details: "Hybrid or cross-platform mobile experiences." },
    { value: "automation-bot", label: "Automation", icon: Cog, blurb: "Workflows, bots", details: "Integrations, data sync, and workflow automation." },
    { value: "trading-tool", label: "Trading tool", icon: LineChart, blurb: "Trading or analytics", details: "Market data, trading signals, or execution helpers." },
    { value: "not-sure", label: "Not sure", icon: HelpCircle, blurb: "Recommend the best fit" },
  ];

  const goalOptions: CardOption<QuoteRequestDraft["primaryGoal"]>[] = [
    { value: "customers", label: "Get customers", icon: Target, blurb: "Acquire users or leads", details: "Funnels, onboarding, lead capture, conversion." },
    { value: "product-launch", label: "Launch a product", icon: Rocket, blurb: "Ship an MVP", details: "Validate with an MVP, then iterate after feedback." },
    { value: "internal-tool", label: "Internal tool", icon: Wrench, blurb: "Ops, finance, ops", details: "Automate ops, finance, logistics, or reporting." },
    { value: "experiment-mvp", label: "Experiment / MVP", icon: FlaskConical, blurb: "Test quickly", details: "Rapid prototype to learn before scaling." },
    { value: "not-sure", label: "Not sure", icon: HelpCircle, blurb: "Recommend a goal" },
  ];

  const sizeOptions: CardOption<QuoteRequestDraft["size"]>[] = [
    { value: "small", label: "Small", icon: Sprout, blurb: "1-3 screens/pages", details: "A few core screens or a single landing page." },
    { value: "medium", label: "Medium", icon: Leaf, blurb: "4-7 screens/pages", details: "A handful of key views for an MVP." },
    { value: "large", label: "Large", icon: TreePine, blurb: "8-12 screens/pages", details: "Multiple flows and user roles." },
    { value: "very-large", label: "Very large", icon: Cloud, blurb: "12+ screens/pages", details: "Extensive app with many flows." },
    { value: "not-sure", label: "Not sure", icon: HelpCircle, blurb: "Estimate broadly" },
  ];

  const contentOptions: CardOption<QuoteRequestDraft["contentReadiness"]>[] = [
    { value: "ready", label: "Ready", icon: CheckCircle, blurb: "Copy/assets are ready" },
    { value: "partial", label: "Partial", icon: Puzzle, blurb: "Some content is ready" },
    { value: "need-help", label: "Need help", icon: PenLine, blurb: "I need help with copy/assets" },
    { value: "not-sure", label: "Not sure", icon: HelpCircle, blurb: "Decide together" },
  ];

  const timelineOptions: CardOption<QuoteRequestDraft["timeline"]>[] = [
    { value: "flexible", label: "Flexible", icon: Cloud, blurb: "Timeline can move" },
    { value: "1-2-months", label: "1-2 months", icon: Clock, blurb: "Targeted window" },
    { value: "urgent", label: "Urgent", icon: Flame, blurb: "Need it fast" },
    { value: "not-sure", label: "Not sure", icon: HelpCircle, blurb: "Estimate broadly" },
  ];

  const budgetOptions: CardOption<QuoteRequestDraft["budgetBand"]>[] = [
    { value: "budget", label: "Budget", icon: Target, blurb: "Fixed range" },
    { value: "flexible", label: "Flexible", icon: Scale, blurb: "Flexible for outcomes" },
    { value: "premium", label: "Premium", icon: Star, blurb: "High-touch" },
    { value: "not-sure", label: "Not sure", icon: HelpCircle, blurb: "Estimate broadly" },
  ];

  const capabilityOptions: Array<{
    key: string;
    label: string;
    icon: LucideIcon;
    blurb: string;
    detail: string;
  }> = [
    { key: "login", label: "Login / accounts", icon: Lock, blurb: "Users sign in and manage accounts", detail: "User accounts, roles, and sign-in flows." },
    { key: "admin", label: "Admin dashboard", icon: LayoutDashboard, blurb: "Manage data or users", detail: "Back-office to manage users, content, or orders." },
    { key: "payments", label: "Payments", icon: CreditCard, blurb: "Checkout for goods/services", detail: "Stripe, PayPal, or crypto checkout." },
    { key: "booking", label: "Booking / scheduling", icon: CalendarClock, blurb: "Schedule slots or appointments", detail: "Slots, appointments, confirmations." },
    { key: "email-notifications", label: "Email notifications", icon: Mail, blurb: "Send alerts and receipts", detail: "Transactional emails or alerts." },
    { key: "upload", label: "Upload files", icon: Upload, blurb: "Send images or documents", detail: "Images, docs, or media uploads." },
    { key: "api", label: "Connect to another service / API", icon: PlugZap, blurb: "Sync with third-party tools", detail: "Sync data to third-party APIs." },
    { key: "not-sure", label: "Not sure - recommend defaults", icon: HelpCircle, blurb: "I’ll pick sensible defaults", detail: "I will pick sensible defaults and adjust later." },
  ];

  const applyCapabilities = (key: string) => {
    let next = selectedCapabilities.includes(key) ? selectedCapabilities.filter((k) => k !== key) : [...selectedCapabilities, key];
    if (key === "not-sure") {
      next = ["not-sure"];
    } else {
      next = next.filter((k) => k !== "not-sure");
    }

    setSelectedCapabilities(next);

    setDraft((d) => {
      const integrationKeys = ["payments", "email", "third-party-apis"];
      let integrations = d.integrations.filter((i) => !integrationKeys.includes(i));
      if (next.includes("payments")) integrations = [...integrations, "payments"];
      if (next.includes("email-notifications")) integrations = [...integrations, "email"];
      if (next.includes("api")) integrations = [...integrations, "third-party-apis"];

      const capabilityCount = next.includes("not-sure") ? 0 : next.length;
      let functionality: QuoteRequestDraft["functionality"] = "basic";
      if (capabilityCount >= 3 || next.includes("admin") || next.includes("booking")) {
        functionality = "complex";
      } else if (capabilityCount >= 1) {
        functionality = "app";
      }
      if (next.includes("not-sure")) functionality = "not-sure";

      let dataStorage: QuoteRequestDraft["dataStorage"] = "simple";
      if (capabilityCount >= 3 || next.includes("admin") || next.includes("login") || next.includes("upload")) {
        dataStorage = "moderate";
      }
      if (capabilityCount >= 4 || next.includes("booking")) {
        dataStorage = "complex";
      }
      if (next.includes("not-sure")) dataStorage = "not-sure";

      return {
        ...d,
        functionality,
        dataStorage,
        integrations,
      };
    });
  };

  const isSelectedCapability = (key: string) => selectedCapabilities.includes(key);

  const renderCards = <T extends string>(
    options: CardOption<T>[],
    value: T,
    setter: (v: T) => void,
    autoAdvance?: boolean
  ) => (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((opt) => (
        <SelectableCard
          key={opt.value}
          option={opt}
          selected={value === opt.value}
          detailsOpen={openDetail === opt.value}
          onSelect={() => {
            setter(opt.value);
            if (autoAdvance) {
              goNext();
            }
          }}
          onToggleDetail={() => handleDetailsToggle(opt.value)}
        />
      ))}
    </div>
  );

  // Step 0: What are you building?
  if (step === 0) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">What are you building?</h2>
        <p className="text-sm text-[#9CA3AF]">Pick the closest match.</p>
        {renderCards(projectOptions, draft.projectType, (v) => set("projectType", v), true)}
      </div>
    );
  }

  // Step 1: Goal
  if (step === 1) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">What's the goal?</h2>
        <p className="text-sm text-[#9CA3AF]">Pick the closest match.</p>
        {renderCards(goalOptions, draft.primaryGoal, (v) => set("primaryGoal", v), true)}
      </div>
    );
  }

  // Step 2: Size + content readiness
  if (step === 2) {
    return (
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Rough size</h2>
          <p className="text-sm text-[#9CA3AF]">Estimate the number of main screens/pages.</p>
          {renderCards(sizeOptions, draft.size, (v) => set("size", v))}
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Content readiness</h2>
          <p className="text-sm text-[#9CA3AF]">Copy/images/assets status.</p>
          {renderCards(contentOptions, draft.contentReadiness, (v) => set("contentReadiness", v))}
        </div>
      </div>
    );
  }

  // Step 3: Capabilities
  if (step === 3) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">What should it include?</h2>
        <p className="text-sm text-[#9CA3AF]">Check the capabilities you need.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {capabilityOptions.map((cap) => {
            const active = isSelectedCapability(cap.key);
            const detailsOpen = openDetail === cap.key;
            const CapIcon = cap.icon;
            const capSelectedClass = cap.key === "not-sure" ? selectedUnsureClasses : selectedClasses;
            return (
              <div
                key={cap.key}
                role="button"
                tabIndex={0}
                onClick={() => applyCapabilities(cap.key)}
                className={`${active ? capSelectedClass : "border-[#1F2937]/60 bg-[#0F172A] hover:bg-[#111827]"} ${cardBase} text-left`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    applyCapabilities(cap.key);
                  }
                  if (e.key === "Escape" && detailsOpen) {
                    e.stopPropagation();
                    setOpenDetail(null);
                  }
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#0F172A] border border-[#1F2937]">
                      <CapIcon className="h-4 w-4 text-[#D1D5DB]" strokeWidth={1.5} />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">{cap.label}</span>
                        {active && (
                          <span className="rounded-full bg-[#16A34A]/10 px-2 py-[2px] text-xs text-[#16A34A]">Selected</span>
                        )}
                        {cap.key === "not-sure" && (
                          <span className="rounded-full bg-[#1F2937] px-2 py-[2px] text-[10px] uppercase tracking-wide text-[#9CA3AF]">
                            Safe default
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-[#9CA3AF]">{cap.blurb}</p>
                    </div>
                  </div>
                  {cap.detail && (
                    <span
                      role="button"
                      tabIndex={0}
                      aria-label={`Details for ${cap.label}`}
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#1F2937] text-[#9CA3AF] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#16A34A]/40"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenDetail(detailsOpen ? null : cap.key);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setOpenDetail(detailsOpen ? null : cap.key);
                        }
                        if (e.key === "Escape" && detailsOpen) {
                          e.stopPropagation();
                          setOpenDetail(null);
                        }
                      }}
                      aria-expanded={detailsOpen}
                    >
                      <Info className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                  )}
                </div>
                {detailsOpen && cap.detail && (
                  <div className="mt-3 rounded-lg border border-[#1F2937] bg-[#0F172A] p-3 text-xs text-[#D1D5DB]">
                    {cap.detail}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Step 4: Timeline + budget + contact
  if (step === 4) {
    return (
      <div className="space-y-5">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">When do you need this?</h2>
          <p className="text-sm text-[#9CA3AF]">Choose the closest fit.</p>
          {renderCards(timelineOptions, draft.timeline, (v) => set("timeline", v))}
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Budget comfort</h2>
          <p className="text-sm text-[#9CA3AF]">Helps me suggest the right approach.</p>
          {renderCards(budgetOptions, draft.budgetBand, (v) => set("budgetBand", v))}
          {draft.budgetBand === "budget" && (
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <Input
                type="number"
                label="Min budget (optional)"
                value={draft.budgetMin ?? ""}
                onChange={(e) => {
                  const val = e.target.value;
                  const num = parseInt(val, 10);
                  set("budgetMin", val === "" || Number.isNaN(num) ? undefined : num);
                }}
                placeholder="e.g. 5000"
              />
              <Input
                type="number"
                label="Max budget (optional)"
                value={draft.budgetMax ?? ""}
                onChange={(e) => {
                  const val = e.target.value;
                  const num = parseInt(val, 10);
                  set("budgetMax", val === "" || Number.isNaN(num) ? undefined : num);
                }}
                placeholder="e.g. 10000"
              />
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Contact details</h3>
          <p className="text-sm text-[#9CA3AF]">Share how to reach you.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            label="Name (required)"
            value={draft.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Jane Doe"
          />
          <Input
            type="email"
            label="Email (required if no handle)"
            value={draft.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="you@example.com"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Select
            label="Preferred contact"
            value={draft.preferredContact}
            onChange={(e) => setFromString("preferredContact")(e.target.value)}
            options={[
              { value: "email", label: "Email" },
              { value: "whatsapp", label: "WhatsApp" },
              { value: "telegram", label: "Telegram" },
              { value: "discord", label: "Discord" },
            ]}
          />
          <Input
            label="Handle or phone (required if no email)"
            value={draft.contactHandle}
            onChange={(e) => set("contactHandle", e.target.value)}
            placeholder="@you or +63 900 000 0000"
          />
        </div>

        <Textarea
          label="Anything else? (optional)"
          value={draft.additionalNotes}
          onChange={(e) => set("additionalNotes", e.target.value)}
          placeholder="Links, goals, deadlines, or constraints."
          rows={3}
        />
      </div>
    );
  }

  return null;
}
