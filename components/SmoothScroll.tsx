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
      lerp: 0.16,
      smoothWheel: true,
      wheelMultiplier: 0.82,
      overscroll: false,
      virtualScroll: (event) => {
        const maxDelta = 140;
        const deltaY = event.deltaY;

        if (Math.abs(deltaY) > maxDelta) {
          event.deltaY = Math.sign(deltaY) * maxDelta;
        }

        return true;
      },
      anchors: {
        offset: -88,
        duration: 0.58,
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
