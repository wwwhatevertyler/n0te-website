"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";
import HeroShader from "@/components/HeroShader";
import SiteThemeToggle from "@/components/SiteThemeToggle";
import { EASE_OUT_SOFT } from "@/lib/motion";

const noteFrameStyle: CSSProperties = {
  width: 300,
  height: 208,
  borderRadius: 38,
  clipPath: "inset(0 round 38px)",
  background: "var(--note-surface)",
  backgroundClip: "padding-box",
  backdropFilter: "var(--note-backdrop-filter, none)",
  WebkitBackdropFilter: "var(--note-backdrop-filter, none)",
  border: "0.7px solid var(--note-border)",
  boxShadow: "var(--note-shadow)",
  contain: "var(--note-contain, paint)",
  isolation: "isolate",
};

function ChromeButton({
  children,
  active = false,
}: {
  children: ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className="grid place-items-center rounded-full"
      style={{
        width: 24,
        height: 24,
        background: active
          ? "color-mix(in srgb, var(--n0te-accent) 24%, transparent)"
          : "var(--note-control-fill)",
        border: active
          ? "0.5px solid color-mix(in srgb, var(--n0te-accent) 42%, transparent)"
          : "0.5px solid var(--note-control-border)",
        boxShadow: active
          ? "0 0 0 1px color-mix(in srgb, var(--n0te-accent) 12%, transparent), inset 0 1px 0 rgba(255,255,255,0.035)"
          : "inset 0 1px 0 rgba(255,255,255,0.035)",
        color: active ? "var(--n0te-accent)" : "var(--note-control-icon)",
      }}
    >
      {children}
    </div>
  );
}

function CloseIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
      <path
        d="M2.05 2.05l4.9 4.9M6.95 2.05l-4.9 4.9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
      <rect
        x="3.15"
        y="0.65"
        width="2.7"
        height="4.85"
        rx="1.35"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.12"
      />
      <path
        d="M1.95 4.78a2.55 2.55 0 0 0 5.1 0M4.5 7.35v1.05"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.12"
      />
    </svg>
  );
}

function ObsidianExportIcon() {
  return (
    <div className="grid place-items-center" style={{ width: 24, height: 24 }}>
      <img
        src="/images/n0te-icon-for-obsidian-export.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        width="24"
        height="24"
        style={{ display: "block", height: 24, opacity: 0.84, width: 24 }}
      />
    </div>
  );
}

function PlusIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
      <path
        d="M4.5 1.75v5.5M1.75 4.5h5.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function HeroNoteReplica({
  animateOnMount = true,
  showShader = true,
  title = "Mineral Horizon",
}: {
  animateOnMount?: boolean;
  showShader?: boolean;
  title?: string;
}) {
  return (
    <motion.div
      aria-label="Interactive N0te preview"
      initial={animateOnMount ? { opacity: 0, scale: 0.97, y: 20 } : false}
      animate={animateOnMount ? { opacity: 1, scale: 1, y: 0 } : undefined}
      transition={animateOnMount ? { delay: 0.36, duration: 0.9, ease: EASE_OUT_SOFT } : undefined}
      className="group relative select-none"
    >
      <div className="relative overflow-hidden" style={noteFrameStyle}>
        {showShader ? (
          <HeroShader
            className="pointer-events-none absolute inset-0"
            style={{
              opacity: 0.58,
            }}
          />
        ) : null}

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "var(--note-sheen)",
          }}
        />

        <div className="relative flex h-full flex-col" style={{ padding: 20 }}>
          <div className="relative" style={{ height: 24 }}>
            <div className="absolute left-0 top-0 flex" style={{ gap: 8 }}>
              <ChromeButton>
                <CloseIcon />
              </ChromeButton>
              <ChromeButton>
                <MicIcon />
              </ChromeButton>
            </div>

            <div className="note-theme-toggle-reveal absolute left-1/2 top-0">
              <SiteThemeToggle variant="note" className="note-theme-toggle-button" />
            </div>

            <div className="absolute right-0 top-0 flex" style={{ gap: 8 }}>
              <ObsidianExportIcon />
              <ChromeButton>
                <PlusIcon />
              </ChromeButton>
            </div>
          </div>

          <div className="min-w-0 flex-1" style={{ paddingTop: 14, paddingLeft: 1, paddingRight: 1 }}>
            <p
              className="m-0 text-left font-jura"
              style={{
                color: "var(--note-placeholder)",
                fontSize: 15,
                lineHeight: 1.34,
                letterSpacing: 0,
              }}
            >
              Capture a thought, idea, or note...
            </p>
          </div>

          <div
            className="absolute inset-x-0 grid place-items-center"
            style={{
              bottom: 20,
              height: 24,
              transform: "translateY(4px)",
            }}
          >
            <div
              className="font-jura"
              style={{
                color: "var(--note-title)",
                fontSize: 10,
                lineHeight: "24px",
                letterSpacing: 0,
              }}
            >
              {title}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
