"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import {
  type CSSProperties,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import Magnetic from "@/components/Magnetic";
import SiteThemeToggle from "@/components/SiteThemeToggle";
import { DOWNLOAD_URL } from "@/lib/download";
import { EASE_OUT, EASE_OUT_SOFT, PRESS_TRANSITION } from "@/lib/motion";

const CONTACT_EMAIL = "tylermathewsuggs@gmail.com";
const CONTACT_EXIT_TRANSITION = { duration: 0.11, ease: EASE_OUT } as const;
const FOOTER_SCROLL_SCALE_MAX = 1.055;

const contactModalStyle: CSSProperties = {
  width: "min(356px, calc(100vw - 40px))",
  borderRadius: 30,
  background: "var(--note-surface)",
  backgroundClip: "padding-box",
  backdropFilter: "blur(44px) saturate(1.85) brightness(1.08)",
  WebkitBackdropFilter: "blur(44px) saturate(1.85) brightness(1.08)",
  border: 0,
  boxShadow:
    "var(--note-shadow), 0 26px 72px rgba(0,0,0,0.28), inset 0 1px 0 color-mix(in srgb, white 8%, transparent)",
  isolation: "isolate",
};

const chromeButtonStyle: CSSProperties = {
  background: "var(--note-control-fill)",
  border: "0.5px solid var(--note-control-border)",
  boxShadow: "inset 0 1px 0 var(--note-control-highlight)",
  color: "var(--note-control-icon)",
};

function CloseIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
      <path
        d="M2.05 2.05l4.9 4.9M6.95 2.05l-4.9 4.9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <rect
        x="4.15"
        y="3.15"
        width="5.35"
        height="5.35"
        rx="1.35"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M2.5 6.8V3.55C2.5 2.97 2.97 2.5 3.55 2.5H6.8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M2.6 6.1l2.15 2.15L9.4 3.65"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
    </svg>
  );
}

async function copyEmailToClipboard() {
  try {
    await navigator.clipboard.writeText(CONTACT_EMAIL);
    return true;
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = CONTACT_EMAIL;
    textarea.setAttribute("readonly", "true");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "0";
    document.body.appendChild(textarea);
    textarea.select();

    const copied = document.execCommand("copy");
    textarea.remove();
    return copied;
  }
}

