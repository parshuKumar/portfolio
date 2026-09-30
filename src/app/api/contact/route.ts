import { NextResponse } from "next/server";

/**
 * Contact form handler.
 * Forwards to Web3Forms (free tier) when WEB3FORMS_ACCESS_KEY is set in the
 * environment (Vercel → Project → Settings → Environment Variables).
 * Without a key it returns 503 so the form can fall back to a mailto link.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.website ?? "").trim();

  if (honeypot) return NextResponse.json({ ok: true }); // bot: pretend success
  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Name, email and message are required." }, { status: 422 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 422 });
  }

  const key = process.env.WEB3FORMS_ACCESS_KEY;
  if (!key) {
    return NextResponse.json({ ok: false, error: "Contact form is not configured yet." }, { status: 503 });
  }

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: key,
      name,
      email,
      subject: subject || `Portfolio message from ${name}`,
      message,
      from_name: "Portfolio contact form",
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ ok: false, error: "Delivery failed." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
