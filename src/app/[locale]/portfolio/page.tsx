import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: PageProps<"/[locale]/portfolio">): Promise<Metadata> {
  const { locale } = await params;
  const language = locale === "id" ? "id" : "en";
  return createPageMetadata({
    locale: language,
    title: language === "id" ? "Portofolio" : "Portfolio",
    description: language === "id"
      ? "Lihat produk dan pekerjaan pengembangan software ZiroCraft."
      : "Explore software products and development work by ZiroCraft."
  });
}

export default async function PortfolioPage({ params }: PageProps<"/[locale]/portfolio">) {
  const { locale } = await params;
  if (locale !== "id" && locale !== "en") notFound();
  const id = locale === "id";
  return <>
    <section className="bg-[#15191f] py-24 text-white sm:py-36"><div className="site-container"><span className="eyebrow !text-[#9db4ff]">{id ? "Portofolio & pengembangan" : "Portfolio & product work"}</span><h1 className="display-heading mt-8 max-w-5xl">{id ? "Ide yang dibentuk menjadi perangkat lunak." : "Ideas shaped into working software."}</h1><p className="mt-8 max-w-2xl text-base leading-8 text-white/60">{id ? "Halaman ini menampilkan area produk dan pekerjaan rekayasa yang sedang dibangun ZiroCraft. Status setiap proyek dijelaskan secara terbuka." : "This page presents product and engineering work being developed at ZiroCraft, with each project's status stated clearly."}</p></div></section>
    <section className="bg-[#f5f4f0] py-20 sm:py-28"><div className="site-container">
      <article className="grid gap-10 border-b border-[#d9dad6] pb-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
        <div className="product-art product-art-wms min-h-[320px] lg:min-h-[440px]" aria-hidden="true"><div className="art-core" /><span className="absolute bottom-5 left-5 z-10 font-mono text-[10px] tracking-[.18em] text-[#26313b]/65">WAREHOUSE SYSTEM / ENGINEERING</span></div>
        <div className="flex flex-col justify-center"><span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#315fea]">01 / Warehouse management system</span><h2 className="mt-6 text-4xl font-semibold tracking-[-.06em] sm:text-5xl">ZiroLogistics</h2><span className="mt-4 w-fit border border-[#e5a34b]/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[.12em] text-[#8b6939]">{id ? "Dalam pengembangan" : "In development"}</span><p className="mt-6 max-w-xl text-base leading-8 text-[#66717d]">{id ? "Pengembangan WMS SaaS dengan fokus awal pada kebutuhan gudang kecil dan menengah. Pekerjaan mencakup fondasi multi-tenant, struktur gudang, kontrol persediaan, dan alur operasional yang dikembangkan bertahap." : "A WMS SaaS product initially focused on small and medium-sized warehouse operations. Work includes a multi-tenant foundation, warehouse structure, inventory control, and operational workflows developed iteratively."}</p><p className="mt-5 max-w-xl text-sm leading-7 text-[#626d78]">{id ? "Ini merupakan pengembangan produk internal, bukan studi implementasi pelanggan atau bukti penggunaan produksi." : "This is internal product development, not a customer implementation case study or evidence of production usage."}</p><Link href={`/${locale}/products/zirologistics`} className="mt-8 inline-flex w-fit items-center gap-8 border-b border-[#15191f] pb-2 text-sm font-semibold hover:text-[#315fea]">{id ? "Lihat arah produk" : "Explore product direction"} <span aria-hidden="true">↗</span></Link></div>
      </article>
      <article className="grid gap-10 py-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
        <div className="order-2 flex flex-col justify-center lg:order-1"><span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#315fea]">02 / Point of sale & business management</span><h2 className="mt-6 text-4xl font-semibold tracking-[-.06em] sm:text-5xl">ZiroPOS</h2><span className="mt-4 w-fit border border-[#e5a34b]/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[.12em] text-[#8b6939]">{id ? "Dalam pengembangan" : "In development"}</span><p className="mt-6 max-w-xl text-base leading-8 text-[#66717d]">{id ? "Arah pengembangan platform point of sale dan manajemen bisnis yang dirancang untuk mendukung kebutuhan transaksi serta operasional usaha." : "A point-of-sale and business management platform in development, designed around transaction and business operations."}</p><p className="mt-5 max-w-xl text-sm leading-7 text-[#626d78]">{id ? "Informasi ini menjelaskan fokus produk saat ini dan tidak menyatakan bahwa layanan telah tersedia untuk penggunaan umum." : "This describes the current product focus and does not indicate that the service is available for general use."}</p><Link href={`/${locale}/products/ziropos`} className="mt-8 inline-flex w-fit items-center gap-8 border-b border-[#15191f] pb-2 text-sm font-semibold hover:text-[#315fea]">{id ? "Lihat arah produk" : "Explore product direction"} <span aria-hidden="true">↗</span></Link></div>
        <div className="product-art product-art-pos order-1 min-h-[320px] lg:order-2 lg:min-h-[440px]" aria-hidden="true"><div className="art-core" /><span className="absolute bottom-5 left-5 z-10 font-mono text-[10px] tracking-[.18em] text-[#26313b]/65">POINT OF SALE / PRODUCT STUDY</span></div>
      </article>
    </div></section>
    <section className="bg-[#15191f] py-20 text-white sm:py-24"><div className="site-container flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><div className="max-w-2xl"><span className="eyebrow !text-[#9db4ff]">{id ? "Punya proyek?" : "Have a project?"}</span><h2 className="mt-6 text-3xl font-semibold tracking-[-.05em] sm:text-4xl">{id ? "Mari bicarakan kebutuhan software Anda." : "Let's talk about your software needs."}</h2></div><Link href={`/${locale}/contact`} className="inline-flex min-h-12 items-center justify-between gap-8 bg-[#315fea] px-5 text-sm font-semibold hover:bg-[#2449b8]">{id ? "Hubungi kami" : "Contact us"} <span aria-hidden="true">↗</span></Link></div></section>
  </>;
}
