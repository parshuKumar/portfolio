import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

const base =
  "inline-flex h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-bold transition hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60";
const variants = {
  primary: "bg-accent text-accent-ink shadow-[0_10px_30px_rgb(var(--accent-rgb)/0.25)] hover:brightness-105",
  ghost: "border border-line bg-card-2 text-ink hover:border-accent hover:text-accent",
};

export function Button({ href, children, variant = "primary", external, className, type = "button", disabled, onClick }: ButtonProps) {
  const cls = cn(base, variants[variant], className);
  if (href) {
    if (external || href.startsWith("http") || href.startsWith("mailto:")) {
      return (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
