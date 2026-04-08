import type { Metadata } from 'next';
import Link from 'next/link';

import PageHero from '@/components/ui/PageHero';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import styles from '@/styles/location-page.module.scss';
import buttonStyles from '@/components/ui/button.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Therapist Near Tiptree | Psychodynamic Therapy | Next Gen Therapy',
  description:
    'Psychodynamic therapist near Tiptree, Essex. 20 minutes from Tiptree to Colchester Business Centre. In-person therapy for women, neurodivergent adults, teenagers and children. BACP registered.',
  keywords: [
    'therapist Tiptree',
    'therapy Tiptree',
    'counselling Tiptree',
    'psychotherapist near Tiptree',
    'therapist near Tiptree',
    'Tiptree mental health',
    'BACP therapist Essex',
    'women therapist Essex',
    'ADHD therapist Essex',
  ],
  authors: [{ name: 'Andreea Horhocea' }],
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/therapy-in-tiptree',
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
    title: 'Therapist Near Tiptree | Psychodynamic Therapy',
    description:
      'Psychodynamic therapist near Tiptree, Essex. 20 minutes to Colchester Business Centre. In-person therapy for women, neurodivergent adults, teenagers and children.',
    url: 'https://nextgentherapy.co.uk/therapy-in-tiptree',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Therapy near Tiptree — Next Generation Therapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Therapist Near Tiptree | Psychodynamic Therapy',
    description:
      'Psychodynamic therapist near Tiptree, Essex. 20 minutes to Colchester Business Centre. BACP registered.',
    images: ['https://nextgentherapy.co.uk/images/default-social-share.jpg'],
  },
};

export default function TherapyInTiptreePage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://nextgentherapy.co.uk/#localbusiness',
    name: 'Next Generation Therapy',
    description:
      'Psychodynamic therapy for women, neurodivergent adults, teenagers and children near Tiptree, Essex.',
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
      name: 'Tiptree',
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
        eyebrow="Therapy near Tiptree"
        title="Psychodynamic therapy for people in Tiptree and the surrounding area."
        lead="Tiptree is about 20 minutes away — and my practice is at Colchester Business Centre, with free parking and ground-floor access. I also offer online therapy for anyone aged 16+, UK-wide."
      />

      <div className={styles.page}>
        <main className={styles.main}>
          {/* Section: Getting here from Tiptree */}
          <section className={styles.directionsSection}>
            <div className={styles.directionsContainer}>
              <h2>Getting to me from Tiptree</h2>
              <address className={styles.address}>
                <strong>Colchester Business Centre</strong>
                <br />
                1 George Williams Way
                <br />
                Colchester CO1 2JS
              </address>
              <p>
                From Tiptree, it&apos;s about 20 minutes by car — either via the B1022 or the A12.
                The practice has free parking on site, and the therapy room is on the ground floor.
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

          {/* Section: From Tiptree */}
          <section className={styles.townSection}>
            <div className={styles.townContainer}>
              <h2>From Tiptree</h2>
              <p>
                I see clients from Tiptree who prefer having a therapist outside their immediate
                community. In a village where people know each other, the anonymity of coming into
                Colchester for sessions can be valuable — you&apos;re less likely to bump into your
                therapist in Tesco.
              </p>
              <p>
                Many Tiptree clients are managing the juggle of family life, commuting, and trying
                to hold everything together while living somewhere that can feel a bit isolated. I
                understand that dynamic well.
              </p>
            </div>
          </section>

          {/* Section: CTA */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContainer}>
              <h2>Start with a free 15-minute call</h2>
              <p>
                If you&apos;re in Tiptree and considering therapy, the first step is a free
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
