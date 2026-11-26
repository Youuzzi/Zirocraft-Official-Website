import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/dictionaries";

type PageMetadataInput = {
  locale: Locale;
  title: string;
  description: string;
};

export function createPageMetadata({ locale, title, description }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    openGraph: {
      type: "website",
      locale: locale === "id" ? "id_ID" : "en_US",
      siteName: "ZiroCraft",
      title,
      description
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
