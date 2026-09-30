import { education } from "@/lib/content";
import { Chip } from "@/components/ui/Chip";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Timeline, TimelineItem } from "@/components/ui/Timeline";

export function Education() {
  return (
    <section aria-labelledby="education-heading">
      <SectionTitle icon="graduation-cap">
        <span id="education-heading">Education</span>
      </SectionTitle>
      <Timeline>
        {education.map((item) => {
          const hasBody = Boolean(item.score || item.detail);
          return (
            <TimelineItem
              key={item.id}
              title={item.degree}
              period={`${item.start} — ${item.end}`}
              subtitle={
                <>
                  <span className="text-ink">{item.school}</span>
                  <span aria-hidden="true"> · </span>
                  {item.location}
                </>
              }
            >
              {hasBody && (
                <div className="flex flex-col gap-3">
                  {item.score && (
                    <div>
                      <Chip variant="accent">{item.score}</Chip>
                    </div>
                  )}
                  {item.detail && <p className="text-[15px] leading-relaxed text-muted">{item.detail}</p>}
                </div>
              )}
            </TimelineItem>
          );
        })}
      </Timeline>
    </section>
  );
}
