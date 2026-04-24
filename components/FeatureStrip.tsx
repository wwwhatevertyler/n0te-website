"use client";

import { motion } from "framer-motion";
import { EASE_OUT_SOFT, REVEAL_VIEWPORT } from "@/lib/motion";

const EASE = EASE_OUT_SOFT;

const sectionVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const fadeUpSm = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

const cardVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function StayInFlow() {
  return (
    <section id="flow" className="relative py-28 px-6">
      {/* Ambient glow behind the "With N0te" card */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          style={{
            position: "absolute",
            right: "5%",
            top: "30%",
            width: "40%",
            height: "55%",
            background:
              "radial-gradient(ellipse, color-mix(in srgb, var(--n0te-accent) 7%, transparent) 0%, transparent 70%)",
            filter: "blur(48px)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Problem framing */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={REVEAL_VIEWPORT}
          >
            <motion.p variants={fadeUpSm} className="text-[11px] font-medium text-white/25 uppercase tracking-widest mb-5">
              The problem
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-[34px] sm:text-[42px] font-semibold font-jura text-white leading-[1.08] tracking-tight"
            >
              Every switch costs
              <br />
              <span className="text-white/30">a thought.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-[15px] text-white/45 leading-relaxed">
              Opening a new app, creating a file, finding the right folder —
              by the time you&apos;re ready to write, the thought has already
              softened. The detail that made it worth capturing is gone.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 text-[15px] text-white/45 leading-relaxed">
              N0te stays floating above your work. Always visible. Never
              demanding. The moment a thought arrives, it&apos;s already
              waiting.
            </motion.p>
          </motion.div>

          {/* Right: Before / After */}
          <motion.div
            className="flex flex-col gap-4 lg:mt-10"
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={REVEAL_VIEWPORT}
          >
            {/* Without N0te */}
            <motion.div
              variants={slideRight}
              className="rounded-2xl p-5"
              style={{
                background: "color-mix(in srgb, var(--theme-ink) 2%, transparent)",
                border: "1px solid color-mix(in srgb, var(--theme-ink) 5%, transparent)",
              }}
            >
              <p className="text-[11px] font-medium text-white/20 uppercase tracking-widest mb-4">
                Without N0te
              </p>
              <div className="space-y-2.5">
                {[
                  "Switch to Obsidian",
                  "Create a new note",
                  "Name the file",
                  "Find the right folder",
                  "Start typing...",
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border border-white/[0.07] flex items-center justify-center shrink-0">
                      <span className="text-[9px] text-white/22">{i + 1}</span>
                    </div>
                    <span className={`text-[13px] ${i === 4 ? "text-white/22 italic line-through decoration-white/15" : "text-white/32"}`}>
                      {step}
                    </span>
                  </div>
                ))}
                <p className="text-[11px] text-white/15 italic pl-8 pt-1">
                  The thought is already modified.
                </p>
              </div>
            </motion.div>

            {/* With N0te */}
            <motion.div
              variants={slideRight}
              className="rounded-2xl p-5"
              style={{
                background: "color-mix(in srgb, var(--n0te-accent) 6%, transparent)",
                border: "1px solid color-mix(in srgb, var(--n0te-accent) 28%, transparent)",
                boxShadow:
                  "inset 0 1px 0 color-mix(in srgb, var(--n0te-accent) 10%, transparent), 0 0 0 0.5px color-mix(in srgb, var(--n0te-accent) 6%, transparent)",
              }}
            >
              <p className="text-[11px] font-medium uppercase tracking-widest mb-4" style={{ color: "color-mix(in srgb, var(--n0te-accent) 70%, white)" }}>
                With N0te
              </p>
              <div className="space-y-2.5">
                {["N0te is already floating", "Capture it", "Keep going"].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: "color-mix(in srgb, var(--n0te-accent) 12%, transparent)",
                        border: "1px solid color-mix(in srgb, var(--n0te-accent) 30%, transparent)",
                      }}
                    >
                      <span className="text-[9px]" style={{ color: "color-mix(in srgb, var(--n0te-accent) 80%, white)" }}>{i + 1}</span>
                    </div>
                    <span className="text-[13px] font-medium" style={{ color: "color-mix(in srgb, var(--n0te-accent) 82%, var(--theme-ink))" }}>{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
