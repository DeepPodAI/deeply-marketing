import type { MetadataRoute } from "next";

function getSiteUrl(): string {
  return process.env.SITE_URL || 'https://deeply-marketing.vercel.app';
}

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
