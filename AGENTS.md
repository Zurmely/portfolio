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

- **Stack:** Astro 5, TypeScript, `@z-ux/tokens`, `@z-ux/ui` (React 19, SSR only), Lucide icons
- **Output:** fully static (`output: "static"`), trailing slashes always
- **Domain:** `https://zurmely.com` (GitHub Pages + custom domain via `public/CNAME`)
- **Default branch:** `master`

## Design system (non-negotiable)

Visual rules use the published Z-UI packages. Read component docs in the upstream repo before changing UI.

- Tokens: `@z-ux/tokens` (`colors.css`, `sizes.css`, `text.css`, `motion.css`, `elevation.css`)
- Components: `@z-ux/ui` per-component imports where possible
- Site composition layer: [`src/styles/global.css`](src/styles/global.css) and [`src/styles/site-text.css`](src/styles/site-text.css)
- Consumer guide: [`.cursor/skills/SKILL.md`](.cursor/skills/SKILL.md)

Use semantic `--z-*` tokens only. Do not invent one-off hex values or local token sheets that diverge from `@z-ux/tokens`.

### Theme model

- `data-theme="light" | "dark"` on `<html>`
- Bootstrap: [`src/utils/theme-init.ts`](src/utils/theme-init.ts) + [`ThemeInit.astro`](src/components/ThemeInit.astro)
- Toggle: [`ThemeToggle.astro`](src/components/ThemeToggle.astro) in the site header (framework-free script)
- Preference: `localStorage.theme`, else `prefers-color-scheme`

### React usage

- Add `@astrojs/react` for SSR of Z-UI components only.
- Do **not** add `client:*` directives on portfolio pages unless a future feature truly needs hydration.
- Keep theme, locale gateway redirect, and mobile nav as tiny inline scripts.

## Layout and routing

| Path                                   | Role                                                                                    |
| -------------------------------------- | --------------------------------------------------------------------------------------- |
| `/`                                    | Locale gateway ([`src/pages/index.astro`](src/pages/index.astro)); optional EN redirect |
| `/pt/`, `/en/`                         | Homepages                                                                               |
| `/pt/contact/`, `/en/contact/`         | Contact                                                                                 |
| `/pt/work/<slug>/`, `/en/work/<slug>/` | Case studies                                                                            |
| `404`                                  | Not found                                                                               |

Shared chrome: [`PageShell.astro`](src/components/PageShell.astro) (header + footer + SEO + theme init). The locale gateway does **not** use PageShell; it still loads `ThemeInit` and global CSS.

Sections use tone classes via [`Section.astro`](src/components/Section.astro): `default`, `surface`, `subtle`, `inverse`.

## Content and copy

- Site strings / nav / contact: [`src/data/site.ts`](src/data/site.ts)
- Work (Markdown): [`src/content/work/`](src/content/work/) — keep matching `translationKey` across locales
- Experience (JSON): [`src/content/experience/`](src/content/experience/) — same `translationKey` pair
- Schema: [`src/content.config.ts`](src/content.config.ts)
- Helpers: [`src/utils/content.ts`](src/utils/content.ts), [`src/i18n/utils.ts`](src/i18n/utils.ts)

`TODO_CONTENT` placeholders hide unfinished contact links automatically.

UI copy: no em dashes or en dashes in user-facing strings.

## How to change things safely

1. **UI work:** prefer `@z-ux/ui` components and semantic tokens before custom CSS.
2. **New page chrome:** compose `Section`, `Container`, Z-UI adapters in `src/components/zui/`, and `PageShell`.
3. **Icons:** Lucide via [`Icon.astro`](src/components/Icon.astro), outline style only.
4. **Scope:** change only what the task needs.

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

## Quick map

```text
.cursor/skills/     Z-UI consumer guide
src/components/     Astro shell + zui React adapters
src/content/        work + experience collections
src/data/site.ts    profile, nav, i18n UI strings
src/pages/          routes
src/styles/         Z-UI imports + site composition CSS
src/utils/          content + theme-init helpers
tests/              unit + e2e
public/             static assets, CNAME, robots
```
