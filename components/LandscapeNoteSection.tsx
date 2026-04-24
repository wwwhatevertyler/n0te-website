"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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

const noteReveal = {
  hidden: { opacity: 0, scale: 0.88, y: 24 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.46, ease: EASE_OUT_SOFT },
  },
};

export default function LandscapeNoteSection() {
  return (
    <section className="relative px-6 pb-28">
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
              <motion.div
                variants={noteReveal}
                className="origin-center scale-[0.92] sm:scale-100"
              >
                <HeroNoteReplica />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
