"use client";

import { motion } from "framer-motion";
import HeroShader from "./HeroShader";

const APP_STORE_URL = "https://apps.apple.com/app/id6743557889";

// ease-out-expo per Emil Kowalski — confident, decisive entrances
const EXPO = [0.16, 1, 0.3, 1] as const;

function NoteWindowMockup() {
  return (
    <motion.div
      // Emil: start from scale(0.97) — nothing in the real world appears from nothing
      initial={{ opacity: 0, scale: 0.97, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.8, ease: EXPO }}
      className="relative w-[340px] sm:w-[390px]"
      style={{
        filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.70)) drop-shadow(0 8px 24px rgba(0,0,0,0.45))",
      }}
    >
      {/* Window — backdrop-filter blurs the live shader behind it */}
      <div
        className="rounded-[32px] overflow-hidden"
        style={{
          background: "rgba(22, 22, 24, 0.78)",
          backdropFilter: "blur(32px) saturate(1.6)",
          WebkitBackdropFilter: "blur(32px) saturate(1.6)",
          border: "0.7px solid rgba(255,255,255,0.14)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.10), 0 0 0 0.5px rgba(255,255,255,0.06)",
        }}
      >
        {/* Toolbar */}
        <div
          className="h-[48px] px-4 flex items-center justify-between"
          style={{ borderBottom: "0.7px solid rgba(255,255,255,0.07)" }}
        >
          {/* Left: close + mic */}
          <div className="flex items-center gap-2">
            {/* Close — circle with × (matches app screenshot) */}
            <div className="w-[22px] h-[22px] rounded-full bg-[#3a3a3c] flex items-center justify-center">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M1.5 1.5l5 5M6.5 1.5l-5 5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </div>
            {/* Mic */}
            <div className="w-[22px] h-[22px] rounded-full bg-[#3a3a3c] flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <rect x="3.5" y="1" width="3" height="5" rx="1.5" fill="rgba(255,255,255,0.45)" />
                <path d="M2 5.5a3 3 0 006 0" stroke="rgba(255,255,255,0.45)" strokeWidth="1" strokeLinecap="round" fill="none" />
                <line x1="5" y1="8.5" x2="5" y2="9.5" stroke="rgba(255,255,255,0.45)" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Right: Obsidian export + add note */}
          <div className="flex items-center gap-2">
            {/* Obsidian export — the diamond gem icon */}
            <div className="w-[22px] h-[22px] rounded-full bg-[#3a3a3c] flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1L10 4.5L8 11H4L2 4.5L6 1Z" stroke="rgba(255,255,255,0.45)" strokeWidth="0.9" strokeLinejoin="round" />
                <path d="M2 4.5H10M6 1L4 4.5L6 11L8 4.5L6 1Z" stroke="rgba(255,255,255,0.25)" strokeWidth="0.7" strokeLinejoin="round" />
              </svg>
            </div>
            {/* New note */}
            <div className="w-[22px] h-[22px] rounded-full bg-[#3a3a3c] flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 2v6M2 5h6" stroke="rgba(255,255,255,0.45)" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Text area */}
        <div className="px-5 pt-5 pb-4 min-h-[120px]">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.9 }}
            className="text-[15px] leading-[1.65]"
            style={{
              fontFamily: "var(--font-jura), Jura, sans-serif",
              color: "rgba(255,255,255,0.72)",
            }}
          >
            landing page — capture flow before split testing. obsidian export path into hero. check dictation latency on M1.
          </motion.p>
        </div>

        {/* Footer label */}
        <div className="px-5 pb-5 flex items-center justify-between">
          <div
            className="px-2.5 py-1 rounded-full text-[10px] border"
            style={{
              fontFamily: "var(--font-jura), Jura, sans-serif",
              color: "rgba(255,255,255,0.28)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            project
          </div>
          <span className="text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.18)" }}>
            n0te
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-32 px-6 overflow-hidden">

      {/* Shader — full section background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // Slow ambient fade-in — this is an environment, not a UI action
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0 pointer-events-none"
      >
        <HeroShader className="w-full h-full" />
      </motion.div>

      {/* Gradient overlay — top darkens for text legibility, bottom reveals shader */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #0d1117 0%, #0d1117 28%, rgba(13,17,23,0.82) 50%, rgba(13,17,23,0.18) 80%, rgba(13,17,23,0.08) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto gap-7">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EXPO }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.10] bg-white/[0.04] text-white/40 text-[11px] font-medium tracking-wide"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#30d158]" />
          Free for Mac · Works with Obsidian
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.07, duration: 0.7, ease: EXPO }}
          className="text-[52px] sm:text-[68px] font-semibold leading-[1.06] tracking-[-0.02em] font-jura text-white"
        >
          Capture before
          <br />
          <span className="text-white/35">the thought disappears.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.65, ease: EXPO }}
          className="text-[17px] sm:text-[18px] text-white/48 leading-relaxed max-w-[500px]"
        >
          A floating note for macOS that sends clean Markdown into Obsidian
          without pulling you out of flow.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.55, ease: EXPO }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <motion.a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            // Emil: scale(0.97) on active — buttons must feel responsive to press
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="flex items-center gap-2.5 bg-white text-[#0d1117] font-semibold text-[14px] px-5 py-3 rounded-xl hover:bg-white/92 transition-colors duration-150"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on the Mac App Store
          </motion.a>
          <a
            href="#flow"
            className="text-[13px] text-white/30 hover:text-white/55 transition-colors duration-200 flex items-center gap-1.5"
          >
            See how it works
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 2v8M3 7l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>

        {/* Window — floats over the shader, backdrop-filter blurs it for real */}
        <div className="mt-8">
          <NoteWindowMockup />
        </div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="text-[11px] text-white/20 -mt-2"
        >
          macOS 13+ · Free · No account required
        </motion.p>
      </div>
    </section>
  );
}
