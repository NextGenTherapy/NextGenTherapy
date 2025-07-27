'use client';

import { useEffect, useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function ConditionalAnalytics() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check for cookie consent
    const consent = localStorage.getItem('cookie-consent');
    setHasConsent(consent === 'accepted');

    // Listen for consent changes
    const checkConsent = () => {
      const consent = localStorage.getItem('cookie-consent');
      setHasConsent(consent === 'accepted');
    };

    // Check every second for consent changes
    const interval = setInterval(checkConsent, 1000);

    return () => clearInterval(interval);
  }, []);

  // Only render Google Analytics if user has consented
  if (!hasConsent) return null;

  return <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-3528EDPEXW"} />;
}
