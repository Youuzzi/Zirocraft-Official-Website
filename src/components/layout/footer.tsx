import Image from "next/image";
import Link from "next/link";
import CurrentYear from "@/components/layout/current-year";
import type { Locale } from "@/lib/i18n/dictionaries";
type Props={locale:Locale;dictionary:ReturnType<typeof import("@/lib/i18n/dictionaries").getDictionary>};
export default function Footer({locale,dictionary}:Props){
 const t=dictionary.footer;const id=locale==="id";
 return <footer className="mt-auto bg-[#15191f] text-[#f3f1ec]">
  <div className="site-container py-16 sm:py-20">
   <div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
    <div><Link href={"/"+locale} className="relative block h-10 w-[190px]" aria-label="Zirocraft homepage"><Image src="/MyLogo/White%20Text.png" alt="Zirocraft" fill sizes="190px" className="object-contain object-left"/></Link><p className="mt-6 max-w-xs text-sm leading-7 text-white/55">{t.tagline}</p><p className="mt-9 font-mono text-[10px] uppercase tracking-[.18em] text-[#91a9ff]">THE SYSTEMS BEHIND BUSINESS</p></div>
    <div><h2 className="font-mono text-[10px] font-semibold uppercase tracking-[.16em] text-white/40">{t.explore}</h2><ul className="mt-6 space-y-4 text-sm text-white/70"><li><Link href={"/"+locale+"/products"} className="transition-colors hover:text-white">{dictionary.navigation.products}</Link></li><li><Link href={"/"+locale+"/products/ziropos"} className="transition-colors hover:text-[#63c9b8]">ZiroPOS</Link></li><li><Link href={"/"+locale+"/products/zirologistics"} className="transition-colors hover:text-[#e2a05c]">ZiroLogistics</Link></li></ul></div>
    <div><h2 className="font-mono text-[10px] font-semibold uppercase tracking-[.16em] text-white/40">{t.company}</h2><ul className="mt-6 space-y-4 text-sm text-white/70"><li><Link href={"/"+locale+"/about"} className="transition-colors hover:text-white">{t.about}</Link></li><li><Link href={"/"+locale+"/contact"} className="transition-colors hover:text-white">{t.contact}</Link></li><li><a href="mailto:zirocraftid@gmail.com" className="transition-colors hover:text-white">Email ↗</a></li></ul></div>
    <div><h2 className="font-mono text-[10px] font-semibold uppercase tracking-[.16em] text-white/40">{t.legal}</h2><ul className="mt-6 space-y-4 text-sm text-white/70"><li><Link href={"/"+locale+"/privacy-policy"} className="transition-colors hover:text-white">{t.privacy}</Link></li><li><Link href={"/"+locale+"/terms"} className="transition-colors hover:text-white">{t.terms}</Link></li></ul></div>
   </div>
   <div className="flex flex-col justify-between gap-4 pt-6 text-[11px] text-white/40 sm:flex-row sm:items-center"><p>© <CurrentYear/> Zirocraft. {t.rights}</p><p>{id?"Teknologi praktis, dibangun dengan tujuan.":"Practical technology, built with purpose."}</p></div>
  </div>
 </footer>;
}