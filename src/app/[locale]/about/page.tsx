import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata: Metadata = { title: "About Zirocraft", description: "Learn about Zirocraft and its approach to building practical technology." };

export default async function AboutPage({ params }: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  if (locale !== "id" && locale !== "en") notFound();
  const id = locale === "id";
  const principles = id ? [
    ["01", "Praktis", "Berfokus pada kebutuhan nyata dan masalah operasional."],
    ["02", "Adaptif", "Dikembangkan dengan mempertimbangkan kebutuhan bisnis yang terus berubah."],
    ["03", "Berkelanjutan", "Mengutamakan rekayasa yang terarah dan pengembangan jangka panjang."]
  ] : [
    ["01", "Practical", "Focused on real needs and operational challenges."],
    ["02", "Adaptable", "Developed with changing business needs in mind."],
    ["03", "Maintainable", "Thoughtful engineering for sustainable long-term development."]
  ];
  return <>
    <section className="bg-[#101828] py-24 text-white sm:py-32"><div className="mx-auto max-w-7xl px-6 lg:px-8"><span className="text-sm font-semibold tracking-[0.16em] text-blue-300 uppercase">{id ? "Tentang Kami" : "Who We Are"}</span><h1 className="mt-6 max-w-3xl text-4xl leading-tight font-semibold tracking-tight sm:text-6xl">{id ? "Membangun teknologi praktis untuk bisnis yang berkembang." : "Building practical technology for growing businesses."}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">{id ? "Zirocraft adalah perusahaan teknologi yang berfokus pada pengembangan solusi digital untuk kebutuhan operasional nyata." : "Zirocraft is a technology company focused on developing digital solutions for real operational needs."}</p></div></section>
    <section className="bg-white py-20 sm:py-28"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="max-w-3xl"><h2 className="text-3xl font-semibold tracking-tight text-foreground">{id ? "Pendekatan kami" : "Our approach"}</h2><p className="mt-6 text-lg leading-8 text-muted">{id ? "Kami percaya teknologi yang baik harus membantu menyelesaikan masalah, mudah beradaptasi, dan dapat dikembangkan secara bertanggung jawab." : "We believe good technology should solve problems, adapt to changing needs, and be developed responsibly."}</p></div><div className="mt-14 grid gap-6 md:grid-cols-3">{principles.map(([number,title,description])=><article key={number} className="rounded-2xl border border-border p-8"><span className="text-sm font-semibold text-accent">{number}</span><h3 className="mt-6 text-xl font-semibold text-foreground">{title}</h3><p className="mt-3 leading-7 text-muted">{description}</p></article>)}</div></div></section>
    <section className="bg-surface px-6 py-20 text-center"><h2 className="text-3xl font-semibold text-foreground">{id ? "Kenali produk Zirocraft" : "Explore Zirocraft products"}</h2><Link href={`/${locale}/products`} className="mt-7 inline-flex rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white hover:bg-accent-hover">{id ? "Lihat portofolio produk" : "View product portfolio"}</Link></section>
  </>;
}
