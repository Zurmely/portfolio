# Buttons — TypeUI · Enhanced

> **TypeUI · Enhanced** — the action layer of the system.
> Depends on: `colors.md`, `radius.md`, `shadows.md`, `spacing.md`, `typography.md`, `badges.md`

> **⚠️ Button colour is SURFACE-INVERSE — mandatory, no exceptions:**
> - On a **`#161616`** section (hero / footer / dark band): button background **`#EFEFEF`**, label **`#161616`**.
> - On an **`#E6E3E0`** section: button background **`#161616`**, label **`#E6E3E0`** — the label is the **same colour as the section the button sits on**.
> - On an **`#E0DCD8`** section: button background **`#161616`**, label **`#E0DCD8`**.
>
> **The brand teal (`#32746D`) is NEVER a button fill.** A green / brand-filled button is a bug. The teal is only for text links, focus rings, and small accents.

In Enhanced, every button is a **full pill** (`radius-full`, 999px) wearing a **visible 1px hairline border** — the outlined control from the reference site. The primary button is **surface-inverse**: on a greige section (`#E6E3E0` / `#E0DCD8`) it fills `#161616` (`surface-dark`) with a **label the same colour as that section's greige**; on a `#161616` section it fills `#EFEFEF` with a `#161616` label. **No shadow**, a brand focus ring. **Landing / marketing** buttons are generous; **dashboard, navbar, sidebar, and modal** buttons use **half the padding at `font-size-sm` (14px)**. Status fills (success, danger, warning) appear only when the action genuinely is that; the teal `brand` (`#32746D`) is reserved for link-style buttons, focus rings, and accents.

---

## Anatomy

| Part | Role |
|---|---|
| **Root** | Button or link-styled control |
| **Label** | Text content |
| **Leading / trailing icon** | Optional 16px glyph |
| **Badge** | Optional count pill inside label (see `badges.md`) |
| **Loader** | Optional spinner replacing icon or prefixing label |

---

## Sizes

**Two contexts.** **Landing / marketing** buttons use the generous padding below. **Dashboard, application, navbar, sidebar, and modal** buttons **halve that padding and drop to `font-size-sm` (14px)** — dense product chrome. Every button is a **full pill** regardless of size or context.

Landing / marketing sizes:

| Size | Font | Padding (inline × block) | Icon |
|---|---|---|---|
| Small | font-size-sm (14px) | `spacing-5` × 11px (20px × 11px) | 16px |
| Base (default) | font-size-md (16px) | `spacing-6` × `spacing-3` | 16px |
| Large (CTA) | font-size-lg (18px) | `spacing-8` × `spacing-3-5` | 20px |

Dashboard / navbar / sidebar / modal sizes — **half the padding, 14px label**:

| Size | Font | Padding (inline × block) | Icon |
|---|---|---|---|
| Dashboard default | font-size-sm (14px) | `spacing-3` × `spacing-1-5` | 16px |
| Dashboard compact | font-size-sm (14px) | `spacing-2` × `spacing-1` | 14px |

**One base button, consistent hero → footer.** Pick **a single landing button size for the page's primary/base buttons and use it in every section from the hero all the way to the footer** — identical padding, font-size, radius, weight, and height. A base button in the hero must look **exactly the same** as the base button in a mid-page CTA band and in the footer; **never resize the recurring primary button per section**. The recurring call-to-action reads as the same button everywhere on the page.

**Exceptions (allowed to differ):**

- **Navbar buttons** — always the small navbar size (see the navbar rules), never the landing base size.
- **Genuinely different roles** — icon-only buttons, inline / link-style buttons, dashboard & product-UI controls (the half-padding 14px sizes above). Those follow their own specs.

The rule governs the **repeating primary/base marketing button**: whatever size it is in the hero, it stays that size through every section to the footer.

Shared shell, every size:

| Property | Value |
|---|---|
| Weight | font-weight-medium |
| Line height | line-height-component |
| Radius | `radius-full` (999px) — full pill, every size and context |
| Border | **1px hairline, always visible** — intent's darker step on filled, `default` on secondary/tertiary (ghost is the only borderless variant) |
| Shadow | None (`elevation-none`) on every variant |
| Gap label ↔ icon | `spacing-1-5` |
| Min touch target | 44px on mobile — pad to meet if label is short |

