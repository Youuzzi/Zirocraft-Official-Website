import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore digital products developed by Zirocraft to address practical business and operational needs.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Products Hero */}
      <section className="relative isolate overflow-hidden bg-[#101828] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute -right-40 -top-40 -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]"
        />

        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold tracking-[0.16em] text-blue-300 uppercase">
              Our Products
            </span>

            <h1 className="mt-6 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Technology designed around{" "}
              <span className="text-blue-400">real needs.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              We build practical digital products that help businesses manage
              their operations and adapt to changing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              Featured Product
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Meet ZiroPOS.
            </h2>

            <p className="mt-5 text-lg leading-8 text-muted">
              A business management and point of sale platform designed around
              the operational needs of modern businesses.
            </p>
          </div>

          <article className="mt-14 overflow-hidden rounded-3xl border border-border bg-surface">
            <div className="grid lg:grid-cols-2">
              {/* Product Information */}
              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                <span className="w-fit rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold tracking-wide text-blue-700">
                  Zirocraft Product
                </span>

                <h3 className="mt-7 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  ZiroPOS
                </h3>

                <p className="mt-5 text-base leading-8 text-muted">
                  A professional multi-tenant POS SaaS platform envisioned to
                  support different business types, operational structures, and
                  business growth.
                </p>

                <p className="mt-4 text-base leading-8 text-muted">
                  From daily transactions to multi-store operations, ZiroPOS is
                  being developed with flexibility, structured access, and
                  long-term maintainability in mind.
                </p>

                <Link
                  href="/products/ziropos"
                  className="mt-9 inline-flex min-h-12 w-fit items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                >
                  Explore ZiroPOS
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>
              </div>

              {/* Product Visual */}
              <div
                aria-hidden="true"
                className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#101828] p-8 sm:p-12"
              >
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-600/30 blur-[90px]" />
                <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-indigo-600/20 blur-[90px]" />

                <div className="relative w-full max-w-md rounded-2xl border border-white/15 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <span className="text-xl font-bold tracking-tight text-white">
                      ziropos<span className="text-blue-400">.</span>
                    </span>

                    <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-300">
                      POS Platform
                    </span>
                  </div>

                  <div className="mt-7 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/[0.05] p-4">
                      <div className="h-2 w-16 rounded-full bg-white/20" />
                      <div className="mt-4 h-5 w-24 rounded bg-blue-400/70" />
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.05] p-4">
                      <div className="h-2 w-20 rounded-full bg-white/20" />
                      <div className="mt-4 h-5 w-16 rounded bg-white/50" />
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.05] p-4">
                    <div className="h-2 w-24 rounded-full bg-white/20" />

                    <div className="mt-5 space-y-3">
                      <div className="h-2 w-full rounded-full bg-white/15" />
                      <div className="h-2 w-4/5 rounded-full bg-white/15" />
                      <div className="h-2 w-3/5 rounded-full bg-white/15" />
                    </div>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <div className="h-10 flex-1 rounded-lg bg-blue-500/80" />
                    <div className="h-10 w-20 rounded-lg border border-white/10 bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Product Direction */}
      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              Our Direction
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              Built to adapt to the way businesses operate.
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted">
              We believe business technology should be flexible. Different
              businesses have different workflows, operational requirements, and
              ambitions for growth. Our products are developed with these
              differences in mind.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Practical",
                description:
                  "Focused on addressing real operational needs rather than adding unnecessary complexity.",
              },
              {
                number: "02",
                title: "Adaptable",
                description:
                  "Designed with different business environments and changing requirements in mind.",
              },
              {
                number: "03",
                title: "Maintainable",
                description:
                  "Developed with thoughtful engineering and long-term sustainability as priorities.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-accent">
                  {item.number}
                </span>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-white px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#101828] px-8 py-16 text-center text-white sm:px-16 sm:py-20">
          <span className="text-sm font-semibold tracking-[0.16em] text-blue-300 uppercase">
            Discover More
          </span>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl leading-tight font-semibold tracking-tight sm:text-5xl">
            Explore what we are building with ZiroPOS.
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-300">
            Learn about the platform, its direction, and how it aims to support
            different business operations.
          </p>

          <Link
            href="/products/ziropos"
            className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-7 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Discover ZiroPOS
          </Link>
        </div>
      </section>
    </>
  );
}
