import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/dictionaries";

type Props = {
  locale: Locale;
  dictionary: ReturnType<typeof import("@/lib/i18n/dictionaries").getDictionary>;
};

export default function Footer({ locale, dictionary }: Props) {
  const t = dictionary.footer;

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Link href={`/${locale}`} className="relative block h-10 w-[190px]" aria-label="Zirocraft homepage">
              <Image src="/MyLogo/Black%20Text.png" alt="Zirocraft" fill sizes="190px" className="object-contain object-left" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-muted">{t.tagline}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">{t.explore}</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li><Link href={`/${locale}/products`} className="transition-colors hover:text-accent">{dictionary.navigation.products}</Link></li>
              <li><Link href={`/${locale}/products/ziropos`} className="transition-colors hover:text-accent">ZiroPOS</Link></li>
              <li><Link href={`/${locale}/products/zirologistics`} className="transition-colors hover:text-accent">ZiroLogistics</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">{t.company}</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li><Link href={`/${locale}/about`} className="transition-colors hover:text-accent">{t.about}</Link></li>
              <li><Link href={`/${locale}/contact`} className="transition-colors hover:text-accent">{t.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">{t.legal}</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li><Link href={`/${locale}/privacy-policy`} className="transition-colors hover:text-accent">{t.privacy}</Link></li>
              <li><Link href={`/${locale}/terms`} className="transition-colors hover:text-accent">{t.terms}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-sm text-muted">© {new Date().getFullYear()} Zirocraft. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
