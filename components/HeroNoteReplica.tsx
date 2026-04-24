"use client";

import type { CSSProperties, ReactNode } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { EASE_OUT_SOFT } from "@/lib/motion";
import { type SiteTheme, useSiteTheme } from "@/components/SiteThemeProvider";

const noteFrameStyle: CSSProperties = {
  width: 300,
  height: 208,
  borderRadius: 38,
  background: "var(--note-surface)",
  backdropFilter: "blur(58px) saturate(1.58) brightness(1.08) contrast(1.04)",
  WebkitBackdropFilter: "blur(58px) saturate(1.58) brightness(1.08) contrast(1.04)",
  border: "0.7px solid var(--note-border)",
  boxShadow: "var(--note-shadow)",
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

function ThemeToggle() {
  const { theme, setTheme } = useSiteTheme();
  const toggleRef = useRef<HTMLDivElement>(null);

  function switchTheme(nextTheme: SiteTheme) {
    setTheme(nextTheme, toggleRef.current);
  }

  return (
    <div
      ref={toggleRef}
      className="flex items-center rounded-full"
      style={{
        width: 58,
        height: 24,
        padding: "0 3px",
        background: "var(--note-control-fill)",
        border: "0.5px solid var(--note-control-border)",
        boxShadow: "inset 0 1px 0 var(--note-control-highlight)",
      }}
    >
      <button
        type="button"
        aria-pressed={theme === "light"}
        aria-label="Switch website to light mode"
        className="grid h-5 w-[26px] place-items-center rounded-full transition duration-150"
        onClick={() => switchTheme("light")}
        style={{
          background: theme === "light" ? "var(--note-toggle-active)" : "transparent",
          color: theme === "light" ? "var(--note-toggle-active-icon)" : "var(--note-toggle-icon)",
        }}
      >
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <circle cx="6" cy="6" r="2" fill="currentColor" />
          <path
            d="M6 1.4v1.2M6 9.4v1.2M1.4 6h1.2M9.4 6h1.2M2.75 2.75l.85.85M8.4 8.4l.85.85M9.25 2.75l-.85.85M3.6 8.4l-.85.85"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="0.9"
          />
        </svg>
      </button>

      <button
        type="button"
        aria-pressed={theme === "dark"}
        aria-label="Switch website to dark mode"
        className="grid h-5 w-[26px] place-items-center rounded-full transition duration-150"
        onClick={() => switchTheme("dark")}
        style={{
          background: theme === "dark" ? "var(--note-toggle-active)" : "transparent",
          color: theme === "dark" ? "var(--note-toggle-active-icon)" : "var(--note-toggle-icon)",
        }}
      >
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M9.9 7.2A4.45 4.45 0 0 1 4.8 2.1a4.7 4.7 0 1 0 5.1 5.1Z"
            fill="currentColor"
          />
        </svg>
      </button>
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

export default function HeroNoteReplica() {
  return (
    <motion.div
      aria-label="Interactive N0te preview"
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

            <div className="absolute left-1/2 top-0 -translate-x-1/2 scale-[0.96] opacity-0 transition duration-150 ease-[var(--ease-out)] group-hover:scale-100 group-hover:opacity-100 focus-within:scale-100 focus-within:opacity-100">
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
              Mineral Horizon
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
