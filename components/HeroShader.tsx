"use client";

import { useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { MeshGradient } from "@paper-design/shaders-react";
import { useSiteTheme } from "@/components/SiteThemeProvider";

const darkShaderColors = ["#0d0d0d", "#272625", "#53504a", "#ffffff"];
const lightShaderColors = ["#cfc7ba", "#e3dbcf", "#f8f1e6", "#ffffff"];

export default function HeroShader({ className }: { className?: string }) {
  const { theme } = useSiteTheme();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapperRef, { margin: "20% 0px 20% 0px" });
  const shouldReduceMotion = useReducedMotion();
  const speed = shouldReduceMotion || !isInView ? 0 : 0.32;

  return (
    <div ref={wrapperRef} className={className}>
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
