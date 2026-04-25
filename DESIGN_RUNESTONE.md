---
version: alpha
name: Runestone
description: Browsable design identity library for the Sanctum + Bifrost system
rune: press@1.0.0
namespace: pr
instanced: 2026-04-24
instanced_by: design/curator
test_sentence: "Does this look like it was printed by someone who knows exactly what they're doing?"

colors:
  surface-bg: "oklch(97% 0.003 100)"
  surface: "oklch(100% 0 0)"
  surface-mid: "oklch(94% 0.004 100)"
  surface-dark: "oklch(13% 0.005 60)"
  text-primary: "oklch(13% 0.005 60)"
  text-secondary: "oklch(38% 0.008 60)"
  text-tertiary: "oklch(64% 0.008 60)"
  text-inverse: "oklch(97% 0.003 100)"
  accent-orange: "oklch(57% 0.205 38)"
  accent-orange-dim: "oklch(57% 0.205 38 / 0.08)"
  border: "oklch(13% 0.005 60)"
  border-mid: "oklch(80% 0.006 100)"
  border-light: "oklch(88% 0.005 100)"
  radius-control: "0px"
  focus-ring: "{colors.accent-orange}"
  focus-ring-soft: "{colors.accent-orange-dim}"
  structure: "{colors.accent-orange}"
  foreground-subtle: "{colors.text-tertiary}"

typography:
  display:
    fontFamily: "'Syne', sans-serif"
    fontSize: "clamp(32px, 6vw, 72px)"
    fontWeight: 800
    letterSpacing: "-0.04em"
    lineHeight: 0.92
  h2:
    fontFamily: "'Syne', sans-serif"
    fontSize: "clamp(22px, 3.5vw, 40px)"
    fontWeight: 800
    letterSpacing: "-0.03em"
    lineHeight: 0.95
  body:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: "13px"
    fontWeight: 400
    letterSpacing: "0"
    lineHeight: 1.65
  mono:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "9px"
    fontWeight: 400
    letterSpacing: "0.10em"
    lineHeight: 1

spacing:
  base: "4px"
  page-margin: "40px desktop / 20px mobile"
  section-v: "72px desktop / 48px mobile"
  component: "16px standard / 24px card internal"

rounded:
  default: "0px"
  none: "0px"

components:
  button-primary:
    backgroundColor: "{colors.border}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.none}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.accent-orange}"
    textColor: "{colors.text-inverse}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.none}"
    padding: "9px 19px"
---

## Identity

Product: Runestone
Description: A browsable design identity library for the Sanctum + Bifrost system.
Target user: The system's author, working alone, selecting and validating a Rune before dispatching design/curator on a new project.
Rune: `press@1.0.0`
Test sentence: "Does this look like it was printed by someone who knows exactly what they're doing?"
Values:
- craft
- discipline
- refusal of the generic

## Axes

```text
Density      6  — Purposeful — space is earned, not assumed. Components fill their
                  container without cramping. No generous padding for its own sake.
Temperature  4  — Controlled neutral — neither warm nor cold. The orange provides
                  energy without warmth. Off-white base is paper, not skin.
Luminosity   8  — Light-first — white base, dark type, orange structure. No dark
                  mode variant in this rune. Contrast is maximum, always.
Energy       8  — Kinetic — hard press animations, snap transitions, no spring
                  physics. Motion feels mechanical, not organic.
Geometry     9  — Fully geometric — border-radius: 0 everywhere without exception.
                  Grid is visible and rigid. Asymmetry is permitted; softness is not.
Chromatism   2  — Near-monochrome — one structural colour (orange). Black, white,
                  and off-white carry everything else. No secondary accent.
Depth        4  — Restrained — no box-shadows. Depth is created by border weight
                  and background contrast alone. 2px borders at 0 radius read as
                  physical objects stacked on a surface.
Posture      7  — Assertive — the interface has a point of view. It does not recede
                  behind content. It frames it with authority.
```

## Inviolable Rules

If any one of these conditions fails, the output is not Press. Check each before
delivering.

**Rule 1 — Orange is structural, never decorative.**
```text
Is orange (#E84E08 / oklch(57% 0.205 38)) used exclusively as a load-bearing
structural element — nav background, active state background, primary CTA fill,
section accent border — and never as a text highlight, badge background, or
decorative flourish?
  Yes → proceed
  No  → STOP. Orange in this rune is architecture. Remove every decorative use.
```

