import type { Metadata } from 'next';
import styles from './cookies.module.scss';
import buttonLinksStyles from '../../components/ui/buttonLinks.module.scss';
import LegalNavigation from '../../components/layout/legal-navigation';
import Button from '../../components/ui/button';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Cookie Policy | Next Generation Therapy',
  description:
    'Cookie policy for Next Generation Therapy website. Learn about the cookies we use and how to control them.',
  keywords: ['cookie policy', 'website cookies', 'GDPR cookies', 'cookie consent'],
  authors: [{ name: 'Andreea Horhocea' }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/cookies',
  },
  openGraph: {
    title: 'Cookie Policy | Next Generation Therapy',
    description: 'How Next Generation Therapy uses cookies and how to control your preferences.',
    url: 'https://nextgentherapy.co.uk/cookies',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function Cookies() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Cookie Policy',
    description: 'Cookie policy for Next Generation Therapy website.',
    url: 'https://nextgentherapy.co.uk/cookies',
    publisher: {
      '@type': 'Organization',
      name: 'Next Generation Therapy',
      url: 'https://nextgentherapy.co.uk',
    },
    inLanguage: 'en-GB',
    dateModified: '2026-04-09',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://nextgentherapy.co.uk',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Cookie Policy',
        item: 'https://nextgentherapy.co.uk/cookies',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className={styles.page}>
        <main className={styles.cookies}>
          <LegalNavigation currentPage="cookies" />

          <h1 className={styles.heading}>Cookie Policy</h1>
          <p className={styles.updated}>
            <strong>Last updated: 9 April 2026</strong>
          </p>

          <p>
            This Cookie Policy explains how the Next Generation Therapy website uses cookies and
            similar technologies. It should be read alongside the{' '}
            <a href="/privacy-policy" className={styles.link}>
              Privacy Policy
            </a>
            .
          </p>

          <section>
            <h2 className={styles.sectionHeading}>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device when you visit a website. They help
              the website function, remember your preferences, and understand how visitors use the
              site.
            </p>
            <p>
              Under UK law (the Privacy and Electronic Communications Regulations 2003, as amended
              by the Data (Use and Access) Act 2025), certain cookies require your consent before
              they can be set. The 2025 amendments clarify consent requirements and emphasise
              that refusing cookies must be as easy as accepting them.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>2. How We Use Cookies</h2>
            <p>This website uses cookies for two purposes:</p>
            <ul className={styles.list}>
              <li>
                <strong>Essential cookies:</strong> Required for the website to function properly.
                These do not require consent.
              </li>
              <li>
                <strong>Analytics cookies:</strong> Help me understand how visitors use the website.
                These are only set with your consent.
              </li>
            </ul>
            <p>
              <strong>I do not use cookies for advertising or tracking across other websites.</strong>
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>3. Essential Cookies</h2>
            <p>
              Essential cookies are necessary for the website to work. They do not collect personal
              information and cannot be switched off.
            </p>
            <table className={styles.cookieTable}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>cookie-consent</code>
                  </td>
                  <td>
                    Remembers your cookie preference (whether you accepted or declined analytics
                    cookies)
                  </td>
                  <td>1 year</td>
                  <td>Local Storage</td>
                </tr>
              </tbody>
            </table>
            <p>
              <strong>Legal basis:</strong> These cookies are strictly necessary for the website to
              function and do not require consent under PECR Regulation 6(4).
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>4. Analytics Cookies</h2>
            <p>
              Analytics cookies help me understand how visitors interact with the website. They
              collect information anonymously and are <strong>only set if you click Accept</strong>{' '}
              on the cookie consent banner.
            </p>

            <h3 className={styles.subheading}>Google Analytics 4</h3>
            <p>
              Google Analytics collects anonymised data about page views, session duration, and
              general geographic location. IP addresses are anonymised before processing.
            </p>
            <table className={styles.cookieTable}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>_ga</code>
                  </td>
                  <td>Distinguishes unique visitors</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td>
                    <code>_ga_*</code>
                  </td>
                  <td>Maintains session state</td>
                  <td>2 years</td>
                </tr>
              </tbody>
            </table>
            <p>
              Google Analytics data is processed by Google LLC (USA) under the UK-US Data Bridge and
              Standard Contractual Clauses. See{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Google&apos;s Privacy Policy
              </a>
              .
            </p>

            <h3 className={styles.subheading}>Vercel Analytics</h3>
            <p>
              Vercel Analytics measures website performance and page load times. It does not use
              cookies but may collect anonymised session data.
            </p>
            <p>
              Vercel data is processed by Vercel Inc. (USA) under the UK-US Data Bridge and Standard
              Contractual Clauses. See{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Vercel&apos;s Privacy Policy
              </a>
              .
            </p>

            <p>
              <strong>Legal basis:</strong> Your consent (UK GDPR Article 6(1)(a) and PECR
              Regulation 6).
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>5. Your Choices</h2>

            <h3 className={styles.subheading}>Cookie Consent Banner</h3>
            <p>When you first visit this website, you will see a banner asking about cookies:</p>
            <ul className={styles.list}>
              <li>
                <strong>Accept:</strong> Analytics cookies will be set and data collected to help
                improve the website
              </li>
              <li>
                <strong>Essential only:</strong> No analytics cookies will be set; only essential
                cookies needed for the website to function
              </li>
            </ul>

            <h3 className={styles.subheading}>Changing Your Mind</h3>
            <p>If you want to change your cookie preference:</p>
            <ol className={styles.list}>
              <li>Clear your browser&apos;s storage/cookies for this website</li>
              <li>Refresh the page</li>
              <li>The consent banner will reappear, and you can make a new choice</li>
            </ol>

            <h3 className={styles.subheading}>Browser Settings</h3>
            <p>
              Most browsers allow you to block or delete cookies through their settings. However,
              blocking all cookies may affect website functionality.
            </p>
            <p>Links to cookie settings for common browsers:</p>
            <ul className={styles.list}>
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>

            <h3 className={styles.subheading}>Google Analytics Opt-Out</h3>
            <p>
              You can opt out of Google Analytics across all websites by installing the{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>6. Third-Party Content</h2>
            <p>
              This website does not currently embed third-party content (such as YouTube videos,
              social media widgets, or maps) that would set additional cookies.
            </p>
            <p>If this changes, this policy will be updated.</p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>7. Changes to This Policy</h2>
            <p>
              This Cookie Policy may be updated from time to time. The date at the top of this page
              shows when it was last revised.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>8. Contact</h2>
            <p>If you have questions about this Cookie Policy, please contact:</p>
            <p>
              <strong>Andreea Horhocea</strong>
              <br />
              Email:{' '}
              <a href="mailto:andreeatherapytoday@gmail.com" className={styles.link}>
                andreeatherapytoday@gmail.com
              </a>
            </p>
            <p>
              For more information about how personal data is handled, see the{' '}
              <a href="/privacy-policy" className={styles.link}>
                Privacy Policy
              </a>
              .
            </p>
          </section>

          <LegalNavigation currentPage="cookies" />

          <section className={buttonLinksStyles.buttonLinks}>
            <Button href="/privacy-policy">Privacy Policy</Button>
            <Button href="/terms">Terms of Service</Button>
            <Button href="/book-now">Book Now</Button>
          </section>
        </main>
      </div>
      <BreadcrumbSchema />
    </>
  );
}
