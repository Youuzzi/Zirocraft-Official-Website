import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { products, productText } from "@/lib/products";

type Props = PageProps<"/[locale]/products/[slug]">;

export function generateStaticParams() {
  return ["id", "en"].flatMap((locale) => products.map((product) => ({ locale, slug: product.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  return { title: product.name, description: product.summary[locale === "id" ? "id" : "en"] };
}

export default async function ProductDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (locale !== "id" && locale !== "en") notFound();
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const t = getDictionary(locale);
  const copy = productText(product, locale);
  return <>
    <section className="relative isolate overflow-hidden bg-[#101828] py-24 text-white sm:py-32"><div aria-hidden="true" className="absolute -right-32 -top-40 -z-10 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[120px]" /><div className="mx-auto max-w-7xl px-6 lg:px-8">
      <Link href={`/${locale}/products`} className="text-sm font-medium text-blue-300 hover:text-white">← {t.products.back}</Link><span className="mt-12 block text-sm font-semibold tracking-[0.16em] text-blue-300 uppercase">{copy.category}</span><h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-7xl">{product.name}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">{copy.summary}</p><span className="mt-8 inline-flex rounded-full bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-200">{t.home.status}</span>
    </div></section>
    <section className="bg-white py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_320px] lg:px-8">
      <div className="max-w-3xl"><h2 className="text-3xl font-semibold tracking-tight text-foreground">{locale === "id" ? "Tentang produk" : "About the product"}</h2><p className="mt-6 text-lg leading-8 text-muted">{copy.description}</p><p className="mt-8 text-sm leading-7 text-muted">{locale === "id" ? "Informasi ini menggambarkan arah pengembangan saat ini. Ketersediaan dan cakupan fitur dapat berubah selama proses pengembangan." : "This information describes the current development direction. Availability and feature scope may change as development progresses."}</p></div>
      <aside className="h-fit rounded-2xl border border-border bg-surface p-7"><h2 className="text-lg font-semibold text-foreground">{t.products.contact}</h2><p className="mt-3 text-sm leading-7 text-muted">{locale === "id" ? "Hubungi Zirocraft untuk berdiskusi mengenai produk dan kebutuhan operasional." : "Contact Zirocraft to discuss the product and your operational needs."}</p><Link href={`/${locale}/contact`} className="mt-6 inline-flex font-semibold text-accent">{t.home.contact} →</Link></aside>
    </div></section>
  </>;
}
