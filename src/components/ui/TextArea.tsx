import { cn } from "@/lib/utils/cn";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string };

export function Textarea({ label, className, ...props }: Props) {
  return (
    <label className="block space-y-2">
      {label && <span className="text-sm text-[#D1D5DB]">{label}</span>}
      <textarea
        {...props}
        className={cn(
          "w-full rounded-xl border border-[#1F2937] bg-[#111827] px-3 py-2 text-sm text-white outline-none placeholder:text-[#6B7280] focus:border-[#16A34A]/60",
          className
        )}
      />
    </label>
  );
}
