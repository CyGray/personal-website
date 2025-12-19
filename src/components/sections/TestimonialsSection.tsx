"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials, avatarInitials } from "@/lib/data/testimonials";
import { Quote, Sparkles, BadgeCheck, ArrowUpRight } from "lucide-react";

export function TestimonialsSection() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const resetTimerRef = useRef<number | null>(null);

  const [reduceMotion, setReduceMotion] = useState(false);
  const [perView, setPerView] = useState(1);
  const [index, setIndex] = useState(0);
  const [disableTransition, setDisableTransition] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(min-width: 640px)");
    const update = () => setPerView(mql.matches ? 3 : 1);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = viewportRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      setViewportWidth(el.getBoundingClientRect().width);
    });
    ro.observe(el);
    setViewportWidth(el.getBoundingClientRect().width);

    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    setDisableTransition(true);
    setIndex(0);
    requestAnimationFrame(() => setDisableTransition(false));
  }, [perView]);

  const baseItems = useMemo(() => {
    // Enough items to look good on desktop (3-up), but still compact.
    return testimonials.slice(0, Math.min(6, testimonials.length));
  }, []);

  const loopItems = useMemo(() => {
    const clones = baseItems.slice(0, Math.min(perView, baseItems.length));
    return [...baseItems, ...clones];
  }, [baseItems, perView]);

  const activeDot = baseItems.length ? index % baseItems.length : 0;

  useEffect(() => {
    if (reduceMotion) return;
    if (baseItems.length <= perView) return;

    const timer = window.setInterval(() => {
      setIndex((i) => i + 1);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [reduceMotion, baseItems.length, perView]);

  useEffect(() => {
    if (index < baseItems.length) return;
    if (disableTransition) return;

    if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current);
    resetTimerRef.current = window.setTimeout(() => {
      setDisableTransition(true);
      setIndex(0);
      requestAnimationFrame(() => setDisableTransition(false));
    }, 520);

    return () => {
      if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current);
    };
  }, [index, baseItems.length, disableTransition]);

  const slideWidth = viewportWidth && perView ? viewportWidth / perView : 0;
  const offsetPx = index * slideWidth;

  const DOT_PX = 10;
  const DOT_GAP_PX = 10;
  const DOT_STEP_PX = DOT_PX + DOT_GAP_PX;
  const DOT_VIEW_COUNT = 5;
  const dotViewportWidthPx =
    DOT_VIEW_COUNT * DOT_PX + Math.max(0, DOT_VIEW_COUNT - 1) * DOT_GAP_PX;
  const dotOffsetPx = dotViewportWidthPx / 2 - DOT_PX / 2 - activeDot * DOT_STEP_PX;

  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <Container>
        <Reveal>
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
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-8 overflow-hidden">
            {/* Dots */}
            {baseItems.length > 1 && (
              <div className="relative z-10 mb-5 flex items-center justify-center">
                <div className="overflow-hidden" style={{ width: dotViewportWidthPx }}>
                  <div
                    className="flex items-center"
                    style={{
                      gap: DOT_GAP_PX,
                      transform: `translate3d(${dotOffsetPx}px, 0, 0)`,
                      transition: disableTransition ? "none" : "transform 520ms cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    {baseItems.map((_, i) => {
                      const active = i === activeDot;
                      return (
                        <button
                          key={i}
                          type="button"
                          aria-label={`Go to testimonial ${i + 1}`}
                          aria-current={active ? "true" : "false"}
                          className={`h-2.5 w-2.5 rounded-full bg-white transition-opacity ${
                            active ? "opacity-80" : "opacity-25 hover:opacity-40"
                          }`}
                          onClick={() => {
                            setDisableTransition(false);
                            setIndex(i);
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            <div ref={viewportRef} className="mx-auto w-full max-w-6xl overflow-hidden">
              <div
                className="flex"
                style={{
                  transform: `translate3d(-${offsetPx}px, 0, 0)`,
                  transition: disableTransition ? "none" : "transform 520ms cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {loopItems.map((t, i) => {
                  const metaPrimary = t.projectType || t.built;
                  const metaSecondary = t.result;
                  const Wrapper: any = t.projectHref ? Link : "div";
                  const wrapperProps = t.projectHref ? { href: t.projectHref } : {};

                  return (
                    <div key={`${t.id}-${i}`} className="w-full flex-none sm:w-1/3 px-0 sm:px-2">
                      <Wrapper
                        {...wrapperProps}
                        className="block h-full focus:outline-none focus:ring-2 focus:ring-[#16A34A]/50"
                      >
                        <Card className="relative flex h-full w-full flex-col overflow-hidden p-5 sm:p-6 transition hover:border-[#16A34A]/30 hover:bg-[#0F172A]">
                          <div
                            className="absolute left-3 top-3 text-5xl font-serif text-white/10 pointer-events-none select-none"
                            aria-hidden="true"
                          >
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
                                {t.projectHref && (
                                  <ArrowUpRight className="h-4 w-4 text-[#9CA3AF]" strokeWidth={1.5} />
                                )}
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
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
