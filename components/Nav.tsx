"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EASE_OUT_SOFT, PRESS_TRANSITION } from "@/lib/motion";

const APP_STORE_URL = "https://apps.apple.com/app/id6743557889";

export default function Nav() {
  return (
    <div className="fixed bottom-10 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ opacity: 0, y: 18, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: EASE_OUT_SOFT }}
        className="pointer-events-auto flex items-center gap-1 px-2 py-2 rounded-2xl"
        style={{
          background: "color-mix(in srgb, var(--theme-page) 72%, transparent)",
          backdropFilter: "blur(40px) saturate(1.8)",
          WebkitBackdropFilter: "blur(40px) saturate(1.8)",
          border: "0.7px solid var(--theme-card-border)",
          boxShadow: "0 4px 32px rgba(0,0,0,0.18), inset 0 1px 0 var(--theme-card-highlight)",
        }}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl hover:bg-white/[0.05] transition-colors duration-200">
          <Image
            src="/images/icon.png"
            alt="N0te"
            width={22}
            height={22}
            loading="eager"
            className="w-[22px] h-[22px]"
          />
          <span className="text-[13px] font-semibold text-white/80 font-jura tracking-tight">N0te</span>
        </a>

        {/* Divider */}
        <div className="w-px h-4 bg-white/[0.08] mx-1" />

        {/* Links */}
        <a
          href="#features"
          className="text-[12.5px] text-white/45 hover:text-white/80 transition-colors duration-200 px-3 py-1.5 rounded-xl hover:bg-white/[0.05]"
        >
          Features
        </a>
        <a
          href="#pricing"
          className="text-[12.5px] text-white/45 hover:text-white/80 transition-colors duration-200 px-3 py-1.5 rounded-xl hover:bg-white/[0.05]"
        >
          Pricing
        </a>

        {/* Divider */}
        <div className="w-px h-4 bg-white/[0.08] mx-1" />

        {/* CTA */}
        <motion.a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -1, scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          transition={PRESS_TRANSITION}
          className="text-[12.5px] font-medium text-white/80 hover:text-white px-3.5 py-1.5 rounded-xl transition-colors duration-200"
          style={{
            background: "color-mix(in srgb, var(--theme-ink) 8%, transparent)",
            border: "0.7px solid color-mix(in srgb, var(--theme-ink) 10%, transparent)",
          }}
        >
          Download
        </motion.a>
      </motion.nav>
    </div>
  );
}
