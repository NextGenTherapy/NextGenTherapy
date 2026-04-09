'use client';

import { useEffect } from 'react';

/**
 * Client component to initialize Core Web Vitals monitoring
 * Uses dynamic import to reduce initial bundle size
 * Must be rendered on client-side only
 */
export default function WebVitalsReporter() {
  useEffect(() => {
    // Only initialize in production to reduce bundle impact in development
    if (process.env.NODE_ENV === 'production') {
      // Dynamic import to reduce initial JavaScript load
      import('../../lib/vitals').then(({ initWebVitals }) => {
        initWebVitals();
      });
    }
  }, []);

  // This component doesn't render anything visible
  return null;
}
