"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Magnetic from "@/components/Magnetic";
import { DOWNLOAD_URL } from "@/lib/download";
import { EASE_OUT_SOFT, PRESS_TRANSITION } from "@/lib/motion";

type StoryStep = {
  id: string;
  kicker: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
};

const STORY_STEPS: StoryStep[] = [
  {
    id: "floating-capture",
    kicker: "Floating capture",
    title: "Start with the thought.",
    body:
      "The note is already there, hovering above your work. No new app, no file picker, no deciding where this belongs yet. Just catch the sentence before it softens.",
    imageSrc: "/story/frame-1.png",
    imageAlt: "N0te floating note in its idle capture state.",
  },
  {
    id: "voice-dictation",
    kicker: "Voice dictation",
    title: "Speak when typing would slow you down.",
    body:
      "Hit the mic and keep moving. N0te listens while the idea is still forming, turning quick spoken fragments into text without pulling you into a different workspace.",
    imageSrc: "/story/frame-2.png",
    imageAlt: "N0te listening in voice dictation mode.",
  },
  {
    id: "image-attachments",
    kicker: "Image attachments",
    title: "Drop in the thing that explains it.",
    body:
      "Screenshots, references, visual scraps, and UI details can stay with the thought. Add context without turning a quick note into a whole filing ritual.",
    imageSrc: "/story/frame-3.png",
    imageAlt: "N0te with an image or screenshot attachment being added.",
  },
  {
    id: "obsidian-export",
    kicker: "Obsidian export",
    title: "Send it where your memory lives.",
    body:
      "When the fragment is worth keeping, send it to Obsidian as clean Markdown. No cloud handoff, no second inbox, no reformatting later.",
    imageSrc: "/story/frame-4.png",
    imageAlt: "N0te sending a captured note to Obsidian.",
  },
  {
    id: "local-flow",
    kicker: "Local-first flow",
    title: "Then get back to the work.",
    body:
      "The capture layer fades back into the background. Your note, image, and context are saved locally, ready for your vault — while you stay in flow.",
    imageSrc: "/story/frame-5.png",
    imageAlt: "N0te showing a calm captured note with an image attachment.",
  },
];

function AppleMark() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function MissingFrame({ step }: { step: StoryStep }) {
  return (
    <div
      className="absolute inset-0 grid place-items-center px-8 text-center"
      style={{
        background:
          "linear-gradient(145deg, color-mix(in srgb, var(--theme-ink) 8%, transparent), color-mix(in srgb, var(--theme-page) 64%, transparent))",
      }}
    >
      <div className="max-w-[18rem]">
        <p className="font-jura text-[13px] font-semibold text-fg">{step.title}</p>
        <p className="mt-2 text-[12px] leading-5 text-muted">
          Product frame placeholder. Add <span className="text-fg/70">{step.imageSrc}</span> to
          preview this beat.
        </p>
      </div>
    </div>
  );
}

