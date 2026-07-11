# Color Tokens — TypeUI · Enhanced

> The color system for **TypeUI · Enhanced**. Enhanced is built on **two warm greige content tones** — `#E6E3E0` and `#E0DCD8`, alternating so the page is never one flat colour — between a **dark `#161616` hero and footer**. The **deep teal-green** brand (`#32746D`) is a control and accent colour (links, badges, focus rings), **never a section background**. Surfaces read clean and **generously rounded** — pill controls on 24px cards — framed by barely-visible `#D0CBC7` side rails; cards sit on their section with the **same background color**, separated by a hairline **`#D0CBC7`** border rather than a shadow. Status hues (success, danger, warning) appear *only* when something truly is success, danger, or warning; they are never decoration. Every value below is a literal hex and the single source of truth; components reference semantic tokens, never raw hex or palette steps directly.

---

## Token naming

| Pattern | Role |
|---|---|
| `body`, `heading`, `body-subtle` | Default text hierarchy |
| `fg-{intent}` | Foreground / text for brand, status, accent |
| `neutral-{level}-{accent}` | Neutral surfaces (backgrounds) |
| `brand`, `brand-soft`, `brand-strong` | Brand fills — control accents, focus, links (never a section background) |
| `success`, `danger`, `warning` (+ `-soft`, `-medium`, `-strong`) | Status surfaces |
| `default`, `light`, `muted`, `buffer` | Border intent |
| `{accent}` | Standalone accent surfaces (purple, cyan, teal, etc.) |

**Level:** `primary` · `secondary` · `tertiary` · `quaternary`  
**Accent (surface):** `soft` · `medium` · `strong` · `strongest`  
**Foreground accent:** `subtle` · `strong`

---

## Semantic tokens — text

| Token | Hex |
|---|---|
| body | `#727272` |
| body-subtle | `#78736E` |
| heading | `#1E1E1E` |
| fg-brand-subtle | `#BCD3CF` |
| fg-brand | `#32746D` |
| fg-brand-strong | `#265A54` |
| fg-success | `#15803D` |
| fg-success-strong | `#14532D` |
| fg-danger | `#C81E1E` |
| fg-danger-strong | `#771D1D` |
| fg-warning-subtle | `#B45309` |
| fg-warning | `#7C2D12` |
| fg-yellow | `#CA8A04` |
| fg-disabled | `#A39E99` |
| fg-purple | `#9333EA` |
| fg-cyan | `#0891B2` |
| fg-indigo | `#4F46E5` |
| fg-pink | `#D61F69` |
| fg-lime | `#65A30D` |

---

## Semantic tokens — background

### Neutral

| Token | Hex |
|---|---|
| neutral-primary-soft | `#E6E3E0` |
| neutral-primary | `#E6E3E0` |
| neutral-primary-medium | `#E6E3E0` |
| neutral-primary-strong | `#E6E3E0` |
| neutral-secondary-soft | `#E6E3E0` |
| neutral-secondary | `#E6E3E0` |
| neutral-secondary-medium | `#E6E3E0` |
| neutral-secondary-strong | `#E6E3E0` |
| neutral-secondary-strongest | `#E6E3E0` |
| neutral-tertiary-soft | `#E7E3DF` |
| neutral-tertiary | `#E0DCD8` |
| neutral-tertiary-medium | `#D0CBC7` |
| neutral-quaternary | `#C2BBB3` |
| neutral-quaternary-medium | `#A39E99` |
| gray | `#78736E` |
| surface-dark | `#161616` |
| surface-raised | `#ECECEC` |

### Brand

| Token | Hex |
|---|---|
| brand-softer | `#E3ECEA` |
| brand-soft | `#BCD3CF` |
| brand | `#32746D` |
| brand-medium | `#5E948D` |
| brand-strong | `#265A54` |

### Status

| Token | Hex |
|---|---|
| success-soft | `#ECFDF3` |
| success | `#15A34A` |
| success-medium | `#D1FADF` |
| success-strong | `#15803D` |
| danger-soft | `#FFF1F2` |
| danger | `#BE123C` |
| danger-medium | `#FFE4E6` |
| danger-strong | `#9F1239` |
| warning-soft | `#FFFAEB` |
| warning | `#F97316` |
| warning-medium | `#FFEDD5` |
| warning-strong | `#C2410C` |

### Utility & accent

| Token | Hex |
|---|---|
| dark-soft | `#3A3735` |
| dark | `#242424` |
| dark-strong | `#1E1E1E` |
| disabled | `#E0DCD8` |
| purple | `#A855F7` |
| sky | `#0EA5E9` |
| teal | `#0D9488` |
| pink | `#D61F69` |
| cyan | `#06B6D4` |
| fuchsia | `#C026D3` |
| indigo | `#6366F1` |
| orange | `#E8590C` |

