# N0te Visual Reference

Source repo: `/Users/whatevertyler/N0te`  
Last synced: `2026-04-22`  
App commit: `d398de10466b8609357cb213b685ecb098afb4ba`

## Visual Traits To Preserve

N0te should feel:

- calm
- sharp
- tactile
- premium
- native to macOS
- lightweight and always-close-at-hand

Core traits:

- dark translucent surfaces with disciplined rounded corners
- floating-object composition rather than flat app screenshots in browser frames
- restrained grayscale palette with subtle material depth
- Jura as the signature type direction from the app brand
- small magnetic controls and polished microinteractions
- asymmetry and quiet tension, not generic centered SaaS stacks

## What The Website Should Show

Preferred visual narrative:

- N0te floating over real work
- real desktop context such as coding, design, browser research, or writing
- the note as a small object inside a broader workspace
- clear before-and-after relationship between rough capture and durable vault storage

Website hero direction from product strategy:

- show N0te over real work, not just wallpaper
- emphasize the value of avoiding context switching
- make the note feel like a desktop companion, not an abstract web product card

## Assets And Screenshots To Use

App-side assets currently available:

- `/Users/whatevertyler/N0te/Sources/N0te/Resources/n0te-app-icon-for-mac-os.png`
- `/Users/whatevertyler/N0te/Sources/N0te/Resources/n0te-icon-for-toolbar.png`
- `/Users/whatevertyler/N0te/Sources/N0te/Resources/n0te-icon-for-obsidian-export.png`
- `/Users/whatevertyler/N0te/Sources/N0te/Resources/Onboarding/Frame 1.png`
- `/Users/whatevertyler/N0te/Sources/N0te/Resources/Onboarding/Frame 2.png`
- `/Users/whatevertyler/N0te/Sources/N0te/Resources/Onboarding/Frame 3.png`
- `/Users/whatevertyler/N0te/Sources/N0te/Resources/Onboarding/Frame 4.png`
- `/Users/whatevertyler/N0te/Sources/N0te/Resources/Onboarding/Frame 5.png`

Other root-level visual references currently present in the app repo:

- `/Users/whatevertyler/N0te/Frame 1.png`
- `/Users/whatevertyler/N0te/Frame 2.png`
- `/Users/whatevertyler/N0te/Frame 3.png`
- `/Users/whatevertyler/N0te/Frame 4.png`
- `/Users/whatevertyler/N0te/Frame 5.png`
- `/Users/whatevertyler/N0te/new-logo-for-n0te-3.png`

Use these as source references. Do not treat them as automatically web-ready final assets.

## Traits The Website Must Avoid

Avoid:

- generic SaaS dashboards
- bright startup gradients as the main visual identity
- browser-window mockups as the only framing device
- over-explaining the UI
- turning the product into a card stack inside more cards
- purple AI-product aesthetics
- beige lifestyle productivity aesthetics
- loud glassmorphism gimmicks that feel decorative rather than structural

The website should not look like a landing page template with N0te screenshots dropped in.

## Translating The App Into Web

The app is a floating desktop object. The website should translate that into a narrative about interruption, capture, and return to flow.

Good translation moves:

- show a single note floating over believable desktop context
- keep strong negative space around the note so it reads as an object
- let screenshots or motion demonstrate “capture now, organize later”
- use the note itself as the hero object, not a generic marketing illustration

Bad translation moves:

- flattening the note into a generic product card
- surrounding the note with too many badges, pills, and feature chips
- relying on web-only visual metaphors that have nothing to do with the app

## Web Note Replica Spec

App-side narrow spec:

- `/Users/whatevertyler/N0te/docs/web-note-replica-spec.md`

Source files:

- `/Users/whatevertyler/N0te/Sources/N0te/UI/NoteView.swift`
- `/Users/whatevertyler/N0te/Sources/N0te/UI/GlassSurface.swift`
- `/Users/whatevertyler/N0te/Sources/N0te/UI/WindowIconButton.swift`
- `/Users/whatevertyler/N0te/Sources/N0te/UI/ThemeToggle.swift`
- `/Users/whatevertyler/N0te/Sources/N0te/UI/NativeNoteEditor.swift`
- `/Users/whatevertyler/N0te/Sources/N0te/Models/WindowStyleConfiguration.swift`

Replica constants:

- Note frame: 300 x 208
- Corner radius: 38
- Surface padding: 20
- Header height: 24
- Editor top padding: 14
- Title slot: height 24, top padding 10, bottom padding 1, visual y offset 4
- Round controls: 24 x 24, 8px gap
- Theme toggle: 58 x 24, 26 x 20 options, hidden until note hover
- Editor font: Jura 15
- Default title for website preview: `Mineral Horizon`

The website should use a React replica, not SwiftUI/AppKit runtime sharing. Keep the replica synchronized from the native metrics and real assets, especially the Obsidian export PNG.

## Accent Color Rule

Native N0te uses `NSColor.controlAccentColor` for meaningful active states such as microphone activity and selected/status highlights. The website equivalent is `--n0te-accent`, which uses CSS `AccentColor` where supported and falls back to N0te purple. Use accent sparingly for the hero badge dot, active/status highlights, and the positive “With N0te” emphasis state.

## Design Defaults For Future Web Work

If a website visual decision is unclear, default to:

- object-led composition
- editorial restraint
- real product imagery over decorative abstraction
- dark premium Mac utility tone
- one strong hero moment over many equal visual ideas
