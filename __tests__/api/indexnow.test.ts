/**
 * @jest-environment node
 */

import { NextRequest } from 'next/server';
import { GET, POST } from '../../src/app/api/indexnow/route';

// Mock the indexnow module
jest.mock('../../src/lib/indexnow', () => ({
  submitToIndexNow: jest.fn(),
  submitAllPagesToIndexNow: jest.fn(),
}));

import { submitToIndexNow, submitAllPagesToIndexNow } from '../../src/lib/indexnow';

describe('IndexNow API Route', () => {
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    jest.clearAllMocks();
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  describe('GET /api/indexnow', () => {
    it('returns health check information', async () => {
      const response = await GET();
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.message).toBe('IndexNow API is ready');
      expect(data.keyFile).toBe('fa653f17b2f5c3fc3940abf3aad4b728.txt');
      expect(data.endpoints).toContain('https://api.indexnow.org/indexnow');
      expect(data.endpoints).toContain('https://yandex.com/indexnow');
    });
  });

  describe('POST /api/indexnow', () => {
    it('submits all pages when submitAll is true', async () => {
      (submitAllPagesToIndexNow as jest.Mock).mockResolvedValue(true);

      const request = new NextRequest('http://localhost/api/indexnow', {
        method: 'POST',
        body: JSON.stringify({ submitAll: true }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.message).toContain('All site pages submitted');
      expect(submitAllPagesToIndexNow).toHaveBeenCalled();
    });

    it('returns 500 when submitAll fails', async () => {
      (submitAllPagesToIndexNow as jest.Mock).mockResolvedValue(false);

      const request = new NextRequest('http://localhost/api/indexnow', {
        method: 'POST',
        body: JSON.stringify({ submitAll: true }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.success).toBe(false);
      expect(data.message).toContain('Failed to submit');
    });

    it('submits specific URLs when urls array is provided', async () => {
      (submitToIndexNow as jest.Mock).mockResolvedValue(true);

      const urls = ['/about', '/services'];
      const request = new NextRequest('http://localhost/api/indexnow', {
        method: 'POST',
        body: JSON.stringify({ urls }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.message).toContain('2 URLs');
      expect(data.urls).toEqual(urls);
      expect(submitToIndexNow).toHaveBeenCalledWith(urls);
    });

    it('returns 400 when urls is not provided', async () => {
      const request = new NextRequest('http://localhost/api/indexnow', {
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
      const request = new NextRequest('http://localhost/api/indexnow', {
        method: 'POST',
        body: JSON.stringify({ urls: [] }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.success).toBe(false);
    });

    it('returns 400 when urls is not an array', async () => {
      const request = new NextRequest('http://localhost/api/indexnow', {
        method: 'POST',
        body: JSON.stringify({ urls: 'not-an-array' }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.success).toBe(false);
    });

    it('returns 500 when URL submission fails', async () => {
      (submitToIndexNow as jest.Mock).mockResolvedValue(false);

      const request = new NextRequest('http://localhost/api/indexnow', {
        method: 'POST',
        body: JSON.stringify({ urls: ['/test'] }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.success).toBe(false);
      expect(data.message).toContain('Failed to submit');
    });

    it('handles JSON parse errors gracefully', async () => {
      // Create a request that will throw when parsing JSON
      const request = {
        json: jest.fn().mockRejectedValue(new SyntaxError('Unexpected token')),
      } as unknown as NextRequest;

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.success).toBe(false);
      expect(data.message).toBe('Internal server error');
      expect(consoleErrorSpy).toHaveBeenCalled();
    });

    it('handles unexpected errors gracefully', async () => {
      (submitToIndexNow as jest.Mock).mockRejectedValue(new Error('Unexpected error'));

      const request = new NextRequest('http://localhost/api/indexnow', {
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
