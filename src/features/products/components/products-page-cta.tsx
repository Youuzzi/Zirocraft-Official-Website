import Link from "next/link";
import type { Locale } from "@/lib/i18n/dictionaries";

export function ProductsPageCta({ locale }: { locale: Locale }) {
  const id = locale === "id";
  return (
    <section className="bg-[#11151b] py-20 text-white sm:py-24">
      <div className="site-container flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <span className="eyebrow !text-[#d6ff55]">{id ? "Punya kebutuhan khusus?" : "Have a specific need?"}</span>
          <h2 className="mt-6 text-3xl font-semibold tracking-[-.05em] sm:text-4xl">{id ? "Mari diskusikan konteks bisnis Anda." : "Let's discuss your business context."}</h2>
        </div>
        <Link href={`/${locale}/contact`} className="inline-flex min-h-12 items-center justify-between gap-8 border border-white/30 px-5 text-sm font-semibold hover:bg-white hover:text-[#11151b]">
          {id ? "Hubungi kami" : "Get in touch"} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
