import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/dictionaries";

type Props = {
  locale: Locale;
  dictionary: ReturnType<typeof import("@/lib/i18n/dictionaries").getDictionary>;
};

export default function Footer({ locale, dictionary }: Props) {
  const id = locale === "id";
  const t = dictionary.footer;
  return (
    <footer className="bg-[#15191f] text-white">
      <div className="site-container py-16 sm:py-20">
        <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-[1.3fr_.7fr_.7fr]">
          <div>
            <Link href={`/${locale}`} className="relative block h-10 w-[185px]" aria-label="ZiroCraft homepage">
              <Image src="/MyLogo/White%20Text.png" alt="ZiroCraft" fill sizes="185px" className="object-contain object-left" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">{t.tagline}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.18em] text-white/40">{id ? "Jelajahi" : "Explore"}</p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li><Link className="transition-colors hover:text-white" href={`/${locale}/products`}>{dictionary.navigation.products}</Link></li>
              <li><Link className="transition-colors hover:text-white" href={`/${locale}/products/ziropos`}>ZiroPOS</Link></li>
              <li><Link className="transition-colors hover:text-white" href={`/${locale}/products/zirologistics`}>ZiroLogistics</Link></li>
              <li><Link className="transition-colors hover:text-white" href={`/${locale}/services`}>{id ? "Layanan" : "Services"}</Link></li>
              <li><Link className="transition-colors hover:text-white" href={`/${locale}/portfolio`}>{id ? "Portofolio" : "Portfolio"}</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.18em] text-white/40">{id ? "Perusahaan" : "Company"}</p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li><Link className="transition-colors hover:text-white" href={`/${locale}/about`}>{dictionary.navigation.about}</Link></li>
              <li><Link className="transition-colors hover:text-white" href={`/${locale}/contact`}>{dictionary.navigation.contact}</Link></li>
              <li><Link className="transition-colors hover:text-white" href={`/${locale}/privacy-policy`}>{t.privacy}</Link></li>
              <li><Link className="transition-colors hover:text-white" href={`/${locale}/terms`}>{t.terms}</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-6 text-[11px] text-white/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} ZiroCraft. {t.rights}</p>
          <p className="font-mono uppercase tracking-[.14em]">Precision in motion.</p>
        </div>
      </div>
    </footer>
  );
}
