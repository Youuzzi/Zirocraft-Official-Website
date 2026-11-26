import Link from "next/link";
import type { Product } from "@/features/products/data/products";
import { productText } from "@/features/products/data/products";
import type { Locale } from "@/lib/i18n/dictionaries";

export function ProductDetailHero({ product, locale }: { product: Product; locale: Locale }) {
  const id = locale === "id";
  const copy = productText(product, locale);
  const pos = product.slug === "ziropos";
  return (
    <section className="bg-[#15191f] py-20 text-white sm:py-32">
      <div className="site-container">
        <Link href={`/${locale}/products`} className="inline-flex items-center gap-3 text-xs font-medium text-white/55 hover:text-white">← {id ? "Semua produk" : "All products"}</Link>
        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <span className="eyebrow !text-[#9db4ff]">{copy.category}</span><h1 className="display-heading mt-7">{product.name}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">{copy.summary}</p>
            <span className="mt-8 inline-flex items-center gap-2 border border-[#e5a34b]/40 px-3 py-2 font-mono text-[10px] uppercase tracking-[.13em] text-[#f0c17d]"><span className="h-1.5 w-1.5 rounded-full bg-[#e5a34b]" />{id ? "Dalam pengembangan" : "In development"}</span>
          </div>
          <div className={`product-art ${pos ? "product-art-pos" : "product-art-wms"} min-h-[260px] lg:min-h-[340px]`} aria-hidden="true"><div className="art-core" /><span className="absolute bottom-5 left-5 z-10 font-mono text-[10px] tracking-[.18em] text-[#26313b]/65">ZIROCRAFT / PRODUCT STUDY</span></div>
        </div>
      </div>
    </section>
  );
}
