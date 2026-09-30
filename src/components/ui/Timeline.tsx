import type { ReactNode } from "react";

/** Vertical timeline with accent dots. Pass `TimelineItem`s as children. */
export function Timeline({ children }: { children: ReactNode }) {
  return <ol className="relative ml-2 border-l border-line pl-7 sm:ml-3">{children}</ol>;
}

export function TimelineItem({
  title,
  subtitle,
  period,
  children,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  period: string;
  children?: ReactNode;
}) {
  return (
    <li className="relative pb-8 last:pb-0">
      <span
        aria-hidden
        className="absolute -left-[35px] top-1.5 size-3.5 rounded-full bg-accent ring-4 ring-accent-soft sm:-left-[36px]"
      />
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h4 className="text-lg font-bold leading-snug">{title}</h4>
        <span className="shrink-0 font-mono text-xs font-semibold text-accent">{period}</span>
      </div>
      {subtitle && <p className="mt-1 text-sm font-semibold text-muted">{subtitle}</p>}
      {children && <div className="mt-3">{children}</div>}
    </li>
  );
}
