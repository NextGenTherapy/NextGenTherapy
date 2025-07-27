'use client';

import { useState, useEffect } from 'react';
import styles from './CookieConsent.module.scss';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowConsent(false);
    // Disable analytics
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const gtag = (window as any).gtag;
      if (gtag) {
        gtag('config', 'G-3528EDPEXW', {
          send_page_view: false
        });
      }
    }
  };

  if (!showConsent) return null;

  return (
    <div className={styles.cookieConsent}>
      <div className={styles.content}>
        <h3>We use cookies</h3>
        <p>
          We use essential cookies for website functionality and analytics cookies 
          (Google Analytics, Vercel Analytics) to understand how you use our site 
          and improve our services.
        </p>
        <div className={styles.buttons}>
          <button onClick={acceptCookies} className={styles.acceptBtn}>
            Accept all cookies
          </button>
          <button onClick={declineCookies} className={styles.declineBtn}>
            Essential cookies only
          </button>
        </div>
        <p className={styles.learnMore}>
          <a href="/privacy-policy">Learn more in our privacy policy</a>
        </p>
      </div>
    </div>
  );
}
