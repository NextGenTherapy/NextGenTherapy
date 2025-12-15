/**
 * @jest-environment node
 */

import { NextRequest } from 'next/server';
import { middleware } from '../src/middleware';

describe('Middleware', () => {
  describe('www to non-www redirect', () => {
    it('redirects www.nextgentherapy.co.uk to nextgentherapy.co.uk', () => {
      const request = new NextRequest('https://www.nextgentherapy.co.uk/about', {
        headers: {
          host: 'www.nextgentherapy.co.uk',
        },
      });

      const response = middleware(request);

      expect(response.status).toBe(308);
      expect(response.headers.get('Location')).toBe('https://nextgentherapy.co.uk/about');
    });

    it('preserves pathname on redirect', () => {
      const request = new NextRequest('https://www.nextgentherapy.co.uk/services/child-therapy', {
        headers: {
          host: 'www.nextgentherapy.co.uk',
        },
      });

      const response = middleware(request);

      expect(response.headers.get('Location')).toBe(
        'https://nextgentherapy.co.uk/services/child-therapy'
      );
    });

    it('preserves search params on redirect', () => {
      const request = new NextRequest('https://www.nextgentherapy.co.uk/blog?page=2&sort=date', {
        headers: {
          host: 'www.nextgentherapy.co.uk',
        },
      });

      const response = middleware(request);

      expect(response.headers.get('Location')).toBe(
        'https://nextgentherapy.co.uk/blog?page=2&sort=date'
      );
    });

    it('redirects any host starting with www.', () => {
      const request = new NextRequest('https://www.example.com/test', {
        headers: {
          host: 'www.example.com',
        },
      });

      const response = middleware(request);

      expect(response.status).toBe(308);
    });

    it('does not redirect non-www domains', () => {
      const request = new NextRequest('https://nextgentherapy.co.uk/about', {
        headers: {
          host: 'nextgentherapy.co.uk',
        },
      });

      const response = middleware(request);

      expect(response.status).toBe(200);
      expect(response.headers.get('Location')).toBeNull();
    });

    it('does not redirect when host header is missing', () => {
      const request = new NextRequest('https://nextgentherapy.co.uk/about');

      const response = middleware(request);

      expect(response.status).toBe(200);
    });

    it('uses 308 permanent redirect (preserves method)', () => {
      const request = new NextRequest('https://www.nextgentherapy.co.uk/api/contact', {
        method: 'POST',
        headers: {
          host: 'www.nextgentherapy.co.uk',
        },
      });

      const response = middleware(request);

      // 308 preserves the POST method, unlike 301
      expect(response.status).toBe(308);
    });

    it('handles root path redirect', () => {
      const request = new NextRequest('https://www.nextgentherapy.co.uk/', {
        headers: {
          host: 'www.nextgentherapy.co.uk',
        },
      });

      const response = middleware(request);

      expect(response.headers.get('Location')).toBe('https://nextgentherapy.co.uk/');
    });
  });
});
