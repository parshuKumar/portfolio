import { profile, site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-8 flex flex-col items-center justify-between gap-2 px-2 text-xs text-muted-2 sm:flex-row">
      <p>
        © {year} {profile.name}. Built with Next.js, deployed on Vercel.
      </p>
      <p>
        <a href={site.url} className="hover:text-accent">
          {site.url.replace(/^https?:\/\//, "")}
        </a>
      </p>
    </footer>
  );
}
