export const pricingConfigUSD = {
    baseByProjectType: {
      website: 60,
      "web-app": 120,
      "mobile-app": 150,
      "automation-bot": 100,
      "trading-tool": 180,
      "not-sure": 140,
    },
    sizeAdd: {
      small: 0,
      medium: 60,
      large: 120,
      "very-large": 200,
      "not-sure": 100,
    },
    functionalityAdd: {
      static: 0,
      basic: 40,
      app: 100,
      complex: 180,
      "not-sure": 120,
    },
    dataAdd: {
      none: 0,
      simple: 30,
      moderate: 80,
      complex: 150,
      "not-sure": 100,
    },
    integrationAdd: {
      default: 40,
      trading: 80,
    },
    timelineMultiplier: {
      flexible: 1.0,
      "1-2-months": 1.15,
      urgent: 1.3,
      "not-sure": 1.1,
    },
    range: {
      min: 0.85,
      max: 1.35,
    },
    uncertainty: {
      threshold: 3,
      minMultiplier: 0.9,
      maxMultiplier: 1.5,
    },
  };
  