import type { Metadata } from "next";
import Link from "next/link";
import { products, getProductStatusLabel } from "@/lib/products";
import type { Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[locale]/products">): Promise<Metadata> {
  const { locale } = await params;
  return { title: locale === "id" ? "Produk" : "Products", description: locale === "id" ? "Jelajahi produk digital Zirocraft." : "Explore digital products developed by Zirocraft." };
}

export default async function ProductsPage({ params }: PageProps<"/[locale]/products">) {
  const { locale } = await params;
  const lang: Locale = locale === "id" ? "id" : "en";
  return (
    <>
      <section className="bg-[#101828] py-24 text-white sm:py-32"><div className="mx-auto max-w-7xl px-6 lg:px-8"><span className="text-sm font-semibold tracking-[0.16em] text-blue-300 uppercase">{lang === "id" ? "Portofolio Produk" : "Product Portfolio"}</span><h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">{lang === "id" ? "Solusi digital untuk kebutuhan operasional nyata." : "Digital products for real operational needs."}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">{lang === "id" ? "Kenali produk yang sedang dikembangkan Zirocraft untuk membantu bisnis bekerja lebih terstruktur." : "Discover products Zirocraft is developing to help businesses operate with greater structure."}</p></div></section>
      <section className="bg-white py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2 lg:px-8">
        {products.map((product) => <article key={product.slug} className="flex flex-col rounded-3xl border border-border bg-surface p-8 sm:p-10"><div className="flex flex-wrap items-center justify-between gap-3"><span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">{product.category}</span><span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">{getProductStatusLabel(product.status, lang)}</span></div><h2 className="mt-8 text-3xl font-semibold tracking-tight text-foreground">{product.name}</h2><p className="mt-4 flex-1 leading-8 text-muted">{product.description[lang]}</p><Link href={`/${lang}/products/${product.slug}`} className="mt-8 inline-flex font-semibold text-accent hover:text-accent-hover">{lang === "id" ? "Lihat detail" : "View details"} <span aria-hidden="true" className="ml-2">→</span></Link></article>)}
      </div></section>
    </>
  );
}
