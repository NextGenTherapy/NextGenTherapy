'use client';

import { useEffect } from 'react';
import styles from './error.module.scss';
import Button from '../components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <h1 className={styles.errorTitle}>Something went wrong</h1>
        <p className={styles.errorMessage}>
          We apologise for the inconvenience. Please try again or contact us if the problem
          persists.
        </p>
        <div className={styles.errorActions}>
          <Button onClick={() => reset()}>Try again</Button>
          <Button href="/">Return home</Button>
          <Button href="/book-now">Contact us</Button>
        </div>
      </div>
    </div>
  );
}
