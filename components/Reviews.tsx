"use client";

import { motion } from "framer-motion";
import { EASE_OUT_SOFT, REVEAL_VIEWPORT } from "@/lib/motion";

const EASE = EASE_OUT_SOFT;

const headingContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const headingItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const cardContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const reviews = [
  {
    title: "The capture layer I was missing",
    body: "I've tried everything for quick capture. N0te just works. It's floating, it's fast, and my notes end up in Obsidian without me thinking about it.",
    author: "pdx_builder",
    date: "03/2026",
  },
  {
    title: "Replaced 3 apps for me",
    body: "Was using a combination of Drafts, Notchmeister, and a Bear workflow. Now it's just N0te. It's always floating there. I'm writing before I've even thought about it.",
    author: "quietstorm_mac",
    date: "02/2026",
  },
  {
    title: "Feels like it belongs on macOS",
    body: "The glass window, the way it snaps next to other notes, the spring animations — it's genuinely premium. It feels like it belongs on my desktop.",
    author: "LiamHollis",
    date: "01/2026",
  },
  {
    title: "Dictation actually works",
    body: "I tried every dictation note app. Most feel clunky. N0te transcribes live and the note is in Obsidian before I've finished the thought.",
    author: "cassidy_writes",
    date: "03/2026",
  },
  {
    title: "Finally, just plain text",
    body: "No markdown toolbar, no formatting, no noise. Just a note. That's the whole thing and it's exactly what I needed.",
    author: "monkshood99",
    date: "02/2026",
  },
  {
    title: "I open it 30+ times a day",
    body: "Sounds like an exaggeration. It's not. The moment a thought enters my head, the note is already floating there. It's become reflexive.",
    author: "TheAeroJ_v2",
    date: "01/2026",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="rgba(255,255,255,0.35)">
          <path d="M6 1l1.24 2.5L10 3.9l-2 1.95.47 2.75L6 7.25 3.53 8.6 4 5.85 2 3.9l2.76-.4L6 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative px-6 pb-28">
      <div className="max-w-5xl mx-auto mb-28">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={headingContainer}
          initial="hidden"
          whileInView="show"
          viewport={REVEAL_VIEWPORT}
          className="text-center mb-16"
        >
          <motion.h2
            variants={headingItem}
            className="text-[34px] sm:text-[42px] font-semibold font-jura text-white tracking-tight"
          >
            Loved by Mac users.
          </motion.h2>
          <motion.p
            variants={headingItem}
            className="mt-4 text-[15px] text-white/45"
          >
            Available on the Mac App Store.
          </motion.p>
        </motion.div>

        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="show"
          viewport={REVEAL_VIEWPORT}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.author}
              variants={cardItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.22, ease: EASE }}
              className="break-inside-avoid rounded-2xl p-5"
              style={{
                background: "var(--theme-card)",
                border: "1px solid var(--theme-card-border)",
              }}
            >
              <Stars />
              <p className="mt-3 text-[13px] font-semibold text-white/90 font-jura leading-snug">
                {review.title}
              </p>
              <p className="mt-2 text-[13px] text-white/45 leading-relaxed">
                {review.body}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[11px] text-white/30 font-medium">{review.author}</span>
                <span className="text-[11px] text-white/20">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
