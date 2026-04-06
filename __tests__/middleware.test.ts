/**
 * @jest-environment node
 */

import { NextRequest } from 'next/server';
import { middleware } from '../src/middleware';

describe('Middleware', () => {
  describe('Basic functionality', () => {
    it('returns NextResponse.next() for standard requests', () => {
      const request = new NextRequest('https://nextgentherapy.co.uk/about', {
        headers: {
          host: 'nextgentherapy.co.uk',
        },
      });

      const response = middleware(request);

      // Middleware passes through all requests now
      // www redirects are handled in next.config.ts
      expect(response.status).toBe(200);
    });

    it('passes through requests with various paths', () => {
      const paths = [
        '/about',
        '/services/child-therapy',
        '/book-now',
        '/blog',
        '/pricing',
      ];

      paths.forEach((path) => {
        const request = new NextRequest(`https://nextgentherapy.co.uk${path}`, {
          headers: {
            host: 'nextgentherapy.co.uk',
          },
        });

        const response = middleware(request);
        expect(response.status).toBe(200);
      });
    });

    it('handles root path', () => {
      const request = new NextRequest('https://nextgentherapy.co.uk/', {
        headers: {
          host: 'nextgentherapy.co.uk',
        },
      });

      const response = middleware(request);
      expect(response.status).toBe(200);
    });

    it('handles requests with query parameters', () => {
      const request = new NextRequest('https://nextgentherapy.co.uk/blog?page=2&sort=date', {
        headers: {
          host: 'nextgentherapy.co.uk',
        },
      });

      const response = middleware(request);
      expect(response.status).toBe(200);
    });

    it('handles POST requests', () => {
      const request = new NextRequest('https://nextgentherapy.co.uk/api/contact', {
        method: 'POST',
        headers: {
          host: 'nextgentherapy.co.uk',
        },
      });

      const response = middleware(request);
      expect(response.status).toBe(200);
    });

    it('handles requests without host header', () => {
      const request = new NextRequest('https://nextgentherapy.co.uk/about');

      const response = middleware(request);
      expect(response.status).toBe(200);
    });
  });

  // Note: www to non-www redirects are now handled by next.config.ts redirects (301)
  // Not by this middleware
});
