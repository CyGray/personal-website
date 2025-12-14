import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

const items = [
  {
    title: "Portfolio websites & landing pages",
    body: "Clean, professional sites that communicate clearly and convert visitors.",
  },
  {
    title: "Custom business & operations tools",
    body: "Dashboards and internal tools that streamline workflows and reduce manual work.",
  },
  {
    title: "E-commerce websites",
    body: "Custom storefronts with payments, integrations, and admin tools.",
  },
  {
    title: "Automation & bots",
    body: "Telegram bots and Python automation for integrations, alerts, and workflows.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <Container>
        <p className="text-sm text-[#9CA3AF]">What I build</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          What I can help you build
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <Card key={it.title} className="p-5">
              <h3 className="text-base font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-[#9CA3AF]">{it.body}</p>
            </Card>
          ))}
        </div>

        <p className="mt-6 text-sm text-[#9CA3AF]">
          Game projects shown in the portfolio are personal/experimental and not offered as freelance services.
        </p>
      </Container>
    </section>
  );
}