---

## Variants — filled

The workhorses. Filled buttons are flat (no shadow) with a brand focus ring; every one is a **full pill** carrying a **1px hairline border**, and hover shifts the fill one step. The **primary is surface-inverse** (see the signature section); status and secondary variants keep the intent's darker-step hairline.

| Variant | Background | Text | Border (1px) | Hover background | Focus ring |
|---|---|---|---|---|---|
| **Primary (surface-inverse)** | `#161616` on greige · `#EFEFEF` on dark | section's greige (`#E6E3E0`/`#E0DCD8`) on greige · `#161616` on dark | `default` (`#D0CBC7`) | fill shifts one step | `brand-medium` |
| **Secondary** | `neutral-tertiary-soft` | `body` | `default-medium` | `neutral-tertiary-medium` + `heading` text | `neutral-tertiary` |
| **Tertiary** | `neutral-primary-soft` | `body` | `default` | `neutral-secondary-medium` + `heading` text | `neutral-tertiary-soft` |
| **Success** | `success` | `white` | `success-strong` | `success-strong` | `success-medium` |
| **Danger** | `danger` | `white` | `danger-strong` | `danger-strong` | `danger-medium` |
| **Warning** | `warning` | `white` | `warning-strong` | `warning-strong` | `warning-medium` |
| **Dark** | `dark` | `white` | `dark-strong` | `dark-strong` | `neutral-tertiary` |
| **Ghost** | transparent | `heading` | transparent (the one borderless variant) | `neutral-secondary-medium` | `neutral-tertiary` |

Focus ring: a visible spread using the intent ring token; offset 0. This ring is how the system stays keyboard-first, so it is never removed.

---

## Variants — outline

The quieter sibling of filled: transparent or `neutral-primary` fill, a **2px** intent border, and an intent-foreground label. On hover the button "fills in" with its intent and the label flips to `white` (or, on light warning fills, a dark label for contrast).

**Outline border width is always 2px** — every outline variant carries a 2px border in its intent color (the `Border` column below names the color, the width is 2px). This is what gives the outline button its weight against the pill fill buttons.

**Outline buttons are the exact same height as solid buttons.** An outline button of a given size has **identical height, padding box, and label baseline** to the solid button of that size — the thicker 2px border must **not** make it taller. Use **`box-sizing: border-box`** so the border sits *inside* the button's height (and/or trim the padding by the extra border width), so a solid and an outline button line up **pixel-for-pixel** in the same row. Never let the border add to the box height.

| Variant | Border (2px) | Label | Hover fill |
|---|---|---|---|
| Brand | `brand` | `fg-brand` | `brand` (label → `white`) |
| Neutral | `default` | `body` | `neutral-secondary-soft` |
| Success | `success` | `success` | `success` |
| Danger | `danger` | `danger` | `danger` |
| Warning | `warning` | `warning` | `warning` |

Outline sizes mirror the filled size table exactly.

---

## Signature interaction — surface-inverse pill

The defining button of Enhanced is a **surface-inverse pill wrapped in a 1px hairline border** — like the outlined pill buttons on the reference site. On a greige section (`#E6E3E0` / `#E0DCD8`) it rests on a solid `#161616` fill with a label the **same colour as that section's greige** and a `default` (`#D0CBC7`) hairline; on a `#161616` section it flips to a `#EFEFEF` fill with a `#161616` label. Corners are a **full pill** (`radius-full`). On hover the fill shifts one step; on press it settles further. No sweep, no wedge — a confident pill that inverts against its surface. The rule is **stack-agnostic**: it describes which tokens supply each value, so it can be built with plain CSS, a CSS-in-JS layer, a utility framework, or any renderer.

**Token sourcing (never hard-coded):**

