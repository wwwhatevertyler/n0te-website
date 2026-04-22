"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.23, 1, 0.32, 1] as const;

const useCases = [
  {
    label: "Capture a thought mid-meeting",
    body: "Before the next slide is up. The note is already waiting.",
  },
  {
    label: "Save a prompt or decision",
    body: "Outside the chat window, before the context window closes.",
  },
  {
    label: "Hold a bug or spec fragment",
    body: "Without opening a ticket or switching out of your editor.",
  },
  {
    label: "Keep reference scraps close",
    body: "Without polluting your vault with half-formed ideas.",
  },
];

const builderTags = [
  "Prompts",
  "Bug reports",
  "Decisions",
  "Specs",
  "Research",
  "Reference",
];

export default function ForBuilders() {
  const audienceRef = useRef(null);
  const audienceInView = useInView(audienceRef, { once: true, margin: "-80px" });

  const builderRef = useRef(null);
  const builderInView = useInView(builderRef, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-28" />

        {/* Section 1: Built for Obsidian people */}
        <div ref={audienceRef} className="mb-24">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={audienceInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease }}
              className="text-[11px] font-medium text-white/25 uppercase tracking-widest mb-5"
            >
              Who it&apos;s for
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={audienceInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.06, duration: 0.65, ease }}
              className="text-[40px] sm:text-[48px] font-semibold font-jura text-white leading-[1.08] tracking-tight"
            >
              Built for
              <br />
              <span className="text-white/30">Obsidian people.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={audienceInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.14, duration: 0.55, ease }}
              className="mt-6 text-[16px] text-white/45 leading-relaxed"
            >
              Designers, builders, founders, researchers, and writers who
              collect fragments all day. People who live in Obsidian and want
              a faster way to get things there.
            </motion.p>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {useCases.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                animate={audienceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease }}
                className="flex gap-4 p-5 rounded-2xl group"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="w-0.5 shrink-0 mt-0.5 rounded-full bg-white/10" />
                <div>
                  <p className="text-[14px] font-semibold text-white/80 font-jura leading-snug">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-[13px] text-white/35 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Project memory / builder angle */}
        <div ref={builderRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={builderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease }}
            className="rounded-3xl p-10 sm:p-14"
            style={{
              background: "rgba(10,132,255,0.04)",
              border: "1px solid rgba(10,132,255,0.12)",
              boxShadow: "inset 0 1px 0 rgba(10,132,255,0.06)",
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={builderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.06, duration: 0.4, ease }}
              className="text-[11px] font-medium text-[#0a84ff]/45 uppercase tracking-widest mb-5"
            >
              For builders
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={builderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12, duration: 0.65, ease }}
              className="text-[32px] sm:text-[40px] font-semibold font-jura text-white leading-[1.1] tracking-tight"
            >
              Project memory lives
              <br />
              <span className="text-white/30">outside the chat window.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={builderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.18, duration: 0.55, ease }}
              className="mt-6 text-[16px] text-white/45 leading-relaxed max-w-xl"
            >
              Prompts, decisions, bugs, specs, and research fragments all
              belong somewhere durable. N0te captures them in the moment and
              sends them to Obsidian — without turning your tool into an AI
              wrapper or a second inbox.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={builderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.24, duration: 0.55, ease }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {builderTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-[12px] text-white/40 border border-white/[0.09] bg-white/[0.03]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
