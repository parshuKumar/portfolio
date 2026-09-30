import { recommendations } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

/** Quote cards. Placeholder entries render dashed and muted until replaced. */
export function Recommendations() {
  return (
    <section aria-labelledby="recs-heading">
      <SectionTitle icon="quote">
        <span id="recs-heading">Recommendations</span>
      </SectionTitle>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {recommendations.map((r) => (
          <li key={`${r.name}-${r.role}`}>
            <Card
              interactive={!r.placeholder}
              className={cn("flex h-full flex-col", r.placeholder && "border-dashed border-line-strong bg-transparent text-muted-2")}
            >
              <Icon name="quote" className={cn("size-7", r.placeholder ? "text-muted-2" : "text-accent")} />
              <blockquote className={cn("mt-4 flex-1 text-[15px] leading-relaxed", r.placeholder ? "italic text-muted-2" : "text-ink")}>
                {r.quote}
              </blockquote>
              <figure className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                <span
                  className={cn(
                    "flex size-11 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold",
                    r.placeholder ? "border border-dashed border-line-strong text-muted-2" : "bg-accent-soft text-accent",
                  )}
                  aria-hidden="true"
                >
                  {r.initials}
                </span>
                <figcaption className="min-w-0">
                  <h4 className={cn("text-sm font-bold leading-snug", r.placeholder ? "text-muted" : "text-ink")}>{r.name}</h4>
                  <p className="text-xs text-muted-2">{r.role}</p>
                </figcaption>
              </figure>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
