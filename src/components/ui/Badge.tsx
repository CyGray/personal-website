import { cn } from "@/lib/utils/cn";

export function Badge({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "muted";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs",
        variant === "primary"
          ? "border-[#16A34A]/30 bg-[#16A34A]/10 text-[#D1FAE5]"
          : "border-[#1F2937] bg-[#111827] text-[#D1D5DB]"
      )}
    >
      {children}
    </span>
  );
}
