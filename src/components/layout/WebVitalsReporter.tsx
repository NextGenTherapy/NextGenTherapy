'use client';

import { useEffect } from 'react';
import { initWebVitals } from '../../lib/vitals';

/**
 * Client component to initialize Core Web Vitals monitoring
 * Must be rendered on client-side only
 */
export default function WebVitalsReporter() {
  useEffect(() => {
    // Initialize Web Vitals monitoring when component mounts
    initWebVitals();
  }, []);

  // This component doesn't render anything visible
  return null;
}
