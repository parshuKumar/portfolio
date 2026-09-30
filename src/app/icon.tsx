import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Favicon generated from profile.initials so it always matches the name. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c0e13",
          color: "#f4b942",
          fontSize: 30,
          fontWeight: 800,
          borderRadius: 16,
          letterSpacing: -1,
          fontFamily: "sans-serif",
        }}
      >
        {profile.initials}
      </div>
    ),
    size,
  );
}
