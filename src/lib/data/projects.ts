export type ProjectTypeKey = "web-app" | "business-tool" | "ecommerce" | "automation";

export type Project = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  image: string;

  type: ProjectTypeKey;
  typeLabel: string;

  status: "completed" | "in-progress" | "active";
  statusLabel: string;

  techStack: string[];
  primaryTech: string[];

  problem: string;
  solution: string;
  features: string[];
};

export const projects: Project[] = [
    {
        id: "p1",
        slug: "maple-habits",
        title: "Maple",
        shortDescription: "Dark, mobile-first habit tracker PWA with scheduling, streaks, and offline sync.",
        image: "/projects/maple-habits.jpg",
        type: "web-app",
        typeLabel: "Web app",
        status: "completed",
        statusLabel: "Completed",
        techStack: ["Next.js", "TypeScript", "Firebase", "Tailwind", "Framer Motion", "PWA"],
        primaryTech: ["Next.js", "TypeScript", "Firebase"],
        problem: "The client needed a single place to plan habits, track streaks, and stay consistent across devices—even offline—without clunky UIs or data loss.",
        solution: "Built a dark-themed PWA with scheduled habits, scoped edits, completion heatmap, and mobile bottom nav; added offline caching + sync, Google login, and responsive, scrollable bottom-sheet details.",
        features: [
          "Scheduled habits (daily/weekly/monthly/once) with scoped edit/delete and day-of-week targeting",
          "Completion tracking with heatmap, per-day drawer, inline toggles, sounds, and particle feedback",
          "Offline-first caching and queued writes with background sync",
          "Google authentication and installable PWA with service worker & manifest",
          "Mobile bottom navigation, responsive layout, and animated modals/drawers"
        ]
      },      
  {
    id: "p2",
    slug: "custom-ecommerce",
    title: "E-commerce Storefront",
    shortDescription: "Custom storefront with payments, product catalog, and admin tools.",
    image: "/projects/custom-ecommerce.jpg",
    type: "ecommerce",
    typeLabel: "E-commerce",
    status: "in-progress",
    statusLabel: "In progress",
    techStack: ["Next.js", "Stripe", "Postgres", "Tailwind"],
    primaryTech: ["Next.js", "Stripe", "Postgres"],
    problem: "The business needed a conversion-focused storefront and a manageable product workflow.",
    solution: "I built a clean storefront and an admin workflow to keep operations simple.",
    features: ["Payments", "Product management", "Order tracking", "Email receipts"],
  },
  {
    id: "p3",
    slug: "web-app-mvp",
    title: "Web App MVP",
    shortDescription: "MVP for a startup product with iterative delivery and clear scope milestones.",
    image: "/projects/web-app-mvp.jpg",
    type: "web-app",
    typeLabel: "Web app",
    status: "active",
    statusLabel: "Active",
    techStack: ["Next.js", "Node.js", "Firestore"],
    primaryTech: ["Next.js", "Node.js"],
    problem: "A startup needed to validate an idea quickly with a working prototype.",
    solution: "Built the core flow first, then iterated on UX and feature depth.",
    features: ["Core user flow", "Analytics events", "Iteration-friendly architecture"],
  },
  {
    id: "p4",
    slug: "telegram-automation",
    title: "Telegram Automation Bot",
    shortDescription: "Bot to automate alerts and workflows with third-party API integrations.",
    image: "/projects/telegram-automation.jpg",
    type: "automation",
    typeLabel: "Automation",
    status: "completed",
    statusLabel: "Completed",
    techStack: ["Python", "Telegram API", "Webhooks"],
    primaryTech: ["Python", "Telegram"],
    problem: "Manual updates and alerts caused delays and missed actions.",
    solution: "Automated notifications and basic commands to reduce repetitive work.",
    features: ["Alerts", "Commands", "API integration", "Logging"],
  },
];