---

## Semantic tokens — border

| Token | Hex |
|---|---|
| buffer | `#E6E3E0` |
| buffer-medium | `#E6E3E0` |
| buffer-strong | `#E6E3E0` |
| muted | `#E7E3DF` |
| light-subtle | `#E0DCD8` |
| light | `#D0CBC7` |
| light-medium | `#D0CBC7` |
| default-subtle | `#D0CBC7` |
| default | `#D0CBC7` |
| default-medium | `#C2BBB3` |
| default-strong | `#A39E99` |
| border-dark | `#2C2C2C` |
| success-subtle | `#BBF7D0` |
| danger-subtle | `#FECDD3` |
| warning-subtle | `#FED7AA` |
| brand-subtle | `#BCD3CF` |
| brand-light | `#32746D` |
| dark-subtle | `#242424` |
| dark-backdrop | `#1E1E1E` |

---

## Light theme registry

Flat token map for the default (light) theme. Implement in your stack’s token layer — theme file, design tokens JSON, variables map, etc.

```
body                          #727272
body-subtle                   #78736E
heading                       #1E1E1E
fg-brand-subtle                 #BCD3CF
fg-brand                        #32746D
fg-brand-strong                 #265A54
fg-success                      #15803D
fg-success-strong               #14532D
fg-danger                       #C81E1E
fg-danger-strong                #771D1D
fg-warning-subtle               #B45309
fg-warning                      #7C2D12
fg-yellow                       #CA8A04
fg-disabled                     #A39E99
fg-purple                       #9333EA
fg-cyan                         #0891B2
fg-indigo                       #4F46E5
fg-pink                         #D61F69
fg-lime                         #65A30D
neutral-primary-soft            #E6E3E0
neutral-primary                 #E6E3E0
neutral-primary-medium          #E6E3E0
neutral-primary-strong          #E6E3E0
neutral-secondary-soft          #E6E3E0
neutral-secondary               #E6E3E0
neutral-secondary-medium        #E6E3E0
neutral-secondary-strong        #E6E3E0
neutral-secondary-strongest     #E6E3E0
neutral-tertiary-soft           #E7E3DF
neutral-tertiary                #E0DCD8
neutral-tertiary-medium         #D0CBC7
neutral-quaternary              #C2BBB3
neutral-quaternary-medium       #A39E99
gray                            #78736E
surface-dark                    #161616
surface-raised                  #ECECEC
brand-softer                    #E3ECEA
brand-soft                      #BCD3CF
brand                           #32746D
brand-medium                    #5E948D
brand-strong                    #265A54
success-soft                    #ECFDF3
success                         #15A34A
success-medium                  #D1FADF
success-strong                  #15803D
danger-soft                     #FFF1F2
danger                          #BE123C
danger-medium                   #FFE4E6
danger-strong                   #9F1239
warning-soft                    #FFFAEB
warning                         #F97316
warning-medium                  #FFEDD5
warning-strong                  #C2410C
dark-soft                       #3A3735
dark                            #242424
dark-strong                     #1E1E1E
disabled                        #E0DCD8
purple                          #A855F7
sky                             #0EA5E9
teal                            #0D9488
pink                            #D61F69
cyan                            #06B6D4
fuchsia                         #C026D3
indigo                          #6366F1
orange                          #E8590C
buffer                          #E6E3E0
buffer-medium                   #E6E3E0
buffer-strong                   #E6E3E0
muted                           #E7E3DF
light-subtle                    #E0DCD8
light                           #D0CBC7
light-medium                    #D0CBC7
default-subtle                  #D0CBC7
default                         #D0CBC7
default-medium                  #C2BBB3
default-strong                  #A39E99
border-dark                       #2C2C2C
success-subtle                  #BBF7D0
danger-subtle                   #FECDD3
warning-subtle                  #FED7AA
brand-subtle                    #BCD3CF
brand-light                     #32746D
dark-subtle                     #242424
dark-backdrop                   #1E1E1E
```

---

## Dark theme registry

Applied via `[data-theme="dark"]` on the document root. **Dark surfaces stay fixed** (`surface-dark`, `border-dark`, brand core). **Light surfaces and their dependent text/border tokens remap** to charcoal equivalents so greige content sections read as dark bands while hero and footer remain `#161616`.

