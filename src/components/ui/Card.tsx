import { cn } from "@/lib/utils/cn";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[#1F2937] bg-[#0B1120]",
        "shadow-[0_10px_30px_-20px_rgba(0,0,0,0.75)] transition duration-200 ease-out",
        "hover:-translate-y-1 hover:border-[#16A34A]/30 hover:shadow-[0_18px_45px_-22px_rgba(22,163,74,0.25)]",
        className
      )}
    >
      {children}
    </div>
  );
}
