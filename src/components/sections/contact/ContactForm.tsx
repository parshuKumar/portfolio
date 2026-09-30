"use client";

import { useId, useState, type ChangeEvent, type FormEvent } from "react";
import { CircleAlert, CircleCheck, LoaderCircle, Mail, Send } from "lucide-react";
import { hiring, profile } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

type Field = "name" | "email" | "subject" | "message";
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;
type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success" }
  | { kind: "mailto" }
  | { kind: "error"; message: string };

const EMPTY: Values = { name: "", email: "", subject: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputCls =
  "w-full rounded-xl border border-line bg-bg px-4 text-[15px] text-ink outline-none transition placeholder:text-muted-2 focus:border-accent focus:ring-2 focus:ring-[rgb(var(--accent-rgb)/0.3)] aria-[invalid=true]:border-[var(--danger)]";
const labelCls = "mb-1.5 block text-sm font-bold text-ink";
const errorCls = "mt-1.5 text-xs font-medium text-[var(--danger)]";

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Please tell me your name.";
  if (!v.email.trim()) e.email = "Please enter your email.";
  else if (!EMAIL_RE.test(v.email.trim())) e.email = "That email doesn't look right.";
  if (!v.message.trim()) e.message = "Please write a message.";
  else if (v.message.trim().length < 10) e.message = "A few more words would help (10+ characters).";
  return e;
}

function buildMailto(v: Values): string {
  const subject = v.subject.trim() || `Portfolio message from ${v.name.trim()}`;
  const body = `${v.message.trim()}\n\n— ${v.name.trim()} (${v.email.trim()})`;
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const uid = useId();
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [honeypot, setHoneypot] = useState("");

  const loading = status.kind === "loading";
  const id = (f: Field) => `${uid}-${f}`;

  function onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const field = e.target.name as Field;
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    const firstBad = (Object.keys(nextErrors) as Field[]).find((k) => nextErrors[k]);
    if (firstBad) {
      document.getElementById(id(firstBad))?.focus();
      return;
    }

    setStatus({ kind: "loading" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: honeypot }),
      });

      if (res.status === 503) {
        // Endpoint not configured: hand off to the visitor's email client.
        setStatus({ kind: "mailto" });
        window.location.href = buildMailto(values);
        return;
      }

      const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (res.ok && data?.ok) {
        setStatus({ kind: "success" });
        setValues(EMPTY);
        return;
      }
      setStatus({ kind: "error", message: data?.error || hiring.form.errorMessage });
    } catch {
      setStatus({ kind: "error", message: hiring.form.errorMessage });
    }
  }

  return (
    <Card id="contact-form" interactive={false} className="scroll-mt-28 p-6 sm:p-7">
      <h4 className="text-xl font-bold tracking-tight">{hiring.form.title}</h4>
      <p className="mt-1.5 text-sm text-muted">
        Or write to{" "}
        <a href={`mailto:${profile.email}`} className="font-semibold text-accent hover:underline">
          {profile.email}
        </a>
        .
      </p>

      <form onSubmit={onSubmit} noValidate className="relative mt-6 space-y-5">
        {/* Honeypot: bots fill it, humans never see it. */}
        <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
          <label htmlFor={`${uid}-website`}>Website</label>
          <input
            id={`${uid}-website`}
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={id("name")} className={labelCls}>
              Name
            </label>
            <input
              id={id("name")}
              name="name"
              type="text"
              autoComplete="name"
              required
              value={values.name}
              onChange={onChange}
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? `${id("name")}-err` : undefined}
              placeholder="Your name"
              className={cn(inputCls, "h-12")}
            />
            {errors.name && (
              <p id={`${id("name")}-err`} className={errorCls}>
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor={id("email")} className={labelCls}>
              Email
            </label>
            <input
              id={id("email")}
              name="email"
              type="email"
              autoComplete="email"
              required
              value={values.email}
              onChange={onChange}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? `${id("email")}-err` : undefined}
              placeholder="you@example.com"
              className={cn(inputCls, "h-12")}
            />
            {errors.email && (
              <p id={`${id("email")}-err`} className={errorCls}>
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor={id("subject")} className={labelCls}>
            Subject <span className="font-normal text-muted-2">(optional)</span>
          </label>
          <input
            id={id("subject")}
            name="subject"
            type="text"
            value={values.subject}
            onChange={onChange}
            placeholder="Role, project or question"
            className={cn(inputCls, "h-12")}
          />
        </div>

        <div>
          <label htmlFor={id("message")} className={labelCls}>
            Message
          </label>
          <textarea
            id={id("message")}
            name="message"
            required
            rows={6}
            value={values.message}
            onChange={onChange}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? `${id("message")}-err` : undefined}
            placeholder="What are you building, and how can I help?"
            className={cn(inputCls, "min-h-40 resize-y py-3")}
          />
          {errors.message && (
            <p id={`${id("message")}-err`} className={errorCls}>
              {errors.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" disabled={loading} className="w-full sm:w-auto">
            {loading ? (
              <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
            ) : (
              <Send className="size-4" aria-hidden="true" />
            )}
            {loading ? "Sending…" : "Send message"}
          </Button>
          <p className="text-xs text-muted-2">I usually reply within a day.</p>
        </div>

        {/* Always mounted so screen readers announce changes. */}
        <div role="status" aria-live="polite" className="min-h-0">
          {status.kind === "success" && (
            <Banner tone="teal" icon={<CircleCheck className="size-5" aria-hidden="true" />}>
              {hiring.form.successMessage}
            </Banner>
          )}
          {status.kind === "error" && (
            <Banner tone="danger" icon={<CircleAlert className="size-5" aria-hidden="true" />}>
              {status.message}{" "}
              <a href={buildMailto(values)} className="font-bold underline">
                Email me instead
              </a>
              .
            </Banner>
          )}
          {status.kind === "mailto" && (
            <Banner tone="accent" icon={<Mail className="size-5" aria-hidden="true" />}>
              Opening your email app… The form isn&apos;t wired up yet, so your message is being handed to your mail
              client with everything prefilled. If nothing opened,{" "}
              <a href={buildMailto(values)} className="font-bold underline">
                click here
              </a>
              .
            </Banner>
          )}
        </div>
      </form>
    </Card>
  );
}

function Banner({
  tone,
  icon,
  children,
}: {
  tone: "teal" | "danger" | "accent";
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-xl border px-4 py-3 text-sm leading-relaxed",
        tone === "teal" && "border-[rgb(var(--teal-rgb)/0.35)] bg-[rgb(var(--teal-rgb)/0.12)] text-teal",
        tone === "danger" && "border-[color-mix(in_srgb,var(--danger)_40%,transparent)] bg-[color-mix(in_srgb,var(--danger)_12%,transparent)] text-[var(--danger)]",
        tone === "accent" && "border-[rgb(var(--accent-rgb)/0.35)] bg-accent-soft text-ink",
      )}
    >
      <span className="mt-0.5 shrink-0">{icon}</span>
      <p>{children}</p>
    </div>
  );
}
