import {
  initWebVitals,
  reportWebVitals,
  usePerformanceMonitoring,
} from '../../src/lib/vitals';

// Mock web-vitals library
jest.mock('web-vitals', () => ({
  onCLS: jest.fn(),
  onINP: jest.fn(),
  onFCP: jest.fn(),
  onLCP: jest.fn(),
  onTTFB: jest.fn(),
}));

import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

describe('Web Vitals Utility', () => {
  const originalWindow = global.window;
  const originalEnv = process.env.NODE_ENV;
  let mockConsoleLog: jest.SpyInstance;
  let mockConsoleWarn: jest.SpyInstance;
  let mockConsoleError: jest.SpyInstance;

  beforeEach(() => {
    jest.clearAllMocks();

    // Create fresh console spies for each test
    mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});
    mockConsoleWarn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    mockConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Reset window mock
    Object.defineProperty(global, 'window', {
      value: {
        location: { pathname: '/test' },
        gtag: jest.fn(),
        va: jest.fn(),
      },
      writable: true,
    });

    // Reset to development mode
    process.env.NODE_ENV = 'development';
  });

  afterEach(() => {
    mockConsoleLog.mockRestore();
    mockConsoleWarn.mockRestore();
    mockConsoleError.mockRestore();
  });

  afterAll(() => {
    global.window = originalWindow;
    process.env.NODE_ENV = originalEnv;
  });

  describe('initWebVitals', () => {
    it('returns early when window is undefined', () => {
      Object.defineProperty(global, 'window', { value: undefined, writable: true });

      initWebVitals();

      expect(onLCP).not.toHaveBeenCalled();
    });

    it('registers all metric callbacks', () => {
      initWebVitals();

      expect(onLCP).toHaveBeenCalled();
      expect(onINP).toHaveBeenCalled();
      expect(onCLS).toHaveBeenCalled();
      expect(onFCP).toHaveBeenCalled();
      expect(onTTFB).toHaveBeenCalled();
    });

    it('logs success message after initialization', () => {
      initWebVitals();

      expect(mockConsoleLog).toHaveBeenCalledWith(
        '✅ Core Web Vitals monitoring initialized'
      );
    });

    it('handles initialization errors gracefully', () => {
      // Make onLCP throw to trigger error handling
      (onLCP as jest.Mock).mockImplementationOnce(() => {
        throw new Error('Test error');
      });

      initWebVitals();

      expect(mockConsoleError).toHaveBeenCalledWith(
        'Failed to initialize Web Vitals monitoring:',
        expect.any(Error)
      );

      // Reset for other tests
      (onLCP as jest.Mock).mockReset();
    });

    it('calls analytics callback for LCP', () => {
      initWebVitals();

      // Get the callback that was registered
      const lcpCallback = (onLCP as jest.Mock).mock.calls[0][0];

      // Call with mock metric
      lcpCallback({
        name: 'LCP',
        value: 2000,
        delta: 100,
        entries: [],
        id: 'test-id',
        navigationType: 'navigate',
      });

      // In dev mode, should log to console
      expect(mockConsoleLog).toHaveBeenCalledWith(
        '[Dev] Core Web Vital: LCP',
        expect.objectContaining({
          value: 2000,
          rating: 'good',
        })
      );
    });

    it('correctly rates LCP as good when under threshold', () => {
      initWebVitals();
      const lcpCallback = (onLCP as jest.Mock).mock.calls[0][0];

      lcpCallback({
        name: 'LCP',
        value: 2000, // Under 2500ms threshold
        delta: 100,
        entries: [],
        id: 'test-id',
        navigationType: 'navigate',
      });

      expect(mockConsoleLog).toHaveBeenCalledWith(
        '[Dev] Core Web Vital: LCP',
        expect.objectContaining({ rating: 'good' })
      );
    });

    it('correctly rates LCP as needs-improvement', () => {
      initWebVitals();
      const lcpCallback = (onLCP as jest.Mock).mock.calls[0][0];

      lcpCallback({
        name: 'LCP',
        value: 3000, // Between 2500-4000ms
        delta: 100,
        entries: [],
        id: 'test-id',
        navigationType: 'navigate',
      });

      expect(mockConsoleLog).toHaveBeenCalledWith(
        '[Dev] Core Web Vital: LCP',
        expect.objectContaining({ rating: 'needs-improvement' })
      );
    });

    it('correctly rates LCP as poor', () => {
      initWebVitals();
      const lcpCallback = (onLCP as jest.Mock).mock.calls[0][0];

      lcpCallback({
        name: 'LCP',
        value: 5000, // Over 4000ms
        delta: 100,
        entries: [],
        id: 'test-id',
        navigationType: 'navigate',
      });

      expect(mockConsoleLog).toHaveBeenCalledWith(
        '[Dev] Core Web Vital: LCP',
        expect.objectContaining({ rating: 'poor' })
      );
    });

    it('correctly rates CLS values', () => {
      // Reset mocks to ensure clean state
      jest.clearAllMocks();

      initWebVitals();

      // Get callback - check it exists first
      const calls = (onCLS as jest.Mock).mock.calls;
      expect(calls.length).toBeGreaterThan(0);
      const clsCallback = calls[0][0];

      // Good CLS
      clsCallback({
        name: 'CLS',
        value: 0.05, // Under 0.1
        delta: 0.01,
        entries: [],
        id: 'cls-id',
        navigationType: 'navigate',
      });

      expect(mockConsoleLog).toHaveBeenCalledWith(
        '[Dev] Core Web Vital: CLS',
        expect.objectContaining({ rating: 'good' })
      );
    });

    it('sends to Google Analytics in production', () => {
      process.env.NODE_ENV = 'production';
      const mockGtag = jest.fn();
      Object.defineProperty(global, 'window', {
        value: {
          location: { pathname: '/test' },
          gtag: mockGtag,
        },
        writable: true,
      });

      initWebVitals();
      const lcpCallback = (onLCP as jest.Mock).mock.calls[0][0];

      lcpCallback({
        name: 'LCP',
        value: 2000,
        delta: 100,
        entries: [],
        id: 'test-id',
        navigationType: 'navigate',
      });

      expect(mockGtag).toHaveBeenCalledWith(
        'event',
        'LCP',
        expect.objectContaining({
          event_category: 'Web Vitals',
        })
      );
    });

    it('sends to Vercel Analytics in production when available', () => {
      process.env.NODE_ENV = 'production';
      const mockVa = jest.fn();
      Object.defineProperty(global, 'window', {
        value: {
          location: { pathname: '/test' },
          va: mockVa,
        },
        writable: true,
      });

      initWebVitals();
      const lcpCallback = (onLCP as jest.Mock).mock.calls[0][0];

      lcpCallback({
        name: 'LCP',
        value: 2000,
        delta: 100,
        entries: [],
        id: 'test-id',
        navigationType: 'navigate',
      });

      expect(mockVa).toHaveBeenCalledWith(
        'track',
        'Web Vital',
        expect.objectContaining({
          metric: 'LCP',
          value: 2000,
        })
      );
    });

    it('logs warning for poor performance in production', () => {
      process.env.NODE_ENV = 'production';
      Object.defineProperty(global, 'window', {
        value: {
          location: { pathname: '/slow-page' },
        },
        writable: true,
      });
      Object.defineProperty(global, 'navigator', {
        value: { userAgent: 'Test Browser' },
        writable: true,
      });

      initWebVitals();
      const lcpCallback = (onLCP as jest.Mock).mock.calls[0][0];

      lcpCallback({
        name: 'LCP',
        value: 5000, // Poor
        delta: 100,
        entries: [],
        id: 'test-id',
        navigationType: 'navigate',
      });

      expect(mockConsoleWarn).toHaveBeenCalledWith(
        'Poor LCP performance detected:',
        expect.objectContaining({
          value: 5000,
          page: '/slow-page',
        })
      );
    });
  });

  describe('reportWebVitals', () => {
    it('creates WebVitalMetric and sends to analytics', () => {
      reportWebVitals({
        name: 'LCP',
        value: 2000,
      });

      expect(mockConsoleLog).toHaveBeenCalledWith(
        '[Dev] Core Web Vital: LCP',
        expect.any(Object)
      );
    });

    it('handles various metric types', () => {
      const metrics = ['LCP', 'FCP', 'CLS', 'FID', 'TTFB'];

      metrics.forEach((name) => {
        reportWebVitals({ name, value: 100 });
      });

      expect(mockConsoleLog).toHaveBeenCalledTimes(metrics.length);
    });
  });

  describe('usePerformanceMonitoring', () => {
    beforeEach(() => {
      jest.useFakeTimers();
      Object.defineProperty(global, 'window', {
        value: {
          location: { pathname: '/test-page' },
        },
        writable: true,
      });

      // Mock performance.now
      const mockPerformanceNow = jest.fn()
        .mockReturnValueOnce(0)
        .mockReturnValueOnce(20); // 20ms render time (slow)

      Object.defineProperty(global, 'performance', {
        value: { now: mockPerformanceNow },
        writable: true,
      });
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('returns early when window is undefined', () => {
      Object.defineProperty(global, 'window', { value: undefined, writable: true });

      usePerformanceMonitoring('TestComponent');

      jest.runAllTimers();
      expect(mockConsoleWarn).not.toHaveBeenCalled();
    });

    it('logs warning for slow component renders', () => {
      usePerformanceMonitoring('SlowComponent');

      jest.runAllTimers();

      expect(mockConsoleWarn).toHaveBeenCalledWith(
        'Slow component render: SlowComponent',
        expect.objectContaining({
          renderTime: 20,
          page: '/test-page',
        })
      );
    });

    it('does not log warning for fast renders', () => {
      // Override to return fast render time
      const fastPerformance = jest.fn()
        .mockReturnValueOnce(0)
        .mockReturnValueOnce(10); // 10ms (fast)

      Object.defineProperty(global, 'performance', {
        value: { now: fastPerformance },
        writable: true,
      });

      usePerformanceMonitoring('FastComponent');

      jest.runAllTimers();

      expect(mockConsoleWarn).not.toHaveBeenCalled();
    });
  });
});
