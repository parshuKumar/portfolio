import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

/** Big page title with the accent underline (one per tab). */
export function PageTitle({ children, subtitle }: { children: ReactNode; subtitle?: string }) {
  return (
    <header className="mb-8">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-[34px]">{children}</h2>
      <span className="mt-3 block h-1.5 w-11 rounded-full bg-accent" />
      {subtitle && <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">{subtitle}</p>}
    </header>
  );
}

/** Sub-section heading, optional icon badge and right-side action slot. */
export function SectionTitle({
  children,
  icon,
  action,
  className,
}: {
  children: ReactNode;
  icon?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-5 flex items-center justify-between gap-4", className)}>
      <h3 className="flex items-center gap-3 text-xl font-bold tracking-tight sm:text-[22px]">
        {icon && (
          <span className="flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
            <Icon name={icon} className="size-5" />
          </span>
        )}
        {children}
      </h3>
      {action}
    </div>
  );
}