function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const copyButtonRef = useRef<HTMLButtonElement>(null);
  const resetTimerRef = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    if (!open) {
      return;
    }

    setCopyState("idle");

    const focusFrame = window.requestAnimationFrame(() => {
      copyButtonRef.current?.focus({ preventScroll: true });
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.cancelAnimationFrame(focusFrame);
    };
  }, [onClose, open]);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    if (resetTimerRef.current) {
      window.clearTimeout(resetTimerRef.current);
    }

    const copied = await copyEmailToClipboard();
    setCopyState(copied ? "copied" : "failed");

    resetTimerRef.current = window.setTimeout(() => {
      setCopyState("idle");
    }, 1800);
  };

  const contentMotion = reduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        initial: { opacity: 0, y: 14, scale: 0.965 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 8, scale: 0.985 },
      };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[80] flex items-end justify-center px-5 pb-8 sm:items-center sm:pb-0"
          initial={false}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={
            reduceMotion
              ? { opacity: 0, transition: { duration: 0 } }
              : { opacity: 0, y: 4, scale: 0.995, transition: CONTACT_EXIT_TRANSITION }
          }
        >
          <div
            aria-labelledby={titleId}
            className="pointer-events-auto relative overflow-hidden px-3.5 py-3.5"
            role="dialog"
            style={contactModalStyle}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "var(--note-sheen)" }}
            />

            <motion.div
              {...contentMotion}
              transition={{ duration: reduceMotion ? 0 : 0.22, ease: EASE_OUT_SOFT }}
              className="relative flex items-center gap-3"
            >
              <Magnetic className="shrink-0">
                <motion.button
                  ref={closeButtonRef}
                  type="button"
                  aria-label="Close contact modal"
                  onClick={onClose}
                  whileHover={reduceMotion ? undefined : { y: -1, scale: 1.02 }}
                  whileTap={{ scale: 0.94 }}
                  transition={PRESS_TRANSITION}
                  className="grid h-6 w-6 shrink-0 place-items-center rounded-full"
                  style={chromeButtonStyle}
                >
                  <CloseIcon />
                </motion.button>
              </Magnetic>

              <div className="min-w-0 flex-1">
                <p
                  id={titleId}
                  className="font-jura text-[10px] leading-none"
                  style={{ color: "var(--note-title)" }}
                >
                  Contact
                </p>
                <p
                  className="mt-1 select-all truncate font-jura text-[13px] leading-none"
                  style={{ color: "var(--note-placeholder)" }}
                >
                  {CONTACT_EMAIL}
                </p>
              </div>

              <Magnetic className="shrink-0">
                <motion.button
                  ref={copyButtonRef}
                  type="button"
                  aria-label={`Copy ${CONTACT_EMAIL}`}
                  onClick={handleCopy}
                  whileHover={reduceMotion ? undefined : { y: -1, scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  transition={PRESS_TRANSITION}
                  className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full px-3 font-jura text-[11px]"
                  style={{
                    ...chromeButtonStyle,
                    color:
                      copyState === "copied"
                        ? "var(--n0te-accent)"
                        : copyState === "failed"
                          ? "color-mix(in srgb, var(--theme-ink) 64%, transparent)"
                          : "var(--note-control-icon)",
                  }}
                >
                  {copyState === "copied" ? <CheckIcon /> : <CopyIcon />}
                  {copyState === "copied" ? "Copied" : copyState === "failed" ? "Retry" : "Copy"}
                </motion.button>
              </Magnetic>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [shouldRestoreFocus, setShouldRestoreFocus] = useState(false);
  const contactTriggerRef = useRef<HTMLButtonElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start 92%", "end end"],
  });
  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, FOOTER_SCROLL_SCALE_MAX]);
  const bgScale = shouldReduceMotion ? 1 : scrollScale;

  const openContactModal = useCallback(() => {
    setIsContactOpen(true);
  }, []);

  const closeContactModal = useCallback(() => {
    setIsContactOpen(false);
    setShouldRestoreFocus(true);
  }, []);

  useEffect(() => {
    if (isContactOpen || !shouldRestoreFocus) {
      return;
    }

    const focusFrame = window.requestAnimationFrame(() => {
      contactTriggerRef.current?.focus({ preventScroll: true });
      setShouldRestoreFocus(false);
    });

    return () => {
      window.cancelAnimationFrame(focusFrame);
    };
  }, [isContactOpen, shouldRestoreFocus]);

  return (
    <footer
      ref={footerRef}
      data-footer-dock
      className="footer-stage relative px-6 pb-[120px] sm:px-8 sm:pb-[120px] lg:px-10 lg:pb-[120px]"
    >
      <div className="mx-auto max-w-[68rem]">
        <div
          className="relative isolate overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]"
          style={{
            border: "1px solid color-mix(in srgb, var(--theme-ink) 10%, transparent)",
            boxShadow:
              "inset 0 1px 0 color-mix(in srgb, var(--theme-ink) 12%, transparent), 0 28px 80px rgba(0,0,0,0.18)",
          }}
        >
          <div className="absolute inset-0 z-0">
            <motion.div
              className="absolute inset-0"
              style={{ scale: bgScale }}
            >
              <Image
                src="/images/n0te-landscape-waterfall.jpg"
                alt="Mountain landscape with waterfall"
                fill
                priority={false}
                sizes="(min-width: 1280px) 1088px, calc(100vw - 64px)"
                className="object-cover"
                style={{ objectPosition: "50% 54%" }}
              />
            </motion.div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(var(--theme-page-rgb),0.12) 0%, rgba(var(--theme-page-rgb),0.20) 28%, rgba(var(--theme-page-rgb),0.30) 100%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 88% 70% at 18% 20%, rgba(var(--theme-page-rgb),0.08) 0%, transparent 58%), radial-gradient(ellipse 78% 60% at 50% 100%, rgba(var(--theme-page-rgb),0.12) 0%, transparent 72%)",
              }}
            />
          </div>

          <div className="pointer-events-none relative z-20 flex min-h-[420px] items-end px-6 pb-10 pt-14 sm:min-h-[440px] sm:px-8 sm:pb-10 lg:px-10 lg:pb-12 lg:pt-16">
            <div className="pointer-events-auto w-full">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-[280px]">
                  <div className="flex items-center gap-3">
                    <Image src="/images/icon.png" alt="N0te" width={24} height={24} className="h-6 w-6" />
                    <span className="footer-stage-brand font-jura text-[15px] font-semibold">
                      N0te
                    </span>
                    <SiteThemeToggle variant="footer" className="ml-1" />
                  </div>

                  <p className="footer-stage-copy mt-4 max-w-[24ch] text-[13px] leading-relaxed">
                    The capture layer before Obsidian.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-left sm:flex sm:flex-wrap sm:justify-start sm:gap-x-8 sm:gap-y-3 lg:justify-end">
                  <a
                    href="#features"
                    className="footer-stage-link text-[13px] transition-colors"
                  >
                    Features
                  </a>
                  <a
                    href="#pricing"
                    className="footer-stage-link text-[13px] transition-colors"
                  >
                    Pricing
                  </a>
                  <a
                    href={DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-stage-link text-[13px] transition-colors"
                  >
                    Download
                  </a>
                  <button
                    ref={contactTriggerRef}
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded={isContactOpen}
                    onClick={openContactModal}
                    className="footer-stage-link appearance-none bg-transparent p-0 text-left text-[13px] transition-colors"
                  >
                    Contact
                  </button>
                </div>
              </div>

              <div
                data-footer-divider
                className="footer-stage-divider mt-10 flex flex-col gap-3 border-t pt-5 sm:mt-12 sm:flex-row sm:items-center sm:justify-between"
              >
                <p className="footer-stage-heading text-[11px]">
                  © {new Date().getFullYear()} N0te. Built for macOS.
                </p>
                <a
                  href="https://tylermathewsuggs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-stage-link text-[11px] transition-colors"
                >
                  Created by Tyler Mathew Suggs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal open={isContactOpen} onClose={closeContactModal} />
    </footer>
  );
}
