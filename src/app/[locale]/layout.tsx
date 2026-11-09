import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { isLocale, locales } from "@/lib/i18n";

export const metadata: Metadata = {
  title: {
    default: "Zirocraft | Practical Technology for Growing Businesses",
    template: "%s | Zirocraft",
  },
  description:
    "Zirocraft develops practical digital products for business and operational needs.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <Navbar locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
    </>
  );
}
