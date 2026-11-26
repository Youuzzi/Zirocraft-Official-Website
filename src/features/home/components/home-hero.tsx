import Link from "next/link";
import type { Locale } from "@/lib/i18n/dictionaries";

export function HomeHero({ locale }: { locale: Locale }) {
  const id = locale === "id";
  return (
    <section className="relative overflow-hidden bg-[#15191f] text-white">
      <div aria-hidden="true" className="absolute right-0 top-0 h-full w-[48%] border-l border-white/10 max-lg:hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.055) 1px,transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="absolute right-[13%] top-[16%] h-[62%] w-[58%] border border-white/20 motion-drift" />
        <div className="absolute right-[20%] top-[23%] h-[48%] w-[45%] bg-[#315fea] p-5 shadow-2xl">
          <div className="flex h-full flex-col justify-between border border-white/25 p-5">
            <span className="font-mono text-[10px] uppercase tracking-[.22em] text-blue-100">ZIROCRAFT / DIGITAL SYSTEMS</span>
            <div className="grid grid-cols-4 gap-2">
              <span className="col-span-3 h-2 bg-white/80" /><span className="h-2 bg-white/30" />
              <span className="col-span-2 h-2 bg-white/55" /><span className="col-span-2 h-2 bg-white/20" />
            </div>
            <span className="font-mono text-xs text-white">BUILT AROUND REAL WORK.</span>
          </div>
        </div>
        <span className="absolute bottom-[12%] left-[10%] font-mono text-[10px] tracking-[.2em] text-white/80">01 — 02 / PRODUCT THINKING</span>
      </div>
      <div className="site-container relative grid min-h-[680px] items-center py-24 sm:py-32 lg:min-h-[760px] lg:grid-cols-[1.08fr_.92fr]">
        <div className="max-w-[760px] motion-rise">
          <span className="eyebrow !text-[#9db4ff]">{id ? "Teknologi dengan tujuan" : "Technology with intent"}</span>
          <h1 className="display-heading mt-8 max-w-[850px] text-balance">{id ? "Membangun teknologi yang bergerak bersama bisnis." : "Building technology that moves with business."}</h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-white/65 sm:text-lg">{id ? "Kami merancang dan mengembangkan perangkat lunak untuk membantu bisnis mengelola pekerjaan nyata—dari transaksi hingga operasional gudang." : "We design and build software that helps businesses manage real work—from everyday transactions to warehouse operations."}</p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link href={`/${locale}/products`} className="inline-flex min-h-14 items-center gap-6 bg-[#315fea] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#2449b8]">{id ? "Jelajahi produk" : "Explore products"} <span aria-hidden="true">↗</span></Link>
            <Link href={`/${locale}/about`} className="inline-flex min-h-12 items-center text-sm font-medium text-white/75 transition-colors hover:text-white">{id ? "Kenali ZiroCraft" : "Discover ZiroCraft"} <span aria-hidden="true" className="ml-3">→</span></Link>
          </div>
        </div>
        <div className="mt-16 flex items-end justify-between border-t border-white/15 pt-5 lg:hidden">
          <span className="font-mono text-[10px] tracking-[.18em] text-white/80">ZIROCRAFT / DIGITAL SYSTEMS</span><span className="text-xs text-white/80">01 — 02</span>
        </div>
        <div className="absolute bottom-8 right-0 hidden font-mono text-[10px] tracking-[.18em] text-white/80 lg:block">INDEPENDENT SOFTWARE & PRODUCT DEVELOPMENT</div>
      </div>
    </section>
  );
}
