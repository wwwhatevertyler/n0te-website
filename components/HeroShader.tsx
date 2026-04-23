"use client";

import { MeshGradient } from "@paper-design/shaders-react";

export default function HeroShader({ className }: { className?: string }) {
  return (
    <MeshGradient
      className={className}
      colors={["#000000", "#1a1a1a", "#333333", "#ffffff"]}
      speed={1.0}
      distortion={0.8}
      swirl={0.1}
      grainOverlay={0.0}
    />
  );
}
