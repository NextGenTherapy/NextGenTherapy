import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import PageHero from '@/components/ui/PageHero';

import styles from './book-now.module.scss';

// Dynamically import ContactForm for better performance
const ContactForm = dynamic(() => import('../../components/forms/contact-form'), {
  loading: () => <div className={styles.formLoading}>Loading contact form...</div>,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Book a Free 15-Minute Call | Next Generation Therapy Colchester',
  description:
    "Book a free 15-minute introductory call with Andreea, BACP-registered psychotherapist in Colchester. No commitment. In-person and online (UK-wide, age 16+).",
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
        name: 'Book a Free 15-Minute Call',
        item: 'https://nextgentherapy.co.uk/book-now',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        eyebrow="Book a Free 15-Minute Call"
        title="Let's see if we're a good fit"
        lead="Before any paid session, I offer a free 15-minute phone call. It's not therapy — just an informal conversation to hear a bit about what's brought you here, answer any questions, and see whether working together feels right for both of us."
      />

      <div className={styles.page}>
        <main className={styles.main}>
          {/* What happens next */}
          <section className={styles.processSection}>
            <h2>What happens next</h2>
            <ol className={styles.processList}>
              <li>
                <strong>I&apos;ll be in touch within 1-2 working days</strong>
                <p>
                  Once you submit the form below, I&apos;ll get back to you to arrange a time for
                  the call.
                </p>
              </li>
              <li>
                <strong>We&apos;ll have the call (15 minutes, informal)</strong>
                <p>
                  This is a chance for us both to get a sense of each other. You can ask me anything
                  about how I work, and I&apos;ll want to hear a little about what&apos;s brought
                  you to therapy.
                </p>
              </li>
              <li>
                <strong>We&apos;ll decide together</strong>
                <p>
                  If it feels like a good fit, we can book your first session. If not, no pressure
                  — I can suggest other options that might suit you better.
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
            <h2>Other ways to reach me</h2>
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
                  <a href="tel:07448036017">07448 036017</a>
                </p>
                <p className={styles.contactNote}>
                  I may be in sessions, so please leave a voicemail and I&apos;ll call you back.
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
                  <li>Ground floor, step-free access</li>
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
                If you&apos;re in immediate danger or need urgent mental health support, please
                contact one of these services:
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
                This website is not a crisis service. If you&apos;re struggling right now, please
                reach out to one of the services above.
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
    </>
  );
}
