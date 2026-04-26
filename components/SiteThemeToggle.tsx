"use client";

import Magnetic from "@/components/Magnetic";
import { type SiteTheme, useSiteTheme } from "@/components/SiteThemeProvider";

function SunIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <circle cx="6" cy="6" r="2" fill="currentColor" />
      <path
        d="M6 1.4v1.2M6 9.4v1.2M1.4 6h1.2M9.4 6h1.2M2.75 2.75l.85.85M8.4 8.4l.85.85M9.25 2.75l-.85.85M3.6 8.4l-.85.85"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="0.9"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M9.9 7.2A4.45 4.45 0 0 1 4.8 2.1a4.7 4.7 0 1 0 5.1 5.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function switchTheme(theme: SiteTheme, setTheme: (nextTheme: SiteTheme) => void, nextTheme?: SiteTheme) {
  setTheme(nextTheme ?? (theme === "dark" ? "light" : "dark"));
}

export default function SiteThemeToggle({
  variant = "note",
  className,
}: {
  variant?: "note" | "footer";
  className?: string;
}) {
  const { theme, setTheme } = useSiteTheme();

  const isFooter = variant === "footer";
  const shellBackground = isFooter
    ? "linear-gradient(135deg, color-mix(in srgb, var(--theme-ink) 10%, transparent), color-mix(in srgb, var(--theme-page) 28%, transparent) 45%, color-mix(in srgb, var(--theme-ink) 5%, transparent)), color-mix(in srgb, var(--theme-page) 38%, transparent)"
    : "var(--note-control-fill)";
  const shellBorder = isFooter
    ? "0.7px solid var(--nav-shell-border)"
    : "0.5px solid var(--note-control-border)";
  const shellShadow = isFooter
    ? "0 18px 52px rgba(0,0,0,0.18), inset 0 1px 0 var(--nav-shell-highlight-top), inset 0 -1px 0 var(--nav-shell-highlight-bottom)"
    : "inset 0 1px 0 var(--note-control-highlight)";
  const activeBackground = isFooter
    ? "color-mix(in srgb, var(--theme-ink) 12%, transparent)"
    : "var(--note-toggle-active)";
  const activeIcon = isFooter
    ? "color-mix(in srgb, var(--theme-ink) 88%, transparent)"
    : "var(--note-toggle-active-icon)";
  const inactiveIcon = isFooter
    ? "color-mix(in srgb, var(--theme-ink) 42%, transparent)"
    : "var(--note-toggle-icon)";

  return (
    <Magnetic maxOffset={3.5} influence={0.14}>
      <button
        type="button"
        aria-label={theme === "dark" ? "Switch website to light mode" : "Switch website to dark mode"}
        aria-pressed={theme === "light"}
        onClick={() => switchTheme(theme, setTheme)}
        className={["flex items-center rounded-full", className].filter(Boolean).join(" ")}
        style={{
          width: 58,
          height: 24,
          padding: "0 3px",
          background: shellBackground,
          backdropFilter: isFooter ? "blur(44px) saturate(1.9) brightness(1.08)" : undefined,
          WebkitBackdropFilter: isFooter ? "blur(44px) saturate(1.9) brightness(1.08)" : undefined,
          border: shellBorder,
          boxShadow: shellShadow,
        }}
      >
        <span
          className="grid h-5 w-[26px] place-items-center rounded-full transition duration-150"
          style={{
            background: theme === "light" ? activeBackground : "transparent",
            color: theme === "light" ? activeIcon : inactiveIcon,
          }}
        >
          <SunIcon />
        </span>

        <span
          className="grid h-5 w-[26px] place-items-center rounded-full transition duration-150"
          style={{
            background: theme === "dark" ? activeBackground : "transparent",
            color: theme === "dark" ? activeIcon : inactiveIcon,
          }}
        >
          <MoonIcon />
        </span>
      </button>
    </Magnetic>
  );
}
