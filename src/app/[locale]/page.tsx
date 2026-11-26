import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, productText } from "@/lib/products";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const language = locale === "id" ? "id" : "en";
  return createPageMetadata({
    locale: language,
    title: language === "id" ? "Solusi Digital untuk Bisnis Modern" : "Digital Solutions for Modern Businesses",
    description: language === "id"
      ? "ZiroCraft mengembangkan solusi digital dan perangkat lunak untuk membantu bisnis mengelola transaksi dan operasional dengan lebih terarah."
      : "ZiroCraft develops digital solutions and software that help businesses manage transactions and operations with greater clarity."
  });
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (locale !== "id" && locale !== "en") notFound();
  const id = locale === "id";
  return (
    <>
      <section className="relative overflow-hidden bg-[#15191f] text-white">
        <div aria-hidden="true" className="absolute right-0 top-0 h-full w-[48%] border-l border-white/10 opacity-60 max-lg:hidden">
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.055) 1px,transparent 1px)", backgroundSize: "64px 64px" }} />
          <div className="absolute right-[13%] top-[16%] h-[62%] w-[58%] border border-white/20 motion-drift" />
          <div className="absolute right-[20%] top-[23%] h-[48%] w-[45%] bg-[#315fea] p-5 shadow-2xl">
            <div className="flex h-full flex-col justify-between border border-white/25 p-5">
              <span className="font-mono text-[10px] uppercase tracking-[.22em] text-blue-100">ZIROCRAFT / DIGITAL SYSTEMS</span>
              <div className="grid grid-cols-4 gap-2">
                <span className="col-span-3 h-2 bg-white/80" /><span className="h-2 bg-white/30" />
                <span className="col-span-2 h-2 bg-white/45" /><span className="col-span-2 h-2 bg-white/20" />
              </div>
              <span className="font-mono text-xs text-white/70">BUILT AROUND REAL WORK.</span>
            </div>
          </div>
          <span className="absolute bottom-[12%] left-[10%] font-mono text-[10px] tracking-[.2em] text-white/45">01 — 02 / PRODUCT THINKING</span>
        </div>
        <div className="site-container relative grid min-h-[680px] items-center py-24 sm:py-32 lg:min-h-[760px] lg:grid-cols-[1.08fr_.92fr]">
          <div className="max-w-[760px] motion-rise">
            <span className="eyebrow !text-[#9db4ff]">{id ? "Teknologi dengan tujuan" : "Technology with intent"}</span>
            <h1 className="display-heading mt-8 max-w-[850px] text-balance">{id ? "Membangun teknologi yang bergerak bersama bisnis." : "Building technology that moves with business."}</h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-white/65 sm:text-lg">{id ? "Kami merancang dan mengembangkan perangkat lunak untuk membantu bisnis mengelola pekerjaan nyata—dari transaksi hingga operasional gudang." : "We design and build software that helps businesses manage real work—from everyday transactions to warehouse operations."}</p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link href={`/${locale}/products`} className="inline-flex min-h-14 items-center gap-6 bg-[#315fea] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#2449b8]">{id ? "Jelajahi produk" : "Explore products"} <span aria-hidden="true">↗</span></Link>
              <Link href={`/${locale}/about`} className="inline-flex min-h-12 items-center text-sm font-medium text-white/75 transition-colors hover:text-white">{id ? "Kenali ZiroCraft" : "Discover ZiroCraft"} <span aria-hidden="true" className="ml-3">→</span></Link>
            </div>
          </div>
          <div className="mt-16 flex items-end justify-between border-t border-white/15 pt-5 lg:hidden">
            <span className="font-mono text-[10px] tracking-[.18em] text-white/45">ZIROCRAFT / DIGITAL SYSTEMS</span>
            <span className="text-xs text-white/55">01 — 02</span>
          </div>
          <div className="absolute bottom-8 right-0 hidden font-mono text-[10px] tracking-[.18em] text-white/40 lg:block">INDEPENDENT SOFTWARE & PRODUCT DEVELOPMENT</div>
        </div>
      </section>

      <section className="bg-[#f5f4f0] py-24 sm:py-32">
        <div className="site-container grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
          <div><span className="eyebrow">{id ? "Sudut pandang kami" : "Our point of view"}</span><p className="mt-6 font-mono text-xs text-[#89919a]">01 / THE WHY</p></div>
          <div>
            <h2 className="section-heading max-w-4xl text-balance">{id ? "Teknologi terbaik bukan yang paling rumit. Tetapi yang membuat pekerjaan terasa lebih terarah." : "The best technology isn't the most complicated. It's what makes work feel more considered."}</h2>
            <div className="mt-10 grid gap-8 border-t border-[#d9dad6] pt-7 sm:grid-cols-[1fr_1fr]">
              <p className="text-base leading-8 text-[#66717d]">{id ? "ZiroCraft adalah perusahaan software yang berfokus pada solusi digital dan produk untuk kebutuhan operasional bisnis." : "ZiroCraft is a software company focused on digital solutions and products for business operations."}</p>
              <p className="text-base leading-8 text-[#66717d]">{id ? "Kami memulai dari memahami alur kerja, merapikan masalah, lalu membangun perangkat lunak yang dapat berkembang bersama kebutuhan." : "We start by understanding workflows, clarifying the problem, then building software that can evolve with changing needs."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="site-container">
          <div className="flex flex-col justify-between gap-7 border-b border-[#d9dad6] pb-8 sm:flex-row sm:items-end">
            <div><span className="eyebrow">{id ? "Produk yang sedang dibangun" : "What we're building"}</span><h2 className="section-heading mt-6 max-w-2xl">{id ? "Dua fokus. Satu cara berpikir." : "Two domains. One way of thinking."}</h2></div>
            <Link href={`/${locale}/products`} className="inline-flex items-center gap-3 text-sm font-semibold text-[#315fea] hover:text-[#2449b8]">{id ? "Lihat semua produk" : "View all products"} <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="mt-12 divide-y divide-[#d9dad6]">
            {products.map((product, index) => {
              const copy = productText(product, locale);
              return (
                <article key={product.slug} className="grid gap-7 py-10 lg:grid-cols-[72px_1fr_1fr] lg:items-center lg:gap-10">
                  <span className="font-mono text-xs text-[#89919a]">0{index + 1}</span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3"><span className="font-mono text-[10px] uppercase tracking-[.14em] text-[#315fea]">{copy.category}</span><span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.1em] text-[#8b6939]"><span className="h-1.5 w-1.5 rounded-full bg-[#e5a34b]" />{id ? "Dalam pengembangan" : "In development"}</span></div>
                    <h3 className="mt-4 text-3xl font-semibold tracking-[-.055em] text-[#15191f] sm:text-4xl">{product.name}</h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#66717d]">{copy.summary}</p>
                    <Link href={`/${locale}/products/${product.slug}`} className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-[#15191f] hover:text-[#315fea]">{id ? "Kenali produk" : "Discover the product"} <span aria-hidden="true">↗</span></Link>
                  </div>
                  <div className={`product-art ${product.slug === "ziropos" ? "product-art-pos" : "product-art-wms"}`} aria-hidden="true"><div className="art-core" /><span className="absolute bottom-4 left-5 z-10 font-mono text-[9px] tracking-[.18em] text-[#26313b]/60">{product.slug === "ziropos" ? "POINT OF SALE / BUSINESS" : "WAREHOUSE / OPERATIONS"}</span></div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#e9e8e2] py-24 sm:py-32">
        <div className="site-container grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div><span className="eyebrow">{id ? "Cara kami bekerja" : "How we work"}</span><h2 className="section-heading mt-6 max-w-2xl">{id ? "Dibangun dengan pertimbangan. Dikembangkan dengan tujuan." : "Designed with consideration. Developed with intent."}</h2></div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border-t border-[#bfc1bb] pt-5"><span className="font-mono text-xs text-[#315fea]">A / 01</span><h3 className="mt-4 text-lg font-semibold">{id ? "Mulai dari masalah" : "Start with the problem"}</h3><p className="mt-3 text-sm leading-7 text-[#66717d]">{id ? "Memahami konteks dan alur kerja sebelum menentukan bentuk solusi." : "Understand the context and workflow before deciding on a solution."}</p></div>
            <div className="border-t border-[#bfc1bb] pt-5"><span className="font-mono text-xs text-[#315fea]">B / 02</span><h3 className="mt-4 text-lg font-semibold">{id ? "Bangun untuk berkembang" : "Build to evolve"}</h3><p className="mt-3 text-sm leading-7 text-[#66717d]">{id ? "Memikirkan kejelasan, kemampuan adaptasi, dan pemeliharaan sejak awal." : "Consider clarity, adaptability, and maintainability from the beginning."}</p></div>
          </div>
        </div>
      </section>

      <section className="bg-[#15191f] py-24 text-white sm:py-32">
        <div className="site-container flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-3xl"><span className="eyebrow !text-[#9db4ff]">{id ? "Mari berdiskusi" : "Start a conversation"}</span><h2 className="section-heading mt-6 text-balance">{id ? "Punya masalah operasional yang ingin dibuat lebih sederhana?" : "Have an operational challenge worth making simpler?"}</h2><p className="mt-6 max-w-xl text-base leading-8 text-white/60">{id ? "Ceritakan kebutuhan atau ide Anda. Kami terbuka untuk diskusi produk dan kolaborasi." : "Tell us about your needs or ideas. We're open to product discussions and collaboration."}</p></div>
          <Link href={`/${locale}/contact`} className="inline-flex min-h-14 shrink-0 items-center justify-between gap-10 border border-white/25 px-6 text-sm font-semibold transition-colors hover:border-white hover:bg-white hover:text-[#15191f]">{id ? "Hubungi ZiroCraft" : "Contact ZiroCraft"} <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  );
}
