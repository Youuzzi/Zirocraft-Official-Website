import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "@/components/layout/language-switcher";
import type { Locale } from "@/lib/i18n/dictionaries";

type Props = {
  locale: Locale;
  dictionary: ReturnType<typeof import("@/lib/i18n/dictionaries").getDictionary>;
};

export default function Navbar({ locale, dictionary }: Props) {
  const links = [
    { label: dictionary.navigation.products, href: `/${locale}/products` },
    { label: locale === "id" ? "Layanan" : "Services", href: `/${locale}/services` },
    { label: locale === "id" ? "Portofolio" : "Portfolio", href: `/${locale}/portfolio` },
    { label: dictionary.navigation.about, href: `/${locale}/about` },
    { label: dictionary.navigation.contact, href: `/${locale}/contact` }
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#11151b]/95 text-white backdrop-blur-xl">
      <div className="site-container flex min-h-[76px] items-center justify-between gap-3 sm:gap-5">
        <Link href={`/${locale}`} className="flex shrink-0 items-center gap-2.5" aria-label="ZiroCraft homepage">
          <Image src="/MyLogo/mark-white-1400.png" alt="ZiroCraft" width={42} height={42} priority sizes="42px" className="h-9 w-9 object-contain sm:h-10 sm:w-10" />
          <span className="text-[19px] font-semibold tracking-[-.065em] text-white sm:text-[21px]">zirocraft<span className="text-[#A6A7F5]">.</span></span>
        </Link>
        <nav aria-label={dictionary.navigation.mainLabel} className="hidden items-center gap-8 lg:flex">
          {links.map((item) => <Link key={item.href} href={item.href} className="text-[12px] font-medium text-white/60 transition-colors hover:text-[#A6A7F5]">{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher locale={locale} />
          <Link href={`/${locale}/contact`} className="hidden min-h-10 items-center gap-4 bg-[#A6A7F5] px-4 text-[11px] font-bold text-[#11151b] transition-transform hover:-translate-y-1 lg:inline-flex">{locale === "id" ? "Mulai proyek" : "Start a project"} <span aria-hidden="true">↗</span></Link>
          <details className="group relative lg:hidden">
            <summary aria-controls="mobile-navigation" className="flex min-h-11 cursor-pointer list-none items-center gap-2 border border-white/20 px-3 text-xs font-semibold text-white [&::-webkit-details-marker]:hidden">
              {dictionary.navigation.menu}<span aria-hidden="true" className="text-base transition-transform group-open:rotate-45">+</span>
            </summary>
            <nav id="mobile-navigation" aria-label={dictionary.navigation.mobileLabel} className="absolute right-0 top-[calc(100%+12px)] flex w-[min(19rem,calc(100vw-2rem))] flex-col border border-white/15 bg-[#171d25] p-3 shadow-xl">
              {links.map((item) => <Link key={item.href} href={item.href} className="flex min-h-11 items-center px-3 py-2 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-[#A6A7F5]">{item.label}</Link>)}
              <Link href={`/${locale}/contact`} className="mt-2 flex items-center justify-between bg-[#A6A7F5] px-4 py-3 text-sm font-bold text-[#11151b]">{locale === "id" ? "Mulai proyek" : "Start a project"} <span aria-hidden="true">↗</span></Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
