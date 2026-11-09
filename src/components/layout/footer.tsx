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
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="text-2xl font-bold tracking-tight text-foreground">zirocraft<span className="text-accent">.</span></Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-muted">{t.tagline}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-foreground">{t.explore}</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li><Link href={`/${locale}/products`} className="hover:text-accent">{dictionary.navigation.products}</Link></li>
              <li><Link href={`/${locale}/products/ziropos`} className="hover:text-accent">ZiroPOS</Link></li>
              <li><Link href={`/${locale}/products/zirologistics`} className="hover:text-accent">ZiroLogistics</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-foreground">{t.company}</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li><Link href={`/${locale}/about`} className="hover:text-accent">{t.about}</Link></li>
              <li><Link href={`/${locale}/contact`} className="hover:text-accent">{t.contact}</Link></li>
              <li><Link href={`/${locale}/privacy-policy`} className="hover:text-accent">{t.privacy}</Link></li>
              <li><Link href={`/${locale}/terms`} className="hover:text-accent">{t.terms}</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6"><p className="text-sm text-muted">© {new Date().getFullYear()} Zirocraft. {t.rights}</p></div>
      </div>
    </footer>
  );
}
