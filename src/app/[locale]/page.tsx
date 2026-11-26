import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, productText } from "@/features/products";
import { HomeHero } from "@/features/home/components/home-hero";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const language = locale === "id" ? "id" : "en";
  return createPageMetadata({
    locale: language,
    title: language === "id" ? "Studio Teknologi & Software" : "Technology & Software Studio",
    description: language === "id"
      ? "ZiroCraft merancang pengalaman digital dan membangun software untuk membantu bisnis bekerja lebih baik."
      : "ZiroCraft designs digital experiences and builds software that helps businesses work better."
  });
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (locale !== "id" && locale !== "en") notFound();
  const id = locale === "id";
  const services = id
    ? [
        { n: "01", title: "Website & digital experience", copy: "Website profesional, platform digital, dan antarmuka yang mudah digunakan." },
        { n: "02", title: "Business software", copy: "Aplikasi untuk merapikan operasional dan menghubungkan proses bisnis." },
        { n: "03", title: "Product engineering", copy: "Perancangan, pengembangan, integrasi, dan peningkatan produk software." }
      ]
    : [
        { n: "01", title: "Websites & digital experiences", copy: "Professional websites, digital platforms, and intuitive interfaces." },
        { n: "02", title: "Business software", copy: "Applications that simplify operations and connect business processes." },
        { n: "03", title: "Product engineering", copy: "Software product design, development, integration, and improvement." }
      ];
  const steps = id
    ? [{ n: "01", title: "Pahami", copy: "Tujuan, pengguna, dan masalah yang perlu diselesaikan." }, { n: "02", title: "Rancang", copy: "Solusi, alur, dan pengalaman yang tepat." }, { n: "03", title: "Bangun", copy: "Kembangkan, uji, dan tingkatkan secara bertahap." }]
    : [{ n: "01", title: "Understand", copy: "The goals, people, and problem to solve." }, { n: "02", title: "Design", copy: "The right solution, workflow, and experience." }, { n: "03", title: "Build", copy: "Develop, validate, and improve continuously." }];
  const spotlights = id
    ? [
        { number: "01", category: "WAREHOUSE SYSTEMS / INTERNAL PRODUCT", title: "Warehouse operations platform", product: "ZiroLogistics", copy: "Fondasi SaaS multi-tenant, master data gudang, persediaan, dan alur operasional yang dikembangkan bertahap.", href: `/${locale}/products/zirologistics` },
        { number: "02", category: "COMMERCE SYSTEMS / INTERNAL PRODUCT", title: "Point-of-sale platform", product: "ZiroPOS", copy: "Arah pengembangan sistem transaksi dan manajemen bisnis untuk kebutuhan operasional usaha.", href: `/${locale}/products/ziropos` }
      ]
    : [
        { number: "01", category: "WAREHOUSE SYSTEMS / INTERNAL PRODUCT", title: "Warehouse operations platform", product: "ZiroLogistics", copy: "A multi-tenant SaaS foundation, warehouse master data, inventory, and operational workflows under active development.", href: `/${locale}/products/zirologistics` },
        { number: "02", category: "COMMERCE SYSTEMS / INTERNAL PRODUCT", title: "Point-of-sale platform", product: "ZiroPOS", copy: "A product direction for transaction processing and business operations, currently in development.", href: `/${locale}/products/ziropos` }
      ];

  return (
    <>
      <HomeHero locale={locale} />

      <section className="ticker-band" aria-label={id ? "Fokus ZiroCraft" : "ZiroCraft focus"}>
        <div className="site-container flex flex-wrap items-center justify-between gap-x-8 gap-y-2 font-mono text-[10px] uppercase tracking-[.14em] text-white/75">
          <span>{id ? "Strategi yang jelas" : "Clear strategy"}</span>
          <span aria-hidden="true" className="text-[#22B8C8]">✳</span>
          <span>{id ? "Desain yang terarah" : "Intentional design"}</span>
          <span aria-hidden="true" className="text-[#22B8C8]">✳</span>
          <span>{id ? "Software yang berguna" : "Useful software"}</span>
        </div>
      </section>

      <section className="manifesto-section">
        <div className="site-container grid gap-7 py-16 sm:py-20 lg:grid-cols-[.65fr_1.35fr] lg:gap-16">
          <div>
            <span className="eyebrow">{id ? "Tentang ZiroCraft" : "About ZiroCraft"}</span>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[.15em] text-[#A9BAC8]">Independent technology studio / 2026</p>
          </div>
          <div>
            <h2 className="manifesto-heading">{id ? <>Teknologi yang tepat.<br /><em>Untuk pekerjaan yang berarti.</em></> : <>The right technology.<br /><em>For work that matters.</em></>}</h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#D0DCE5] sm:text-base">
              {id
                ? "ZiroCraft menggabungkan strategi, desain, dan engineering untuk menciptakan pengalaman digital serta sistem bisnis yang praktis dan siap berkembang."
                : "ZiroCraft brings strategy, design, and engineering together to create practical digital experiences and business systems built to evolve."}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {(id ? ["Web & platform", "Business systems", "Digital products"] : ["Web & platforms", "Business systems", "Digital products"]).map((item) => <span key={item} className="border border-white/20 px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-[#D0DCE5]">{item}</span>)}
            </div>
            <Link href={`/${locale}/about`} className="mt-7 inline-flex items-center gap-4 text-sm font-semibold text-[#55CBD6] hover:text-white">{id ? "Kenali ZiroCraft" : "Get to know ZiroCraft"} <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="site-container py-16 sm:py-20">
          <div className="flex flex-col justify-between gap-5 border-b border-white/15 pb-7 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">{id ? "Layanan" : "What we do"}</span>
              <h2 className="section-heading mt-4 max-w-2xl text-white">{id ? "Dari kebutuhan menjadi solusi digital." : "From business needs to digital solutions."}</h2>
            </div>
            <Link href={`/${locale}/services`} className="text-link-light">{id ? "Semua layanan" : "All services"} <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="service-list mt-2">
            {services.map((service) => <article key={service.n} className="service-row group"><span className="service-number">{service.n}</span><h3>{service.title}</h3><p>{service.copy}</p><span className="service-arrow" aria-hidden="true">↗</span></article>)}
          </div>
        </div>
      </section>

      <section className="work-section bg-[#F2F7FA] py-16 text-[#102235] sm:py-20">
        <div className="site-container">
          <div className="flex flex-col justify-between gap-5 border-b border-[#B9C9D4] pb-7 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">{id ? "Sorotan pekerjaan" : "Selected work"}</span>
              <h2 className="section-heading mt-4 max-w-3xl">{id ? "Membangun solusi, bukan sekadar tampilan." : "Engineering beyond the interface."}</h2>
            </div>
            <Link href={`/${locale}/portfolio`} className="text-link-dark">{id ? "Jelajahi portofolio" : "Explore projects"} <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {spotlights.map((item) => (
              <Link key={item.number} href={item.href} className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden border border-[#C8D6DF] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#22B8C8] hover:shadow-[0_22px_60px_rgba(12,48,70,.12)] sm:p-8">
                <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border border-[#22B8C8]/25 transition-transform duration-700 group-hover:scale-125" />
                <div className="relative flex items-start justify-between gap-4">
                  <span className="font-mono text-[10px] tracking-[.12em] text-[#155D95]">{item.category}</span>
                  <span className="font-mono text-xs text-[#718596]">{item.number} / 02</span>
                </div>
                <div className="relative mt-14">
                  <span className="font-mono text-[10px] uppercase tracking-[.14em] text-[#526B7C]">{item.product} · {id ? "Pengembangan internal" : "Internal development"}</span>
                  <h3 className="mt-3 max-w-lg text-3xl font-semibold tracking-[-.06em] sm:text-4xl">{item.title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#465766]">{item.copy}</p>
                </div>
                <span className="absolute bottom-7 right-7 grid h-11 w-11 place-items-center rounded-full border border-[#B9C9D4] text-lg transition-all duration-300 group-hover:border-[#22B8C8] group-hover:bg-[#22B8C8] group-hover:text-[#0B1724]" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
          <p className="mt-5 text-xs leading-6 text-[#526B7C]">{id ? "Sorotan ini merupakan pengembangan produk internal, bukan klaim implementasi pelanggan atau produk yang telah dirilis." : "These spotlights represent internal product development, not customer implementations or released products."}</p>
        </div>
      </section>

      <section className="products-section">
        <div className="site-container py-16 sm:py-20">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">{id ? "Produk ZiroCraft" : "ZiroCraft products"}</span>
              <h2 className="section-heading mt-4 max-w-2xl">{id ? "Produk digital dalam pengembangan." : "Digital products in development."}</h2>
            </div>
            <Link href={`/${locale}/products`} className="text-link-dark">{id ? "Semua produk" : "All products"} <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="product-showcase mt-10">
            {products.map((product, index) => {
              const copy = productText(product, locale);
              return (
                <article key={product.slug} className={`showcase-card showcase-${index + 1}`}>
                  <Link href={`/${locale}/products/${product.slug}`} className="showcase-link" aria-label={`${product.name}: ${id ? "lihat detail produk" : "view product details"}`}>
                    <div className={`showcase-art showcase-art-${product.slug}`}>
                      <div className="showcase-window">
                        <div className="window-top"><span /><span /><span /><b>{product.name.toUpperCase()}</b></div>
                        {product.slug === "ziropos" ? <div className="pos-screen"><div className="pos-sidebar" /><div className="pos-main"><i /><i /><i /><strong /></div><div className="pos-total" /></div> : <div className="warehouse-screen"><div className="warehouse-aisle" /><div className="warehouse-aisle" /><div className="warehouse-aisle" /><div className="warehouse-floor" /></div>}
                      </div>
                      <span className="showcase-orbit" aria-hidden="true" />
                      <span className="showcase-art-index">0{index + 1} / 02</span>
                    </div>
                    <div className="showcase-info">
                      <div>
                        <span className="product-status"><i />{id ? "Dalam pengembangan" : "In development"}</span>
                        <h3>{product.name}</h3>
                        <p>{copy.summary}</p>
                      </div>
                      <span className="showcase-cta" aria-hidden="true">↗</span>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="site-container py-16 sm:py-20">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">{id ? "Cara kerja" : "How we work"}</span>
              <h2 className="section-heading mt-4 max-w-xl text-white">{id ? "Terarah dari awal hingga rilis." : "A clear path from idea to release."}</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#C4D0DA]">{id ? "Proses kolaboratif dengan fokus pada kebutuhan dan hasil." : "A collaborative process focused on real needs and outcomes."}</p>
          </div>
          <div className="process-steps">
            {steps.map((step) => <div className="process-step" key={step.n}><span>{step.n}</span><h3>{step.title}</h3><p>{step.copy}</p><i aria-hidden="true">↗</i></div>)}
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-shape" aria-hidden="true" />
        <div className="site-container relative z-10 py-16 sm:py-24">
          <span className="eyebrow !text-[#0B1724]">{id ? "Punya proyek?" : "Have a project?"}</span>
          <h2 className="closing-heading mt-6">{id ? <>Mari mulai<br /><em>percakapan.</em></> : <>Let&apos;s start<br /><em>a conversation.</em></>}</h2>
          <div className="mt-8 flex flex-col justify-between gap-6 border-t border-black/20 pt-6 sm:flex-row sm:items-end">
            <p className="max-w-md text-sm leading-7 text-[#34495A]">{id ? "Ceritakan kebutuhan atau ide yang ingin kamu wujudkan bersama ZiroCraft." : "Tell us what you need or what you want to build with ZiroCraft."}</p>
            <Link href={`/${locale}/contact`} className="dark-button">{id ? "Hubungi kami" : "Contact us"} <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
