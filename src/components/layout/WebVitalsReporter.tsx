'use client';

import { useEffect, useState } from 'react';

/**
 * Initializes Core Web Vitals monitoring once the user has accepted cookies.
 * Web Vitals reports through Google Analytics / Vercel Analytics, both of which
 * are gated behind cookie consent — so this stays gated too.
 *
 * Skips initialization in non-production environments and on the server.
 */
export default function WebVitalsReporter() {
  const [consentAccepted, setConsentAccepted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    setConsentAccepted(localStorage.getItem('cookie-consent') === 'accepted');

    const handleConsentChange = () => {
      setConsentAccepted(localStorage.getItem('cookie-consent') === 'accepted');
    };

    window.addEventListener('cookie-consent-changed', handleConsentChange);
    window.addEventListener('storage', handleConsentChange);
    return () => {
      window.removeEventListener('cookie-consent-changed', handleConsentChange);
      window.removeEventListener('storage', handleConsentChange);
    };
  }, []);

  useEffect(() => {
    if (!consentAccepted) return;
    if (process.env.NODE_ENV !== 'production') return;

    let cancelled = false;
    import('../../lib/vitals').then(({ initWebVitals }) => {
      if (!cancelled) initWebVitals();
    });

    return () => {
      cancelled = true;
    };
  }, [consentAccepted]);

  return null;
}
