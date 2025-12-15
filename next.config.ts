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
        destination: '/about-therapy',
        permanent: true,
      },
      {
        source: '/who-i-see',
        destination: '/about-therapy',
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
        destination: '/about-therapy',
        permanent: true,
      },
      {
        source: '/reviews-2',
        destination: '/trust',
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
          { key: 'Permissions-Policy', value: 'geolocation=(), microphone()' },
        ],
      },
      // Prevent indexing of technical files
      {
        source: '/manifest.json',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/sitemap.xml',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/sitemap-0.xml',
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
