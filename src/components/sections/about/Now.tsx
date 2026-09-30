import { now } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

/** "Right now" snapshot: building, learning, availability. */
export function Now() {
  return (
    <section aria-labelledby="now-heading">
      <SectionTitle icon="clock">
        <span id="now-heading">Right now</span>
      </SectionTitle>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {now.map((n) => (
          <li key={n.label}>
            <Card className="h-full">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-2">{n.label}</p>
              <h4 className="mt-2 text-base font-bold leading-snug">{n.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{n.detail}</p>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
