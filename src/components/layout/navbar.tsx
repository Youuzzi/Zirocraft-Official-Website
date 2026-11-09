import Image from "next/image";
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
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-lg">
      <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="relative block h-9 w-[172px] shrink-0 sm:h-10 sm:w-[190px]" aria-label="Zirocraft homepage">
          <Image src="/MyLogo/Black%20Text.png" alt="Zirocraft" fill priority sizes="(max-width: 640px) 172px, 190px" className="object-contain object-left" />
        </Link>

        <nav aria-label={dictionary.navigation.mainLabel} className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-muted transition-colors hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher locale={locale} />
          <Link href={`/${locale}/products`} className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover sm:inline-flex">
            {dictionary.navigation.cta}
          </Link>
          <details className="group relative md:hidden">
            <summary className="flex min-h-10 cursor-pointer list-none items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent [&::-webkit-details-marker]:hidden">
              <span>{dictionary.navigation.menu}</span>
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4 transition-transform group-open:rotate-180">
                <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <nav aria-label={dictionary.navigation.mobileLabel} className="absolute right-0 top-[calc(100%+0.75rem)] flex w-[min(18rem,calc(100vw-2.5rem))] flex-col gap-1 rounded-2xl border border-border bg-white p-3 shadow-xl">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-lg px-3 py-3 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-accent">
                  {item.label}
                </Link>
              ))}
              <Link href={`/${locale}/products`} className="mt-1 rounded-lg bg-accent px-3 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-hover">
                {dictionary.navigation.cta}
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
