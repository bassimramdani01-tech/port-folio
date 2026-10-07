import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

function normalizeBasePath(value = '/') {
  const path = `/${value.trim().replace(/^\/+|\/+$/g, '')}`;
  return path === '/' ? '/' : `${path}/`;
}

const siteUrl = process.env.SITE_URL?.trim();
const basePath = normalizeBasePath(process.env.BASE_PATH);
const deployedBaseUrl = siteUrl ? new URL(basePath, siteUrl) : undefined;

export default defineConfig({
  ...(siteUrl ? { site: siteUrl } : {}),
  base: basePath,
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', { path: 'zh', codes: ['zh-Hans'] }],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: siteUrl
    ? [
        sitemap({
          i18n: {
            defaultLocale: 'en',
            locales: {
              en: 'en',
              fr: 'fr',
              zh: 'zh-Hans',
            },
          },
          // The root page only redirects to /en/ and is not a content page.
          filter: (page) =>
            !deployedBaseUrl || new URL(page).pathname !== deployedBaseUrl.pathname,
        }),
      ]
    : [],
});
