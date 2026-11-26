import Link from "next/link";
import { products, productText } from "@/features/products/data/products";
import type { Locale } from "@/lib/i18n/dictionaries";

export function ProductsListing({ locale }: { locale: Locale }) {
  const id = locale === "id";
  return (
    <section className="bg-[#e9e8e2] py-20 text-[#15191f] sm:py-28">
      <div className="site-container">
        {products.map((product, index) => {
          const copy = productText(product, locale);
          const isPos = product.slug === "ziropos";
          return (
            <article key={product.slug} className="grid gap-0 border-b border-[#d9dad6] py-10 first:pt-0 last:border-0 lg:grid-cols-[.9fr_1.1fr] lg:gap-16 lg:py-16">
              <div className={`product-art ${isPos ? "product-art-pos" : "product-art-wms"} min-h-[300px] lg:min-h-[390px]`} aria-hidden="true">
                <div className="art-core" />
                <span className="absolute bottom-5 left-5 z-10 font-mono text-[10px] tracking-[.18em] text-[#11151b]">{isPos ? "TRANSACTIONS / BUSINESS" : "STORAGE / MOVEMENT"}</span>
              </div>
              <div className="flex flex-col justify-center py-8 lg:py-0">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#414db5]">0{index + 1} / {copy.category}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-[.12em] text-[#765323]">{id ? "Dalam pengembangan" : "In development"}</span>
                </div>
                <h2 className="mt-6 text-4xl font-semibold tracking-[-.06em] sm:text-5xl">{product.name}</h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-[#56616d]">{copy.summary}</p>
                <p className="mt-4 max-w-xl text-sm leading-7 text-[#58616b]">{copy.description}</p>
                <Link href={`/${locale}/products/${product.slug}`} className="mt-8 inline-flex w-fit items-center gap-8 border-b border-[#11151b] pb-2 text-sm font-semibold hover:border-[#5965d8] hover:text-[#414db5]">
                  {id ? "Lihat arah pengembangan" : "Explore product direction"} <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
