"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/lib/site";
import { BOOK_HREF } from "./Nav";

/** Slim glass bar that fades in once the hero leaves the viewport. */
export function StickyBookingBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.92);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-gold/40 bg-bone/90 backdrop-blur-md"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-3 sm:px-8">
            <p className="hidden font-display text-base text-espresso sm:block">
              Ready to set your table?
            </p>
            <div className="flex w-full items-center justify-between gap-3 sm:w-auto">
              <a
                href={site.phoneHref}
                className="btn-ghost text-sm text-espresso"
              >
                {site.phone}
              </a>
              <a href={BOOK_HREF} className="btn-saffron text-sm">
                Plan your event
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
