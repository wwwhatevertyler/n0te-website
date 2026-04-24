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
                  "linear-gradient(90deg, rgba(var(--theme-page-rgb) / 0.70) 0%, rgba(var(--theme-page-rgb) / 0.28) 44%, rgba(var(--theme-page-rgb) / 0.08) 100%), linear-gradient(180deg, rgba(0,0,0,0.16) 0%, transparent 28%, rgba(0,0,0,0.24) 100%)",
              }}
            />

            <div
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                background:
                  "radial-gradient(circle at 24% 48%, color-mix(in srgb, var(--theme-page) 54%, transparent) 0%, transparent 36%), radial-gradient(circle at 78% 16%, rgba(255,255,255,0.16) 0%, transparent 34%)",
              }}
            />

            <div className="relative flex min-h-[500px] items-center justify-center px-5 py-16 sm:min-h-[560px] sm:justify-start sm:px-16 lg:px-24">
              <motion.div
                variants={fadeUp}
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
