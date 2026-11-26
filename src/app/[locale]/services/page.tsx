import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { ServicesPageContent } from "@/features/services";

export async function generateMetadata({ params }: PageProps<"/[locale]/services">): Promise<Metadata> {
  const { locale } = await params;
  const language = locale === "id" ? "id" : "en";
  return createPageMetadata({
    locale: language,
    title: language === "id" ? "Layanan" : "Services",
    description: language === "id"
      ? "Layanan pengembangan website dan software dari ZiroCraft."
      : "Website and software development services from ZiroCraft."
  });
}

export default async function ServicesPage({ params }: PageProps<"/[locale]/services">) {
  const { locale } = await params;
  if (locale !== "id" && locale !== "en") notFound();
  return <ServicesPageContent locale={locale} />;
}
