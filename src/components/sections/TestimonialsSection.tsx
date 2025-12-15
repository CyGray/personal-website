import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { testimonials, avatarInitials } from "@/lib/data/testimonials";
import { Quote, Sparkles, BadgeCheck, ArrowUpRight } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <Container>
        <div className="flex gap-3">
          <span
            aria-hidden="true"
            className="hidden h-16 w-[3px] rounded-full bg-gradient-to-b from-[#16A34A]/60 via-[#16A34A]/20 to-transparent sm:block"
          />
          <div>
            <p className="text-sm text-[#9CA3AF]">Testimonials</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">What clients say</h2>
            <p className="mt-3 max-w-2xl text-sm text-[#9CA3AF]">
              Notes from recent projects to help you gauge fit and style.
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-4 sm:space-y-6">
          <div className="-mx-4 overflow-x-auto pb-2 sm:mx-0 sm:pb-0">
            <div className="mx-auto grid w-max auto-cols-[minmax(280px,320px)] grid-flow-col justify-center gap-4 sm:auto-cols-[minmax(320px,360px)] snap-x snap-mandatory">
              {testimonials.slice(0, 4).map((t) => {
                const metaPrimary = t.projectType || t.built;
                const metaSecondary = t.result;
                const Wrapper: any = t.projectHref ? Link : "div";
                const wrapperProps = t.projectHref ? { href: t.projectHref } : {};
                return (
                  <Wrapper
                    key={t.id}
                    {...wrapperProps}
                    className="snap-start focus:outline-none focus:ring-2 focus:ring-[#16A34A]/50"
                  >
                    <Card className="relative flex h-full w-[280px] flex-shrink-0 flex-col overflow-hidden p-5 sm:w-[320px] sm:p-6 transition hover:border-[#16A34A]/30 hover:bg-[#0F172A]">
                      <div className="absolute left-3 top-3 text-5xl font-serif text-white/10 pointer-events-none select-none" aria-hidden="true">
                        <Quote className="h-8 w-8" />
                      </div>

                      <div className="flex items-center gap-3">
                        {t.photo ? (
                          <img
                            src={t.photo}
                            alt={t.name}
                            className="h-12 w-12 rounded-full object-cover border border-[#1F2937]"
                            loading="lazy"
                          />
                        ) : (
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F172A] border border-[#1F2937] text-sm font-semibold text-[#D1D5DB]">
                            {avatarInitials(t.name)}
                          </div>
                        )}
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-semibold text-white">{t.name}</p>
                            {t.verified && (
                              <span className="rounded-full bg-[#16A34A]/10 px-2 py-[2px] text-[10px] uppercase tracking-wide text-[#16A34A]">
                                Verified
                              </span>
                            )}
                            {t.projectHref && <ArrowUpRight className="h-4 w-4 text-[#9CA3AF]" strokeWidth={1.5} />}
                          </div>
                          <p className="text-sm text-[#9CA3AF]">
                            {t.title}, {t.company}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex-1">
                        <p className="text-sm leading-relaxed text-[#D1D5DB]">{t.quote}</p>
                      </div>

                      <div className="mt-6 space-y-1 border-t border-[#1F2937] pt-4">
                        <div className="flex items-start gap-2 text-xs text-[#9CA3AF]">
                          <Sparkles className="mt-[2px] h-4 w-4 text-[#D1D5DB]" strokeWidth={1.5} />
                          <span className="leading-snug">
                            {metaPrimary}
                            {t.date ? ` | ${t.date}` : ""}
                          </span>
                        </div>
                        {metaSecondary && (
                          <div className="flex items-start gap-2 text-xs text-[#9CA3AF]">
                            <BadgeCheck className="mt-[2px] h-4 w-4 text-[#16A34A]" strokeWidth={1.5} />
                            <span className="leading-snug">{metaSecondary}</span>
                          </div>
                        )}
                      </div>
                    </Card>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
