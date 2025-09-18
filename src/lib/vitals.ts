/**
 * Core Web Vitals monitoring utilities
 * Measures and reports performance metrics for Next Generation Therapy website
 */

import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

// Metric thresholds based on Core Web Vitals recommendations
const THRESHOLDS = {
  LCP: { good: 2500, needsImprovement: 4000 },
  FID: { good: 100, needsImprovement: 300 },
  CLS: { good: 0.1, needsImprovement: 0.25 },
  FCP: { good: 1800, needsImprovement: 3000 },
  TTFB: { good: 800, needsImprovement: 1800 }
} as const;

type MetricName = keyof typeof THRESHOLDS;

interface WebVitalMetric {
  name: MetricName;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  entries: PerformanceEntry[];
  id: string;
  navigationType: string;
}

/**
 * Determines performance rating based on metric value and thresholds
 */
function getMetricRating(name: MetricName, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = THRESHOLDS[name];
  if (value <= threshold.good) return 'good';
  if (value <= threshold.needsImprovement) return 'needs-improvement';
  return 'poor';
}

/**
 * Sends metric data to analytics
 */
function sendToAnalytics(metric: WebVitalMetric) {
  // Only send in production
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[Dev] Core Web Vital: ${metric.name}`, {
      value: metric.value,
      rating: metric.rating,
      id: metric.id
    });
    return;
  }

  // Send to Google Analytics 4 if available
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      custom_map: {
        metric_rating: metric.rating,
        metric_delta: metric.delta
      }
    });
  }

  // Send to Vercel Analytics if available
  if (typeof window !== 'undefined' && 'va' in window) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).va('track', 'Web Vital', {
      metric: metric.name,
      value: metric.value,
      rating: metric.rating,
      page: window.location.pathname
    });
  }

  // Log performance issues for monitoring
  if (metric.rating === 'poor') {
    console.warn(`Poor ${metric.name} performance detected:`, {
      value: metric.value,
      threshold: THRESHOLDS[metric.name].needsImprovement,
      page: window.location.pathname,
      userAgent: navigator.userAgent
    });
  }
}

/**
 * Initialize Core Web Vitals monitoring
 */
export function initWebVitals() {
  // Only run in browser environment
  if (typeof window === 'undefined') return;

  try {
    // Largest Contentful Paint
    onLCP((metric) => {
      const webVitalMetric: WebVitalMetric = {
        ...metric,
        name: 'LCP' as MetricName,
        rating: getMetricRating('LCP', metric.value)
      };
      sendToAnalytics(webVitalMetric);
    });

    // Interaction to Next Paint (replaces FID in web-vitals v3)
    onINP((metric) => {
      const webVitalMetric: WebVitalMetric = {
        ...metric,
        name: 'FID' as MetricName,
        rating: getMetricRating('FID', metric.value)
      };
      sendToAnalytics(webVitalMetric);
    });

    // Cumulative Layout Shift
    onCLS((metric) => {
      const webVitalMetric: WebVitalMetric = {
        ...metric,
        name: 'CLS' as MetricName,
        rating: getMetricRating('CLS', metric.value)
      };
      sendToAnalytics(webVitalMetric);
    });

    // First Contentful Paint
    onFCP((metric) => {
      const webVitalMetric: WebVitalMetric = {
        ...metric,
        name: 'FCP' as MetricName,
        rating: getMetricRating('FCP', metric.value)
      };
      sendToAnalytics(webVitalMetric);
    });

    // Time to First Byte
    onTTFB((metric) => {
      const webVitalMetric: WebVitalMetric = {
        ...metric,
        name: 'TTFB' as MetricName,
        rating: getMetricRating('TTFB', metric.value)
      };
      sendToAnalytics(webVitalMetric);
    });

    console.log('✅ Core Web Vitals monitoring initialized');
  } catch (error) {
    console.error('Failed to initialize Web Vitals monitoring:', error);
  }
}

/**
 * Report Core Web Vitals for Next.js
 * Use this in _app.tsx or layout.tsx
 */
export function reportWebVitals(metric: { name: string; value: number; [key: string]: unknown }) {
  const webVitalMetric: WebVitalMetric = {
    ...metric,
    name: metric.name as MetricName,
    rating: getMetricRating(metric.name as MetricName, metric.value),
    delta: 0,
    entries: [],
    id: '',
    navigationType: 'navigate'
  };
  sendToAnalytics(webVitalMetric);
}

/**
 * Performance monitoring hook for React components
 * Note: Import React in components that use this hook
 */
export function usePerformanceMonitoring(componentName: string) {
  if (typeof window === 'undefined') return;

  // Simple performance monitoring without React dependency
  const startTime = performance.now();

  setTimeout(() => {
    const renderTime = performance.now() - startTime;

    // Log slow components
    if (renderTime > 16) { // More than one frame (60fps)
      console.warn(`Slow component render: ${componentName}`, {
        renderTime: Math.round(renderTime),
        page: window.location.pathname
      });
    }
  }, 0);
}

const vitalsExports = { initWebVitals, reportWebVitals, usePerformanceMonitoring };
export default vitalsExports;