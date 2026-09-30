import { impact } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

/** Measurable outcomes from production work. */
export function Impact() {
  return (
    <section aria-labelledby="impact-heading">
      <SectionTitle icon="zap">
        <span id="impact-heading">Impact at work</span>
      </SectionTitle>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {impact.map((m) => (
          <li key={m.title}>
            <Card tone="deep" className="h-full">
              <p className="font-mono text-3xl font-extrabold tracking-tight text-teal tabular-nums">{m.metric}</p>
              <h4 className="mt-3 text-base font-bold leading-snug">{m.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{m.detail}</p>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
