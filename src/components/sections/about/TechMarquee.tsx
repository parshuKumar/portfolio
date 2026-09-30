import { skills } from "@/lib/content";
import { Marquee } from "@/components/ui/Marquee";
import { SkillLogo } from "@/components/ui/SkillLogo";

/** Lightweight scrolling strip of tech logos. */
export function TechMarquee() {
  return (
    <section aria-label="Technologies I work with">
      <Marquee speed="55s" className="py-2">
        {skills.logos.map((logo) => (
          <SkillLogo key={logo.id} logo={logo} size={44} showName={false} />
        ))}
      </Marquee>
      <p className="mt-3 text-center font-mono text-xs text-muted-2">Tech I work with · full list in Resume</p>
    </section>
  );
}
