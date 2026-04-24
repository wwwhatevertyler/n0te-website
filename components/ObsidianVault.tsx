"use client";

import { motion } from "framer-motion";
import { EASE_OUT_SOFT, REVEAL_VIEWPORT } from "@/lib/motion";

const EASE = EASE_OUT_SOFT;

const textContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const textItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: EASE } },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: EASE } },
};

const fileListContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

const fileItem = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } },
};

export default function ObsidianVault() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-28" />

        {/* Section 1: Obsidian Markdown export */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          {/* Left: Markdown file visual */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="show"
            viewport={REVEAL_VIEWPORT}
            className="order-2 lg:order-1"
          >
            <div
              className="rounded-2xl p-6"
              style={{
                background: "var(--theme-card)",
                border: "1px solid var(--theme-card-border)",
                boxShadow: "inset 0 1px 0 var(--theme-card-highlight)",
              }}
            >
              <div
                className="flex items-center gap-3 border-b border-white/[0.04] pb-4"
              >
                <svg
                  width="13"
                  height="15"
                  viewBox="0 0 13 15"
                  fill="none"
                  className="shrink-0"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="12"
                    height="14"
                    rx="2"
                    stroke="rgba(255,255,255,0.18)"
                  />
                  <path
                    d="M2.5 4.5h8M2.5 7h6M2.5 9.5h4"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="flex-1 truncate text-[12px] text-white/42 font-mono">
                  landing-page-notes.md
                </span>
                <span className="text-[10px] text-white/18 shrink-0">
                  exported
                </span>
              </div>
              <div className="pt-5 font-mono text-[13px] leading-relaxed">
                <p className="text-white/50"># landing page notes</p>
                <div className="h-4" />
                <p className="text-white/48">
                  Send Obsidian export path into hero.
                </p>
                <p className="text-white/48">
                  Add dictation demo to features section.
                </p>
                <p className="text-white/48">
                  Check latency on older hardware before shipping.
                </p>
                <div className="h-4" />
                <p className="text-white/18">---</p>
                <p className="text-white/20 text-[11px] mt-2">
                  captured via n0te · 2026-04-22
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            variants={textContainer}
            initial="hidden"
            whileInView="show"
            viewport={REVEAL_VIEWPORT}
            className="order-1 lg:order-2"
          >
            <motion.p
              variants={textItem}
              className="text-[11px] font-medium text-white/25 uppercase tracking-widest mb-5"
            >
              Obsidian export
            </motion.p>
            <motion.h2
              variants={textItem}
              className="text-[34px] sm:text-[42px] font-semibold font-jura text-white leading-[1.08] tracking-tight"
            >
              Send clean Markdown
              <br />
              <span className="text-white/30">to your vault.</span>
            </motion.h2>
            <motion.p
              variants={textItem}
              className="mt-6 text-[15px] text-white/45 leading-relaxed"
            >
              One tap writes your note to your Obsidian vault as a plain{" "}
              <code className="text-white/60 bg-white/[0.06] px-1.5 py-0.5 rounded text-[13px] font-mono">
                .md
              </code>{" "}
              file. No reformatting. No sync service. No cloud in the middle.
            </motion.p>
            <motion.p
              variants={textItem}
              className="mt-4 text-[15px] text-white/45 leading-relaxed"
            >
              The thought lands exactly where you&apos;d put it — ready to
              become part of the system you already trust.
            </motion.p>
          </motion.div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent mb-28" />

        {/* Section 2: Local-first */}
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
              Local-first
            </motion.p>
            <motion.h2
              variants={textItem}
              className="text-[34px] sm:text-[42px] font-semibold font-jura text-white leading-[1.08] tracking-tight"
            >
              Your files
              <br />
              <span className="text-white/30">stay yours.</span>
            </motion.h2>
            <motion.p
              variants={textItem}
              className="mt-6 text-[15px] text-white/45 leading-relaxed"
            >
              No account. No subscription. No server between you and your
              notes. N0te stores everything locally on your Mac as plain
              text — the kind you can open in any editor, forever.
            </motion.p>
            <motion.div
              variants={textItem}
              className="mt-8 flex flex-col gap-3"
            >
              {[
                "Plain text. No proprietary format.",
                "Local storage. No cloud required.",
                "No account. No lock-in.",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-white/25 shrink-0" />
                  <span className="text-[13px] text-white/50">{point}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Finder-style file list */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="show"
            viewport={REVEAL_VIEWPORT}
          >
            <div
              className="rounded-2xl p-6"
              style={{
                background: "var(--theme-card)",
                border: "1px solid var(--theme-card-border)",
              }}
            >
              <p className="text-[10px] text-white/20 font-mono mb-4">
                ~/Documents/N0te/
              </p>
              <motion.div
                variants={fileListContainer}
                initial="hidden"
                whileInView="show"
                viewport={REVEAL_VIEWPORT}
                className="space-y-1"
              >
                {[
                  { name: "landing-page-notes.md", time: "just now" },
                  { name: "obsidian-export-ideas.md", time: "2h ago" },
                  { name: "bug-report-capture.md", time: "yesterday" },
                  { name: "product-brief-draft.md", time: "3 days ago" },
                  { name: "design-system-notes.md", time: "last week" },
                ].map((file) => (
                  <motion.div
                    key={file.name}
                    variants={fileItem}
                    className="flex items-center gap-3 py-2.5 border-b border-white/[0.04] last:border-0"
                  >
                    <svg
                      width="13"
                      height="15"
                      viewBox="0 0 13 15"
                      fill="none"
                      className="shrink-0"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="12"
                        height="14"
                        rx="2"
                        stroke="rgba(255,255,255,0.18)"
                      />
                      <path
                        d="M2.5 4.5h8M2.5 7h6M2.5 9.5h4"
                        stroke="rgba(255,255,255,0.12)"
                        strokeWidth="0.8"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="flex-1 text-[12px] text-white/50 font-mono truncate">
                      {file.name}
                    </span>
                    <span className="text-[10px] text-white/18 shrink-0">
                      {file.time}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
