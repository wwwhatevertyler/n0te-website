"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { preload } from "react-dom";
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
    imageSrc: "/images%20for%20website/Frame%2021.png",
    imageAlt: "N0te floating note in its idle capture state.",
  },
  {
    id: "voice-dictation",
    kicker: "Voice dictation",
    title: "Speak when typing would slow you down.",
    body:
      "Hit the mic and keep moving. N0te listens while the idea is still forming, turning quick spoken fragments into text without pulling you into a different workspace.",
    imageSrc: "/images%20for%20website/Frame%2026.png",
    imageAlt: "N0te listening in voice dictation mode.",
  },
  {
    id: "image-attachments",
    kicker: "Image attachments",
    title: "Drop in the thing that explains it.",
    body:
      "Screenshots, references, visual scraps, and UI details can stay with the thought. Add context without turning a quick note into a whole filing ritual.",
    imageSrc: "/images%20for%20website/Frame%2027.png",
    imageAlt: "N0te with an image or screenshot attachment being added.",
  },
  {
    id: "obsidian-export",
    kicker: "Obsidian export",
    title: "Send it where your memory lives.",
    body:
      "When the fragment is worth keeping, send it to Obsidian as clean Markdown. No cloud handoff, no second inbox, no reformatting later.",
    imageSrc: "/images%20for%20website/Frame%2028.png",
    imageAlt: "N0te sending a captured note to Obsidian.",
  },
  {
    id: "local-flow",
    kicker: "Local-first flow",
    title: "Then get back to the work.",
    body:
      "The capture layer fades back into the background. Your note, image, and context are saved locally, ready for your vault — while you stay in flow.",
    imageSrc: "/images%20for%20website/Frame%2029.png",
    imageAlt: "N0te showing a calm captured note with an image attachment.",
  },
];

const STORY_IMAGE_SIZES = "(min-width: 1024px) 528px, calc(100vw - 48px)";

function preloadStoryFrames() {
  STORY_STEPS.forEach((step, index) => {
    preload(step.imageSrc, {
      as: "image",
      fetchPriority: index === 0 ? "high" : "auto",
    });
  });
}

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
  onImageLoad,
  onImageError,
  priority = false,
}: {
  step: StoryStep;
  failed: boolean;
  onImageLoad: (id: string) => void;
  onImageError: (id: string) => void;
  priority?: boolean;
}) {
  return (
    <figure className="relative m-0">
      <div
        className="relative overflow-hidden rounded-[18px]"
        style={{
          aspectRatio: "1056 / 790",
          background: "transparent",
        }}
      >
        {failed ? (
          <MissingFrame step={step} />
        ) : (
          <Image
            src={step.imageSrc}
            alt={step.imageAlt}
            fill
            priority={priority}
            unoptimized
            sizes={STORY_IMAGE_SIZES}
            className="object-cover"
            onLoad={() => onImageLoad(step.id)}
            onError={() => onImageError(step.id)}
          />
        )}
      </div>
    </figure>
  );
}

