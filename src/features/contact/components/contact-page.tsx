import type { Locale } from "@/lib/i18n/dictionaries";

const contactEmail = "zirocraftid@gmail.com";

export function ContactPageContent({ locale }: { locale: Locale }) {
  const id = locale === "id";
  const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(id ? "Pertanyaan untuk ZiroCraft" : "Inquiry for ZiroCraft")}`;
  return <>
    <section className="relative isolate overflow-hidden bg-[#11151b] py-24 text-white sm:py-36">
      <div className="pointer-events-none absolute -right-20 top-24 h-80 w-80 rounded-full border border-[#A6A7F5]/25 sm:right-[10%] sm:h-[38rem] sm:w-[38rem]" /><div className="pointer-events-none absolute right-[18%] top-44 h-40 w-40 rotate-12 bg-[#A6A7F5] sm:right-[26%] sm:h-56 sm:w-56" />
      <div className="site-container relative z-10"><span className="eyebrow !text-[#A6A7F5]">{id ? "Kontak" : "Contact"} / 005</span><h1 className="display-heading mt-8 max-w-5xl">{id ? <>Hal besar dimulai<br /><em className="text-[#A6A7F5]">dari percakapan.</em></> : <>Good things start<br /><em className="text-[#A6A7F5]">with a conversation.</em></>}</h1><p className="mt-10 max-w-xl text-lg leading-9 text-white/60">{id ? "Punya pertanyaan tentang produk, kebutuhan software, atau peluang kolaborasi? Ceritakan sedikit konteksnya. Kami terbuka untuk mendengarnya." : "Questions about our products, software needs, or a potential collaboration? Tell us a little about the context. We'd be glad to hear from you."}</p></div>
    </section>
    <section className="bg-[#e9e8e2] py-24 text-[#15191f] sm:py-32">
      <div className="site-container grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-24">
        <div><span className="eyebrow">{id ? "Mari terhubung" : "Let's connect"}</span><p className="mt-6 font-mono text-xs text-[#58616b]">[ 01 / EMAIL ]</p><div className="mt-12 hidden h-40 w-40 items-center justify-center rounded-full border border-[#15191f]/20 text-5xl lg:flex" aria-hidden="true">↗</div></div>
        <div className="border-t border-[#c9cbc5] pt-8">
          <span className="font-mono text-[10px] tracking-[.16em] text-[#414db5]">{id ? "KIRIM PESAN" : "SEND A MESSAGE"}</span>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-.06em] sm:text-6xl">{id ? "Apa yang sedang ingin Anda bangun?" : "What are you looking to build?"}</h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#58616b]">{id ? "Untuk pertanyaan umum, diskusi produk, atau peluang kerja sama, kirim email kepada kami. Sertakan tujuan, tantangan, dan gambaran singkat agar percakapan bisa dimulai dengan jelas." : "For general inquiries, product discussions, or collaboration opportunities, send us an email. Include your goal, challenge, and a little context so we can start clearly."}</p>
          <a href={mailto} aria-label={id ? `Kirim email ke ${contactEmail}` : `Send an email to ${contactEmail}`} className="mt-10 inline-flex min-h-16 w-full max-w-2xl items-center justify-between gap-8 bg-[#A6A7F5] px-6 text-sm font-semibold text-[#11151b] transition-colors hover:bg-[#B9BAFA] sm:px-8">{contactEmail}<span aria-hidden="true" className="text-xl">↗</span></a>
          <p className="mt-4 text-xs text-[#58616b]">{id ? "Email akan terbuka melalui aplikasi email perangkat Anda." : "This will open your default email application."}</p>
        </div>
      </div>
    </section>
  </>;
}
