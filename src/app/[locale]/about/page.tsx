import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { AboutPageContent } from "@/features/about";

export async function generateMetadata({ params }: PageProps<"/[locale]/about">): Promise<Metadata> {
  const { locale } = await params;
  const language = locale === "id" ? "id" : "en";
  return createPageMetadata({
    locale: language,
    title: language === "id" ? "Tentang ZiroCraft" : "About ZiroCraft",
    description: language === "id"
      ? "Kenali cara ZiroCraft membangun solusi digital dan produk perangkat lunak."
      : "Learn how ZiroCraft approaches digital solutions and software products."
  });
}

export default async function AboutPage({ params }: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  if (locale !== "id" && locale !== "en") notFound();
  return <AboutPageContent locale={locale} />;
}