| Aspect | Source |
|---|---|
| Resting background | `surface-dark` (`#161616`) on greige · `#EFEFEF` on dark — `colors.md` |
| Resting label | the section's greige (`#E6E3E0` / `#E0DCD8`) on greige · `#161616` on dark |
| Resting border | `default` (`#D0CBC7`) — 1px hairline — `colors.md` |
| Hover background | fill shifted one step (a touch lighter) |
| Active background | fill settled one step further |
| Focus ring | `brand-medium` — `colors.md` |
| Corner radius | `radius-full` (999px, full pill) — `radius.md` |
| Padding / sizing | landing generous / dashboard half — the **Sizes** tables (`spacing-*`) — `spacing.md` |
| Font family / weight / size | `font-family`, `font-weight-medium`, 20/18px landing · 14px dashboard — `typography.md` |
| Hover duration | ~150ms (see **Motion**) |

**Behavior:** at rest, a `#161616` fill with a greige label (or `#EFEFEF` fill with a `#161616` label on dark). On hover, the fill shifts one step; on focus, the `brand-medium` ring appears; on active press it settles further. Honor reduced-motion preferences by keeping the color change instant. Every value comes from the token table above, so the same rule holds whether it is built with plain styles, a utility framework, or any renderer.

---

## Icon buttons

A square control — width equals height per tier — for toolbars and compact actions. Use any filled, outline, or ghost row above.

| Size | Box | Icon |
|---|---|---|
| Small | 36 × 36px | 16px |
| Base | 40 × 40px | 16px |
| Large | 44 × 44px | 20px |

There is no visible label, so an **`aria-label` is mandatory** — never ship a nameless icon button.

---

## Special patterns

### With badge

Primary label + a circular count pill (`spacing-2` gap) — see the button-attached count in `badges.md`.

### Loader

A 16px spinner sits at the label start; keep or hide the label, but mark the control `disabled` or `aria-busy="true"` while it runs so it cannot be double-submitted.

### Disabled

Drop to 50% opacity or `fg-disabled` text, remove hover and the focus ring, set `pointer-events: none`, and apply the native `disabled` attribute. A disabled button must never look clickable.

### Link as button

An anchor wearing button tokens — use it for navigation that should read as a primary action, and keep the keyboard focus ring intact.

### Provider / OAuth / payment

The one place third-party brand color is allowed: isolated provider variants (social login, wallet, card network). Document the provider hex *outside* the semantic tokens and never recycle it as a system intent.

### Gradient / colored shadow (optional marketing)

Not part of core Enhanced. Default product UI is solid fills only. If a campaign needs a gradient, define the paired tokens in `colors.md` and `shadows.md` first — do not hand-roll them on the button.

---

## Motion

Enhanced buttons respond instantly and quietly — no bounce, no theatrics.

| Transition | Duration | Properties |
|---|---|---|
| Hover / focus | 150ms | Background, text, border |
| Active press | 100ms | Slight scale or darken (optional) |
| Loader | continuous | Spinner rotation |

---

## Accessibility

- Native `<button type="button|submit|reset">` for actions; `<a>` only when navigating.
- Icon-only controls carry a descriptive `aria-label`.
- Loading state uses `aria-busy="true"` and blocks duplicate submits.
- The 4px focus ring is always visible on keyboard focus — never remove the outline without an equivalent replacement.
- Truly inactive controls leave the tab order.

---

## Prohibited

- **No raw hex in core variants** — semantic tokens only (documented provider buttons are the sole exception).
- **Every button is a full pill (`radius-full`, 999px)** — squared or small-radius buttons are a different theme, not Enhanced.
- **No brand-filled primary** — the primary is surface-inverse (`#161616` on greige, `#EFEFEF` on dark); the teal brand is for links, focus rings, and accents, not the button fill.
- **No same-size landing and dashboard buttons** — dashboard, navbar, sidebar, and modal buttons halve the landing padding and use `font-size-sm` (14px).
- **No borderless filled buttons** — every filled button carries the always-visible 1px hairline border (ghost is the sole borderless variant).
- **No taller outline buttons** — an outline button matches the solid button's height **exactly** (use `box-sizing: border-box`); the 2px border sits inside the box and never increases the height, so solid and outline buttons align in a row.
- **No framework class names** in specs.
- **No shadows on buttons** — they are flat (`elevation-none`); they sit on the page, they do not float.
- **No two primary buttons** side by side in one action group — Enhanced allows a single obvious next step.
- **No font-size above `font-size-md`** on standard buttons.
- **No ghost variant for a destructive confirm** — use danger filled or outline so the stakes read.
- **No gradient fills** in default product UI without new tokens.
