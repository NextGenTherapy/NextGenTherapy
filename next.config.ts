import type { NextConfig } from 'next';

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cdn.vercel-insights.com https://analytics.vercel.com https://polyfill.io https://va.vercel-scripts.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com;
  font-src 'self';
  connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com https://cdn.vercel-insights.com https://analytics.vercel.com;
  frame-src https://www.youtube.com https://www.google.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'self';
  upgrade-insecure-requests;
`.replace(/\n/g, '');

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000, // 1 year cache for optimized images
  },
  async redirects() {
    return [
      // www to non-www redirect (highest priority for SEO)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.nextgentherapy.co.uk',
          },
        ],
        destination: 'https://nextgentherapy.co.uk/:path*',
        permanent: true,
      },
      // Legacy page redirects
      {
        source: '/therapy-101',
        destination: '/is-this-right-for-you',
        permanent: true,
      },
      {
        source: '/who-i-see',
        destination: '/is-this-right-for-you',
        permanent: true,
      },
      // Testimonials redirects to trust page
      {
        source: '/testimonials',
        destination: '/trust',
        permanent: true,
      },
      // Old blog post redirects (GSC indexed URLs that no longer exist)
      {
        source: '/blog/5-common-myths-about-body-image-and-eating-habits',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/understanding-psychodynamic-therapy',
        destination: '/blog/understanding-different-therapy-approaches',
        permanent: true,
      },
      {
        source: '/blog/managing-anxiety-between-sessions',
        destination: '/blog/understanding-anxiety-young-people',
        permanent: true,
      },
      {
        source: '/blog/managing-anxiety-practical-tips',
        destination: '/blog/understanding-anxiety-young-people',
        permanent: true,
      },
      // Legacy paths from old site structure
      {
        source: '/why-people-seek-therapy',
        destination: '/blog/signs-you-might-benefit-from-therapy',
        permanent: true,
      },
      {
        source: '/thoughts/:path*',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/therapy101',
        destination: '/is-this-right-for-you',
        permanent: true,
      },
      {
        source: '/reviews-2',
        destination: '/trust',
        permanent: true,
      },
      // Service page consolidation redirects
      {
        source: '/teenage-therapy',
        destination: '/teen-therapy',
        permanent: true,
      },
      {
        source: '/neurodiversity-therapy',
        destination: '/neurodiversity',
        permanent: true,
      },
      {
        source: '/young-adult-therapy',
        destination: '/therapy-for-women',
        permanent: true,
      },
      {
        source: '/lgbtq-therapy',
        destination: '/therapy-for-women',
        permanent: true,
      },
      {
        source: '/parent-support',
        destination: '/child-therapy',
        permanent: true,
      },
      {
        source: '/about-therapy',
        destination: '/is-this-right-for-you',
        permanent: true,
      },
      // Common 404s reported in Google Search Console
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/book-now',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy', value: ContentSecurityPolicy },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
        ],
      },
      // Prevent indexing of technical files
      {
        source: '/manifest.json',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/robots.txt',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ];
  },
};

export default nextConfig;
