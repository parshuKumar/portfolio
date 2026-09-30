import { experience } from "@/lib/content";
import { Chip } from "@/components/ui/Chip";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Timeline, TimelineItem } from "@/components/ui/Timeline";

export function Experience() {
  return (
    <section aria-labelledby="experience-heading">
      <SectionTitle icon="briefcase">
        <span id="experience-heading">Experience</span>
      </SectionTitle>
      <Timeline>
        {experience.map((job) => (
          <TimelineItem
            key={job.id}
            title={job.role}
            period={`${job.start} — ${job.end}`}
            subtitle={
              <>
                {job.companyUrl ? (
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink underline-offset-4 transition hover:text-accent hover:underline"
                  >
                    {job.company}
                  </a>
                ) : (
                  <span className="text-ink">{job.company}</span>
                )}
                <span aria-hidden="true"> · </span>
                {job.location}
                <span aria-hidden="true"> · </span>
                {job.type}
              </>
            }
          >
            <p className="text-[15px] leading-relaxed text-muted">{job.summary}</p>
            {job.bullets.length > 0 && (
              <ul className="mt-3 space-y-2">
                {job.bullets.map((b) => (
                  <li
                    key={b}
                    className="relative pl-5 text-[15px] leading-relaxed before:absolute before:left-0 before:top-[0.65em] before:size-1.5 before:rounded-full before:bg-accent"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {job.skills.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Skills used">
                {job.skills.map((s) => (
                  <li key={s}>
                    <Chip>{s}</Chip>
                  </li>
                ))}
              </ul>
            )}
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
}
