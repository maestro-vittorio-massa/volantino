// Configure static export and optional base path for GitHub Pages
const isGhPages = process.env.GITHUB_PAGES === 'true'
const basePathFromEnv = process.env.NEXT_BASE_PATH ?? (isGhPages ? '/volantino' : '')

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: basePathFromEnv ? `${basePathFromEnv}/` : undefined,
  basePath: basePathFromEnv || undefined,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePathFromEnv || '',
  },
  async headers() {
    return [
      {
        source: '/video/:path*',
        headers: [
          { key: 'Content-Type', value: 'video/webm' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
