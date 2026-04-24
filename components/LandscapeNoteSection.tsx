"use client";

import type { CSSProperties } from "react";
import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import HeroNoteReplica from "@/components/HeroNoteReplica";
import { EASE_OUT_SOFT, REVEAL_VIEWPORT } from "@/lib/motion";

const section = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_SOFT },
  },
};

const landscapeNoteVars = {
  "--note-surface":
    "linear-gradient(180deg, color-mix(in srgb, var(--theme-page) 78%, rgba(255,255,255,0.72)) 0%, color-mix(in srgb, var(--theme-page) 70%, rgba(255,255,255,0.62)) 100%)",
  "--note-border": "color-mix(in srgb, var(--theme-ink) 20%, rgba(255,255,255,0.56))",
  "--note-shadow":
    "inset 0 1px 0 rgba(255,255,255,0.58), inset 0 -1px 0 rgba(255,255,255,0.14), 0 20px 60px rgba(0,0,0,0.22)",
  "--note-sheen":
    "linear-gradient(115deg, rgba(255,255,255,0.42), rgba(255,255,255,0.12) 34%, transparent 58%), radial-gradient(circle at 72% 12%, rgba(255,255,255,0.26), transparent 34%), radial-gradient(circle at 20% 82%, rgba(255,255,255,0.16), transparent 52%)",
  "--note-placeholder": "color-mix(in srgb, var(--theme-ink) 54%, transparent)",
  "--note-title": "color-mix(in srgb, var(--theme-ink) 40%, transparent)",
} as CSSProperties;

export default function LandscapeNoteSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });
  const scrollScale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
  const imageScale = shouldReduceMotion ? 1 : scrollScale;

  return (
    <section ref={sectionRef} className="relative px-6 pb-28">
      <motion.div
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={REVEAL_VIEWPORT}
        className="mx-auto max-w-6xl"
      >
        <motion.div
          variants={fadeUp}
          className="relative isolate overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]"
          style={{
            border: "1px solid color-mix(in srgb, var(--theme-ink) 10%, transparent)",
            boxShadow:
              "inset 0 1px 0 color-mix(in srgb, var(--theme-ink) 12%, transparent), 0 28px 80px rgba(0,0,0,0.18)",
          }}
        >
          <div className="relative min-h-[500px] sm:min-h-[560px]">
            <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
              <Image
                src="/images/n0te-landscape-waterfall.jpg"
                alt="Mountain landscape with waterfall"
                fill
                priority={false}
                sizes="(min-width: 1280px) 1120px, calc(100vw - 48px)"
                className="object-cover"
                style={{
                  objectPosition: "62% 50%",
                }}
              />
            </motion.div>

            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, transparent 34%, rgba(0,0,0,0.20) 100%)",
              }}
            />

            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0.10) 0%, transparent 18%, transparent 82%, rgba(0,0,0,0.12) 100%)",
              }}
            />

            <div className="relative flex min-h-[500px] items-center justify-center px-5 py-16 sm:min-h-[560px] sm:px-16 lg:px-24">
              <div
                className="relative origin-center"
                style={landscapeNoteVars}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-[38px]"
                  style={{
                    backdropFilter: "blur(30px) saturate(1.35) brightness(1.06)",
                    WebkitBackdropFilter: "blur(30px) saturate(1.35) brightness(1.06)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.30), rgba(255,255,255,0.16))",
                  }}
                />
                <HeroNoteReplica />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
