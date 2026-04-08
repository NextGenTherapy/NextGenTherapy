import type { Metadata } from 'next';
import Link from 'next/link';

import PageHero from '@/components/ui/PageHero';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

import buttonStyles from '../../components/ui/button.module.scss';
import styles from './pricing.module.scss';

const siteUrl = 'https://nextgentherapy.co.uk';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Pricing & Booking | £60 Per Session | Free 15-Minute Call',
  authors: [{ name: 'Andreea Horhocea' }],
  description:
    'Psychodynamic therapy £60 per 50-minute session, Colchester and online. Free 15-minute intro call. BACP registered. Transparent pricing with no hidden fees.',
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
    'psychodynamic therapy costs',
    'private psychotherapy fees',
  ],
  openGraph: {
    title: 'Pricing & Booking | £60 Per Session | Free 15-Minute Call',
    description:
      'Psychodynamic therapy £60 per 50-minute session, Colchester and online. Free 15-minute intro call. BACP registered. Transparent pricing with no hidden fees.',
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
    title: 'Pricing & Booking | £60 Per Session | Free 15-Minute Call',
    description:
      'Psychodynamic therapy £60 per 50-minute session, Colchester and online. BACP registered. Transparent pricing.',
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
    name: 'Psychodynamic Therapy Session',
    description:
      'Professional psychodynamic therapy sessions with BACP registered therapist in Colchester, Essex. 50 minutes, in-person or online.',
    price: '60',
    priceCurrency: 'GBP',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'LocalBusiness',
      name: 'Next Generation Therapy',
      url: 'https://nextgentherapy.co.uk',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />

      {/* Section 1: Hero */}
      <PageHero
        eyebrow="Fees & Booking"
        title="£60 per 50-minute session. Free 15-minute intro call."
        lead="Here's an honest breakdown of what therapy with me costs, what's included, and how booking works — so there are no surprises and no awkward money conversations later."
      />

      <div className={styles.page}>
        <main className={styles.main}>
          {/* Section 2: What's included in a session */}
          <section className={styles.surfaceSection}>
            <div className={styles.narrowContainer}>
              <h2>What&apos;s included in £60</h2>
              <p>
                This isn&apos;t just 50 minutes in a room. Here&apos;s what you&apos;re paying for:
              </p>
              <ul className={styles.bulletList}>
                <li>
                  <strong>A full 50-minute session</strong> — not 45 or &ldquo;therapeutic
                  hour.&rdquo; We start when you arrive and finish at the 50-minute mark.
                </li>
                <li>
                  <strong>BACP registered, MA-qualified psychotherapist</strong> — I hold an MA in
                  Psychodynamic Psychotherapy from the University of Essex (2020) and am a
                  registered member of the British Association for Counselling and Psychotherapy.
                </li>
                <li>
                  <strong>Your weekly slot held for you</strong> — same day, same time, every week.
                  You don&apos;t have to re-book each session.
                </li>
                <li>
                  <strong>A sensory-aware therapy room</strong> — ground floor, soft lighting,
                  fidgets available, stimming welcomed. Designed for neurodivergent clients and
                  anyone who finds clinical environments uncomfortable.
                </li>
                <li>
                  <strong>Worksheets and prompts where helpful</strong> — not CBT homework, but
                  occasional reflective exercises between sessions if they&apos;d be useful.
                </li>
                <li>
                  <strong>Email contact for logistics</strong> — rescheduling, admin questions,
                  anything practical between sessions.
                </li>
                <li>
                  <strong>Ongoing clinical supervision</strong> — I receive regular professional
                  supervision, which means your therapy benefits from a second clinical perspective.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3: The free 15-minute call */}
          <section className={styles.normalSection}>
            <div className={styles.narrowContainer}>
              <h2>The free 15-minute call</h2>
              <p>
                Before any paid session, we&apos;ll have a short phone call. This is genuinely free
                — no commitment, no pressure, no catch.
              </p>
              <h3>What it is</h3>
              <p>
                A chance for us to hear each other&apos;s voices and get a sense of whether we might
                work well together. You can ask me anything. I&apos;ll ask a little about what
                brought you here. We both get to check the vibe.
              </p>
              <h3>What it isn&apos;t</h3>
              <p>
                This isn&apos;t therapy. We won&apos;t get into deep exploration or analysis. It&apos;s
                a practical call to work out fit, logistics, and next steps.
              </p>
              <p>
                If we both feel good about it, we&apos;ll book your first session. If not — no hard
                feelings. I&apos;d rather help you find the right therapist than have you book with
                me and realise it&apos;s not what you needed.
              </p>
            </div>
          </section>

          {/* Section 4: How booking works */}
          <section className={styles.surfaceSection}>
            <div className={styles.narrowContainer}>
              <h2>How booking works</h2>
              <ol className={styles.stepsList}>
                <li>
                  <span>
                    <strong>Get in touch</strong> — fill in the contact form or email me directly.
                    Tell me a little about what you&apos;re looking for.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Free 15-minute call</strong> — we&apos;ll arrange a brief phone call to
                    check fit and answer any questions.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>First session</strong> — if we decide to work together, we&apos;ll book
                    your first 50-minute session. This is when I&apos;ll hear your story and we&apos;ll
                    start getting to know each other properly.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Weekly sessions</strong> — same day, same time, every week. Open-ended,
                    for as long as the work is useful.
                  </span>
                </li>
              </ol>
            </div>
          </section>

          {/* Section 5: Cancellation and missed sessions */}
          <section className={styles.normalSection}>
            <div className={styles.narrowContainer}>
              <h2>Cancellation and missed sessions</h2>
              <p>
                Your weekly slot is reserved for you, so cancelled or missed sessions are still
                charged. That time can&apos;t be offered to someone else at short notice.
              </p>
              <p>
                If you&apos;re unwell or can&apos;t attend in person, I can offer a remote session
                via Google Meet instead — so you don&apos;t lose the session.
              </p>
            </div>
          </section>

          {/* Section 6: Payment */}
          <section className={styles.surfaceSection}>
            <div className={styles.narrowContainer}>
              <h2>Payment</h2>
              <p>
                Payment is taken before each session by bank transfer. I&apos;ll provide payment
                details when you book.
              </p>
            </div>
          </section>

          {/* Section 7: What I don't offer */}
          <section className={styles.normalSection}>
            <div className={styles.narrowContainer}>
              <h2>What I don&apos;t offer</h2>
              <p>
                Being clear about this upfront saves both of us time:
              </p>
              <ul className={styles.notIncludedList}>
                <li>
                  <span>
                    <strong>General sliding scale</strong> — I don&apos;t offer a broad sliding
                    scale, but concessions may be available for students and single parents booking
                    therapy for their child. Get in touch to discuss.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Sessions shorter than 50 minutes</strong> — the session length is fixed.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Pay-as-you-go or irregular bookings</strong> — therapy works best with a
                    consistent weekly slot. The exception is ad-hoc sessions for previous clients
                    who want to discuss a new specific issue or life event.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 8: CTA */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContainer}>
              <h2>Book a free 15-minute call</h2>
              <p>
                No pressure, no commitment, and genuinely free. Let&apos;s see whether we&apos;re a
                fit.
              </p>
              <Link href="/book-now" className={buttonStyles.primary}>
                Book a Free 15-Minute Call
              </Link>
            </div>
          </section>
        </main>
      </div>
      <BreadcrumbSchema />
    </>
  );
}
