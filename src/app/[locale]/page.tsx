import Link from "next/link";
import type { Metadata } from "next";
import { products, getProductStatusLabel } from "@/lib/products";
import type { Locale } from "@/lib/i18n";

const copy = {
  id: {
    eyebrow: "Teknologi yang dibangun dengan tujuan",
    title: "Teknologi praktis untuk bisnis yang terus berkembang.",
    intro: "Zirocraft mengembangkan solusi digital yang berangkat dari kebutuhan nyata bisnis dan operasional sehari-hari.",
    products: "Produk Kami",
    productsIntro: "Membangun produk digital untuk mendukung proses bisnis dan operasional.",
    explore: "Jelajahi Produk",
    about: "Tentang Zirocraft",
    aboutText: "Kami percaya teknologi seharusnya membantu pekerjaan menjadi lebih terarah, bukan menambah kerumitan.",
    contact: "Mari Terhubung",
    contactText: "Punya pertanyaan atau ingin berdiskusi tentang produk Zirocraft? Hubungi kami.",
    contactButton: "Hubungi Zirocraft",
  },
  en: {
    eyebrow: "Technology built with purpose",
    title: "Practical technology for businesses that keep growing.",
    intro: "Zirocraft develops digital solutions grounded in real business needs and day-to-day operations.",
    products: "Our Products",
    productsIntro: "Developing digital products to support business and operational workflows.",
    explore: "Explore Products",
    about: "About Zirocraft",
    aboutText: "We believe technology should make work clearer and more effective, not more complicated.",
    contact: "Let's Connect",
    contactText: "Have a question or want to discuss Zirocraft products? Get in touch.",
    contactButton: "Contact Zirocraft",
  },
} satisfies Record<Locale, Record<string, string>>;

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const c = copy[locale as Locale] ?? copy.en;
  return { title: locale === "id" ? "Beranda" : "Home", description: c.intro };
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  const lang: Locale = locale === "id" ? "id" : "en";
  const c = copy[lang];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#101828] text-white">
        <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
        <div aria-hidden="true" className="absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-blue-300 uppercase">{c.eyebrow}</span>
            <h1 className="mt-8 text-5xl leading-[1.08] font-semibold tracking-tight sm:text-6xl lg:text-7xl">{c.title}</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">{c.intro}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href={`/${lang}/products`} className="inline-flex min-h-12 items-center rounded-full bg-blue-600 px-7 text-sm font-semibold text-white transition-colors hover:bg-blue-500">{c.explore}</Link>
              <Link href={`/${lang}/about`} className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10">{c.about}</Link>
            </div>
          </div>
          <div aria-hidden="true" className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-8 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl sm:p-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-6"><span className="text-sm font-semibold tracking-[0.18em] text-slate-300 uppercase">Zirocraft</span><span className="text-sm font-bold text-blue-400">z.</span></div>
              <p className="py-10 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Built with purpose.<br /><span className="text-slate-400">Designed for reality.</span></p>
              <div className="space-y-4 border-t border-white/10 pt-6">
                {["Practical", "Adaptable", "Maintainable"].map((item, index) => <div key={item} className="flex items-center gap-4"><span className="text-sm font-medium text-blue-400">0{index + 1}</span><span className="font-medium text-white">{item}</span></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl"><span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">{c.products}</span><h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{c.productsIntro}</h2></div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {products.map((product) => <article key={product.slug} className="rounded-3xl border border-border bg-surface p-8 sm:p-10">
              <div className="flex flex-wrap items-center justify-between gap-3"><span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">{product.category}</span><span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">{getProductStatusLabel(product.status, lang)}</span></div>
              <h3 className="mt-8 text-3xl font-semibold tracking-tight text-foreground">{product.name}</h3><p className="mt-4 leading-7 text-muted">{product.description[lang]}</p>
              <Link href={`/${lang}/products/${product.slug}`} className="mt-8 inline-flex font-semibold text-accent hover:text-accent-hover">{lang === "id" ? "Pelajari produk" : "Discover product"} <span aria-hidden="true" className="ml-2">→</span></Link>
            </article>)}
          </div>
        </div>
      </section>
      <section className="bg-surface py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8"><div><span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">{c.about}</span><h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{lang === "id" ? "Teknologi seharusnya melayani manusia dan bisnis." : "Technology should serve people and businesses."}</h2></div><p className="text-lg leading-8 text-muted">{c.aboutText}</p></div>
      </section>
      <section className="bg-white px-6 py-24"><div className="mx-auto max-w-5xl rounded-3xl bg-[#101828] px-8 py-16 text-center text-white sm:px-16"><h2 className="text-3xl font-semibold sm:text-4xl">{c.contact}</h2><p className="mx-auto mt-5 max-w-xl leading-8 text-slate-300">{c.contactText}</p><Link href={`/${lang}/contact`} className="mt-8 inline-flex min-h-12 items-center rounded-full bg-blue-600 px-7 text-sm font-semibold text-white hover:bg-blue-500">{c.contactButton}</Link></div></section>
    </>
  );
}
