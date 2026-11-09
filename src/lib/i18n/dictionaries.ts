export type Locale = "id" | "en";

export const dictionaries = {
  id: {
    navigation: { products: "Produk", about: "Tentang", contact: "Kontak", cta: "Jelajahi produk", menu: "Menu", mainLabel: "Navigasi utama", mobileLabel: "Navigasi seluler" },
    home: { eyebrow: "Teknologi yang dibangun dengan tujuan", title: "Teknologi yang mengikuti cara bisnis bekerja.", description: "Zirocraft mengembangkan solusi digital praktis untuk membantu bisnis mengelola operasional dan bertumbuh.", explore: "Jelajahi produk", about: "Tentang Zirocraft", introEyebrow: "Tentang Zirocraft", introTitle: "Teknologi seharusnya menyelesaikan masalah nyata.", intro: "Kami membangun solusi digital dengan fokus pada kebutuhan operasional, kemudahan adaptasi, dan pengembangan jangka panjang.", portfolioEyebrow: "Portofolio Produk", portfolioTitle: "Solusi untuk kebutuhan operasional yang berbeda.", portfolioDescription: "Setiap produk Zirocraft dikembangkan untuk menjawab tantangan operasional pada bidang yang berbeda.", status: "Dalam Pengembangan", learnMore: "Pelajari produk", closingTitle: "Mari membangun sesuatu yang bermanfaat.", closingDescription: "Punya pertanyaan atau ingin berdiskusi tentang produk Zirocraft?", contact: "Hubungi Zirocraft" },
    products: { eyebrow: "Portofolio Produk", title: "Teknologi untuk kebutuhan nyata.", description: "Kenali produk yang sedang dikembangkan Zirocraft untuk mendukung operasional bisnis.", back: "Semua produk", contact: "Diskusikan kebutuhan Anda" },
    footer: { tagline: "Membangun teknologi praktis untuk bisnis yang terus berkembang.", explore: "Jelajahi", company: "Perusahaan", legal: "Informasi Legal", about: "Tentang kami", contact: "Kontak", privacy: "Kebijakan Privasi", terms: "Ketentuan Layanan", rights: "Hak cipta dilindungi." }
  },
  en: {
    navigation: { products: "Products", about: "About", contact: "Contact", cta: "Explore products", menu: "Menu", mainLabel: "Main navigation", mobileLabel: "Mobile navigation" },
    home: { eyebrow: "Technology built with purpose", title: "Technology built around the way businesses work.", description: "Zirocraft develops practical digital solutions that help businesses manage operations and grow.", explore: "Explore products", about: "About Zirocraft", introEyebrow: "About Zirocraft", introTitle: "Technology should solve real problems.", intro: "We build digital solutions focused on operational needs, adaptability, and sustainable long-term development.", portfolioEyebrow: "Product Portfolio", portfolioTitle: "Solutions for different operational needs.", portfolioDescription: "Each Zirocraft product is developed to address operational challenges in a different field.", status: "In Development", learnMore: "Explore product", closingTitle: "Let's build something useful.", closingDescription: "Have a question or want to discuss Zirocraft products?", contact: "Contact Zirocraft" },
    products: { eyebrow: "Product Portfolio", title: "Technology for real-world needs.", description: "Discover products being developed by Zirocraft to support business operations.", back: "All products", contact: "Discuss your requirements" },
    footer: { tagline: "Building practical technology for growing businesses.", explore: "Explore", company: "Company", legal: "Legal", about: "About us", contact: "Contact", privacy: "Privacy Policy", terms: "Terms of Service", rights: "All rights reserved." }
  }
} as const;

export function getDictionary(locale: string) {
  return dictionaries[locale === "id" ? "id" : "en"];
}
