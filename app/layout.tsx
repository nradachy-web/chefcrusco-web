import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Nav } from "@/components/site/Nav";
import { StickyBookingBar } from "@/components/site/StickyBookingBar";
import { Footer } from "@/components/site/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Chef Crusco | Private Chef and Catering in Austin, TX",
    template: "%s | Chef Crusco",
  },
  description: site.description,
  keywords: [
    "private chef austin",
    "personal chef austin",
    "austin catering",
    "corporate catering austin",
    "private dinner austin",
    "tapas catering austin",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name}, ${site.tagline}`,
    description: site.description,
  },
  alternates: { canonical: site.url },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-linen text-espresso">
        <ScrollProgress />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyBookingBar />
      </body>
    </html>
  );
}
