export type Region = "PH" | "US" | "OTHER";

export function regionFromCountryCode(countryCode?: string): Region {
  if (!countryCode) return "OTHER";
  const cc = countryCode.toUpperCase();
  if (cc === "PH") return "PH";
  if (cc === "US") return "US";
  return "OTHER";
}

export function currencyForRegion(region: Region) {
  if (region === "PH") return "PHP";
  if (region === "US") return "USD";
  return "USD";
}

// v1: simple multipliers. You can expand per-country later.
export function multiplierForRegion(region: Region) {
  if (region === "PH") return 1.0; // baseline
  if (region === "US") return 2.2; // example
  return 1.6; // example
}

// v1: simple conversion. Replace with real FX later.
export function convertUSDToCurrency(usd: number, currency: string) {
  if (currency === "PHP") return usd * 56; // placeholder FX
  return usd;
}
