export const GOOGLE_ADS_ID = "AW-17160423498";

// GA4 web stream "APEX LANDING PAGES" on the same pages. Rides the same
// gtag.js loader as the Ads tag; one loader, two configs. The first ID this
// carried (G-Z63ZHMYFBB) was hard-404ed by Google's tag CDN; this one is
// re-copied from GA Admin and verified serving.
export const GA4_ID = "G-K6C2MBLRVW";

export const CONVERSIONS = {
  formSubmit: "AW-17160423498/BBpSCIf9wtccEMqQ3fY_",
  clickToCall: "AW-17160423498/liIXCIr9wtccEMqQ3fY_",
} as const;

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

export function reportConversion(sendTo: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", {
    send_to: sendTo,
    value: 0.0,
    currency: "USD",
  });
}
