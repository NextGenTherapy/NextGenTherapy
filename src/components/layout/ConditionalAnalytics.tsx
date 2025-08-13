"use client";

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export default function ConditionalAnalytics() {
  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    
    if (consent === 'accepted' && typeof window !== 'undefined') {
      // Initialize Google Analytics dataLayer
      window.dataLayer = window.dataLayer || [];
    }
  }, []);

  const consent = typeof window !== 'undefined' ? localStorage.getItem('cookie-consent') : null;

  if (consent !== 'accepted') {
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