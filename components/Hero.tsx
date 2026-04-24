"use client";

import { motion } from "framer-motion";
import HeroNoteReplica from "./HeroNoteReplica";
import Magnetic from "@/components/Magnetic";
import { EASE_OUT_SOFT, PRESS_TRANSITION } from "@/lib/motion";

const APP_STORE_URL = "https://apps.apple.com/app/id6743557889";

const heroSequence = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_SOFT },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pb-10 pt-10">
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "var(--theme-hero-overlay)",
        }}
      />

      {/* Content */}
      <motion.div
        variants={heroSequence}
        initial="hidden"
        animate="show"
        className="relative z-10 flex max-w-3xl flex-col items-center gap-5 text-center"
      >
        {/* Badge */}
        <motion.div
          variants={heroItem}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.10] bg-white/[0.04] text-white/40 text-[11px] font-medium tracking-wide"
        >
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{
              background: "var(--n0te-accent)",
              boxShadow: "0 0 14px color-mix(in srgb, var(--n0te-accent) 42%, transparent)",
            }}
          />
          Free for Mac · Markdown to Obsidian
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={heroItem}
          className="text-[42px] sm:text-[56px] font-semibold leading-[1.06] tracking-[-0.02em] font-jura text-white"
        >
          Capture a thought
          <br />
          <span className="text-white/35">before it disappears.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          variants={heroItem}
          className="text-[15px] sm:text-[16px] text-white/48 leading-relaxed max-w-[480px]"
        >
          A floating note for macOS that sends clean Markdown into Obsidian
          without pulling you out of flow.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={heroItem}
        >
          <Magnetic>
            <motion.a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.015 }}
              whileTap={{ scale: 0.97 }}
              transition={PRESS_TRANSITION}
              className="flex items-center gap-2.5 bg-[var(--theme-cta-bg)] text-[var(--theme-cta-fg)] font-semibold text-[13px] px-5 py-2.5 rounded-xl transition-colors duration-200 hover:bg-[var(--theme-cta-bg-hover)]"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on the Mac App Store
            </motion.a>
          </Magnetic>
        </motion.div>

        {/* Note Preview */}
        <motion.div variants={heroItem} className="mt-6">
          <HeroNoteReplica />
        </motion.div>

        {/* Caption */}
        <motion.p
          variants={heroItem}
          className="text-[11px] text-white/20 -mt-2"
        >
          macOS 13+ · Calm enough to keep open
        </motion.p>
      </motion.div>
    </section>
  );
}
