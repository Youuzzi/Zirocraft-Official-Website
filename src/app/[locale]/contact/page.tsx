import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { ContactPageContent } from "@/features/contact";

export async function generateMetadata({ params }: PageProps<"/[locale]/contact">): Promise<Metadata> {
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

export default async function ContactPage({ params }: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  if (locale !== "id" && locale !== "en") notFound();
  return <ContactPageContent locale={locale} />;
}
