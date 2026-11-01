---
name: Bassim Ramdani Portfolio
description: A Moroccan-modern portfolio shaped like a layered paper-cut atlas.
colors:
  paper: "#f3ede1"
  paper-surface: "#fbf7ef"
  sand: "#e7dcc8"
  paper-border: "#b6a88f"
  text-ink: "#292642"
  muted-ink: "#57546a"
  indigo: "#373260"
  terracotta: "#97462f"
  gold: "#765915"
  night-ground: "#181725"
  night-surface: "#242237"
  night-raised: "#302d46"
  night-border: "#57536d"
  night-text: "#f4ede0"
  night-muted: "#c8c0d0"
  night-indigo: "#c2b9eb"
  night-terracotta: "#ef9879"
  night-gold: "#e7c77f"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.99
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2rem, 3.2vw, 2.8rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Instrument Sans, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "IBM Plex Mono, Courier New, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.045em"
rounded:
  square: "0"
  arch: "50% 50% 0 0"
spacing:
  2: "0.5rem"
  4: "1rem"
  6: "1.5rem"
  8: "2rem"
  12: "3rem"
  16: "4rem"
  24: "6rem"
  32: "8rem"
components:
  button-primary:
    backgroundColor: "{colors.indigo}"
    textColor: "{colors.paper-surface}"
    rounded: "{rounded.square}"
    padding: "0.75rem 1rem"
    height: "48px"
  button-primary-dark:
    backgroundColor: "{colors.night-gold}"
    textColor: "{colors.night-surface}"
    rounded: "{rounded.square}"
    padding: "0.75rem 1rem"
    height: "48px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text-ink}"
    rounded: "{rounded.square}"
    padding: "0.75rem 1rem"
    height: "48px"
  skill-chip:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.text-ink}"
    rounded: "{rounded.square}"
    padding: "0.45rem 0.8rem"
    height: "42px"
---

# Design System: Bassim Ramdani Portfolio

## Overview

**Creative North Star: "The Layered Paper-Cut Atlas"**

The portfolio treats an academic and project history as a route through a carefully assembled paper atlas. Broad fields of indigo and terracotta carry the major records; warm paper, ruled ledgers, and gold details give the page the tactile rhythm of a composed editorial object. Khatam-star cuts recur as a geometric signature, while the arch portrait frame leaves a clear, optional place for a real portrait.

The interface stays direct and readable across English, French, and Simplified Chinese. A paired dark palette preserves the same hierarchy rather than inverting it mechanically. Repeated records use open, square-edged structures instead of generic rounded-card UI.

**Key Characteristics:**
- Full palette of paper neutrals, indigo, terracotta, and gold, with a coordinated dark theme.
- Fraunces display, Instrument Sans reading text, and IBM Plex Mono annotations.
- Khatam geometry, arch framing, clipped color fields, and fine ledger rules.
- Information is organized as a connected route, not a stack of anonymous cards.

## Colors

The light theme layers warm paper neutrals beneath indigo structure, terracotta emphasis, and restrained gold annotation; the dark theme shifts those roles to brighter, legible counterparts.

### Primary
- **Indigo field:** The main structural color for education and contact regions; links and the primary action also use this family.

### Secondary
- **Terracotta cut:** Marks emphasis, project highlights, focus, and the secondary end of the warm palette.

### Tertiary
- **Gold annotation:** Reserved for small labels, geometric linework, and select highlights rather than long passages of text.

### Neutral
- **Warm paper:** The page ground and primary reading surface.
- **Sand paper:** The alternate surface behind grouped work and skill chips.
- **Ink:** The high-contrast reading color on light surfaces.
- **Night ground and surfaces:** Keep the same hierarchy in dark theme without using pure black.

### Named Rules
**The Three-Ink Rule.** Let indigo carry the large structural fields, terracotta mark emphasis, and gold annotate; do not scatter the accents without a role.

## Typography

**Display Font:** Fraunces (with Georgia, serif)

