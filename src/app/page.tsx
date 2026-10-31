import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#101828] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[140px]"
        />

        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-blue-300 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Building with purpose
            </span>

            <h1 className="mt-8 text-5xl leading-[1.08] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Technology built around the way{" "}
              <span className="text-blue-400">businesses work.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              We create practical digital solutions designed to address real
              operational needs and support businesses as they grow.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-7 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
              >
                Explore our products
              </Link>

              <Link
                href="/about"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                About Zirocraft
              </Link>
            </div>
          </div>

          <div aria-hidden="true" className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-8 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-9">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <span className="text-sm font-semibold tracking-[0.18em] text-slate-300 uppercase">
                  Our approach
                </span>
                <span className="text-sm font-bold text-blue-400">z.</span>
              </div>

              <div className="py-8">
                <p className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                  Built with purpose.
                  <br />
                  <span className="text-slate-400">Designed for reality.</span>
                </p>
              </div>

              <div className="space-y-0">
                {[
                  {
                    number: "01",
                    title: "Practical",
                    description: "Focused on real business needs.",
                  },
                  {
                    number: "02",
                    title: "Adaptable",
                    description: "Designed with changing needs in mind.",
                  },
                  {
                    number: "03",
                    title: "Maintainable",
                    description: "Built with long-term development in mind.",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="flex items-center gap-5 border-t border-white/10 py-5"
                  >
                    <span className="text-sm font-medium text-blue-400">
                      {item.number}
                    </span>

                    <div>
                      <h2 className="font-semibold text-white">{item.title}</h2>
                      <p className="mt-1 text-sm text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -right-3 top-12 h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_24px_rgba(96,165,250,0.8)] sm:-right-5" />
            <div className="absolute -bottom-4 left-12 h-2 w-2 rounded-full bg-blue-300" />
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div>
            <span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              Who We Are
            </span>

            <h2 className="mt-5 max-w-xl text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl">
              Technology should solve real business problems.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-muted">
            <p>
              Zirocraft is a technology company focused on building practical
              digital solutions for growing businesses.
            </p>

            <p>
              Our approach centers on creating useful, adaptable, and
              maintainable technology that supports real operational needs.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Discover Zirocraft
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section id="ziropos" className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              Our Product
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Introducing ZiroPOS.
            </h2>

            <p className="mt-5 text-lg leading-8 text-muted">
              A business management and point of sale platform designed around
              the operational needs of modern businesses.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-white p-8 sm:p-12 lg:p-16">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold tracking-wide text-blue-700">
                  Zirocraft Product
                </span>

                <h3 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Manage your business with greater clarity.
                </h3>

                <p className="mt-5 leading-8 text-muted">
                  Explore ZiroPOS and learn more about the platform, its
                  direction, and the business environments it aims to serve.
                </p>

                <Link
                  href="/products/ziropos"
                  className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                >
                  Discover ZiroPOS
                </Link>
              </div>

              <div
                aria-hidden="true"
                className="relative flex min-h-64 items-center justify-center overflow-hidden rounded-2xl bg-[#101828] p-8"
              >
                <div className="absolute h-56 w-56 rounded-full bg-blue-600/30 blur-3xl" />

                <div className="relative w-full max-w-sm rounded-xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold tracking-tight text-white">
                      ziropos<span className="text-blue-400">.</span>
                    </span>
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                  </div>

                  <div className="mt-8 space-y-3">
                    <div className="h-3 w-2/3 rounded-full bg-white/20" />
                    <div className="h-3 w-full rounded-full bg-white/10" />
                    <div className="h-3 w-4/5 rounded-full bg-white/10" />
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-3">
                    <div className="h-14 rounded-lg border border-white/10 bg-white/10" />
                    <div className="h-14 rounded-lg border border-white/10 bg-white/10" />
                    <div className="h-14 rounded-lg border border-white/10 bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-white px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#101828] px-8 py-16 text-center text-white sm:px-16 sm:py-20">
          <span className="text-sm font-semibold tracking-[0.16em] text-blue-300 uppercase">
            Let&apos;s Build
          </span>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl leading-tight font-semibold tracking-tight sm:text-5xl">
            Practical technology starts with understanding real needs.
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-300">
            Learn more about what we are building and how to get in touch with
            Zirocraft.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-7 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Contact Zirocraft
          </Link>
        </div>
      </section>
    </>
  );
}
