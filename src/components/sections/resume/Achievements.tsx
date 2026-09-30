import { ArrowUpRight } from "lucide-react";
import { achievements } from "@/lib/content";
import type { Achievement } from "@/types/content";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

function AchievementBody({ item, linked }: { item: Achievement; linked: boolean }) {
  const placeholder = Boolean(item.placeholder);
  return (
    <div className="flex h-full items-start gap-4">
      <span
        className={cn(
          "flex size-11 shrink-0 items-center justify-center rounded-xl",
          placeholder ? "border border-dashed border-line-strong text-muted-2" : "bg-accent-soft text-accent",
        )}
      >
        <Icon name={item.icon} className="size-5" />
      </span>
      <div className="min-w-0 flex-1">
        <h4 className={cn("text-[15px] font-bold leading-snug", placeholder ? "text-muted" : "text-ink")}>{item.title}</h4>
        {item.detail && <p className={cn("mt-1 text-sm leading-relaxed", placeholder ? "text-muted-2" : "text-muted")}>{item.detail}</p>}
      </div>
      {linked && (
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      )}
    </div>
  );
}

export function Achievements() {
  return (
    <section aria-labelledby="achievements-heading">
      <SectionTitle icon="trophy">
        <span id="achievements-heading">Achievements &amp; certifications</span>
      </SectionTitle>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {achievements.map((item) => {
          const placeholder = Boolean(item.placeholder);
          const linked = Boolean(item.url) && !placeholder;
          const cardCls = cn("h-full", placeholder && "border-dashed");
          return (
            <li key={item.title} className="min-w-0">
              {linked ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${item.title} (opens in a new tab)`}
                  className="group block h-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Card className={cardCls}>
                    <AchievementBody item={item} linked />
                  </Card>
                </a>
              ) : (
                <Card interactive={false} className={cardCls}>
                  <AchievementBody item={item} linked={false} />
                </Card>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
