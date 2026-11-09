import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { products, productText } from "@/lib/products";
import SystemsArtwork from "@/components/visuals/systems-artwork";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (locale !== "id" && locale !== "en") notFound();
  const t = getDictionary(locale);
  const id = locale === "id";
  const principles = id
    ? [["01", "Praktis", "Berangkat dari kebutuhan dan tantangan operasional yang nyata."], ["02", "Adaptif", "Dirancang agar dapat berkembang mengikuti kebutuhan bisnis."], ["03", "Terpelihara", "Dibangun dengan fondasi yang jelas dan perhatian pada keberlanjutan."]]
    : [["01", "Practical", "Grounded in real operational needs and challenges."], ["02", "Adaptable", "Designed to evolve alongside changing business needs."], ["03", "Maintainable", "Built on clear foundations with long-term care in mind."]];
  return <>
    <section className="relative overflow-hidden bg-[#15191f] text-[#f3f1ec]">
      <div className="site-container relative z-10 grid min-h-[650px] items-center gap-10 py-20 lg:grid-cols-[.92fr_1.08fr] lg:py-24">
        <div className="motion-rise">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[.2em] text-[#91a9ff]">{id ? "ZIROCRAFT / SISTEM DIGITAL" : "ZIROCRAFT / DIGITAL SYSTEMS"}</span>
          <h1 className="display-heading mt-8 max-w-[720px] text-[clamp(3.5rem,7vw,7.3rem)] font-semibold">{id ? <>Sistem di balik <span className="text-[#91a9ff]">bisnis</span> yang bergerak.</> : <>The systems behind <span className="text-[#91a9ff]">business</span> in motion.</>}</h1>
          <p className="mt-8 max-w-lg text-base leading-8 text-white/65 sm:text-lg">{id ? "Zirocraft mengembangkan teknologi praktis untuk membantu bisnis mengelola operasi—dari titik penjualan hingga alur pergudangan." : "Zirocraft develops practical technology to help businesses manage operations—from the point of sale to the movement of goods."}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href={"/"+locale+"/products"} className="button-primary bg-[#f3f1ec] text-[#15191f] hover:bg-white">{t.home.explore}<span aria-hidden="true">↗</span></Link>
            <Link href={"/"+locale+"/about"} className="button-secondary border-white/25 text-white hover:border-white">{t.home.about}</Link>
          </div>
          <div className="mt-16 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[.16em] text-white/40"><span className="h-px w-12 bg-[#91a9ff]" />{id ? "Perusahaan teknologi independen" : "Independent technology company"}</div>
        </div>
        <div className="motion-rise motion-delay-2"><SystemsArtwork /></div>
      </div>
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
    </section>

    <section className="bg-[#f3f1ec] py-24 sm:py-32">
      <div className="site-container grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
        <div><span className="eyebrow">{id ? "PANDANGAN KAMI" : "OUR POINT OF VIEW"}</span><p className="mt-6 font-mono text-xs tracking-[.12em] text-[#8b929b]">01 / THE BIGGER PICTURE</p></div>
        <div><h2 className="display-heading max-w-5xl text-4xl font-medium sm:text-6xl">{id ? "Bisnis bergerak melalui banyak proses. Teknologi yang baik membuat semuanya saling terhubung." : "Business moves through many processes. Good technology helps them work as one."}</h2><p className="body-copy mt-8 max-w-2xl text-lg">{id ? "Kami membangun solusi digital dengan perhatian pada alur kerja, kejelasan operasional, dan kebutuhan yang terus berkembang." : "We build digital solutions with attention to workflows, operational clarity, and changing needs."}</p></div>
      </div>
    </section>

    <section className="bg-[#e9e6df] py-24 sm:py-32">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><span className="eyebrow">{id ? "PORTOFOLIO / 02" : "PORTFOLIO / 02"}</span><h2 className="display-heading mt-6 max-w-3xl text-4xl font-semibold sm:text-6xl">{id ? "Dua domain. Satu cara berpikir." : "Two domains. One way of thinking."}</h2></div><p className="body-copy max-w-md">{id ? "Produk yang kami kembangkan berangkat dari kebutuhan operasional yang berbeda, dengan fondasi teknologi yang terarah." : "The products we develop address different operational needs, built with a considered technology foundation."}</p></div>
        <div className="mt-14 grid gap-px bg-[#c9c6bf] lg:grid-cols-2">
          {products.map((product, index) => {
            const copy = productText(product, locale);
            const pos = product.slug === "ziropos";
            return <article key={product.slug} className="group flex min-h-[430px] flex-col justify-between bg-[#f8f7f3] p-8 sm:p-12">
              <div className="flex items-start justify-between gap-5"><span className={"font-mono text-[10px] tracking-[.16em] "+(pos ? "text-[#167c78]" : "text-[#b36b2d]")}>0{index+1} / {pos ? "COMMERCE" : "WAREHOUSE"}</span><span className="border border-[#d8d6d0] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[.12em] text-[#69717b]">{t.home.status}</span></div>
              <div className="py-12"><div className={"mb-7 grid h-12 w-12 place-items-center border-2 "+(pos ? "border-[#167c78]" : "border-[#c47732]")}><span className={"font-mono text-sm "+(pos ? "text-[#167c78]" : "text-[#c47732]")}>{pos ? "P" : "W"}</span></div><h3 className="display-heading text-4xl font-semibold sm:text-5xl">{product.name}</h3><p className="mt-3 font-mono text-[10px] uppercase tracking-[.12em] text-[#69717b]">{copy.category}</p><p className="body-copy mt-6 max-w-lg">{copy.summary}</p></div>
              <Link href={"/"+locale+"/products/"+product.slug} className="flex items-center justify-between border-t border-[#d8d6d0] pt-5 text-sm font-semibold"><span>{t.home.learnMore}</span><span className="text-xl transition-transform group-hover:translate-x-2" aria-hidden="true">↗</span></Link>
            </article>;
          })}
        </div>
      </div>
    </section>

    <section className="bg-[#f3f1ec] py-24 sm:py-32">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><span className="eyebrow">{id ? "PRINSIP / 03" : "PRINCIPLES / 03"}</span><h2 className="display-heading mt-6 text-4xl font-semibold sm:text-5xl">{id ? "Cara kami membangun." : "How we build."}</h2></div><div className="border-t border-[#d8d6d0]">{principles.map(([number,title,description])=><article key={number} className="grid gap-4 border-b border-[#d8d6d0] py-7 sm:grid-cols-[80px_1fr_1.2fr] sm:items-start"><span className="font-mono text-xs text-[#315ce8]">{number}</span><h3 className="text-xl font-semibold tracking-tight">{title}</h3><p className="body-copy text-sm">{description}</p></article>)}</div></div>
      </div>
    </section>

    <section className="system-panel py-20 sm:py-28"><div className="site-container grid items-center gap-10 lg:grid-cols-[1fr_auto]"><div><span className="font-mono text-[10px] tracking-[.18em] text-[#91a9ff]">{id ? "MULAI DARI SEBUAH PERCAKAPAN" : "START WITH A CONVERSATION"}</span><h2 className="display-heading mt-6 max-w-3xl text-4xl font-semibold sm:text-6xl">{id ? "Ada proses yang ingin dibuat lebih baik?" : "Have a process you want to make better?"}</h2><p className="mt-6 max-w-xl text-sm leading-7 text-white/60">{id ? "Ceritakan kebutuhan atau pertanyaan Anda kepada Zirocraft." : "Tell Zirocraft about your questions, needs, or ideas."}</p></div><Link href={"/"+locale+"/contact"} className="button-primary w-fit bg-[#f3f1ec] text-[#15191f] hover:bg-white">{t.home.contact} ↗</Link></div></section>
  </>;
}
