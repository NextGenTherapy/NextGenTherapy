import type { Metadata } from 'next';
import Link from 'next/link';

import PageHero from '@/components/ui/PageHero';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import LocationLocalBusinessSchema from '@/components/seo/LocationLocalBusinessSchema';
import styles from '@/styles/location-page.module.scss';
import buttonStyles from '@/components/ui/button.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Therapist Near Ipswich | Psychodynamic Therapy | Next Gen Therapy',
  description:
    'Psychodynamic therapist near Ipswich, Suffolk. 30 minutes from Ipswich to Colchester Business Centre. In-person therapy for women, neurodivergent adults, teenagers and children. BACP registered.',
  keywords: [
    'therapist Ipswich',
    'therapy Ipswich',
    'counselling Ipswich',
    'psychotherapist near Ipswich',
    'therapist near Ipswich',
    'Ipswich mental health',
    'BACP therapist Suffolk',
    'women therapist Suffolk',
    'ADHD therapist Suffolk',
    'teen therapist Ipswich',
  ],
  authors: [{ name: 'Andreea Horhocea' }],
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/therapy-in-ipswich',
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
    title: 'Therapist Near Ipswich | Psychodynamic Therapy',
    description:
      'Psychodynamic therapist near Ipswich, Suffolk. 30 minutes to Colchester Business Centre. In-person therapy for women, neurodivergent adults, teenagers and children.',
    url: 'https://nextgentherapy.co.uk/therapy-in-ipswich',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Therapy near Ipswich — Next Generation Therapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Therapist Near Ipswich | Psychodynamic Therapy',
    description:
      'Psychodynamic therapist near Ipswich, Suffolk. 30 minutes to Colchester Business Centre. BACP registered.',
    images: ['https://nextgentherapy.co.uk/images/default-social-share.jpg'],
  },
};

export default function TherapyInIpswichPage() {
  return (
    <>
      <LocationLocalBusinessSchema
        locationName="Ipswich"
        containedIn="Suffolk"
        description="Psychodynamic therapy for women, neurodivergent adults, teenagers and children near Ipswich, Suffolk."
        driveTime="30 minutes"
      />

      <PageHero
        eyebrow="Therapy near Ipswich"
        title="Psychodynamic therapy for people in Ipswich and the surrounding area."
        lead="Ipswich is where a lot of my current NHS and charity work is based — and my private practice is about 30 minutes down the A12, at Colchester Business Centre. I also offer online therapy for anyone aged 16+, UK-wide."
      />

      <div className={styles.page}>
        <main className={styles.main}>
          {/* Section: Getting here from Ipswich */}
          <section className={styles.directionsSection}>
            <div className={styles.directionsContainer}>
              <h2>Getting to me from Ipswich</h2>
              <address className={styles.address}>
                <strong>Colchester Business Centre</strong>
                <br />
                1 George Williams Way
                <br />
                Colchester CO1 2JS
              </address>
              <p>
                From Ipswich, it&apos;s about 30 minutes by car down the A12 into Colchester. The
                practice has free parking on site, and the therapy room is on the ground floor.
              </p>
              <p>
                If the drive is too far, I also offer{' '}
                <Link href="/online-therapy" className={styles.link}>
                  online therapy
                </Link>{' '}
                for anyone aged 16+ across the UK.
              </p>
            </div>
          </section>

          {/* Section: What I work with */}
          <section className={styles.servicesSection}>
            <div className={styles.servicesContainer}>
              <h2>What I work with</h2>
              <div className={styles.servicesGrid}>
                <Link href="/therapy-for-women" className={styles.serviceCard}>
                  <h3>Therapy for Women</h3>
                </Link>
                <Link href="/neurodiversity" className={styles.serviceCard}>
                  <h3>ADHD & Autism</h3>
                </Link>
                <Link href="/teen-therapy" className={styles.serviceCard}>
                  <h3>Teen Therapy</h3>
                </Link>
                <Link href="/child-therapy" className={styles.serviceCard}>
                  <h3>Child Therapy</h3>
                </Link>
                <Link href="/romanian-therapy" className={styles.serviceCard}>
                  <h3>Romanian Therapy</h3>
                </Link>
              </div>
            </div>
          </section>

          {/* Section: From Ipswich */}
          <section className={styles.townSection}>
            <div className={styles.townContainer}>
              <h2>From Ipswich</h2>
              <p>
                Ipswich is where a lot of my current work takes place — I&apos;m involved with YMCA
                projects in the town, including school-based support and residential work. That
                means I understand the local landscape, the pressures young people face, and what
                families in Suffolk are dealing with.
              </p>
              <p>
                If you&apos;re in Ipswich and looking for a private therapist who knows the area,
                who has experience with NHS and charity work as well as private practice, and who
                works psychodynamically rather than offering quick-fix solutions, we&apos;d likely
                be a good match.
              </p>
            </div>
          </section>

          {/* Section: CTA */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContainer}>
              <h2>Start with a free 15-minute call</h2>
              <p>
                If you&apos;re in Ipswich and considering therapy, the first step is a free
                15-minute call. It&apos;s not a session — just a conversation to see if we&apos;re a
                good fit.
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
