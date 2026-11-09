import Image from "next/image";
import { siteImages } from "@/lib/site-images";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { products, productText } from "@/lib/products";
export async function generateMetadata({params}:PageProps<"/[locale]/products">):Promise<Metadata>{const {locale}=await params;return locale==="id"?{title:"Produk",description:"Jelajahi produk Zirocraft untuk mendukung operasional bisnis dan pergudangan."}:{title:"Products",description:"Explore Zirocraft products for business and warehouse operations."};}
export default async function ProductsPage({params}:PageProps<"/[locale]/products">){
 const {locale}=await params;if(locale!=="id"&&locale!=="en")notFound();const t=getDictionary(locale);const id=locale==="id";
 return <>
 <section className="bg-[#f7f8fa] py-20 sm:py-28"><div className="site-container grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end"><div><span className="eyebrow">{t.products.eyebrow}</span><h1 className="display-heading mt-7 max-w-4xl text-5xl font-semibold sm:text-7xl">{t.products.title}</h1></div><p className="body-copy max-w-xl text-lg">{t.products.description}</p></div></section>
 <section className="section-space bg-white"><div className="site-container space-y-10">{products.map((product,index)=>{const copy=productText(product,locale);const isPos=product.slug==="ziropos";return <article key={product.slug} className="grid overflow-hidden rounded-[1.7rem] border border-[#e3e7ed] lg:grid-cols-[1.02fr_.98fr]">
 <div className={"image-frame relative min-h-[300px] "+(index===1?"lg:order-2":"")}><Image src={isPos?siteImages.retail:siteImages.warehouse} alt={isPos?(id?"Perangkat tablet pada area kasir":"Tablet at a retail checkout"):(id?"Pekerja memeriksa paket di gudang":"Worker inspecting parcels in a warehouse")} fill sizes="(max-width:1024px) 100vw,50vw" className="object-cover"/></div>
 <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14"><div className="flex flex-wrap items-center justify-between gap-3"><span className={"text-xs font-bold uppercase tracking-[.16em] "+(isPos?"text-[#167c78]":"text-[#c47732]")}>{copy.category}</span><span className="rounded-full bg-[#f2f4f7] px-3 py-1.5 text-[10px] font-semibold text-[#667085]">{t.home.status}</span></div><h2 className="mt-7 text-4xl font-semibold tracking-tight">{product.name}</h2><p className="body-copy mt-5 text-base">{copy.summary}</p><p className="body-copy mt-4 text-sm">{copy.description}</p><Link href={"/"+locale+"/products/"+product.slug} className="mt-8 inline-flex w-fit items-center gap-3 text-sm font-semibold text-[#111827] transition-colors hover:text-[#3157d5]">{t.home.learnMore}<span aria-hidden="true">↗</span></Link></div>
 </article>})}</div></section>
 <section className="bg-[#f0f2f6] py-16"><div className="site-container flex flex-col justify-between gap-6 md:flex-row md:items-center"><p className="max-w-2xl text-xl font-medium leading-relaxed text-[#344054]">{id?"Portofolio akan berkembang seiring kebutuhan dan arah pengembangan Zirocraft.":"The portfolio will evolve alongside Zirocraft's needs and development direction."}</p><Link href={"/"+locale+"/contact"} className="button-primary w-fit">{t.home.contact} ↗</Link></div></section>
 </>;
}