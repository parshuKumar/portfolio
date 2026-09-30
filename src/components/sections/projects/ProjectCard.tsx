import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/types/content";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Icon } from "@/components/ui/Icon";

/** "Chat with PDF" → "CWP", "Prod-Alert-Sentry" → "PAS" (max 3 letters). */
function initials(title: string): string {
  return title
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

/** CSS-only stand-in for projects without a screenshot. */
function Placeholder({ title }: { title: string }) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center"
      style={{
        backgroundImage: [
          "linear-gradient(135deg, rgb(var(--accent-rgb) / 0.26), rgb(var(--teal-rgb) / 0.12) 60%, transparent 100%)",
          "linear-gradient(color-mix(in srgb, var(--text) 7%, transparent) 1px, transparent 1px)",
          "linear-gradient(90deg, color-mix(in srgb, var(--text) 7%, transparent) 1px, transparent 1px)",
        ].join(", "),
        backgroundSize: "auto, 28px 28px, 28px 28px",
        backgroundPosition: "0 0, -1px -1px, -1px -1px",
      }}
    >
      <span className="absolute -right-6 -top-8 size-40 rounded-full bg-[rgb(var(--accent-rgb)/0.18)] blur-3xl" />
      <span className="relative font-mono text-5xl font-bold tracking-tight text-ink/85 sm:text-6xl">
        {initials(title)}
      </span>
      <span className="absolute bottom-3 left-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-2">
        {title}
      </span>
    </div>
  );
}

const linkCls =
  "inline-flex min-h-11 items-center gap-1.5 rounded-lg px-3 text-[13px] font-semibold text-muted transition hover:bg-accent-soft hover:text-accent";

export function ProjectCard({ project }: { project: Project }) {
  const { title, category, year, featured, image, summary, tags, links } = project;
  const primary = links.live ?? links.github ?? links.npm;

  const media = (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-card">
      <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
        {image ? (
          <Image
            src={image}
            alt={`${title} screenshot`}
            fill
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw"
            className="object-cover object-top"
          />
        ) : (
          <Placeholder title={title} />
        )}
      </div>
    </div>
  );

  return (
    <Card className="flex h-full flex-col">
      {/* Image bleeds to the card edges; the Card's overflow-hidden clips the corners. */}
      <div className="-mx-5 -mt-5 mb-4">
        {primary ? (
          <a
            href={primary}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${title}`}
            className="group block outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent-rgb)/0.5)]"
          >
            {media}
          </a>
        ) : (
          <div className="group">{media}</div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Chip variant="accent">{category}</Chip>
        {featured && <Chip variant="teal">Featured</Chip>}
        <span className="ml-auto font-mono text-xs text-muted-2">{year}</span>
      </div>

      <h4 className="mt-3 text-lg font-bold leading-snug tracking-tight">{title}</h4>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{summary}</p>

      {tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
          {tags.map((t) => (
            <li key={t}>
              <Chip className="px-2 py-1 text-xs">{t}</Chip>
            </li>
          ))}
        </ul>
      )}

      <div className="-mx-3 mt-auto flex flex-wrap items-center gap-0.5 pt-4">
        {links.github && (
          <a href={links.github} target="_blank" rel="noreferrer" className={linkCls}>
            <Icon name="github" className="size-4" />
            GitHub
          </a>
        )}
        {links.live && (
          <a href={links.live} target="_blank" rel="noreferrer" className={linkCls}>
            <ExternalLink className="size-4" aria-hidden="true" />
            Live
          </a>
        )}
        {links.npm && (
          <a href={links.npm} target="_blank" rel="noreferrer" className={linkCls}>
            <Icon name="npm" className="size-4" />
            npm
          </a>
        )}
      </div>
    </Card>
  );
}
