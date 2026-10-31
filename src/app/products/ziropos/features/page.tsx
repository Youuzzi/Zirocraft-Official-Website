import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZiroPOS Features",
  description:
    "Explore the business capabilities and operational areas being developed as part of the ZiroPOS platform.",
};

export default function ZiroPOSFeaturesPage() {
  return (
    <main>
      {/* Hero Section */}
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
          className="absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[130px]"
        />

        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-blue-300 uppercase">
              ZiroPOS Platform
            </span>

            <h1 className="mt-8 text-5xl leading-[1.08] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              One platform.
              <span className="mt-2 block text-blue-400">
                Connected business capabilities.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Explore the capabilities being developed to help businesses manage
              their people, stores, sales, and daily operations through one
              structured platform.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#capabilities"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-7 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
              >
                Explore Capabilities
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
