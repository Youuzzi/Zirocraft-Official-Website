import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: PageProps<"/[locale]/services">): Promise<Metadata> {
  const { locale } = await params;
  const language = locale === "id" ? "id" : "en";
  return createPageMetadata({
    locale: language,
    title: language === "id" ? "Layanan" : "Services",
    description: language === "id"
      ? "Layanan pengembangan website dan software dari ZiroCraft."
      : "Website and software development services from ZiroCraft."
  });
}

export default async function ServicesPage({ params }: PageProps<"/[locale]/services">) {
  const { locale } = await params;
  if (locale !== "id" && locale !== "en") notFound();
  const id = locale === "id";
  const items = id ? [
    ["01","Pengembangan website","Website perusahaan, landing page, dan pengalaman digital yang dirancang sesuai tujuan bisnis."],
    ["02","Software bisnis kustom","Aplikasi dan sistem internal yang mengikuti proses kerja, kebutuhan data, dan alur operasional."],
    ["03","Pengembangan & peningkatan sistem","Membangun fitur, merapikan sistem yang sudah ada, serta membantu perbaikan dan pengembangan bertahap."]
  ] : [
    ["01","Website development","Corporate websites, landing pages, and digital experiences shaped around business goals."],
    ["02","Custom business software","Applications and internal systems aligned with workflows, data needs, and operations."],
    ["03","System development & improvement","Building features, improving existing systems, and supporting iterative development."]
  ];
  return <>
    <section className="bg-[#15191f] py-24 text-white sm:py-36"><div className="site-container"><span className="eyebrow !text-[#9db4ff]">{id ? "Layanan" : "Services"}</span><h1 className="display-heading mt-8 max-w-5xl">{id ? "Solusi digital yang dimulai dari kebutuhan." : "Digital solutions that start with your needs."}</h1><p className="mt-8 max-w-2xl text-base leading-8 text-white/60">{id ? "Kami membantu menerjemahkan kebutuhan bisnis menjadi website dan software yang jelas, berguna, serta dapat dikembangkan." : "We help translate business needs into websites and software that are clear, useful, and built to evolve."}</p></div></section>
    <section className="bg-[#f5f4f0] py-20 sm:py-28"><div className="site-container"><span className="eyebrow">{id ? "Apa yang kami kerjakan" : "What we do"}</span><div className="mt-8 border-t border-[#d9dad6]">{items.map(([number,title,description]) => <article key={number} className="grid gap-4 border-b border-[#d9dad6] py-9 sm:grid-cols-[90px_1fr_1fr] sm:items-start"><span className="font-mono text-xs text-[#315fea]">{number}</span><h2 className="text-2xl font-semibold tracking-[-.05em]">{title}</h2><p className="max-w-md text-sm leading-7 text-[#66717d]">{description}</p></article>)}</div></div></section>
    <section className="bg-[#e9e8e2] py-20 sm:py-24"><div className="site-container flex flex-col justify-between gap-8 sm:flex-row sm:items-center"><div className="max-w-2xl"><span className="eyebrow">{id ? "Langkah berikutnya" : "Next step"}</span><h2 className="mt-5 text-3xl font-semibold tracking-[-.05em] sm:text-4xl">{id ? "Ceritakan tantangan yang ingin Anda selesaikan." : "Tell us about the challenge you want to solve."}</h2></div><Link href={`/${locale}/contact`} className="inline-flex min-h-12 items-center justify-between gap-8 bg-[#15191f] px-5 text-sm font-semibold text-white hover:bg-[#315fea]">{id ? "Diskusikan proyek" : "Discuss a project"} <span aria-hidden="true">↗</span></Link></div></section>
  </>;
}