function ProductFrame({
  step,
  failed,
  onImageError,
  priority = false,
}: {
  step: StoryStep;
  failed: boolean;
  onImageError: (id: string) => void;
  priority?: boolean;
}) {
  return (
    <figure className="relative m-0">
      <div
        className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2.25rem]"
        style={{
          aspectRatio: "1.48 / 1",
          background: "var(--note-surface)",
          backdropFilter: "blur(40px) saturate(1.65)",
          WebkitBackdropFilter: "blur(40px) saturate(1.65)",
          border: "1px solid color-mix(in srgb, var(--theme-ink) 13%, transparent)",
          boxShadow:
            "0 34px 90px rgba(0,0,0,0.32), inset 0 1px 0 color-mix(in srgb, var(--theme-ink) 12%, transparent), inset 0 -1px 0 rgba(0,0,0,0.16)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{ background: "var(--note-sheen)" }}
          aria-hidden="true"
        />

        {failed ? (
          <MissingFrame step={step} />
        ) : (
          <Image
            src={step.imageSrc}
            alt={step.imageAlt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 560px, calc(100vw - 48px)"
            className="object-contain p-5 sm:p-7"
            onError={() => onImageError(step.id)}
          />
        )}
      </div>
    </figure>
  );
}

export default function StoryScrollSection() {
  const shouldReduceMotion = useReducedMotion();
  const stepRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeId, setActiveId] = useState(STORY_STEPS[0].id);
  const [failedImageIds, setFailedImageIds] = useState<Set<string>>(() => new Set());

  const activeIndex = Math.max(
    STORY_STEPS.findIndex((step) => step.id === activeId),
    0,
  );
  const activeStep = STORY_STEPS[activeIndex];

  const activeStepLabel = useMemo(
    () => `${String(activeIndex + 1).padStart(2, "0")} / ${String(STORY_STEPS.length).padStart(2, "0")}`,
    [activeIndex],
  );

  const handleImageError = useCallback((id: string) => {
    setFailedImageIds((current) => {
      if (current.has(id)) {
        return current;
      }

      const next = new Set(current);
      next.add(id);
      return next;
    });
  }, []);

  useEffect(() => {
    const nodes = stepRefs.current.filter(Boolean) as HTMLElement[];

    if (!nodes.length) {
      return;
    }

    const setActiveFromNode = (node: Element | null) => {
      const nextId = node?.getAttribute("data-story-id");
      if (nextId) {
        setActiveId(nextId);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const viewportCenter = window.innerHeight / 2;
        const centeredEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            const aCenter = a.boundingClientRect.top + a.boundingClientRect.height / 2;
            const bCenter = b.boundingClientRect.top + b.boundingClientRect.height / 2;
            return Math.abs(aCenter - viewportCenter) - Math.abs(bCenter - viewportCenter);
          })[0];

        if (centeredEntry) {
          setActiveFromNode(centeredEntry.target);
        }
      },
      {
        root: null,
        rootMargin: "-38% 0px -38% 0px",
        threshold: [0.12, 0.28, 0.44, 0.6],
      },
    );

    nodes.forEach((node) => observer.observe(node));

    const handleScroll = () => {
      const scrollBottom = window.scrollY + window.innerHeight;
      const pageBottom = document.documentElement.scrollHeight;

      if (pageBottom - scrollBottom < window.innerHeight * 0.34) {
        setActiveFromNode(nodes[nodes.length - 1]);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const frameMotion = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        initial: { opacity: 0, scale: 0.982, filter: "blur(10px)" },
        animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
        exit: { opacity: 0, scale: 1.012, filter: "blur(8px)" },
      };

  return (
    <section aria-label="N0te product story" className="relative px-6 pb-28 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[74rem]">
        <div className="hidden gap-16 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(390px,0.82fr)] xl:gap-20">
          <div className="relative">
            <div className="sticky top-12 flex min-h-screen items-center">
              <div className="relative w-full">
                <div
                  className="pointer-events-none absolute -inset-16 rounded-full opacity-70 blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle at 45% 45%, color-mix(in srgb, var(--n0te-accent) 18%, transparent), transparent 62%)",
                  }}
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-x-10 -bottom-10 h-24 rounded-full opacity-55 blur-2xl"
                  style={{
                    background:
                      "color-mix(in srgb, var(--theme-ink) 12%, transparent)",
                  }}
                  aria-hidden="true"
                />

                <div className="relative">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={activeStep.id}
                      {...frameMotion}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.32, ease: EASE_OUT_SOFT }}
                      className="relative"
                      style={{ willChange: shouldReduceMotion ? "auto" : "opacity, transform, filter" }}
                    >
                      <ProductFrame
                        step={activeStep}
                        failed={failedImageIds.has(activeStep.id)}
                        onImageError={handleImageError}
                        priority={activeIndex === 0}
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-6 flex items-center justify-between px-2">
                    <p className="font-jura text-[12px] font-semibold tracking-[0.16em] text-fg/55">
                      {activeStepLabel}
                    </p>
                    <p className="max-w-[18rem] truncate text-right text-[12px] text-muted">
                      {activeStep.kicker}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-[22vh]">
            {STORY_STEPS.map((step, index) => {
              const isActive = step.id === activeId;

              return (
                <article
                  key={step.id}
                  ref={(node) => {
                    stepRefs.current[index] = node;
                  }}
                  data-story-id={step.id}
                  aria-current={isActive ? "step" : undefined}
                  className="flex min-h-[74vh] items-center"
                >
                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0.48,
                      y: shouldReduceMotion || isActive ? 0 : 10,
                    }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: EASE_OUT_SOFT }}
                    className="max-w-[31rem]"
                  >
                    <p className="font-jura text-[12px] font-semibold tracking-[0.18em] text-muted">
                      {String(index + 1).padStart(2, "0")} / {step.kicker}
                    </p>
                    <h2 className="mt-4 text-[clamp(2.25rem,4.8vw,4.8rem)] font-semibold leading-[0.95] tracking-normal text-fg">
                      {step.title}
                    </h2>
                    <p className="mt-7 max-w-[34rem] text-[16px] leading-7 text-muted">{step.body}</p>
                  </motion.div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="space-y-20 lg:hidden">
          {STORY_STEPS.map((step, index) => (
            <article key={step.id} className="grid gap-7">
              <ProductFrame
                step={step}
                failed={failedImageIds.has(step.id)}
                onImageError={handleImageError}
                priority={index === 0}
              />
              <div>
                <p className="font-jura text-[12px] font-semibold tracking-[0.18em] text-muted">
                  {String(index + 1).padStart(2, "0")} / {step.kicker}
                </p>
                <h2 className="mt-3 text-[clamp(2rem,12vw,3.5rem)] font-semibold leading-[0.98] tracking-normal text-fg">
                  {step.title}
                </h2>
                <p className="mt-5 text-[15px] leading-7 text-muted">{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StoryClosingCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative px-6 pb-36 pt-4 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[74rem]">
        <div
          className="h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, color-mix(in srgb, var(--theme-ink) 14%, transparent), transparent)",
          }}
        />

        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: EASE_OUT_SOFT }}
          className="mx-auto flex max-w-2xl flex-col items-center pt-24 text-center"
        >
          <p className="font-jura text-[12px] font-semibold tracking-[0.18em] text-muted">
            FINAL STATE
          </p>
          <h2 className="mt-5 text-[clamp(2.25rem,6vw,5.25rem)] font-semibold leading-[0.95] tracking-normal text-fg">
            Built for the moment before structure.
          </h2>
          <p className="mt-7 max-w-md text-[15px] leading-7 text-muted">
            N0te is not another place to manage your notes. It is the quiet capture layer before
            Obsidian.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Magnetic>
              <motion.a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.015 }}
                whileTap={{ scale: 0.96 }}
                transition={PRESS_TRANSITION}
                className="inline-flex items-center gap-2.5 rounded-xl bg-[var(--theme-cta-bg)] px-5 py-2.5 text-[13px] font-semibold text-[var(--theme-cta-fg)] transition-colors duration-200 hover:bg-[var(--theme-cta-bg-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-ink)]"
              >
                <AppleMark />
                Download for macOS
              </motion.a>
            </Magnetic>

            <Magnetic maxOffset={6} influence={0.12}>
              <motion.a
                href="/"
                whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.015 }}
                whileTap={{ scale: 0.96 }}
                transition={PRESS_TRANSITION}
                className="inline-flex items-center rounded-xl px-5 py-2.5 text-[13px] font-medium text-muted transition-colors duration-200 hover:bg-[color-mix(in_srgb,var(--theme-ink)_7%,transparent)] hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-ink)]"
              >
                Back to home
              </motion.a>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
