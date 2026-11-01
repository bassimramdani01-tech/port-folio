# Bassim Ramdani — Portfolio

A multilingual Astro portfolio in English, French, and Simplified Chinese. It presents education, internships, projects, skills, languages, and direct contact, with a warm Moroccan-modern visual identity built from layered paper shapes and khatam-star geometry.

## Run and verify

Use the Node.js version pinned in `.nvmrc` and npm:

```sh
npm ci
npm run dev
```

Open the local address Astro prints. Before publishing, run the complete verification pipeline:

```sh
npm run verify
```

`verify` runs the Astro type-check, WCAG AA contrast audit, static build, and placeholder leak scan. The individual commands are `npm run check`, `npm run check:contrast`, `npm run build`, and `npm run check:placeholders`. `npm run preview` serves the built `dist/` output.

## Content model

Facts are kept in typed modules under `src/content/`; translated interface copy and project descriptions live in `src/i18n/en.ts`, `fr.ts`, and `zh.ts`. `src/pages/[lang]/index.astro` assembles these into a typed `PortfolioViewModel` before rendering the localized page.

- `education.ts` lists the EST Essaouira Bachelor (3IASD), DUT (IDSD), and the Chinese-language year at Shandong University of Aeronautics.
- `experience.ts` contains the OCP Group and TAQA Morocco internships. Their descriptions and dates should remain consistent with the supplied CV.
- `projects.ts` lists necto, NetGuard, and the LLM malware-analysis capstone. Keep project descriptions and links factual; the two project names have no additional supplied detail yet.
- `skills.ts` and `languages.ts` contain the currently supported skill and language records.
- `site.ts` contains the profile name, email, optional Chinese-name and portrait slots, and public contact-link settings.

No award records were available in the repository or supplied facts, so no awards are displayed. Add only CV-confirmed awards when their exact names and details are available. Grades, rankings, phone numbers, and LinkedIn are intentionally excluded.

## Contact and profile assets

Email is configured in `src/content/site.ts`. Set these public repository variables in **Settings → Secrets and variables → Actions → Variables** to reveal optional links:

- `PUBLIC_GITHUB_URL`: public HTTPS GitHub profile URL.
- `PUBLIC_WECHAT_ID`: confirmed WeChat ID.
- `PUBLIC_WECHAT_URL`: direct HTTPS WeChat contact page, if available.

Add a CV PDF at `public/files/Bassim-Ramdani-CV.pdf` (or update `site.cv.path`) to enable the download links. For a portrait, add an image under `public/` and set `site.portrait` to its relative path. Set `site.chineseName` only if Bassim supplies the name. Unavailable links and assets are omitted rather than replaced with broken links or invented details.

The self-hosted Fraunces, Instrument Sans, and IBM Plex Mono font files are in `src/assets/fonts/`; their SIL Open Font Licenses are in `public/fonts/`. Khatam favicon, geometric app icon, web manifest, and browser-rendered Open Graph image are in `public/`.

## Design and accessibility

The design uses a warm paper palette with indigo, terracotta, and gold, with light and dark themes. Display type uses Fraunces; Instrument Sans carries body copy; IBM Plex Mono is reserved for dates and small labels. The arch portrait frame, folded-paper layers, and eight-point star ornaments carry the identity across the landing page and brand assets.

Use semantic headings, visible keyboard focus, reduced-motion support, responsive layouts, and adequate contrast. Theme selection follows the operating-system preference until changed; a saved preference takes precedence on later visits. Run `npm run check:contrast` when changing `src/styles/tokens.css`.

## Deploy to GitHub Pages

The workflow at `.github/workflows/deploy.yml` runs `npm run verify` on pushes and pull requests. The default branch then deploys the verified build to GitHub Pages; a workflow dispatch can also deploy manually.

The workflow derives the owner-site URL and project base path automatically. Set the optional `SITE_URL` repository variable for a custom domain and `BASE_PATH` only for a non-default deployment path. In the repository's **Settings → Pages**, choose **GitHub Actions** as the source.
