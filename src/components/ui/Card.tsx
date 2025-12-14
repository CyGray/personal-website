import { cn } from "@/lib/utils/cn";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("rounded-2xl border border-[#1F2937] bg-[#0B1120]", className)}>
      {children}
    </div>
  );
}
