"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { useSiteTheme } from "@/components/SiteThemeProvider";

const darkShaderColors = ["#0d0d0d", "#272625", "#53504a", "#ffffff"];
const lightShaderColors = ["#cfc7ba", "#e3dbcf", "#f8f1e6", "#ffffff"];

export default function HeroShader({ className }: { className?: string }) {
  const { theme } = useSiteTheme();

  return (
    <MeshGradient
      className={className}
      colors={theme === "light" ? lightShaderColors : darkShaderColors}
      speed={1.0}
      distortion={0.8}
      swirl={0.1}
      grainOverlay={0.0}
    />
  );
}
