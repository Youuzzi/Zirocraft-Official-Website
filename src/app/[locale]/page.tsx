import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, productText } from "@/lib/products";
import { HomeHero } from "@/features/home/components/home-hero";

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
      <HomeHero locale={locale} />
      <section className="bg-[#f5f4f0] py-24 sm:py-32">
        <div className="site-container grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
          <div><span className="eyebrow">{id ? "Sudut pandang kami" : "Our point of view"}</span><p className="mt-6 font-mono text-xs text-[#626d78]">01 / THE WHY</p></div>
          <div>
            <h2 className="section-heading max-w-4xl text-balance">{id ? "Teknologi terbaik bukan yang paling rumit. Tetapi yang membuat pekerjaan terasa lebih terarah." : "The best technology isn't the most complicated. It's what makes work feel more considered."}</h2>
            <div className="mt-10 grid gap-8 border-t border-[#d9dad6] pt-7 sm:grid-cols-[1fr_1fr]">
              <p className="text-base leading-8 text-[#56616d]">{id ? "ZiroCraft adalah perusahaan software yang berfokus pada solusi digital dan produk untuk kebutuhan operasional bisnis." : "ZiroCraft is a software company focused on digital solutions and products for business operations."}</p>
              <p className="text-base leading-8 text-[#56616d]">{id ? "Kami memulai dari memahami alur kerja, merapikan masalah, lalu membangun perangkat lunak yang dapat berkembang bersama kebutuhan." : "We start by understanding workflows, clarifying the problem, then building software that can evolve with changing needs."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="site-container">
          <div className="flex flex-col justify-between gap-7 border-b border-[#d9dad6] pb-8 sm:flex-row sm:items-end">
            <div><span className="eyebrow">{id ? "Produk yang sedang dibangun" : "What we're building"}</span><h2 className="section-heading mt-6 max-w-2xl">{id ? "Dua fokus. Satu cara berpikir." : "Two domains. One way of thinking."}</h2></div>
            <Link href={`/${locale}/products`} className="inline-flex items-center gap-3 text-sm font-semibold text-[#284fce] hover:text-[#1f3f9e]">{id ? "Lihat semua produk" : "View all products"} <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="mt-12 divide-y divide-[#d9dad6]">
            {products.map((product, index) => {
              const copy = productText(product, locale);
              return (
                <article key={product.slug} className="grid gap-7 py-10 lg:grid-cols-[72px_1fr_1fr] lg:items-center lg:gap-10">
                  <span className="font-mono text-xs text-[#626d78]">0{index + 1}</span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3"><span className="font-mono text-[10px] uppercase tracking-[.14em] text-[#284fce]">{copy.category}</span><span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.1em] text-[#8b6939]"><span className="h-1.5 w-1.5 rounded-full bg-[#e5a34b]" />{id ? "Dalam pengembangan" : "In development"}</span></div>
                    <h3 className="mt-4 text-3xl font-semibold tracking-[-.055em] text-[#15191f] sm:text-4xl">{product.name}</h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#56616d]">{copy.summary}</p>
                    <Link href={`/${locale}/products/${product.slug}`} className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-[#15191f] hover:text-[#284fce]">{id ? "Kenali produk" : "Discover the product"} <span aria-hidden="true">↗</span></Link>
                  </div>
                  <div className={`product-art ${product.slug === "ziropos" ? "product-art-pos" : "product-art-wms"}`} aria-hidden="true"><div className="art-core" /><span className="absolute bottom-4 left-5 z-10 font-mono text-[9px] tracking-[.18em] text-[#15191f]">{product.slug === "ziropos" ? "POINT OF SALE / BUSINESS" : "WAREHOUSE / OPERATIONS"}</span></div>
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
            <div className="border-t border-[#bfc1bb] pt-5"><span className="font-mono text-xs text-[#284fce]">A / 01</span><h3 className="mt-4 text-lg font-semibold">{id ? "Mulai dari masalah" : "Start with the problem"}</h3><p className="mt-3 text-sm leading-7 text-[#56616d]">{id ? "Memahami konteks dan alur kerja sebelum menentukan bentuk solusi." : "Understand the context and workflow before deciding on a solution."}</p></div>
            <div className="border-t border-[#bfc1bb] pt-5"><span className="font-mono text-xs text-[#284fce]">B / 02</span><h3 className="mt-4 text-lg font-semibold">{id ? "Bangun untuk berkembang" : "Build to evolve"}</h3><p className="mt-3 text-sm leading-7 text-[#56616d]">{id ? "Memikirkan kejelasan, kemampuan adaptasi, dan pemeliharaan sejak awal." : "Consider clarity, adaptability, and maintainability from the beginning."}</p></div>
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
