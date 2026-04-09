'use client';

import Image from 'next/image';
import Link from 'next/link';

import { TrackedPhoneLink, TrackedEmailLink, TrackedBACPLink } from '@/components/ui/TrackedContactLinks';
import { resetCookieConsent } from './CookieConsent';
import styles from './footer.module.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Column 1: Brand */}
        <section className={styles.footerColumn}>
          <Link href="/" className={styles.brandLink}>
            <span className={styles.brandName}>NextGenTherapy</span>
          </Link>
          <p className={styles.tagline}>
            Psychodynamic therapy for women, neurodivergent adults, and young people in Colchester
            and online across the UK.
          </p>
          <TrackedBACPLink location="footer" className={styles.bacpBadge}>
            <Image src="/images/bacp.jpg" alt="BACP Registered Member" width={60} height={60} />
          </TrackedBACPLink>
        </section>

        {/* Column 2: What I Work With */}
        <section className={styles.footerColumn}>
          <h3>What I Work With</h3>
          <ul>
            <li>
              <Link href="/therapy-for-women">Therapy for Women</Link>
            </li>
            <li>
              <Link href="/neurodiversity">ADHD & Autism</Link>
            </li>
            <li>
              <Link href="/teen-therapy">Teen Therapy</Link>
            </li>
            <li>
              <Link href="/child-therapy">Child Therapy</Link>
            </li>
            <li>
              <Link href="/romanian-therapy">Romanian Therapy</Link>
            </li>
            <li>
              <Link href="/online-therapy">Online Therapy</Link>
            </li>
          </ul>
        </section>

        {/* Column 3: Service Areas */}
        <section className={styles.footerColumn}>
          <h3>Service Areas</h3>
          <ul>
            <li>
              <Link href="/therapy-in-colchester">Colchester</Link>
            </li>
            <li>
              <Link href="/therapy-in-wivenhoe">Wivenhoe</Link>
            </li>
            <li>
              <Link href="/therapy-in-mersea">Mersea</Link>
            </li>
            <li>
              <Link href="/therapy-in-tiptree">Tiptree</Link>
            </li>
            <li>
              <Link href="/therapy-in-marks-tey">Marks Tey</Link>
            </li>
            <li>
              <Link href="/therapy-in-manningtree">Manningtree</Link>
            </li>
            <li>
              <Link href="/therapy-in-clacton">Clacton</Link>
            </li>
            <li>
              <Link href="/therapy-in-ipswich">Ipswich</Link>
            </li>
          </ul>
        </section>

        {/* Column 4: Site */}
        <section className={styles.footerColumn}>
          <h3>Site</h3>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/is-this-right-for-you">Is This Right For You?</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/book-now">Book a Free Call</Link>
            </li>
          </ul>
        </section>

        {/* Column 5: Contact */}
        <section className={styles.footerColumn}>
          <h3>Contact</h3>
          <address className={styles.address}>
            <a
              href="https://www.google.com/maps?q=Colchester+Business+Centre,+1+George+Williams+Way,+Colchester+CO1+2JS"
              target="_blank"
              rel="noopener noreferrer"
            >
              Colchester Business Centre
              <br />
              1 George Williams Way
              <br />
              Colchester CO1 2JS
            </a>
          </address>
          <p className={styles.contactLink}>
            <TrackedPhoneLink location="footer" />
          </p>
          <p className={styles.contactLink}>
            <TrackedEmailLink location="footer" />
          </p>
          <div className={styles.socialLinks}>
            <a
              href="https://www.facebook.com/share/16dg5gpZRo/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Andreea on Facebook"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/nextgentherapycolchester?igsh=MWx2N2g0NnI0eTVveQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Andreea on Instagram"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </section>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          &copy; {currentYear} Next Generation Therapy. All rights reserved.
        </p>
        <div className={styles.legalLinks}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <span className={styles.divider}>·</span>
          <Link href="/cookies">Cookies</Link>
          <span className={styles.divider}>·</span>
          <Link href="/terms">Terms</Link>
          <span className={styles.divider}>·</span>
          <Link href="/accessibility">Accessibility</Link>
          <span className={styles.divider}>·</span>
          <button
            onClick={resetCookieConsent}
            className={styles.manageCookies}
            type="button"
          >
            Manage Cookies
          </button>
        </div>
        <p className={styles.credentials}>
          BACP Registered Member (MBACP 385976). Psychodynamic Psychotherapy. UK GDPR compliant.
        </p>
      </div>
    </footer>
  );
}