```
body                          #A1A1AA
body-on-light                 #B4B4B8
body-subtle                   #9A9A9E
heading                       #EFEFEF
fg-brand-strong               #BCD3CF
fg-disabled                   #6B6B70
neutral-primary-soft          #1E1E1E
neutral-tertiary              #242424
neutral-tertiary-medium       #2C2C2C
neutral-quaternary            #3A3735
surface-raised                #2A2A2A
brand-softer                  #1A2E2C
border-default                #2C2C2C
border-default-strong         #3A3735
success-soft                  #0F2918
danger-soft                   #2A1215
```

Greige section buttons under dark theme use the same surface-inverse treatment as dark sections (light fill, dark label). Hero, header shell, and footer keep `surface-dark` (`#161616`) in both themes.

---

## Usage rules

- **Content greige rhythm; dark hero/footer; dashboard greige-only.** Content sections alternate `neutral-secondary-soft` (`#E6E3E0`) and `neutral-tertiary` (`#E0DCD8`) — never one flat tone. The **hero and footer are always `surface-dark` (`#161616`)**; an optional mid-page `#161616` band may take a 44px rounded top after 2–3 greige sections. `brand` (`#32746D`) is **never a section background**. Dashboard/application routes use warm greige only — no dark bands, no section rounding. See `sections.md`.
- **Hero & footer are always dark.** The hero and footer use `surface-dark` (`#161616`); every content section between them is one of the two greige tones. Never use `brand` as a section background.
- **Light text on dark surfaces.** On the `#161616` hero, footer, and dark bands, use `white` for headings, body, and inline text so it reads against the near-black. Never place `heading` (`#1E1E1E`) text on a dark surface.
- **Page & section backgrounds:** `neutral-secondary-soft` (`#E6E3E0`) and `neutral-tertiary` (`#E0DCD8`), **alternating**, for content sections; `surface-dark` (`#161616`) for the hero and footer.
- **Marketing cards match their section's background.** On marketing / landing pages a card carries the **same background color as the section it sits on** — `#E6E3E0` or `#E0DCD8` on content sections (matching that section's tone), `#161616` on the hero/footer — and separates **only** by a hairline `default` (`#D0CBC7`) border, never a lighter/derived fill and never a shadow. **The one exception is raised chrome (next rule).**
- **Raised chrome surfaces = `surface-raised` (`#ECECEC`).** Every **dashboard widget**, the **application navbar (top bar)**, **sidebars**, **modals**, and **drawers** fill `surface-raised` (`#ECECEC`) — a light raised surface that lifts them off the warm greige page, separated by the hairline `default` (`#D0CBC7`) border. This is the **only** place a surface does not match the section behind it. (The *marketing* navbar stays transparent over the hero — this is the app/dashboard navbar.)
- **Controls match their surface, defined by a border:** inputs, selects, textareas, checkboxes, radios, and toggles use the **same background color as the surface they sit on** (`#E6E3E0` on a warm greige card/section) and are outlined by a `default` (`#D0CBC7`) border — never a contrasting fill. Focus draws a `brand` border + ring; checked / selected / on states use the `brand` fill. See `input-field.md`.
- **Primary actions (surface-inverse buttons).** On a greige section (`#E6E3E0` / `#E0DCD8`) the button fills `#161616` (`surface-dark`) with a **light label the same colour as that section's greige** (`#E6E3E0` or `#E0DCD8`); on a `#161616` section the button fills `#EFEFEF` with a `#161616` label. Every button carries a visible 1px hairline border and rounds to a full pill (`radius-full`). The teal `brand` (`#32746D`) is reserved for links, focus rings, and small accents. See `buttons.md`.
- **Headings:** `heading` (`#1E1E1E`) · **Body:** `body` (`#727272`) · **Muted:** `body-subtle`.
- **Links / CTAs:** `fg-brand` (`#32746D`) on greige surfaces; `white` on dark surfaces.
- **Borders:** on greige surfaces, cards and component shells carry a `default` (`#D0CBC7`) border; `default-strong` is reserved for genuine dividers and the rare functional edge. **On a `#161616` surface, every border is `border-dark` (`#2C2C2C`)** — the side rails *and* all component/card borders, dividers, and input outlines — never the warm `#D0CBC7`.
- **Side rails & full-bleed background:** the section background colour is **full-bleed (spans the whole viewport)**, while the **content and the two side rails are capped at the centered 1280px container**. The rails are one **continuous, top-to-bottom line** on the left and right edges of that container — `default` (`#D0CBC7`) over greige, `border-dark` (`#2C2C2C`) over `#161616` — never broken, with content inset ≥ 24px from it. See `sections.md`.
- **Disabled states:** `disabled` background + `fg-disabled` text.
- **Never use raw hex in components** — always reference semantic tokens.

## Prohibited

