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
    image: "/projects/maple-habits.png",
    type: "web-app",
    typeLabel: "Web app",
    status: "completed",
    statusLabel: "Completed",
    techStack: ["Next.js", "TypeScript", "Firebase", "Tailwind", "Framer Motion", "PWA"],
    primaryTech: ["Next.js", "TypeScript", "Firebase"],
    problem:
      "The client needed a single place to plan habits, track streaks, and stay consistent across devices without clunky UIs or data loss.",
    solution:
      "Built a dark-themed PWA with scheduled habits, scoped edits, completion heatmap, and mobile bottom nav; added offline caching + sync, Google login, and responsive, scrollable bottom-sheet details.",
    features: [
      "Scheduled habits (daily/weekly/monthly/once) with scoped edit/delete and day-of-week targeting",
      "Completion tracking with heatmap, per-day drawer, inline toggles, sounds, and particle feedback",
      "Offline-first caching and queued writes with background sync",
      "Google authentication and installable PWA with service worker & manifest",
      "Mobile bottom navigation, responsive layout, and animated modals/drawers",
    ],
  },
  {
    id: "mochi",
    slug: "mochi",
    title: "Mochi",
    shortDescription:
      "A cozy, mobile-first language learning and progress tracking app for groups with offline-first study and reliable multi-device sync.",
    image: "/projects/mochi.jpg",
    type: "web-app",
    typeLabel: "Web app",
    status: "active",
    statusLabel: "Active",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Dexie (IndexedDB)",
      "Supabase",
      "FSRS 5.2",
      "Web Workers",
      "PWA (Workbox)",
      "Zustand",
      "PapaParse",
    ],
    primaryTech: ["Next.js", "React", "TypeScript", "Dexie", "Supabase"],
    problem:
      "Most language apps are built for scale or monetization, not for a small, focused routine shared by two people. I needed a durable, offline-capable system that stays fast, consistent across devices, and supports shared daily goals without sync conflicts.",
    solution:
      "Mochi is a local-first web app where IndexedDB is the source of truth and Supabase mirrors changes using a last-write-wins strategy. Study scheduling runs via an FSRS engine in a dedicated worker, while shared goals, streaks, and quotas keep two users aligned without sacrificing offline reliability.",
    features: [
      "Offline-first study with Dexie as the primary data store",
      "FSRS scheduling running in a Web Worker for deterministic reviews",
      "Two-user shared goals with instant streak updates and freezes",
      "Daily learn/review quotas with auto-completion when no cards are due",
      "Remote bootstrap from CSV and safe incremental sync to Supabase",
      "Installable PWA with mobile-first navigation",
      "Global debug HUD for sync, counts, and streak diagnostics",
    ],
  },
  {
    id: "anthony735-portfolio",
    slug: "anthony735",
    title: "Anthony735 Portfolio Website",
    shortDescription:
      "A cinematic, motion-driven portfolio for a video editor with dynamic category pages and admin-managed client/video content.",
    image: "/projects/anthony735.png",
    type: "web-app",
    typeLabel: "Web app",
    status: "active",
    statusLabel: "Active",
    techStack: [
      "Next.js 15 (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
      "Firebase Auth",
      "Firestore",
      "YouTube Data API",
      "Instagram oEmbed",
      "TikTok oEmbed",
    ],
    primaryTech: ["Next.js", "Tailwind CSS", "Firebase", "Framer Motion"],
    problem:
      "Anthony735 needed a high-impact portfolio to showcase video editing work, highlight notable clients, and organize content by category while keeping updates fast and secure without redeploying the site.",
    solution:
      "Built a Next.js portfolio with an animated video hero, dynamic category pages, and a Firebase-backed admin layer that controls site status and content. YouTube, TikTok, and Instagram metadata are pulled on demand, while motion, caching, and responsive layouts keep the experience polished and fast.",
    features: [
      "Full-screen hero with lazy-loaded background video and animated category ticker",
      "Dynamic video category pages with platform-aware layouts (YouTube, Shorts, TikTok, Instagram, playlists)",
      "Firebase Auth admin login with allowlisted accounts",
      "Firestore-driven client carousel and creators grid, with in-app add/edit/delete",
      "Site maintenance toggle stored in Firestore for public/private mode",
      "Client-side caching for creator data with graceful fallback",
      "Responsive navigation and mobile menu overlay",
      "Contact hub with social links and copy-to-clipboard Discord handle",
    ],
  },
  {
    id: "luna-checker-bot",
    slug: "luna-checker-bot",
    title: "Luna Checker (Telegram Fortnite Skin Checker)",
    shortDescription:
      "A Telegram bot that securely checks Fortnite accounts and renders a locker overview with custom, branded visuals. Includes premium-only features like custom logos and gradient usernames.",
    image: "/projects/lunachecker.png",
    type: "automation",
    typeLabel: "Automation",
    status: "active",
    statusLabel: "Active",
    techStack: [
      "Python 3.11",
      "Telebot (Telegram Bot API)",
      "Pillow (PIL)",
      "aiohttp",
      "asyncio",
      "PostgreSQL (async pool)",
      "Fortnite-API",
      "JSON-based user profiles",
    ],
    primaryTech: ["Python", "Telegram Bot API", "PostgreSQL", "Pillow"],
    problem:
      "Players and communities need a fast, trustworthy way to verify Fortnite locker contents without sharing account details manually, plus a way to present results as polished, branded visuals suitable for social and commercial use.",
    solution:
      "A provably-safe Telegram bot that logs in via Epic auth, pulls locker data, aggregates cosmetics with metadata from Fortnite-API, and renders clean, shareable images. It adds caching, exclusives tagging, and premium personalization (logos, gradients) with robust invalidation to keep renders fresh.",
    features: [
      "Telegram-based login and account checking workflow",
      "Locker data aggregation with cosmetics metadata cache (DB + snapshot)",
      "Multi-category render pipeline with custom AXR styling",
      "Exclusive cosmetics tagging and rendering",
      "Premium footer logo support",
      "Premium username gradient selection with preview carousel",
      "Render caching with hash-based invalidation (logo, badge, font, count)",
      "Admin + premium management tools (codes, grant/remove)",
      "Safe file/icon caching to reduce API calls and speed renders",
    ],
  },
];
