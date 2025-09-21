import styles from './privacy-policy.module.scss';
import buttonLinksStyles from '../../components/ui/buttonLinks.module.scss';
import LegalNavigation from '../../components/layout/legal-navigation';
import Button from '../../components/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Privacy Policy | Therapy Confidentiality Colchester',
  description:
    'Therapy privacy & confidentiality in Colchester. BACP therapist commitment to protecting client information. Full GDPR compliance.',
  keywords: [
    'therapy privacy Colchester',
    'therapy confidentiality Essex',
    'client privacy therapy',
    'therapeutic confidentiality UK',
    'therapy data protection Colchester',
    'BACP confidentiality standards',
    'therapy session privacy',
    'client information security',
    'therapy GDPR compliance',
    'confidential therapy services',
    'therapy privacy rights',
    'secure therapy practice',
    'therapy client protection',
    'private therapy sessions',
    'therapy information security',
    'BACP privacy policy',
    'therapy confidentiality agreement',
    'client data protection therapy',
  ],
  authors: [{ name: 'Andreea Horhocea' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/privacy-policy',
  },
  openGraph: {
    title: 'Therapy Privacy & Client Confidentiality | Colchester Therapist',
    description:
      'BACP therapist commitment to client privacy & confidentiality. Learn how therapy sessions remain secure and private at Next Generation Therapy Colchester.',
    url: 'https://nextgentherapy.co.uk/privacy-policy',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Therapy Privacy & Confidentiality - Next Generation Therapy Colchester',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Therapy Privacy | Client Confidentiality Colchester',
    description:
      'BACP therapist commitment to protecting client privacy in therapy sessions. Full confidentiality standards.',
    images: ['https://nextgentherapy.co.uk/images/default-social-share.jpg'],
  },
};

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      <main className={styles.privacyPolicy}>
        <LegalNavigation currentPage="privacy" />

        <h1 className={styles.heading}>Therapy Privacy & Client Confidentiality</h1>
        <p className={styles.updated}>
          <strong>Last updated: 28 May 2025</strong>
        </p>

        <p>
          Next Generation Therapy is committed to protecting your privacy and maintaining the
          highest standards of client confidentiality. As a BACP registered therapist, Andreea
          Horhocea adheres to strict professional confidentiality standards. This Privacy Policy
          explains how we collect, use, and safeguard your information for therapy services in
          Colchester and online.
        </p>

        <h2 className={styles.sectionHeading}>Information We Collect</h2>
        <ul className={styles.list}>
          <li>
            <strong>Personal Information:</strong> When you fill out our contact form, we collect
            your name, email address, and any information you include in your message.
          </li>
          <li>
            <strong>Usage Data:</strong> We use Google Analytics and Vercel Analytics to collect
            anonymized data about how visitors use our site (such as pages visited, device type, and
            general location). This data does not personally identify you and is only collected with
            your consent.
          </li>
          <li>
            <strong>Cookies:</strong> We use cookies to improve your experience and for analytics
            purposes. You can control cookies through your browser settings and our cookie consent
            banner.
          </li>
        </ul>

        <h2 className={styles.sectionHeading}>Data Controller</h2>
        <p>
          Next Generation Therapy is registered with the Information Commissioner&apos;s Office
          (ICO). The data controller is Andreea Horhocea, Next Generation Therapy.
        </p>

        <h2 className={styles.sectionHeading}>Legal Basis for Processing</h2>
        <ul className={styles.list}>
          <li>
            <strong>Contact Forms:</strong> Your consent when you submit the form.
          </li>
          <li>
            <strong>Analytics:</strong> Your explicit consent through our cookie consent banner. We
            only process analytics data when you have specifically agreed to it.
          </li>
        </ul>

        <h2 className={styles.sectionHeading}>Data Retention</h2>
        <p>We retain your personal data in accordance with GDPR requirements:</p>
        <ul className={styles.list}>
          <li>
            <strong>Contact form emails:</strong> Kept according to GDPR guidelines and deleted when
            no longer necessary.
          </li>
          <li>
            <strong>Analytics data:</strong> Retained according to Google Analytics and Vercel
            Analytics policies.
          </li>
        </ul>

        <h2 className={styles.sectionHeading}>Third-Party Data Processors</h2>
        <ul className={styles.list}>
          <li>
            <strong>Resend:</strong> Email delivery service for contact form submissions.
          </li>
          <li>
            <strong>Google Analytics:</strong> Website usage analytics (anonymized data) - only
            activated with your consent.
          </li>
          <li>
            <strong>Vercel Analytics:</strong> Website performance and usage analytics - only
            activated with your consent.
          </li>
          <li>
            <strong>Vercel:</strong> Website hosting and infrastructure services.
          </li>
        </ul>

        <h2 className={styles.sectionHeading}>How We Use Your Information</h2>
        <ul className={styles.list}>
          <li>To respond to your enquiries submitted via our contact form.</li>
          <li>To improve our website and services.</li>
          <li>To analyze website usage via Google Analytics.</li>
        </ul>

        <h2 className={styles.sectionHeading}>Sharing Your Information</h2>
        <p>
          We do not sell or share your personal information with third parties except as necessary
          to provide our services (for example, email delivery via Resend) or as required by law.
        </p>

        <h2 className={styles.sectionHeading}>Your Rights</h2>
        <p>Under UK GDPR, you have the following rights:</p>
        <ul className={styles.list}>
          <li>
            <strong>Right to access:</strong> You can request access to your personal data.
          </li>
          <li>
            <strong>Right to rectification:</strong> You can request correction of inaccurate data.
          </li>
          <li>
            <strong>Right to erasure:</strong> You can request deletion of your personal data.
          </li>
          <li>
            <strong>Right to restrict processing:</strong> You can request we limit how we use your
            data.
          </li>
          <li>
            <strong>Right to data portability:</strong> You can request your data in a portable
            format.
          </li>
          <li>
            <strong>Right to object:</strong> You can object to processing based on legitimate
            interests.
          </li>
        </ul>

        <h2 className={styles.sectionHeading}>Analytics and Cookie Controls</h2>
        <p>You have full control over analytics tracking:</p>
        <ul className={styles.list}>
          <li>
            <strong>Cookie Consent Banner:</strong> You can accept or decline analytics cookies when
            you first visit our site.
          </li>
          <li>
            <strong>Browser Settings:</strong> You can disable cookies entirely through your browser
            settings.
          </li>
          <li>
            <strong>Google Analytics Opt-out:</strong> You can opt out of Google Analytics tracking
            using{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              this browser add-on
            </a>
            .
          </li>
          <li>
            <strong>Clear Your Choice:</strong> You can clear your browser&apos;s local storage to
            reset your cookie preferences.
          </li>
        </ul>

        <h2 className={styles.sectionHeading}>How to Exercise Your Rights</h2>
        <p>
          To exercise any of your rights, please contact us at:{' '}
          <a href="mailto:andreeatherapytoday@gmail.com" className={styles.link}>
            andreeatherapytoday@gmail.com
          </a>
        </p>
        <p>
          We will respond to your request within one month in accordance with GDPR requirements.
        </p>

        <h2 className={styles.sectionHeading}>Complaints</h2>
        <p>
          If you have concerns about how we handle your personal data, you can contact the
          Information Commissioner&apos;s Office (ICO) at{' '}
          <a
            href="https://ico.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            ico.org.uk
          </a>{' '}
          or call 0303 123 1113.
        </p>

        <h2 className={styles.sectionHeading}>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:{' '}
          <a href="mailto:andreeatherapytoday@gmail.com" className={styles.link}>
            andreeatherapytoday@gmail.com
          </a>
        </p>

        <LegalNavigation currentPage="privacy" />

        <section className={buttonLinksStyles.buttonLinks}>
          <Button href="/terms">Terms of Service</Button>
          <Button href="/about">About</Button>
          <Button href="/book-now">Book Now</Button>
        </section>
      </main>
    </div>
  );
}
