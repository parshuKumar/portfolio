"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, MotionConfig, motion } from "framer-motion";
import { projects } from "@/lib/content";
import { ProjectCard } from "@/components/sections/projects/ProjectCard";
import { cn } from "@/lib/utils";

const ALL = projects.categories[0] ?? "All";

export function ProjectGrid() {
  const [active, setActive] = useState<string>(ALL);

  const filtered = useMemo(
    () => (active === ALL ? projects.items : projects.items.filter((p) => p.category === active)),
    [active],
  );

  return (
    <MotionConfig reducedMotion="user">
      <section aria-labelledby="projects-filter-label">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <LayoutGroup id="project-filters">
            <div
              role="group"
              id="projects-filter-label"
              aria-label="Filter projects by category"
              className="-mx-1 flex flex-wrap gap-1"
            >
              {projects.categories.map((c) => {
                const pressed = c === active;
                return (
                  <button
                    key={c}
                    type="button"
                    aria-pressed={pressed}
                    onClick={() => setActive(c)}
                    className={cn(
                      "relative inline-flex min-h-11 items-center rounded-xl px-4 text-sm font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent-rgb)/0.5)]",
                      pressed ? "text-accent-ink" : "text-muted hover:text-ink",
                    )}
                  >
                    {pressed && (
                      <motion.span
                        layoutId="project-filter-pill"
                        transition={{ type: "spring", stiffness: 500, damping: 40 }}
                        className="absolute inset-0 rounded-xl bg-accent shadow-[0_8px_24px_rgb(var(--accent-rgb)/0.25)]"
                      />
                    )}
                    <span className="relative">{c}</span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
          <p className="shrink-0 font-mono text-xs text-muted-2" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? "project" : "projects"}
          </p>
        </div>

        <motion.ul layout className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((p) => (
              <motion.li
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="min-w-0"
              >
                <ProjectCard project={p} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </section>
    </MotionConfig>
  );
}
