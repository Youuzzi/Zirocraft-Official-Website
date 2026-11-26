import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { PortfolioPageContent } from "@/features/portfolio";

export async function generateMetadata({ params }: PageProps<"/[locale]/portfolio">): Promise<Metadata> {
  const { locale } = await params;
  const language = locale === "id" ? "id" : "en";
  return createPageMetadata({
    locale: language,
    title: language === "id" ? "Portofolio" : "Portfolio",
    description: language === "id"
      ? "Lihat produk dan pekerjaan pengembangan software ZiroCraft."
      : "Explore software products and development work by ZiroCraft."
  });
}

export default async function PortfolioPage({ params }: PageProps<"/[locale]/portfolio">) {
  const { locale } = await params;
  if (locale !== "id" && locale !== "en") notFound();
  return <PortfolioPageContent locale={locale} />;
}
