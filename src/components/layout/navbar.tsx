import Link from "next/link";
import LanguageSwitcher from "@/components/layout/language-switcher";
import type { Locale } from "@/lib/i18n/dictionaries";

type Props = {
  locale: Locale;
  dictionary: ReturnType<typeof import("@/lib/i18n/dictionaries").getDictionary>;
};

export default function Navbar({ locale, dictionary }: Props) {
  const navigation = [
    { label: dictionary.navigation.products, href: `/${locale}/products` },
    { label: dictionary.navigation.about, href: `/${locale}/about` },
    { label: dictionary.navigation.contact, href: `/${locale}/contact` }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-lg">
      <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-5 px-6 lg:px-8">
        <Link href={`/${locale}`} className="shrink-0 text-2xl font-bold tracking-tight text-foreground" aria-label="Zirocraft homepage">
          zirocraft<span className="text-accent">.</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => <Link key={item.href} href={item.href} className="text-sm font-medium text-muted transition-colors hover:text-accent">{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <Link href={`/${locale}/products`} className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover sm:inline-flex">{dictionary.navigation.cta}</Link>
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground">Menu</summary>
            <nav aria-label="Mobile navigation" className="absolute right-0 top-12 flex w-56 flex-col gap-1 rounded-xl border border-border bg-white p-3 shadow-lg">
              {navigation.map((item) => <Link key={item.href} href={item.href} className="rounded-lg px-3 py-3 text-sm font-medium text-muted hover:bg-surface hover:text-accent">{item.label}</Link>)}
              <Link href={`/${locale}/products`} className="mt-1 rounded-lg bg-accent px-3 py-3 text-sm font-semibold text-white">{dictionary.navigation.cta}</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
