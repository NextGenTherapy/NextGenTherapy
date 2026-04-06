import styles from './footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerContent}>
        <section className={styles.footerColumn}>
          <Link href="/location">
            <h3>Location</h3>
          </Link>
          <ul>
            <li>
              <a
                href="https://www.google.com/maps?q=Colchester+Business+Centre,+1+George+Williams+Way,+Colchester+CO1+2JS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Colchester Business Centre,</span>
                <span>1 George Williams Way,</span>
                <span>Colchester</span>
                <span>CO1 2JS</span>
              </a>
            </li>
          </ul>
        </section>

        <section className={styles.footerColumn}>
          <Link href="/book-now#working-hours">
            <h3>Hours</h3>
          </Link>
          <ul className="weekday">
            <li>Monday - Tuesday</li>
            <li>10am - 7pm</li>
            <li>Friday</li>
            <li>9am-2pm</li>
          </ul>
        </section>

        <section className={styles.footerColumn}>
          <Link href="/book-now#contact-form">
            <h3>Contact me</h3>
          </Link>
          <p>
            Email: <a href="mailto:andreeatherapytoday@gmail.com">andreeatherapytoday@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel:+447448036017">+447448036017</a>
          </p>
          <div className={styles.socialLinks}>
            <a
              href="https://www.facebook.com/share/16dg5gpZRo/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit our Facebook page"
            >
              <Image src="/images/facebook-opt.png" alt="Facebook" width={32} height={32} unoptimized />
            </a>
            <a
              href="https://www.instagram.com/nextgentherapycolchester?igsh=MWx2N2g0NnI0eTVveQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit our Instagram page"
            >
              <Image src="/images/instagram-opt.png" alt="Instagram" width={32} height={32} unoptimized />
            </a>
            <a
              href="https://www.bacp.co.uk/therapists/385976/andreea-horhocea/london-e16"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit our BACP page"
              className={styles.bacpBadge}
            >
              <Image src="/images/bacp.jpg" alt="BACP" width={48} height={48} />
            </a>
          </div>
        </section>
      </section>

      <div className={styles.footerBottom}>
        <div className={styles.quickLinks}>
          <Link href="/services">Therapy Services</Link>
          <Link href="/child-therapy">Child Therapy</Link>
          <Link href="/teenage-therapy">Teenage Therapy</Link>
          <Link href="/young-adult-therapy">Young Adult Therapy</Link>
          <Link href="/neurodiversity-therapy">Neurodiversity Support</Link>
          <Link href="/lgbtq-therapy">LGBTQ+ Therapy</Link>
          <Link href="/parent-support">Parent Support</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/trust">Trust & Care</Link>
          <Link href="/about">About Andreea</Link>
          <Link href="/location">Location</Link>
        </div>
        <div className={styles.legalLinks}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Next Generation Therapy. All rights reserved.</p>
          <p className={styles.developer}>
            Developed by{' '}
            <a
              href="https://lstevens.dev"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.developerLink}
            >
              Luke Stevens
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
