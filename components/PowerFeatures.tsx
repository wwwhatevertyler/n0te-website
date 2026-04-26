"use client";

import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import { EASE_OUT_SOFT, PRESS_TRANSITION, REVEAL_VIEWPORT } from "@/lib/motion";

const EASE = EASE_OUT_SOFT;
const APP_STORE_URL = "https://apps.apple.com/app/id6743557889";

const textContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const textItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const checklistContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.2 } },
};

const checklistItem = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } },
};

const included = [
  "Floating note windows for macOS",
  "Clean Markdown export to Obsidian",
  "Apple Speech dictation capture",
  "Separate image attachments",
  "Multiple independent notes",
  "Per-note light and dark mode",
  "Local-first storage — no cloud",
  "No account required",
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-6 pb-0">
      <div className="max-w-5xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-28" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            variants={textContainer}
            initial="hidden"
            whileInView="show"
            viewport={REVEAL_VIEWPORT}
          >
            <motion.p
              variants={textItem}
              className="text-[11px] font-medium text-white/25 uppercase tracking-widest mb-5"
            >
              Pricing
            </motion.p>
            <motion.h2
              variants={textItem}
              className="text-[34px] sm:text-[42px] font-semibold font-jura text-white leading-[1.08] tracking-tight"
            >
              Free to download.
              <br />
              <span className="text-white/30">For now.</span>
            </motion.h2>
            <motion.p
              variants={textItem}
              className="mt-6 text-[15px] text-white/45 leading-relaxed"
            >
              N0te is in active development with a strong core capture
              experience. It&apos;s free to download today on the Mac App
              Store.
            </motion.p>
            <motion.p
              variants={textItem}
              className="mt-4 text-[15px] text-white/35 leading-relaxed"
            >
              A paid version is planned as the product matures. The people
              using it now are shaping what it becomes.
            </motion.p>
          </motion.div>

          {/* Right: Pricing card */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={REVEAL_VIEWPORT}
            transition={{ duration: 0.65, ease: EASE }}
          >
            <div
              className="rounded-3xl p-8"
              style={{
                background: "var(--theme-card)",
                border: "1px solid var(--theme-card-border)",
                boxShadow: "inset 0 1px 0 var(--theme-card-highlight)",
              }}
            >
              <div className="flex items-end gap-2 mb-1">
                <span className="text-[44px] font-semibold font-jura text-white leading-none tracking-tight">
                  Free
                </span>
              </div>
              <p className="text-[13px] text-white/28 mb-8">
                Mac App Store · macOS 13+
              </p>

              <motion.div
                variants={checklistContainer}
                initial="hidden"
                whileInView="show"
                viewport={REVEAL_VIEWPORT}
                className="space-y-3 mb-8"
              >
                {included.map((item) => (
                  <motion.div
                    key={item}
                    variants={checklistItem}
                    className="flex items-center gap-3"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6.5" stroke="rgba(255,255,255,0.15)" />
                      <path
                        d="M4.5 7l2 2 3-3"
                        stroke="rgba(255,255,255,0.45)"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-[13px] text-white/50">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <Magnetic className="w-full">
                <motion.a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.015 }}
                  whileTap={{ scale: 0.97 }}
                  transition={PRESS_TRANSITION}
                  className="flex w-full items-center justify-center gap-2.5 bg-[var(--theme-cta-bg)] text-[var(--theme-cta-fg)] font-semibold text-[13px] py-2.5 rounded-xl transition-colors duration-200 hover:bg-[var(--theme-cta-bg-hover)]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Download on the Mac App Store
                </motion.a>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
