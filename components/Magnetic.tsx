"use client";

import type { PointerEvent, ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  maxOffset?: number;
  influence?: number;
};

const SPRING = {
  stiffness: 300,
  damping: 30,
  mass: 0.6,
} as const;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function Magnetic({
  children,
  className,
  maxOffset = 8,
  influence = 0.16,
}: MagneticProps) {
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING);
  const springY = useSpring(y, SPRING);

  function reset() {
    x.set(0);
    y.set(0);
  }

  function handlePointerMove(event: PointerEvent<HTMLSpanElement>) {
    if (shouldReduceMotion || event.pointerType !== "mouse") {
      reset();
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = clamp((event.clientX - centerX) * influence, -maxOffset, maxOffset);
    const offsetY = clamp((event.clientY - centerY) * influence, -maxOffset, maxOffset);

    x.set(offsetX);
    y.set(offsetY);
  }

  return (
    <motion.span
      data-magnetic
      className={className}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
      style={{ display: "inline-flex", x: springX, y: springY }}
    >
      {children}
    </motion.span>
  );
}
