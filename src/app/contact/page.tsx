import Link from "next/link";

const contactEmail = "zirocraftid@gmail.com";

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              Contact Zirocraft
            </span>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
              Let&apos;s build something
              <span className="block text-accent">meaningful together.</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted">
              Have a question about Zirocraft or ZiroPOS? We would be glad to
              hear from you. Reach out to discuss your needs, explore
              opportunities, or learn more about our platform.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              Get in Touch
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Start a conversation with us.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted">
              Whether you are exploring ZiroPOS for your business, have a
              question about our company, or are interested in working together,
              our inbox is open.
            </p>

            <div className="mt-10">
              <p className="text-sm font-semibold text-foreground">Email</p>

              <a
                href={`mailto:${contactEmail}`}
                className="mt-3 inline-block text-lg font-medium text-accent transition-colors hover:text-foreground"
              >
                {contactEmail}
              </a>

              <p className="mt-3 text-sm leading-6 text-muted">
                Send us an email and tell us how we can help.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-surface p-8 sm:p-10">
            <span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              What can we help with?
            </span>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  ZiroPOS & Business Inquiries
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Questions about ZiroPOS, its intended business use cases, or
                  potential adoption for your operations.
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="text-lg font-semibold text-foreground">
                  Partnerships & Collaboration
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Interested in exploring a collaboration or discussing
                  potential business opportunities with Zirocraft?
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="text-lg font-semibold text-foreground">
                  General Questions
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  For general questions, feedback, or other inquiries about
                  Zirocraft.
                </p>
              </div>
            </div>

            <a
              href={`mailto:${contactEmail}`}
              className="mt-10 inline-flex w-full items-center justify-center rounded-xl bg-foreground px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-accent"
            >
              Email Zirocraft
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Product Link */}
      <section className="border-t border-border bg-surface py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Looking for a business management solution?
          </h2>

          <p className="mt-5 text-base leading-7 text-muted">
            Discover ZiroPOS, our professional point of sale and business
            management platform designed for growing businesses.
          </p>

          <Link
            href="/products/ziropos"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-foreground px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent"
          >
            Explore ZiroPOS
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
