import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { products, productText } from "@/lib/products";

export const metadata: Metadata = { title: "Products", description: "Explore Zirocraft products for business and warehouse operations." };

export default async function ProductsPage({ params }: PageProps<"/[locale]/products">) {
  const { locale } = await params;
  if (locale !== "id" && locale !== "en") notFound();
  const t = getDictionary(locale);
  return <>
    <section className="bg-[#101828] py-24 text-white sm:py-32"><div className="mx-auto max-w-7xl px-6 lg:px-8">
      <span className="text-sm font-semibold tracking-[0.16em] text-blue-300 uppercase">{t.products.eyebrow}</span><h1 className="mt-6 max-w-3xl text-4xl leading-tight font-semibold tracking-tight sm:text-6xl">{t.products.title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">{t.products.description}</p>
    </div></section>
    <section className="bg-white py-20 sm:py-28"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="grid gap-6 md:grid-cols-2">
      {products.map((product) => { const copy = productText(product, locale); return <article key={product.slug} className="overflow-hidden rounded-3xl border border-border bg-white">
        <div className="bg-[#101828] p-8 text-white sm:p-10"><span className="text-xs font-semibold uppercase tracking-wider text-blue-300">{copy.category}</span><h2 className="mt-8 text-3xl font-semibold">{product.name}</h2><p className="mt-4 max-w-lg leading-7 text-slate-300">{copy.summary}</p></div>
        <div className="p-8 sm:p-10"><span className="inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">{t.home.status}</span><p className="mt-5 leading-7 text-muted">{copy.description}</p><Link href={`/${locale}/products/${product.slug}`} className="mt-7 inline-flex font-semibold text-accent hover:text-accent-hover">{t.home.learnMore} <span aria-hidden="true" className="ml-2">→</span></Link></div>
      </article>})}
    </div></div></section>
  </>;
}
