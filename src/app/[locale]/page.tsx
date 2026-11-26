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
    title: language === "id" ? "Studio Teknologi Kreatif" : "Creative Technology Studio",
    description: language === "id"
      ? "ZiroCraft menggabungkan strategi, desain, dan software untuk menciptakan pengalaman digital dan sistem bisnis."
      : "ZiroCraft brings strategy, design, and software together to create digital experiences and business systems."
  });
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (locale !== "id" && locale !== "en") notFound();
  const id = locale === "id";
  const services = id
    ? [{ n: "01", title: "Digital experiences", copy: "Website dan pengalaman digital yang punya karakter, tujuan, dan arah." }, { n: "02", title: "Business software", copy: "Aplikasi yang menyederhanakan pekerjaan dan menghubungkan proses bisnis." }, { n: "03", title: "Product engineering", copy: "Dari ide awal hingga software yang terus berkembang bersama penggunanya." }]
    : [{ n: "01", title: "Digital experiences", copy: "Websites and digital experiences with character, purpose, and direction." }, { n: "02", title: "Business software", copy: "Applications that simplify work and connect business processes." }, { n: "03", title: "Product engineering", copy: "From the first idea to software that evolves with its users." }];

  return (
    <>
      <HomeHero locale={locale} />

      <section className="ticker-band" aria-label={id ? "Fokus ZiroCraft" : "ZiroCraft focus"}>
        <div className="ticker-track" aria-hidden="true">
          {Array.from({ length: 4 }).map((_, index) => <span key={index}>THINK BIGGER <b>✳</b> BUILD BETTER <b>✳</b> MOVE FORWARD <b>✳</b></span>)}
        </div>
      </section>

      <section className="manifesto-section">
        <div className="site-container grid gap-12 py-28 sm:py-36 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div className="manifesto-side"><span className="eyebrow">{id ? "Sudut pandang kami" : "Our point of view"}</span><p className="mt-8 font-mono text-xs text-white/35">[ THE WHY / 001 ]</p><div className="manifesto-stamp" aria-hidden="true">ZC<br />®</div></div>
          <div>
            <h2 className="manifesto-heading">{id ? <>Dunia tidak kekurangan teknologi.<br /><em>Dunia butuh teknologi yang berarti.</em></> : <>The world doesn&apos;t need more technology.<br /><em>It needs technology that means something.</em></>}</h2>
            <div className="mt-12 grid gap-8 border-t border-white/15 pt-7 sm:grid-cols-2">
              <p className="text-base leading-8 text-white/60">{id ? "Kami percaya software yang baik lahir dari rasa ingin tahu, pemahaman terhadap masalah, dan keberanian untuk membuat sesuatu dengan cara berbeda." : "We believe good software comes from curiosity, a deep understanding of problems, and the courage to make things differently."}</p>
              <p className="text-base leading-8 text-white/60">{id ? "ZiroCraft adalah ruang untuk mengubah ide menjadi produk dan pengalaman digital yang berguna, jelas, dan siap berkembang." : "ZiroCraft is where ideas become useful, thoughtful digital products and experiences built to keep evolving."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="site-container py-28 sm:py-36">
          <div className="flex flex-col justify-between gap-8 border-b border-[#282d34] pb-10 md:flex-row md:items-end">
            <div><span className="eyebrow">{id ? "Apa yang kami lakukan" : "What we do"}</span><h2 className="section-heading mt-6 max-w-3xl text-white">{id ? "Dari pikiran pertama hingga produk yang nyata." : "From the first thought to something real."}</h2></div>
            <p className="max-w-sm text-sm leading-7 text-white/50">{id ? "Kami bergerak lintas disiplin untuk menciptakan solusi digital yang terasa utuh—bukan sekadar terlihat bagus." : "We work across disciplines to create digital solutions that feel complete—not just look good."}</p>
          </div>
          <div className="service-list mt-6">
            {services.map((service) => <article key={service.n} className="service-row group"><span className="service-number">{service.n}</span><h3>{service.title}</h3><p>{service.copy}</p><span className="service-arrow" aria-hidden="true">↗</span></article>)}
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="site-container py-28 sm:py-36">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div><span className="eyebrow">{id ? "Dibangun di studio" : "Made in the studio"}</span><h2 className="section-heading mt-6 max-w-3xl">{id ? "Produk dengan ambisi yang nyata." : "Products with real ambition."}</h2></div>
            <Link href={`/${locale}/products`} className="text-link-dark">{id ? "Jelajahi semua produk" : "Explore all products"} <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="product-showcase mt-14">
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
                      <div><span className="product-status"><i />{id ? "Dalam pengembangan" : "In development"}</span><h3>{product.name}</h3><p>{copy.summary}</p></div>
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
        <div className="site-container grid gap-12 py-28 sm:py-36 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div><span className="eyebrow">{id ? "Cara kami bergerak" : "How we move"}</span><h2 className="section-heading mt-6 text-white">{id ? "Rasa ingin tahu adalah titik awal." : "Curiosity is where it starts."}</h2><p className="mt-7 max-w-md text-sm leading-7 text-white/55">{id ? "Setiap tantangan punya konteks. Kami menyelaminya sebelum menentukan apa yang perlu dibangun." : "Every challenge has a context. We get into it before deciding what should be built."}</p></div>
          <div className="process-steps">
            {[{n:"01",t:id?"Temukan":"Discover",d:id?"Memahami orang, proses, dan masalah yang sebenarnya.":"Understand the people, processes, and real problem."},{n:"02",t:id?"Bayangkan":"Imagine",d:id?"Membuka kemungkinan dan merancang arah yang tepat.":"Explore possibilities and shape the right direction."},{n:"03",t:id?"Wujudkan":"Make",d:id?"Membangun dengan detail, disiplin, dan tujuan.":"Build with detail, discipline, and intention."},{n:"04",t:id?"Kembangkan":"Evolve",d:id?"Belajar dari penggunaan dan terus membuatnya lebih baik.":"Learn from use and keep making it better."}].map(step => <div className="process-step" key={step.n}><span>{step.n}</span><h3>{step.t}</h3><p>{step.d}</p><i aria-hidden="true">↗</i></div>)}
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-shape" aria-hidden="true" />
        <div className="site-container relative z-10 py-28 sm:py-40">
          <span className="eyebrow !text-[#11151b]">{id ? "Punya sesuatu dalam pikiran?" : "Got something in mind?"}</span>
          <h2 className="closing-heading mt-8">{id ? <>Mari wujudkan<br /><em>ide itu.</em></> : <>Let&apos;s make<br /><em>it happen.</em></>}</h2>
          <div className="mt-10 flex flex-col justify-between gap-8 border-t border-black/20 pt-7 sm:flex-row sm:items-end">
            <p className="max-w-md text-sm leading-7 text-black/65">{id ? "Ceritakan ide, tantangan, atau hal yang ingin kamu bangun. Mari mulai dari sebuah percakapan." : "Tell us about an idea, a challenge, or something you want to build. Let's start with a conversation."}</p>
            <Link href={`/${locale}/contact`} className="dark-button">{id ? "Hubungi ZiroCraft" : "Talk to ZiroCraft"} <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
