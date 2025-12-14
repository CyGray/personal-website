# Kyle — Portfolio & Quote Builder

A modern, conversion-focused freelance portfolio built with **React (Next.js)** that showcases projects, explains process, and helps potential clients scope their project through an interactive **quote builder**.

This site is designed primarily for **freelance clients** looking to build **custom web apps, business tools, e-commerce sites, or automation**, while also acting as a long-term portfolio and experimentation space.

---

## ✨ Purpose & Goals

### Primary Goals
- Showcase real, production-ready projects
- Clearly communicate what I build and how I work
- Convert visitors into **qualified leads**
- Reduce back-and-forth by collecting structured project requirements
- Provide **ballpark pricing** to set expectations early

### Success Indicators
- Quote builder submissions
- Direct contact messages
- Engagement with project pages
- Repeat visits

---

## 🎯 Target Audience

**Primary**
- Local and international businesses
- Startup founders
- Teams needing custom web apps, internal tools, or automation

**Secondary**
- Hiring managers and recruiters
- Other developers or collaborators

The entire UX and copy are optimized for **non-technical clients** first.

---

## 🧭 Positioning

> I build custom web apps and tools that help businesses run, sell, and scale.

- Focus on **custom web apps and business tools**
- Partner mindset — not just a “coder”
- Comfortable starting small and iterating
- Async-first collaboration
- Clear scope, clear pricing, realistic timelines

Game development projects are shown as **personal/experimental work only** and are **not offered as freelance services**.

---

## 🏗️ Tech Stack

### Frontend
- **React with Next.js (App Router)**
- TypeScript
- Tailwind CSS
- Framer Motion (subtle, purposeful animations)

### Backend / Services
- Firebase Firestore (quote submissions, optional testimonials)
- Next.js Route Handlers for secure writes
- Firebase Analytics (or GA4)

### Hosting
- Vercel

---

## 🗂️ Site Structure

### Routes

/ → Home (summary + conversion)
/projects → Project gallery with filters
/projects/[slug] → Project detail pages
/quote → Quote builder (core feature)
/contact → Contact page

yaml
Copy code

### Home Page Sections (in order)

1. Hero (clear value prop + CTA)
2. What I Build (services framing)
3. Projects Preview
4. Quote Builder Teaser
5. Process
6. Testimonials
7. Final CTA + Contact

---

## 🧩 Component Architecture

app/
layout.tsx
page.tsx
quote/page.tsx
projects/page.tsx
projects/[slug]/page.tsx
contact/page.tsx

components/
layout/
Header.tsx
Footer.tsx

sections/
HeroSection.tsx
ServicesSection.tsx
ProjectsPreviewSection.tsx
QuoteTeaserSection.tsx
ProcessSection.tsx
TestimonialsSection.tsx
FinalCTASection.tsx

quote/
QuoteLayout.tsx
QuoteStepper.tsx
QuoteStep.tsx
QuoteSummary.tsx
QuoteEstimate.tsx

ui/
Button.tsx
Card.tsx
Input.tsx
Select.tsx
Checkbox.tsx
RadioGroup.tsx
Badge.tsx
StepIndicator.tsx

lib/
pricing/
calculator.ts
weights.ts
firebase/
client.ts
admin.ts
analytics/
events.ts

yaml
Copy code

**Rules**
- UI components are dumb and reusable
- Business logic lives in `/lib`
- Sections are composable and isolated
- Quote builder steps are explicit and linear

---

## 🧮 Quote Builder (Core Feature)

### Purpose
- Help clients describe what they want in plain language
- Provide a **ballpark price range**
- Capture high-quality, structured leads

### Flow Overview

1. Project type
2. Primary goal
3. Size & content readiness
4. Design & iteration style
5. Functionality & data
6. Integrations
7. Timeline & budget band (required)
8. Contact details + attachments
9. Summary + estimate
10. Submission confirmation

### UX Principles
- Step-based wizard
- “Not sure yet” available everywhere
- Non-technical language
- Clear disclaimers (estimate ≠ final quote)
- Designed for mobile first

---

## 💰 Pricing Logic (Internal)

- All calculations use **USD internally**
- Final estimate shown as a **range**
- Currency auto-adjusts based on client region
- Region-based multipliers applied invisibly
- Floor price exists internally (not shown publicly)

### Calculation Strategy
- Base price by project type
- Additive costs for size, backend, data, integrations
- Timeline urgency multiplier
- Wider range when uncertainty is high

Clients never see the math — only the result.

---

## 🎨 Design & Visual Rules

### Look & Feel
- Calm, modern, professional
- Dark neutral palette
- Cold, low-saturation accents
- High contrast for readability

### Typography
- One primary font family
- Clear hierarchy
- Generous line-height
- Minimal font weights

### Layout
- Generous vertical spacing
- Max-width content containers
- Cards with soft borders and rounded corners
- Scannable sections (1-second rule)

---

## 🎞️ Motion Guidelines

- Subtle fade + slide entrances
- Hover lift on cards and buttons
- Smooth step transitions in quote builder
- No parallax, no scroll hijacking, no looping animations

Respects `prefers-reduced-motion`.

---

## 🔐 Data & Security

- No authentication required (v1)
- All Firestore writes go through server-side API routes
- Input validation on client and server
- Minimal personal data collected (name, email, project details)

---

## 📊 Analytics

Tracked events include:
- Page views
- Quote started
- Quote submitted
- Contact submitted
- Project viewed

Used strictly to understand engagement and improve UX.

---

## 🚫 Non-Goals (v1)

- Client dashboards or portals
- CMS integration
- Live chat
- Automated contracts or invoicing
- Heavy WebGL / 3D effects
- Multi-language support
- Large blog platform

---

## 🔮 Future Enhancements

- Admin view for quote requests
- Optional CMS for projects/testimonials
- Blog / notes section (MDX)
- Email notifications for submissions
- Calendar booking integration (optional)

---

## 🧠 Philosophy

This site is not just a portfolio.

It is:
- A lead qualification tool
- A UX experiment space
- A long-term personal platform

Every decision prioritizes **clarity, trust, and real-world usefulness** over gimmicks.

---

## 🛠️ Development Notes

- Built with React (Next.js App Router)
- Deployed on Vercel
- Designed to scale without rewrites

---

## 📬 Contact

If you’re interested in working together, use the **quote builder** or contact form on the site.

---

© Kyle. All rights reserved.