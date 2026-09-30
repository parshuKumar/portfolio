import { skills } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Proficiency() {
  return (
    <section aria-labelledby="proficiency-heading">
      <SectionTitle icon="zap">
        <span id="proficiency-heading">Proficiency</span>
      </SectionTitle>
      <Card interactive={false} className="p-5 sm:p-6">
        <div className="grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
          {skills.proficiency.map((p) => (
            <ProgressBar key={p.name} label={p.name} percent={p.percent} />
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-2">Self-assessed, relative to my strongest skill.</p>
      </Card>
    </section>
  );
}