export default function StoryScrollSection({ compactEnd = false }: { compactEnd?: boolean }) {
  preloadStoryFrames();

  const shouldReduceMotion = useReducedMotion();
  const stepRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeId, setActiveId] = useState(STORY_STEPS[0].id);
  const [displayedId, setDisplayedId] = useState(STORY_STEPS[0].id);
  const [loadedImageIds, setLoadedImageIds] = useState<Set<string>>(() => new Set());
  const [failedImageIds, setFailedImageIds] = useState<Set<string>>(() => new Set());

  const displayedIndex = Math.max(
    STORY_STEPS.findIndex((step) => step.id === displayedId),
    0,
  );
  const displayedStep = STORY_STEPS[displayedIndex];

  const activeStepLabel = useMemo(
    () => `${String(displayedIndex + 1).padStart(2, "0")} / ${String(STORY_STEPS.length).padStart(2, "0")}`,
    [displayedIndex],
  );

  const handleImageLoad = useCallback((id: string) => {
    setLoadedImageIds((current) => {
      if (current.has(id)) {
        return current;
      }

      const next = new Set(current);
      next.add(id);
      return next;
    });
  }, []);

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
    let isMounted = true;
    const preloaders = STORY_STEPS.map((step) => {
      const image = new window.Image();
      image.decoding = "async";
      image.onload = () => {
        const decode = image.decode?.();

        if (decode) {
          void decode.then(
            () => {
              if (isMounted) {
                handleImageLoad(step.id);
              }
            },
            () => {
              if (isMounted) {
                handleImageLoad(step.id);
              }
            },
          );
          return;
        }

        if (isMounted) {
          handleImageLoad(step.id);
        }
      };
      image.onerror = () => {
        if (isMounted) {
          handleImageError(step.id);
        }
      };
      image.src = step.imageSrc;
      return image;
    });

    return () => {
      isMounted = false;
      preloaders.forEach((image) => {
        image.onload = null;
        image.onerror = null;
      });
    };
  }, [handleImageError, handleImageLoad]);

  useEffect(() => {
    if (
      activeId === STORY_STEPS[0].id ||
      loadedImageIds.has(activeId) ||
      failedImageIds.has(activeId)
    ) {
      setDisplayedId(activeId);
    }
  }, [activeId, failedImageIds, loadedImageIds]);

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

  return (
    <section aria-label="N0te product story" className="relative px-6 pb-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[68rem]">
        <div className="hidden gap-12 lg:grid lg:grid-cols-[minmax(0,33rem)_minmax(360px,1fr)] xl:gap-16">
          <div className="relative">
            <div
              className={
                compactEnd
                  ? "sticky top-[calc(50svh-13rem)] flex items-center"
                  : "sticky top-12 flex min-h-screen items-center"
              }
            >
              <div className="relative w-full max-w-[33rem]">
                <div className="relative">
                  <ProductFrame
                    key={displayedStep.id}
                    step={displayedStep}
                    failed={failedImageIds.has(displayedStep.id)}
                    onImageLoad={handleImageLoad}
                    onImageError={handleImageError}
                    priority={displayedIndex === 0}
                  />

                  <div className="mt-4 flex items-center justify-between px-1">
                    <p className="font-jura text-[11px] font-semibold tracking-[0.16em] text-fg/55">
                      {activeStepLabel}
                    </p>
                    <p className="max-w-[16rem] truncate text-right font-jura text-[11px] font-medium uppercase tracking-widest text-muted">
                      {displayedStep.kicker}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-[16vh]">
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
                  className="flex min-h-[62vh] items-center"
                >
                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0.48,
                      y: shouldReduceMotion || isActive ? 0 : 10,
                    }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: EASE_OUT_SOFT }}
                    className="max-w-[31rem]"
                  >
                    <p className="font-jura text-[11px] font-medium uppercase tracking-widest text-muted">
                      {String(index + 1).padStart(2, "0")} / {step.kicker}
                    </p>
                    <h2 className="mt-4 font-jura text-[42px] font-semibold leading-[1.08] tracking-tight text-fg">
                      {step.title}
                    </h2>
                    <p className="mt-5 max-w-[30rem] text-[15px] leading-7 text-muted">
                      {step.body}
                    </p>
                  </motion.div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="space-y-16 lg:hidden">
          {STORY_STEPS.map((step, index) => (
            <article key={step.id} className="grid gap-5">
              <ProductFrame
                step={step}
                failed={failedImageIds.has(step.id)}
                onImageLoad={handleImageLoad}
                onImageError={handleImageError}
                priority={index === 0}
              />
              <div>
                <p className="font-jura text-[11px] font-medium uppercase tracking-widest text-muted">
                  {String(index + 1).padStart(2, "0")} / {step.kicker}
                </p>
                <h2 className="mt-3 font-jura text-[34px] font-semibold leading-[1.08] tracking-tight text-fg">
                  {step.title}
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">{step.body}</p>
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
    <section className="relative px-6 pb-28 pt-0 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl">
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
          className="mx-auto flex max-w-xl flex-col items-center pt-20 text-center"
        >
          <p className="font-jura text-[11px] font-medium uppercase tracking-widest text-muted">
            FINAL STATE
          </p>
          <h2 className="mt-5 font-jura text-[36px] font-semibold leading-[1.08] tracking-tight text-fg sm:text-[46px]">
            Built for the moment before structure.
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-7 text-muted">
            N0te is not another place to manage your notes. It is the quiet capture layer before
            Obsidian.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
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
