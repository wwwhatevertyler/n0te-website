"use client";

import type { CSSProperties } from "react";
import HeroNoteReplica from "@/components/HeroNoteReplica";

const scenicNoteVars = {
  "--note-surface":
    "linear-gradient(135deg, color-mix(in srgb, var(--theme-ink) 10%, transparent), color-mix(in srgb, var(--theme-page) 28%, transparent) 45%, color-mix(in srgb, var(--theme-ink) 5%, transparent)), color-mix(in srgb, var(--theme-page) 38%, transparent)",
  "--note-border": "var(--nav-shell-border)",
  "--note-backdrop-filter": "blur(44px) saturate(1.9) brightness(1.08)",
  "--note-shadow":
    "0 18px 52px rgba(0,0,0,0.18), inset 0 1px 0 var(--nav-shell-highlight-top), inset 0 -1px 0 var(--nav-shell-highlight-bottom)",
  "--note-sheen": "transparent",
  "--note-contain": "none",
} as CSSProperties;

export default function ScenicNotePreview({
  title,
  className,
}: {
  title?: string;
  className?: string;
}) {
  return (
    <div
      className={["relative", className].filter(Boolean).join(" ")}
      style={scenicNoteVars}
    >
      <HeroNoteReplica animateOnMount={false} showShader={false} title={title} />
    </div>
  );
}
