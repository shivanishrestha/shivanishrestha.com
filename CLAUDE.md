# CLAUDE.md

## Project

Personal portfolio for Shivani Shrestha at shivanishrestha.com. Static site hosted on GitHub Pages — auto-deploys on merge to main.

**Planned sections:** professional resume/accomplishments, art gallery, knitting projects, short film embeds.

**Key constraint:** This is a fully static site (`output: "export"` in next.config.ts). No server-side features — no API routes, no server actions, no dynamic routes without `generateStaticParams`. Everything must work as plain HTML/CSS/JS after build.

## User

Shivani is non-technical. Explain what you're doing and why in plain language — approachable, not jargon-heavy.

## Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Linting:** ESLint (`npm run lint`)
- **Testing:** Vitest + React Testing Library (`npm run test`)
- **Deployment:** GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`)
- **Node:** v22 LTS

## Commands

```sh
npm run dev       # local dev server
npm run test      # run tests
npm run lint      # run linter
npm run build     # production build (outputs to out/)
```

## Pre-push checklist

Run in this order (fastest feedback first). All must pass before pushing.

1. `npm run lint`
2. `npm run test`
3. `npm run build`

## Git workflow

- **Work in feature branches** — never commit directly to main
- **Create a PR** to merge into main — auto-deploys after merge
- **Never force push** — history is important
- Commit messages explain *why*, not just *what*

## PR review flow

1. Agent creates PR from feature branch
2. Shivani reviews and leaves comments on GitHub
3. On "resolve comments": read all PR comments, address each one, mark resolved when fixed, and flag anything ambiguous or unaddressable in the reply
4. On "merge it": merge the PR (auto-deploys to production)

## Code guidelines

- One component per file, in `src/components/`
- Pages go in `src/app/` (Next.js App Router conventions)
- Static assets (images, fonts) in `public/`
- Tailwind utility classes for styling — no custom CSS unless Tailwind can't express it
- All `<img>` and `next/image` must have meaningful `alt` text
- New components get tests in a colocated `__tests__/` directory
