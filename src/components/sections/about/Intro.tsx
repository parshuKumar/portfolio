import { profile, roles } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Typewriter } from "@/components/ui/Typewriter";
import { Icon } from "@/components/ui/Icon";

/** Hero block: greeting, animated role line, tagline, bio and primary CTAs. */
export function Intro() {
  return (
    <section aria-labelledby="intro-heading" className="max-w-3xl">
      <h3 id="intro-heading" className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
        Hi, I&apos;m <span className="text-accent">{profile.firstName}</span>.
      </h3>

      <p className="mt-4 text-xl font-semibold text-muted sm:text-2xl">
        {roles.intro} <Typewriter phrases={roles.roles} className="text-ink" />
      </p>

      <p className="mt-6 text-lg font-semibold leading-snug text-ink sm:text-xl">{profile.tagline}</p>

      <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
        {profile.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/resume">
          <Icon name="briefcase" className="size-4" />
          View resume
        </Button>
        <Button href="/contact" variant="ghost">
          <Icon name="mail" className="size-4" />
          Contact me
        </Button>
      </div>
    </section>
  );
}
