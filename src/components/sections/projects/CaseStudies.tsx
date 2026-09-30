import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { SectionTitle } from "@/components/ui/SectionTitle";

function Para({ label, text }: { label: string; text: string }) {
  return (
    <p className="text-sm leading-relaxed text-muted">
      <span className="font-bold text-ink">{label}. </span>
      {text}
    </p>
  );
}

export function CaseStudies() {
  if (caseStudies.length === 0) return null;

  return (
    <section aria-labelledby="case-studies-title">
      <SectionTitle icon="briefcase">
        <span id="case-studies-title">From my job</span>
      </SectionTitle>

      <div className="grid grid-cols-1 gap-5">
        {caseStudies.map((cs) => (
          <Card key={cs.slug} className="p-6 sm:p-7">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">{cs.label}</p>
            <h4 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">{cs.title}</h4>

            <div className="mt-5 space-y-3">
              <Para label="Problem" text={cs.problem} />
              <Para label="Approach" text={cs.approach} />
              <Para label="Result" text={cs.result} />
            </div>

            {cs.tags.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
                {cs.tags.map((t) => (
                  <li key={t}>
                    <Chip className="px-2 py-1 text-xs">{t}</Chip>
                  </li>
                ))}
              </ul>
            )}

            {cs.metrics.length > 0 && (
              <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-4">
                {cs.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col bg-card px-4 py-4">
                    <dt className="order-2 mt-2 text-xs text-muted">{m.label}</dt>
                    <dd className="order-1 font-mono text-2xl font-bold leading-none tracking-tight text-teal sm:text-[28px]">
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}

            {cs.url && (
              <a
                href={cs.url}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex min-h-11 items-center gap-1 text-sm font-bold text-accent hover:underline"
              >
                Read the write-up
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
