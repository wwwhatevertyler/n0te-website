# N0te Website — Agent Instructions

This repo is the website workspace for N0te. It is a separate project from the native macOS app.

## Project Separation

- `/Users/whatevertyler/N0te` = native app source of truth
- `/Users/whatevertyler/n0te-website` = website source of truth

Do not mix app implementation context into website work unless the website task explicitly needs it.

## What To Read First

Before doing website work, prefer these local docs in this repo:

1. `PRODUCT_BRIEF.md`
2. `MESSAGING.md`
3. `VISUAL_REFERENCE.md`

Only go into the app repo when the website docs are missing something important.

## App Repo Reference Rules

When the website needs upstream product truth, prefer these app-side sources in this order:

1. `/Users/whatevertyler/N0te/DESIGN.md`
2. `/Users/whatevertyler/N0te/tasks/todo.md`
3. `/Users/whatevertyler/N0te/docs/N0te-master-strategy.md`

Do not use Swift/AppKit source as the primary input for website messaging unless a website claim depends on verifying an implementation detail.

Do not import or mirror:

- `/Users/whatevertyler/N0te/tasks/lessons.md`
- `/Users/whatevertyler/N0te/tasks/handoff-new-chat.md`
- app verification commands
- app architecture rules unless a web page or demo specifically depends on them

## Website Direction

- Treat N0te as a premium Mac utility, not generic SaaS.
- The site should explain the capture value clearly and quickly.
- Obsidian is the durable system. N0te is the capture layer before it.
- Avoid startup hype, AI slop, and all-in-one productivity framing.
- Keep web work aligned with the product docs before changing layout or copy.

## Update Rule

If product positioning changes, update `PRODUCT_BRIEF.md`, `MESSAGING.md`, and `VISUAL_REFERENCE.md` first. Then redesign or rewrite sections.

This repo uses manual snapshots from the app repo, not automated sync.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
