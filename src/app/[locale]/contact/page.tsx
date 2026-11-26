import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

const contactEmail = "zirocraftid@gmail.com";

export async function generateMetadata({ params }: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale } = await params;
  const language = locale === "id" ? "id" : "en";
  return createPageMetadata({
    locale: language,
    title: language === "id" ? "Kontak ZiroCraft" : "Contact ZiroCraft",
    description: language === "id"
      ? "Hubungi ZiroCraft untuk pertanyaan, diskusi produk, atau kolaborasi."
      : "Contact ZiroCraft for inquiries, product discussions, or collaboration."
  });
}

export default async function ContactPage({ params }: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  if (locale !== "id" && locale !== "en") notFound();
  const id = locale === "id";
  const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(id ? "Pertanyaan untuk ZiroCraft" : "Inquiry for ZiroCraft")}`;
  return <>
    <section className="bg-[#15191f] py-24 text-white sm:py-36">
      <div className="site-container"><span className="eyebrow !text-[#9db4ff]">{id ? "Kontak" : "Contact"}</span><h1 className="display-heading mt-8 max-w-4xl">{id ? "Setiap solusi dimulai dari percakapan." : "Every useful solution starts with a conversation."}</h1><p className="mt-8 max-w-xl text-base leading-8 text-white/60">{id ? "Punya pertanyaan tentang produk, kebutuhan software, atau peluang kolaborasi? Kami terbuka untuk mendengarnya." : "Questions about our products, software needs, or a potential collaboration? We'd be glad to hear from you."}</p></div>
    </section>
    <section className="bg-[#f5f4f0] py-24 sm:py-32">
      <div className="site-container grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
        <div><span className="eyebrow">{id ? "Hubungi kami" : "Reach us"}</span><p className="mt-6 font-mono text-xs text-[#626d78]">01 / EMAIL</p></div>
        <div className="border-t border-[#d9dad6] pt-7">
          <h2 className="text-3xl font-semibold tracking-[-.05em] sm:text-4xl">{id ? "Ceritakan apa yang sedang Anda bangun." : "Tell us what you're working on."}</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#66717d]">{id ? "Untuk pertanyaan umum, diskusi produk, atau peluang kerja sama, kirimkan email kepada kami. Sertakan konteks singkat agar percakapan bisa dimulai dengan jelas." : "For general inquiries, product discussions, or collaboration opportunities, send us an email. A little context helps us start the conversation clearly."}</p>
          <a href={mailto} aria-label={id ? `Kirim email ke ${contactEmail}` : `Send an email to ${contactEmail}`} className="mt-9 inline-flex min-h-14 items-center justify-between gap-8 bg-[#315fea] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#2449b8]">{contactEmail}<span aria-hidden="true">↗</span></a>
          <p className="mt-4 text-xs text-[#626d78]">{id ? "Email akan terbuka melalui aplikasi email perangkat Anda." : "This will open your default email application."}</p>
        </div>
      </div>
    </section>
  </>;
}
