import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/dictionaries";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Zirocraft | Practical Technology", template: "%s | Zirocraft" },
  description: "Zirocraft develops practical digital solutions for growing businesses.",
  applicationName: "Zirocraft",
  openGraph: {
    type: "website",
    siteName: "Zirocraft",
    title: "Zirocraft | Practical Technology",
    description: "Building practical technology for growing businesses."
  }
};

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (locale !== "id" && locale !== "en") notFound();
  const validLocale = locale as Locale;
  const dictionary = getDictionary(validLocale);
  return <html lang={validLocale} className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}><body className="min-h-full flex flex-col"><a className="skip-link" href="#main-content">{validLocale === "id" ? "Lewati ke konten" : "Skip to content"}</a><Navbar locale={validLocale} dictionary={dictionary} /><main id="main-content" tabIndex={-1} className="flex-1">{children}</main><Footer locale={validLocale} dictionary={dictionary} /></body></html>;
}
