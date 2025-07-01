'use client';

import React from 'react';
import Link from 'next/link';
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
        <Button 
          onClick={handleGoBack}
          className={styles.backButton}
          aria-label="Go back to previous page"
        >
          ← Back
        </Button>
        
        <Link href={otherPageUrl} className={styles.switchLink}>
          <Button className={styles.switchButton}>
            View {otherPageTitle} →
          </Button>
        </Link>
      </div>
      
      <div className={styles.homeLink}>
        <Link href="/">
          <Button className={styles.homeButton}>
            🏠 Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
