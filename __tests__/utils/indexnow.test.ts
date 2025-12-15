import {
  submitToIndexNow,
  submitUrlToIndexNow,
  submitUrlsToIndexNow,
  submitAllPagesToIndexNow,
} from '../../src/lib/indexnow';

// Mock fetch globally
const mockFetch = jest.fn();
global.fetch = mockFetch;

describe('IndexNow Utility', () => {
  let mockConsoleLog: jest.SpyInstance;
  let mockConsoleWarn: jest.SpyInstance;
  let mockConsoleError: jest.SpyInstance;

  beforeEach(() => {
    jest.clearAllMocks();
    mockFetch.mockReset();
    // Create fresh console spies for each test
    mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});
    mockConsoleWarn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    mockConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    mockConsoleLog.mockRestore();
    mockConsoleWarn.mockRestore();
    mockConsoleError.mockRestore();
  });

  describe('submitToIndexNow', () => {
    it('returns false for empty URL array', async () => {
      const result = await submitToIndexNow([]);
      expect(result).toBe(false);
      expect(mockFetch).not.toHaveBeenCalled();
    });

    it('submits URLs to all IndexNow endpoints', async () => {
      mockFetch.mockResolvedValue({ ok: true, status: 200 });

      const result = await submitToIndexNow(['/about', '/services']);

      expect(result).toBe(true);
      expect(mockFetch).toHaveBeenCalledTimes(2); // Two endpoints

      // Check first endpoint (Bing)
      expect(mockFetch).toHaveBeenCalledWith(
        'https://api.indexnow.org/indexnow',
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        })
      );

      // Check second endpoint (Yandex)
      expect(mockFetch).toHaveBeenCalledWith(
        'https://yandex.com/indexnow',
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        })
      );
    });

    it('prepends site URL to relative paths', async () => {
      mockFetch.mockResolvedValue({ ok: true, status: 200 });

      await submitToIndexNow(['/about']);

      const callBody = JSON.parse(mockFetch.mock.calls[0][1].body);
      expect(callBody.urlList).toContain('https://nextgentherapy.co.uk/about');
    });

    it('keeps absolute URLs unchanged', async () => {
      mockFetch.mockResolvedValue({ ok: true, status: 200 });

      await submitToIndexNow(['https://nextgentherapy.co.uk/custom-page']);

      const callBody = JSON.parse(mockFetch.mock.calls[0][1].body);
      expect(callBody.urlList).toContain('https://nextgentherapy.co.uk/custom-page');
    });

    it('includes correct IndexNow submission structure', async () => {
      mockFetch.mockResolvedValue({ ok: true, status: 200 });

      await submitToIndexNow(['/test']);

      const callBody = JSON.parse(mockFetch.mock.calls[0][1].body);
      expect(callBody).toEqual({
        host: 'nextgentherapy.co.uk',
        key: 'fa653f17b2f5c3fc3940abf3aad4b728',
        keyLocation: 'https://nextgentherapy.co.uk/fa653f17b2f5c3fc3940abf3aad4b728.txt',
        urlList: ['https://nextgentherapy.co.uk/test'],
      });
    });

    it('returns true if at least one endpoint succeeds', async () => {
      mockFetch
        .mockResolvedValueOnce({ ok: true, status: 200 })
        .mockResolvedValueOnce({ ok: false, status: 500 });

      const result = await submitToIndexNow(['/test']);

      expect(result).toBe(true);
      expect(mockConsoleLog).toHaveBeenCalledWith(
        expect.stringContaining('Successfully submitted')
      );
    });

    it('logs warning for failed endpoints', async () => {
      mockFetch.mockResolvedValue({ ok: false, status: 500 });

      await submitToIndexNow(['/test']);

      expect(mockConsoleWarn).toHaveBeenCalledWith(
        expect.stringContaining('Failed to submit')
      );
    });

    it('returns false when all endpoints fail', async () => {
      mockFetch.mockResolvedValue({ ok: false, status: 500 });

      const result = await submitToIndexNow(['/test']);

      expect(result).toBe(false);
    });

    it('handles fetch errors gracefully', async () => {
      // When fetch rejects, Promise.allSettled catches it and returns rejected status
      // The outer catch is only hit for errors before Promise.allSettled
      mockFetch.mockRejectedValue(new Error('Network error'));

      const result = await submitToIndexNow(['/test']);

      // Returns false because all promises are rejected (successCount = 0)
      expect(result).toBe(false);
      // Still logs the summary message
      expect(mockConsoleLog).toHaveBeenCalledWith(
        expect.stringContaining('0/2 endpoints notified successfully')
      );
    });

    it('logs success count after submission', async () => {
      mockFetch.mockResolvedValue({ ok: true, status: 200 });

      await submitToIndexNow(['/test']);

      expect(mockConsoleLog).toHaveBeenCalledWith(
        expect.stringContaining('2/2 endpoints notified successfully')
      );
    });
  });

  describe('submitUrlToIndexNow', () => {
    it('submits a single URL', async () => {
      mockFetch.mockResolvedValue({ ok: true, status: 200 });

      const result = await submitUrlToIndexNow('/about');

      expect(result).toBe(true);
      const callBody = JSON.parse(mockFetch.mock.calls[0][1].body);
      expect(callBody.urlList).toHaveLength(1);
    });
  });

  describe('submitUrlsToIndexNow', () => {
    it('submits multiple URLs', async () => {
      mockFetch.mockResolvedValue({ ok: true, status: 200 });

      const result = await submitUrlsToIndexNow(['/about', '/services', '/contact']);

      expect(result).toBe(true);
      const callBody = JSON.parse(mockFetch.mock.calls[0][1].body);
      expect(callBody.urlList).toHaveLength(3);
    });
  });

  describe('submitAllPagesToIndexNow', () => {
    it('submits all site pages', async () => {
      mockFetch.mockResolvedValue({ ok: true, status: 200 });

      const result = await submitAllPagesToIndexNow();

      expect(result).toBe(true);
      const callBody = JSON.parse(mockFetch.mock.calls[0][1].body);

      // Check that all main pages are included
      expect(callBody.urlList).toContain('https://nextgentherapy.co.uk/');
      expect(callBody.urlList).toContain('https://nextgentherapy.co.uk/about');
      expect(callBody.urlList).toContain('https://nextgentherapy.co.uk/services');
      expect(callBody.urlList).toContain('https://nextgentherapy.co.uk/child-therapy');
      expect(callBody.urlList).toContain('https://nextgentherapy.co.uk/pricing');
      expect(callBody.urlList).toContain('https://nextgentherapy.co.uk/book-now');
      expect(callBody.urlList).toContain('https://nextgentherapy.co.uk/blog');
    });

    it('includes all 19 main site pages', async () => {
      mockFetch.mockResolvedValue({ ok: true, status: 200 });

      await submitAllPagesToIndexNow();

      const callBody = JSON.parse(mockFetch.mock.calls[0][1].body);
      expect(callBody.urlList).toHaveLength(19);
    });
  });
});
