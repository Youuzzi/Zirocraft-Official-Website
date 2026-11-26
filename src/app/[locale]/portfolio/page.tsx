import type { Metadata } from "next";\nimport { createPageMetadata } from "@/lib/metadata";\nimport { notFound } from "next/navigation";\nimport { PortfolioPageContent } from "@/features/portfolio";\n\nexport async function generateMetadata({ params }: PageProps<"/[locale]/portfolio">): Promise<Metadata> {
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

export default async function PortfolioPage({ params }: PageProps<"/[locale]/portfolio">) {\n  const { locale } = await params;\n  if (locale !== "id" && locale !== "en") notFound();\n  return <PortfolioPageContent locale={locale} />;\n}\n