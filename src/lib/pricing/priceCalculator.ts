import { pricingConfigUSD } from "./pricingConfig";
import { convertUSDToCurrency, currencyForRegion, multiplierForRegion, Region } from "./region";

export type QuoteRequestDraft = {
  projectType: "website" | "web-app" | "mobile-app" | "automation-bot" | "trading-tool" | "not-sure";
  primaryGoal: "customers" | "internal-tool" | "product-launch" | "experiment-mvp" | "not-sure";
  size: "small" | "medium" | "large" | "very-large" | "not-sure";
  contentReadiness: "ready" | "partial" | "need-help" | "not-sure";
  iterationStyle: "iterate" | "defined" | "not-sure";
  functionality: "static" | "basic" | "app" | "complex" | "not-sure";
  dataStorage: "none" | "simple" | "moderate" | "complex" | "not-sure";
  integrations: string[];
  timeline: "flexible" | "1-2-months" | "urgent" | "not-sure";
  budgetBand: "not-sure" | "budget" | "flexible" | "premium";
  budgetMin?: number;
  budgetMax?: number;

  name: string;
  email: string;
  preferredContact: "email" | "whatsapp" | "telegram" | "discord";
  contactHandle: string;
  additionalNotes: string;

  // for region; you can set from IP later in API
  region: Region;
};

export type EstimateResult = {
  min: number;
  max: number;
  currency: string;
  displayMin: string;
  displayMax: string;
  flags: string[];
};

export function defaultQuoteRequest(): QuoteRequestDraft {
  return {
    projectType: "not-sure",
    primaryGoal: "not-sure",
    size: "not-sure",
    contentReadiness: "not-sure",
    iterationStyle: "not-sure",
    functionality: "not-sure",
    dataStorage: "not-sure",
    integrations: [],
    timeline: "not-sure",
    budgetBand: "not-sure",
    budgetMin: undefined,
    budgetMax: undefined,

    name: "",
    email: "",
    preferredContact: "email",
    contactHandle: "",
    additionalNotes: "",

    region: "PH",
  };
}

export function computeEstimate(d: QuoteRequestDraft): EstimateResult {
  const cfg = pricingConfigUSD;

  const flags: string[] = [];

  const base = cfg.baseByProjectType[d.projectType];
  const size = cfg.sizeAdd[d.size];
  const func = cfg.functionalityAdd[d.functionality];
  const data = cfg.dataAdd[d.dataStorage];

  const integrationCount = d.integrations.filter((x) => x !== "trading").length;
  const tradingCount = d.integrations.filter((x) => x === "trading").length;

  const integ = integrationCount * cfg.integrationAdd.default + tradingCount * cfg.integrationAdd.trading;

  let subtotalUSD = base + size + func + data + integ;

  // Timeline multiplier
  subtotalUSD *= cfg.timelineMultiplier[d.timeline];

  // Not-sure buffer: count uncertain selections
  const unsureCount = [
    d.projectType === "not-sure",
    d.primaryGoal === "not-sure",
    d.size === "not-sure",
    d.contentReadiness === "not-sure",
    d.iterationStyle === "not-sure",
    d.functionality === "not-sure",
    d.dataStorage === "not-sure",
    d.timeline === "not-sure",
    d.budgetBand === "not-sure",
  ].filter(Boolean).length;

  let minUSD = subtotalUSD * cfg.range.min;
  let maxUSD = subtotalUSD * cfg.range.max;

  if (unsureCount >= cfg.uncertainty.threshold) {
    minUSD *= cfg.uncertainty.minMultiplier;
    maxUSD *= cfg.uncertainty.maxMultiplier;
    flags.push("You selected several “Not sure” options — I’ll refine this estimate during follow-up.");
  }

  // Region adjustment
  const currency = currencyForRegion(d.region);
  const regionMult = multiplierForRegion(d.region);
  const adjustedMin = convertUSDToCurrency(minUSD * regionMult, currency);
  const adjustedMax = convertUSDToCurrency(maxUSD * regionMult, currency);

  if (currency !== "USD") {
    flags.push("Estimate is adjusted for your region.");
  }

  const fmt = (n: number) =>
    new Intl.NumberFormat(undefined, {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(Math.max(1, Math.round(n)));

  return {
    min: adjustedMin,
    max: adjustedMax,
    currency,
    displayMin: fmt(adjustedMin),
    displayMax: fmt(adjustedMax),
    flags,
  };
}
