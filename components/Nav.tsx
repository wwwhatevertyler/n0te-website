"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Magnetic from "@/components/Magnetic";
import { DOWNLOAD_URL } from "@/lib/download";
import { EASE_OUT_SOFT, PRESS_TRANSITION } from "@/lib/motion";

export default function Nav() {
  const [isFooterActive, setIsFooterActive] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateFooterState = () => {
      frame = 0;
      const footer = document.querySelector<HTMLElement>("[data-footer-dock]");
      if (!footer) {
        setIsFooterActive(false);
        return;
      }

      const rect = footer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const isActive = rect.top <= viewportHeight * 0.44;

      setIsFooterActive((current) => (current !== isActive ? isActive : current));
    };

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateFooterState);
    };

    updateFooterState();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none sm:bottom-8">
      <motion.nav
        initial={{ opacity: 0, y: 18, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: EASE_OUT_SOFT }}
        className="pointer-events-auto flex items-center gap-1 overflow-hidden px-2 py-2 rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in srgb, var(--theme-ink) 10%, transparent), color-mix(in srgb, var(--theme-page) 28%, transparent) 45%, color-mix(in srgb, var(--theme-ink) 5%, transparent)), color-mix(in srgb, var(--theme-page) 38%, transparent)",
          backdropFilter: "blur(44px) saturate(1.9) brightness(1.08)",
          WebkitBackdropFilter: "blur(44px) saturate(1.9) brightness(1.08)",
          border: "0.7px solid var(--nav-shell-border)",
          boxShadow:
            "0 18px 52px rgba(0,0,0,0.18), inset 0 1px 0 var(--nav-shell-highlight-top), inset 0 -1px 0 var(--nav-shell-highlight-bottom)",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          className="nav-glass-logo flex items-center gap-2 px-2.5 py-1.5 rounded-xl transition-colors duration-200"
        >
          <Image
            src="/images/icon.png"
            alt="N0te"
            width={24}
            height={24}
            loading="eager"
            className="h-6 w-6"
          />
          <span className="text-[13px] font-semibold font-jura tracking-tight">N0te</span>
        </a>

        {/* Divider */}
        <div
          className="w-px h-4 mx-1"
          style={{
            background: "color-mix(in srgb, var(--theme-ink) 11%, transparent)",
          }}
        />

        {/* Links */}
        <a
          href="#features"
          className="nav-glass-link text-[12.5px] transition-colors duration-200 px-3 py-1.5 rounded-xl"
        >
          Features
        </a>
        <a
          href="#pricing"
          className="nav-glass-link text-[12.5px] transition-colors duration-200 px-3 py-1.5 rounded-xl"
        >
          Pricing
        </a>

        {/* Divider */}
        <div
          className="w-px h-4 mx-1"
          style={{
            background: "color-mix(in srgb, var(--theme-ink) 11%, transparent)",
          }}
        />

        {/* CTA */}
        <Magnetic>
          <motion.a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-footer-active={isFooterActive ? "true" : "false"}
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            transition={PRESS_TRANSITION}
            className="nav-glass-cta inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-[12.5px] font-medium transition-[background-color,color,box-shadow,border-color] duration-200"
            style={{
              background: isFooterActive
                ? "var(--theme-cta-bg)"
                : "color-mix(in srgb, var(--theme-ink) 9%, transparent)",
              border: isFooterActive
                ? "0.7px solid color-mix(in srgb, var(--theme-cta-bg) 72%, transparent)"
                : "0.7px solid color-mix(in srgb, var(--theme-ink) 12%, transparent)",
              color: isFooterActive
                ? "var(--theme-cta-fg)"
                : "color-mix(in srgb, var(--theme-ink) 82%, transparent)",
              boxShadow: isFooterActive
                ? "inset 0 1px 0 color-mix(in srgb, white 26%, transparent)"
                : "inset 0 1px 0 color-mix(in srgb, var(--theme-ink) 6%, transparent)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download
          </motion.a>
        </Magnetic>
      </motion.nav>
    </div>
  );
}
