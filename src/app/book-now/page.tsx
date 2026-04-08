import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import PageHero from '@/components/ui/PageHero';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

import styles from './book-now.module.scss';

// Dynamically import ContactForm for better performance
const ContactForm = dynamic(() => import('../../components/forms/contact-form'), {
  loading: () => <div className={styles.formLoading}>Loading contact form...</div>,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Book a Free 15-Minute Call | Colchester Therapist',
  description:
    'Book a free 15-minute call with Andreea, BACP-registered psychotherapist in Colchester. No commitment. In-person & online UK-wide.',
  keywords: [
    'book therapy colchester',
    'free therapy consultation',
    'book psychotherapist colchester',
    'therapy consultation essex',
    'psychodynamic therapy booking',
    'contact therapist colchester',
    'book counsellor essex',
    'online therapy booking uk',
    'BACP therapist colchester',
  ],
  authors: [{ name: 'Andreea Horhocea' }],
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/book-now',
  },
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
  openGraph: {
    title: 'Book a Free 15-Minute Call | Next Generation Therapy',
    description:
      "Book a free 15-minute introductory call with Andreea, BACP-registered psychotherapist in Colchester. No commitment.",
    url: 'https://nextgentherapy.co.uk/book-now',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Book a Free 15-Minute Call - Next Generation Therapy Colchester',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Free 15-Minute Call | Next Generation Therapy',
    description:
      "Book a free 15-minute introductory call with Andreea, BACP-registered psychotherapist in Colchester.",
    images: ['https://nextgentherapy.co.uk/images/default-social-share.jpg'],
  },
};

