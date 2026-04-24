"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { MotionConfig, useReducedMotion } from "framer-motion";
import Lenis from "lenis";

function SmoothScrollRoot({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.92,
      overscroll: true,
      anchors: {
        offset: -88,
        duration: 0.8,
      },
    });

    return () => {
      lenis.destroy();
    };
  }, [shouldReduceMotion]);

  return <>{children}</>;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScrollRoot>{children}</SmoothScrollRoot>
    </MotionConfig>
  );
}
