'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '../ui/button';
import styles from './legal-navigation.module.scss';

interface LegalNavigationProps {
  currentPage: 'privacy' | 'terms';
}

export default function LegalNavigation({ currentPage }: LegalNavigationProps) {
  const router = useRouter();

  const handleGoBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  const otherPageUrl = currentPage === 'privacy' ? '/terms' : '/privacy-policy';
  const otherPageTitle = currentPage === 'privacy' ? 'Terms of Service' : 'Privacy Policy';

  return (
    <div className={styles.navigationContainer}>
      <div className={styles.navigationButtons}>
        <Button onClick={handleGoBack} aria-label="Go back to previous page" type="button">
          ← Back
        </Button>

        <Button href={otherPageUrl}>View {otherPageTitle} →</Button>
      </div>

      <div className={styles.homeLink}>
        <Button href="/">🏠 Home</Button>
      </div>
    </div>
  );
}
