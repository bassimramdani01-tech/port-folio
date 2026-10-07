# Bassim Ramdani Portfolio

A static portfolio in English, French, and Simplified Chinese, built with Astro and plain CSS. The site uses the same verified content records in every language; the translation files contain only the words shown by the interface.

## Run it locally

Use Node.js 24.19.0, as pinned in `.nvmrc`, and npm. From the project folder:

```sh
npm ci
npm run dev
```

Open the local address printed by Astro. The other useful commands are:

```sh
npm run check
npm run build
npm run check:placeholders
npm run preview
```

`npm run build` writes the static site to `dist/`. Run `npm run preview` after a build to view that output locally.

## Edit the portfolio

### Contact and social links

Edit `src/content/site.ts` for the email, phone, WeChat ID or QR image, GitHub and LinkedIn URLs, CV path, and the grade display flag. Social and asset links are omitted until valid values are supplied. The phone currently has a muted “to confirm” note; after Bassim confirms the international number, update its display value and `tel:` value and set `verified: true`.

The CV defaults to `public/files/Bassim-Ramdani-CV.pdf`. Add the PDF there or set `site.cv.path` to another file under `public/`. The download link appears only when an existing PDF is found during the build. Locale-specific paths can be set in `site.cv.localeOverrides`.

### Projects and certificates

Edit `src/content/projects.ts` and `src/content/certificates.ts`. Give each record a stable `id`; only complete records with `published: true` are shown (the academic capstone is always shown). Add a matching description under that ID to `src/i18n/en.ts`, `src/i18n/fr.ts`, and `src/i18n/zh.ts`. Type-checking catches missing translation keys. A certificate needs a title and issuer; optional dates and HTTPS links may also be included.

### Other facts and translations

Language-neutral facts live in `src/content/`. Translated headings, labels, descriptions, form messages, and metadata live in the three locale files in `src/i18n/`. Keep dates, organization names, and tool names in the content records instead of duplicating them in translations. Add new translation keys to all three dictionaries.

The skills list is intentionally limited to Cisco Packet Tracer, SQL, and Power BI. Other topics belong in interests. Keep project availability, outcomes, titles, scores, and links out unless Bassim supplies them.

## Contact form

The form is hidden unless `PUBLIC_FORM_ENDPOINT` is set at build time. With no endpoint, visitors see a styled email and phone fallback. A Formspree endpoint is one option. For GitHub Actions, add `PUBLIC_FORM_ENDPOINT` under **Settings → Secrets and variables → Actions → Variables**. It is a public URL, not a secret. Do not put private API keys or credentials in this variable or in client-side code.

## Deploy to GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds on the default branch and can also be started with **Actions → Build and deploy portfolio → Run workflow**. It derives the site URL from the repository owner and uses `/` for an owner site (`OWNER.github.io`) or `/<repository>/` for a project site. It runs `npm ci`, the Astro type-check, the static build, and the placeholder scan before deploying `dist/`.

In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.

For a custom domain, add the repository variable `SITE_URL` with the full HTTPS origin (for example, `https://example.com`). The workflow then uses `/` as the base path unless `BASE_PATH` is explicitly set. For a non-default deployment path, set `BASE_PATH` to that path, such as `/portfolio/`. Local builds can use the same settings; in PowerShell, for example:

```powershell
$env:SITE_URL = 'https://owner.github.io'
$env:BASE_PATH = '/portfolio/'
npm run build
```

When `SITE_URL` is set, each locale receives an absolute canonical URL and locale alternates, the sitemap includes language alternates, and `robots.txt` names the sitemap. The root page is only a redirect and is excluded from the sitemap. With no `SITE_URL`, local builds omit absolute canonical and sitemap URLs.

## Values to supply or confirm

Placeholders are intentional. The placeholder scan reports them for review but fails only if one leaks into generated HTML.

