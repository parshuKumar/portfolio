import Image from "next/image";
import { skillLogoUrl } from "@/lib/content";
import type { SkillLogo as SkillLogoData } from "@/types/content";
import { cn } from "@/lib/utils";

/** One tech logo tile with its name underneath. */
export function SkillLogo({ logo, size = 56, showName = true, className }: { logo: SkillLogoData; size?: number; showName?: boolean; className?: string }) {
  return (
    <figure className={cn("flex flex-col items-center gap-2", className)}>
      <span className="flex items-center justify-center rounded-2xl border border-line bg-card p-2 transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--accent-rgb)/0.5)] hover:shadow-[0_10px_30px_rgb(var(--accent-rgb)/0.15)]">
        <Image
          src={skillLogoUrl(logo.id, logo.url)}
          alt={logo.name}
          width={size}
          height={size}
          unoptimized
          className="rounded-xl"
          style={{ width: size, height: size }}
        />
      </span>
      {showName && <figcaption className="text-xs font-semibold text-muted">{logo.name}</figcaption>}
    </figure>
  );
}
