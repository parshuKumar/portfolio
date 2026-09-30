import { skills } from "@/lib/content";
import { Chip } from "@/components/ui/Chip";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SkillLogo } from "@/components/ui/SkillLogo";

export function TechStack() {
  const highlighted = new Set(skills.highlighted);

  return (
    <section aria-labelledby="techstack-heading">
      <SectionTitle icon="terminal">
        <span id="techstack-heading">Tech stack</span>
      </SectionTitle>

      <ul className="grid grid-cols-4 gap-x-3 gap-y-5 sm:grid-cols-6 sm:gap-4 lg:grid-cols-8" aria-label="Technologies">
        {skills.logos.map((logo) => (
          <li key={logo.id} className="min-w-0">
            <SkillLogo logo={logo} size={48} showName className="[&_figcaption]:max-w-full [&_figcaption]:truncate [&_figcaption]:text-center" />
          </li>
        ))}
      </ul>

      <div className="mt-8 rounded-2xl border border-line bg-card-2 px-5 sm:px-6">
        {skills.groups.map((group, i) => (
          <div
            key={group.name}
            className={
              "flex flex-col gap-2.5 py-4 sm:flex-row sm:items-start sm:gap-6" + (i > 0 ? " border-t border-line" : "")
            }
          >
            <h4 className="shrink-0 pt-1 text-xs font-bold uppercase tracking-[0.12em] text-muted sm:w-32">{group.name}</h4>
            <ul className="flex flex-wrap gap-2" aria-label={group.name}>
              {group.items.map((item) => (
                <li key={item}>
                  <Chip variant={highlighted.has(item) ? "accent" : "default"}>{item}</Chip>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
