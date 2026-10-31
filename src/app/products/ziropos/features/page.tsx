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

      {/* Role-Based Team Management */}
      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              Role-Based Team Management
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              The right responsibilities for every team member.
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted">
              Business operations involve different people with different
              responsibilities. ZiroPOS is designed around structured
              operational roles, helping each team member focus on the
              activities relevant to their responsibilities.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Owner",
                description:
                  "Business oversight, store management, reports, and business configuration.",
              },
              {
                number: "02",
                title: "Admin",
                description:
                  "Product management, employee administration, inventory, and operational configuration.",
              },
              {
                number: "03",
                title: "Supervisor",
                description:
                  "Operational oversight, team supervision, and approval of sensitive actions where authorized.",
              },
              {
                number: "04",
                title: "Kasir",
                description:
                  "Sales transactions, payment processing, and daily cashier activities.",
              },
              {
                number: "05",
                title: "Waiter",
                description:
                  "Customer service, order handling, and coordination with operational teams.",
              },
              {
                number: "06",
                title: "Kitchen",
                description:
                  "Order queues, preparation workflows, and production status coordination.",
              },
            ].map((role) => (
              <article
                key={role.number}
                className="rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <span className="text-sm font-semibold text-accent">
                  {role.number}
                </span>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  {role.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted">
                  {role.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50/70 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-foreground">
              Structured access, not just different dashboards.
            </h3>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
              Roles define operational responsibilities, while platform
              capabilities and permissions determine which features and actions
              are available. These concepts are designed to work together
              without being treated as interchangeable.
            </p>
          </div>
        </div>
      </section>

      {/* Operational Workflow & Control */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              Operational Workflow & Control
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Connected workflows for everyday business operations.
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted">
              Daily business activities involve more than individual
              transactions. ZiroPOS is being developed to support connected
              workflows that bring sales, payments, team coordination, and
              operational oversight into a structured environment.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {[
              {
                number: "01",
                title: "Sales & Orders",
                description:
                  "Support for recording sales activities and managing order workflows across different business environments.",
              },
              {
                number: "02",
                title: "Payment Processing",
                description:
                  "A structured approach to recording payments and tracking transaction completion.",
              },
              {
                number: "03",
                title: "Team Coordination",
                description:
                  "Operational responsibilities designed to connect relevant team members throughout daily workflows.",
              },
              {
                number: "04",
                title: "Operational Oversight",
                description:
                  "A foundation for monitoring business activities and supporting authorized operational supervision.",
              },
            ].map((workflow) => (
              <article
                key={workflow.number}
                className="group rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-md sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-accent">
                    {workflow.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="h-px w-12 bg-blue-200 transition-all duration-300 group-hover:w-20 group-hover:bg-blue-500"
                  />
                </div>

                <h3 className="mt-8 text-xl font-semibold text-foreground sm:text-2xl">
                  {workflow.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
                  {workflow.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-[#101828] p-8 text-white sm:p-10">
            <span className="text-xs font-semibold tracking-[0.16em] text-blue-400 uppercase">
              Connected Operations
            </span>

            <h3 className="mt-5 max-w-2xl text-2xl leading-tight font-semibold tracking-tight sm:text-3xl">
              Every operational activity should have a clear place in the bigger
              business picture.
            </h3>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
              The ZiroPOS product direction emphasizes structured workflows,
              clear responsibilities, and better visibility across business
              operations.
            </p>
          </div>
        </div>
      </section>

      {/* Operational Visibility & Accountability */}
      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
                Operational Visibility & Accountability
              </span>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Clear responsibilities. More accountable operations.
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted">
                Business operations require more than access to information.
                They also require clear responsibilities and traceable actions.
                ZiroPOS is being developed with operational accountability as an
                important part of its foundation.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  number: "01",
                  title: "Activity History",
                  description:
                    "A structured history of important operational activities to support better visibility into business changes.",
                },
                {
                  number: "02",
                  title: "Sensitive Action Tracking",
                  description:
                    "A product direction that emphasizes traceability for sensitive activities such as discounts, voids, and refunds.",
                },
                {
                  number: "03",
                  title: "Approval & Responsibility",
                  description:
                    "A foundation for controlled approvals and clearly identified responsibility when sensitive actions require authorization.",
                },
                {
                  number: "04",
                  title: "Structured Access",
                  description:
                    "Access to operational actions is designed around defined roles, capabilities, and permissions.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="flex gap-5 rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-md sm:p-7"
                >
                  <span className="pt-1 text-sm font-semibold text-accent">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-20 rounded-3xl border border-blue-100 bg-blue-50/70 p-8 sm:p-10">
            <p className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              Built Around Accountability
            </p>

            <h3 className="mt-5 max-w-3xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Important business actions should be visible, traceable, and
              connected to clear responsibilities.
            </h3>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-muted">
              This principle helps establish a more structured operational
              environment where business activities can be reviewed with greater
              clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Subscription & Business Capabilities */}

      {/* Subscription & Business Capabilities */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              Subscription & Business Capabilities
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              A configurable platform for different business needs.
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted">
              Every business has different operational requirements. ZiroPOS is
              designed around a configurable platform structure that connects
              business context, subscription plans, service status, and
              available business capabilities.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Business Context",
                description:
                  "Business type and scale help describe operational requirements and the level of service a business may need.",
              },
              {
                number: "02",
                title: "Subscription Plans",
                description:
                  "Plans define the included feature entitlements and usage limits available to a customer.",
              },
              {
                number: "03",
                title: "Subscription Status",
                description:
                  "Subscriptions determine the service status and active period associated with a customer's plan.",
              },
              {
                number: "04",
                title: "Business Capabilities",
                description:
                  "Capabilities represent the business features and operational tools made available to a tenant.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-md"
              >
                <span className="text-sm font-semibold text-accent">
                  {item.number}
                </span>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 overflow-hidden rounded-3xl bg-[#101828] p-8 text-white sm:p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-xs font-semibold tracking-[0.16em] text-blue-400 uppercase">
                  Configurable Platform
                </span>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
                  One platform, adaptable to different operational needs.
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-300">
                  The goal is to provide businesses with a platform structure
                  that can evolve alongside their operational requirements,
                  without forcing every customer into the same configuration.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Business Type & Scale",
                  "Subscription Plan",
                  "Service Status",
                  "Capabilities",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 p-5"
                  >
                    <span className="text-xs font-semibold text-blue-400">
                      0{index + 1}
                    </span>
                    <p className="mt-3 text-sm font-semibold text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative isolate overflow-hidden bg-[#101828] py-24 text-white sm:py-32">
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
          className="absolute -bottom-40 -right-40 -z-10 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[120px]"
        />

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="text-sm font-semibold tracking-[0.16em] text-blue-400 uppercase">
            Explore ZiroPOS
          </span>

          <h2 className="mt-6 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Building a more connected way to manage business operations.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Discover the direction behind ZiroPOS and how its platform
            architecture is being developed to support different business
            environments and operational needs.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/products/ziropos"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-7 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Explore ZiroPOS
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
