import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-foreground"
            >
              zirocraft<span className="text-accent">.</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
              Building practical technology for growing businesses.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Explore</h2>

            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <Link href="/products" className="hover:text-accent">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/products/ziropos" className="hover:text-accent">
                  ZiroPOS
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Legal</h2>

            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <Link href="/privacy-policy" className="hover:text-accent">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-accent">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-sm text-muted">
            © 2026 Zirocraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
