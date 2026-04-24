"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE_OUT_SOFT } from "@/lib/motion";

const noteFrameStyle: CSSProperties = {
  width: 300,
  height: 208,
  borderRadius: 38,
  background:
    "linear-gradient(180deg, rgba(43,44,44,0.54) 0%, rgba(30,31,31,0.42) 100%)",
  backdropFilter: "blur(58px) saturate(1.58) brightness(1.08) contrast(1.04)",
  WebkitBackdropFilter: "blur(58px) saturate(1.58) brightness(1.08) contrast(1.04)",
  border: "0.7px solid rgba(255,255,255,0.16)",
  boxShadow:
    "inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -1px 0 rgba(0,0,0,0.22), 0 0 0 0.5px rgba(255,255,255,0.04)",
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
          : "rgba(255,255,255,0.08)",
        border: active
          ? "0.5px solid color-mix(in srgb, var(--n0te-accent) 42%, transparent)"
          : "0.5px solid rgba(255,255,255,0.12)",
        boxShadow: active
          ? "0 0 0 1px color-mix(in srgb, var(--n0te-accent) 12%, transparent), inset 0 1px 0 rgba(255,255,255,0.035)"
          : "inset 0 1px 0 rgba(255,255,255,0.035)",
        color: active ? "var(--n0te-accent)" : "rgba(245,248,255,0.52)",
      }}
    >
      {children}
    </div>
  );
}

function CloseIcon() {
  return (
    <svg width="34%" height="34%" viewBox="0 0 8 8" fill="none" aria-hidden="true">
      <path
        d="M1.45 1.45l5.1 5.1M6.55 1.45l-5.1 5.1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.35"
      />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="43%" height="43%" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <rect x="4.25" y="1.2" width="3.5" height="6" rx="1.75" fill="currentColor" />
      <path
        d="M2.7 6.25a3.3 3.3 0 0 0 6.6 0M6 9.55v1.15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.05"
      />
    </svg>
  );
}

function ThemeToggle() {
  return (
    <div
      className="flex items-center rounded-full"
      style={{
        width: 58,
        height: 24,
        padding: "0 3px",
        background: "rgba(255,255,255,0.08)",
        border: "0.5px solid rgba(255,255,255,0.12)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.035)",
      }}
    >
      <div className="grid h-5 w-[26px] place-items-center">
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <circle cx="6" cy="6" r="2" fill="rgba(245,248,255,0.36)" />
          <path
            d="M6 1.4v1.2M6 9.4v1.2M1.4 6h1.2M9.4 6h1.2M2.75 2.75l.85.85M8.4 8.4l.85.85M9.25 2.75l-.85.85M3.6 8.4l-.85.85"
            stroke="rgba(245,248,255,0.32)"
            strokeLinecap="round"
            strokeWidth="0.9"
          />
        </svg>
      </div>

      <div
        className="grid h-5 w-[26px] place-items-center rounded-full"
        style={{ background: "rgba(255,255,255,0.18)" }}
      >
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M9.9 7.2A4.45 4.45 0 0 1 4.8 2.1a4.7 4.7 0 1 0 5.1 5.1Z"
            fill="rgba(245,248,255,0.84)"
          />
        </svg>
      </div>
    </div>
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
    <svg width="42%" height="42%" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path
        d="M5 1.9v6.2M1.9 5h6.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.25"
      />
    </svg>
  );
}

export default function HeroNoteReplica() {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.97, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.36, duration: 0.9, ease: EASE_OUT_SOFT }}
      className="group relative select-none"
      style={{
        filter:
          "drop-shadow(0 24px 58px rgba(0,0,0,0.50)) drop-shadow(0 6px 18px rgba(0,0,0,0.36))",
      }}
    >
      <div className="relative overflow-hidden" style={noteFrameStyle}>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, rgba(255,255,255,0.050), rgba(255,255,255,0.012) 34%, transparent 58%), radial-gradient(circle at 80% 18%, rgba(255,255,255,0.036), transparent 32%), radial-gradient(circle at 18% 78%, rgba(0,0,0,0.18), transparent 52%)",
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

            <div className="absolute left-1/2 top-0 -translate-x-1/2 scale-[0.96] opacity-0 transition duration-150 ease-[var(--ease-out)] group-hover:scale-100 group-hover:opacity-100">
              <ThemeToggle />
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
                color: "rgba(245,248,255,0.45)",
                fontSize: 15,
                lineHeight: 1.34,
                letterSpacing: 0,
              }}
            >
              Capture a thought, idea, or note...
            </p>
          </div>

          <div
            className="absolute left-1/2 grid -translate-x-1/2 place-items-center"
            style={{
              bottom: 20,
              height: 24,
              transform: "translateX(-50%) translateY(4px)",
            }}
          >
            <div
              className="font-jura"
              style={{
                color: "rgba(245,248,255,0.28)",
                fontSize: 10,
                lineHeight: "24px",
                letterSpacing: 0,
              }}
            >
              Mineral Horizon
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
