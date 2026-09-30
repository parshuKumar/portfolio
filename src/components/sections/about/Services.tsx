import { services } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { SectionTitle } from "@/components/ui/SectionTitle";

/** "What I do" service grid. */
export function Services() {
  return (
    <section aria-labelledby="services-heading">
      <SectionTitle icon="code">
        <span id="services-heading">What I do</span>
      </SectionTitle>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((s) => (
          <li key={s.title}>
            <Card className="h-full">
              <span className="flex size-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Icon name={s.icon} className="size-6" />
              </span>
              <h4 className="mt-4 text-base font-bold leading-snug">{s.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
