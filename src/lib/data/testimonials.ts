export type Testimonial = {
  id: string;
  name: string;
  title: string;
  company: string;
  photo?: string;
  built: string;
  result?: string;
  quote: string;
  projectHref?: string;
  projectType?: string;
  verified?: boolean;
  date?: string;
};

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Alyssa M.",
    title: "Founder",
    company: "Local Retail Startup",
    built: "Custom Operations Dashboard",
    result: "Reduced manual work across 3 teams",
    quote: "Kyle turned our messy spreadsheets into a clean dashboard we use every day. He shipped quickly and kept us in the loop.",
    projectHref: "/projects/maple-habits",
    projectType: "Web app",
    verified: true,
    date: "Oct 2025",
  },
  {
    id: "t2",
    name: "Jordan R.",
    title: "COO",
    company: "E-commerce Brand",
    built: "E-commerce Storefront + Admin",
    result: "Launched in 4 weeks, improved conversion",
    quote: "We shipped the storefront fast, and the admin tools saved our ops team hours every week. Clear communication throughout.",
    projectHref: "/projects/custom-ecommerce",
    projectType: "E-commerce",
    verified: true,
    date: "Aug 2025",
  },
  {
    id: "t3",
    name: "Priya S.",
    title: "CTO",
    company: "Fintech MVP",
    built: "Trading Analytics MVP",
    result: "Shipped MVP in 3 weeks",
    quote: "Kyle scoped the MVP precisely, delivered on time, and iterated with us without drama. The charts and workflows felt refined from day one.",
    projectHref: "/projects/web-app-mvp",
    projectType: "Web app",
    verified: true,
    date: "Jun 2025",
  },
];

export function avatarInitials(name: string) {
  return initials(name);
}
