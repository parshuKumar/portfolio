"use client";

import { motion } from "framer-motion";

export function ProgressBar({ label, percent }: { label: string; percent: number }) {
  const p = Math.max(0, Math.min(100, percent));
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-semibold">{label}</span>
        <span className="font-mono text-xs text-muted">{p}%</span>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-[rgba(255,255,255,0.07)]"
        role="progressbar"
        aria-valuenow={p}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${p}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-accent to-[rgb(var(--accent-rgb)/0.6)]"
        />
      </div>
    </div>
  );
}
