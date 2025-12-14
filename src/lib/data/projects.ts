export type ProjectTypeKey = "web-app" | "business-tool" | "ecommerce" | "automation";

export type Project = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;

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
    slug: "ops-dashboard",
    title: "Operations Dashboard",
    shortDescription: "Internal tool to track tasks, statuses, and performance with role-based access.",
    type: "business-tool",
    typeLabel: "Business tool",
    status: "completed",
    statusLabel: "Completed",
    techStack: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
    primaryTech: ["Next.js", "TypeScript", "Firebase"],
    problem: "The client needed a single place to manage operational workflows and reduce manual updates.",
    solution: "I designed and built a dashboard with clear workflows, permissions, and fast navigation.",
    features: ["Role-based access", "Status tracking", "Search and filters", "Activity log"],
  },
  {
    id: "p2",
    slug: "custom-ecommerce",
    title: "E-commerce Storefront",
    shortDescription: "Custom storefront with payments, product catalog, and admin tools.",
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
