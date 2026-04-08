import type { Metadata } from 'next';
import styles from './terms.module.scss';
import buttonLinksStyles from '../../components/ui/buttonLinks.module.scss';
import LegalNavigation from '../../components/layout/legal-navigation';
import Button from '../../components/ui/button';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Terms of Service | Next Generation Therapy',
  description:
    'Website terms of service for Next Generation Therapy. Terms for using this website. Psychotherapy in Colchester, Essex.',
  keywords: [
    'therapy terms service',
    'website terms conditions',
    'therapy website terms UK',
    'BACP therapist terms',
  ],
  authors: [{ name: 'Andreea Horhocea' }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/terms',
  },
  openGraph: {
    title: 'Terms of Service | Next Generation Therapy',
    description: 'Website terms of service for Next Generation Therapy in Colchester.',
    url: 'https://nextgentherapy.co.uk/terms',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function Terms() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms of Service',
    description: 'Website terms of service for Next Generation Therapy.',
    url: 'https://nextgentherapy.co.uk/terms',
    publisher: {
      '@type': 'Organization',
      name: 'Next Generation Therapy',
      url: 'https://nextgentherapy.co.uk',
    },
    inLanguage: 'en-GB',
    dateModified: '2026-04-08',
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
        name: 'Terms of Service',
        item: 'https://nextgentherapy.co.uk/terms',
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
        <main className={styles.terms}>
          <LegalNavigation currentPage="terms" />

          <h1 className={styles.heading}>Terms of Service</h1>
          <p className={styles.updated}>
            <strong>Last updated: 8 April 2026</strong>
          </p>

          <p>
            These terms govern your use of the Next Generation Therapy website
            (nextgentherapy.co.uk). By accessing this website, you agree to these terms. If you do
            not agree, please do not use this website.
          </p>
          <p>
            <strong>Important:</strong> These are website terms only. Therapy services are governed
            by a separate therapy agreement which is provided and signed before your first session.
          </p>

          <section>
            <h2 className={styles.sectionHeading}>1. About This Website</h2>
            <p>
              This website is operated by Andreea Horhocea, trading as Next Generation Therapy, a
              BACP registered psychotherapist based in Colchester, Essex.
            </p>
            <p>
              The website provides information about psychotherapy services. It is intended for
              residents of the United Kingdom.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>2. No Professional Advice</h2>
            <p>
              The content on this website is provided for general information only. It does not
              constitute professional advice, diagnosis, or treatment recommendations.
            </p>
            <p>
              <strong>This website is not a substitute for professional mental health care.</strong>{' '}
              If you have concerns about your mental health, please consult a qualified healthcare
              professional.
            </p>
            <p>
              No therapist-client relationship is created by your use of this website or by
              submitting an enquiry through the contact form.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>3. Therapy Services</h2>
            <p>
              Therapy services are subject to a separate written therapy agreement. That agreement
              covers matters including:
            </p>
            <ul className={styles.list}>
              <li>Fees and payment terms</li>
              <li>Cancellation policy</li>
              <li>Confidentiality and its limits</li>
              <li>Data protection</li>
              <li>Ending therapy</li>
            </ul>
            <p>
              <strong>Online therapy</strong> is only available for clients aged 16 and over. This
              is a safeguarding measure.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>4. Your Use of This Website</h2>
            <p>You may use this website for lawful purposes only. You must not:</p>
            <ul className={styles.list}>
              <li>Use this website in any way that breaches applicable laws or regulations</li>
              <li>
                Use this website to transmit unsolicited advertising or promotional material
              </li>
              <li>Attempt to gain unauthorised access to any part of this website</li>
              <li>
                Interfere with, damage, or disrupt any part of this website or any network or
                equipment used to provide it
              </li>
              <li>
                Copy, reproduce, republish, or redistribute content from this website without
                permission
              </li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>5. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, and design, is owned by Andreea
              Horhocea or used with permission. All rights are reserved.
            </p>
            <p>
              You may view, download, and print pages from this website for your personal,
              non-commercial use only, provided you do not modify the content and keep all copyright
              notices intact.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>6. Website Availability</h2>
            <p>
              I aim to keep this website available and accurate, but I do not guarantee
              uninterrupted access. The website may be unavailable from time to time for maintenance
              or other reasons.
            </p>
            <p>
              I reserve the right to modify, suspend, or discontinue any part of this website
              without notice.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>7. Third-Party Links</h2>
            <p>
              This website may contain links to external websites. These links are provided for
              convenience only. I have no control over and accept no responsibility for the content,
              privacy practices, or availability of external websites.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>8. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law:</p>
            <ul className={styles.list}>
              <li>
                This website and its content are provided &quot;as is&quot; without warranties of
                any kind, whether express or implied
              </li>
              <li>
                I will not be liable for any loss or damage arising from your use of, or inability
                to use, this website
              </li>
              <li>
                I will not be liable for any indirect, consequential, or incidental damages
              </li>
            </ul>
            <p>
              Nothing in these terms excludes or limits liability for death or personal injury
              caused by negligence, fraud, or any other liability that cannot be excluded by law.
            </p>
            <p>
              <strong>Your statutory rights as a consumer are not affected.</strong>
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>9. Privacy and Cookies</h2>
            <p>
              Your privacy matters. Please read the{' '}
              <a href="/privacy-policy" className={styles.link}>
                Privacy Policy
              </a>{' '}
              to understand how your personal data is collected and used.
            </p>
            <p>
              This website uses cookies. See the{' '}
              <a href="/cookies" className={styles.link}>
                Cookie Policy
              </a>{' '}
              for details on what cookies are used and how to control them.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>10. Crisis and Emergency Support</h2>
            <p>
              <strong>
                This website is not an emergency service. If you are in crisis or need immediate
                help, please contact one of the following:
              </strong>
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Emergency services:</strong> Call 999 or go to A&E if there is immediate
                risk to life
              </li>
              <li>
                <strong>NHS urgent help:</strong> Call 111 or visit{' '}
                <a
                  href="https://111.nhs.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  111.nhs.uk
                </a>
              </li>
              <li>
                <strong>Samaritans:</strong> Call 116 123 (free, 24 hours) or email{' '}
                <a href="mailto:jo@samaritans.org" className={styles.link}>
                  jo@samaritans.org
                </a>
              </li>
              <li>
                <strong>PAPYRUS</strong> (under 35s): Call 0800 068 4141 or text 07860 039967
              </li>
              <li>
                <strong>Shout:</strong> Text SHOUT to 85258 (free, 24/7)
              </li>
              <li>
                <strong>Mind Infoline:</strong> Call 0300 123 3393
              </li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>11. Changes to These Terms</h2>
            <p>
              I may update these terms from time to time. Changes will be posted on this page with
              an updated date. Your continued use of the website after changes constitutes
              acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>12. Severability</h2>
            <p>
              If any provision of these terms is found to be unenforceable, the remaining provisions
              will continue in full force and effect.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>13. Third-Party Rights</h2>
            <p>
              These terms are between you and me. No other person has any rights to enforce any of
              these terms under the Contracts (Rights of Third Parties) Act 1999.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>14. Governing Law</h2>
            <p>
              These terms are governed by the laws of England and Wales. Any disputes will be
              subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>15. Contact</h2>
            <p>For questions about these terms, contact:</p>
            <p>
              <strong>Andreea Horhocea</strong>
              <br />
              Next Generation Therapy
              <br />
              Email:{' '}
              <a href="mailto:andreeatherapytoday@gmail.com" className={styles.link}>
                andreeatherapytoday@gmail.com
              </a>
            </p>
          </section>

          <LegalNavigation currentPage="terms" />

          <section className={buttonLinksStyles.buttonLinks}>
            <Button href="/privacy-policy">Privacy Policy</Button>
            <Button href="/cookies">Cookie Policy</Button>
            <Button href="/book-now">Book Now</Button>
          </section>
        </main>
      </div>
      <BreadcrumbSchema />
    </>
  );
}
