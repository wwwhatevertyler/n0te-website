"use client";

import type { CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";
import { MeshGradient } from "@paper-design/shaders-react";
import { useSiteTheme } from "@/components/SiteThemeProvider";

const darkShaderColors = ["#0d0d0d", "#272625", "#53504a", "#ffffff"];
const lightShaderColors = ["#cfc7ba", "#e3dbcf", "#f8f1e6", "#ffffff"];

export default function HeroShader({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  const { theme } = useSiteTheme();
  const shouldReduceMotion = useReducedMotion();
  const speed = shouldReduceMotion ? 0 : 1.0;

  return (
    <div className={className} style={style}>
      <MeshGradient
        className="h-full w-full"
        colors={theme === "light" ? lightShaderColors : darkShaderColors}
        speed={speed}
        distortion={0.8}
        swirl={0.1}
        grainOverlay={0.0}
        maxPixelCount={900000}
      />
    </div>
  );
}
