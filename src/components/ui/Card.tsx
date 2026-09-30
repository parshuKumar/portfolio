"use client";

import type { HTMLAttributes, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Adds the cursor-tracking spotlight and hover lift. Default true. */
  interactive?: boolean;
  /** Use the deeper surface color. */
  tone?: "default" | "deep";
}

/** Base surface used by every section. */
export function Card({ interactive = true, tone = "deep", className, children, ...rest }: CardProps) {
  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (!interactive) return;
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <div
      onMouseMove={onMove}
      className={cn(
        "rounded-2xl border border-line p-5",
        tone === "deep" ? "bg-card-2" : "bg-card",
        interactive && "spotlight transition duration-300 hover:-translate-y-0.5 hover:border-[rgb(var(--accent-rgb)/0.45)]",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
