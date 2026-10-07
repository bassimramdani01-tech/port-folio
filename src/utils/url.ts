/** Prefix a site-relative path with Astro's configured deployment base path. */
export function url(path: string): string {
  const relativePath = path.replace(/^\/+/, '');
  return `${import.meta.env.BASE_URL}${relativePath}`;
}
