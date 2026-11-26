import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[75vh] items-center bg-[#f5f4f0]">
      <div className="site-container w-full py-24 sm:py-32">
        <p className="eyebrow">ZIROCRAFT / 404</p>
        <p className="mt-10 font-mono text-[clamp(5rem,18vw,12rem)] leading-none tracking-[-.09em] text-[#315fea]">404</p>
        <div className="mt-8 grid gap-8 border-t border-[#d9dad6] pt-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <p className="font-mono text-xs uppercase tracking-[.16em] text-[#89919a]">Page not found / Halaman tidak ditemukan</p>
          <div>
            <h1 className="max-w-2xl text-3xl font-semibold tracking-[-.055em] text-[#15191f] sm:text-5xl">
              The page you're looking for isn't here.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#66717d]">
              The address may have changed, or the page may no longer exist. You can return to the homepage and continue exploring ZiroCraft.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[#89919a]">
              Alamat mungkin berubah atau halaman sudah tidak tersedia. Silakan kembali ke halaman utama ZiroCraft.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/id" className="inline-flex min-h-12 items-center gap-4 bg-[#15191f] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#315fea]">
                Beranda Indonesia <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/en" className="inline-flex min-h-12 items-center gap-4 border border-[#d9dad6] px-5 text-sm font-semibold text-[#15191f] transition-colors hover:border-[#315fea] hover:text-[#315fea]">
                English homepage <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
