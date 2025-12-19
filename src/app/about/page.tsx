// app/about/page.tsx
import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/lib/data/projects";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About — Kyle",
  description:
    "About Kyle: custom web apps and business tools with clear scope, included design, and an iterative, partner-first process.",
};

export default function AboutPage() {
  const featured =
    projects.find((p) => p.slug === "ops-dashboard") ??
    projects.find((p) => p.status === "completed") ??
    projects[0];

  const principles = [
    {
      title: "Business-first thinking",
      body: "I don’t build for the sake of shipping features. I build what supports your goals — sales, operations, speed, or clarity.",
    },
    {
      title: "Calm, honest communication",
      body: "You’ll always know what’s happening, what’s next, and what decisions actually matter. No jargon required.",
    },
    {
      title: "Iterate without chaos",
      body: "We define a clear first version, ship it, then improve it based on feedback — without losing structure or quality.",
    },
  ];

  const services = [
    {
      title: "Custom web apps & business tools",
      body: "Dashboards, internal tools, and systems that streamline work and reduce manual effort.",
    },
    {
      title: "Portfolio sites & landing pages",
      body: "Clean, modern pages that communicate clearly and convert visitors into leads.",
    },
    {
      title: "Automation & bots",
      body: "Telegram bots and Python automation to connect systems, send alerts, and remove repetitive tasks.",
    },
  ];

  const process = [
    {
      title: "Clarify goals and constraints",
      body: "We align on what success means, what you need now, and what can wait.",
    },
    {
      title: "Scope + design",
      body: "I document the plan and design the flow/UI. You review and approve before heavy development starts.",
    },
    {
      title: "Build and test",
      body: "I implement the product with reliability and clean UX, then test the key flows thoroughly.",
    },
    {
      title: "Review and iterate",
      body: "You give feedback; we refine. Iteration is expected — but it stays structured.",
    },
    {
      title: "Deploy and hand off",
      body: "I get it live, help with hosting/deployment, and provide the basics you need to maintain it.",
    },
  ];

  const faq = [
    {
      q: "Do you include design?",
      a: "Yes. Design is part of the package — I’ll help shape the UI/UX so it feels clear and professional.",
    },
    {
      q: "Do you take small projects?",
      a: "Yes. I work with projects of all sizes — from simple MVPs to more complex custom systems.",
    },
    {
      q: "How do you price projects?",
      a: "I use a quote builder to generate a ballpark range, then follow up to refine scope and confirm a final quote.",
    },
    {
      q: "How do we communicate?",
      a: "Async by default (email / WhatsApp / Telegram / Discord). I’ll work with your preferred channel and keep updates clear.",
    },
    {
      q: "Can you build anything?",
      a: "I focus on custom web apps, PWAs, Flutter mobile apps, and automation/bots. If something is outside my scope, I’ll be honest early and propose options.",
    },
  ];

  const tech = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    Backend: ["Node.js", "Firebase/Firestore", "SQL/NoSQL (project-dependent)"],
    Other: ["Flutter", "Python (automation/bots)"],
  };

  return (
    <main className="py-12 sm:py-16">
      <Container>
        {/* HERO */}
        <section className="pb-10 sm:pb-14">
          <p className="text-sm text-[#9CA3AF]">About</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            I build custom web apps and tools — and I work like a partner, not just a contractor.
          </h1>
          <p className="mt-4 max-w-3xl text-[#9CA3AF]">
            My goal is to help your business ship something useful, clear, and maintainable — with straightforward
            communication and a process that makes progress feel predictable.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/quote">Get a quote</Button>
            <Button href="/projects" variant="secondary">
              View projects
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <Badge>Custom web apps</Badge>
            <Badge variant="muted">Business tools</Badge>
            <Badge variant="muted">Automation</Badge>
          </div>
        </section>

        {/* WHAT I BUILD */}
        <section className="py-10 sm:py-14">
          <div className="mb-6">
            <p className="text-sm text-[#9CA3AF]">What I build</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Projects that solve real business problems
            </h2>
            <p className="mt-3 max-w-2xl text-[#9CA3AF]">
              Here are the categories I focus on most. If you’re unsure, the quote builder will help you scope it out.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <Card key={s.title} className="p-6">
                <h3 className="text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-[#9CA3AF]">{s.body}</p>
              </Card>
            ))}
          </div>

          <p className="mt-6 text-sm text-[#9CA3AF]">
            Game projects shown in my portfolio are personal/experimental and not offered as freelance services.
          </p>
        </section>

        {/* HOW I WORK */}
        <section className="py-10 sm:py-14">
          <div className="mb-6">
            <p className="text-sm text-[#9CA3AF]">Process</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              A simple process that keeps things moving
            </h2>
            <p className="mt-3 max-w-2xl text-[#9CA3AF]">
              You’re involved throughout — but you don’t need to be technical. I’ll translate decisions into plain
              English and keep scope clear.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p, idx) => (
              <Card key={p.title} className="p-6">
                <p className="text-sm text-[#9CA3AF]">Step {idx + 1}</p>
                <h3 className="mt-2 font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-[#9CA3AF]">{p.body}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="py-10 sm:py-14">
          <div className="mb-6">
            <p className="text-sm text-[#9CA3AF]">Working style</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              What working with me feels like
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {principles.map((p) => (
              <Card key={p.title} className="p-6">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-[#9CA3AF]">{p.body}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* PROOF */}
        <section className="py-10 sm:py-14">
          <div className="mb-6">
            <p className="text-sm text-[#9CA3AF]">Proof</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              A quick look at results and feedback
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {/* Featured project */}
            <Card className="p-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{featured?.typeLabel ?? "Featured"}</Badge>
                <Badge variant="muted">{featured?.statusLabel ?? "Project"}</Badge>
              </div>

              <h3 className="mt-3 text-lg font-semibold">{featured?.title ?? "Featured project"}</h3>
              <p className="mt-2 text-sm text-[#9CA3AF]">{featured?.shortDescription ?? ""}</p>

              <div className="mt-4">
                <p className="text-sm font-medium text-white">What mattered</p>
                <p className="mt-2 text-sm text-[#9CA3AF]">
                  The goal wasn’t “more features” — it was clarity and speed. I focused on a clean workflow, fast
                  navigation, and an architecture that’s easy to evolve as requirements change.
                </p>
              </div>

              {featured?.primaryTech?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {featured.primaryTech.slice(0, 5).map((t) => (
                    <Badge key={t} variant="muted">
                      {t}
                    </Badge>
                  ))}
                </div>
              ) : null}

              <div className="mt-5 flex flex-wrap gap-3">
                <Button href={featured ? `/projects/${featured.slug}` : "/projects"} variant="secondary">
                  View details
                </Button>
                <Button href="/quote">Get a quote</Button>
              </div>
            </Card>

            {/* Testimonials removed for now. */}
          </div>
        </section>

        {/* TECH STACK */}
        <section className="py-10 sm:py-14">
          <div className="mb-6">
            <p className="text-sm text-[#9CA3AF]">Tech (kept simple)</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Tools I ship with most often
            </h2>
            <p className="mt-3 max-w-2xl text-[#9CA3AF]">
              I choose tools based on reliability, maintainability, and what fits the project — not trends.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(tech).map(([group, items]) => (
              <Card key={group} className="p-6">
                <h3 className="font-semibold">{group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((x) => (
                    <Badge key={x} variant="muted">
                      {x}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 sm:py-14">
          <div className="mb-6">
            <p className="text-sm text-[#9CA3AF]">FAQ</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Quick answers
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {faq.map((f) => (
              <Card key={f.q} className="p-6">
                <h3 className="font-semibold">{f.q}</h3>
                <p className="mt-2 text-sm text-[#9CA3AF]">{f.a}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-10 sm:py-16">
          <Card className="p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Want to build something?
            </h2>
            <p className="mt-3 max-w-2xl text-[#9CA3AF]">
              Use the quote builder for a fast, structured estimate — I’ll follow up to refine details and recommend the
              best approach for your situation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/quote">Get a quote</Button>
              <Button href="/contact" variant="secondary">
                Contact me
              </Button>
            </div>
          </Card>
        </section>
      </Container>
    </main>
  );
}
