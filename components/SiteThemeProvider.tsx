"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export type SiteTheme = "dark" | "light";

type ThemeOrigin = HTMLElement | DOMRect;

type SiteThemeContextValue = {
  theme: SiteTheme;
  setTheme: (nextTheme: SiteTheme, origin?: ThemeOrigin | null) => void;
};

const STORAGE_KEY = "n0te-site-theme";
const SiteThemeContext = createContext<SiteThemeContextValue | null>(null);

function getStoredTheme(): SiteTheme {
  if (typeof window === "undefined") {
    return "dark";
  }

  return window.localStorage.getItem(STORAGE_KEY) === "light" ? "light" : "dark";
}

function originPoint(origin?: ThemeOrigin | null) {
  if (typeof window === "undefined") {
    return { x: "50vw", y: "38vh" };
  }

  const rect =
    origin instanceof HTMLElement ? origin.getBoundingClientRect() : origin ?? null;

  if (!rect) {
    return { x: "50vw", y: "38vh" };
  }

  return {
    x: `${rect.left + rect.width / 2}px`,
    y: `${rect.top + rect.height / 2}px`,
  };
}

export function SiteThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<SiteTheme>("dark");
  const [wash, setWash] = useState<null | { id: number; theme: SiteTheme }>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const storedTheme = getStoredTheme();
    setThemeState(storedTheme);
    document.documentElement.dataset.siteTheme = storedTheme;
  }, []);

  const setTheme = useCallback(
    (nextTheme: SiteTheme, origin?: ThemeOrigin | null) => {
      const point = originPoint(origin);
      const root = document.documentElement;

      root.style.setProperty("--theme-origin-x", point.x);
      root.style.setProperty("--theme-origin-y", point.y);
      root.dataset.siteTheme = nextTheme;
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
      setThemeState(nextTheme);

      if (!shouldReduceMotion) {
        setWash({ id: Date.now(), theme: nextTheme });
      }
    },
    [shouldReduceMotion],
  );

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <SiteThemeContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {wash ? (
          <motion.div
            key={wash.id}
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[9999]"
            style={{
              background:
                wash.theme === "light"
                  ? "radial-gradient(circle at var(--theme-origin-x) var(--theme-origin-y), rgba(252,250,244,0.98) 0%, rgba(248,245,238,0.82) 28%, rgba(248,245,238,0.36) 52%, transparent 74%)"
                  : "radial-gradient(circle at var(--theme-origin-x) var(--theme-origin-y), rgba(17,17,17,0.98) 0%, rgba(17,17,17,0.82) 28%, rgba(17,17,17,0.36) 52%, transparent 74%)",
              mixBlendMode: wash.theme === "light" ? "normal" : "multiply",
            }}
            initial={{ clipPath: "circle(0% at var(--theme-origin-x) var(--theme-origin-y))", opacity: 0.92 }}
            animate={{ clipPath: "circle(150% at var(--theme-origin-x) var(--theme-origin-y))", opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.78, ease: [0.16, 1, 0.3, 1] }}
            onAnimationComplete={() => setWash(null)}
          />
        ) : null}
      </AnimatePresence>
    </SiteThemeContext.Provider>
  );
}

export function useSiteTheme() {
  const context = useContext(SiteThemeContext);

  if (!context) {
    throw new Error("useSiteTheme must be used inside SiteThemeProvider");
  }

  return context;
}

