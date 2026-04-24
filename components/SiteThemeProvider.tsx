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

export type SiteTheme = "dark" | "light";

type SiteThemeContextValue = {
  theme: SiteTheme;
  setTheme: (nextTheme: SiteTheme) => void;
};

const STORAGE_KEY = "n0te-site-theme";
const SiteThemeContext = createContext<SiteThemeContextValue | null>(null);

function getStoredTheme(): SiteTheme {
  if (typeof window === "undefined") {
    return "dark";
  }

  return window.localStorage.getItem(STORAGE_KEY) === "light" ? "light" : "dark";
}

export function SiteThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<SiteTheme>("dark");

  useEffect(() => {
    const storedTheme = getStoredTheme();
    setThemeState(storedTheme);
    document.documentElement.dataset.siteTheme = storedTheme;
  }, []);

  const setTheme = useCallback((nextTheme: SiteTheme) => {
    document.documentElement.dataset.siteTheme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    setThemeState(nextTheme);
  }, []);

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <SiteThemeContext.Provider value={value}>
      {children}
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
