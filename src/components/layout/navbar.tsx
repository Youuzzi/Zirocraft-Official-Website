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
    { label: dictionary.navigation.about, href: `/${locale}/about` },
    { label: dictionary.navigation.contact, href: `/${locale}/contact` }
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-[#d9dad6] bg-[#f5f4f0]/95 backdrop-blur-md">
      <div className="site-container flex min-h-[76px] items-center justify-between gap-5">
        <Link href={`/${locale}`} className="relative block h-9 w-[158px] shrink-0 sm:h-10 sm:w-[180px]" aria-label="ZiroCraft homepage">
          <Image src="/MyLogo/Black%20Text.png" alt="ZiroCraft" fill priority sizes="(max-width: 640px) 158px, 180px" className="object-contain object-left" />
        </Link>
        <nav aria-label={dictionary.navigation.mainLabel} className="hidden items-center gap-9 md:flex">
          {links.map((item) => <Link key={item.href} href={item.href} className="text-[13px] font-medium text-[#59636e] transition-colors hover:text-[#315fea]">{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <Link href={`/${locale}/contact`} className="hidden min-h-11 items-center gap-4 bg-[#15191f] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#315fea] sm:inline-flex">{locale === "id" ? "Mulai percakapan" : "Start a conversation"} <span aria-hidden="true">↗</span></Link>
          <details className="group relative md:hidden">
            <summary className="flex min-h-10 cursor-pointer list-none items-center gap-2 border border-[#d9dad6] px-3 text-xs font-semibold text-[#15191f] [&::-webkit-details-marker]:hidden">
              {dictionary.navigation.menu}<span aria-hidden="true" className="text-base transition-transform group-open:rotate-45">+</span>
            </summary>
            <nav aria-label={dictionary.navigation.mobileLabel} className="absolute right-0 top-[calc(100%+12px)] flex w-[min(19rem,calc(100vw-2rem))] flex-col border border-[#d9dad6] bg-[#f5f4f0] p-3 shadow-xl">
              {links.map((item) => <Link key={item.href} href={item.href} className="px-3 py-3 text-sm font-medium text-[#59636e] hover:bg-white hover:text-[#315fea]">{item.label}</Link>)}
              <Link href={`/${locale}/contact`} className="mt-2 flex items-center justify-between bg-[#15191f] px-4 py-3 text-sm font-semibold text-white">{locale === "id" ? "Mulai percakapan" : "Start a conversation"} <span aria-hidden="true">↗</span></Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
