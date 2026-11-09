import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "@/components/layout/language-switcher";
import type { Locale } from "@/lib/i18n/dictionaries";
type Props={locale:Locale;dictionary:ReturnType<typeof import("@/lib/i18n/dictionaries").getDictionary>};
export default function Navbar({locale,dictionary}:Props){
 const nav=dictionary.navigation;
 return <header className="sticky top-0 z-50 border-b border-[#e3e7ed]/80 bg-white/90 backdrop-blur-xl"><div className="site-container flex min-h-[76px] items-center justify-between gap-4">
 <Link href={"/"+locale} className="relative block h-9 w-[164px] shrink-0 sm:h-10 sm:w-[184px]" aria-label="Zirocraft homepage"><Image src="/MyLogo/Black%20Text.png" alt="Zirocraft" fill priority sizes="(max-width:640px) 164px,184px" className="object-contain object-left"/></Link>
 <nav aria-label={nav.mainLabel} className="hidden items-center gap-8 md:flex">
 <details className="group relative"><summary className="flex cursor-pointer list-none items-center gap-2 py-3 text-sm font-medium text-[#475467] transition-colors hover:text-[#3157d5] [&::-webkit-details-marker]:hidden">{nav.products}<span aria-hidden="true" className="text-[10px] transition-transform group-open:rotate-180">⌄</span></summary>
 <div className="absolute left-0 top-full grid w-[350px] gap-1 rounded-2xl border border-[#e3e7ed] bg-white p-3 shadow-[0_18px_50px_rgba(17,24,39,.13)]">
 <Link href={"/"+locale+"/products"} className="rounded-xl px-4 py-3 text-sm font-semibold text-[#111827] hover:bg-[#f7f8fa]">{locale==="id"?"Semua produk":"All products"} <span className="float-right">↗</span></Link>
 <Link href={"/"+locale+"/products/ziropos"} className="rounded-xl px-4 py-3 hover:bg-[#f7f8fa]"><span className="block text-sm font-semibold text-[#167c78]">ZiroPOS</span><span className="mt-1 block text-xs text-[#667085]">{locale==="id"?"POS & manajemen bisnis":"POS & business management"}</span></Link>
 <Link href={"/"+locale+"/products/zirologistics"} className="rounded-xl px-4 py-3 hover:bg-[#f7f8fa]"><span className="block text-sm font-semibold text-[#c47732]">ZiroLogistics</span><span className="mt-1 block text-xs text-[#667085]">Warehouse Management System</span></Link></div></details>
 <Link href={"/"+locale+"/about"} className="text-sm font-medium text-[#475467] transition-colors hover:text-[#3157d5]">{nav.about}</Link><Link href={"/"+locale+"/contact"} className="text-sm font-medium text-[#475467] transition-colors hover:text-[#3157d5]">{nav.contact}</Link></nav>
 <div className="flex items-center gap-2 sm:gap-3"><LanguageSwitcher locale={locale}/><Link href={"/"+locale+"/contact"} className="hidden rounded-full bg-[#3157d5] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#2546b7] sm:inline-flex">{locale==="id"?"Hubungi kami":"Get in touch"}</Link>
 <details className="group relative md:hidden"><summary className="flex min-h-10 cursor-pointer list-none items-center gap-2 rounded-full border border-[#e3e7ed] px-4 py-2 text-xs font-semibold text-[#111827] [&::-webkit-details-marker]:hidden">{nav.menu}<span aria-hidden="true" className="transition-transform group-open:rotate-180">⌄</span></summary>
 <nav aria-label={nav.mobileLabel} className="absolute right-0 top-[calc(100%+1rem)] flex w-[min(19rem,calc(100vw-2rem))] flex-col rounded-2xl border border-[#e3e7ed] bg-white p-3 shadow-xl">
 <Link href={"/"+locale+"/products"} className="rounded-xl px-4 py-3 text-sm font-semibold text-[#111827] hover:bg-[#f7f8fa]">{nav.products}</Link><Link href={"/"+locale+"/products/ziropos"} className="rounded-xl px-4 py-3 text-sm text-[#475467] hover:bg-[#f7f8fa]">ZiroPOS</Link><Link href={"/"+locale+"/products/zirologistics"} className="rounded-xl px-4 py-3 text-sm text-[#475467] hover:bg-[#f7f8fa]">ZiroLogistics</Link><Link href={"/"+locale+"/about"} className="rounded-xl px-4 py-3 text-sm text-[#475467] hover:bg-[#f7f8fa]">{nav.about}</Link><Link href={"/"+locale+"/contact"} className="rounded-xl px-4 py-3 text-sm text-[#475467] hover:bg-[#f7f8fa]">{nav.contact}</Link>
 </nav></details></div></div></header>;
}