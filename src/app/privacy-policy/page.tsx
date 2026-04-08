import styles from './privacy-policy.module.scss';
import buttonLinksStyles from '../../components/ui/buttonLinks.module.scss';
import LegalNavigation from '../../components/layout/legal-navigation';
import Button from '../../components/ui/button';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Privacy Policy | Therapy Confidentiality Colchester',
  description:
    'Privacy policy for Next Generation Therapy. How your personal and clinical data is protected. UK GDPR compliant. BACP registered therapist in Colchester.',
  keywords: [
    'therapy privacy Colchester',
    'therapy confidentiality Essex',
    'client privacy therapy',
    'therapeutic confidentiality UK',
    'therapy data protection Colchester',
    'BACP confidentiality standards',
    'therapy GDPR compliance',
  ],
  authors: [{ name: 'Andreea Horhocea' }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Next Generation Therapy',
    description:
      'How Next Generation Therapy protects your personal and clinical data. UK GDPR compliant.',
    url: 'https://nextgentherapy.co.uk/privacy-policy',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function PrivacyPolicy() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy',
    description: 'Privacy policy for Next Generation Therapy psychotherapy services.',
    url: 'https://nextgentherapy.co.uk/privacy-policy',
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
        name: 'Privacy Policy',
        item: 'https://nextgentherapy.co.uk/privacy-policy',
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
        <main className={styles.privacyPolicy}>
          <LegalNavigation currentPage="privacy" />

          <h1 className={styles.heading}>Privacy Policy</h1>
          <p className={styles.updated}>
            <strong>Last updated: 8 April 2026</strong>
          </p>

          <p>
            This Privacy Policy explains how Andreea Horhocea, trading as Next Generation Therapy,
            collects, uses, stores, and protects your personal data. I am committed to protecting
            your privacy and complying with the UK General Data Protection Regulation (UK GDPR) and
            the Data Protection Act 2018.
          </p>

          <section>
            <h2 className={styles.sectionHeading}>1. Data Controller</h2>
            <p>The data controller responsible for your personal data is:</p>
            <p>
              <strong>Andreea Horhocea</strong>
              <br />
              Trading as Next Generation Therapy
              <br />
              Colchester Business Centre
              <br />
              1 George Williams Way
              <br />
              Colchester CO1 2JS
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:andreeatherapytoday@gmail.com" className={styles.link}>
                andreeatherapytoday@gmail.com
              </a>
            </p>
            <p>
              {/* {{ CONFIRM WITH ANDREEA: ICO registration number }} */}
              <strong>ICO Registration Number:</strong> [Registration number to be inserted]
            </p>
            <p>
              I am a registered member of the British Association for Counselling and Psychotherapy
              (BACP) and hold professional indemnity insurance as required for practice.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>2. Information I Collect</h2>

            <h3 className={styles.subheading}>Website Enquiries</h3>
            <p>When you submit the contact form on this website, I collect:</p>
            <ul className={styles.list}>
              <li>Your name</li>
              <li>Email address</li>
              <li>Telephone number (if provided)</li>
              <li>Your preferred contact method</li>
              <li>Who the enquiry relates to (yourself, a child, teenager, or other)</li>
              <li>The content of your message</li>
            </ul>

            <h3 className={styles.subheading}>Therapy Clients</h3>
            <p>If you become a therapy client, I will also collect:</p>
            <ul className={styles.list}>
              <li>Contact details for you and, where relevant, a parent or guardian</li>
              <li>Emergency contact details</li>
              <li>GP details (for safety purposes)</li>
              <li>
                Information about your mental health, wellbeing, and personal circumstances
                discussed during sessions
              </li>
              <li>Clinical notes and records</li>
              <li>Payment information</li>
            </ul>

            <h3 className={styles.subheading}>Website Analytics</h3>
            <p>
              With your consent, I collect anonymised data about how you use this website through
              Google Analytics and Vercel Analytics. This includes pages visited, time on site, and
              general geographic location. This data cannot identify you personally. See the{' '}
              <a href="/cookies" className={styles.link}>
                Cookie Policy
              </a>{' '}
              for details.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>3. Special Category Data</h2>
            <p>
              Psychotherapy inherently involves processing special category data under Article 9 of
              UK GDPR. This includes information concerning your mental and physical health.
            </p>
            <p>
              <strong>Legal basis for processing:</strong>
            </p>
            <ul className={styles.list}>
              <li>
                Article 9(2)(a) — Your explicit consent, obtained before therapy begins through the
                therapy agreement
              </li>
              <li>
                Article 9(2)(h) — Processing is necessary for the provision of health care by a
                health professional bound by professional confidentiality obligations
              </li>
            </ul>
            <p>
              I am bound by the BACP Ethical Framework for the Counselling Professions, which
              imposes strict confidentiality obligations.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>4. Legal Basis for Processing</h2>
            <p>I process your personal data on the following legal grounds:</p>
            <ul className={styles.list}>
              <li>
                <strong>Website enquiries:</strong> Legitimate interests in responding to your
                enquiry (Article 6(1)(f))
              </li>
              <li>
                <strong>Therapy services:</strong> Performance of the therapy contract between us
                (Article 6(1)(b))
              </li>
              <li>
                <strong>Clinical records:</strong> Legal obligation to maintain adequate records
                (Article 6(1)(c)) and legitimate interests in defending potential claims (Article
                6(1)(f))
              </li>
              <li>
                <strong>Analytics cookies:</strong> Your consent (Article 6(1)(a))
              </li>
              <li>
                <strong>Safeguarding disclosures:</strong> Vital interests (Article 6(1)(d)) or
                legal obligation (Article 6(1)(c))
              </li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>5. How I Use Your Information</h2>
            <ul className={styles.list}>
              <li>To respond to your enquiries and arrange appointments</li>
              <li>To provide psychotherapy services</li>
              <li>To maintain clinical records as required by professional guidelines</li>
              <li>To process payments for services</li>
              <li>To comply with legal, regulatory, and professional obligations</li>
              <li>To improve this website through anonymised analytics</li>
              <li>To protect your vital interests or those of another person in emergencies</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>6. Limits of Confidentiality</h2>
            <p>
              Confidentiality is fundamental to the therapeutic relationship. However, there are
              limited circumstances where I may be required or permitted to share information
              without your consent:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Safeguarding:</strong> If I believe you or another person (particularly a
                child or vulnerable adult) is at serious risk of harm, I have a duty to share
                relevant information with appropriate authorities
              </li>
              <li>
                <strong>Legal requirements:</strong> If required by a court order or where there is
                a legal duty to disclose (e.g., terrorism-related offences, money laundering)
              </li>
              <li>
                <strong>Serious crime:</strong> In rare circumstances where disclosure may prevent a
                serious crime
              </li>
              <li>
                <strong>Your explicit consent:</strong> Where you have given written consent for
                information to be shared with a named third party
              </li>
            </ul>
            <p>
              These limits are explained in the therapy agreement and discussed at the start of
              therapy.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>7. Clinical Supervision</h2>
            <p>
              As a BACP registered therapist, I receive regular clinical supervision. This is a
              professional requirement that ensures the quality and safety of the therapy I provide.
            </p>
            <p>
              During supervision, I may discuss clinical work using anonymised information that does
              not identify you. My supervisor is also bound by professional confidentiality
              obligations.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>8. Children and Young People</h2>
            <p>
              I work with children aged 4 and above and teenagers. For clients under 16, a parent or
              person with parental responsibility must consent to therapy and sign the therapy
              agreement.
            </p>
            <p>
              <strong>Online therapy:</strong> Is only available for clients aged 16 and over. This
              is a safeguarding measure to ensure confidentiality cannot be compromised by family
              members overhearing sessions.
            </p>
            <p>
              <strong>Confidentiality with young people:</strong> I encourage trust and openness by
              maintaining appropriate confidentiality with young clients, while keeping parents
              informed of general progress. The limits of confidentiality, including safeguarding
              duties, are explained to both the young person and their parent/guardian.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>9. Data Retention</h2>
            <ul className={styles.list}>
              <li>
                <strong>Website enquiries:</strong> Deleted within 6 months if you do not become a
                client
              </li>
              <li>
                <strong>Adult client records:</strong> Retained for 7 years after therapy ends, in
                accordance with BACP guidance and professional indemnity insurance requirements
              </li>
              <li>
                <strong>Records for clients who were children:</strong> Retained until 7 years after
                the client turns 18, or 7 years after therapy ends, whichever is longer
              </li>
              <li>
                <strong>Analytics data:</strong> Retained according to Google Analytics and Vercel
                policies (typically 14-26 months)
              </li>
            </ul>
            <p>
              After the retention period, records are securely destroyed in accordance with data
              protection requirements.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>10. Data Security</h2>
            <p>I take appropriate technical and organisational measures to protect your data:</p>
            <ul className={styles.list}>
              <li>Paper records are stored in a locked cabinet in a secure location</li>
              <li>Electronic records are password-protected and encrypted where possible</li>
              <li>I use secure, password-protected devices</li>
              <li>Online sessions use encrypted video platforms</li>
              <li>Email communications are not fully secure; sensitive information should not be sent by email</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>11. International Data Transfers</h2>
            <p>
              Some third-party services I use are based outside the UK. Where data is transferred
              internationally, it is protected by:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Vercel & Google:</strong> UK-US Data Bridge certification and Standard
                Contractual Clauses
              </li>
              <li>
                <strong>Resend (email service):</strong> Standard Contractual Clauses and
                appropriate safeguards
              </li>
            </ul>
            <p>
              These mechanisms ensure your data receives equivalent protection to UK GDPR standards.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>12. Third-Party Processors</h2>
            <p>I use the following third-party services:</p>
            <ul className={styles.list}>
              <li>
                <strong>Resend:</strong> Email delivery for contact form submissions
              </li>
              <li>
                <strong>Google Analytics:</strong> Website analytics (with your consent, IP
                anonymised)
              </li>
              <li>
                <strong>Vercel:</strong> Website hosting and performance analytics (with your
                consent)
              </li>
            </ul>
            <p>
              Each processor is contractually bound to process data only on my instructions and to
              maintain appropriate security measures.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>13. Your Rights</h2>
            <p>Under UK GDPR, you have the following rights:</p>
            <ul className={styles.list}>
              <li>
                <strong>Access:</strong> Request a copy of your personal data (Subject Access
                Request)
              </li>
              <li>
                <strong>Rectification:</strong> Request correction of inaccurate data
              </li>
              <li>
                <strong>Erasure:</strong> Request deletion of your data (subject to legal retention
                requirements)
              </li>
              <li>
                <strong>Restriction:</strong> Request that processing be limited in certain
                circumstances
              </li>
              <li>
                <strong>Portability:</strong> Receive your data in a structured, machine-readable
                format
              </li>
              <li>
                <strong>Object:</strong> Object to processing based on legitimate interests
              </li>
              <li>
                <strong>Withdraw consent:</strong> Where processing is based on consent, withdraw it
                at any time
              </li>
            </ul>
            <p>
              To exercise any right, contact me at{' '}
              <a href="mailto:andreeatherapytoday@gmail.com" className={styles.link}>
                andreeatherapytoday@gmail.com
              </a>
              . I will respond within one month. There is no fee for most requests.
            </p>
            <p>
              <strong>Note:</strong> Some rights may be limited where I have a legal obligation to
              retain data or where erasure would prevent me from defending legal claims.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>14. Data Breaches</h2>
            <p>
              In the unlikely event of a data breach that poses a risk to your rights and freedoms,
              I will notify the ICO within 72 hours and inform you without undue delay if the breach
              is likely to result in a high risk to you.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>15. Cookies</h2>
            <p>
              This website uses cookies. For full details, see the{' '}
              <a href="/cookies" className={styles.link}>
                Cookie Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>16. Complaints</h2>
            <p>
              If you have concerns about how your data is handled, please contact me first. I take
              all concerns seriously and will endeavour to resolve them.
            </p>
            <p>
              You also have the right to lodge a complaint with the Information Commissioner&apos;s
              Office:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Website:</strong>{' '}
                <a
                  href="https://ico.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  ico.org.uk
                </a>
              </li>
              <li>
                <strong>Telephone:</strong> 0303 123 1113
              </li>
              <li>
                <strong>Post:</strong> Information Commissioner&apos;s Office, Wycliffe House, Water
                Lane, Wilmslow, Cheshire SK9 5AF
              </li>
            </ul>
            <p>
              For complaints about therapy services (as opposed to data handling), you may also
              contact the BACP at{' '}
              <a
                href="https://www.bacp.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                bacp.co.uk
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>17. Changes to This Policy</h2>
            <p>
              I may update this Privacy Policy from time to time. Material changes will be
              communicated to current clients directly. The date at the top indicates when the
              policy was last revised.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>18. Contact</h2>
            <p>
              For any questions about this Privacy Policy or your personal data, contact:
            </p>
            <p>
              <strong>Andreea Horhocea</strong>
              <br />
              Email:{' '}
              <a href="mailto:andreeatherapytoday@gmail.com" className={styles.link}>
                andreeatherapytoday@gmail.com
              </a>
              <br />
              Telephone: 07448 036017
            </p>
          </section>

          <LegalNavigation currentPage="privacy" />

          <section className={buttonLinksStyles.buttonLinks}>
            <Button href="/cookies">Cookie Policy</Button>
            <Button href="/terms">Terms of Service</Button>
            <Button href="/book-now">Book Now</Button>
          </section>
        </main>
      </div>
      <BreadcrumbSchema />
    </>
  );
}
