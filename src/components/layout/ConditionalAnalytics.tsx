'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export default function ConditionalAnalytics() {
  const [consentAccepted, setConsentAccepted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    setConsentAccepted(consent === 'accepted');

    if (consent === 'accepted' && typeof window !== 'undefined') {
      // Initialize Google Analytics dataLayer
      window.dataLayer = window.dataLayer || [];
    }

    // Listen for consent changes
    const handleStorageChange = () => {
      const updatedConsent = localStorage.getItem('cookie-consent');
      setConsentAccepted(updatedConsent === 'accepted');

      if (updatedConsent === 'accepted' && typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
      }
    };

    // Custom event for same-tab localStorage changes
    window.addEventListener('cookie-consent-changed', handleStorageChange);

    return () => {
      window.removeEventListener('cookie-consent-changed', handleStorageChange);
    };
  }, []);

  if (!consentAccepted) {
    return null;
  }

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3528EDPEXW"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3528EDPEXW', {
            send_page_view: true,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
