import Link from 'next/link';
import styles from './CTABlock.module.scss';
import buttonStyles from './button.module.scss';

export default function CTABlock() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Ready to take the first step?</h2>
        <p className={styles.subheading}>Book a free 15-minute consultation. No commitment required.</p>
        <Link href="/book-now" className={buttonStyles.button}>
          Book Now
        </Link>
      </div>
    </section>
  );
}
