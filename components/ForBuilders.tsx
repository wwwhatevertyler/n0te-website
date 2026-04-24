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

const cardContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

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
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-28" />

        {/* Section 1: Built for Obsidian people */}
        <div className="mb-24">
          <motion.div
            variants={textContainer}
            initial="hidden"
            whileInView="show"
            viewport={REVEAL_VIEWPORT}
            className="max-w-2xl"
          >
            <motion.p
              variants={textItem}
              className="text-[11px] font-medium text-white/25 uppercase tracking-widest mb-5"
            >
              Who it&apos;s for
            </motion.p>
            <motion.h2
              variants={textItem}
              className="text-[34px] sm:text-[42px] font-semibold font-jura text-white leading-[1.08] tracking-tight"
            >
              Built for
              <br />
              <span className="text-white/30">Obsidian people.</span>
            </motion.h2>
            <motion.p
              variants={textItem}
              className="mt-6 text-[13px] text-white/45 leading-relaxed"
            >
              Designers, builders, founders, researchers, and writers who
              collect fragments all day. People who live in Obsidian and want
              a faster way to get things there.
            </motion.p>
          </motion.div>

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={REVEAL_VIEWPORT}
            className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {useCases.map((item) => (
              <motion.div
                key={item.label}
                variants={cardItem}
                className="flex gap-4 p-5 rounded-2xl group"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="w-0.5 shrink-0 mt-0.5 rounded-full bg-white/10" />
                <div>
                  <p className="text-[13px] font-semibold text-white/80 font-jura leading-snug">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-[13px] text-white/35 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Section 2: Project memory / builder angle */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="show"
          viewport={REVEAL_VIEWPORT}
          className="rounded-3xl p-10 sm:p-14"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          <motion.p
            variants={textItem}
            className="text-[11px] font-medium text-white/30 uppercase tracking-widest mb-5"
          >
            For builders
          </motion.p>
          <motion.h2
            variants={textItem}
            className="text-[26px] sm:text-[34px] font-semibold font-jura text-white leading-[1.1] tracking-tight"
          >
            Project memory lives
            <br />
            <span className="text-white/30">outside the chat window.</span>
          </motion.h2>
          <motion.p
            variants={textItem}
            className="mt-6 text-[13px] text-white/45 leading-relaxed max-w-xl"
          >
            Prompts, decisions, bugs, specs, and research fragments all
            belong somewhere durable. N0te captures them in the moment and
            sends them to Obsidian — without turning your tool into an AI
            wrapper or a second inbox.
          </motion.p>
          <motion.div
            variants={textItem}
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
    </section>
  );
}
