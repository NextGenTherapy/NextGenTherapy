/**
 * @jest-environment node
 */

import { NextRequest } from 'next/server';
import { GET, POST } from '../../src/app/api/indexnow/route';

jest.mock('../../src/lib/indexnow', () => ({
  submitToIndexNow: jest.fn(),
  submitAllPagesToIndexNow: jest.fn(),
}));

import { submitToIndexNow, submitAllPagesToIndexNow } from '../../src/lib/indexnow';

const TEST_SECRET = 'test-secret-value';

function authedRequest(url: string, init: RequestInit = {}): NextRequest {
  return new NextRequest(url, {
    ...init,
    headers: {
      ...(init.headers as Record<string, string> | undefined),
      authorization: `Bearer ${TEST_SECRET}`,
    },
  });
}

describe('IndexNow API Route', () => {
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    jest.clearAllMocks();
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    process.env.INDEXNOW_SECRET = TEST_SECRET;
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
    delete process.env.INDEXNOW_SECRET;
  });

  describe('GET /api/indexnow', () => {
    it('returns health check info when not authorised', async () => {
      const request = new NextRequest('http://localhost/api/indexnow');
      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.message).toBe('IndexNow API is ready');
      expect(data.keyFile).toBe('fa653f17b2f5c3fc3940abf3aad4b728.txt');
      expect(data.endpoints).toContain('https://api.indexnow.org/indexnow');
      expect(data.endpoints).toContain('https://yandex.com/indexnow');
    });

    it('triggers a full sitemap submission when authorised via query param', async () => {
      (submitAllPagesToIndexNow as jest.Mock).mockResolvedValue(true);
      const request = new NextRequest(
        `http://localhost/api/indexnow?secret=${TEST_SECRET}`,
      );

      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(submitAllPagesToIndexNow).toHaveBeenCalledTimes(1);
    });
  });

  describe('POST /api/indexnow', () => {
    it('rejects requests without a valid secret', async () => {
      const request = new NextRequest('http://localhost/api/indexnow', {
        method: 'POST',
        body: JSON.stringify({ submitAll: true }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(401);
      expect(data.success).toBe(false);
      expect(submitAllPagesToIndexNow).not.toHaveBeenCalled();
    });

    it('submits all pages when submitAll is true', async () => {
      (submitAllPagesToIndexNow as jest.Mock).mockResolvedValue(true);

      const request = authedRequest('http://localhost/api/indexnow', {
        method: 'POST',
        body: JSON.stringify({ submitAll: true }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.message).toContain('All sitemap URLs submitted');
      expect(submitAllPagesToIndexNow).toHaveBeenCalled();
    });

    it('returns 502 when submitAll fails', async () => {
      (submitAllPagesToIndexNow as jest.Mock).mockResolvedValue(false);

      const request = authedRequest('http://localhost/api/indexnow', {
        method: 'POST',
        body: JSON.stringify({ submitAll: true }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(502);
      expect(data.success).toBe(false);
      expect(data.message).toContain('Failed to submit');
    });

    it('submits specific URLs when urls array is provided', async () => {
      (submitToIndexNow as jest.Mock).mockResolvedValue(true);

      const urls = ['/about', '/services'];
      const request = authedRequest('http://localhost/api/indexnow', {
        method: 'POST',
        body: JSON.stringify({ urls }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.message).toContain('Submitted 2 URL');
      expect(data.urls).toEqual(urls);
      expect(submitToIndexNow).toHaveBeenCalledWith(urls);
    });

    it('returns 400 when urls is not provided', async () => {
      const request = authedRequest('http://localhost/api/indexnow', {
        method: 'POST',
        body: JSON.stringify({}),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.success).toBe(false);
      expect(data.message).toBe('URLs array is required');
    });

    it('returns 400 when urls is empty array', async () => {
      const request = authedRequest('http://localhost/api/indexnow', {
        method: 'POST',
        body: JSON.stringify({ urls: [] }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.success).toBe(false);
    });

    it('returns 400 when urls is not an array', async () => {
      const request = authedRequest('http://localhost/api/indexnow', {
        method: 'POST',
        body: JSON.stringify({ urls: 'not-an-array' }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.success).toBe(false);
    });

    it('returns 502 when URL submission fails', async () => {
      (submitToIndexNow as jest.Mock).mockResolvedValue(false);

      const request = authedRequest('http://localhost/api/indexnow', {
        method: 'POST',
        body: JSON.stringify({ urls: ['/test'] }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(502);
      expect(data.success).toBe(false);
      expect(data.message).toContain('Failed to submit');
    });

    it('handles JSON parse errors gracefully by treating body as empty', async () => {
      // request.json().catch(() => ({})) so a parse error means no urls/submitAll,
      // which triggers the 400 branch.
      const request = {
        headers: { get: (h: string) => (h === 'authorization' ? `Bearer ${TEST_SECRET}` : null) },
        nextUrl: { searchParams: { get: () => null } },
        json: jest.fn().mockRejectedValue(new SyntaxError('Unexpected token')),
      } as unknown as NextRequest;

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.success).toBe(false);
      expect(data.message).toBe('URLs array is required');
    });

    it('handles unexpected errors gracefully', async () => {
      (submitToIndexNow as jest.Mock).mockRejectedValue(new Error('Unexpected error'));

      const request = authedRequest('http://localhost/api/indexnow', {
        method: 'POST',
        body: JSON.stringify({ urls: ['/test'] }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.success).toBe(false);
      expect(consoleErrorSpy).toHaveBeenCalledWith('IndexNow API error:', expect.any(Error));
    });
  });
});
