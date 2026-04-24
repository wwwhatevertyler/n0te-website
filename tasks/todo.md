# N0te Website Task Log

## Plan
- Mount and tune Lenis so smooth scrolling actually runs and respects reduced motion.
- Tighten the highest-visibility motion moments: nav, hero, cards, and primary CTAs.
- Audit repeated messaging without changing the page structure.

## Progress
- [x] Reviewed repo instructions, product docs, and current page sections.
- [x] Identified that `components/SmoothScroll.tsx` exists but is not mounted in `app/layout.tsx`.
- [x] Implemented smooth scroll and motion polish.
- [x] Verified with type check and production build.
- [x] Added the app-side `docs/web-note-replica-spec.md` source reference.
- [x] Synced the web-facing note replica constants into `VISUAL_REFERENCE.md`.
- [x] Marked the fixed nav logo as eager-loaded after Next flagged it as the LCP image.
- [x] Added site-wide light/dark theme state controlled by the hero note toggle.
- [x] Added persisted theme choice and pre-hydration theme boot script.
- [x] Removed the radial theme wash so hero-note theme changes happen instantly.
- [x] Lightened the hero shader palettes for both dark and light theme states.

## Verification
- `./node_modules/.bin/tsc --noEmit`
- `npm run build`
- Build passed. Residual warning: `metadataBase` is not set in `app/layout.tsx`.
- Resumed after crash and re-ran `./node_modules/.bin/tsc --noEmit`.
- Resumed after crash and re-ran `npm run build`.
- Build passed. Residual warnings: `metadataBase` is not set, and Next inferred the workspace root from `/Users/whatevertyler/package-lock.json`.
- Opened `http://127.0.0.1:3000`; Next logged `GET / 200`.
- Browser console no longer reports the `/images/icon.png` LCP loading hint after eager-loading the nav logo.
- Remaining browser notice: hydration mismatch from a pre-hydration `body` style injection in the browser environment.
- Added hero-note theme toggle pass and re-ran `./node_modules/.bin/tsc --noEmit`.
- Added hero-note theme toggle pass and re-ran `npm run build`.
- Local dev page opened at `http://127.0.0.1:3000`; Next logged `GET / 200`.
- Changed the hero-note theme toggle to an instant swap and re-ran `./node_modules/.bin/tsc --noEmit`.
- Changed the hero-note theme toggle to an instant swap and re-ran `npm run build`.
- Lightened hero shader colors and re-ran `./node_modules/.bin/tsc --noEmit`.
- Lightened hero shader colors and re-ran `npm run build`.

## Result
- Lenis is mounted globally with reduced-motion handling and anchor support.
- High-visibility entrances and hover/press interactions now use shared motion tokens.
- Redundant messaging clusters are documented in the final handoff for content cleanup decisions.
- Obsidian Markdown preview card was restyled to match the quieter Finder-style card treatment.
- Hero badge restored to Free + Obsidian copy, hard-coded purple accents moved to shared system-accent tokens, and the hero note preview was rebuilt against native app metrics.
- Native app replica spec now exists at `/Users/whatevertyler/N0te/docs/web-note-replica-spec.md`; website summary points to it from `VISUAL_REFERENCE.md`.
- Hero note light/dark toggle now controls the website theme instantly and remembers the selected mode.
- Hero shader keeps its bright stop while using lifted charcoal tones in dark mode and warm material tones in light mode.
