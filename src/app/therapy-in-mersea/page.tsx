import type { Metadata } from 'next';
import Link from 'next/link';

import PageHero from '@/components/ui/PageHero';
import styles from '@/styles/location-page.module.scss';
import buttonStyles from '@/components/ui/button.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Therapist Near Mersea | Psychodynamic Therapy | Next Gen Therapy',
  description:
    'Psychodynamic therapist near Mersea, Essex. 25 minutes from Mersea to Colchester Business Centre. In-person therapy for women, neurodivergent adults, teenagers and children. BACP registered.',
  keywords: [
    'therapist Mersea',
    'therapy Mersea',
    'counselling Mersea',
    'therapist West Mersea',
    'psychotherapist near Mersea',
    'therapist near Mersea',
    'Mersea mental health',
    'BACP therapist Essex',
    'women therapist Essex',
  ],
  authors: [{ name: 'Andreea Horhocea' }],
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/therapy-in-mersea',
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
    title: 'Therapist Near Mersea | Psychodynamic Therapy',
    description:
      'Psychodynamic therapist near Mersea, Essex. 25 minutes to Colchester Business Centre. In-person therapy for women, neurodivergent adults, teenagers and children.',
    url: 'https://nextgentherapy.co.uk/therapy-in-mersea',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Therapy near Mersea — Next Generation Therapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Therapist Near Mersea | Psychodynamic Therapy',
    description:
      'Psychodynamic therapist near Mersea, Essex. 25 minutes to Colchester Business Centre. BACP registered.',
    images: ['https://nextgentherapy.co.uk/images/default-social-share.jpg'],
  },
};

export default function TherapyInMerseaPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://nextgentherapy.co.uk/#localbusiness',
    name: 'Next Generation Therapy',
    description:
      'Psychodynamic therapy for women, neurodivergent adults, teenagers and children near Mersea, Essex.',
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
      name: 'Mersea',
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
        name: 'Therapy near Mersea',
        item: 'https://nextgentherapy.co.uk/therapy-in-mersea',
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
        eyebrow="Therapy near Mersea"
        title="Psychodynamic therapy for people in Mersea and the surrounding area."
        lead="Mersea is about 25 minutes from me — and my practice is at Colchester Business Centre, with free parking and ground-floor access. I also offer online therapy for anyone aged 16+, UK-wide."
      />

      <div className={styles.page}>
        <main className={styles.main}>
          {/* Section: Getting here from Mersea */}
          <section className={styles.directionsSection}>
            <div className={styles.directionsContainer}>
              <h2>Getting to me from Mersea</h2>
              <address className={styles.address}>
                <strong>Colchester Business Centre</strong>
                <br />
                1 George Williams Way
                <br />
                Colchester CO1 2JS
              </address>
              <p>
                From Mersea, it&apos;s about 25 minutes by car along the B1025 and Mersea Road into
                Colchester. The practice has free parking on site, and the therapy room is on the
                ground floor.
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

          {/* Section: From Mersea */}
          <section className={styles.townSection}>
            <div className={styles.townContainer}>
              <h2>From Mersea</h2>
              <p>
                I see clients from Mersea who appreciate having a therapist off the island — the
                sense of separation that comes with crossing the Strood can be helpful. There&apos;s
                something about driving away from the close-knit island community that makes it
                easier to speak freely about what&apos;s really going on.
              </p>
              <p>
                Whether you&apos;re a year-round resident or someone managing the seasonal shifts,
                the isolation of island life, or the particular dynamics of a small community, I
                understand those pressures.
              </p>
            </div>
          </section>

          {/* Section: CTA */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContainer}>
              <h2>Start with a free 15-minute call</h2>
              <p>
                If you&apos;re in Mersea and considering therapy, the first step is a free
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
