import type { Metadata } from "next";\nimport { createPageMetadata } from "@/lib/metadata";\nimport { notFound } from "next/navigation";\nimport { ContactPageContent } from "@/features/contact";\n\nexport async function generateMetadata({ params }: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale } = await params;
  const language = locale === "id" ? "id" : "en";
  return createPageMetadata({
    locale: language,
    title: language === "id" ? "Kontak ZiroCraft" : "Contact ZiroCraft",
    description: language === "id"
      ? "Hubungi ZiroCraft untuk pertanyaan, diskusi produk, atau kolaborasi."
      : "Contact ZiroCraft for inquiries, product discussions, or collaboration."
  });
}

export default async function ContactPage({ params }: PageProps<"/[locale]/contact">) {\n  const { locale } = await params;\n  if (locale !== "id" && locale !== "en") notFound();\n  return <ContactPageContent locale={locale} />;\n}\n