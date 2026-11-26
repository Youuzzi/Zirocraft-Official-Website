"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { products } from "@/lib/products";
import type { Locale } from "@/lib/i18n/dictionaries";

const translatedRoutes = new Set([
  "",
  "/about",
  "/services",
  "/portfolio",
  "/contact",
  "/products",
  "/privacy-policy",
  "/terms"
]);

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const alternate = locale === "id" ? "en" : "id";
  const suffix = pathname.replace(/^\/(id|en)(?=\/|$)/, "").replace(/\/+$/, "");
  const hasTranslation =
    translatedRoutes.has(suffix) ||
    products.some((product) => suffix === `/products/${product.slug}`);
  const destination = `/${alternate}${hasTranslation ? suffix : ""}`;

  return (
    <Link
      href={destination}
      hrefLang={alternate}
      lang={alternate}
      aria-label={locale === "id" ? "Switch language to English" : "Ganti bahasa ke Indonesia"}
      className="inline-flex min-h-10 items-center justify-center rounded-full border border-border px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
    >
      {alternate.toUpperCase()}
    </Link>
  );
}
