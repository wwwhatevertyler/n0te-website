"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.23, 1, 0.32, 1] as const;

export default function ObsidianVault() {
  const exportRef = useRef(null);
  const exportInView = useInView(exportRef, { once: true, margin: "-80px" });

  const localRef = useRef(null);
  const localInView = useInView(localRef, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-28" />

        {/* Section 1: Obsidian Markdown export */}
        <div
          ref={exportRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28"
        >
          {/* Left: Markdown file visual */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={exportInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.65, ease }}
            className="order-2 lg:order-1"
          >
            {/* Replace with <Image src="/images/obsidian-export.png" ... /> when ready */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "rgba(8, 12, 18, 0.85)",
                border: "0.7px solid rgba(255,255,255,0.10)",
                boxShadow: "0 32px 64px rgba(0,0,0,0.45)",
              }}
            >
              {/* File bar */}
              <div
                className="h-10 px-4 flex items-center gap-2"
                style={{ borderBottom: "0.7px solid rgba(255,255,255,0.06)" }}
              >
                <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f56]" />
                <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
                <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
                <span className="ml-3 text-[11px] text-white/25 font-mono">
                  landing-page-notes.md
                </span>
              </div>
              {/* Markdown content */}
              <div className="p-6 font-mono text-[13px] leading-relaxed">
                <p className="text-[#0a84ff]/80"># landing page notes</p>
                <div className="h-3" />
                <p className="text-white/55">
                  Send Obsidian export path into hero.
                </p>
                <p className="text-white/55">
                  Add dictation demo to features section.
                </p>
                <p className="text-white/55">
                  Check latency on older hardware before shipping.
                </p>
                <div className="h-3" />
                <p className="text-white/20">---</p>
                <p className="text-white/22 text-[11px] mt-2">
                  captured via n0te · 2026-04-22
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Copy */}
          <div className="order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={exportInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease }}
              className="text-[11px] font-medium text-white/25 uppercase tracking-widest mb-5"
            >
              Obsidian export
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={exportInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.06, duration: 0.65, ease }}
              className="text-[40px] sm:text-[48px] font-semibold font-jura text-white leading-[1.08] tracking-tight"
            >
              Send clean Markdown
              <br />
              <span className="text-white/30">to your vault.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={exportInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.14, duration: 0.55, ease }}
              className="mt-6 text-[16px] text-white/45 leading-relaxed"
            >
              One tap writes your note to your Obsidian vault as a plain{" "}
              <code className="text-white/60 bg-white/[0.06] px-1.5 py-0.5 rounded text-[13px] font-mono">
                .md
              </code>{" "}
              file. No reformatting. No sync service. No cloud in the middle.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={exportInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.55, ease }}
              className="mt-4 text-[16px] text-white/45 leading-relaxed"
            >
              The thought lands exactly where you&apos;d put it — ready to
              become part of the system you already trust.
            </motion.p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent mb-28" />

        {/* Section 2: Local-first */}
        <div
          ref={localRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={localInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease }}
              className="text-[11px] font-medium text-white/25 uppercase tracking-widest mb-5"
            >
              Local-first
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={localInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.06, duration: 0.65, ease }}
              className="text-[40px] sm:text-[48px] font-semibold font-jura text-white leading-[1.08] tracking-tight"
            >
              Your files
              <br />
              <span className="text-white/30">stay yours.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={localInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.14, duration: 0.55, ease }}
              className="mt-6 text-[16px] text-white/45 leading-relaxed"
            >
              No account. No subscription. No server between you and your
              notes. N0te stores everything locally on your Mac as plain
              text — the kind you can open in any editor, forever.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={localInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.22, duration: 0.55, ease }}
              className="mt-8 flex flex-col gap-3"
            >
              {[
                "Plain text. No proprietary format.",
                "Local storage. No cloud required.",
                "No account. No lock-in.",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-white/25 shrink-0" />
                  <span className="text-[14px] text-white/50">{point}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Finder-style file list */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={localInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.65, ease }}
          >
            {/* Replace with <Image src="/images/local-files.png" ... /> when ready */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <p className="text-[10px] text-white/20 font-mono mb-4">
                ~/Documents/N0te/
              </p>
              <div className="space-y-1">
                {[
                  { name: "landing-page-notes.md", time: "just now" },
                  { name: "obsidian-export-ideas.md", time: "2h ago" },
                  { name: "bug-report-capture.md", time: "yesterday" },
                  { name: "product-brief-draft.md", time: "3 days ago" },
                  { name: "design-system-notes.md", time: "last week" },
                ].map((file, i) => (
                  <motion.div
                    key={file.name}
                    initial={{ opacity: 0, x: -8 }}
                    animate={localInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.05, duration: 0.4, ease }}
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
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
