"use client";

import { useEffect } from "react";
import Script from "next/script";
import { CONVERSIONS, GA4_ID, GOOGLE_ADS_ID, reportConversion } from "@/lib/gtag";

export function GoogleTag() {
  useEffect(() => {
    // Delegated listener so every tel: link on the site reports a call conversion.
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const anchor = target?.closest?.('a[href^="tel:"]');
      if (anchor) reportConversion(CONVERSIONS.clickToCall);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}');
gtag('config', '${GA4_ID}');`}
      </Script>
    </>
  );
}
