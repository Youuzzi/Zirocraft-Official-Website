import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Zirocraft, a technology company building practical digital solutions for growing businesses.",
};

const principles = [
  {
    number: "01",
    title: "Practical",
    description:
      "We focus on building technology that addresses real needs and solves practical problems.",
  },
  {
    number: "02",
    title: "Adaptable",
    description:
      "We believe technology should be flexible enough to evolve alongside changing business needs.",
  },
  {
    number: "03",
    title: "Maintainable",
    description:
      "We value thoughtful engineering and sustainable development for long-term growth.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* About Hero */}

      {/* About Hero */}
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

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:px-8 lg:py-32">
          {/* Left Content */}
          <div>
            <span className="text-sm font-semibold tracking-[0.16em] text-blue-300 uppercase">
              About Zirocraft
            </span>

            <h1 className="mt-6 max-w-2xl text-4xl leading-tight font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Building technology with{" "}
              <span className="text-blue-400">purpose.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              We are a technology company focused on creating practical digital
              solutions that address real business needs and support long-term
              growth.
            </p>
          </div>

          {/* Right Visual */}
          <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-blue-600/20 blur-[90px]" />

            <div className="relative w-full rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <span className="text-sm font-semibold tracking-wide text-white">
                  ZIROCRAFT
                </span>

                <span className="h-2 w-2 rounded-full bg-blue-400" />
              </div>

              <div className="flex min-h-64 flex-col items-center justify-center">
                <div className="flex h-32 w-32 items-center justify-center rounded-[2rem] border border-white/15 bg-gradient-to-br from-blue-400/20 to-blue-700/20 shadow-xl">
                  <span className="text-7xl font-bold tracking-tighter text-white">
                    z<span className="text-blue-400">.</span>
                  </span>
                </div>

                <p className="mt-7 text-sm font-medium text-slate-300">
                  Building practical technology.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-5">
                <div className="text-center">
                  <span className="text-xs font-semibold text-blue-300">
                    Practical
                  </span>
                </div>

                <div className="text-center">
                  <span className="text-xs font-semibold text-blue-300">
                    Adaptable
                  </span>
                </div>

                <div className="text-center">
                  <span className="text-xs font-semibold text-blue-300">
                    Maintainable
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div>
            <span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              Who We Are
            </span>

            <h2 className="mt-5 max-w-xl text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl">
              Technology should serve people and businesses.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-muted">
            <p>
              Zirocraft is a technology company dedicated to building digital
              solutions with a focus on practical applications and real-world
              requirements.
            </p>

            <p>
              We believe technology should not become an unnecessary
              complication. It should help people work more effectively, support
              better operations, and create room for businesses to grow.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="bg-surface py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              Our Vision
            </span>

            <h2 className="mt-5 text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl">
              Making technology more useful, accessible, and adaptable.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              We aim to develop solutions that can grow alongside the people and
              businesses that use them, without losing sight of the problems
              they are meant to solve.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              Our Approach
            </span>

            <h2 className="mt-5 text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl">
              Three principles behind what we build.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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

      {/* Our Product */}
      <section className="bg-surface py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              What We Build
            </span>

            <h2 className="mt-5 text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl">
              Introducing ZiroPOS.
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted">
              ZiroPOS is our business management and point of sale platform,
              designed around the operational needs of different business
              environments.
            </p>

            <p className="mt-5 leading-8 text-muted">
              Our direction is to create a flexible platform that can support
              businesses as their operational requirements evolve.
            </p>

            <Link
              href="/products/ziropos"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Explore ZiroPOS
            </Link>
          </div>

          <div
            aria-hidden="true"
            className="relative flex min-h-80 items-center justify-center overflow-hidden rounded-3xl bg-[#101828] p-8"
          >
            <div className="absolute h-64 w-64 rounded-full bg-blue-600/30 blur-3xl" />

            <div className="relative flex h-52 w-52 items-center justify-center rounded-[2.5rem] border border-white/15 bg-white/10 shadow-2xl backdrop-blur-xl">
              <span className="text-6xl font-bold tracking-tighter text-white">
                z<span className="text-blue-400">.</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-white px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#101828] px-8 py-16 text-center text-white sm:px-16 sm:py-20">
          <span className="text-sm font-semibold tracking-[0.16em] text-blue-300 uppercase">
            Let&apos;s Connect
          </span>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl leading-tight font-semibold tracking-tight sm:text-5xl">
            Let&apos;s build something meaningful.
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-300">
            Have a question or want to learn more about Zirocraft? We would love
            to hear from you.
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
