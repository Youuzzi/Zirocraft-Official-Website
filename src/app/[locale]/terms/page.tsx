import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = { title: "Terms of Service", description: "Terms for accessing and using the Zirocraft website." };
const sections = {
  en: [
    ["1. Acceptance of These Terms", ["These Terms govern your access to and use of the Zirocraft website. By using the website, you acknowledge that you have read and understood them. If you do not agree, discontinue use."]],
    ["2. About Zirocraft", ["Zirocraft is a technology company focused on practical technology solutions for growing businesses. This website provides general information about Zirocraft, its products, and business activities."]],
    ["3. Website Use", ["You agree to use this website lawfully and not interfere with its operation or other visitors. You must not attempt unauthorized access, introduce malicious code, or disrupt website functionality."]],
    ["4. Product Information", ["Product information may describe development, intended capabilities, direction, or planned improvements. Unless explicitly stated otherwise, it is not a guarantee that a feature, service, release date, or capability is currently available. Product details may change."]],
    ["5. Intellectual Property", ["Unless otherwise stated, website content, branding, logos, graphics, and design elements belong to Zirocraft or are used with permission. You must not reproduce or commercially exploit these materials without authorization, except as permitted by law."]],
    ["6. Third-Party Links", ["Third-party websites operate independently. Zirocraft does not control or accept responsibility for their content, availability, policies, or practices."]],
    ["7. Disclaimer", ["This website is provided for informational purposes. To the extent permitted by law, Zirocraft does not guarantee uninterrupted, error-free, or continuously available operation. Website content is not a binding commercial offer unless expressly stated in a separate written agreement."]],
    ["8. Limitation of Liability", ["To the extent permitted by applicable law, Zirocraft is not liable for indirect, incidental, or consequential losses arising from use of or inability to use this informational website. Nothing excludes liability where exclusion is not permitted by law."]],
    ["9. Privacy", ["Your use of this website is also subject to our Privacy Policy."]],
    ["10. Changes to These Terms", ["We may revise these Terms as our website, products, or business operations change. Updated Terms will be published here with a revised effective date."]],
    ["11. Governing Law", ["These Terms are subject to applicable laws and regulations. Legal matters will be handled in accordance with applicable law."]]
  ],
  id: [
    ["1. Persetujuan Ketentuan", ["Ketentuan ini mengatur akses dan penggunaan website Zirocraft. Dengan menggunakan website, Anda menyatakan telah membaca dan memahaminya. Jika tidak setuju, hentikan penggunaan website."]],
    ["2. Tentang Zirocraft", ["Zirocraft adalah perusahaan teknologi yang berfokus pada solusi teknologi praktis untuk bisnis yang berkembang. Website ini menyediakan informasi umum mengenai Zirocraft, produk, dan aktivitas bisnisnya."]],
    ["3. Penggunaan Website", ["Anda setuju menggunakan website secara sah dan tidak mengganggu operasional maupun pengunjung lain. Anda dilarang mencoba akses tanpa izin, memasukkan kode berbahaya, atau mengganggu fungsi website."]],
    ["4. Informasi Produk", ["Informasi produk dapat menjelaskan proses pengembangan, kemampuan yang dituju, arah produk, atau rencana peningkatan. Kecuali dinyatakan secara tegas, informasi tersebut bukan jaminan bahwa fitur, layanan, tanggal rilis, atau kemampuan tertentu telah tersedia. Detail produk dapat berubah."]],
    ["5. Kekayaan Intelektual", ["Kecuali dinyatakan lain, konten website, merek, logo, grafis, dan elemen desain merupakan milik Zirocraft atau digunakan dengan izin. Anda tidak boleh memperbanyak atau mengeksploitasi materi tersebut secara komersial tanpa izin, kecuali diperbolehkan hukum."]],
    ["6. Tautan Pihak Ketiga", ["Website pihak ketiga beroperasi secara independen. Zirocraft tidak mengendalikan dan tidak bertanggung jawab atas konten, ketersediaan, kebijakan, atau praktiknya."]],
    ["7. Penyangkalan", ["Website ini disediakan untuk tujuan informasi. Sejauh diizinkan hukum, Zirocraft tidak menjamin operasional yang selalu tersedia, tanpa gangguan, atau bebas kesalahan. Konten website bukan penawaran komersial yang mengikat kecuali dinyatakan dalam perjanjian tertulis terpisah."]],
    ["8. Batas Tanggung Jawab", ["Sejauh diizinkan hukum, Zirocraft tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial akibat penggunaan atau ketidakmampuan menggunakan website informasi ini. Ketentuan ini tidak mengecualikan tanggung jawab yang tidak boleh dikecualikan menurut hukum."]],
    ["9. Privasi", ["Penggunaan website ini juga tunduk pada Kebijakan Privasi kami."]],
    ["10. Perubahan Ketentuan", ["Kami dapat memperbarui ketentuan ini seiring perubahan website, produk, atau kegiatan bisnis. Ketentuan yang diperbarui akan dipublikasikan di halaman ini beserta tanggal berlaku yang baru."]],
    ["11. Hukum yang Berlaku", ["Ketentuan ini tunduk pada peraturan perundang-undangan yang berlaku. Permasalahan hukum akan ditangani sesuai hukum yang berlaku."]]
  ]
};

export default async function TermsPage({ params }: PageProps<"/[locale]/terms">) {
  const { locale } = await params;
  if (locale !== "id" && locale !== "en") notFound();
  const id = locale === "id";
  return <><section className="border-b border-border bg-surface py-20 sm:py-28"><div className="mx-auto max-w-7xl px-6 lg:px-8"><span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">{id ? "Informasi Legal" : "Legal Information"}</span><h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">{id ? "Ketentuan Layanan" : "Terms of Service"}</h1><p className="mt-6 text-lg leading-8 text-muted">{id ? "Ketentuan penggunaan website resmi Zirocraft." : "Terms and conditions for accessing and using the Zirocraft website."}</p><p className="mt-6 text-sm text-muted">{id ? "Tanggal berlaku: 1 November 2026" : "Effective date: November 1, 2026"}</p></div></section><section className="py-20 sm:py-28"><article className="mx-auto max-w-3xl space-y-12 px-6 lg:px-8">{sections[locale].map(([title, paragraphs])=><section key={title}><h2 className="text-xl font-semibold text-foreground sm:text-2xl">{title}</h2><div className="mt-5 space-y-4">{paragraphs.map((p)=><p key={p} className="leading-8 text-muted">{p}</p>)}</div></section>)}<section><h2 className="text-xl font-semibold text-foreground">{id ? "12. Hubungi Kami" : "12. Contact Us"}</h2><p className="mt-5 leading-8 text-muted">{id ? "Jika memiliki pertanyaan mengenai ketentuan ini, hubungi:" : "If you have questions about these Terms, contact:"}</p><a className="mt-4 inline-block font-medium text-accent" href="mailto:zirocraftid@gmail.com">zirocraftid@gmail.com</a></section></article></section></>;
}
