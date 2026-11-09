import { notFound } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/dictionaries";

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (locale !== "id" && locale !== "en") notFound();
  const validLocale = locale as Locale;
  const dictionary = getDictionary(validLocale);
  return <><Navbar locale={validLocale} dictionary={dictionary} /><main className="flex-1">{children}</main><Footer locale={validLocale} dictionary={dictionary} /></>;
}
