import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, productText } from "@/lib/products";

export async function generateMetadata({ params }: PageProps<"/[locale]/products">): Promise<Metadata> {
  const { locale } = await params;
  const language = locale === "id" ? "id" : "en";
  return createPageMetadata({
    locale: language,
    title: language === "id" ? "Produk" : "Products",
    description: language === "id"
      ? "Jelajahi produk perangkat lunak yang sedang dikembangkan ZiroCraft."
      : "Explore software products currently being developed by ZiroCraft."
  });
}

export default async function ProductsPage({ params }: PageProps<"/[locale]/products">) {
  const { locale } = await params;
  if (locale !== "id" && locale !== "en") notFound();
  const id = locale === "id";
  return <>
    <section className="bg-[#15191f] py-24 text-white sm:py-36">
      <div className="site-container"><span className="eyebrow !text-[#9db4ff]">{id ? "Portofolio produk" : "Product portfolio"}</span><h1 className="display-heading mt-8 max-w-4xl">{id ? "Perangkat lunak untuk pekerjaan yang berbeda." : "Software for different kinds of work."}</h1><p className="mt-8 max-w-2xl text-base leading-8 text-white/60">{id ? "Dua area operasional menjadi fokus pengembangan produk ZiroCraft saat ini. Keduanya memiliki kebutuhan dan pendekatan yang berbeda." : "Two operational domains are the current focus of ZiroCraft's product development. Each comes with its own needs and approach."}</p></div>
    </section>
    <section className="bg-[#f5f4f0] py-20 sm:py-28">
      <div className="site-container">
        {products.map((product,index) => {
          const copy = productText(product,locale);
          const isPos = product.slug === "ziropos";
          return <article key={product.slug} className="grid gap-0 border-b border-[#d9dad6] py-10 first:pt-0 last:border-0 lg:grid-cols-[.9fr_1.1fr] lg:gap-16 lg:py-16">
            <div className={`product-art ${isPos ? "product-art-pos" : "product-art-wms"} min-h-[300px] lg:min-h-[390px]`} aria-hidden="true"><div className="art-core" /><span className="absolute bottom-5 left-5 z-10 font-mono text-[10px] tracking-[.18em] text-[#26313b]">{isPos ? "TRANSACTIONS / BUSINESS" : "STORAGE / MOVEMENT"}</span></div>
            <div className="flex flex-col justify-center py-8 lg:py-0">
              <div className="flex flex-wrap items-center gap-3"><span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#284fce]">0{index+1} / {copy.category}</span><span className="text-[10px] font-semibold uppercase tracking-[.12em] text-[#8b6939]">{id ? "Dalam pengembangan" : "In development"}</span></div>
              <h2 className="mt-6 text-4xl font-semibold tracking-[-.06em] sm:text-5xl">{product.name}</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#56616d]">{copy.summary}</p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#626d78]">{copy.description}</p>
              <Link href={`/${locale}/products/${product.slug}`} className="mt-8 inline-flex w-fit items-center gap-8 border-b border-[#15191f] pb-2 text-sm font-semibold hover:border-[#315fea] hover:text-[#284fce]">{id ? "Lihat arah pengembangan" : "Explore product direction"} <span aria-hidden="true">↗</span></Link>
            </div>
          </article>;
        })}
      </div>
    </section>
    <section className="bg-[#15191f] py-20 text-white sm:py-24"><div className="site-container flex flex-col justify-between gap-8 md:flex-row md:items-end"><div className="max-w-2xl"><span className="eyebrow !text-[#9db4ff]">{id ? "Punya kebutuhan khusus?" : "Have a specific need?"}</span><h2 className="mt-6 text-3xl font-semibold tracking-[-.05em] sm:text-4xl">{id ? "Mari diskusikan konteks bisnis Anda." : "Let's discuss your business context."}</h2></div><Link href={`/${locale}/contact`} className="inline-flex min-h-12 items-center justify-between gap-8 border border-white/30 px-5 text-sm font-semibold hover:bg-white hover:text-[#15191f]">{id ? "Hubungi kami" : "Get in touch"} <span aria-hidden="true">↗</span></Link></div></section>
  </>;
}
