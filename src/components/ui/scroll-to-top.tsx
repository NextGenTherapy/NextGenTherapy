'use client';

import styles from './scroll-to-top.module.scss';

export default function ScrollToTop() {
  const handleClick = () => {
    // Simple working scroll to top
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <div className={styles.scrollToTopContainer}>
      <button onClick={handleClick} className={styles.scrollToTopButton} aria-label="Scroll to top">
        ↑
      </button>
    </div>
  );
}
