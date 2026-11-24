# Rawlings Juma — Portfolio

A static portfolio site built with **Vite + TypeScript**. The interface uses an institutional,
editorial style: red utility bar, white navigation, split hero, hairline card grids, and a
deep-red footer.

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (normally `http://localhost:5173/My_Portfolio/`).

## Production build

```bash
npm run build
```

Outputs the deployable static site to `dist/`. The Vite base path is set to `/My_Portfolio/` in
`vite.config.ts` so asset URLs work on GitHub Pages.

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys
`dist/` with GitHub Pages. In the repository settings, set **Pages → Build and deployment →
Source** to **GitHub Actions**.

## Structure

- `index.html` — page markup
- `src/main.ts` — typed UI behaviour
- `src/projects.ts` — typed case-study content
- `src/styles.css` — all styling
- `public/` — images, CV, and favicon copied verbatim into the build
