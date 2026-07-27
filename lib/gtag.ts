export const GOOGLE_ADS_ID = "AW-17160423498";

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
