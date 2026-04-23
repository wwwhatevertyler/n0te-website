"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const APP_STORE_URL = "https://apps.apple.com/app/id6743557889";

export default function Nav() {
  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto flex items-center gap-1 px-2 py-2 rounded-2xl"
        style={{
          background: "rgba(18, 20, 24, 0.72)",
          backdropFilter: "blur(24px) saturate(1.4)",
          WebkitBackdropFilter: "blur(24px) saturate(1.4)",
          border: "0.7px solid rgba(255,255,255,0.09)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl hover:bg-white/[0.05] transition-colors duration-200">
          <Image src="/images/icon.png" alt="N0te" width={22} height={22} className="w-[22px] h-[22px]" />
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
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="text-[12.5px] font-medium text-white/80 hover:text-white px-3.5 py-1.5 rounded-xl transition-colors duration-200"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "0.7px solid rgba(255,255,255,0.10)",
          }}
        >
          Download
        </motion.a>
      </motion.nav>
    </div>
  );
}
