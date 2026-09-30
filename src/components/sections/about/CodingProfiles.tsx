import { ArrowUpRight } from "lucide-react";
import { codingProfiles } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { SectionTitle } from "@/components/ui/SectionTitle";

/** External coding profiles with a headline stat each. */
export function CodingProfiles() {
  return (
    <section aria-labelledby="profiles-heading">
      <SectionTitle icon="trophy">
        <span id="profiles-heading">Coding profiles</span>
      </SectionTitle>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {codingProfiles.map((p) => (
          <li key={p.id}>
            <Card className="flex h-full items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Icon name={p.id} className="size-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h4 className="text-base font-bold leading-snug">{p.name}</h4>
                {p.handle && <p className="mt-0.5 truncate font-mono text-xs text-muted-2">@{p.handle}</p>}
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.stat}</p>
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${p.name} profile`}
                className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-line bg-card text-muted transition hover:border-accent hover:text-accent"
              >
                <ArrowUpRight className="size-5" aria-hidden="true" />
              </a>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