**Rule 2 — Zero radius, everywhere.**
```text
Is border-radius: 0 applied to every element — buttons, cards, badges, inputs,
modals, tags, tooltips?
  Yes → proceed
  No  → STOP. No rounded corners exist in Press. Fix before continuing.
```

**Rule 3 — 2px borders throughout.**
```text
Are all visible borders exactly 2px solid? No 1px borders, no 0.5px borders,
no hairlines?
  Yes → proceed
  No  → STOP. 1px borders are invisible against this rune's intention. Fix.
```

**Rule 4 — Light-first, always.**
```text
Is the primary page background off-white (#F7F7F5 / oklch(97% 0.003 100))?
Is there no dark-mode variant or dark-background hero section?
  Yes → proceed
  No  → STOP. Press is light-first without exception. Dark sections break the
        rune's identity entirely. Remove them.
```

**Rule 5 — One structural colour.**
```text
Does the entire composition use exactly one non-neutral colour (orange #E84E08)?
No secondary accent, no tertiary highlight, no semantic colours beyond
success/error states (which use standard system greens/reds at minimum footprint)?
  Yes → proceed
  No  → STOP. Additional colours dilute the structural authority of the orange.
        Remove all non-orange, non-neutral colour decisions.
```

**Rule 6 — Semantic aliases are binding.**
```text
Are `radius-control`, `focus-ring`, `focus-ring-soft`, `structure`, and
`foreground-subtle` preserved exactly as defined in this contract, with no
project-level overrides?
  Yes → proceed
  No  → STOP. These aliases are part of the Press design contract and must not
        be overridden at the project level.
```

## Page Structure

**Section 1 — Top navigation**
- Background colour: `{colors.accent-orange}`
- Padding: `0`
- Layout composition: One continuous 40px structural band using the Press navigation pattern. Brand at left. Browsing and validation controls in the same band. Dispatch action held at the far right.
- Typography applied: Press display for the brand. Press mono for all links, labels, and controls.
- Section-specific rules: Orange is structural only. The band is the first thing seen and the element that tells the user where they are.

**Section 2 — Library header**
- Background colour: `{colors.surface-bg}`
- Padding: `72px desktop / 48px mobile`
- Layout composition: Two-column split. Left column carries the product name, description, and point of view. Right column carries the target-user frame and current selected Rune state.
- Typography applied: Press display for the product name. Press body for the description. Press mono for labels and state text.
- Section-specific rules: This section must read as a tool with authority, not as marketing and not as documentation.

**Section 3 — Rune browser**
- Background colour: `{colors.surface-mid}`
- Padding: `24px card internal` inside a bordered section
- Layout composition: A stacked set of bordered Rune entries built as rigid rows. Each entry reads as a selectable unit for browsing, comparing, and scanning. The selected entry introduces the structural orange state.
- Typography applied: Press section headers, card titles, body copy, and mono metadata.
- Section-specific rules: The browser must privilege comparison and recognition over decoration. No airy cards, no soft grouping, no rounded containers.

**Section 4 — Live Rune experience**
- Background colour: `{colors.surface-bg}`
- Padding: `72px desktop / 48px mobile`
- Layout composition: A full-width bordered surface that renders the selected Rune as a live experience. The experience must show the Rune as a working reference tool surface, not as a static documentation page.
- Typography applied: Press display for the section title. Press body for explanation. Press mono for labels, metrics, and states.
- Section-specific rules: This is the core proof of the product. It must feel printed, precise, and load-bearing.

**Section 5 — Selection and validation panel**
- Background colour: `{colors.surface-mid}`
- Padding: `24px card internal`
- Layout composition: A bordered panel that confirms the selected Rune, surfaces validation status, and holds the single action that precedes dispatching design/curator on a new project.
- Typography applied: Press section headers for the panel label. Press mono for status rows and action text. Press body for brief explanatory copy only.
- Section-specific rules: The panel must read as a decisive handoff surface. It must never resemble a generic docs sidebar, a Notion template, or a Vercel-adjacent control panel.

Background alternation map: `{colors.accent-orange}` → `{colors.surface-bg}` → `{colors.surface-mid}` → `{colors.surface-bg}` → `{colors.surface-mid}`

## Components

