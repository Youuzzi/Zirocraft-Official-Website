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

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const vercelHost = process.env.VERCEL_URL;
const siteUrl = configuredSiteUrl ?? (vercelHost ? `https://${vercelHost}` : undefined);

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: { default: "ZiroCraft | Practical Technology", template: "%s | ZiroCraft" },
  description: "ZiroCraft develops practical digital solutions for growing businesses.",
  icons: {
    icon: [
      { url: "/MyLogo/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/MyLogo/favicon-48.png", sizes: "48x48", type: "image/png" }
    ],
    apple: [{ url: "/MyLogo/apple-touch-icon-180.png", sizes: "180x180", type: "image/png" }]
  },
  applicationName: "ZiroCraft",
  icons: {
    icon: [
      { url: "/MyLogo/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/MyLogo/favicon-48.png", sizes: "48x48", type: "image/png" }
    ],
    apple: [{ url: "/MyLogo/apple-touch-icon-180.png", sizes: "180x180", type: "image/png" }]
  },
  openGraph: {
    type: "website",
    siteName: "ZiroCraft",
    title: "ZiroCraft | Practical Technology",
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
  return <html lang={validLocale} className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}><body className="min-h-full flex flex-col"><a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-[#15191f] focus:shadow-lg">{validLocale === "id" ? "Lewati ke konten utama" : "Skip to main content"}</a><Navbar locale={validLocale} dictionary={dictionary} /><main id="main-content" tabIndex={-1} className="flex-1">{children}</main><Footer locale={validLocale} dictionary={dictionary} /></body></html>;
}
