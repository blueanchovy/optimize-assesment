/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
  
  const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['images.pexels.com'],
      formats: ['image/avif', 'image/webp'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          pathname: '**',
        },
      ],
    },
    experimental: {
      optimizeCss: true,
      optimizePackageImports: ['pexels'],
    },
    swcMinify: true,
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production',
    },
    headers: async () => {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
            },
          ],
        },
        {
          source: '/(.*).(jpg|jpeg|png|webp|avif|ico|svg)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ];
    },
  };
  
  module.exports = withBundleAnalyzer(nextConfig); 