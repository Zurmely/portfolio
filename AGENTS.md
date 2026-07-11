# AGENTS.md

Instructions for AI agents working in this repository.

## Always finish by pushing

When you complete a task that changes the repo:

1. Commit the relevant changes (unless the user said not to commit).
2. **Push to `origin`** on the current branch (`git push -u origin HEAD` if needed).
3. Confirm the push succeeded and report the remote status.

Do not leave finished work only on the local machine. Deploy happens from `master`/`main` via GitHub Actions, so unpushed commits do not go live.

## What this repo is

Bilingual (PT/EN) static portfolio for Gabriel Zurmely.

- **Stack:** Astro 5, TypeScript, content collections, Lucide icons
- **Output:** fully static (`output: "static"`), trailing slashes always
- **Domain:** `https://zurmely.com` (GitHub Pages + custom domain via `public/CNAME`)
- **Default branch:** `master`

## Design system (non-negotiable)

Visual rules live in [`.cursor/skills/`](.cursor/skills/). Read the relevant modules before changing UI.

- Canonical entry: [`.cursor/skills/SKILL.md`](.cursor/skills/SKILL.md)
- Foundations: `colors.md`, `typography.md`, `spacing.md`, `radius.md`, `shadows.md`, `sections.md`
- Implemented tokens: [`src/styles/tokens/`](src/styles/tokens/) + [`src/styles/global.css`](src/styles/global.css)

Atlas signature: dark hero/footer (`#161616`), alternating greige content sections, teal brand only for links/focus/accents (never section fills or primary button fills).

### Theme model

- `data-theme="light" | "dark"` on `<html>`
- **Dark surfaces stay dark** in both themes (hero, header shell, footer, `surface-dark`)
- **Light surfaces remap** in dark mode (greige neutrals, raised fills, body/heading text, soft borders)
- Bootstrap: [`src/utils/theme-init.ts`](src/utils/theme-init.ts) + [`ThemeInit.astro`](src/components/ThemeInit.astro)
- Toggle: [`ThemeToggle.astro`](src/components/ThemeToggle.astro) in the site header
- Preference: `localStorage.theme`, else `prefers-color-scheme`

Do not invert hero/footer to light in light mode. Do not invent one-off hex in components; use semantic tokens.

## Layout and routing

| Path | Role |
|------|------|
| `/` | Locale gateway ([`src/pages/index.astro`](src/pages/index.astro)); optional EN redirect |
| `/pt/`, `/en/` | Homepages |
| `/pt/contact/`, `/en/contact/` | Contact |
| `/pt/work/<slug>/`, `/en/work/<slug>/` | Case studies |
| `404` | Not found |

Shared chrome: [`PageShell.astro`](src/components/PageShell.astro) (header + footer + SEO + theme init). The locale gateway does **not** use PageShell; it still loads `ThemeInit` and global CSS.

Sections use `data-surface="dark" | "greige-a" | "greige-b"` via [`Section.astro`](src/components/Section.astro).

## Content and copy

- Site strings / nav / contact: [`src/data/site.ts`](src/data/site.ts)
- Work (Markdown): [`src/content/work/`](src/content/work/) — keep matching `translationKey` across locales
- Experience (JSON): [`src/content/experience/`](src/content/experience/) — same `translationKey` pair
- Schema: [`src/content.config.ts`](src/content.config.ts)
- Helpers: [`src/utils/content.ts`](src/utils/content.ts), [`src/i18n/utils.ts`](src/i18n/utils.ts)

`TODO_CONTENT` placeholders hide unfinished contact links automatically. Prefer filling real content over leaving placeholders when the user provides it.

UI copy: no em dashes or en dashes in user-facing strings (Atlas rule).

## How to change things safely

1. **UI / visual work:** read the matching `.cursor/skills/*.md` modules first, then edit tokens/components.
2. **New page chrome:** prefer composing existing components (`Section`, `Container`, `ButtonLink`, `PageShell`) over one-off markup.
3. **Colors:** edit [`src/styles/tokens/colors.css`](src/styles/tokens/colors.css) and keep [`.cursor/skills/colors.md`](.cursor/skills/colors.md) in sync when registries change.
4. **Hardcoded hex in CSS/components:** avoid; use tokens (especially for theme-aware surfaces).
5. **Icons:** Lucide via [`Icon.astro`](src/components/Icon.astro), outline style only.
6. **Scope:** change only what the task needs; do not drive-by refactor unrelated files.

## Commands

```bash
npm install
npm run dev          # http://localhost:4321
npm run check        # Astro + TypeScript
npm run lint         # ESLint + Prettier
npm run test         # Vitest
npm run test:e2e     # Playwright (needs browsers installed)
npm run build        # writes dist/
npm run test:all     # check + lint + unit + build
```

Before pushing non-trivial UI or theme changes, run at least `npm run check` and `npm run build`. For a11y-sensitive UI, also run `npm run test:e2e`.

## CI / deploy

- CI: [`.github/workflows/ci.yml`](.github/workflows/ci.yml)
- Deploy: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on push to `master`/`main`
- Artifact: `dist/` uploaded to GitHub Pages

Do not commit `node_modules/`, `dist/`, `.astro/`, or `test-results/`.

## Git conventions for agents

- Never update git config.
- Never force-push to `master`/`main` unless the user explicitly asks.
- Never use interactive git flags (`-i`).
- Prefer HEREDOC commit messages focused on why.
- After a successful commit for a completed task: **push**.
- If the user asks to “push all”, stage, commit (if needed), and push everything that belongs in the repo (not secrets).

## Quick map

```text
.cursor/skills/     Atlas design-system specs (read before UI work)
src/components/     Astro UI primitives + ThemeToggle / ThemeInit
src/content/        work + experience collections
src/data/site.ts    profile, nav, i18n UI strings
src/pages/          routes
src/styles/         tokens + global.css
src/utils/          content + theme-init helpers
tests/              unit + e2e
public/             static assets, CNAME, robots
```
