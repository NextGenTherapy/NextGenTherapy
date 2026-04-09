'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '../ui/button';
import styles from './legal-navigation.module.scss';

interface LegalNavigationProps {
  currentPage: 'privacy' | 'terms' | 'cookies' | 'accessibility';
}

const legalPages = {
  privacy: { url: '/privacy-policy', title: 'Privacy Policy' },
  terms: { url: '/terms', title: 'Terms of Service' },
  cookies: { url: '/cookies', title: 'Cookie Policy' },
  accessibility: { url: '/accessibility', title: 'Accessibility Statement' },
};

export default function LegalNavigation({ currentPage }: LegalNavigationProps) {
  const router = useRouter();

  const handleGoBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  // Get the other two pages (not the current one)
  const otherPages = Object.entries(legalPages)
    .filter(([key]) => key !== currentPage)
    .map(([, page]) => page);

  return (
    <div className={styles.navigationContainer}>
      <div className={styles.navigationButtons}>
        <Button onClick={handleGoBack} aria-label="Go back to previous page" type="button">
          ← Back
        </Button>

        {otherPages.map((page) => (
          <Button key={page.url} href={page.url}>
            {page.title}
          </Button>
        ))}
      </div>

      <div className={styles.homeLink}>
        <Button href="/">Home</Button>
      </div>
    </div>
  );
}
