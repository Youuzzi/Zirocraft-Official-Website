import type { Metadata } from "next";\nimport { createPageMetadata } from "@/lib/metadata";\nimport { notFound } from "next/navigation";\nimport { ServicesPageContent } from "@/features/services";\n\nexport async function generateMetadata({ params }: PageProps<"/[locale]/services">): Promise<Metadata> {
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

export default async function ServicesPage({ params }: PageProps<"/[locale]/services">) {\n  const { locale } = await params;\n  if (locale !== "id" && locale !== "en") notFound();\n  return <ServicesPageContent locale={locale} />;\n}\n