"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const APP_STORE_URL = "https://apps.apple.com/app/id6743557889";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d1117]/80 backdrop-blur-2xl border-b border-white/[0.08]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <Image src="/images/icon.png" alt="N0te" width={32} height={32} className="w-8 h-8" />
          <span className="text-[15px] font-semibold text-white/90 font-jura tracking-tight">
            N0te
          </span>
        </a>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="#features"
            className="text-[13px] text-white/50 hover:text-white/90 transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-[13px] text-white/50 hover:text-white/90 transition-colors duration-200"
          >
            Pricing
          </a>
          <motion.a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="text-[13px] font-medium bg-[#0a84ff] hover:bg-[#0a84ff]/90 text-white px-3.5 py-1.5 rounded-lg transition-colors duration-200"
          >
            Download
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
