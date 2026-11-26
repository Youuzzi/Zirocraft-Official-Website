import Link from "next/link";
import type { Locale } from "@/lib/i18n/dictionaries";

export function ProductsPageCta({ locale }: { locale: Locale }) {
  const id = locale === "id";
  return (
    <section className="bg-[#15191f] py-20 text-white sm:py-24">
      <div className="site-container flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <span className="eyebrow !text-[#9db4ff]">{id ? "Punya kebutuhan khusus?" : "Have a specific need?"}</span>
          <h2 className="mt-6 text-3xl font-semibold tracking-[-.05em] sm:text-4xl">{id ? "Mari diskusikan konteks bisnis Anda." : "Let's discuss your business context."}</h2>
        </div>
        <Link href={`/${locale}/contact`} className="inline-flex min-h-12 items-center justify-between gap-8 border border-white/30 px-5 text-sm font-semibold hover:bg-white hover:text-[#15191f]">
          {id ? "Hubungi kami" : "Get in touch"} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
