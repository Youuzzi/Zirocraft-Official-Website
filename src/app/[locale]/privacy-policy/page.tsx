import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: PageProps<"/[locale]/privacy-policy">): Promise<Metadata> {
  const { locale } = await params;
  return locale === "id"
    ? { title: "Kebijakan Privasi", description: "Kebijakan privasi website resmi Zirocraft." }
    : { title: "Privacy Policy", description: "Privacy policy for the official Zirocraft website." };
}
type LegalSection = [string, string[]];
const sections: Record<"en" | "id", LegalSection[]> = {
  en: [
    ["1. Introduction", ["Zirocraft (we, our, or us) respects your privacy and is committed to handling personal information responsibly.", "This policy explains how information may be collected, used, and handled when you visit this website or contact us."]],
    ["2. Information We May Receive", ["Our website provides information about Zirocraft and its products. We do not currently provide public user accounts or a website-based registration system.", "If you contact us by email, we may receive information you choose to include, such as your name, email address, organization, and inquiry. Hosting providers may process technical information needed to operate the website."]],
    ["3. How We Use Information", ["Information received through direct communication may be used to respond to inquiries, discuss business opportunities, and maintain relevant correspondence.", "Technical information may be used to operate, secure, and troubleshoot the website."]],
    ["4. Cookies and Similar Technologies", ["This website may use cookies or similar technologies if required by hosting, infrastructure, or future functionality. Optional analytics or tracking use depends on whether those services are implemented."]],
    ["5. Information Sharing", ["We do not sell personal information received through direct communication. Service providers may process information as needed to provide website or email services. We may disclose information when required by law."]],
    ["6. Retention and Security", ["We retain correspondence only as long as reasonably necessary for its purpose, business needs, or legal requirements. We take reasonable steps to protect information, but no electronic transmission or storage can be guaranteed completely secure."]],
    ["7. External Links", ["Third-party websites operate independently and have their own privacy policies. We are not responsible for their practices or content."]],
    ["8. Your Privacy Rights", ["Depending on applicable law, you may have rights to request access, correction, deletion, or information about your personal information. Contact us by email; identity verification may be required."]],
    ["9. Children's Privacy", ["This website is intended for general business and informational purposes and is not designed to knowingly collect personal information from children."]],
    ["10. Changes to This Policy", ["We may update this policy when our website, services, or legal obligations change. Updates will be published here with a revised effective date."]]
  ],
  id: [
    ["1. Pendahuluan", ["Zirocraft (kami) menghormati privasi Anda dan berkomitmen menangani informasi pribadi secara bertanggung jawab.", "Kebijakan ini menjelaskan bagaimana informasi dapat diterima, digunakan, dan ditangani saat Anda mengunjungi website atau menghubungi kami."]],
    ["2. Informasi yang Dapat Kami Terima", ["Website ini menyediakan informasi tentang Zirocraft dan produknya. Saat ini kami tidak menyediakan akun pengguna publik atau sistem pendaftaran melalui website.", "Jika Anda menghubungi kami melalui email, kami dapat menerima informasi yang Anda sertakan, seperti nama, alamat email, organisasi, dan isi pertanyaan. Penyedia hosting dapat memproses informasi teknis yang diperlukan untuk menjalankan website."]],
    ["3. Penggunaan Informasi", ["Informasi dari komunikasi langsung dapat digunakan untuk menjawab pertanyaan, membahas peluang bisnis, dan menjaga korespondensi yang relevan.", "Informasi teknis dapat digunakan untuk menjalankan, mengamankan, dan memperbaiki gangguan website."]],
    ["4. Cookie dan Teknologi Serupa", ["Website ini dapat menggunakan cookie atau teknologi serupa jika diperlukan oleh hosting, infrastruktur, atau fungsi website di masa mendatang. Penggunaan analitik atau pelacakan opsional bergantung pada implementasi layanan tersebut."]],
    ["5. Pembagian Informasi", ["Kami tidak menjual informasi pribadi yang diterima melalui komunikasi langsung. Penyedia layanan dapat memproses informasi seperlunya untuk layanan website atau email. Informasi dapat diungkapkan jika diwajibkan hukum."]],
    ["6. Penyimpanan dan Keamanan", ["Kami menyimpan korespondensi selama diperlukan secara wajar untuk tujuannya, kebutuhan bisnis, atau kewajiban hukum. Kami mengambil langkah wajar untuk melindungi informasi, tetapi tidak ada transmisi atau penyimpanan elektronik yang dapat dijamin sepenuhnya aman."]],
    ["7. Tautan Eksternal", ["Website pihak ketiga beroperasi secara independen dan memiliki kebijakan privasi sendiri. Kami tidak bertanggung jawab atas praktik atau kontennya."]],
    ["8. Hak Privasi Anda", ["Bergantung pada hukum yang berlaku, Anda dapat memiliki hak untuk meminta akses, koreksi, penghapusan, atau informasi mengenai data pribadi. Hubungi kami melalui email; verifikasi identitas mungkin diperlukan."]],
    ["9. Privasi Anak", ["Website ini ditujukan untuk informasi dan kebutuhan bisnis umum serta tidak dirancang untuk secara sadar mengumpulkan informasi pribadi anak-anak."]],
    ["10. Perubahan Kebijakan", ["Kami dapat memperbarui kebijakan ini ketika website, layanan, atau kewajiban hukum berubah. Pembaruan akan dipublikasikan di halaman ini dengan tanggal berlaku yang diperbarui."]]
  ]
};

export default async function PrivacyPolicyPage({ params }: PageProps<"/[locale]/privacy-policy">) {
  const { locale } = await params;
  if (locale !== "id" && locale !== "en") notFound();
  const id = locale === "id";
  return <><section className="border-b border-border bg-surface py-20 sm:py-28"><div className="mx-auto max-w-7xl px-6 lg:px-8"><span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">{id ? "Informasi Legal" : "Legal Information"}</span><h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">{id ? "Kebijakan Privasi" : "Privacy Policy"}</h1><p className="mt-6 text-lg leading-8 text-muted">{id ? "Penjelasan mengenai penanganan informasi saat Anda berinteraksi dengan website Zirocraft." : "How information is handled when you interact with the Zirocraft website."}</p><p className="mt-6 text-sm text-muted">{id ? "Tanggal berlaku: 1 November 2026" : "Effective date: November 1, 2026"}</p></div></section><section className="py-20 sm:py-28"><article className="mx-auto max-w-3xl space-y-12 px-6 lg:px-8">{sections[locale].map(([title, paragraphs])=><section key={title}><h2 className="text-xl font-semibold text-foreground sm:text-2xl">{title}</h2><div className="mt-5 space-y-4">{paragraphs.map((p)=><p key={p} className="leading-8 text-muted">{p}</p>)}</div></section>)}<section><h2 className="text-xl font-semibold text-foreground">{id ? "11. Hubungi Kami" : "11. Contact Us"}</h2><p className="mt-5 leading-8 text-muted">{id ? "Untuk pertanyaan mengenai kebijakan ini, hubungi:" : "For questions regarding this policy, contact:"}</p><a className="mt-4 inline-block font-medium text-accent" href="mailto:zirocraftid@gmail.com">zirocraftid@gmail.com</a></section></article></section></>;
}