export default function BookNowPage() {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Book a Free 15-Minute Call',
    description:
      'Book a free 15-minute introductory call with Andreea Horhocea, BACP-registered psychotherapist in Colchester',
    url: 'https://nextgentherapy.co.uk/book-now',
    provider: {
      '@type': 'Person',
      name: 'Andreea Horhocea',
      jobTitle: 'Psychodynamic Psychotherapist',
      qualification: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'degree',
          name: 'MSc Psychodynamic Psychotherapy',
          educationalLevel: 'Master',
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      name: 'Free 15-Minute Consultation Call',
      price: '0',
      priceCurrency: 'GBP',
      description: 'A brief, informal phone call to see if we might be a good fit for working together.',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <PageHero
        eyebrow="Book a Free 15-Minute Call"
        title="Let's start with a free call. No commitment, no forms to fill in afterwards."
        lead="The free 15-minute call is an informal conversation — phone or video, your choice. You can ask anything you want about how I work, I'll answer honestly, and we can both see whether working together feels right."
      />

      <div className={styles.page}>
        <main className={styles.main}>
          {/* What happens next */}
          <section className={styles.processSection}>
            <h2>What happens after you send this</h2>
            <ol className={styles.processList}>
              <li>
                <strong>I&apos;ll be in touch within 1–2 working days</strong>
                <p>
                  Usually by email, unless you&apos;ve asked me to call. I&apos;ll suggest a few
                  times for the free 15-minute call.
                </p>
              </li>
              <li>
                <strong>We&apos;ll have the call</strong>
                <p>
                  Phone or video, whichever you prefer. It&apos;s 15 minutes, informal, no pressure.
                  You can ask anything you want.
                </p>
              </li>
              <li>
                <strong>We&apos;ll decide together</strong>
                <p>
                  If working with me feels right, we&apos;ll book a first session. If it
                  doesn&apos;t, that&apos;s completely fine, and I&apos;ll try to suggest someone
                  else who might be a better fit.
                </p>
              </li>
            </ol>
          </section>

          {/* Contact Form */}
          <section className={styles.formSection} id="contact-form">
            <h2>Send an enquiry</h2>
            <ContactForm />
          </section>

          {/* Other ways to reach me */}
          <section className={styles.contactSection}>
            <h2>Or reach me directly</h2>
            <div className={styles.contactGrid}>
              <div className={styles.contactItem}>
                <h3>Email</h3>
                <p>
                  <a href="mailto:andreeatherapytoday@gmail.com">andreeatherapytoday@gmail.com</a>
                </p>
              </div>
              <div className={styles.contactItem}>
                <h3>Phone</h3>
                <p>
                  <a href="tel:+447448036017">+44 7448 036017</a>
                </p>
                <p className={styles.contactNote}>
                  I&apos;m in sessions for most of the day, so if I don&apos;t pick up, please leave
                  a voicemail and I&apos;ll call you back.
                </p>
              </div>
            </div>
          </section>

          {/* Where to find me */}
          <section className={styles.locationSection}>
            <h2>Where to find me</h2>
            <div className={styles.locationGrid}>
              <div className={styles.locationCard}>
                <h3>In-person sessions</h3>
                <address>
                  Colchester Business Centre<br />
                  1 George Williams Way<br />
                  Colchester CO1 2JS
                </address>
                <ul className={styles.locationFeatures}>
                  <li>Ground floor, accessible entrance</li>
                  <li>On-site parking</li>
                  <li>Quiet, private room with natural light</li>
                  <li>Sensory-friendly environment</li>
                </ul>
                <p>
                  <a
                    href="https://www.google.com/maps?q=Colchester+Business+Centre,+1+George+Williams+Way,+Colchester+CO1+2JS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Google Maps
                  </a>
                </p>
              </div>
              <div className={styles.locationCard}>
                <h3>Online sessions</h3>
                <p>Available UK-wide for clients aged 16 and over.</p>
                <p>
                  Online sessions happen on Wednesdays. We use a secure video platform — I&apos;ll
                  send you the link before your session.
                </p>
                <p className={styles.locationNote}>
                  Not sure if online therapy is right for you? We can discuss this on the call.
                </p>
              </div>
            </div>
          </section>

          {/* Crisis signposting */}
          <section className={styles.crisisSection}>
            <div className={styles.crisisBox}>
              <h2>If this is an emergency</h2>
              <p>
                I&apos;m not a crisis service and I don&apos;t monitor messages outside of working
                hours. If you or someone you care about is in immediate danger, please contact:
              </p>
              <div className={styles.crisisGrid}>
                <div className={styles.crisisItem}>
                  <h3>NHS 111</h3>
                  <p>
                    Call <strong>111</strong> and press option 2 for the mental health crisis line.
                    Available 24/7.
                  </p>
                </div>
                <div className={styles.crisisItem}>
                  <h3>Samaritans</h3>
                  <p>
                    Call <strong>116 123</strong> (free, 24/7) or email{' '}
                    <a href="mailto:jo@samaritans.org">jo@samaritans.org</a>.
                  </p>
                </div>
                <div className={styles.crisisItem}>
                  <h3>Shout</h3>
                  <p>
                    Text <strong>85258</strong> for free, confidential 24/7 text support.
                  </p>
                </div>
                <div className={styles.crisisItem}>
                  <h3>A&amp;E</h3>
                  <p>
                    If you or someone else is in immediate physical danger, go to your nearest A&amp;E
                    or call <strong>999</strong>.
                  </p>
                </div>
              </div>
              <p className={styles.crisisNote}>
                I&apos;ll respond to messages sent through this form within 1–2 working days, but
                please don&apos;t wait for me if you need urgent help.
              </p>
            </div>
          </section>

          {/* Not sure if I'm right? */}
          <section className={styles.ctaSection}>
            <p>
              Not sure if I&apos;m the right therapist for you?{' '}
              <Link href="/is-this-right-for-you">Read about who I work with</Link> — I&apos;d
              rather point you in the right direction than have you book with someone who isn&apos;t
              a good fit.
            </p>
          </section>
        </main>
      </div>
      <BreadcrumbSchema />
    </>
  );
}
