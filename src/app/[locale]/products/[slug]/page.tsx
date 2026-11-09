import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, getProductStatusLabel, products } from "@/lib/products";
import type { Locale } from "@/lib/i18n";

type Props = PageProps<"/[locale]/products/[slug]">;

export function generateStaticParams() {
  return products.flatMap((product) => ["id", "en"].map((locale) => ({ locale, slug: product.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const lang: Locale = locale === "id" ? "id" : "en";
  return { title: product.name, description: product.description[lang] };
}

export default async function ProductDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const product = getProduct(slug);
  if (!product || (locale !== "id" && locale !== "en")) notFound();
  const lang: Locale = locale;
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#101828] py-24 text-white sm:py-32"><div aria-hidden="true" className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" /><div className="mx-auto max-w-7xl px-6 lg:px-8"><Link href={`/${lang}/products`} className="text-sm font-medium text-blue-300 hover:text-white">← {lang === "id" ? "Semua produk" : "All products"}</Link><div className="mt-12 max-w-3xl"><span className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs font-semibold text-amber-200">{getProductStatusLabel(product.status, lang)}</span><p className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-blue-300">{product.category}</p><h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">{product.name}</h1><p className="mt-7 text-lg leading-8 text-slate-300">{product.description[lang]}</p></div></div></section>
      <section className="bg-white py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8"><div><span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">{lang === "id" ? "Ringkasan" : "Overview"}</span><h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground">{lang === "id" ? "Dibangun berdasarkan kebutuhan operasional." : "Built around operational needs."}</h2><p className="mt-6 text-lg leading-8 text-muted">{product.overview[lang]}</p></div><div className="rounded-3xl border border-border bg-surface p-8"><h2 className="text-xl font-semibold text-foreground">{lang === "id" ? "Untuk siapa produk ini?" : "Who is it for?"}</h2><p className="mt-4 leading-8 text-muted">{product.audience[lang]}</p><p className="mt-8 border-t border-border pt-6 text-sm leading-7 text-muted">{lang === "id" ? "Informasi ini menjelaskan arah pengembangan produk dan bukan pernyataan bahwa seluruh fitur telah tersedia." : "This information describes product direction and does not imply that all features are currently available."}</p></div></div></section>
      <section className="bg-surface px-6 py-20"><div className="mx-auto max-w-5xl rounded-3xl bg-[#101828] px-8 py-14 text-center text-white sm:px-14"><h2 className="text-3xl font-semibold">{lang === "id" ? "Ingin mengetahui lebih lanjut?" : "Want to learn more?"}</h2><p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">{lang === "id" ? "Hubungi Zirocraft untuk berdiskusi tentang produk dan arah pengembangannya." : "Contact Zirocraft to discuss the product and its development direction."}</p><Link href={`/${lang}/contact`} className="mt-8 inline-flex min-h-12 items-center rounded-full bg-blue-600 px-7 text-sm font-semibold text-white hover:bg-blue-500">{lang === "id" ? "Hubungi Kami" : "Contact Us"}</Link></div></section>
    </>
  );
}
