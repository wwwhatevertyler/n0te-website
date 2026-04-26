"use client";

import Image from "next/image";
import SiteThemeToggle from "@/components/SiteThemeToggle";

const APP_STORE_URL = "https://apps.apple.com/app/id6743557889";

export default function Footer() {
  return (
    <footer
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
            <Image
              src="/images/n0te-landscape-waterfall.jpg"
              alt="Mountain landscape with waterfall"
              fill
              priority={false}
              sizes="(min-width: 1280px) 1088px, calc(100vw - 64px)"
              className="object-cover"
              style={{ objectPosition: "50% 54%" }}
            />
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
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-stage-link text-[13px] transition-colors"
                  >
                    Download
                  </a>
                  <a
                    href="mailto:hello@n0teapp.com"
                    className="footer-stage-link text-[13px] transition-colors"
                  >
                    Contact
                  </a>
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
    </footer>
  );
}
