# Personal Portfolio UI Spec
## Implementation Version (Tailwind v3 + Next.js)
**Aesthetic Direction: Precision-Engineered Editorial**

---

# 1. Core Design Intent

This interface communicates technical authorship. It must feel like instrument firmware meets a Swiss grid typographer — not a SaaS landing page. Every choice is deliberate, restrained, and authoritative.

**Visual personality:**
- Engineered, not decorated
- Cool-neutral with one violet signal color
- High information density in selective areas, generous space elsewhere
- Motion is functional — it confirms state, never performs

**The one thing visitors remember:** The deliberate stillness. Most portfolios shout. This one makes you lean in.

---

# 2. Breakpoints (Tailwind Config)

```js
screens: {
  mob:     "375px",
  tablet:  "768px",
  laptop:  "1024px",
  desktop: "1280px",
  laptopl: "1440px",
}
```

**Rules:**
- Default styles target `mob` (mobile-first).
- Layout structure shifts happen at `tablet:` only.
- `laptop:` and above refine density and spacing — never restructure.
- No breakpoint-specific overrides for color, shadow, or font weight.

---

# 3. Typography System

## 3.1 Font Stack

```css
/* globals.css */
@import url('https://fonts.googleapis.com/css2?family=Hind:wght@400;500;600&display=swap');

:root {
  --font-body: 'Hind', sans-serif;
  --font-mono: ui-monospace, 'SFMono-Regular', 'Menlo', 'Consolas', monospace;
}

html {
  font-family: var(--font-body);
  font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
```

**Use weights:**
- `400` — body, secondary labels
- `500` — nav, meta, UI labels
- `600` — headings, emphasis nodes

Never use 300 or 700+. If the hierarchy feels weak, fix it with size and spacing — not weight.

---

## 3.2 Type Scale

Use Tailwind utility classes. No arbitrary `text-[17px]`.

| Role | Classes |
|---|---|
| Display / Hero | `text-4xl tablet:text-5xl laptop:text-6xl font-semibold leading-tight tracking-tight` |
| Section Title (H1) | `text-3xl tablet:text-4xl font-semibold leading-tight tracking-tight` |
| Subsection (H2) | `text-xl tablet:text-2xl font-semibold leading-snug` |
| Body | `text-base tablet:text-lg font-normal leading-relaxed` |
| Meta / Labels | `text-xs tablet:text-sm font-medium tracking-widest uppercase text-neutral-500` |
| Code Inline | `text-sm font-mono text-neutral-700 bg-neutral-100 px-1.5 py-0.5 rounded` |

**Meta/label treatment** — tracked uppercase is the single expressive typographic move. Use it consistently for: section intros, project tags, status indicators, dates. Nowhere else.

---

# 4. Color System

## 4.1 Token Definitions

```js
// tailwind.config.js
colors: {
  neutral: {
    50:  "#F6F8FB",  // page background
    100: "#EAECF0",  // surfaces, borders
    200: "#D1D5DB",  // dividers
    400: "#9CA3AF",  // placeholder, disabled
    500: "#6B7280",  // secondary text
    700: "#374151",  // body text alternative
    900: "#0A0F1C",  // primary text, headings
  },
  accent: {
    DEFAULT: "#635BFF",  // primary action, active states
    hover:   "#574FE6",  // hover only — never default state
    muted:   "#EEF0FF",  // accent tint for backgrounds
    ring:    "#C7C4FF",  // focus ring — distinct from hover
  },
}
```

## 4.2 Usage Contract

| Element | Token |
|---|---|
| Page background | `bg-neutral-50` |
| Surface (cards, panels) | `bg-white` |
| Primary text | `text-neutral-900` |
| Secondary text | `text-neutral-500` |
| Borders | `border-neutral-100` |
| Dividers | `border-neutral-200` |
| Active / CTA | `bg-accent` |
| Focus ring | `ring-accent-ring` |
| Accent tint backgrounds | `bg-accent-muted` — sparingly |

**Accent discipline:**
- CTAs and primary actions only.
- One accent-tinted region maximum per page.
- Never: large accent text blocks, accent section backgrounds, accent decorative shapes.
- If you're debating whether something warrants accent treatment — it doesn't.

---

# 5. Spacing System

Use the Tailwind scale exclusively. No arbitrary values.

**Core rhythm units:**

```
4   → 16px  (tight groupings, internal component padding)
6   → 24px  (default component padding)
8   → 32px  (between related sections)
12  → 48px  (section internal spacing)
16  → 64px  (between major sections)
24  → 96px  (hero / section top padding)
32  → 128px (full-section vertical breathing room)
```

**Rules:**
- Use `gap-*` inside flex/grid. Never margin-hack adjacent items.
- Vertical rhythm is sacred — lock to the scale, don't tweak visually.
- Dense information areas (project lists, skills grids) use `gap-4` or `gap-6`.
- Breathable hero and section headers use `py-24` or `py-32`.

---

# 6. Surface & Radius System

**Standard radius:**

| Context | Class |
|---|---|
| Cards, panels | `rounded-xl` |
| Buttons, inputs | `rounded-md` |
| Badges, tags | `rounded` (4px) |
| Code blocks | `rounded-lg` |

