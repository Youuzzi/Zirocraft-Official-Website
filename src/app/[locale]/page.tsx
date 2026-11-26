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

  return (
    <>
      <HomeHero locale={locale} />

      <section className="ticker-band" aria-label={id ? "Fokus ZiroCraft" : "ZiroCraft focus"}>
        <div className="site-container flex flex-wrap items-center justify-between gap-x-8 gap-y-2 font-mono text-[10px] uppercase tracking-[.14em] text-white/65">
          <span>{id ? "Strategi yang jelas" : "Clear strategy"}</span>
          <span aria-hidden="true">✳</span>
          <span>{id ? "Desain yang terarah" : "Intentional design"}</span>
          <span aria-hidden="true">✳</span>
          <span>{id ? "Software yang berguna" : "Useful software"}</span>
        </div>
      </section>

      <section className="manifesto-section">
        <div className="site-container grid gap-7 py-16 sm:py-20 lg:grid-cols-[.65fr_1.35fr] lg:gap-16">
          <div>
            <span className="eyebrow">{id ? "Tentang ZiroCraft" : "About ZiroCraft"}</span>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[.15em] text-white/45">Independent studio / 2026</p>
          </div>
          <div>
            <h2 className="manifesto-heading">{id ? <>Teknologi yang tepat.<br /><em>Untuk pekerjaan yang berarti.</em></> : <>The right technology.<br /><em>For work that matters.</em></>}</h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              {id
                ? "ZiroCraft menggabungkan strategi, desain, dan engineering untuk menciptakan pengalaman digital serta sistem bisnis yang praktis dan siap berkembang."
                : "ZiroCraft brings strategy, design, and engineering together to create practical digital experiences and business systems built to evolve."}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {(id ? ["Web & platform", "Business systems", "Digital products"] : ["Web & platforms", "Business systems", "Digital products"]).map((item) => <span key={item} className="border border-white/20 px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-white/70">{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="site-container py-16 sm:py-20">
          <div className="flex flex-col justify-between gap-5 border-b border-[#282d34] pb-7 md:flex-row md:items-end">
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

      <section className="products-section">
        <div className="site-container py-16 sm:py-20">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">{id ? "Produk kami" : "Our products"}</span>
              <h2 className="section-heading mt-4 max-w-2xl">{id ? "Software yang sedang kami bangun." : "Software we are building."}</h2>
            </div>
            <Link href={`/${locale}/products`} className="text-link-dark">{id ? "Lihat semua produk" : "View all products"} <span aria-hidden="true">↗</span></Link>
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
            <p className="max-w-sm text-sm leading-6 text-white/60">{id ? "Proses kolaboratif dengan fokus pada kebutuhan dan hasil." : "A collaborative process focused on real needs and outcomes."}</p>
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
            <p className="max-w-md text-sm leading-7 text-black/70">{id ? "Ceritakan kebutuhan atau ide yang ingin kamu wujudkan bersama ZiroCraft." : "Tell us what you need or what you want to build with ZiroCraft."}</p>
            <Link href={`/${locale}/contact`} className="dark-button">{id ? "Hubungi kami" : "Contact us"} <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
