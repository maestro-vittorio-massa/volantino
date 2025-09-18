export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  if (!path.startsWith('/')) return `${base}/${path}`
  // Ensure no double slashes when base ends with '/'
  return `${base}${path}`.replace(/\/+/, '/').replace(/:\/\//, '://')
}


