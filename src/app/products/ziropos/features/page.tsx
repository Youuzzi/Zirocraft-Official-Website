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

      {/* Core Business Capabilities */}
      <section id="capabilities" className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              Core Business Capabilities
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Essential capabilities for connected business operations.
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted">
              ZiroPOS is being developed around essential areas of business
              management, bringing people, transactions, and daily activities
              into a more structured operational environment.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Business Management",
                description:
                  "A structured foundation for managing business information, configurations, and store operations.",
              },
              {
                number: "02",
                title: "Team & Access",
                description:
                  "Organized employee responsibilities, operational roles, and structured access management.",
              },
              {
                number: "03",
                title: "Sales & Transactions",
                description:
                  "Support for sales activities and transaction workflows across different business environments.",
              },
              {
                number: "04",
                title: "Daily Operations",
                description:
                  "A connected operational environment designed to support everyday business activities.",
              },
            ].map((capability) => (
              <article
                key={capability.number}
                className="rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <span className="text-sm font-semibold text-accent">
                  {capability.number}
                </span>

                <h3 className="mt-8 text-xl font-semibold leading-snug text-foreground">
                  {capability.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Business Structure */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              Flexible Business Structure
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Built around the way your business operates.
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted">
              Different businesses have different operational needs. ZiroPOS is
              designed around a flexible structure that can accommodate
              different business types, store arrangements, team
              responsibilities, and platform capabilities.
            </p>

            <p className="mt-5 leading-7 text-muted">
              From a single-location business to an organization managing
              multiple stores, the platform concept is built to support
              structured operations as business needs evolve.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
            <div className="mb-7">
              <span className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                Platform Structure
              </span>
              <h3 className="mt-2 text-xl font-semibold text-foreground">
                One connected business ecosystem
              </h3>
            </div>

            <div className="space-y-3">
              {[
                {
                  number: "01",
                  title: "Business Type",
                  description:
                    "Different operational environments and business needs.",
                },
                {
                  number: "02",
                  title: "Stores & Branches",
                  description:
                    "A structured foundation for single or multiple locations.",
                },
                {
                  number: "03",
                  title: "People & Responsibilities",
                  description:
                    "Organized teams with role-based responsibilities.",
                },
                {
                  number: "04",
                  title: "Platform Capabilities",
                  description:
                    "Business capabilities aligned with operational requirements.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="flex gap-5 rounded-2xl border border-border bg-white p-5"
                >
                  <span className="pt-1 text-sm font-semibold text-accent">
                    {item.number}
                  </span>

                  <div>
                    <h4 className="font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
