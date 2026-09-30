import { ImageResponse } from "next/og";
import { profile, site } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} · ${profile.headline}`;

/** Social preview card generated at build time from profile.json. */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0c0e13 0%, #151922 60%, #1b2030 100%)",
          color: "#eef1f6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#9aa3b5" }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#3ed6b5" }} />
          {profile.availability.label}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 84, fontWeight: 800, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ fontSize: 38, color: "#f4b942", fontWeight: 700 }}>{profile.headline}</div>
          <div style={{ fontSize: 28, color: "#9aa3b5", maxWidth: 900 }}>{profile.tagline}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#9aa3b5" }}>
          <span>{profile.location}</span>
          <span>{site.url.replace(/^https?:\/\//, "")}</span>
        </div>
      </div>
    ),
    size,
  );
}
