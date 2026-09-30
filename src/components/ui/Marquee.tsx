import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Infinite horizontal scroller. Children are rendered twice so the loop is seamless.
 * Pauses on hover.
 */
export function Marquee({ children, className, speed = "40s" }: { children: ReactNode; className?: string; speed?: string }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
    >
      <div
        className="flex w-max gap-4 animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: speed }}
      >
        <div className="flex shrink-0 gap-4">{children}</div>
        <div className="flex shrink-0 gap-4" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