| Placeholder or setting | File / location | What to enter | Site behavior while unset |
| --- | --- | --- | --- |
| `[ADD_GITHUB_URL]` | `src/content/site.ts` → `socials.github` | Full HTTPS GitHub profile URL | GitHub link is omitted. |
| `[ADD_LINKEDIN_URL]` | `src/content/site.ts` → `socials.linkedin` | Full HTTPS LinkedIn profile URL | LinkedIn link is omitted. |
| `[ADD_WECHAT_ID_OR_QR_ASSET]` | `src/content/site.ts` → `contact.wechat.id` and `qrAsset` | Put the WeChat ID in `id`; optionally put an existing image path under `public/` in `qrAsset`. | ID and QR are omitted; a missing QR file is never linked. |
| `[ADD_CV_PDF]` | `src/content/site.ts` → `cv.path` | Relative path to an existing PDF under `public/`; the default is `files/Bassim-Ramdani-CV.pdf`. | Download button is omitted until the PDF exists. |
| `[CONFIRM_OFFICIAL_DEGREE_TITLE]` | `src/content/education.ts` → `officialDegreeTitle` | Exact official degree title; then mark it verified and published. | Degree-title row is omitted. |
| `[CONFIRM_FIRST_BACHELOR_COHORT_CLAIM]` | `src/content/education.ts` → `firstCohortClaim` | Confirm the exact claim; then mark it verified and `published: true`. | Claim remains unpublished and hidden. |
| `[CONFIRM_LOCATION_PUBLICATION]` | `src/content/education.ts` → `location` | Confirm that the location can be published; then set `verified: true`. | Location is shown with a muted “to confirm” note. |
| `[CONFIRM_PHONE_INTERNATIONAL_FORMAT]` | `src/content/site.ts` → `contact.phone` | Confirm the displayed international number and its digits-only `tel:` value; then set `verified: true`. | Phone link is shown with a muted confirmation note. |
| `[ADD_ENGLISH_TEST_AND_SCORE_WHEN_AVAILABLE]` | `src/content/languages.ts` → English `pendingDetail` | After a test is taken, update the language record with the confirmed test/score details. | No score or English proficiency level is shown; the planned exam note remains. |
| `[ADD_CHINESE_LEVEL_WHEN_KNOWN]` | `src/content/languages.ts` → Chinese `level` | Confirmed Chinese level, when known. | No Chinese proficiency level is shown; the learning note remains. |
| `[ADD_INTERNSHIP_TITLES_AND_VERIFIED_OUTCOMES]` | `src/content/experience.ts` → `pendingExperienceDetails` | Verified details only, if they are later available. | No titles or outcomes are rendered. |
| `[ADD_CHINESE_NAME_OPTIONAL]` | `src/content/site.ts` → `optionalChineseName` | Optional Chinese name, if Bassim supplies one. | Not displayed; the Latin-script name remains. |
| `[ADD_FORM_ENDPOINT]` / `PUBLIC_FORM_ENDPOINT` | Set `PUBLIC_FORM_ENDPOINT` as a build environment variable; workflow reads the repository variable | Public HTTPS form endpoint URL | Form is hidden; the styled email/phone fallback is shown. |
| `SITE_URL` | Workflow repository variable or build environment | Deployed site origin, such as `https://owner.github.io` | Workflow derives the owner site URL; local builds omit absolute canonical and sitemap metadata. |
| `BASE_PATH` | Workflow repository variable or build environment | `/` for root hosting or a path such as `/portfolio/` | Workflow chooses `/` for an owner site/custom domain and `/<repository>/` for a project site. |

### Confirm before publishing

- First bachelor cohort claim: keep unpublished until confirmed.
- Official degree title: publish only after confirming the exact title.
- Phone number: confirm international format and the `tel:` target.
- Location: confirm publication of Essaouira, Morocco.

## Design contrast reference

These are the brief’s verified normal-text contrast ratios (WCAG AA threshold: 4.5:1). The color tokens in `src/styles/tokens.css` match these values.

| Text color | Background | Ratio |
| --- | --- | ---: |
| `#e8edf5` (text) | `#0a0f1a` (bg) | 16.30:1 |
| `#e8edf5` (text) | `#101827` (surface) | 15.11:1 |
| `#e8edf5` (text) | `#16202f` (surface-alt) | 13.94:1 |
| `#9aa8bf` (muted) | `#0a0f1a` (bg) | 7.96:1 |
| `#9aa8bf` (muted) | `#101827` (surface) | 7.38:1 |
| `#2dd4bf` (accent) | `#0a0f1a` (bg) | 10.29:1 |
| `#2dd4bf` (accent) | `#101827` (surface) | 9.54:1 |
| `#5eead4` (accent-hover) | `#101827` (surface) | 12.01:1 |
| `#5eead4` (accent-hover) | `#16202f` (surface-alt) | 11.08:1 |
| `#0a0f1a` (bg) | `#2dd4bf` (accent) | 10.29:1 |