**Container baseline:**

```html
<div class="bg-white rounded-xl border border-neutral-100 p-6">
```

**Rules:**
- Never mix radii within a single component.
- No pill-shaped cards.
- No sharp 0-radius on interactive elements.
- Radius signals component type — keep each type consistent.

---

# 7. Elevation & Shadow

Shadows communicate depth — not decoration.

| Layer | Class | Use |
|---|---|---|
| Resting surface | `shadow-sm` | Cards, panels in default state |
| Lifted / interactive | `shadow-md` | Hovered cards, open dropdowns |
| Modal / overlay | `shadow-lg` | Dialogs only |

**Never:**
- `shadow-xl` or `shadow-2xl` — too theatrical for this aesthetic.
- Colored or accent-tinted shadows.
- Glow effects.
- `shadow-none` removal unless intentional (e.g., flat button in a card).

---

# 8. Gradient System

Gradients serve as atmospheric depth — never as decoration or attention-grabbing elements.

```css
/* globals.css */

/* Subtle radial bloom — hero background layer only */
.gradient-bloom {
  background: radial-gradient(
    ellipse 60% 40% at 50% 0%,
    rgba(99, 91, 255, 0.10),
    transparent 70%
  );
  pointer-events: none;
}

/* Directional wash — section transitions */
.gradient-wash {
  background: linear-gradient(
    to bottom,
    rgba(99, 91, 255, 0.06) 0%,
    transparent 100%
  );
  pointer-events: none;
}

/* Surface shimmer — card hover layer (overlaid, not replacing bg) */
.gradient-surface {
  background: linear-gradient(
    135deg,
    rgba(99, 91, 255, 0.05),
    transparent 60%
  );
}
```

**Rules:**
- Background and pseudo-element layers only — never on text, borders, or buttons.
- At most one gradient region visible in any viewport at once.
- `pointer-events: none` on all gradient layers.
- Opacity must be low enough that removing the gradient causes no layout confusion.

---

# 9. Buttons

## Primary

```html
<button class="
  bg-accent text-white font-medium
  px-6 py-3 rounded-md
  transition-colors duration-200
  hover:bg-accent-hover
  focus:outline-none focus:ring-2 focus:ring-accent-ring focus:ring-offset-2
  disabled:opacity-40 disabled:cursor-not-allowed
">
```

## Secondary

```html
<button class="
  border border-neutral-200 bg-white text-neutral-900 font-medium
  px-6 py-3 rounded-md
  transition-colors duration-200
  hover:bg-neutral-50 hover:border-neutral-300
  focus:outline-none focus:ring-2 focus:ring-accent-ring focus:ring-offset-2
  disabled:opacity-40 disabled:cursor-not-allowed
">
```

## Ghost (navigation / inline actions)

```html
<button class="
  text-neutral-500 font-medium text-sm
  px-3 py-2 rounded
  transition-colors duration-150
  hover:text-neutral-900 hover:bg-neutral-100
  focus:outline-none focus:ring-2 focus:ring-accent-ring focus:ring-offset-1
">
```

**Rules:**
- Minimum tap target: `py-3` on mobile (`min-h-[44px]`).
- Never use accent background on secondary or ghost.
- Icon-only buttons require `aria-label` — no exceptions.

---

# 10. Headless UI Integration

All Headless UI primitives must inherit the design system without special-casing.

**State utilities:**

```html
<!-- Listbox / Combobox options -->
<li class="
  px-4 py-2 text-sm font-medium text-neutral-900
  cursor-pointer select-none rounded
  ui-active:bg-accent-muted ui-active:text-accent
  ui-selected:font-semibold
  transition-colors duration-150
">
```

**Dialog overlay:**

```html
<div class="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm" />
```

**Dialog panel:**

```html
<div class="
  bg-white rounded-xl border border-neutral-100 shadow-lg
  p-8 w-full max-w-lg
">
```

**Transition defaults for all Headless UI components:**

```jsx
<Transition
  enter="transition duration-200 ease-out"
  enterFrom="opacity-0 translate-y-1"
  enterTo="opacity-100 translate-y-0"
  leave="transition duration-150 ease-in"
  leaveFrom="opacity-100 translate-y-0"
  leaveTo="opacity-0 translate-y-1"
/>
```

Focus rings must always be visible. Never suppress `outline` without replacing it with `ring`.

---

# 11. Motion System (GSAP)

## 11.1 Philosophy

Motion confirms state change and guides attention. It doesn't perform. A visitor shouldn't notice the animation — only its absence would feel wrong.

## 11.2 Default Entrance

```js
// Standard element reveal
gsap.from(target, {
  opacity: 0,
  y: 16,
  duration: 0.5,
  ease: "power2.out",
});
```

## 11.3 Staggered List Reveal

```js
// Project list, skill groups, nav items
gsap.from(items, {
  opacity: 0,
  y: 12,
  duration: 0.45,
  ease: "power2.out",
  stagger: 0.07,
});
```

## 11.4 Page Transition

