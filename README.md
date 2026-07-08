# g-despot.github.io

Personal site of Ivan Despot — a blog (homepage) plus a single resume page,
built with [Docusaurus](https://docusaurus.io/).

## Structure

| Path | What it is | Source |
| --- | --- | --- |
| `/` | Blog homepage | `blog/*.md` |
| `/resume` | Single resume page | `src/pages/resume/` |
| `/tags` | Content-pillar tag pages | `blog/tags.yml` |
| `_archive/` | Old detailed docs, kept out of the build | — |

## Develop

```bash
npm install
npm start          # dev server with live reload
npm run build      # production build into ./build
npm run serve      # preview the production build locally
```

## Write a post

Add a Markdown file to `blog/` — see [`blog/_README.md`](blog/_README.md) for the
front-matter conventions and the canonical-repost pattern.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages.

> **One-time setup:** in the repo's **Settings → Pages**, set **Source** to
> **GitHub Actions**.
