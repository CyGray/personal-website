import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTASection() {
  return (
    <div className="rounded-2xl border border-[#1F2937] bg-[#0B1120] p-6 sm:p-8">
      <Reveal>
        <div className="flex gap-3">
          <span
            aria-hidden="true"
            className="hidden h-16 w-[3px] rounded-full bg-gradient-to-b from-[#16A34A]/60 via-[#16A34A]/20 to-transparent sm:block"
          />
          <div>
            <h2 className="text-2xl font-semibold leading-[1.3] tracking-tight sm:text-[28px]">
              Tell me what you would like to build
            </h2>
            <p className="mt-3 max-w-2xl text-[#9CA3AF]">
              Use the quote builder for a structured estimate, or contact me directly if you already know what you need.
            </p>
          </div>
        </div>
      </Reveal>
      <Reveal delay={120}>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/quote">Get a quote</Button>
          <Button href="/contact" variant="secondary">
            Contact me
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
