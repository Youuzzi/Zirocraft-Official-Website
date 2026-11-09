import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { products, productText } from "@/lib/products";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (locale !== "id" && locale !== "en") notFound();
  const t = getDictionary(locale);
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#101828] text-white">
        <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
        <div aria-hidden="true" className="absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36"><div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-blue-300 uppercase">{t.home.eyebrow}</span>
          <h1 className="mt-8 text-5xl leading-[1.08] font-semibold tracking-tight sm:text-6xl lg:text-7xl">{t.home.title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">{t.home.description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href={`/${locale}/products`} className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-7 text-sm font-semibold text-white hover:bg-blue-500">{t.home.explore}</Link>
            <Link href={`/${locale}/about`} className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-7 text-sm font-semibold text-white hover:bg-white/10">{t.home.about}</Link>
          </div>
        </div></div>
      </section>
      <section className="bg-white py-24 sm:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div><span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">{t.home.introEyebrow}</span><h2 className="mt-5 max-w-xl text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl">{t.home.introTitle}</h2></div>
        <p className="text-base leading-8 text-muted">{t.home.intro}</p>
      </div></section>
      <section className="bg-surface py-24 sm:py-28"><div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl"><span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">{t.home.portfolioEyebrow}</span><h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{t.home.portfolioTitle}</h2><p className="mt-5 text-lg leading-8 text-muted">{t.home.portfolioDescription}</p></div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">{products.map((product) => { const copy = productText(product, locale); return <article key={product.slug} className="rounded-3xl border border-border bg-white p-8 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3"><span className="text-xs font-semibold uppercase tracking-wider text-accent">{copy.category}</span><span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">{t.home.status}</span></div>
          <h3 className="mt-7 text-2xl font-semibold tracking-tight text-foreground">{product.name}</h3><p className="mt-4 leading-7 text-muted">{copy.summary}</p>
          <Link href={`/${locale}/products/${product.slug}`} className="mt-8 inline-flex font-semibold text-accent hover:text-accent-hover">{t.home.learnMore} <span aria-hidden="true" className="ml-2">→</span></Link>
        </article>})}</div>
      </div></section>
      <section className="bg-white px-6 py-24 sm:py-28"><div className="mx-auto max-w-5xl rounded-3xl bg-[#101828] px-8 py-16 text-center text-white sm:px-16 sm:py-20">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">{t.home.closingTitle}</h2><p className="mx-auto mt-6 max-w-xl leading-8 text-slate-300">{t.home.closingDescription}</p>
        <Link href={`/${locale}/contact`} className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-7 text-sm font-semibold text-white hover:bg-blue-500">{t.home.contact}</Link>
      </div></section>
    </>
  );
}
