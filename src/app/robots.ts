import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/manifest.json'],
      },
    ],
    sitemap: 'https://nextgentherapy.co.uk/sitemap.xml',
    host: 'https://nextgentherapy.co.uk',
  };
}
