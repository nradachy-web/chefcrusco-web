import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Nav } from "@/components/site/Nav";
import { StickyBookingBar } from "@/components/site/StickyBookingBar";
import { Footer } from "@/components/site/Footer";
import { GoogleTag } from "@/components/site/GoogleTag";

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
  // This deploy is a paid-ads traffic destination on a shared host
  // (chefcrusco.vercel.app); the public SEO site stays at chefcrusco.com. Keep the
  // whole site noindex so it can never compete with or duplicate the real domain in
  // search. Ads and GA4 bounce-rate tracking are unaffected by noindex. When/if this
  // moves to its own real domain, set index: true.
  robots: { index: false, follow: true },
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
        <GoogleTag />
        {/* Modern Apex attribution rails. First-party and vendored into
            public/ on purpose: the portal copy is never hotlinked, so the
            form keeps working if the portal is down. The token is a
            write-only lead-intake credential and is meant to be public. */}
        <Script
          src={asset("/apex-attribution.js")}
          data-token="bcc43b8cafa11cbbf5ddd63f9a638021"
          strategy="afterInteractive"
        />
        {/* CallRail dynamic number insertion (company "Chef Crusco Catering",
            Modern Apex agency account). Inert until a tracker with a number
            exists in CallRail; once one does, visitors from tracked sources
            see the displayed 512.970.2200 (text and tel: links) swapped to
            the tracking number. No redeploy needed at activation time. */}
        <Script
          src="https://cdn.callrail.com/companies/237295044/fd10d2129f049dbdb102/12/swap.js"
          strategy="afterInteractive"
        />
        <ScrollProgress />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyBookingBar />
      </body>
    </html>
  );
}
