"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const ease = [0.23, 1, 0.32, 1] as const;

const faqs = [
  {
    q: "Why not just open Obsidian?",
    a: "Obsidian is excellent — once the thought is ready for structure. N0te exists for the moment before that. The value is not another place to organize notes. It's protecting the flow you're already in.",
  },
  {
    q: "Why not Apple Notes or Stickies?",
    a: "Those tools are general-purpose capture. N0te is specifically shaped for Obsidian users who want rough notes to become clean Markdown. The exit path is the product.",
  },
  {
    q: "Is this too small to matter?",
    a: "It's small by design. Small utilities justify themselves when they remove a repeated annoyance and feel premium enough to trust every day. N0te does one thing and does it well.",
  },
  {
    q: "Does it require an account or subscription?",
    a: "No account, no subscription, no cloud. The core capture experience is available today as a direct macOS download while the product continues to mature.",
  },
  {
    q: "What Obsidian vaults does it support?",
    a: "N0te exports to any local Obsidian vault on your Mac. You point it at the vault folder, and your notes land there as plain .md files.",
  },
  {
    q: "Does it work offline?",
    a: "Entirely. N0te stores notes locally on your Mac and exports to a local Obsidian vault. There is no network dependency in the capture or export flow.",
  },
];

function FAQItem({
  item,
  index,
  defaultOpen,
}: {
  item: (typeof faqs)[0];
  index: number;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen ?? false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.04, duration: 0.5, ease }}
      className="border-b border-white/[0.07] last:border-0"
    >
      <button
        className="w-full py-5 flex items-start justify-between gap-4 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[15px] font-semibold text-white/75 font-jura group-hover:text-white/90 transition-colors duration-200 leading-snug">
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22, ease }}
          className="shrink-0 mt-0.5 w-5 h-5 rounded-full border border-white/[0.14] flex items-center justify-center text-white/35 group-hover:border-white/25 group-hover:text-white/55 transition-colors duration-200"
        >
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
            <path
              d="M4.5 1.5v6M1.5 4.5h6"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[14px] text-white/40 leading-relaxed max-w-2xl">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ObjectionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="relative px-6 pb-28">
      <div className="max-w-5xl mx-auto">
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-28" />

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-16 items-start"
        >
          {/* Left: Sticky label */}
          <div className="lg:sticky lg:top-24">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease }}
              className="text-[11px] font-medium text-white/25 uppercase tracking-widest mb-5"
            >
              FAQ
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.06, duration: 0.65, ease }}
              className="text-[36px] sm:text-[44px] font-semibold font-jura text-white leading-[1.1] tracking-tight"
            >
              Common
              <br />
              <span className="text-white/30">questions.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.14, duration: 0.5, ease }}
              className="mt-5 text-[14px] text-white/35 leading-relaxed max-w-[220px]"
            >
              Including the obvious one about just opening Obsidian.
            </motion.p>
          </div>

          {/* Right: FAQ accordion */}
          <div>
            {faqs.map((item, i) => (
              <FAQItem
                key={item.q}
                item={item}
                index={i}
                defaultOpen={i === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
