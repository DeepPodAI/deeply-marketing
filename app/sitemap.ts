import type { MetadataRoute } from "next";

function getSiteUrl(): string {
  return process.env.SITE_URL || 'https://deeply-marketing.vercel.app';
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
