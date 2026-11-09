import Image from "next/image";
import Link from "next/link";
import CurrentYear from "@/components/layout/current-year";
import type { Locale } from "@/lib/i18n/dictionaries";
type Props={locale:Locale;dictionary:ReturnType<typeof import("@/lib/i18n/dictionaries").getDictionary>};
export default function Footer({locale,dictionary}:Props){
 const t=dictionary.footer;
 return <footer className="mt-auto bg-[#111827] text-white"><div className="site-container py-16 sm:py-20"><div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
 <div><Link href={"/"+locale} className="relative block h-10 w-[190px]" aria-label="Zirocraft homepage"><Image src="/MyLogo/White%20Text.png" alt="Zirocraft" fill sizes="190px" className="object-contain object-left"/></Link><p className="mt-6 max-w-xs text-sm leading-7 text-white/55">{t.tagline}</p><span className="mt-8 block text-[10px] font-semibold uppercase tracking-[.2em] text-white/35">Practical technology</span></div>
 <div><h2 className="text-xs font-bold uppercase tracking-[.16em] text-white/45">{t.explore}</h2><ul className="mt-5 space-y-4 text-sm text-white/75"><li><Link href={"/"+locale+"/products"} className="hover:text-white">{dictionary.navigation.products}</Link></li><li><Link href={"/"+locale+"/products/ziropos"} className="hover:text-white">ZiroPOS</Link></li><li><Link href={"/"+locale+"/products/zirologistics"} className="hover:text-white">ZiroLogistics</Link></li></ul></div>
 <div><h2 className="text-xs font-bold uppercase tracking-[.16em] text-white/45">{t.company}</h2><ul className="mt-5 space-y-4 text-sm text-white/75"><li><Link href={"/"+locale+"/about"} className="hover:text-white">{t.about}</Link></li><li><Link href={"/"+locale+"/contact"} className="hover:text-white">{t.contact}</Link></li></ul></div>
 <div><h2 className="text-xs font-bold uppercase tracking-[.16em] text-white/45">{t.legal}</h2><ul className="mt-5 space-y-4 text-sm text-white/75"><li><Link href={"/"+locale+"/privacy-policy"} className="hover:text-white">{t.privacy}</Link></li><li><Link href={"/"+locale+"/terms"} className="hover:text-white">{t.terms}</Link></li></ul></div>
 </div><div className="mt-16 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row"><p>© <CurrentYear/> Zirocraft. {t.rights}</p><p>{locale==="id"?"Dibangun dengan tujuan.":"Built with purpose."}</p></div></div></footer>;
}