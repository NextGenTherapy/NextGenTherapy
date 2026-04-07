import type { Metadata } from 'next';
import Link from 'next/link';

import PageHero from '@/components/ui/PageHero';
import styles from '@/styles/location-page.module.scss';
import buttonStyles from '@/components/ui/button.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Therapist in Colchester | Psychodynamic Therapy | Next Gen Therapy',
  description:
    'Psychodynamic therapist in Colchester, Essex. In-person therapy for women, neurodivergent adults, teenagers and children at Colchester Business Centre. BACP registered.',
  keywords: [
    'therapist Colchester',
    'therapy Colchester',
    'psychotherapist Colchester',
    'psychodynamic therapy Colchester',
    'counselling Colchester',
    'BACP therapist Colchester',
    'women therapist Colchester',
    'ADHD therapist Colchester',
    'teen therapist Colchester',
    'child therapist Colchester',
  ],
  authors: [{ name: 'Andreea Horhocea' }],
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/therapy-in-colchester',
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
    title: 'Therapist in Colchester | Psychodynamic Therapy',
    description:
      'Psychodynamic therapist in Colchester, Essex. In-person therapy for women, neurodivergent adults, teenagers and children. BACP registered.',
    url: 'https://nextgentherapy.co.uk/therapy-in-colchester',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Therapy in Colchester — Next Generation Therapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Therapist in Colchester | Psychodynamic Therapy',
    description:
      'Psychodynamic therapist in Colchester, Essex. In-person therapy for women, neurodivergent adults, teenagers and children. BACP registered.',
    images: ['https://nextgentherapy.co.uk/images/default-social-share.jpg'],
  },
};

export default function TherapyInColchesterPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://nextgentherapy.co.uk/#localbusiness',
    name: 'Next Generation Therapy',
    description:
      'Psychodynamic therapy for women, neurodivergent adults, teenagers and children in Colchester, Essex.',
    url: 'https://nextgentherapy.co.uk',
    telephone: '+447448036017',
    email: 'andreeatherapytoday@gmail.com',
    image: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
    priceRange: '£60 per session',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Colchester Business Centre, 1 George Williams Way',
      addressLocality: 'Colchester',
      addressRegion: 'Essex',
      postalCode: 'CO1 2JS',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.8891,
      longitude: 0.9041,
    },
    areaServed: {
      '@type': 'City',
      name: 'Colchester',
      containedIn: 'Essex',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/share/16dg5gpZRo/',
      'https://www.instagram.com/nextgentherapycolchester',
      'https://www.bacp.co.uk/therapists/385976/andreea-horhocea/london-e16',
    ],
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
        name: 'Location',
        item: 'https://nextgentherapy.co.uk/location',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Therapy in Colchester',
        item: 'https://nextgentherapy.co.uk/therapy-in-colchester',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        eyebrow="Therapy in Colchester"
        title="Psychodynamic therapy for people in Colchester and the surrounding area."
        lead="Colchester is where I practise — my therapy room is at Colchester Business Centre, on the ground floor with free parking. I also offer online therapy for anyone aged 16+, UK-wide."
      />

      <div className={styles.page}>
        <main className={styles.main}>
          {/* Section: Getting here */}
          <section className={styles.directionsSection}>
            <div className={styles.directionsContainer}>
              <h2>The practice</h2>
              <address className={styles.address}>
                <strong>Colchester Business Centre</strong>
                <br />
                1 George Williams Way
                <br />
                Colchester CO1 2JS
              </address>
              <p>
                The therapy room is on the ground floor — no stairs to navigate. There&apos;s free
                parking on site, and the building is easy to find just off Southway.
              </p>
              <p>
                The room itself is quiet, green, and calming. Plants, soft lighting, a couch and
                comfortable chairs. Fidgets available for any age. Sensory-aware setup for
                neurodivergent clients.
              </p>
              <p>
                If getting here in person is difficult, I also offer{' '}
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

          {/* Section: From Colchester */}
          <section className={styles.townSection}>
            <div className={styles.townContainer}>
              <h2>From Colchester</h2>
              <p>
                Colchester is where I&apos;m based, and most of my in-person clients come from the
                town itself or the surrounding villages. If you&apos;re in Colchester and looking
                for a therapist who works psychodynamically — slow, considered, curious about the
                whole of you — rather than someone offering a quick fix or a six-week programme,
                we&apos;d likely be a good match.
              </p>
              <p>
                I work with women, neurodivergent adults and teenagers, and children from age 4.
                Many of my clients are high-functioning, hyper-aware, and have been managing
                everything themselves for too long.
              </p>
            </div>
          </section>

          {/* Section: CTA */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContainer}>
              <h2>Start with a free 15-minute call</h2>
              <p>
                If you&apos;re in Colchester and considering therapy, the first step is a free
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
    </>
  );
}
