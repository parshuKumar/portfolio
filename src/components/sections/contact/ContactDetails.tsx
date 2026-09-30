import { hiring, profile } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

function Row({ icon, label, children }: { icon: string; label: string; children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3.5">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
        <Icon name={icon} className="size-[18px]" />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-2">{label}</p>
        <div className="mt-0.5 truncate text-[15px] font-semibold text-ink">{children}</div>
      </div>
    </li>
  );
}

const linkCls = "inline-flex min-h-11 items-center transition hover:text-accent";

function displayUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export function ContactDetails() {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <h4 className="text-base font-bold tracking-tight">Contact details</h4>
        <ul className="mt-4 space-y-3">
          <Row icon="mail" label="Email">
            <a href={`mailto:${profile.email}`} className={linkCls}>
              {profile.email}
            </a>
          </Row>
          <Row icon="phone" label="Phone">
            <a href={profile.phoneHref} className={linkCls}>
              {profile.phone}
            </a>
          </Row>
          <Row icon="map-pin" label="Location">
            {profile.location}
          </Row>
          <Row icon="clock" label="Timezone">
            {profile.timezone}
          </Row>
        </ul>
      </Card>

      <Card>
        <h4 className="text-base font-bold tracking-tight">Elsewhere</h4>
        <ul className="mt-3 divide-y divide-line">
          {profile.socials.map((s) => (
            <li key={s.id}>
              <a
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="group -mx-2 flex min-h-12 items-center gap-3 rounded-lg px-2 transition hover:bg-accent-soft"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-line bg-card text-muted transition group-hover:text-accent">
                  <Icon name={s.id} className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-ink">{s.label}</span>
                  <span className="block truncate font-mono text-xs text-muted-2">{displayUrl(s.url)}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="border-[rgb(var(--teal-rgb)/0.35)]">
        <h4 className="text-base font-bold tracking-tight">Availability</h4>
        <div className="mt-3 flex items-center gap-3">
          <span aria-hidden="true" className="size-2.5 shrink-0 animate-pulse-dot rounded-full bg-teal" />
          <p className="text-[15px] font-bold text-ink">{profile.availability.label}</p>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">{hiring.availabilityNote}</p>
      </Card>
    </div>
  );
}
