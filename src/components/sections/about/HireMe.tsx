import { roles } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Icon } from "@/components/ui/Icon";
import { SectionTitle } from "@/components/ui/SectionTitle";

/** "Hire me for" grid: reads for recruiters and freelance clients alike. */
export function HireMe() {
  return (
    <section aria-labelledby="hire-heading">
      <SectionTitle icon="briefcase">
        <span id="hire-heading">Hire me for</span>
      </SectionTitle>
      <p className="-mt-2 mb-5 max-w-2xl text-[15px] leading-relaxed text-muted">
        Whether you are hiring for a team or need a freelancer for a scoped project, this is the work I do best.
      </p>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {roles.hireMeFor.map((item) => (
          <li key={item.title}>
            <Card className="flex h-full gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Icon name={item.icon} className="size-6" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h4 className="text-base font-bold leading-snug">{item.title}</h4>
                  <Chip variant="teal" className="shrink-0 capitalize">
                    {item.audience}
                  </Chip>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </Card>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Button href="/contact">
          Discuss a project
          <Icon name="rocket" className="size-4" />
        </Button>
      </div>
    </section>
  );
}
