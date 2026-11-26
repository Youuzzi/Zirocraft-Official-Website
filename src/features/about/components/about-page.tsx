import Link from "next/link";\nimport type { Locale } from "@/lib/i18n/dictionaries";\n\nexport function AboutPageContent({ locale }: { locale: Locale }) {\n  const id = locale === "id";
  const principles = id ? [
    ["01", "Mulai dari konteks", "Memahami pekerjaan, orang, dan proses sebelum menentukan bentuk teknologi."],
    ["02", "Utamakan kejelasan", "Menyusun solusi agar alur, tanggung jawab, dan informasi lebih mudah dipahami."],
    ["03", "Siap untuk berkembang", "Mempertimbangkan adaptasi dan pemeliharaan sebagai bagian dari proses membangun."]
  ] : [
    ["01", "Start with context", "Understand the work, people, and process before deciding on technology."],
    ["02", "Make it clear", "Shape solutions so workflows, responsibilities, and information are easier to understand."],
    ["03", "Built to evolve", "Consider adaptability and maintainability as part of the building process."]
  ];
  return <>
    <section className="bg-[#15191f] py-24 text-white sm:py-36">
      <div className="site-container">
        <span className="eyebrow !text-[#9db4ff]">{id ? "Tentang ZiroCraft" : "About ZiroCraft"}</span>
        <h1 className="display-heading mt-8 max-w-5xl text-balance">{id ? "Kami membangun perangkat lunak untuk pekerjaan yang nyata." : "We build software for the work that actually happens."}</h1>
        <div className="mt-12 grid gap-8 border-t border-white/15 pt-7 md:grid-cols-[1fr_1fr]">
          <p className="font-mono text-xs uppercase tracking-[.16em] text-white/55">{id ? "Perusahaan software & pengembangan produk digital" : "Software company & digital product development"}</p>
          <p className="max-w-xl text-base leading-8 text-white/65">{id ? "ZiroCraft berfokus pada pengembangan solusi digital dan produk perangkat lunak untuk membantu bisnis mengelola proses operasionalnya." : "ZiroCraft focuses on digital solutions and software products that help businesses manage their operational processes."}</p>
        </div>
      </div>
    </section>
    <section className="bg-[#f5f4f0] py-24 sm:py-32">
      <div className="site-container grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
        <div><span className="eyebrow">{id ? "Keyakinan kami" : "What we believe"}</span><p className="mt-6 font-mono text-xs text-[#626d78]">01 / OUR APPROACH</p></div>
        <div><h2 className="section-heading max-w-4xl">{id ? "Teknologi harus mengikuti kebutuhan manusia dan proses bisnis—bukan sebaliknya." : "Technology should serve people and business processes—not the other way around."}</h2><p className="mt-8 max-w-2xl text-base leading-8 text-[#56616d]">{id ? "Kami melihat software sebagai alat untuk memperjelas pekerjaan, mengurangi kerumitan yang tidak perlu, dan membuka ruang untuk perbaikan bertahap." : "We see software as a way to bring clarity to work, reduce unnecessary complexity, and make room for continuous improvement."}</p></div>
      </div>
    </section>
    <section className="bg-white py-24 sm:py-32">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-5 border-b border-[#d9dad6] pb-8 sm:flex-row sm:items-end"><div><span className="eyebrow">{id ? "Prinsip kerja" : "Working principles"}</span><h2 className="section-heading mt-6">{id ? "Cara kami mengambil keputusan." : "How we make decisions."}</h2></div><p className="max-w-sm text-sm leading-7 text-[#56616d]">{id ? "Prinsip sederhana yang menjadi arah saat merancang dan mengembangkan solusi." : "A few simple principles that guide how we design and develop solutions."}</p></div>
        <div className="mt-4">{principles.map(([number,title,description]) => <article key={number} className="grid gap-4 border-b border-[#d9dad6] py-8 sm:grid-cols-[90px_1fr_1fr] sm:items-start"><span className="font-mono text-xs text-[#284fce]">{number}</span><h3 className="text-2xl font-semibold tracking-[-.04em]">{title}</h3><p className="max-w-md text-sm leading-7 text-[#56616d]">{description}</p></article>)}</div>
      </div>
    </section>
    <section className="bg-[#e9e8e2] py-20 sm:py-24"><div className="site-container flex flex-col justify-between gap-8 sm:flex-row sm:items-center"><div><span className="eyebrow">{id ? "Dibangun secara bertahap" : "Built iteratively"}</span><h2 className="mt-5 text-3xl font-semibold tracking-[-.05em] sm:text-4xl">{id ? "Kenali produk yang sedang kami kembangkan." : "Explore the products we're developing."}</h2></div><Link href={`/${locale}/products`} className="inline-flex min-h-12 items-center justify-between gap-8 bg-[#15191f] px-5 text-sm font-semibold text-white hover:bg-[#315fea]">{id ? "Lihat portofolio produk" : "Explore products"} <span aria-hidden="true">↗</span></Link></div></section>
  </>;
}
