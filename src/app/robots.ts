import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  const vercelHost = process.env.VERCEL_URL;
  const siteUrl = configuredSiteUrl ?? (vercelHost ? `https://${vercelHost}` : undefined);

  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    ...(siteUrl ? { sitemap: `${siteUrl}/sitemap.xml` } : {})
  };
}
