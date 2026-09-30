import { process } from "@/lib/content";
import { SectionTitle } from "@/components/ui/SectionTitle";

/** Numbered step strip: vertical on small screens, horizontal from lg. */
export function Process() {
  return (
    <section aria-labelledby="process-heading">
      <SectionTitle icon="terminal">
        <span id="process-heading">How I work</span>
      </SectionTitle>
      <ol className="grid grid-cols-1 gap-0 lg:grid-cols-5 lg:gap-4">
        {process.map((p, i) => (
          <li
            key={p.step}
            className="relative flex gap-4 pb-8 last:pb-0 before:absolute before:bottom-0 before:left-5 before:top-12 before:w-px before:bg-line-strong before:content-[''] last:before:hidden lg:flex-col lg:items-center lg:gap-3 lg:pb-0 lg:text-center lg:before:bottom-auto lg:before:left-1/2 lg:before:top-5 lg:before:h-px lg:before:w-full"
          >
            <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent font-mono text-sm font-bold text-accent-ink shadow-[0_8px_20px_rgb(var(--accent-rgb)/0.3)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 pt-1.5 lg:pt-0">
              <h4 className="text-[15px] font-bold leading-snug">{p.step}</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted">{p.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
