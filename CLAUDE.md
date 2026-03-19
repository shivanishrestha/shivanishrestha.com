# CLAUDE.md

## Project

Personal portfolio for Shivani Shrestha at shivanishrestha.com. Hosted on GitHub Pages with auto-deploy on merge to main.

**Sections (planned):** professional resume/accomplishments, art gallery, knitting projects, short film embeds.

## User

Shivani is a non-technical user. Explain what you're doing and why in plain language — keep it approachable without deep technical jargon.

## Stack

- **Framework:** Next.js 16 (App Router) with static export (`output: "export"` in next.config.ts)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Linting:** ESLint with React, React Hooks, and Next.js plugins
- **Deployment:** GitHub Actions → GitHub Pages (see `.github/workflows/deploy.yml`)

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build (outputs to `out/`)
- `npm run lint` — run ESLint

## Pre-commit checklist

Before pushing changes:

1. `npm run lint` — fix any errors
2. `npm run build` — confirm the site builds successfully
3. Review your changes make sense (`git diff`)

## Git workflow

- **Always work in a feature branch** — never commit directly to main
- **Create a PR** to merge into main — this triggers auto-deploy after merge
- **Never force push** — git history is important
- Write clear commit messages that explain *why*, not just *what*

## Code guidelines

- Keep components small and focused — one file per component
- Use the `src/app/` directory for pages (Next.js App Router)
- Put reusable components in `src/components/`
- Put images and static assets in `public/`
- Use Tailwind utility classes for styling — avoid custom CSS unless necessary
- All images must have alt text for accessibility
