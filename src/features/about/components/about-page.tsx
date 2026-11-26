import Link from "next/link";
import type { Locale } from "@/lib/i18n/dictionaries";

export function AboutPageContent({ locale }: { locale: Locale }) {
  const id = locale === "id";
  const principles = id ? [
    ["01", "Mulai dari konteks", "Memahami pekerjaan, orang, dan proses sebelum menentukan bentuk teknologi.", "DISCOVER"],
    ["02", "Utamakan kejelasan", "Menyusun solusi agar alur, tanggung jawab, dan informasi lebih mudah dipahami.", "CLARITY"],
    ["03", "Siap untuk berkembang", "Mempertimbangkan adaptasi dan pemeliharaan sebagai bagian dari proses membangun.", "EVOLVE"]
  ] : [
    ["01", "Start with context", "Understand the work, people, and process before deciding on technology.", "DISCOVER"],
    ["02", "Make it clear", "Shape solutions so workflows, responsibilities, and information are easier to understand.", "CLARITY"],
    ["03", "Built to evolve", "Consider adaptability and maintainability as part of the building process.", "EVOLVE"]
  ];
  return <>
    <section className="relative isolate overflow-hidden bg-[#0B1724] py-24 text-white sm:py-36">
      <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full border border-[#22B8C8]/20 sm:right-[8%] sm:h-[34rem] sm:w-[34rem]" />
      <div className="pointer-events-none absolute right-[13%] top-40 h-52 w-52 rotate-45 border border-[#176FAE]/40 bg-[#176FAE]/10 sm:right-[19%] sm:h-72 sm:w-72" />
      <div className="site-container relative z-10">
        <span className="eyebrow !text-[#22B8C8]">{id ? "Tentang ZiroCraft" : "About ZiroCraft"} / 001</span>
        <h1 className="display-heading mt-8 max-w-5xl text-balance">{id ? <>Kami membangun software<br /><em className="text-[#22B8C8]">untuk pekerjaan nyata.</em></> : <>We build software<br /><em className="text-[#22B8C8]">for the real world.</em></>}</h1>
        <div className="mt-16 grid gap-8 border-t border-white/20 pt-7 md:grid-cols-[.7fr_1.3fr]">
          <p className="font-mono text-[10px] uppercase tracking-[.18em] text-white/65">{id ? "Studio teknologi independen / Indonesia" : "Independent technology studio / Indonesia"}</p>
          <p className="max-w-2xl text-lg leading-9 text-white/70">{id ? "ZiroCraft berfokus pada pengembangan solusi digital dan produk perangkat lunak untuk membantu bisnis mengelola proses operasionalnya—dengan memahami masalah sebelum memilih teknologi." : "ZiroCraft focuses on digital solutions and software products that help businesses manage operations—with a clear understanding of the problem before choosing the technology."}</p>
        </div>
        <div className="mt-16 flex flex-wrap gap-3">{["STRATEGY","DESIGN","ENGINEERING","PRODUCT"].map((tag) => <span key={tag} className="border border-white/20 px-4 py-2 font-mono text-[10px] tracking-[.16em] text-white/60">{tag}</span>)}</div>
      </div>
    </section>
    <section className="bg-[#F2F7FA] py-24 text-[#102235] sm:py-32">
      <div className="site-container grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:gap-24">
        <div><span className="eyebrow">{id ? "Sudut pandang" : "Point of view"}</span><p className="mt-6 font-mono text-xs text-[#465766]">[ 02 / THE WHY ]</p></div>
        <div><h2 className="max-w-5xl text-4xl font-semibold leading-[1.08] tracking-[-.06em] sm:text-6xl">{id ? <>Teknologi harus mengikuti manusia dan proses bisnis—<span className="text-[#155D95]">bukan sebaliknya.</span></> : <>Technology should serve people and business—not the other way <span className="text-[#155D95]">around.</span></>}</h2><p className="mt-8 max-w-2xl text-base leading-8 text-[#465766]">{id ? "Kami melihat software sebagai alat untuk memperjelas pekerjaan, mengurangi kerumitan yang tidak perlu, dan membuka ruang untuk perbaikan bertahap." : "We see software as a way to bring clarity to work, reduce unnecessary complexity, and make room for continuous improvement."}</p></div>
      </div>
    </section>
    <section className="bg-[#102033] py-24 text-white sm:py-32">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-6 border-b border-white/15 pb-9 sm:flex-row sm:items-end"><div><span className="eyebrow !text-[#22B8C8]">{id ? "Prinsip kerja" : "Working principles"}</span><h2 className="section-heading mt-6">{id ? "Cara kami mengambil keputusan." : "How we make decisions."}</h2></div><p className="max-w-sm text-sm leading-7 text-white/65">{id ? "Prinsip sederhana yang menjadi arah saat merancang dan mengembangkan solusi." : "A few principles that guide how we design and develop solutions."}</p></div>
        <div className="mt-4">{principles.map(([number,title,description,tag]) => <article key={number} className="grid gap-5 border-b border-white/15 py-9 sm:grid-cols-[70px_1fr_1fr_110px] sm:items-start"><span className="font-mono text-xs text-[#22B8C8]">{number}</span><h3 className="text-2xl font-semibold tracking-[-.04em] sm:text-3xl">{title}</h3><p className="max-w-md text-sm leading-7 text-white/70">{description}</p><span className="font-mono text-[9px] tracking-[.16em] text-white/65">{tag}</span></article>)}</div>
      </div>
    </section>
    <section className="bg-[#22B8C8] py-20 text-[#0B1724] sm:py-24"><div className="site-container flex flex-col justify-between gap-8 sm:flex-row sm:items-center"><div><span className="eyebrow !text-[#0B1724]">{id ? "Dibangun secara bertahap" : "Built iteratively"}</span><h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-[-.05em] sm:text-4xl">{id ? "Kenali produk yang sedang kami kembangkan." : "Explore the products we're developing."}</h2></div><Link href={`/${locale}/products`} className="inline-flex min-h-12 items-center justify-between gap-8 bg-[#0B1724] px-5 text-sm font-semibold text-white">{id ? "Lihat produk" : "Explore products"} <span aria-hidden="true">↗</span></Link></div></section>
  </>;
}
