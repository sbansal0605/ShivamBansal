/**
 * Prefix Vite `import.meta.env.BASE_URL` for files from `/public`.
 * Required on GitHub Pages project sites (e.g. base `/ShivamBansal/`).
 * Leaves http(s), data:, and blob: unchanged. Idempotent if the path already includes the base.
 */
export function publicUrl(path) {
  if (path == null || path === '') return path
  if (typeof path !== 'string') return path
  if (/^https?:\/\//i.test(path) || path.startsWith('data:') || path.startsWith('blob:')) {
    return path
  }

  const normalized = path.startsWith('/') ? path : `/${path}`
  const root = import.meta.env.BASE_URL
  const rootNoSlash = root.replace(/\/$/, '') || '/'

  if (rootNoSlash !== '/' && (normalized === rootNoSlash || normalized.startsWith(`${rootNoSlash}/`))) {
    return normalized
  }

  const trimmed = normalized.replace(/^\//, '')
  return `${root}${trimmed}`
}