```js
// Route change — outgoing
gsap.to(pageWrapper, {
  opacity: 0,
  y: -8,
  duration: 0.25,
  ease: "power1.in",
});

// Route change — incoming
gsap.from(pageWrapper, {
  opacity: 0,
  y: 8,
  duration: 0.4,
  ease: "power2.out",
});
```

## 11.5 Constraint Table

| Property | Allowed range |
|---|---|
| Duration | 0.25s – 0.6s |
| Ease | `power2.out`, `power1.in`, `power1.inOut` |
| `y` translate | 8px – 20px max |
| `scale` | 0.98 – 1.0 only |
| Stagger | 0.05s – 0.10s per item |

**Never:** bounce, elastic, spring physics, infinite loops, scale above 1.0, rotation on entrance.

## 11.6 Reduced Motion

```js
// Always gate GSAP with this check
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReduced) {
  // GSAP animation
}
```

For CSS transitions, use:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

# 12. Borders & Dividers

**Horizontal divider:**
```html
<hr class="border-t border-neutral-100" />
```

**Vertical divider (inline, e.g., nav):**
```html
<span class="inline-block w-px h-4 bg-neutral-200" />
```

**Section separation** — prefer spacing over lines. A divider is a last resort when spacing alone doesn't create clear separation.

Never use borders for visual decoration. If it doesn't separate two logically distinct regions, remove it.

---

# 13. Code Blocks

**Inline code:**
```html
<code class="font-mono text-sm text-neutral-700 bg-neutral-100 px-1.5 py-0.5 rounded">
```

**Block code:**
```html
<pre class="bg-neutral-50 border border-neutral-100 rounded-lg p-6 overflow-x-auto">
  <code class="font-mono text-sm text-neutral-700 leading-relaxed">
```

**globals.css:**
```css
pre, code {
  font-family: var(--font-mono);
}
```

Syntax highlighting colors — if used:
- Keywords: `text-neutral-900 font-medium`
- Strings: `text-accent`
- Comments: `text-neutral-400 italic`
- Numbers: `text-neutral-700`

No neon. No dark-mode solarized themes unless dark mode is a first-class design decision.

---

# 14. Accessibility Requirements

| Requirement | Implementation |
|---|---|
| Contrast — body text | 7:1 minimum (`neutral-900` on `neutral-50` ✓) |
| Contrast — secondary text | 4.5:1 minimum (`neutral-500` on `white` — verify) |
| Focus indicators | `ring-2 ring-accent-ring ring-offset-2` on all interactive elements |
| Tap targets | `min-h-[44px]` on all mobile interactive elements |
| Semantic HTML | `<nav>`, `<main>`, `<section>`, `<article>` — not `<div>` soup |
| Icon buttons | Always paired with `aria-label` |
| Motion | `prefers-reduced-motion` gated on all GSAP and CSS animations |
| Skip link | Visible-on-focus skip-to-main at top of document |

---

# 15. styled-components Usage Policy

Tailwind is primary. `styled-components` is a surgical tool only.

**Permitted uses:**
- Dynamic values that cannot be expressed as Tailwind utilities (e.g., JS-driven `transform` values, GSAP-set inline styles).
- Truly complex conditional styling with more than 3 runtime-dependent states.
- Third-party component integration where Tailwind class injection isn't possible.

**Not permitted:**
- Rewriting layout or spacing in styled-components when Tailwind handles it fine.
- Bypassing the color system with arbitrary hex values.
- Adding styled-components wrappers "for consistency" without a technical reason.

---

# 16. What Not To Do

| Category | Prohibited |
|---|---|
| Typography | Inter, Roboto, system-ui as display fonts |
| Typography | `font-bold` (700) anywhere |
| Color | Arbitrary hex values outside `tailwind.config.js` |
| Color | Multiple competing gradient regions |
| Color | Accent color on large text blocks or section backgrounds |
| Spacing | Arbitrary values: `px-[37px]`, `mt-[13px]` |
| Spacing | Margin stacking instead of `gap-*` |
| Shadow | `shadow-xl` or larger |
| Shadow | Colored or glowing shadows |
| Motion | Bounce, elastic, spring easing |
| Motion | `scale > 1.0` on entrance |
| Motion | Continuous loops on hero elements |
| Radius | Inconsistent radius within component types |
| Code | `!important` outside a documented override reason |
| Code | `styled-components` for layout replaceable by Tailwind |

---

# 17. Implementation Checklist

Before shipping any component, verify:

- [ ] All values from Tailwind config tokens — no arbitrary values.
- [ ] Consistent spacing scale used vertically and horizontally.
- [ ] Neutral-first palette — accent appears maximum once per component.
- [ ] All interactive elements have visible focus rings.
- [ ] GSAP animations gated behind `prefers-reduced-motion` check.
- [ ] Tap targets meet 44px minimum on mobile.
- [ ] No `shadow-xl` or colored shadows.
- [ ] No gradient applied to text or buttons.
- [ ] Semantic HTML elements used — no unmotivated `<div>` wrappers.
- [ ] `aria-label` on every icon-only button.

If a visual choice feels expressive — reduce it. Then reduce it once more.