- Navigation: Use the Press navigation component unchanged for the application shell.
- Rune entries: Use the Press card and section-header components to build rigid selectable rows for browsing and comparison.
- Selection controls: Use the Press tag and badge components for selection state and validation state.
- Dispatch action: Use the Press primary button once a Rune is selected and validated.
- Secondary actions: Use the Press ghost button for non-primary browsing actions only.

## Motion

Press motion is mechanical, not organic. Type pressed into paper. No spring
physics. No ease-out-back. Transitions snap.

### Named Moments

**Press Mark** — The structural entry.
```text
Trigger:   Page / component first mount
Effect:    The orange nav band wipes in from left to right
Timing:    280ms · linear
CSS:       clip-path: inset(0 100% 0 0) → inset(0 0% 0 0)
Semantic:  The mark is applied. The tool is ready.
Use:       Nav only, on first load. Never on route changes.
```

**Hard Land** — Element entrance.
```text
Trigger:   Any content block entering the viewport
Effect:    translateY(-6px) opacity 0 → translateY(0) opacity 1
Timing:    160ms · cubic-bezier(0.0, 0.0, 0.2, 1) — hard deceleration
           No ease-in. Instant start, hard stop. Like type dropped on surface.
Semantic:  Content arrives, it does not drift.
Use:       Section headers, card grids on scroll entry.
           NOT used on body text — too much motion in reading contexts.
```

**Stamp** — Active state confirmation.
```text
Trigger:   Tag / filter button click or active selection
Effect:    scale(0.94) for 80ms → scale(1.0)
Timing:    80ms out · 120ms return · linear both ways
Semantic:  The stamp is pressed. The selection is physical.
Use:       Filter tags, toggle buttons. Never on primary CTAs.
```

UI state machine:
- Browsing → Selected: selection state uses `Stamp`.
- Selected → Validated: validation rows enter with `Hard Land`.
- First mount only: the application shell uses `Press Mark`.

General motion rules:
- Easing for all UI transitions not covered by named moments: `cubic-bezier(0.0, 0.0, 0.2, 1)` or `linear`
- Duration ceiling: `300ms`
- Hover states: no animation. Border weight change only.
- What must never animate: border-radius, background gradients, font-weight

## Canonical Copy

- Library role: "browsable design identity library"
- Product type: "developer-facing reference tool"
- Experience: "renders each Rune as a live experience"
- User task: "selecting and validating a Rune"
- Tone: "precise and authoritative"
- Value: "refusal of the generic"

## Anti-Patterns

Before delivering any output generated from this rune, verify that none of the
following are present:

- [ ] Rounded corners on any element → border-radius must be 0 everywhere
- [ ] 1px borders or hairlines → all borders are 2px solid
- [ ] Orange used as a text highlight or badge background on white → orange is structural only
- [ ] A second accent colour beyond orange → remove it
- [ ] Dark-first or dark hero section → Press is light-first without exception
- [ ] Soft box-shadow on any element → no box-shadows in this rune
- [ ] Inter, Roboto, Manrope, or any system-ui font → replace with Syne / DM Sans / JetBrains Mono
- [ ] Syne used below 14px → use DM Sans instead
- [ ] Gradient of any kind → not permitted
- [ ] Orange used decoratively (icon colour, illustration fill, underline) → structural use only
- [ ] Spring or ease-in-out easing → use cubic-bezier(0.0, 0.0, 0.2, 1) or linear
- [ ] Animations longer than 300ms → shorten
- [ ] border-radius animated → it is always 0, nothing to animate
- [ ] Body copy in uppercase → uppercase is reserved for labels, tags, and nav only
- [ ] Multiple font weights of DM Sans beyond 300 / 400 / 500 → remove heavier weights
- [ ] Display text clamp value exceeding 4vw for a single-word headline → reduce to clamp(32px, 4vw, 64px) and add overflow: hidden to the container

## Do's and Don'ts

- Do keep the interface light-first.
- Do use orange only as structure.
- Do use the Press navigation, cards, tags, and buttons as the reference grammar.
- Do make the product feel precise, authoritative, and developer-facing.
- Don't let the result look like a generic SaaS documentation site.
- Don't let the result look like a Notion template.
- Don't let the result look like anything that could be mistaken for a Vercel-adjacent product.
- Don't add rounded corners, soft shadows, a second accent colour, or generic SaaS fonts.
