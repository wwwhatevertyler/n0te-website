"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.23, 1, 0.32, 1] as const;

const features = [
  {
    title: "Floating glass window",
    description:
      "Floats above your workspace. Always visible, never demanding — ready the moment a thought arrives.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="13" rx="4" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5 8h10M5 11h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    accent: "#0a84ff",
  },
  {
    title: "Voice dictation",
    description:
      "Hit the mic and speak. Live transcription writes as you talk. Stop, and it saves instantly.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="7" y="2" width="6" height="9" rx="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4 10a6 6 0 0012 0M10 16v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    accent: "#30d158",
  },
  {
    title: "Obsidian export",
    description:
      "One tap writes your note directly to your Obsidian vault as a Markdown file. Instant, local, no cloud needed.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3l7 4v6l-7 4-7-4V7l7-4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M10 3v14M3 7l7 4 7-4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
    accent: "#bf5af2",
  },
  {
    title: "Multi-note",
    description:
      "Spawn as many floating notes as you need. They stack next to each other like a thought cluster.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="5" width="12" height="10" rx="3" stroke="currentColor" strokeWidth="1.4" />
        <rect x="6" y="2" width="12" height="10" rx="3" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2 1.5" />
      </svg>
    ),
    accent: "#ff9f0a",
  },
  {
    title: "Image attachments",
    description:
      "Drop images into the floating note. They open in a separate glass lightbox — out of the way until you need them.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="7" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M2 13l4-3 3 3 3-4 4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: "#ff375f",
  },
  {
    title: "Fully local",
    description:
      "No account, no subscription, no cloud sync. Your notes live on your disk. Always.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2a5 5 0 015 5c0 3.5-5 11-5 11S5 10.5 5 7a5 5 0 015-5z" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="10" cy="7" r="2" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    accent: "#64d2ff",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.5, ease }}
      whileHover={{ scale: 1.02 }}
      className="group relative rounded-2xl p-6 cursor-default"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
        style={{
          background: `${feature.accent}18`,
          border: `1px solid ${feature.accent}30`,
          color: feature.accent,
        }}
      >
        {feature.icon}
      </div>
      <h3 className="text-[15px] font-semibold text-white/90 mb-2 font-jura">
        {feature.title}
      </h3>
      <p className="text-[13px] text-white/45 leading-relaxed">
        {feature.description}
      </p>

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 30% 0%, ${feature.accent}08 0%, transparent 60%)`,
        }}
      />
    </motion.div>
  );
}

export default function FeatureGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div ref={ref} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="text-[40px] sm:text-[48px] font-semibold font-jura text-white leading-tight tracking-tight"
          >
            Always there.
            <br />
            <span className="text-white/35">Never in the way.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5, ease }}
            className="mt-4 text-[16px] text-white/45 max-w-md mx-auto"
          >
            Everything you need to capture a thought fast and get it somewhere useful.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
