"use client";

import { useEffect, useState } from "react";

type Phase = "typing" | "holding" | "deleting";

interface State {
  index: number;
  text: string;
  phase: Phase;
}

/** Types each phrase, pauses, deletes, and moves to the next. */
export function Typewriter({
  phrases,
  typingMs = 55,
  deletingMs = 30,
  holdMs = 1600,
  className,
}: {
  phrases: string[];
  typingMs?: number;
  deletingMs?: number;
  holdMs?: number;
  className?: string;
}) {
  const [state, setState] = useState<State>({ index: 0, text: "", phase: "typing" });

  useEffect(() => {
    if (phrases.length === 0) return;
    let delay = typingMs;
    if (state.phase === "holding") delay = holdMs;
    else if (state.phase === "deleting") delay = deletingMs;

    const t = setTimeout(() => {
      setState((s) => {
        const current = phrases[s.index % phrases.length];
        if (s.phase === "typing") {
          const next = current.slice(0, s.text.length + 1);
          return { ...s, text: next, phase: next === current ? "holding" : "typing" };
        }
        if (s.phase === "holding") return { ...s, phase: "deleting" };
        // deleting
        if (s.text.length <= 1) return { index: (s.index + 1) % phrases.length, text: "", phase: "typing" };
        return { ...s, text: s.text.slice(0, -1) };
      });
    }, delay);

    return () => clearTimeout(t);
  }, [state, phrases, typingMs, deletingMs, holdMs]);

  return (
    <span className={className} aria-live="polite">
      {state.text}
      <span aria-hidden className="ml-0.5 inline-block h-[1em] w-[3px] translate-y-[0.15em] bg-accent animate-blink" />
    </span>
  );
}
