import type { MetadataRoute } from "next";
import { navigation, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return navigation.tabs.map((tab) => ({
    url: `${site.url}${tab.href === "/" ? "" : tab.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: tab.href === "/" ? 1 : 0.8,
  }));
}
