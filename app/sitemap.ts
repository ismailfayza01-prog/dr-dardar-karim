import type { MetadataRoute } from "next";

import { supportedHomeLocales } from "@/lib/home-content";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...supportedHomeLocales.map((locale) => ({
      url: `${siteUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: locale === "fr" ? 1 : 0.9,
    })),
    {
      url: `${siteUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/equipe`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/rdv`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
