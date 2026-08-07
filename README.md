# Gabriel Zurmely Portfolio

Bilingual static portfolio and CV for Gabriel Zurmely, built with Astro and deployed to GitHub Pages.

## Stack

- Astro 5 (static output)
- TypeScript (strict)
- Content collections for `work` and `experience`
- Z-UI design system (`@z-ux/tokens`, `@z-ux/ui`)
- Playwright + axe for accessibility checks
- Vitest for content validation

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Commands

| Command               | Description                            |
| --------------------- | -------------------------------------- |
| `npm run dev`         | Start local dev server                 |
| `npm run build`       | Build static site to `dist/`           |
| `npm run preview`     | Preview production build               |
| `npm run check`       | Astro + TypeScript checks              |
| `npm run lint`        | ESLint + Prettier checks               |
| `npm run test`        | Vitest unit tests                      |
| `npm run test:static` | Static HTML checks (run after `build`) |
| `npm run test:e2e`    | Playwright end-to-end tests            |
| `npm run test:all`    | Full verification pipeline             |

## Content authoring

### Add a new work case study

1. Duplicate the sample files in `src/content/work/`.
2. Keep the same `translationKey` across locales (`pt` and `en`).
3. Fill frontmatter fields and write the body in Markdown.
4. Add media under `public/images/` or reference existing placeholders.

Required frontmatter highlights:

- `locale`, `translationKey`, `title`, `summary`, `publishDate`, `role`
- Optional: `client`, `context`, `tools`, `gallery`, `externalLinks`

Routes are generated automatically at:

- `/pt/work/<slug>/`
- `/en/work/<slug>/`

### Add a new experience entry

1. Create two JSON files in `src/content/experience/` (one per locale).
2. Use the same `translationKey` in both files.
3. Set `order` for display sorting and `startDate` / `endDate` / `current`.

No component edits are required.

## Placeholders to replace

Update `src/data/site.ts` and content files marked with `TODO_CONTENT`:

- Canonical domain
- Email
- LinkedIn / Behance URLs
- Exact role titles and dates
- Project names, metrics, and media

Links with placeholder values are hidden automatically in the contact UI.

## Localization

- Portuguese routes: `/pt/...`
- English routes: `/en/...`
- Root `/` is a locale gateway with optional browser-language redirect

## Design system

Visual rules come from published Z-UI packages (`@z-ux/tokens`, `@z-ux/ui`). Site composition CSS lives in `src/styles/global.css` and `src/styles/site-text.css`. Consumer guide: `.cursor/skills/SKILL.md`.

## Deployment

GitHub Actions workflows:

- `.github/workflows/ci.yml` for verification
- `.github/workflows/deploy.yml` for GitHub Pages

The site builds to `dist/` and requires no server runtime.

## Project structure

```text
src/
  components/       Reusable UI primitives
  content/          Work markdown + experience JSON
  data/site.ts      Profile, nav, contact metadata
  pages/            Locale gateway, home, contact, work, 404
  styles/           Z-UI imports + site composition CSS
  utils/            Content helpers
public/             Static assets (favicon, placeholders, robots)
tests/              Vitest + Playwright suites
```
