import { cn } from "@/lib/utils";

export function Chip({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: "default" | "accent" | "teal";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg px-2.5 py-1.5 text-[13px] font-medium leading-none",
        variant === "default" && "border border-line bg-[rgba(255,255,255,0.04)] text-ink",
        variant === "accent" && "bg-accent-soft font-semibold text-accent",
        variant === "teal" && "bg-[rgb(var(--teal-rgb)/0.14)] font-semibold text-teal",
        className,
      )}
    >
      {children}
    </span>
  );
}
