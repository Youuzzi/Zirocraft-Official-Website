import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "ZiroCraft | Practical Technology",
  description: "ZiroCraft develops practical digital solutions for growing businesses.",
  icons: {
    icon: [
      { url: "/MyLogo/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/MyLogo/favicon-48.png", sizes: "48x48", type: "image/png" }
    ],
    apple: [{ url: "/MyLogo/apple-touch-icon-180.png", sizes: "180x180", type: "image/png" }]
  }
};

export default function DefaultRootLayout({ children }: LayoutProps<"/">) {
  return <html lang="id"><body>{children}</body></html>;
}
