import type { Locale } from "@/lib/i18n";

export type ProductStatus = "in-development" | "coming-soon";

export type Product = {
  slug: string;
  name: string;
  category: string;
  status: ProductStatus;
  description: Record<Locale, string>;
  overview: Record<Locale, string>;
  audience: Record<Locale, string>;
};

export const products: Product[] = [
  {
    slug: "ziropos",
    name: "ZiroPOS",
    category: "Point of Sale & Business Management",
    status: "in-development",
    description: {
      id: "Platform POS dan manajemen bisnis yang sedang dikembangkan untuk mendukung kebutuhan operasional berbagai jenis usaha.",
      en: "A point-of-sale and business management platform in development for the operational needs of different business types.",
    },
    overview: {
      id: "ZiroPOS dikembangkan dengan fokus pada fondasi operasional bisnis yang terstruktur, fleksibel, dan dapat berkembang mengikuti kebutuhan usaha.",
      en: "ZiroPOS is being developed around a structured, adaptable operational foundation that can evolve with business needs.",
    },
    audience: {
      id: "Dirancang dengan mempertimbangkan lingkungan retail, kafe, restoran, dan usaha yang membutuhkan pengelolaan transaksi serta operasional toko.",
      en: "Designed with retail, cafés, restaurants, and businesses managing sales and store operations in mind.",
    },
  },
  {
    slug: "zirologistics",
    name: "ZiroLogistics",
    category: "Warehouse Management System",
    status: "in-development",
    description: {
      id: "Sistem manajemen gudang yang sedang dikembangkan dengan fokus awal pada kebutuhan operasional gudang kecil dan menengah.",
      en: "A warehouse management system in development, initially focused on the operational needs of small and medium-sized warehouses.",
    },
    overview: {
      id: "ZiroLogistics dikembangkan untuk membantu membangun proses gudang yang lebih terstruktur, dengan ruang untuk berkembang seiring meningkatnya kebutuhan operasional.",
      en: "ZiroLogistics is being developed to support more structured warehouse processes, with room to evolve as operational needs grow.",
    },
    audience: {
      id: "Ditujukan sebagai fondasi bagi bisnis yang ingin mengelola aktivitas gudang kecil hingga menengah secara lebih tertata.",
      en: "Intended as a foundation for businesses seeking more organized small-to-medium warehouse operations.",
    },
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductStatusLabel(status: ProductStatus, locale: Locale) {
  if (status === "in-development") {
    return locale === "id" ? "Dalam Pengembangan" : "In Development";
  }
  return locale === "id" ? "Segera Hadir" : "Coming Soon";
}
