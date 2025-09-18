// Configure static export and optional base path for GitHub Pages
const basePathFromEnv = process.env.NEXT_BASE_PATH ?? '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: basePathFromEnv ? `${basePathFromEnv}/` : undefined,
  basePath: basePathFromEnv || undefined,
  images: { unoptimized: true },
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
