import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { ProductDetailHero, ProductDetailSections, products } from "@/features/products";
import type { Locale } from "@/lib/i18n/dictionaries";

type Props = PageProps<"/[locale]/products/[slug]">;

export function generateStaticParams() {
  return ["id", "en"].flatMap((locale) => products.map((product) => ({ locale, slug: product.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  const language: Locale = locale === "id" ? "id" : "en";
  return createPageMetadata({
    locale: language,
    title: product.name,
    description: product.summary[language]
  });
}

export default async function ProductDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (locale !== "id" && locale !== "en") notFound();
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  return (
    <>
      <ProductDetailHero product={product} locale={locale} />
      <ProductDetailSections product={product} locale={locale} />
    </>
  );
}
