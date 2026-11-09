import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = { title: "Contact Zirocraft", description: "Get in touch with Zirocraft." };
const contactEmail = "zirocraftid@gmail.com";

export default async function ContactPage({ params }: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  if (locale !== "id" && locale !== "en") notFound();
  const id = locale === "id";
  return <>
    <section className="bg-[#101828] py-24 text-white sm:py-32"><div className="mx-auto max-w-7xl px-6 lg:px-8"><span className="text-sm font-semibold tracking-[0.16em] text-blue-300 uppercase">{id ? "Kontak" : "Contact"}</span><h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">{id ? "Mari mulai percakapan." : "Let's start a conversation."}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">{id ? "Hubungi kami untuk pertanyaan umum, diskusi produk, atau peluang kolaborasi." : "Reach out for general inquiries, product discussions, or collaboration opportunities."}</p></div></section>
    <section className="bg-white py-20 sm:py-28"><div className="mx-auto max-w-3xl px-6 lg:px-8"><div className="rounded-3xl border border-border p-8 sm:p-12"><h2 className="text-2xl font-semibold text-foreground">{id ? "Email Zirocraft" : "Email Zirocraft"}</h2><p className="mt-4 leading-7 text-muted">{id ? "Kirimkan pesan kepada kami melalui alamat email berikut. Kami akan meninjau pertanyaan Anda dan merespons sesuai kebutuhan." : "Send us a message using the email address below. We will review your inquiry and respond as appropriate."}</p><a href={`mailto:${contactEmail}`} className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-white hover:bg-accent-hover">{contactEmail}</a></div></div></section>
  </>;
}
