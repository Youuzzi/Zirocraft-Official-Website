import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
const contactEmail="zirocraftid@gmail.com";
const contactImage="https://images.unsplash.com/photo-1742836531271-98fd8151d257?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000";
export async function generateMetadata({params}:PageProps<"/[locale]/contact">):Promise<Metadata>{const {locale}=await params;return locale==="id"?{title:"Kontak Zirocraft",description:"Hubungi Zirocraft untuk pertanyaan, diskusi produk, atau kolaborasi."}:{title:"Contact Zirocraft",description:"Get in touch with Zirocraft for inquiries, product discussions, or collaboration."};}
export default async function ContactPage({params}:PageProps<"/[locale]/contact">){
 const {locale}=await params;if(locale!=="id"&&locale!=="en")notFound();const id=locale==="id";
 return <>
 <section className="bg-[#f7f8fa] py-20 sm:py-28"><div className="site-container grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
 <div><span className="eyebrow">{id?"Kontak":"Contact"}</span><h1 className="display-heading mt-7 text-5xl font-semibold sm:text-7xl">{id?"Mari mulai percakapan.":"Let's start a conversation."}</h1><p className="body-copy mt-7 max-w-xl text-lg">{id?"Hubungi Zirocraft untuk pertanyaan umum, diskusi produk, atau peluang kolaborasi.":"Reach out to Zirocraft for general inquiries, product discussions, or collaboration opportunities."}</p><div className="mt-10 border-t border-[#e3e7ed] pt-7"><span className="text-xs font-bold uppercase tracking-[.16em] text-[#667085]">Email</span><a href={"mailto:"+contactEmail} className="mt-3 block break-all text-xl font-semibold text-[#3157d5] hover:underline sm:text-2xl">{contactEmail}</a></div></div>
 <div className="image-frame relative aspect-[5/4] rounded-[1.7rem]"><Image src={contactImage} alt={id?"Lingkungan usaha retail dan teknologi kasir":"Retail business environment and point-of-sale technology"} fill priority sizes="(max-width:1024px) 100vw,50vw" className="object-cover"/><div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/50 bg-white/90 p-5 backdrop-blur sm:inset-x-7 sm:bottom-7"><p className="text-sm font-semibold text-[#111827]">{id?"Terbuka untuk diskusi yang relevan.":"Open to meaningful conversations."}</p><p className="mt-1 text-xs text-[#667085]">{id?"Sampaikan konteks kebutuhan Anda melalui email.":"Share the context of your inquiry by email."}</p></div></div>
 </div></section>
 <section className="bg-white py-14"><div className="site-container flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><p className="max-w-2xl text-sm leading-7 text-[#667085]">{id?"Kami akan meninjau pertanyaan Anda dan merespons sesuai kebutuhan.":"We will review your inquiry and respond as appropriate."}</p><Link href={"mailto:"+contactEmail} className="button-primary w-fit">{id?"Kirim email":"Send an email"} ↗</Link></div></section>
 </>;
}