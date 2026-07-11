# Feature icons — 32×32px, always

> Feature-section icons must be **32×32px — no exceptions**. Depends on: `cards.md`, `typography.md`.

Per `cards.md` and `SKILL.md`: every icon in a **features / benefits / services / how-it-works / partner matrix** block is **32×32px** (width **and** height). Rendering at 16px, 18px, 20px, or 24px is a **bug**.

Includes the **“Teams that run async with Still”** logos/benefits block — use the dedicated feature glyph, not the default 16px UI icon.

## Required rules

1. **Use the dedicated feature-icon set** — never reuse the default UI icon set (16px) for feature glyphs.
2. **Render at the 32px feature-icon size** — enforce the size once, in the token layer (a dedicated 32px feature-icon size token), so every feature glyph is 32×32 by default rather than sized per instance.
3. **Do not shrink it in a wrapper** — the glyph *is* the 32×32 box; a surrounding element never scales it down.

## Visual rules

- **Colour:** `heading` or `body` — not brand teal (`cards.md`).
- **Style:** outline / line only.
- **Layout:** icon → heading (`spacing-4` gap) → copy, stacked vertically.

## Before shipping

Search the diff for feature sections and confirm every glyph uses the feature-icon set and measures **32×32px** in the browser.
