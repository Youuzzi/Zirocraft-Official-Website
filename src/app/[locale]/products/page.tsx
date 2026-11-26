import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { ProductsHero, ProductsListing, ProductsPageCta } from "@/features/products";
import type { Locale } from "@/lib/i18n/dictionaries";

export async function generateMetadata({ params }: PageProps<"/[locale]/products">): Promise<Metadata> {
  const { locale } = await params;
  const language: Locale = locale === "id" ? "id" : "en";
  return createPageMetadata({
    locale: language,
    title: language === "id" ? "Produk" : "Products",
    description: language === "id"
      ? "Jelajahi produk perangkat lunak yang sedang dikembangkan ZiroCraft."
      : "Explore software products currently being developed by ZiroCraft."
  });
}

export default async function ProductsPage({ params }: PageProps<"/[locale]/products">) {
  const { locale } = await params;
  if (locale !== "id" && locale !== "en") notFound();
  return (
    <>
      <ProductsHero locale={locale} />
      <ProductsListing locale={locale} />
      <ProductsPageCta locale={locale} />
    </>
  );
}
