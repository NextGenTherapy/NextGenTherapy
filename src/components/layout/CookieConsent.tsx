'use client';

import { useState, useEffect } from 'react';
import styles from './CookieConsent.module.scss';

/**
 * Resets cookie consent, allowing users to change their preferences.
 * Clears the stored consent and reloads the page to show the consent banner.
 */
export function resetCookieConsent() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('cookie-consent');
    window.dispatchEvent(new CustomEvent('cookie-consent-changed'));
    window.location.reload();
  }
}

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowConsent(true);
      document.body.classList.add('cookie-banner-visible');
    }
    return () => {
      document.body.classList.remove('cookie-banner-visible');
    };
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowConsent(false);
    document.body.classList.remove('cookie-banner-visible');
    // Dispatch custom event for same-tab updates
    window.dispatchEvent(new CustomEvent('cookie-consent-changed'));
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowConsent(false);
    document.body.classList.remove('cookie-banner-visible');
    // Dispatch custom event for same-tab updates
    window.dispatchEvent(new CustomEvent('cookie-consent-changed'));
    // Disable analytics
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const gtag = (window as any).gtag;
      if (gtag) {
        gtag('config', 'G-3528EDPEXW', {
          send_page_view: false,
        });
      }
    }
  };

  if (!showConsent) return null;

  return (
    <div className={styles.cookieConsent}>
      <div className={styles.content}>
        <p>
          We use cookies to improve your experience and analyse site usage.{' '}
          <a href="/cookies">Learn more about cookies</a>
        </p>
        <div className={styles.buttons}>
          <button onClick={acceptCookies} className={styles.acceptBtn}>
            Accept
          </button>
          <button onClick={declineCookies} className={styles.declineBtn}>
            Essential only
          </button>
        </div>
      </div>
    </div>
  );
}
