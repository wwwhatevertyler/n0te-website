import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StoryScrollSection, { StoryClosingCTA } from "@/components/StoryScrollSection";

export const metadata: Metadata = {
  title: "Product Story — N0te",
  description:
    "A scroll-driven product story for N0te, the floating macOS note app for capturing thoughts before they disappear.",
};

export default function StoryPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-bg text-fg">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 22% 14%, color-mix(in srgb, var(--n0te-accent) 13%, transparent), transparent 34%), radial-gradient(circle at 82% 20%, color-mix(in srgb, var(--theme-ink) 8%, transparent), transparent 30%), var(--theme-page)",
        }}
        aria-hidden="true"
      />

      <header className="relative px-6 pb-14 pt-7 sm:px-8 sm:pb-16 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Story page navigation" className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl px-2.5 py-2 text-[13px] font-medium text-muted transition-colors duration-200 hover:bg-[color-mix(in_srgb,var(--theme-ink)_7%,transparent)] hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--theme-ink)]"
            >
              <Image
                src="/images/icon.png"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
                aria-hidden="true"
              />
              <span>Back to N0te</span>
            </Link>

            <p className="hidden font-jura text-[12px] font-semibold tracking-[0.18em] text-muted sm:block">
              /STORY
            </p>
          </nav>

          <div className="relative pt-16 sm:pt-20 lg:pt-24">
            <div
              className="pointer-events-none absolute -left-12 top-16 h-24 w-24 rounded-full opacity-70 blur-3xl"
              style={{
                background: "color-mix(in srgb, var(--n0te-accent) 22%, transparent)",
              }}
              aria-hidden="true"
            />

            <div className="max-w-4xl">
              <p className="font-jura text-[11px] font-medium uppercase tracking-widest text-muted">
                Product story
              </p>
              <h1 className="mt-5 max-w-4xl font-jura text-[clamp(2.7rem,6.2vw,4.5rem)] font-semibold leading-[1.04] tracking-tight text-fg">
                Capture the thought before your system asks where it belongs.
              </h1>
              <p className="mt-6 max-w-xl text-[15px] leading-7 text-muted sm:text-[16px]">
                N0te gives you a floating place to catch the raw thing first — then send it to
                Obsidian when it is ready to become part of your vault.
              </p>
            </div>
          </div>
        </div>
      </header>

      <StoryScrollSection />
      <StoryClosingCTA />
    </main>
  );
}
