export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

export function getLocalizedPath(locale: Locale, path = "") {
  return `/${locale}${path ? `/${path.replace(/^\\//, "")}` : ""}`;
}
