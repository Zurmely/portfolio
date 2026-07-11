# Section Surfaces — TypeUI · Enhanced

> **TypeUI · Enhanced (Still)** — how marketing pages and dashboards use background surfaces. This module governs **page-level section bands only** (hero, content blocks, footer). It does not change component shells — those stay at `radius-xxl` (24px) per `radius.md`.

---

## Allowed section surfaces

Marketing and landing pages use **two warm greige tones for content, and dark for the hero and footer**:

| Surface | Token | Hex | Role |
|---|---|---|---|
| **Greige primary** | `neutral-secondary-soft` | `#E6E3E0` | Default content sections |
| **Greige secondary** | `neutral-tertiary` | `#E0DCD8` | The alternating content band that breaks the rhythm |
| **Dark** | `surface-dark` | `#161616` | **Hero and footer (always)** + optional mid-page accent band |

> **⚠️ The brand teal (`#32746D`) is NEVER a section background — never a hero, footer, content band, or CTA band.** A green/brand-coloured section is a bug. The **hero and footer are always `#161616`**; every content section is `#E6E3E0` or `#E0DCD8`. Brand appears only on links, small accents, focus rings, and chart series — **never on a section, and never as a button fill** (buttons are surface-inverse; see `buttons.md`).

**Dashboard and application UI** use **warm greige only** — see [Dashboard rule](#dashboard--application-ui) below.

---

## Full-bleed background, 1280px content column

**Section backgrounds are full-bleed; only the content and the side rails are 1280px.**

- The section's **background colour spans the full viewport width — edge to edge**. The `#161616`, `#E6E3E0`, and `#E0DCD8` fills are **never** capped at 1280px.
- **Only the content and the two side rails sit inside the centered 1280px container.** The rails mark that column's left/right edges; the coloured band extends **past** them to both viewport edges.
- Structure: a **full-width background element**, with a `max-width: 1280px`, centered (`margin-inline: auto`) **inner container** that draws the rails and holds the content (with the ≥ 24px inner padding). Background on the outer element, rails + content on the inner.

---

## Content section rhythm — never one flat color

Content sections **alternate between the two greige tones** so the page is never a single flat colour. The default rhythm is **three `#E6E3E0` sections, then two `#E0DCD8` sections, repeating**:

```
#E6E3E0  #E6E3E0  #E6E3E0   #E0DCD8  #E0DCD8   #E6E3E0  #E6E3E0  #E6E3E0 …
```

- **Always alternate.** Never render every content section in one greige tone; step to the other tone in blocks so the page reads as a rhythm, not a slab.
- Adjust the exact counts to the page, but keep the two-tone alternation (a block of `#E6E3E0`, then a block of `#E0DCD8`, and so on).
- Both tones carry the same `#D0CBC7` side rails, the same symmetric padding, and the same 24px component shells — only the background tone changes.

---

## Container side rails (framed grid)

The defining frame of an Enhanced page: the **centered 1280px content container is bounded by a 1px vertical hairline on its left and right edges only — never a top or bottom border**. These two rails run **continuously from the very top of the page to the very bottom, unbroken** — **one single frame, never redrawn or interrupted per section**.

| Property | Value |
|---|---|
| Rail edges | **Left and right only** — `border-left` + `border-right`; never `border-top` / `border-bottom` |
| Rail colour — greige sections | `default` (`#D0CBC7`) — a warm hairline on `#E6E3E0` / `#E0DCD8` |
| Rail colour — dark sections | `border-dark` (`#2C2C2C`) — a dark hairline on `#161616` hero, footer, and dark bands |
| Rail width | 1px |
| Position | At the `1280px` centered container's left/right edges |
| Span | **Continuous, full page height — top to bottom, unbroken** |

- **One unbroken line, top to bottom.** Draw the rails **once** on a single page-level element — the 1280px container itself, or a full-height overlay pinned to the container width with `pointer-events: none` — so they run the entire height of the page **without a single gap**. **Never draw the rail per section**: per-section `border-left` / `border-right` produce mismatched, **interrupted** segments where sections meet. One element owns the rail.
- **The rail lives at the 1280px `page-container` edges ONLY — never on the full-bleed section band.** A section's background element spans the whole viewport; putting a border, inset shadow, or outline on that full-width element paints lines at the **viewport edges** — a bug. Any rail (including the `#2C2C2C` recolour over dark bands) must be positioned at the centered 1280px container width, exactly where the greige rail runs.
- **Sides only, never a closed box.** No top or bottom border ever seals a section; the frame is the two vertical rails alone.
- **Sections have no `border-top` or `border-bottom` — with a single exception: the top banner.** Not on the hero, not on the footer, not on any content band, and not smuggled in by adjacent chrome: a **transparent navbar** sitting over the hero must not paint a `border-bottom` (that line reads as a border on top of the hero). The **one** element that carries a bottom border is a **top announcement banner above the hero** (see *Top banners / announcement bars*), which always has a `border-bottom` and never a top border. Otherwise, the only horizontal rules allowed on a page are *inside* content (table rows, column dividers, in-card separators) — never at a section's top or bottom edge.
- **The rail colour segments to the surface it crosses, but the line never breaks:** `#D0CBC7` where it runs past a greige section, `#2C2C2C` where it runs past a `#161616` section — the **same unbroken line**, only its colour changes so it stays visible on each background.
- **Content never touches the rail.** Every section carries **left and right inner padding (≥ 24px)** so headings, paragraphs, and controls sit clear of the rails — see *Section horizontal padding* below. This padding lives **inside** the container; it **never moves or interrupts the rail**.
- **Column dividers reuse the rail.** Adjacent grid columns are separated by the same side-only vertical hairline, drawn **once** — never doubled into a 2px line.
- The rails sit at the `1280px` centered container edges; the **background colour is full-bleed (spans the whole viewport)** while the rails and content stay capped at 1280px — see *Full-bleed background* above.

---

## Section horizontal padding (never touch the rail)

Every section gives its content **left and right inner padding so text never sticks to the side rail**:

| Property | Value |
|---|---|
| Inline padding (left & right) | **`spacing-6` (24px) minimum** on each side |
| Owner | The **inner content wrapper**, inside the 1280px container — **never** the rail element |
| Rule | The rail is drawn on the container edge; the 24px padding sits **between** that rail and the content, so the line stays unbroken while the text breathes |

- Content — headings, paragraphs, buttons, cards — is **inset at least 24px** (`spacing-6`) from each rail on every section, greige or dark.
- This inner padding **must not create or shift the rail.** The rail is one continuous border on the container; the padding only pushes content inward. **Two different jobs, two different elements** — never let the section's own padding stand in for the border, or the line breaks at every section seam.

---

## Section divider — diagonal hatch (same-tone seams only)

An optional decorative **diagonal-hatch divider** may sit at the seam **between two adjacent content sections that share the same greige tone** — a band of tight 45° hairline stripes that marks the join without a hard rule.

**Placement — allowed only between two SAME-colour sections:**

- The section **directly above** AND the section **directly below** the divider must be the **same greige tone** — **both `#E6E3E0`, or both `#E0DCD8`**.
- **If the two sections differ in colour, omit the divider** — no divider at a tone switch (`#E6E3E0` ↔ `#E0DCD8`), and none where a `#161616` section meets a greige one.
- **Never adjacent to a dark (`#161616`) section** — never between the hero and the first section, the footer and the last section, or any seam that touches a `#161616` band (hero, footer, or dark accent).
- Optional decoration — one divider per qualifying (same-tone) seam, not required on every seam.

**Dimensions — exact:**

| Property | Value |
|---|---|
| Width | **Always exactly `1280px` — rail to rail. Never narrower, never wider.** Not full-bleed and not inset by the 24px content padding — it spans the full 1280px between the two side rails, its left/right edges landing **exactly on the `#D0CBC7` rails**. |
| Height | **44px** |
| Alignment | Centered on the content column (1280px wide, centered) inside the full-bleed section background |
| Fill | **Tight diagonal hairline hatch** — 1px `default` (`#D0CBC7`) stripes at **45°**, **closely spaced (~16px apart)**, over the greige background |
| Top & bottom edge | A 1px `default` (`#D0CBC7`) horizontal hairline on the band's top and bottom |
| Vertical placement | **Centered exactly on the seam** — the boundary between the two sections runs through the divider's **vertical middle** (22px of it above the line, 22px below). **Equal space above and below**; never flush against a section's bottom (or top) edge. |

- The divider sits **inside** the full-bleed section background: outside its 1280px width there is only plain greige — the hatch **never bleeds past the rails**.
- The `#D0CBC7` side rails pass straight through the divider's left/right edges — the divider does **not** break, double, or recolour them.
- The divider is its **own element at the seam**, not a section border — it never counts as giving either neighbouring section a top/bottom border.
- **Centered on the seam, never glued to an edge.** The divider sits at the **exact midpoint of the join** — half its height reads above the boundary line, half below — with **equal breathing room on both sides**. The section above keeps its **full bottom padding** and the section below its **full top padding**; the divider is centred **in the gap between them**. It must **not** stick to a section's bottom edge or eat its padding (which makes the section look like it has no bottom padding). Place it centred on the boundary — an element straddling the seam with half its 44px height pulled into each neighbouring section, or a band centred on the seam — **never** as the last child pinned to the bottom of the section above.

---

## Hero & footer — always dark (`#161616`)

- **The hero and the footer always use `surface-dark` (`#161616`) — NEVER the brand green.** They anchor the page in dark; every content section between them is one of the two greiges. A brand-coloured hero or footer is forbidden.
- Headings and primary copy on the hero/footer use `white`; secondary copy uses a light neutral (`#A1A1AA` or `body-subtle` tuned for dark — verify contrast). Never place `heading` (`#1E1E1E`) on the dark surface.
- The side rails continue across the hero and footer, sides only, coloured **`border-dark` (`#2C2C2C`)** over the dark surface (not the warm `#D0CBC7`).
- **On a `#161616` surface, every border is `border-dark` (`#2C2C2C`)** — the side rails *and* all component/card borders, dividers, and input outlines. The warm `#D0CBC7` hairline is for greige surfaces only.
- Buttons on the hero/footer follow the surface-inverse rule in `buttons.md` (light `#EFEFEF` fill, `#161616` label).
- **The top navbar is always transparent and inherits the hero's background** — on the `#161616` hero it reads dark, with **no navbar fill and no bottom border**, so navbar and hero are one continuous surface. Navbar links are `white`/light, **`font-size-xl` (20px)**, and its buttons follow the surface-inverse rule for `#161616`. (Footer links are also **20px**; see `typography.md`.) **The navbar — and the top banner above it — is NEVER sticky or fixed:** it sits in normal document flow at the top of the page and **scrolls away with the content**, never pinned to the viewport.
- **The opened mobile menu is fully dark — never greige/cream.** When the hamburger opens the mobile nav (`≤ 768px`), the **entire header bar goes `surface-dark` (`#161616`)** (not the greige page it sits on), the collapsible menu panel is the **same `#161616`** flowing seamlessly from the bar (drop its border so header + panel read as **one black surface**, no card outline), and the links, brand wordmark, and the close (×) toggle all flip to **`white`**. The panel is never left on the greige `neutral-tertiary-soft` fill. This is driven off the open state alone, with no extra state class: while the menu is open, the header bar and the menu panel both take `surface-dark` (`#161616`), the brand wordmark and close toggle turn `white`, and the panel drops its border so bar and panel read as one continuous black surface.

---

## Top banners / announcement bars (the one section with a bottom border)

A **top banner** — an announcement / promo bar sitting **above the hero**, at the very top of the page (e.g. "We've launched X → Check it out") — is treated **exactly like the hero**, with **one** difference: it is the **only** element on the page that carries a **bottom border**.

- **Same surface as the hero:** `surface-dark` (`#161616`), with `white` / light text; links and buttons follow the dark-surface rules (surface-inverse buttons, `white` links). **All banner text — the copy AND the links — is `font-size-md` (16px)**, never larger (not the 20px navbar/footer size). See `typography.md`.
- **Same 1280px frame, same side rails:** the banner sits in the **same centered 1280px container** as the hero, with the **side rails on its left and right edges** — the rails run **continuously from the banner's top straight down into the hero** (`border-dark` `#2C2C2C` over the dark surface). Background is full-bleed; rails + content stay at 1280px.
- **The one bottom border on the page:** unlike every other section (which never carries a top or bottom border), the banner **always has a `border-bottom`** — a 1px `border-dark` (`#2C2C2C`) hairline over the dark surface — separating it from the navbar / hero below. This is the **single documented exception** to the no-horizontal-section-border rule.
- **No top border** — only the bottom. And the banner keeps the **≥ 24px inner padding** so its text and controls never touch the side rails.
- **Never sticky.** The banner — like the navbar — is **not** fixed or sticky; it scrolls away with the page and is never pinned to the top of the viewport.

---

## Dark accent sections (optional, mid-page)

An optional mid-page section may also use the dark surface to break the greige rhythm.

- Place a dark accent band **after two or three greige content sections** — never as the first band directly under the hero.
- Use for feature highlights, social proof, pricing, or CTA bands that need extra weight.
- Text and buttons follow the same dark-surface rules as the hero/footer above.

### Rounded top — dark accent bands only

**A mid-page section with background `#161616` may take a rounded top edge — a 44px radius on the two top corners only.**

- Apply **44px** on the **top corners only** — the bottom edge stays square unless the next section is greige and no overlap is needed.
- **Greige sections never** use this 44px top radius; the **hero and footer** (anchored at the page ends) stay flat-topped.
- Component cards inside a dark section keep the normal `radius-xxl` (24px) — the 44px rule is for the **section shell**, not nested cards.

---

## Section order — prohibited adjacencies

These pairings are **never allowed** on marketing pages:

| Prohibited | Why |
|---|---|
| **All one greige tone** | Every content section rendered in a single greige — the page must alternate `#E6E3E0` / `#E0DCD8` |
| **Dark without greige runway** | A mid-page dark accent placed directly under the hero, or with fewer than two greige sections before it |
| **Two dark accent bands adjacent** | Back-to-back mid-page `#161616` bands (the hero and footer are the anchored dark ends) |
| **Brand as a section background** | The teal brand is a control/accent colour, never a section band |

### Valid rhythm (example)

```
Hero          → #161616 (dark, always)
Greige        → #E6E3E0  features
Greige        → #E6E3E0  logos / metrics
Greige        → #E6E3E0  testimonials
Greige        → #E0DCD8  pricing        (rhythm switch)
Greige        → #E0DCD8  FAQ
Dark (opt.)   → #161616  CTA band (rounded top 44px)
Footer        → #161616 (dark, always)
```

Adjust the counts, but keep the two-tone greige alternation between the dark hero and dark footer.

---

## Dashboard / application UI

Application shells, dashboards, and `/application` routes follow a **strict greige-only** surface rule:

- **Background:** `neutral-secondary-soft` (`#E6E3E0`) or `neutral-tertiary-soft` (`#E7E3DF`) for page chrome — **never** `brand`, **never** `surface-dark`.
- **No section rounded tops** — no 44px (or any) top-radius on page bands; flat section edges throughout.
- **No dark or brand page bands** — brand appears on buttons, badges, charts, and focus states only, not as section backgrounds.
- The sidebar, widgets, tables, and the app top bar fill **`surface-raised` (`#ECECEC`)** — a light raised chrome surface that lifts them off the warm greige page — with hairline `#D0CBC7` borders. See `colors.md`.

If a screen is product UI (nav, tables, widgets, charts), treat it as dashboard — not marketing section rhythm.

---

## Section vertical padding (marketing only)

Every marketing page band — hero, greige content sections, dark accent bands, CTA, and footer — uses **symmetric vertical padding**:

| Viewport | Padding top & bottom |
|---|---|
| **Below large (`< 1024px`)** | `spacing-12` (48px) — compact rhythm on mobile and tablet |
| **Large and up (`≥ 1024px`)** | **`96px`** (`spacing-section-y-lg`, `6rem`) — fixed top and bottom |

- Apply via the shared `.section`, `.hero`, and `.site-footer` shells on landing and marketing routes.
- **Dashboard and `/application` are exempt** — app chrome, widgets, and content areas use dashboard spacing from `spacing.md`, not this 96px section rule.
- Do not override with one-off `padding-block` values on individual marketing sections unless a product brief documents an exception.
- Top padding equals bottom padding within each section; do not mix unequal vertical padding on the same band.

---

## Implementation checklist

Before shipping a marketing page:

1. The **hero and footer are both `#161616`** (dark), with `white` headings/copy and surface-inverse buttons.
2. Every content block between them is a **greige tone**, **alternating `#E6E3E0` and `#E0DCD8`** so the page is never one flat colour.
3. Any optional mid-page `#161616` band sits **after 2–3 greige sections** and may take a **44px rounded top**.
4. The content container shows its **left/right `#D0CBC7` side rails** (1px, sides only) running the full page height — over greige and dark alike; grid columns reuse that single divider, never doubled.
5. Cards inside any section match that section's background per `colors.md`.
6. Large screens (`≥ 1024px`): every marketing section uses **96px padding top and bottom** — hero, greige, dark, CTA, and footer included.

Before shipping dashboard / application UI:

1. Page background is **warm greige only** — no dark bands, no brand bands, no 44px section rounding; `#D0CBC7` hairlines only.

---

## Prohibited

- **No section colour outside the set** — only `#E6E3E0`, `#E0DCD8`, and `#161616` on marketing pages.
- **No single-tone page** — content sections must alternate `#E6E3E0` and `#E0DCD8`; never render them all one greige.
- **No divider between differently-coloured sections** — the diagonal-hatch divider appears **only between two same-tone greige sections** (both `#E6E3E0`, or both `#E0DCD8`); **omit it at a tone switch** (`#E6E3E0` ↔ `#E0DCD8`) and at any seam touching a `#161616` band (hero, footer, dark).
- **No off-width divider** — it is **always exactly 1280px** (rail to rail), **never narrower** and never wider.
- **No divider glued to a section edge** — it is **centred exactly on the seam** with equal space above and below; never flush against a section's bottom (or top) edge, and it never eats a section's padding.
- **No brand section background** — the teal `brand` is a control/accent colour, never a section band.
- **No boxed sections** — a marketing section is framed by the two vertical side rails (left/right) only; never add a top or bottom border that closes it into a box.
- **No `border-top` / `border-bottom` on any section, ever** — hero, footer, and content bands included. This also covers overlaying chrome: a transparent navbar or announcement bar must not draw a `border-bottom` over the hero, since it renders as a section top border.
- **No doubled column dividers** — a shared vertical rail between two grid cells is drawn once, never a 1px border on each side stacking into a 2px line.
- **No interrupted rails** — the side rails are **one unbroken line from the top of the page to the bottom**, drawn once on the container (or a full-height overlay). Never redraw them per section (per-section `border-left`/`border-right` breaks the line into mismatched segments).
- **No rails on the full-bleed section band** — never put a border, inset shadow, or outline on the full-viewport background element (hero, footer, or any band); that paints lines at the viewport edges. The rail — greige `#D0CBC7` and its `#2C2C2C` dark recolour alike — exists only at the centered 1280px `page-container` edges.
- **No content touching the rail** — every section insets its content **≥ 24px (`spacing-6`)** from the left and right rails; the rail stays on the container, the padding stays on the inner content.
- **Rail colour by surface, line unbroken** — `#D0CBC7` over greige, `border-dark` (`#2C2C2C`) over `#161616`; the colour segments to stay visible, but the line itself never breaks.
- **No 44px rounded top on greige sections, the hero, or the footer** — that shape is exclusive to optional mid-page `#161616` accent bands.
- **No dark accent band** without the 2–3 greige section runway after the hero.
- **No custom section vertical padding on marketing pages** — use the shared 96px top/bottom at large breakpoints; dashboard routes are exempt.

---

## Quick reference — section surface rhythm

A condensed summary of the rules above (Still / Enhanced — two greiges + dark hero/footer, dashboard greige-only).

### Marketing pages

- **Content:** two greige tones, **`#E6E3E0` and `#E0DCD8`, always alternating** (default 3 then 2) — never one flat colour.
- **Hero & footer:** **always `#161616`** (dark), `white` copy, surface-inverse buttons.
- **Dark accent (optional):** mid-page `#161616` band after **2–3 greige sections**; **44px rounded top** on that band only.
- **Side rails:** one **unbroken** vertical hairline on the **left and right edges of the 1280px container**, top to bottom — `#D0CBC7` over greige, `#2C2C2C` over `#161616`; content inset **≥ 24px** from the rail.
- **Brand** teal is a control/accent colour — **never** a section background.

### Dashboard / `/application`

- **Warm greige background only** — no dark bands, no brand bands, no 44px section rounding.
- Brand appears on controls and accents only, not page bands.
- **Exempt from 96px marketing section padding** — use dashboard/app spacing instead.

### Section padding (marketing only)

- **Large screens (`≥ 1024px`):** every marketing section — hero, greige, dark, CTA, footer — gets **96px padding top and 96px padding bottom**.
- **Below large:** `48px` (`spacing-12`) top and bottom.
- Dashboard/application routes do **not** use this rule.
