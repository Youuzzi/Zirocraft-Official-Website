import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zirocraft.com"),
  title: {
    default: "Zirocraft | Building Practical Technology",
    template: "%s | Zirocraft",
  },
  description:
    "Zirocraft builds practical technology solutions for growing businesses, with ZiroPOS as its business management and point of sale platform.",
  applicationName: "Zirocraft",
  openGraph: {
    type: "website",
    siteName: "Zirocraft",
    title: "Zirocraft | Building Practical Technology",
    description: "Building practical technology for growing businesses.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
