import type { Locale } from "@/lib/i18n/dictionaries";

export type Product = {
  slug: string;
  name: string;
  category: Record<Locale, string>;
  status: "in-development" | "available" | "coming-soon";
  summary: Record<Locale, string>;
  description: Record<Locale, string>;
};

export const products: Product[] = [
  {
    slug: "ziropos",
    name: "ZiroPOS",
    category: { id: "Point of Sale & Manajemen Bisnis", en: "Point of Sale & Business Management" },
    status: "in-development",
    summary: {
      id: "Platform POS dan manajemen bisnis yang dirancang untuk mendukung beragam kebutuhan operasional usaha.",
      en: "A point-of-sale and business management platform designed for different operational needs."
    },
    description: {
      id: "ZiroPOS dikembangkan sebagai platform POS SaaS dengan fondasi multi-tenant, pengelolaan toko, dan operasional bisnis yang terstruktur. Kapabilitas produk akan diperkenalkan secara bertahap seiring proses pengembangan dan validasi.",
      en: "ZiroPOS is being developed as a POS SaaS platform with a multi-tenant foundation, store management, and structured business operations. Product capabilities will be introduced progressively as development and validation continue."
    }
  },
  {
    slug: "zirologistics",
    name: "ZiroLogistics",
    category: { id: "Warehouse Management System (WMS)", en: "Warehouse Management System (WMS)" },
    status: "in-development",
    summary: {
      id: "Sistem manajemen gudang yang sedang dikembangkan untuk membantu mengelola aktivitas dan alur kerja pergudangan.",
      en: "A warehouse management system in development to support warehouse activities and workflows."
    },
    description: {
      id: "ZiroLogistics dikembangkan dengan fokus awal pada kebutuhan gudang kecil hingga menengah, dengan fondasi yang dapat dievaluasi dan dikembangkan lebih lanjut seiring kebutuhan operasional bertambah.",
      en: "ZiroLogistics is being developed with an initial focus on small and medium-sized warehouse operations, with a foundation that can be evaluated and extended as operational needs grow."
    }
  }
];

export function productText(product: Product, locale: Locale) {
  return {
    category: product.category[locale],
    summary: product.summary[locale],
    description: product.description[locale]
  };
}
