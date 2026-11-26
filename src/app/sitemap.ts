import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const vercelHost = process.env.VERCEL_URL;
const siteUrl = configuredSiteUrl ?? (vercelHost ? `https://${vercelHost}` : undefined);
const locales = ["id", "en"] as const;
const staticRoutes = [
  "",
  "/about",
  "/services",
  "/portfolio",
  "/contact",
  "/products",
  "/privacy-policy",
  "/terms"
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Do not publish guessed canonical URLs before the production domain is configured.
  if (!siteUrl) return [];

  const routes = [
    ...staticRoutes,
    ...products.map((product) => `/products/${product.slug}`)
  ];

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}${route}`,
      alternates: {
        languages: {
          id: `${siteUrl}/id${route}`,
          en: `${siteUrl}/en${route}`
        }
      }
    }))
  );
}