These rules are non-negotiable unless a product brief explicitly documents an exception and a compensating control.

### Token identity — agnostic by design

- **Semantic tokens are this design system’s vocabulary** — named roles (`body`, `brand`, `neutral-secondary-soft`), not imports from any external palette, framework, or vendor scale. Palette tables in this file are derivation reference only; they are **not** token names and **not** licensed aliases for third-party color systems.
- **Do not label or treat tokens as foreign palette steps** — never refer to `brand` as “teal 700”, `body` as “stone 600”, or `neutral-quaternary` as “stone 300” in specs, code comments, or handoff. If a token exists, use its name.
- **Do not rename tokens to match another stack** — map *into* your implementation layer (theme file, variables map, design tool styles); do not rename tokens to fit a framework’s naming convention and call that “the design system.”
- **Hex values belong to the token registry** — each semantic token owns one resolved hex per theme. Tokens are the contract; hex is the stored value, not something authors pick at build time.

### Implementation boundaries

- **No raw hex in UI surfaces** — components, layouts, illustrations, and marketing assets must reference semantic tokens only. Hex appears in this registry and in the token layer — nowhere else.
- **No palette steps in product UI** — do not apply base-palette rows directly to buttons, text, borders, or backgrounds. Every color choice resolves through a semantic token.
- **No token chaining** — semantic tokens must not point at other tokens or palette variables (`token-a → token-b → #hex`). Each semantic token holds its own hex so the system stays portable and auditable.
- **No one-off colors for “close enough”** — if no token fits, add a token to this file with documented intent; do not hard-code a nearby hex in a single screen or component.
- **No mixing themes on one surface** — light-registry values and dark-registry values must not be blended on the same element because the other theme “looked better.”
- **Brand is never a section background** — the teal `brand` (`#32746D`) appears on links, focus rings, badges, and small accents only. Section bands are the two greiges (`#E6E3E0` / `#E0DCD8`) for content and `surface-dark` (`#161616`) for the hero, footer, and optional mid-page accent per `sections.md`.
- **No card fill that differs from its section — except raised chrome.** A **marketing** card always matches the background of the section it sits on (border-only separation). The single documented exception is **raised chrome** — dashboard widgets, the app navbar, sidebars, modals, and drawers — which fill `surface-raised` (`#ECECEC`).

### Semantic misuse

- **No brand foreground for long copy** — `fg-brand`, `fg-brand-strong`, and related brand text tokens are for links, labels, badges, and short emphasis — not paragraphs, articles, or legal text. Body copy uses `body` / `body-subtle`.
- **No accent foreground for navigation or body** — `fg-purple`, `fg-cyan`, `fg-pink`, `fg-indigo`, `fg-lime`, and similar accent text tokens are for tags, charts, and inline highlights — not nav items, menu labels, or reading text.
- **No status colors without status meaning** — `success`, `danger`, `warning`, and their `-soft` / `-strong` variants communicate state. Do not use them for decoration, category color-coding unrelated to state, or “making it pop.”
- **No accent backgrounds on full shells in dashboard UI** — application and dashboard routes use warm greige page backgrounds only. On marketing pages, section bands use the two greiges (`#E6E3E0` / `#E0DCD8`) for content or `surface-dark` (`#161616`) for the hero, footer, and optional dark bands per `sections.md`. Accent fills on controls, badges, and charts remain allowed everywhere.
- **No border tokens as fills or text colors** — `default`, `light`, `brand-subtle`, and other border tokens define edges; do not repurpose them as background or typography colors without adding a proper surface or text token.

### Contrast, accessibility, and states

- **No token pairing that fails readable contrast** — when combining text and surface tokens, verify legibility (WCAG 2.2 AA minimum for text). The deep teal-green `brand` in particular pairs with a light (`white`) label, never dark. If a pair fails, change the token assignment or add a dedicated pair to the registry — do not override with raw hex.
- **No disabled styling that looks active** — disabled surfaces use `disabled` + `fg-disabled`; do not reuse `body` or `brand` on disabled controls because they read as clickable.
- **No hover/focus/active colors outside the system** — interaction states must derive from the same semantic set (e.g. a stronger brand step already in the registry), not ad-hoc lightened or darkened hex.

### Governance

- **No silent drift** — changing a token’s hex is a design-system change; update this file, note the reason, and propagate to all platforms. Per-platform hex tweaks break parity.
- **No duplicate tokens for the same job** — if two names resolve to the same role, merge them. Synonym sprawl erodes the agnostic contract.
- **No exceptions without documentation** — breaking any rule above requires naming the exception, the surface it applies to, and why the existing tokens were insufficient.
