# Border Radius Tokens — TypeUI · Enhanced

> Corner-radius tokens for the **TypeUI “Enhanced”** design system. Enhanced is a soft, generously rounded, editorial theme: its most recognizable trait is **fully pill controls** (buttons, badges, inputs, alerts round to `radius-full`) sitting on **24px rounded cards and panels** (`radius-xxl`). Every value below is a literal size — tokens are the source of truth; components reference tokens, never ad-hoc px or rem.

Depends on: none (pairs with `colors.md` for nested-radius math on filled surfaces).

**Root assumption:** `1rem = 16px` unless the product documents a different root.

---

## Enhanced radius convention (read first)

This is the rule that defines the Enhanced look. Do not deviate without a documented exception.

| Rule | Token | Value | Applies to |
|---|---|---|---|
| **Pill controls = 999px** | `radius-full` | 999px | Buttons, badges/chips/tags, single-line inputs (text, email, search, number, phone, select), alerts — plus functionally-round controls: the toggle track, avatars, radio, range thumb & track, status dots, spinners |
| **Card / panel shell = 24px** | `radius-xxl` | 24px | Cards, modals, dropdown & menu panels, drawers, tooltips/popovers, accordions, tabs panels, pagination groups, tables |
| **Textarea = 16px** | `radius-xl` | 16px | The multi-line textarea only — never a pill (a 999px radius bows the tall sides) |
| **Checkbox box** | `radius-xs` | 4px | The 16px tick box — a tight inset radius |
| **Nested child inside a shell** | `radius-sm` | 6px | Menu items, inset cells, small controls sitting inside a padded parent (see Nested radius) |
| **Flush data** | `radius-none` | 0 | Table cells, flush list rows, dividers |

Controls are pills; containers are **24px** rounded. The only inputs exempt from the pill are the **checkbox** (small tick box) and the **textarea** (16px).

**Edge-anchored exception:** panels that sit flush against a viewport edge — drawers, full-bleed bottom sheets — keep **square** corners (`radius-none`) on the flush edges only; the free edges keep the 24px shell radius.

---

## Token naming

| Pattern | Role |
|---|---|
| `radius-base` | Single base unit all steps derive from |
| `radius-{step}` | Named step on the scale (`none` → `full`) |

Steps are **multipliers of `radius-base`**, not independent picks.

---

## Base unit

| Token | rem | px |
|---|---|---|
| radius-base | 0.0625rem | 1 |

---

## Radius scale

| Token | Multiplier | rem | px | Typical use |
|---|---|---|---|---|
| radius-none | 0× | 0 | 0 | Square corners, table cells, flush dividers |
| radius-xs | 4× | 0.25rem | 4 | Checkbox tick box, hairline inset frames |
| radius-sm | 6× | 0.375rem | 6 | Nested children inside a shell (menu items, inset cells) |
| radius-md | 8× | 0.5rem | 8 | Dense inner controls, small inset surfaces |
| radius-lg | 12× | 0.75rem | 12 | Secondary panels, inner cards |
| radius-xl | 16× | 1rem | 16 | **Textarea**, medium panels |
| radius-xxl | 24× | 1.5rem | 24 | **Enhanced card / panel shell** — cards, modals, menus, drawers, tooltips, tabs, tables |
| radius-xxxl | 32× | 2rem | 32 | Oversized hero cards / large feature panels |
| radius-full | 9999× | — | 9999px | **Pill controls** — buttons, badges, inputs, alerts — plus toggle track, avatars, radio, range, status dots, spinners |

Enhanced is a two-tier rounded system: **controls go fully pill (`radius-full`)** while **containers rest at 24px (`radius-xxl`)**, with textarea (16px) and the checkbox tick (4px) the only stepped-down exceptions.

---

## Flat registry

```
radius-base    0.0625rem  (1px)
radius-none    0
radius-xs      0.25rem    (4px)
radius-sm      0.375rem   (6px)
radius-md      0.5rem     (8px)
radius-lg      0.75rem    (12px)
radius-xl      1rem       (16px)
radius-xxl     1.5rem     (24px)
radius-xxxl    2rem       (32px)
radius-full    9999px
```

---

## Nested radius

When a parent wraps a child with padding between them:

```
innerRadius = outerRadius − padding
```

A 24px card with `spacing-4` (16px) padding yields an ~8px inner corner, so nested children step down to `radius-md` (8px) or `radius-sm` (6px) — concentric and visually calm against the 24px shell. Keep inner corners equal to or smaller than their parent; never round a child more than its container. (A pill control inside a card keeps its `radius-full` — a pill is not "more rounded than" a 24px box, it is a different, functional shape.)

---

## Usage by surface type

| Surface | Token | px |
|---|---|---|
| **Pill controls** — buttons, badges, single-line inputs (text/email/search/number/phone/select), alerts | `radius-full` | 999 |
| **Functionally round controls** — toggle track, avatars, status dots, radio, range, spinners | `radius-full` | 999 |
| **Card / panel shells** — cards, modals, dropdown & menu panels, drawers, tooltips, accordions, tabs panels, pagination, tables | `radius-xxl` | 24 |
| Textarea (multi-line) | `radius-xl` | 16 |
| Oversized hero / feature panels | `radius-xxxl` | 32 |
| Checkbox tick box | `radius-xs` | 4 |
| Nested children inside a shell (menu items, inset cells) | `radius-sm` | 6 |
| Flush lists, table cells, dividers | `radius-none` | 0 |

---

## Prohibited

- **No raw px/rem in components** — use a `radius-*` token.
- **No squared controls** — buttons, badges, inputs, and alerts are pills (`radius-full`); shipping 0px or small-radius controls is a different theme, not Enhanced.
- **No pill on a card or a textarea** — cards/panels are `radius-xxl` (24px) and the textarea is `radius-xl` (16px); a 999px radius on a tall or wide box bows the sides.
- **No off-scale shell corners** — containers are `radius-xxl` (24px); do not ship 8px or 40px card corners.
- **No off-scale values** (e.g. 9px, 11px, 20px) — add a token to this file if the scale is insufficient.
- **No child rounded more than its parent** — items inside a 24px card step down to `radius-md` (8px) / `radius-sm` (6px), never up (a functional pill control is exempt).
- **No mixing step names from foreign systems** — if a token exists here, use its name.
