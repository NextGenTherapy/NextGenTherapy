import styles from './loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.loadingContainer} role="status" aria-live="polite">
      <div className={styles.spinner} aria-hidden="true">
        <div className={styles.spinnerInner}></div>
      </div>
      <p className={styles.loadingText}>Loading...</p>
    </div>
  );
}
