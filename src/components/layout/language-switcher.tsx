"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n/dictionaries";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const alternate = locale === "id" ? "en" : "id";
  const suffix = pathname.replace(/^\/(id|en)(?=\/|$)/, "");
  const destination = `/${alternate}${suffix}`;

  return (
    <Link href={destination} hrefLang={alternate} aria-label={locale === "id" ? "Switch language to English" : "Ganti bahasa ke Indonesia"} className="rounded-full border border-border px-3 py-2 text-xs font-semibold text-foreground hover:border-accent hover:text-accent">
      {alternate.toUpperCase()}
    </Link>
  );
}
