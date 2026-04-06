import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import CTABlock from '@/components/ui/CTABlock';
import styles from './pricing.module.scss';

const siteUrl = 'https://nextgentherapy.co.uk';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Psychotherapy Costs Colchester | £60 Sessions | Fees',
  authors: [{ name: 'Andreea Horhocea' }],
  description:
    'Transparent psychotherapy costs: £60 per 50-minute session with BACP registered psychotherapist in Colchester. In-person or online.',
  keywords: [
    'psychotherapy costs Colchester',
    'psychotherapist fees Essex',
    'psychotherapy session costs',
    'psychotherapy pricing Colchester',
    'psychotherapist prices Essex',
    'BACP psychotherapist fees',
    '£60 psychotherapy session',
    'professional psychotherapy costs',
    'psychotherapy fees Essex',
    'psychotherapist session fees',
    'psychotherapy pricing UK',
    'affordable psychotherapy Colchester',
    'psychotherapy consultation fees',
    'psychodynamic therapy costs',
    'private psychotherapy fees',
  ],
  openGraph: {
    title: 'Psychotherapy Costs Colchester | £60 Sessions',
    description:
      'Transparent psychotherapy costs: £60 per 50-minute session with BACP registered psychotherapist in Colchester.',
    url: `${siteUrl}/pricing`,
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Therapy Pricing Colchester | Next Generation Therapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Therapy Pricing Colchester | £60 per Session',
    description:
      'Transparent therapy pricing: £60 per 50-minute session with BACP registered therapist.',
    images: ['https://nextgentherapy.co.uk/images/default-social-share.jpg'],
  },
  alternates: {
    canonical: `${siteUrl}/pricing`,
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
};

export default function Pricing() {
  const offerSchema = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: 'Therapy Session',
    description: 'Professional psychodynamic therapy sessions in Colchester, Essex',
    price: '60',
    priceCurrency: 'GBP',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'LocalBusiness',
      name: 'Next Generation Therapy',
      url: 'https://nextgentherapy.co.uk',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does therapy cost in Colchester?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Therapy sessions at Next Generation Therapy cost £60 per 50-minute session. This includes professional psychodynamic therapy with a BACP registered therapist, available both in-person in Colchester and online.',
        },
      },
      {
        '@type': 'Question',
        name: 'What payment methods do you accept?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sessions are paid by bank transfer only. Payment details will be provided when you book your session.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is your cancellation policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Please provide at least 24 hours notice for cancellations. Late cancellations may be subject to the full session fee.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are online therapy sessions the same price?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, both in-person sessions in Colchester and online therapy sessions are £60 per 50-minute session.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow="Therapy Pricing"
        title="Transparent, straightforward pricing"
        lead="£60 per session. 50 minutes. No hidden fees. I want accessing support to feel as straightforward as possible."
      />
      <div className={styles.page}>
        <div className={styles.main}>
          <section className={styles.pricingSection}>
            <div className={styles.mainPricing}>
              <div className={styles.priceCard}>
                <h2>Therapy Sessions</h2>
                <div className={styles.price}>
                  <span className={styles.currency}>£</span>
                  <span className={styles.amount}>60</span>
                  <span className={styles.duration}>per session</span>
                </div>
                <p className={styles.sessionLength}>50-minute sessions</p>

                <div className={styles.included}>
                  <h3>What&apos;s Included:</h3>
                  <ul>
                    <li>Full 50-minute therapy session</li>
                    <li>Professional psychodynamic approach</li>
                    <li>BACP registered therapist</li>
                    <li>Confidential, safe environment</li>
                    <li>In-person or online sessions</li>
                    <li>Flexible scheduling</li>
                  </ul>
                </div>

                <div className={styles.bookingSection}>
                  <Link href="/book-now" className={styles.bookButton}>
                    Book Your Session
                  </Link>
                  <p className={styles.bookingNote}>
                    Get in touch to arrange your first session
                  </p>
                </div>
              </div>
            </div>

            <section className={styles.paymentInfo}>
              <h3>Payment Information</h3>
              <div className={styles.paymentDetails}>
                <div className={styles.paymentMethod}>
                  <h4>Payment Methods</h4>
                  <p>Sessions are paid by bank transfer only.</p>
                </div>
                <div className={styles.cancellation}>
                  <h4>Cancellation Policy</h4>
                  <p>
                    Please provide at least 24 hours notice for cancellations. Late cancellations
                    may be subject to the full session fee.
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.valueSection}>
              <h3>Investment in Your Wellbeing</h3>
              <p>
                Therapy is an investment in your mental health and overall wellbeing. Each session
                provides a dedicated space for you to explore your thoughts and feelings with a
                qualified professional who is committed to supporting your journey towards healing
                and growth.
              </p>
              <p>
                As a BACP registered psychodynamic psychotherapist, I bring years of training and
                experience to help you understand patterns in your life and develop healthier ways
                of coping with challenges.
              </p>
            </section>
          </section>

          <CTABlock />
        </div>
      </div>
    </>
  );
}
