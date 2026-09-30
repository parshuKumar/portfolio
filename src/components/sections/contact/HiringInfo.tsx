import { hiring } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function HiringInfo() {
  return (
    <section aria-labelledby="hiring-info-title">
      <SectionTitle icon="briefcase">
        <span id="hiring-info-title">Hiring info</span>
      </SectionTitle>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {hiring.info.map((item) => (
          <Card key={item.label} className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Icon name={item.icon} className="size-5" />
            </span>
            <div className="min-w-0">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-2">{item.label}</p>
              <p className="mt-1 text-[15px] font-bold leading-snug text-ink">{item.value}</p>
            </div>
          </Card>
        ))}
      </div>

      <Card
        tone="default"
        className="mt-4 border-[rgb(var(--accent-rgb)/0.35)] bg-[linear-gradient(135deg,rgb(var(--accent-rgb)/0.14),transparent_60%)] p-6 sm:p-7"
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h4 className="text-lg font-bold tracking-tight sm:text-xl">{hiring.freelance.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">{hiring.freelance.detail}</p>
          </div>
          <Button href="#contact-form" className="shrink-0">
            {hiring.freelance.cta}
          </Button>
        </div>
      </Card>
    </section>
  );
}
