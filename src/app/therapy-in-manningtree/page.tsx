import type { Metadata } from 'next';
import Link from 'next/link';

import PageHero from '@/components/ui/PageHero';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import styles from '@/styles/location-page.module.scss';
import buttonStyles from '@/components/ui/button.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Therapist Near Manningtree | Psychodynamic Therapy | Next Gen Therapy',
  description:
    'Psychodynamic therapist near Manningtree, Essex. 25 minutes from Manningtree to Colchester Business Centre. In-person therapy for women, neurodivergent adults, teenagers and children. BACP registered.',
  keywords: [
    'therapist Manningtree',
    'therapy Manningtree',
    'counselling Manningtree',
    'psychotherapist near Manningtree',
    'therapist near Manningtree',
    'Manningtree mental health',
    'BACP therapist Essex',
    'women therapist Essex',
    'ADHD therapist Essex',
  ],
  authors: [{ name: 'Andreea Horhocea' }],
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/therapy-in-manningtree',
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
    title: 'Therapist Near Manningtree | Psychodynamic Therapy',
    description:
      'Psychodynamic therapist near Manningtree, Essex. 25 minutes to Colchester Business Centre. In-person therapy for women, neurodivergent adults, teenagers and children.',
    url: 'https://nextgentherapy.co.uk/therapy-in-manningtree',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Therapy near Manningtree — Next Generation Therapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Therapist Near Manningtree | Psychodynamic Therapy',
    description:
      'Psychodynamic therapist near Manningtree, Essex. 25 minutes to Colchester Business Centre. BACP registered.',
    images: ['https://nextgentherapy.co.uk/images/default-social-share.jpg'],
  },
};

export default function TherapyInManningtreePage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://nextgentherapy.co.uk/#localbusiness',
    name: 'Next Generation Therapy',
    description:
      'Psychodynamic therapy for women, neurodivergent adults, teenagers and children near Manningtree, Essex.',
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
      name: 'Manningtree',
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      

      <PageHero
        eyebrow="Therapy near Manningtree"
        title="Psychodynamic therapy for people in Manningtree and the surrounding area."
        lead="Manningtree is a short drive up the A137 — and my practice is about 25 minutes from Manningtree, at Colchester Business Centre. I also offer online therapy for anyone aged 16+, UK-wide."
      />

      <div className={styles.page}>
        <main className={styles.main}>
          {/* Section: Getting here from Manningtree */}
          <section className={styles.directionsSection}>
            <div className={styles.directionsContainer}>
              <h2>Getting to me from Manningtree</h2>
              <address className={styles.address}>
                <strong>Colchester Business Centre</strong>
                <br />
                1 George Williams Way
                <br />
                Colchester CO1 2JS
              </address>
              <p>
                From Manningtree, it&apos;s about 25 minutes by car via the A120 and A137 into
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

          {/* Section: From Manningtree */}
          <section className={styles.townSection}>
            <div className={styles.townContainer}>
              <h2>From Manningtree</h2>
              <p>
                I see clients from Manningtree who appreciate having a therapist outside their small
                town. When everyone knows everyone, the confidentiality of coming into Colchester
                for sessions matters — you won&apos;t run into me at the high street or the station.
              </p>
              <p>
                Many Manningtree clients are managing the particular dynamics of small-town life:
                feeling visible, feeling stuck, or feeling like everyone has opinions about how
                you&apos;re living. I understand that pressure.
              </p>
            </div>
          </section>

          {/* Section: CTA */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContainer}>
              <h2>Start with a free 15-minute call</h2>
              <p>
                If you&apos;re in Manningtree and considering therapy, the first step is a free
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
