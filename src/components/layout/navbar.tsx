import Link from "next/link";

const navigation = [
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-lg">
      <div className="grid min-h-[72px] w-full grid-cols-[1fr_auto_1fr] items-center px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="w-fit shrink-0 text-2xl font-bold tracking-tight text-foreground"
          aria-label="Zirocraft homepage"
        >
          zirocraft<span className="text-accent">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center justify-center gap-8 md:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/products/ziropos"
          className="hidden shrink-0 justify-self-end rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover md:inline-flex"
        >
          Explore ZiroPOS
        </Link>

        {/* Mobile Navigation */}
        <details className="relative col-start-3 justify-self-end md:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground">
            Menu
          </summary>

          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-14 flex w-56 flex-col gap-1 rounded-xl border border-border bg-white p-3 shadow-lg"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-accent"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/products/ziropos"
              className="mt-1 rounded-lg bg-accent px-3 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Explore ZiroPOS
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
