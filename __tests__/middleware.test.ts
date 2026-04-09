/**
 * @jest-environment node
 */

import { NextRequest } from 'next/server';
import { proxy } from '../proxy';

describe('Proxy', () => {
  describe('Basic functionality', () => {
    it('returns NextResponse.next() for standard requests', () => {
      const request = new NextRequest('https://nextgentherapy.co.uk/about', {
        headers: {
          host: 'nextgentherapy.co.uk',
        },
      });

      const response = proxy(request);

      // Proxy passes through all requests and adds nonce header
      expect(response.status).toBe(200);
    });

    it('adds x-nonce header to response', () => {
      const request = new NextRequest('https://nextgentherapy.co.uk/about', {
        headers: {
          host: 'nextgentherapy.co.uk',
        },
      });

      const response = proxy(request);

      // Check that nonce header is set
      expect(response.headers.get('x-nonce')).toBeTruthy();
      // Nonce should be a base64 string
      expect(response.headers.get('x-nonce')).toMatch(/^[A-Za-z0-9+/]+=*$/);
    });

    it('generates unique nonces for different requests', () => {
      const request1 = new NextRequest('https://nextgentherapy.co.uk/about');
      const request2 = new NextRequest('https://nextgentherapy.co.uk/services');

      const response1 = proxy(request1);
      const response2 = proxy(request2);

      // Each request should get a unique nonce
      expect(response1.headers.get('x-nonce')).not.toBe(response2.headers.get('x-nonce'));
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

        const response = proxy(request);
        expect(response.status).toBe(200);
        expect(response.headers.get('x-nonce')).toBeTruthy();
      });
    });

    it('handles root path', () => {
      const request = new NextRequest('https://nextgentherapy.co.uk/', {
        headers: {
          host: 'nextgentherapy.co.uk',
        },
      });

      const response = proxy(request);
      expect(response.status).toBe(200);
    });

    it('handles requests with query parameters', () => {
      const request = new NextRequest('https://nextgentherapy.co.uk/blog?page=2&sort=date', {
        headers: {
          host: 'nextgentherapy.co.uk',
        },
      });

      const response = proxy(request);
      expect(response.status).toBe(200);
    });

    it('handles POST requests', () => {
      const request = new NextRequest('https://nextgentherapy.co.uk/api/contact', {
        method: 'POST',
        headers: {
          host: 'nextgentherapy.co.uk',
        },
      });

      const response = proxy(request);
      expect(response.status).toBe(200);
    });

    it('handles requests without host header', () => {
      const request = new NextRequest('https://nextgentherapy.co.uk/about');

      const response = proxy(request);
      expect(response.status).toBe(200);
    });
  });

  // Note: www to non-www redirects are handled by next.config.ts redirects (301)
  // Not by this proxy
});
