"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.23, 1, 0.32, 1] as const;

export default function StayInFlow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="flow" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-28" />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Problem framing */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease }}
              className="text-[11px] font-medium text-white/25 uppercase tracking-widest mb-5"
            >
              The problem
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.06, duration: 0.65, ease }}
              className="text-[40px] sm:text-[48px] font-semibold font-jura text-white leading-[1.08] tracking-tight"
            >
              Every switch costs
              <br />
              <span className="text-white/30">a thought.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.14, duration: 0.55, ease }}
              className="mt-6 text-[16px] text-white/45 leading-relaxed"
            >
              Opening a new app, creating a file, finding the right folder —
              by the time you&apos;re ready to write, the thought has already
              softened. The detail that made it worth capturing is gone.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.55, ease }}
              className="mt-4 text-[16px] text-white/45 leading-relaxed"
            >
              N0te stays floating above your work. Always visible. Never
              demanding. The moment a thought arrives, it&apos;s already
              waiting.
            </motion.p>
          </div>

          {/* Right: Before / After */}
          <div className="flex flex-col gap-4 lg:mt-10">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.22, duration: 0.55, ease }}
              className="rounded-2xl p-5"
              style={{
                background: "rgba(255,59,48,0.04)",
                border: "1px solid rgba(255,59,48,0.12)",
              }}
            >
              <p className="text-[11px] font-medium text-[#ff3b30]/50 uppercase tracking-widest mb-4">
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
                    <div className="w-5 h-5 rounded-full border border-[#ff3b30]/20 flex items-center justify-center shrink-0">
                      <span className="text-[9px] text-[#ff3b30]/40">{i + 1}</span>
                    </div>
                    <span
                      className={`text-[13px] ${
                        i === 4 ? "text-[#ff3b30]/40 italic" : "text-white/40"
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                ))}
                <p className="text-[11px] text-white/20 italic pl-8 pt-1">
                  The thought is already modified.
                </p>
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.55, ease }}
              className="rounded-2xl p-5"
              style={{
                background: "rgba(48,209,88,0.04)",
                border: "1px solid rgba(48,209,88,0.14)",
              }}
            >
              <p className="text-[11px] font-medium text-white/30 uppercase tracking-widest mb-4">
                With N0te
              </p>
              <div className="space-y-2.5">
                {[
                  "N0te is already floating",
                  "Capture it",
                  "Keep going",
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/[0.06] border border-white/[0.10] flex items-center justify-center shrink-0">
                      <span className="text-[9px] text-white/40">{i + 1}</span>
                    </div>
                    <span className="text-[13px] text-white/70">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
