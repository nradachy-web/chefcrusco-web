"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { site } from "@/lib/site";
import { CONVERSIONS, reportConversion } from "@/lib/gtag";

const steps = [
  "Tell us about your event. You get a free personalized estimate within 24 hours.",
  "An event expert emails your estimate and calls to talk it through.",
  "A 25 percent deposit reserves your date and is credited to your final balance.",
  "Sit back while our team handles every detail.",
];

const callFallback = `Please call us at ${site.phone}.`;

const budgetTiers = ["$50 to 80", "$80 to 140", "$140 to 200", "$200+"];

// Modern Apex attribution rails (public/apex-attribution.js, loaded in the
// root layout). attach() is additive and fire-and-forget: Web3Forms stays the
// delivery lane, and this call never blocks or throws.
declare global {
  interface Window {
    apexAttribution?: {
      attach: (fields: {
        name?: string;
        email?: string;
        phone?: string;
        message?: string;
        isTest?: boolean;
      }) => void;
    };
  }
}

/**
 * Mirror a successful submission into the Modern Apex lead ledger so the
 * inquiry arrives with a name attached instead of as an anonymous daily total
 * from Google. ?apx_test=1 marks the row as a rollout test so a verification
 * submit never counts as a real lead. All failures swallowed by contract:
 * attribution must never surface on the guest's submit experience.
 */
function attachToApexLedger(fields: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  try {
    const isTest = new URLSearchParams(window.location.search).get("apx_test") === "1";
    window.apexAttribution?.attach(isTest ? { ...fields, isTest: true } : fields);
  } catch {
    /* swallowed by contract */
  }
}

export function InquiryPlate() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [budget, setBudget] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    if (!name || !phone || !email) {
      setStatus("error");
      setError(`Please add your name, phone, and email so we can send your estimate. ${callFallback}`);
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      setError(`Our online form is not connected yet. ${callFallback}`);
      return;
    }

    const detail = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Event type: ${data.get("eventType") || "Not specified"}`,
      `Date: ${data.get("date") || "Flexible"}`,
      `Guests: ${data.get("guests") || "Not specified"}`,
      `Budget per guest: ${budget || "Not specified"}`,
      `Where in Austin: ${data.get("location") || "Not specified"}`,
      "",
      `Details: ${data.get("details") || "(none)"}`,
    ].join("\n");

    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New event inquiry: ${name}`,
          from_name: "Chef Crusco Website",
          name,
          phone,
          email,
          botcheck: Boolean(data.get("botcheck")),
          message: detail,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        reportConversion(CONVERSIONS.formSubmit);
        attachToApexLedger({ name, email, phone, message: detail });
        setStatus("success");
        form.reset();
        setBudget("");
        return;
      }
      setStatus("error");
      setError(`Something went wrong sending your request. ${callFallback}`);
    } catch {
      setStatus("error");
      setError(`We could not send your request. ${callFallback}`);
    }
  }

  return (
    <section id="inquiry" className="bg-bone">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[0.9fr_1.1fr]">
        {/* promise */}
        <div>
          <p className="eyebrow text-oxblood">The inquiry plate</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.05] text-espresso">
            A real estimate
            <br />
            in 24 hours.
          </h2>
          <ol className="mt-9 space-y-5">
            {steps.map((s, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-display text-2xl font-medium text-saffron tnum">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="pt-1 text-cocoa">{s}</span>
              </li>
            ))}
          </ol>

          <div className="mt-10 border-t border-gold/40 pt-7">
            <p className="eyebrow text-rosemary">You risk nothing</p>
            <ul className="mt-4 space-y-3 text-[0.95rem] text-cocoa">
              {[
                "A free, personalized estimate within 24 hours.",
                "The 25 percent deposit is credited in full to your event.",
                "We leave your kitchen spotless. Every dish washed, every counter wiped.",
              ].map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="mt-0.5 shrink-0 text-rosemary">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* form */}
        <div className="border border-gold/50 bg-linen p-7 sm:p-10">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex h-full min-h-72 flex-col items-center justify-center text-center"
            >
              <span className="grid size-14 place-items-center rounded-full bg-rosemary text-linen">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="mt-5 font-display text-2xl font-medium text-espresso">
                Your request is in.
              </h3>
              <p className="mt-2 max-w-sm text-cocoa">
                We will send your personalized estimate within 24 hours. If it is
                urgent, call us at{" "}
                <a href={site.phoneHref} className="font-semibold text-saffron">
                  {site.phone}
                </a>
                .
              </p>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5">
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                aria-hidden="true"
                autoComplete="off"
                className="hidden"
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your name" name="name" required autoComplete="name" />
                <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
              </div>
              <Field label="Email" name="email" type="email" required autoComplete="email" />
              <div className="grid gap-5 sm:grid-cols-2">
                <SelectField label="What kind of event" name="eventType" options={["Private dinner", "Drop Off Service", "Tapas Service", "Prix-Fixe Service", "Customer Specific", "Corporate Catering", "Cooking Class", "Dinner for Eight", "555 Meal Program", "Not sure yet"]} />
                <Field label="Your date" name="date" type="date" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="How many guests (4 minimum)" name="guests" type="number" inputMode="numeric" min={4} required />
                <Field label="Where in Austin" name="location" />
              </div>
              <BudgetPicker value={budget} onChange={setBudget} />
              <div className="flex flex-col gap-1.5">
                <label htmlFor="details" className="text-sm font-medium text-cocoa">
                  Anything else (optional)
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={3}
                  className="rounded-sm border border-gold/60 bg-linen px-3.5 py-2.5 text-espresso transition-colors focus:border-saffron focus:outline-none"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-oxblood">{error}</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-saffron mt-1 w-full disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Request your estimate"}
              </button>
              <p className="flex items-center justify-center gap-2 text-sm text-rosemary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Free and personalized within 24 hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  inputMode,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "numeric";
  min?: number;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-cocoa">
        {label}
        {required && <span className="text-saffron"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        min={min}
        className="rounded-sm border border-gold/60 bg-linen px-3.5 py-2.5 text-espresso transition-colors focus:border-saffron focus:outline-none"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-cocoa">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="rounded-sm border border-gold/60 bg-linen px-3.5 py-2.5 text-espresso transition-colors focus:border-saffron focus:outline-none"
      >
        <option value="" disabled>
          Choose one
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function BudgetPicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-cocoa">
        Estimated budget per guest{" "}
        <span className="font-normal text-cocoa/60">(optional)</span>
      </span>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {budgetTiers.map((tier, i) => {
          const active = value === tier;
          return (
            <motion.button
              key={tier}
              type="button"
              onClick={() => onChange(active ? "" : tier)}
              aria-pressed={active}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileTap={{ scale: 0.96 }}
              className={`relative flex items-center justify-center rounded-sm border px-3 py-3 text-sm tnum transition-colors ${
                active ? "border-saffron" : "border-gold/60 hover:border-saffron"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="budgetGlow"
                  className="absolute inset-0 rounded-sm bg-saffron"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span
                className={`relative z-10 font-medium ${
                  active ? "text-linen" : "text-espresso"
                }`}
              >
                {tier}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
