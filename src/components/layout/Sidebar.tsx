"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Download } from "lucide-react";
import { profile } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { cn } from "@/lib/utils";

const contactRows = [
  { icon: "mail", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: "phone", label: "Phone", value: profile.phone, href: profile.phoneHref },
  { icon: "map-pin", label: "Location", value: profile.location },
  { icon: "briefcase", label: "Currently", value: `${profile.company} · since ${profile.workingSince}`, href: profile.companyUrl },
];

/**
 * Profile card. On desktop it is sticky and always expanded.
 * On mobile the contact rows collapse behind a "Show contacts" toggle.
 */
export function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <aside
      className={cn(
        "relative w-full shrink-0 rounded-card border border-line bg-card p-5 shadow-card",
        "lg:sticky lg:top-8 lg:w-[320px] lg:p-7",
      )}
    >
      <div className="absolute right-4 top-4 lg:right-5 lg:top-5">
        <ThemeToggle />
      </div>

      <div className="flex items-center gap-4 lg:flex-col lg:text-center">
        <div className="relative shrink-0">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={150}
            height={150}
            priority
            className="size-20 rounded-2xl object-cover ring-2 ring-accent lg:size-[150px] lg:rounded-[28px] lg:ring-[3px]"
          />
          <span
            aria-hidden
            className="absolute -bottom-1 -right-1 size-4 rounded-full border-2 border-card bg-teal animate-pulse-dot lg:size-5"
          />
        </div>
        <div className="min-w-0 lg:mt-2">
          <h1 className="truncate text-xl font-extrabold tracking-tight lg:text-2xl">{profile.name}</h1>
          <span className="mt-1 inline-block rounded-lg bg-card-2 px-3 py-1 text-xs font-semibold text-ink lg:text-[13px]">
            {profile.headline}
          </span>
          <p className="mt-2 flex items-center gap-2 text-xs font-semibold text-teal lg:justify-center">
            <span className="size-2 rounded-full bg-teal" />
            {profile.availability.label}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="sidebar-contacts"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-line bg-card-2 py-2.5 text-sm font-semibold text-accent lg:hidden"
      >
        {open ? "Hide contacts" : "Show contacts"}
        <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} />
      </button>

      <div
        id="sidebar-contacts"
        className={cn("grid transition-[grid-template-rows] duration-300 lg:!grid-rows-[1fr]", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
      >
        <div className="overflow-hidden">
          <div className="my-5 h-px bg-line" />

          <ul className="flex flex-col gap-4">
            {contactRows.map((row) => (
              <li key={row.label} className="flex items-center gap-3.5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-line bg-card-2 text-accent">
                  <Icon name={row.icon} className="size-[18px]" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">{row.label}</p>
                  {row.href ? (
                    <a
                      href={row.href}
                      target={row.href.startsWith("http") ? "_blank" : undefined}
                      rel={row.href.startsWith("http") ? "noreferrer" : undefined}
                      className="block truncate text-sm font-semibold text-ink hover:text-accent"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <p className="truncate text-sm font-semibold text-ink">{row.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="my-5 h-px bg-line" />

          <ul className="flex justify-center gap-3">
            {profile.socials.map((s) => (
              <li key={s.id}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="flex size-10 items-center justify-center rounded-xl border border-line bg-card-2 text-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <Icon name={s.id} className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 flex h-12 items-center justify-center gap-2 rounded-xl bg-accent text-[15px] font-bold text-accent-ink shadow-[0_10px_30px_rgb(var(--accent-rgb)/0.25)] transition hover:-translate-y-0.5 hover:brightness-105"
          >
            <Download className="size-[18px]" />
            Download CV
          </a>
        </div>
      </div>
    </aside>
  );
}
