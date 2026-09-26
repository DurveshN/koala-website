# Koala Website — Session Context

## What was built
- Initialized a new Next.js 16 + Tailwind CSS v4 + shadcn/ui project in `E:\hackathon\SIH\SIH 2026\website`.
- Created a single-page static marketing site for **Koala**, an on-premise, air-gapped agentic AI workbench for confidential industrial work.
- Site structure (mirrors the OpenCode landing-page skeleton): sticky nav, hero, trust bar, feature grid, how-it-works steps, model/task cards, download CTA, footer.

## Tech / design choices
- Dark, industrial-teal theme using custom CSS variables in `src/app/globals.css`.
- Fonts: **Syne** display headings, **Geist** body/mono.
- ReactBits components added via MCP source docs:
  - `Aurora` — WebGL background
  - `AnimatedContent` — GSAP scroll reveals
  - `GlareHover` — feature-card hover sheen
  - `Magnet` — magnetic download buttons
- shadcn Button used for CTAs; custom anchors handled through Base UI's `render` prop.

## Static export
- Configured `output: "export"` in `next.config.ts`.
- Build output goes to `dist/`.
- Dummy Windows installer: `public/koala-setup.exe` (copies to `dist/koala-setup.exe`).

## Verification
- `npm run build` completes with `Static` prerender of `/`.
- Screenshot preview confirmed hero + feature cards render correctly.

## Next steps if revisiting
- Replace dummy `public/koala-setup.exe` with a real installer.
- Add real product screenshots/illustrations in place of the CSS placeholder graphics.
- Add a docs page and wire up footer/resource links.
