# Amol Desai portfolio

Next.js 16 static export, Tailwind 4, Motion. Hosted on GitHub Pages at https://amoldesai03.github.io.

## Develop
```bash
npm install
npm run dev
```

## Edit content
All copy, links and screenshots live in `src/content/site.ts`. Images go in `public/work/<project>/`.
Years of experience are computed from `careerStart` at build time and again in the browser.

## CV
- `/cv/`: one-page CV, `/cv/detailed/`: detailed CV, `/resume/` redirects to `/cv/`.
- Both are rendered from `src/content/site.ts` in CMU Serif (OFL, `src/fonts/cmu/`), Letter size; Print saves a PDF.
- `npm run deploy` also prints `amol-desai-cv.pdf`, `amol-desai-cv-detailed.pdf` and the share image `og.png` with headless Chrome (`scripts/postbuild.mjs`, override the binary with `CHROME_PATH`).

## Deploy
Builds `out/` locally and pushes it to the `gh-pages` branch (no GitHub Actions needed):
```bash
npm run deploy
```
Pages source: branch `gh-pages`, folder `/`.
