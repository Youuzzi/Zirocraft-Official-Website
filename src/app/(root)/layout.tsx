import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "ZiroCraft | Practical Technology",
  description: "ZiroCraft develops practical digital solutions for growing businesses."
};

export default function DefaultRootLayout({ children }: LayoutProps<"/">) {
  return <html lang="id"><body>{children}</body></html>;
}
