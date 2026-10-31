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
      <section id="overview" className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div>
            <span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              Platform Overview
            </span>

            <h2 className="mt-5 text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl">
              A connected platform for everyday business operations.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-muted">
            <p>
              ZiroPOS is envisioned as more than a conventional cashier
              application. Its direction is to bring essential business
              operations into a structured and connected platform.
            </p>

            <p>
              The platform is being developed around business transactions,
              employees, store operations, branches, and configurable access.
              These areas form the foundation for businesses with different
              operational needs.
            </p>

            <p>
              Rather than forcing every business to follow the same structure,
              ZiroPOS aims to provide a flexible foundation that can evolve
              alongside each business.
            </p>
          </div>
        </div>
      </section>

      {/* Business Environments */}
      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              Business Environments
            </span>

            <h2 className="mt-5 text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl">
              Different businesses. Different operational needs.
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted">
              From small businesses to more complex operations, ZiroPOS is being
              designed with different business environments in mind.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {businessTypes.map((business) => (
              <article
                key={business.number}
                className="rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-accent">
                  {business.number}
                </span>

                <h3 className="mt-8 text-xl font-semibold tracking-tight text-foreground">
                  {business.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted">
                  {business.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Structure */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div>
            <span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              Connected Operations
            </span>

            <h2 className="mt-5 text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl">
              Business operations should work together.
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted">
              Managing a business involves more than recording sales. Employees,
              stores, transactions, and daily activities are interconnected.
              ZiroPOS is being developed with this broader operational picture
              in mind.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "Transactions",
                detail: "Sales and daily business activity",
              },
              {
                title: "Employees",
                detail: "People and operational responsibilities",
              },
              {
                title: "Stores",
                detail: "Locations and branch operations",
              },
              {
                title: "Management",
                detail: "Business oversight and configuration",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`rounded-2xl border border-border p-6 ${
                  index === 0 || index === 3
                    ? "bg-[#101828] text-white"
                    : "bg-surface text-foreground"
                }`}
              >
                <span
                  className={`text-xs font-semibold ${
                    index === 0 || index === 3 ? "text-blue-300" : "text-accent"
                  }`}
                >
                  0{index + 1}
                </span>

                <h3 className="mt-7 text-lg font-semibold">{item.title}</h3>

                <p
                  className={`mt-3 text-sm leading-6 ${
                    index === 0 || index === 3 ? "text-slate-300" : "text-muted"
                  }`}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Principles */}
      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              Product Principles
            </span>

            <h2 className="mt-5 text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl">
              A foundation designed for long-term growth.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="rounded-2xl border border-border bg-white p-8"
              >
                <span className="text-sm font-semibold text-accent">
                  {principle.number}
                </span>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-foreground">
                  {principle.title}
                </h3>

                <p className="mt-4 leading-7 text-muted">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-white px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#101828] px-8 py-16 text-center text-white sm:px-16 sm:py-20">
          <span className="text-sm font-semibold tracking-[0.16em] text-blue-300 uppercase">
            ZiroPOS by Zirocraft
          </span>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl leading-tight font-semibold tracking-tight sm:text-5xl">
            Building a more adaptable way to manage business operations.
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-300">
            Want to learn more about ZiroPOS or discuss your business needs? Get
            in touch with our team.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-7 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
