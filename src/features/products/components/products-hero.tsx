import type { Locale } from "@/lib/i18n/dictionaries";

export function ProductsHero({ locale }: { locale: Locale }) {
  const id = locale === "id";
  return (
    <section className="bg-[#15191f] py-24 text-white sm:py-36">
      <div className="site-container">
        <span className="eyebrow !text-[#9db4ff]">{id ? "Portofolio produk" : "Product portfolio"}</span>
        <h1 className="display-heading mt-8 max-w-4xl">{id ? "Perangkat lunak untuk pekerjaan yang berbeda." : "Software for different kinds of work."}</h1>
        <p className="mt-8 max-w-2xl text-base leading-8 text-white/60">{id ? "Dua area operasional menjadi fokus pengembangan produk ZiroCraft saat ini. Keduanya memiliki kebutuhan dan pendekatan yang berbeda." : "Two operational domains are the current focus of ZiroCraft's product development. Each comes with its own needs and approach."}</p>
      </div>
    </section>
  );
}
