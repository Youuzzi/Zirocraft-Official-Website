import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "@/components/layout/language-switcher";
import type { Locale } from "@/lib/i18n/dictionaries";
import MenuDisclosure from "@/components/layout/menu-disclosure";
type Props={locale:Locale;dictionary:ReturnType<typeof import("@/lib/i18n/dictionaries").getDictionary>};
export default function Navbar({locale,dictionary}:Props){
 const nav=dictionary.navigation;
 const linkClass="text-[13px] font-medium tracking-tight text-[#535b65] transition-colors hover:text-[#315ce8]";
 return <header className="sticky top-0 z-50 border-b border-[#d8d6d0] bg-[#f3f1ec]/95 backdrop-blur-md">
  <div className="site-container flex min-h-[72px] items-center justify-between gap-4">
   <Link href={"/"+locale} className="relative block h-9 w-[158px] shrink-0 sm:w-[176px]" aria-label="Zirocraft homepage"><Image src="/MyLogo/Black%20Text.png" alt="Zirocraft" fill priority sizes="(max-width:640px) 158px,176px" className="object-contain object-left"/></Link>
   <nav aria-label={nav.mainLabel} className="hidden items-center gap-6 lg:flex">
    <MenuDisclosure className="group relative"><summary className={"flex cursor-pointer list-none items-center gap-2 py-4 "+linkClass+" [&::-webkit-details-marker]:hidden"}>{nav.products}<span aria-hidden="true" className="text-[10px] transition-transform group-open:rotate-180">⌄</span></summary>
     <div className="absolute left-0 top-full grid w-[340px] gap-1 border border-[#d8d6d0] bg-[#fffefa] p-3 shadow-[0_22px_60px_rgba(21,25,31,.14)]">
      <Link href={"/"+locale+"/products"} className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-[#15191f] hover:bg-[#f3f1ec]">{locale==="id"?"Semua produk":"All products"} <span>↗</span></Link>
      <div className="my-1 h-px bg-[#e5e2db]"/>
      <Link href={"/"+locale+"/products/ziropos"} className="px-4 py-3 hover:bg-[#f3f1ec]"><span className="block text-sm font-semibold text-[#167c78]">ZiroPOS</span><span className="mt-1 block text-xs text-[#69717b]">{locale==="id"?"POS & manajemen bisnis":"POS & business management"}</span></Link>
      <Link href={"/"+locale+"/products/zirologistics"} className="px-4 py-3 hover:bg-[#f3f1ec]"><span className="block text-sm font-semibold text-[#b36b2d]">ZiroLogistics</span><span className="mt-1 block text-xs text-[#69717b]">Warehouse Management System</span></Link>
     </div>
    </MenuDisclosure>
    <Link href={"/"+locale+"/about"} className={linkClass}>{nav.about}</Link>
    <Link href={"/"+locale+"/contact"} className={linkClass}>{nav.contact}</Link>
   </nav>
   <div className="flex items-center gap-3"><LanguageSwitcher locale={locale}/>
    <Link href={"/"+locale+"/contact"} className="hidden border border-[#15191f] px-4 py-2.5 text-xs font-semibold text-[#15191f] transition-colors hover:bg-[#15191f] hover:text-white lg:inline-flex">{locale==="id"?"Hubungi kami":"Get in touch"} <span className="ml-3">↗</span></Link>
    <MenuDisclosure className="group relative lg:hidden"><summary aria-label={nav.menu} className="flex min-h-10 cursor-pointer list-none items-center gap-3 border border-[#d8d6d0] px-3 py-2 text-xs font-semibold text-[#15191f] [&::-webkit-details-marker]:hidden"><span>{nav.menu}</span><span aria-hidden="true" className="grid gap-1 transition-transform group-open:rotate-180"><span className="h-px w-3 bg-current"/><span className="h-px w-3 bg-current"/></span></summary>
     <nav aria-label={nav.mobileLabel} className="absolute right-0 top-[calc(100%+1rem)] flex w-[min(20rem,calc(100vw-2rem))] flex-col border border-[#d8d6d0] bg-[#fffefa] p-3 shadow-[0_22px_60px_rgba(21,25,31,.14)]">
      <Link href={"/"+locale+"/products"} className="px-4 py-3 text-sm font-semibold text-[#15191f] hover:bg-[#f3f1ec]">{nav.products}</Link>
      <Link href={"/"+locale+"/products/ziropos"} className="px-4 py-3 text-sm text-[#167c78] hover:bg-[#f3f1ec]">ZiroPOS</Link>
      <Link href={"/"+locale+"/products/zirologistics"} className="px-4 py-3 text-sm text-[#b36b2d] hover:bg-[#f3f1ec]">ZiroLogistics</Link>
      <div className="my-2 h-px bg-[#e5e2db]"/>
      <Link href={"/"+locale+"/about"} className="px-4 py-3 text-sm text-[#535b65] hover:bg-[#f3f1ec]">{nav.about}</Link>
      <Link href={"/"+locale+"/contact"} className="px-4 py-3 text-sm text-[#535b65] hover:bg-[#f3f1ec]">{nav.contact}</Link>
     </nav>
    </MenuDisclosure>
   </div>
  </div>
 </header>;
}