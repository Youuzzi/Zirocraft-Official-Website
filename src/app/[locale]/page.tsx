import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { products, productText } from "@/lib/products";

const posImage = "https://images.unsplash.com/photo-1742836531271-98fd8151d257?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000";
const warehouseImage = "https://images.pexels.com/photos/6170405/pexels-photo-6170405.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-6170405.jpg&fm=jpg";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (locale !== "id" && locale !== "en") notFound();
  const t = getDictionary(locale);
  const id = locale === "id";
  const principles = id
    ? [["01", "Praktis", "Berangkat dari kebutuhan dan tantangan operasional yang nyata."], ["02", "Adaptif", "Dirancang agar dapat berkembang mengikuti kebutuhan bisnis."], ["03", "Terpelihara", "Dibangun dengan fondasi yang jelas dan perhatian pada keberlanjutan."]]
    : [["01", "Practical", "Grounded in real operational needs and challenges."], ["02", "Adaptable", "Designed to evolve alongside changing business needs."], ["03", "Maintainable", "Built on clear foundations with long-term care in mind."]];
  return <>
    <section className="overflow-hidden bg-[#f7f8fa]">
      <div className="site-container grid min-h-[660px] items-center gap-12 py-16 lg:grid-cols-[.92fr_1.08fr] lg:gap-16 lg:py-24">
        <div className="relative z-10 motion-rise">
          <span className="eyebrow">{t.home.eyebrow}</span>
          <h1 className="display-heading mt-7 max-w-2xl text-[clamp(3.25rem,6.5vw,6.2rem)] font-semibold">{t.home.title}</h1>
          <p className="body-copy mt-7 max-w-xl text-lg">{t.home.description}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={"/" + locale + "/products"} className="button-primary">{t.home.explore}<span aria-hidden="true">↗</span></Link>
            <Link href={"/" + locale + "/about"} className="button-secondary">{t.home.about}</Link>
          </div>
          <div className="mt-14 flex items-center gap-4 text-xs font-semibold uppercase tracking-[.14em] text-[#667085]"><span className="h-px w-10 bg-[#3157d5]" /><span>{id ? "Perusahaan teknologi · Portofolio produk" : "Technology company · Product portfolio"}</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-[650px] motion-rise motion-delay-2">
          <div className="absolute -right-5 -top-7 h-36 w-36 rounded-full border border-[#3157d5]/20" />
          <div className="absolute -bottom-8 -left-8 h-44 w-44 rounded-full bg-[#dfe7fb]" />
          <div className="image-frame relative aspect-[1.08/1] rounded-[2rem] shadow-[0_28px_80px_rgba(17,24,39,.13)]">
            <Image src={posImage} alt={id ? "Perangkat tablet pada meja kasir toko" : "Tablet point-of-sale setup at a retail counter"} fill priority sizes="(max-width: 1024px) 100vw, 52vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-white sm:bottom-8 sm:left-8 sm:right-8">
              <div><span className="text-[10px] font-bold uppercase tracking-[.2em] text-white/75">Zirocraft / 01</span><p className="mt-2 text-xl font-semibold sm:text-2xl">{id ? "Teknologi untuk operasional" : "Technology for operations"}</p></div>
              <span className="rounded-full border border-white/35 bg-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md">{id ? "Portofolio" : "Portfolio"}</span>
            </div>
          </div>
          <div className="motion-float absolute -bottom-7 right-5 max-w-[245px] rounded-2xl border border-white/70 bg-white/95 p-4 shadow-[0_16px_45px_rgba(17,24,39,.13)] backdrop-blur sm:right-[-1.5rem] sm:p-5">
            <div className="flex items-center justify-between gap-3"><span className="text-xs font-bold tracking-wide text-[#167c78]">ZIROPOS</span><span className="h-2 w-2 rounded-full bg-[#c47732]" /></div>
            <p className="mt-2 text-sm font-semibold text-[#111827]">{id ? "Sedang dikembangkan" : "In development"}</p>
            <p className="mt-1 text-xs leading-5 text-[#667085]">{id ? "Fondasi untuk kebutuhan operasional bisnis." : "A foundation for business operations."}</p>
          </div>
        </div>
      </div>
    </section>
    <section className="section-space bg-white"><div className="site-container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
      <div><span className="eyebrow">{t.home.introEyebrow}</span><h2 className="display-heading mt-6 max-w-xl text-4xl font-semibold sm:text-5xl">{t.home.introTitle}</h2></div>
      <div className="flex flex-col justify-between gap-8"><p className="body-copy max-w-2xl text-lg">{t.home.intro}</p><div className="flex items-center gap-5"><span className="h-px flex-1 bg-[#e3e7ed]" /><span className="text-xs font-semibold uppercase tracking-[.16em] text-[#667085]">{id ? "Dibangun dengan tujuan" : "Built with purpose"}</span></div></div>
    </div></section>
    <section className="section-space bg-[#f0f2f6]"><div className="site-container">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><span className="eyebrow">{t.home.portfolioEyebrow}</span><h2 className="display-heading mt-6 max-w-2xl text-4xl font-semibold sm:text-5xl">{t.home.portfolioTitle}</h2></div><p className="body-copy max-w-md">{t.home.portfolioDescription}</p></div>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {products.map((product) => {
          const copy = productText(product, locale);
          const isPos = product.slug === "ziropos";
          return <article key={product.slug} className="group overflow-hidden rounded-[1.65rem] border border-[#e3e7ed] bg-white transition-transform duration-500 hover:-translate-y-1">
            <div className="image-frame relative aspect-[16/9]">
              <Image src={isPos ? posImage : warehouseImage} alt={isPos ? (id ? "Perangkat kasir digital di lingkungan retail" : "Digital point-of-sale setup in a retail environment") : (id ? "Pekerja memeriksa paket di area gudang" : "Warehouse worker inspecting packages on shelves")} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute left-5 top-5 rounded-full border border-white/50 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-[#111827]">{isPos ? "01 / BUSINESS" : "02 / WAREHOUSE"}</div>
            </div>
            <div className="p-7 sm:p-9">
              <div className="flex flex-wrap items-center justify-between gap-3"><span className={"text-xs font-bold uppercase tracking-[.14em] " + (isPos ? "text-[#167c78]" : "text-[#c47732]")}>{copy.category}</span><span className="rounded-full bg-[#f2f4f7] px-3 py-1.5 text-[10px] font-semibold text-[#667085]">{t.home.status}</span></div>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-[#111827]">{product.name}</h3><p className="body-copy mt-3 max-w-xl">{copy.summary}</p>
              <Link href={"/" + locale + "/products/" + product.slug} className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[#111827] transition-colors group-hover:text-[#3157d5]">{t.home.learnMore}<span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span></Link>
            </div>
          </article>;
        })}
      </div>
    </div></section>
    <section className="section-space bg-white"><div className="site-container">
      <div className="max-w-2xl"><span className="eyebrow">{id ? "Prinsip kerja" : "How we think"}</span><h2 className="display-heading mt-6 text-4xl font-semibold sm:text-5xl">{id ? "Cara berpikir di balik setiap solusi." : "The thinking behind every solution."}</h2></div>
      <div className="mt-14 grid gap-0 border-t border-[#e3e7ed] md:grid-cols-3">
        {principles.map(([number,title,description], index) => <article key={number} className="border-b border-[#e3e7ed] py-8 md:border-b-0 md:border-r md:px-8 md:py-10 md:first:pl-0 md:last:border-r-0">
          <span className="text-xs font-bold tracking-[.18em] text-[#3157d5]">{number}</span><h3 className="mt-7 text-2xl font-semibold tracking-tight">{title}</h3><p className="body-copy mt-3 max-w-xs">{description}</p><div className={"mt-8 h-px w-16 bg-[#3157d5] motion-line motion-delay-" + (index + 1)} />
        </article>)}
      </div>
    </div></section>
    <section className="overflow-hidden bg-[#111827] py-20 text-white sm:py-24"><div className="site-container grid items-center gap-10 lg:grid-cols-[1fr_auto]">
      <div><span className="text-xs font-bold uppercase tracking-[.2em] text-[#a9baf7]">{id ? "Terhubung melalui teknologi" : "Connected through technology"}</span><h2 className="display-heading mt-5 max-w-3xl text-4xl font-semibold sm:text-5xl">{t.home.closingTitle}</h2><p className="mt-5 max-w-xl leading-8 text-white/65">{t.home.closingDescription}</p></div>
      <Link href={"/" + locale + "/contact"} className="button-primary w-fit bg-white text-[#111827] hover:bg-[#e9edf5]">{t.home.contact}<span aria-hidden="true">↗</span></Link>
    </div></section>
  </>;
}