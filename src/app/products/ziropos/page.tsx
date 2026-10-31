import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZiroPOS",
  description:
    "Discover ZiroPOS, a professional multi-tenant POS SaaS platform designed to support different business operations and growth.",
};

const businessTypes = [
  {
    number: "01",
    title: "Cafe",
    description:
      "Designed with cafe workflows and day-to-day service operations in mind.",
  },
  {
    number: "02",
    title: "Restaurant",
    description:
      "A platform direction that considers ordering, service, and kitchen operations.",
  },
  {
    number: "03",
    title: "Retail",
    description:
      "Designed to address sales and store operational requirements.",
  },
  {
    number: "04",
    title: "Other Businesses",
    description:
      "A flexible foundation intended to accommodate different business environments.",
  },
];

const principles = [
  {
    number: "01",
    title: "Flexible",
    description:
      "Different businesses have different workflows. The platform is designed to accommodate varying operational requirements.",
  },
  {
    number: "02",
    title: "Structured",
    description:
      "Business operations, user access, and store management are built around clearly defined responsibilities.",
  },
  {
    number: "03",
    title: "Scalable",
    description:
      "The platform is being developed with growing businesses and multi-store operations in mind.",
  },
];

export default function ZiroPOSPage() {
  return (
    <>
      {/* Hero */}
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

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-blue-300 uppercase">
              A Zirocraft Product
            </span>

            <h1 className="mt-8 text-5xl leading-[1.08] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              More than a point of sale.
              <span className="mt-2 block text-blue-400">
                Built for business operations.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              ZiroPOS is a professional multi-tenant POS SaaS platform being
              developed to support different business types, operational
              structures, and growing business needs.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-7 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
              >
                Contact Us
              </Link>

              <Link
                href="#overview"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Discover the Platform
              </Link>
            </div>
          </div>

          {/* Abstract Product Visual */}
          <div aria-hidden="true" className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-8 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl backdrop-blur-xl sm:p-9">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <span className="text-2xl font-bold tracking-tight text-white">
                  ziropos<span className="text-blue-400">.</span>
                </span>

                <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-300">
                  POS SaaS
                </span>
              </div>

              <div className="py-8">
                <p className="text-sm text-slate-400">
                  Business Operations Platform
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  One platform.
                  <br />
                  <span className="text-blue-400">
                    Different business needs.
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {["Transactions", "Employees", "Stores", "Operations"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/[0.05] p-4"
                    >
                      <span className="text-xs text-slate-500">
                        0{index + 1}
                      </span>
                      <p className="mt-3 text-sm font-medium text-slate-200">
                        {item}
                      </p>
                    </div>
                  ),
                )}
              </div>

              <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-2/3 rounded-full bg-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}

      {/* Platform Overview */}
      <section
        id="overview"
        className="relative overflow-hidden bg-white py-24 sm:py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          {/* Overview Content */}
          <div>
            <span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              Platform Overview
            </span>

            <h2 className="mt-5 text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              One platform connecting essential business operations.
            </h2>

            <p className="mt-7 text-lg leading-8 text-muted">
              Running a business involves more than recording sales. It requires
              people, locations, transactions, and daily operations to work
              together.
            </p>

            <p className="mt-5 leading-8 text-muted">
              ZiroPOS is being developed around this broader operational
              picture. Its goal is to provide a structured foundation that can
              adapt to different business environments and operational
              requirements.
            </p>

            <div className="mt-10 border-l-2 border-accent pl-5">
              <p className="text-base leading-7 font-medium text-foreground">
                Different businesses should not have to follow one rigid
                operational structure.
              </p>
            </div>
          </div>

          {/* Conceptual Platform Diagram */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-full bg-blue-500/5 blur-3xl"
            />

            <div className="relative rounded-3xl border border-border bg-surface p-5 shadow-sm sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                  Platform Ecosystem
                </span>

                <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                  Concept
                </span>
              </div>

              {/* Central Platform */}
              <div className="mt-8 rounded-2xl bg-[#101828] p-6 text-white shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-xl font-bold text-blue-400">
                    Z
                  </div>

                  <div>
                    <p className="text-lg font-semibold tracking-tight">
                      ZiroPOS
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Business Operations Platform
                    </p>
                  </div>
                </div>

                <div className="mt-6 h-px bg-white/10" />

                <p className="mt-5 text-sm leading-6 text-slate-300">
                  A connected foundation for managing different business
                  operational needs.
                </p>
              </div>

              {/* Connector */}
              <div
                aria-hidden="true"
                className="mx-auto h-9 w-px bg-gradient-to-b from-blue-500 to-slate-300"
              />

              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    number: "01",
                    title: "Business",
                    detail: "Business identity and configuration",
                  },
                  {
                    number: "02",
                    title: "Stores",
                    detail: "Locations and branches",
                  },
                  {
                    number: "03",
                    title: "People",
                    detail: "Employees and responsibilities",
                  },
                  {
                    number: "04",
                    title: "Operations",
                    detail: "Transactions and daily activities",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="rounded-xl border border-border bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md sm:p-5"
                  >
                    <span className="text-xs font-semibold text-accent">
                      {item.number}
                    </span>

                    <h3 className="mt-4 text-base font-semibold text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-muted sm:text-sm">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-center text-xs leading-5 text-muted">
                Conceptual representation of the ZiroPOS product direction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
