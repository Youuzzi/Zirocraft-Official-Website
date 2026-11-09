import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

const siteUrl = "https://zirocraft.com";
const locales = ["id", "en"] as const;
const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/products",
  "/privacy-policy",
  "/terms"
];

export default function sitemap(): MetadataRoute.Sitemap {
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
