import Link from "next/link";
import type { Locale } from "@/lib/i18n/dictionaries";

export function ServicesPageContent({ locale }: { locale: Locale }) {
  const id = locale === "id";
  const items = id ? [
    ["01","Pengembangan website","Website perusahaan, landing page, dan pengalaman digital yang dirancang sesuai tujuan bisnis.","WEB / EXPERIENCE"],
    ["02","Software bisnis kustom","Aplikasi dan sistem internal yang mengikuti proses kerja, kebutuhan data, dan alur operasional.","BUSINESS / SYSTEMS"],
    ["03","Pengembangan & peningkatan sistem","Membangun fitur, merapikan sistem yang sudah ada, serta membantu perbaikan dan pengembangan bertahap.","ENGINEERING / EVOLUTION"]
  ] : [
    ["01","Website development","Corporate websites, landing pages, and digital experiences shaped around business goals.","WEB / EXPERIENCE"],
    ["02","Custom business software","Applications and internal systems aligned with workflows, data needs, and operations.","BUSINESS / SYSTEMS"],
    ["03","System development & improvement","Building features, improving existing systems, and supporting iterative development.","ENGINEERING / EVOLUTION"]
  ];
  return <>
    <section className="relative isolate overflow-hidden bg-[#11151b] py-24 text-white sm:py-36">
      <div className="pointer-events-none absolute -right-10 top-20 h-72 w-72 rounded-full bg-[#a78bfa]/15 blur-3xl sm:h-[32rem] sm:w-[32rem]" />
      <div className="site-container relative z-10"><span className="eyebrow !text-[#d6ff55]">{id ? "Layanan" : "Services"} / 003</span><h1 className="display-heading mt-8 max-w-5xl">{id ? <>Bentuk ide.<br /><em className="text-[#d6ff55]">Bangun dampak.</em></> : <>Shape the idea.<br /><em className="text-[#d6ff55]">Build the impact.</em></>}</h1><p className="mt-10 max-w-2xl text-lg leading-9 text-white/60">{id ? "Kami menerjemahkan kebutuhan bisnis menjadi website dan software yang jelas, berguna, serta dapat dikembangkan—dari pemahaman awal hingga implementasi." : "We translate business needs into clear, useful, and adaptable websites and software—from early understanding through implementation."}</p><div className="mt-14 grid max-w-3xl grid-cols-3 border-y border-white/15 py-5">{[["01","DISCOVER"],["02","DESIGN"],["03","DEVELOP"]].map(([n,t]) => <div key={n}><span className="block font-mono text-[10px] text-[#d6ff55]">{n}</span><span className="mt-2 block font-mono text-[9px] tracking-[.14em] text-white/55">{t}</span></div>)}</div></div>
    </section>
    <section className="bg-[#e9e8e2] py-20 text-[#15191f] sm:py-28"><div className="site-container"><div className="mb-12 flex items-end justify-between gap-6"><div><span className="eyebrow">{id ? "Disiplin kami" : "Our disciplines"}</span><h2 className="section-heading mt-5">{id ? "Apa yang bisa kita bangun." : "What we can build together."}</h2></div><span className="hidden font-mono text-[10px] text-[#626d78] sm:block">CAPABILITIES / 03</span></div><div className="grid gap-4 lg:grid-cols-3">{items.map(([number,title,description,tag],index) => <article key={number} className={`relative flex min-h-[360px] flex-col overflow-hidden p-7 sm:p-9 ${index === 1 ? "bg-[#d6ff55]" : "bg-white"}`}><div className="flex items-start justify-between"><span className="font-mono text-xs text-[#5965d8]">{number} / 03</span><span className="font-mono text-[9px] tracking-[.12em] text-[#626d78]">{tag}</span></div><div className="my-auto pt-16"><div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-[#15191f]/20 text-2xl" aria-hidden="true">{["↗","⌘","✳"][index]}</div><h3 className="text-2xl font-semibold tracking-[-.05em] sm:text-3xl">{title}</h3><p className="mt-5 text-sm leading-7 text-[#56616d]">{description}</p></div></article>)}</div></div></section>
    <section className="bg-[#171c23] py-20 text-white sm:py-24"><div className="site-container flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><div className="max-w-2xl"><span className="eyebrow !text-[#d6ff55]">{id ? "Langkah berikutnya" : "Next step"}</span><h2 className="mt-6 text-3xl font-semibold tracking-[-.05em] sm:text-5xl">{id ? "Punya tantangan yang ingin diselesaikan?" : "Have a challenge worth solving?"}</h2></div><Link href={`/${locale}/contact`} className="inline-flex min-h-12 items-center justify-between gap-8 bg-[#d6ff55] px-5 text-sm font-semibold text-[#11151b]">{id ? "Diskusikan proyek" : "Discuss a project"} <span aria-hidden="true">↗</span></Link></div></section>
  </>;
}
