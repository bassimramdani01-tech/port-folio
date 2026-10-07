const siteUrl = process.env.SITE_URL?.trim();
const baseUrl = new URL(import.meta.env.BASE_URL, siteUrl || 'https://example.invalid');
const sitemapUrl = siteUrl ? new URL('sitemap-index.xml', baseUrl).href : undefined;

export function GET() {
  const lines = ['User-agent: *', 'Allow: /'];
  if (sitemapUrl) lines.push('', `Sitemap: ${sitemapUrl}`);

  return new Response(`${lines.join('\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
