"use client";

import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import { EASE_OUT_SOFT, PRESS_TRANSITION, REVEAL_VIEWPORT } from "@/lib/motion";

const EASE = EASE_OUT_SOFT;
const APP_STORE_URL = "https://apps.apple.com/app/id6743557889";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function FinalCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, color-mix(in srgb, var(--theme-ink) 4%, transparent) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={REVEAL_VIEWPORT}
        className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center gap-8"
      >
        <motion.h2
          variants={item}
          className="text-[36px] sm:text-[46px] font-semibold font-jura text-white tracking-tight leading-[1.08]"
        >
          Your thoughts deserve
          <br />
          <span className="text-white/35">a better home.</span>
        </motion.h2>

        <motion.p
          variants={item}
          className="text-[13px] text-white/45 max-w-sm"
        >
          Stay in flow now. Send it to your vault once the thought deserves structure.
        </motion.p>

        <motion.div variants={item} className="flex flex-col items-center gap-3">
          <Magnetic>
            <motion.a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.015 }}
              whileTap={{ scale: 0.96 }}
              transition={PRESS_TRANSITION}
              className="flex items-center gap-2.5 bg-[var(--theme-cta-bg)] text-[var(--theme-cta-fg)] font-semibold text-[13px] px-5 py-2.5 rounded-xl transition-colors duration-200 hover:bg-[var(--theme-cta-bg-hover)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on the Mac App Store
            </motion.a>
          </Magnetic>
          <span className="text-[12px] text-white/25">Free · macOS 13+</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
