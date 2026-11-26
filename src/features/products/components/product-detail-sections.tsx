import Link from "next/link";
import type { Product } from "@/features/products/data/products";
import { productText } from "@/features/products/data/products";
import type { Locale } from "@/lib/i18n/dictionaries";

export function ProductDetailSections({ product, locale }: { product: Product; locale: Locale }) {
  const id = locale === "id";
  const copy = productText(product, locale);
  const pos = product.slug === "ziropos";
  const scope = pos
    ? (id ? [["01","Konteks usaha","Dirancang dengan mempertimbangkan kebutuhan transaksi dan pengelolaan usaha."],["02","Operasional toko","Arah pengembangan mencakup pengelolaan aktivitas bisnis dan konteks multi-toko."],["03","Fondasi produk","Dikembangkan bertahap dengan perhatian pada struktur dan kebutuhan bisnis yang beragam."]] : [["01","Business context","Designed with transaction and business-management needs in mind."],["02","Store operations","The product direction considers business activity and multi-store contexts."],["03","Product foundation","Developed iteratively with attention to structure and varied business needs."]])
    : (id ? [["01","Struktur gudang","Merepresentasikan gudang, lokasi penyimpanan, dan barang secara terstruktur."],["02","Alur persediaan","Fokus pengembangan mencakup aktivitas penerimaan, pengeluaran, dan visibilitas stok."],["03","Kontrol operasional","Mendukung pendekatan kerja yang lebih tertata untuk operasional gudang kecil hingga menengah."]] : [["01","Warehouse structure","Represent warehouses, storage locations, and items in a structured way."],["02","Inventory workflows","Development focuses on receiving, dispatch, and stock visibility."],["03","Operational control","A considered approach for small and medium-sized warehouse operations."]]);
  return (
    <>
      <section className="bg-[#e9e8e2] py-24 text-[#15191f] sm:py-32">
        <div className="site-container grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
          <div><span className="eyebrow">{id ? "Arah produk" : "Product direction"}</span><p className="mt-6 font-mono text-xs text-[#58616b]">01 / OVERVIEW</p></div>
          <div>
            <h2 className="section-heading">{id ? "Dirancang untuk memahami dan menata pekerjaan operasional." : "Designed to bring structure to operational work."}</h2>
            <p className="mt-8 max-w-3xl text-base leading-8 text-[#56616d]">{copy.description}</p>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-[#58616b]">{id ? "Halaman ini menjelaskan arah pengembangan, bukan penawaran ketersediaan produk. Cakupan dan kapabilitas dapat berubah seiring validasi dan proses pengembangan." : "This page describes the product direction, not product availability. Scope and capabilities may change as validation and development continue."}</p>
          </div>
        </div>
      </section>
      <section className="bg-white py-24 text-[#15191f] sm:py-32">
        <div className="site-container">
          <span className="eyebrow">{id ? "Area perhatian" : "Areas of focus"}</span>
          <h2 className="section-heading mt-6 max-w-3xl">{id ? "Ruang lingkup yang sedang dieksplorasi." : "The areas currently being explored."}</h2>
          <div className="mt-12 border-t border-[#d9dad6]">
            {scope.map(([number, title, description]) => (
              <article key={number} className="grid gap-4 border-b border-[#d9dad6] py-8 sm:grid-cols-[80px_1fr_1fr]">
                <span className="font-mono text-xs text-[#414db5]">{number}</span><h3 className="text-xl font-semibold tracking-[-.04em]">{title}</h3><p className="text-sm leading-7 text-[#56616d]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#11151b] py-20 text-white sm:py-24">
        <div className="site-container flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <div><span className="eyebrow !text-[#d6ff55]">{id ? "Diskusi produk" : "Product conversation"}</span><h2 className="mt-5 text-3xl font-semibold tracking-[-.05em]">{id ? "Ingin mengetahui lebih lanjut?" : "Want to learn more?"}</h2></div>
          <Link href={`/${locale}/contact`} className="inline-flex min-h-12 items-center justify-between gap-8 bg-[#5965d8] px-5 text-sm font-semibold text-white hover:bg-[#2449b8">{id ? "Hubungi ZiroCraft" : "Contact ZiroCraft"} <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  );
}
