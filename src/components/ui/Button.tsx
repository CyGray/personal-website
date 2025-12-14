import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
};

export function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className,
  disabled,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-0 whitespace-nowrap";
  const styles =
    variant === "primary"
      ? "bg-[#16A34A] text-white hover:bg-[#15803D] focus:ring-[#16A34A]/50 disabled:opacity-50"
      : "bg-[#111827] text-white hover:bg-[#0B1120] border border-[#1F2937] disabled:opacity-50";

  if (href) {
    return (
      <Link className={cn(base, styles, className)} href={href} aria-disabled={disabled}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(base, styles, className)}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
