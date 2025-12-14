"use client";

import { Dispatch, SetStateAction } from "react";
import { QuoteRequestDraft } from "@/lib/pricing/priceCalculator";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/TextArea";
import { Select } from "@/components/ui/Select";

type Props = {
  step: number;
  draft: QuoteRequestDraft;
  setDraft: Dispatch<SetStateAction<QuoteRequestDraft>>;
};

export function QuoteStep({ step, draft, setDraft }: Props) {
  const set = <K extends keyof QuoteRequestDraft>(key: K, value: QuoteRequestDraft[K]) =>
    setDraft((d) => ({ ...d, [key]: value }));

  const setFromString = <K extends keyof QuoteRequestDraft>(key: K) => (value: string) =>
    set(key, value as QuoteRequestDraft[K]);

  const toggleIntegration = (key: string) => {
    setDraft((d) => {
      const exists = d.integrations.includes(key);
      return {
        ...d,
        integrations: exists ? d.integrations.filter((x) => x !== key) : [...d.integrations, key],
      };
    });
  };

  if (step === 0) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">What are you building?</h2>
        <RadioGroup
          value={draft.projectType}
          onChange={setFromString("projectType")}
          options={[
            { value: "website", label: "Website" },
            { value: "web-app", label: "Web app" },
            { value: "mobile-app", label: "Mobile app" },
            { value: "automation-bot", label: "Automation / bot" },
            { value: "trading-tool", label: "Trading tool" },
            { value: "not-sure", label: "Not sure yet" },
          ]}
        />
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">What is the main goal of this project?</h2>
        <RadioGroup
          value={draft.primaryGoal}
          onChange={setFromString("primaryGoal")}
          options={[
            { value: "customers", label: "Get customers" },
            { value: "internal-tool", label: "Internal business tool" },
            { value: "product-launch", label: "Launch a product" },
            { value: "experiment-mvp", label: "Experiment / MVP" },
            { value: "not-sure", label: "Not sure yet" },
          ]}
        />
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Roughly how big is this project?</h2>
          <RadioGroup
            value={draft.size}
            onChange={setFromString("size")}
            options={[
              { value: "small", label: "Small (1-3 pages/screens)" },
              { value: "medium", label: "Medium (4-7 pages/screens)" },
              { value: "large", label: "Large (8-12 pages/screens)" },
              { value: "very-large", label: "Very large (12+ pages/screens)" },
              { value: "not-sure", label: "Not sure yet" },
            ]}
            hint="Pages/screens are main views - modals and popups don't count."
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Is your content ready?</h2>
          <RadioGroup
            value={draft.contentReadiness}
            onChange={setFromString("contentReadiness")}
            options={[
              { value: "ready", label: "Yes, everything is ready" },
              { value: "partial", label: "Some content is ready" },
              { value: "need-help", label: "No, I need help with this" },
              { value: "not-sure", label: "Not sure yet" },
            ]}
            hint="Content = text, images, products/services info, branding assets, etc."
          />
        </div>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">How would you like to approach the build?</h2>
        <RadioGroup
          value={draft.iterationStyle}
          onChange={setFromString("iterationStyle")}
          options={[
            {
              value: "iterate",
              label: "Start simple and improve over time",
              description: "Launch quickly, then refine based on feedback",
            },
            {
              value: "defined",
              label: "Everything defined upfront",
              description: "You already have a detailed list of requirements",
            },
            { value: "not-sure", label: "Not sure yet" },
          ]}
          hint="Design is included as part of the process."
        />
      </div>
    );
  }

  if (step === 4) {
    return (
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Will this need behind-the-scenes functionality?</h2>
          <RadioGroup
            value={draft.functionality}
            onChange={setFromString("functionality")}
            options={[
              { value: "static", label: "No - mostly static content" },
              {
                value: "basic",
                label: "Yes - basic functionality",
                description: "Forms, simple logic, basic integrations",
              },
              {
                value: "app",
                label: "Yes - app-level features",
                description: "User accounts, dashboards, business logic",
              },
              {
                value: "complex",
                label: "Yes - complex workflows",
                description: "Multiple roles, advanced rules",
              },
              { value: "not-sure", label: "Not sure yet" },
            ]}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Will this need to store data?</h2>
          <RadioGroup
            value={draft.dataStorage}
            onChange={setFromString("dataStorage")}
            options={[
              { value: "none", label: "No data storage" },
              { value: "simple", label: "Simple data", description: "Contact forms, basic records" },
              { value: "moderate", label: "Moderate data", description: "Users, products, transactions" },
              { value: "complex", label: "Complex data", description: "Large datasets, reporting" },
              { value: "not-sure", label: "Not sure yet" },
            ]}
          />
        </div>
      </div>
    );
  }

  if (step === 5) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Will this need any integrations?</h2>
        <div className="space-y-2">
          {[
            { key: "auth", label: "User authentication" },
            { key: "payments", label: "Payments (fiat or crypto)" },
            { key: "email", label: "Email" },
            { key: "third-party-apis", label: "Third-party APIs" },
            { key: "trading", label: "Trading integrations" },
            { key: "other", label: "Other / not sure" },
          ].map((opt) => (
            <Checkbox
              key={opt.key}
              checked={draft.integrations.includes(opt.key)}
              onChange={() => toggleIntegration(opt.key)}
              label={opt.label}
            />
          ))}
        </div>
      </div>
    );
  }

  if (step === 6) {
    return (
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">How soon do you want this done?</h2>
          <RadioGroup
            value={draft.timeline}
            onChange={setFromString("timeline")}
            options={[
              { value: "flexible", label: "Flexible" },
              { value: "1-2-months", label: "1-2 months" },
              { value: "urgent", label: "Urgent" },
              { value: "not-sure", label: "Not sure yet" },
            ]}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">What best describes your budget?</h2>
          <RadioGroup
            value={draft.budgetBand}
            onChange={setFromString("budgetBand")}
            options={[
              { value: "budget", label: "I have a set budget" },
              { value: "flexible", label: "Flexible for the right outcome" },
              { value: "premium", label: "Premium / high-touch" },
              { value: "not-sure", label: "Not sure yet" },
            ]}
            hint="Use the estimate as a starting point; we can adjust after we chat."
          />
        </div>
      </div>
    );
  }

  if (step === 7) {
    return (
      <div className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            label="Name"
            value={draft.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Jane Doe"
          />
          <Input
            type="email"
            label="Email"
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
            label="Handle or number"
            value={draft.contactHandle}
            onChange={(e) => set("contactHandle", e.target.value)}
            placeholder="@you or +63 900 000 0000"
            hint="Include country code if you prefer WhatsApp."
          />
        </div>

        <Textarea
          label="Anything else to share?"
          value={draft.additionalNotes}
          onChange={(e) => set("additionalNotes", e.target.value)}
          placeholder="Links, goals, deadlines, tech stack, or other context."
          rows={4}
        />
      </div>
    );
  }

  return null;
}
