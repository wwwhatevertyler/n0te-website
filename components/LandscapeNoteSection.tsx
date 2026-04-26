"use client";

import type { CSSProperties } from "react";
import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import HeroNoteReplica from "@/components/HeroNoteReplica";

const middleScenicNoteVars = {
  "--note-surface":
    "linear-gradient(135deg, color-mix(in srgb, var(--theme-ink) 10%, transparent), color-mix(in srgb, var(--theme-page) 28%, transparent) 45%, color-mix(in srgb, var(--theme-ink) 5%, transparent)), color-mix(in srgb, var(--theme-page) 38%, transparent)",
  "--note-border": "var(--nav-shell-border)",
  "--note-backdrop-filter": "blur(44px) saturate(1.9) brightness(1.08)",
  "--note-shadow":
    "0 18px 52px rgba(0,0,0,0.18), inset 0 1px 0 var(--nav-shell-highlight-top), inset 0 -1px 0 var(--nav-shell-highlight-bottom)",
  "--note-sheen": "transparent",
  "--note-contain": "none",
} as CSSProperties;

function MiddleScenicNotePreview() {
  return (
    <div className="relative" style={middleScenicNoteVars}>
      <HeroNoteReplica animateOnMount={false} showShader={false} />
    </div>
  );
}

export default function LandscapeNoteSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 92%", "end 10%"],
  });
  const scrollScale = useTransform(scrollYProgress, [0, 0.52, 1], [1, 1.055, 1]);
  const imageScale = shouldReduceMotion ? 1 : scrollScale;

  return (
    <section ref={sectionRef} className="relative px-6 pb-28 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[68rem]">
        <div
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
                sizes="(min-width: 1280px) 1088px, calc(100vw - 64px)"
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
              <MiddleScenicNotePreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
