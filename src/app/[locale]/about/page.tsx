import type { Metadata } from "next";\nimport { createPageMetadata } from "@/lib/metadata";\nimport { notFound } from "next/navigation";\nimport { AboutPageContent } from "@/features/about";\n\nexport async function generateMetadata({ params }: PageProps<"/[locale]/about">): Promise<Metadata> {
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

export default async function AboutPage({ params }: PageProps<"/[locale]/about">) {\n  const { locale } = await params;\n  if (locale !== "id" && locale !== "en") notFound();\n  return <AboutPageContent locale={locale} />;\n}\n