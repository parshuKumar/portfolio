import { highlights } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { Counter } from "@/components/ui/Counter";

/** Four animated stat tiles. */
export function Highlights() {
  return (
    <section aria-label="Highlights">
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {highlights.map((h) => (
          <li key={h.label}>
            <Card tone="deep" className="flex h-full flex-col justify-between gap-3 p-5">
              <Counter
                value={h.value}
                prefix={h.prefix}
                suffix={h.suffix}
                decimals={h.decimals}
                className="text-3xl font-extrabold tracking-tight text-accent tabular-nums sm:text-4xl"
              />
              <span className="text-sm font-semibold leading-snug text-muted">{h.label}</span>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
