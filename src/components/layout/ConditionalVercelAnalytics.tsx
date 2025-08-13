"use client";

import { useEffect, useState } from 'react';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function ConditionalVercelAnalytics() {
  const [consentAccepted, setConsentAccepted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    setConsentAccepted(consent === 'accepted');
    
    // Listen for consent changes
    const handleStorageChange = () => {
      const updatedConsent = localStorage.getItem('cookie-consent');
      setConsentAccepted(updatedConsent === 'accepted');
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Custom event for same-tab localStorage changes
    window.addEventListener('cookie-consent-changed', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cookie-consent-changed', handleStorageChange);
    };
  }, []);

  if (!consentAccepted) {
    return null;
  }

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
