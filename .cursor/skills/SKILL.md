# Z-UI consumer guide

This portfolio consumes the published [Z-UI](https://github.com/Zurmely/ui) design system via npm:

- `@z-ux/tokens@0.1.0` for semantic CSS tokens
- `@z-ux/ui@0.1.0` for React components (SSR only in this site)

## Setup in this repo

Global styles load in [`src/styles/global.css`](../src/styles/global.css):

```css
@import "@z-ux/tokens/colors.css";
@import "@z-ux/tokens/sizes.css";
@import "./site-text.css";
@import "@z-ux/tokens/motion.css";
@import "@z-ux/tokens/elevation.css";
@import "@z-ux/ui/styles.css";
```

Manrope is self-hosted through `@fontsource-variable/manrope` (no Google Fonts request).

## Rules

1. Use `--z-*` semantic tokens for color, spacing, radius, text, motion, and elevation.
2. Prefer per-component imports from `@z-ux/ui` (for example `@z-ux/ui/button`, `@z-ux/ui/card`).
3. Root-only exports (`Navbar`, `Breadcrumbs`, `Pagination`, `Steps`, `Megamenu`) come from `@z-ux/ui`.
4. Render React components through Astro **without** `client:*` on marketing pages.
5. Keep theme toggle, mobile nav, and locale redirect as small framework-free scripts.
6. Use Lucide outline icons for custom icon slots.
7. Do not invent one-off hex values or local token sheets that diverge from `@z-ux/tokens`.

## Theme

Set `data-theme="light"` or `data-theme="dark"` on `<html>`. Theme bootstrap lives in `src/utils/theme-init.ts`.

## Section tones

| Tone | CSS class | Token background |
|------|-----------|------------------|
| Default | `site-section` | `--z-color-background-canvas` |
| Surface | `site-section--surface` | `--z-color-background-surface` |
| Subtle | `site-section--subtle` | `--z-color-background-subtle` |
| Inverse | `site-section--inverse` | `--z-color-background-inverse` |

Hero, header shell, and footer use inverse tone.

## Component mapping

| Portfolio need | Z-UI component |
|----------------|----------------|
| Site header | `Navbar`, `NavbarLogo`, `NavbarContent`, `NavbarItem`, `IconButton`, `Link`, `Stack` |
| Site footer | `Stack`, `Link`, `Separator` |
| Theme toggle | `IconButton` + framework-free script |
| Locale switcher | `Link`, `Stack`, `Separator` |
| CTAs | `Button` + `Link` (`asChild`) |
| Text links | `Link` |
| Cards | `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` |
| Badges | `Badge` |
| Breadcrumbs | `Breadcrumbs`, `BreadcrumbItem`, `BreadcrumbLink` |
| Experience timeline | `Timeline`, `TimelineItem` |
| Contact rows | `ListItem` (`as="a"`) |
| Layout stacks | `Stack` |
| Separators | `Separator` |

## Upstream references

- [COLOR-SEMANTICS.md](https://github.com/Zurmely/ui/blob/main/COLOR-SEMANTICS.md)
- [TEXT-SEMANTICS.md](https://github.com/Zurmely/ui/blob/main/TEXT-SEMANTICS.md)
- [SIZES-SEMANTICS.md](https://github.com/Zurmely/ui/blob/main/SIZES-SEMANTICS.md)
- Component docs under `packages/react/src/components/*/`
