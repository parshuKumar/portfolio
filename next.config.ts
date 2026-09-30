import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Tech-stack logos (see src/data/skills.json → logoProvider)
      { protocol: "https", hostname: "skillicons.dev" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "img.shields.io" },
    ],
    // skillicons.dev serves SVG; allow it through next/image safely.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
