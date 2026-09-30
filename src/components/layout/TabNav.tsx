"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navigation } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Tab bar pinned to the top-right corner of the content card. */
export function TabNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Sections"
      className="absolute inset-x-0 top-0 z-10 flex justify-center rounded-t-card border-b border-line bg-card-2/80 p-2 backdrop-blur sm:inset-x-auto sm:right-0 sm:justify-end sm:rounded-none sm:rounded-bl-2xl sm:rounded-tr-card sm:border-b sm:border-l"
    >
      <ul className="flex w-full justify-around gap-1 sm:w-auto sm:justify-end">
        {navigation.tabs.map((tab) => {
          const active = tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
          return (
            <li key={tab.id} className="relative">
              <Link
                href={tab.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative z-10 block rounded-xl px-3 py-2.5 text-[13px] font-semibold transition-colors sm:px-4 sm:text-sm",
                  active ? "text-accent" : "text-muted hover:text-ink",
                )}
              >
                {tab.label}
              </Link>
              {active && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-xl bg-accent-soft"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
