"use client";

import { MeshGradient } from "@paper-design/shaders-react";

export default function HeroShader({ className }: { className?: string }) {
  return (
    <MeshGradient
      className={className}
      colors={["#000000", "#111111", "#2a2a2a", "#c8c8c8", "#ffffff"]}
      speed={0.55}
      distortion={0.45}
      swirl={0.3}
      grainOverlay={0.04}
    />
  );
}
