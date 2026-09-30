@AGENTS.md

# Portfolio project notes
- All site content lives in `src/data/*.json`, typed by `src/types/content.ts`, accessed via `src/lib/content.ts`. Never hard-code content in components.
- Design tokens are CSS variables in `src/app/globals.css`, mapped to Tailwind utilities (bg-card, text-muted, text-accent, ...). Use tokens, not hex.
- Routes are tabs: `/` About, `/resume`, `/projects`, `/contact`. Shared frame is `src/components/layout/Shell.tsx`.
- Server components by default; add "use client" only for hooks / framer-motion.
- `npm run build` and `npm run lint` must pass before deploying to Vercel.