**Body Font:** Instrument Sans (with Segoe UI, sans-serif)
**Label/Mono Font:** IBM Plex Mono (with Courier New, monospace)

**Character:** Fraunces gives headings a crafted editorial voice; Instrument Sans keeps long descriptions neutral and easy to scan. IBM Plex Mono is reserved for dates, compact labels, and measured details.

### Hierarchy
- **Display** (400, responsive display scale, tight leading): The name and oversized project-capstone title.
- **Headline** (400, responsive section scale): Section headings and record titles.
- **Body** (400, 1rem, 1.65 line height): Descriptions and explanatory copy, constrained to readable measures.
- **Label** (400, 0.75rem, tracked): Dates, location markers, categories, and short metadata.

### Named Rules
**The Role-Bound Type Rule.** Use the serif for display hierarchy, sans serif for reading, and mono only where the content behaves like a label or measurement.

## Layout

The page shell is centered and capped at 80rem; header and feature ledgers can extend to 84rem and 78rem respectively. The opening pairs a text-led introduction with a framed portrait slot. Education and projects use aligned ledgers; experience and languages use ruled rows. Major sections breathe on a 2–8rem spacing rhythm rather than compressing into a dashboard grid.

At 66rem, navigation wraps into a collapsible row. At 48rem, two-column sections and the project ledger simplify; below 35rem, the hero stacks, actions become full-width, and long ledgers become single-column. Layouts preserve the decorative cuts without widening the document beyond the viewport.

## Elevation & Depth

Depth comes primarily from layered paper tones, fine rules, and clipped planes rather than soft drop shadows. The portrait frame is the deliberate exception: two hard, offset color blocks echo layered cut paper and reinforce the arch silhouette.

### Named Rules
**The Paper-Plane Rule.** Use tonal fields and borders for structure; reserve offset shadow geometry for the portrait artwork.

## Shapes

Most controls and record surfaces keep square corners. The portrait uses a half-round arch top, the khatam star uses clipped polygon geometry, and selected full-width sections use a shallow diagonal edge. Thin borders and ruled dividers create structure without enclosing every item in a rounded container.

## Components

### Buttons
- **Shape:** Square-edged, tactile links (0 radius) with a 48px minimum height.
- **Primary:** Indigo with a paper label in light theme; gold with a dark-surface label in dark theme.
- **Hover / Focus:** The primary shifts to terracotta; hover lifts slightly. Keyboard focus uses a visible terracotta outline with offset.
- **Secondary:** Transparent surface with a one-pixel indigo border; its hover gains a sand field.

### Chips
- **Style:** Skill labels sit on a sand-toned field with a thin border and square corners.
- **State:** They are descriptive tags, not filter controls.

### Cards / Containers
- **Corner Style:** Square; repeated records are open ledger entries rather than rounded cards.
- **Background:** Paper or sand surfaces; indigo and terracotta are reserved for larger feature regions.
- **Shadow Strategy:** No soft card shadows; depth follows the layered-plane rule.
- **Border:** Fine horizontal and vertical rules align records into ledgers.
- **Internal Padding:** Use the shared 1.5rem and 2rem spacing steps for record entries.

### Navigation
- **Style:** Inline text links with 44px touch targets. The current section receives a fine terracotta underline; the active locale receives a gold underline.
- **Mobile:** The navigation collapses behind a labeled menu button at narrower widths; language and theme controls remain independently reachable.

### Arch Portrait
The portrait slot clips a real optional image into an arch and sets it over two offset gold and indigo planes. Keep the frame even when no portrait is supplied; do not substitute a fabricated person or stock image.

## Do's and Don'ts

### Do:
- **Do** use the paired light and dark tokens so contrast and hierarchy survive theme changes.
- **Do** use khatam geometry, paper planes, and ledger rules as recurring structural motifs.
- **Do** preserve the open, responsive editorial layout and generous section rhythm.

### Don't:
- **Don't** soften record surfaces into generic rounded-card grids.
- **Don't** use gold as a body-text color or mono as a display face.
- **Don't** replace the optional portrait slot with invented or stock personal imagery.
