import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { products, productText } from "@/lib/products";
const posImage="https://images.unsplash.com/photo-1742836531271-98fd8151d257?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000";
const warehouseImage="https://images.pexels.com/photos/6170405/pexels-photo-6170405.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-6170405.jpg&fm=jpg";
type Props=PageProps<"/[locale]/products/[slug]">;
export function generateStaticParams(){return ["id","en"].flatMap(locale=>products.map(product=>({locale,slug:product.slug})));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {locale,slug}=await params;const product=products.find(item=>item.slug===slug);if(!product)return {};return {title:product.name,description:product.summary[locale==="id"?"id":"en"]};}
export default async function ProductDetailPage({params}:Props){
 const {locale,slug}=await params;if(locale!=="id"&&locale!=="en")notFound();const product=products.find(item=>item.slug===slug);if(!product)notFound();
 const t=getDictionary(locale);const copy=productText(product,locale);const id=locale==="id";const isPos=product.slug==="ziropos";
 return <>
 <section className="bg-[#f7f8fa] py-14 sm:py-20"><div className="site-container"><Link href={"/"+locale+"/products"} className="text-sm font-semibold text-[#667085] transition-colors hover:text-[#3157d5]">← {t.products.back}</Link><div className="mt-12 grid items-end gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
 <div><span className={"text-xs font-bold uppercase tracking-[.18em] "+(isPos?"text-[#167c78]":"text-[#c47732]")}>{copy.category}</span><h1 className="display-heading mt-5 text-6xl font-semibold sm:text-7xl">{product.name}</h1><p className="body-copy mt-6 max-w-xl text-lg">{copy.summary}</p><span className="mt-7 inline-flex rounded-full border border-[#dfe3e9] bg-white px-4 py-2 text-xs font-semibold text-[#667085]">{t.home.status}</span></div>
 <div className="image-frame relative aspect-[16/10] rounded-[1.7rem]"><Image src={isPos?posImage:warehouseImage} alt={isPos?(id?"Tablet pada meja kasir retail":"Tablet at a retail counter"):(id?"Pekerja memeriksa paket di gudang":"Warehouse worker inspecting packages")} fill priority sizes="(max-width:1024px) 100vw,55vw" className="object-cover"/></div>
 </div></div></section>
 <section className="section-space bg-white"><div className="site-container grid gap-12 lg:grid-cols-[1fr_330px] lg:gap-20"><div className="max-w-3xl"><span className="eyebrow">{id?"Tentang produk":"About the product"}</span><h2 className="display-heading mt-6 text-4xl font-semibold sm:text-5xl">{id?"Dikembangkan dengan fokus pada alur kerja nyata.":"Developed around real-world workflows."}</h2><p className="body-copy mt-7 text-lg">{copy.description}</p><p className="body-copy mt-6 text-sm">{id?"Informasi ini menggambarkan arah pengembangan saat ini. Ketersediaan dan cakupan fitur dapat berubah selama proses pengembangan.":"This information describes the current development direction. Availability and feature scope may change as development progresses."}</p></div>
 <aside className="h-fit border-t-2 border-[#3157d5] bg-[#f7f8fa] p-7 sm:p-8"><span className="text-xs font-bold uppercase tracking-[.16em] text-[#667085]">{id?"Status produk":"Product status"}</span><p className="mt-3 text-2xl font-semibold">{t.home.status}</p><p className="body-copy mt-3 text-sm">{id?"Kami terus mengembangkan dan mengevaluasi arah produk.":"We continue to develop and evaluate the product direction."}</p><Link href={"/"+locale+"/contact"} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#3157d5]">{t.products.contact} ↗</Link></aside></div></section>
 <section className="bg-[#111827] py-16 text-white"><div className="site-container flex flex-col justify-between gap-6 md:flex-row md:items-center"><div><h2 className="text-3xl font-semibold">{id?"Jelajahi portofolio Zirocraft":"Explore the Zirocraft portfolio"}</h2><p className="mt-3 text-sm text-white/60">{id?"Kenali produk lain yang sedang kami kembangkan.":"Discover the other product in development."}</p></div><Link href={"/"+locale+"/products"} className="button-primary w-fit bg-white text-[#111827] hover:bg-[#e9edf5]">{t.products.back} ↗</Link></div></section>
 </>;
}