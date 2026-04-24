export const EASE_OUT = [0.23, 1, 0.32, 1] as const;
export const EASE_OUT_SOFT = [0.16, 1, 0.3, 1] as const;

export const PRESS_TRANSITION = {
  type: "spring",
  stiffness: 420,
  damping: 30,
  mass: 0.8,
} as const;

export const REVEAL_VIEWPORT = {
  once: true,
  margin: "-96px 0px -96px",
} as const;
