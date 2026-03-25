import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

function getMetadata(): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nextgentherapy.co.uk';

  return {
    metadataBase: new URL(siteUrl),
    title: 'Colchester Therapist | BACP Registered | Next Generation',
    description:
      'Professional therapy in Colchester & online. BACP registered therapist for anxiety, depression & relationships. Specialising in young people.',
    keywords: [
      'therapy Colchester',
      'therapist Colchester',
      'therapy sessions Colchester',
      'BACP therapist Essex',
      'registered therapist Colchester',
      'qualified therapist Essex',
      'professional therapy Colchester',
      'therapy Colchester Essex',
      'online therapy UK',
      'depression therapy Colchester',
      'anxiety therapy Colchester',
      'relationship therapy Essex',
      'child therapy Colchester',
      'teenage therapy Colchester',
      'young adult therapy',
      'mental health therapy Essex',
      'therapy services Colchester',
      'Andreea Horhocea therapist',
      'therapist near me Essex',
      'therapy appointments Colchester',
      'family therapy support',
      'psychodynamic therapy',
    ],
    authors: [{ name: 'Andreea Horhocea' }],
    openGraph: {
      title: 'Therapy Colchester | BACP Registered Therapist',
      description:
        'Professional therapy in Colchester & online. Expert help for anxiety, depression & relationships. Specialising in young people. BACP registered.',
      url: siteUrl,
      siteName: 'Next Generation Therapy',
      locale: 'en_GB',
      type: 'website',
      images: [
        {
          url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
          width: 1200,
          height: 630,
          alt: 'Next Generation Therapy - Professional Therapy Services in Colchester',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Professional Therapy Services Colchester | Next Generation Therapy',
      description:
        'Professional psychodynamic therapy in Colchester & online. Expert help for anxiety, depression, relationships & personal growth. Specialising in young people.',
      images: ['https://nextgentherapy.co.uk/images/default-social-share.jpg'],
    },
    alternates: {
      canonical: siteUrl,
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
}

export const metadata = getMetadata();

export default function Home() {
  const homePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Professional Therapy Services Colchester | Next Generation Therapy',
    description:
      'BACP registered psychodynamic therapist offering professional counselling in Colchester & online. Expert help for anxiety, depression, relationships & personal growth.',
    url: 'https://nextgentherapy.co.uk',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Next Generation Therapy',
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: 'https://nextgentherapy.co.uk/images/andreea.jpg',
    },
    lastReviewed: '2026-01-09',
    reviewedBy: {
      '@type': 'Person',
      name: 'Andreea Horhocea',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <div className={styles.page}>
        <main>
          {/* Section 1: Hero */}
          <section className={styles.hero} aria-label="Welcome to Next Generation Therapy">
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>Colchester & Online · BACP Registered</p>
              <h1 className={styles.headline}>
                You don&apos;t have to keep holding it together alone.
              </h1>
              <p className={styles.subheading}>
                Psychodynamic therapy for children, teenagers and adults — in Colchester and online
                across the UK.
              </p>
              <div className={styles.heroCta}>
                <Link href="/book-now" className={styles.primaryButton}>
                  Book a Free Consultation
                </Link>
                <Link href="/about-therapy" className={styles.secondaryLink}>
                  Learn about my approach →
                </Link>
              </div>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/andreea.jpg"
                alt="Andreea Horhocea - BACP registered psychotherapist in Colchester"
                width={450}
                height={563}
                priority
                className={styles.heroImage}
              />
            </div>
          </section>

          {/* Section 2: Trust Bar */}
          <section className={styles.trustBar} aria-label="Credentials">
            <div className={styles.trustBarInner}>
              <span className={styles.trustItem}>BACP Registered Member</span>
              <span className={styles.trustItem}>Colchester & Online</span>
              <span className={styles.trustItem}>All Ages Welcome</span>
            </div>
          </section>

          {/* Section 3: How I Can Help */}
          <section className={styles.services} aria-labelledby="services-title">
            <h2 id="services-title" className={styles.sectionTitle}>
              How I Can Help
            </h2>
            <div className={styles.servicesGrid}>
              <Link href="/child-therapy" className={styles.serviceCard}>
                <h3>Child Therapy</h3>
                <p>
                  A safe, nurturing space for children to explore their emotions through play and
                  creative expression. Helping young minds process difficult experiences.
                </p>
                <span className={styles.serviceLink}>Learn more →</span>
              </Link>
              <Link href="/teenage-therapy" className={styles.serviceCard}>
                <h3>Teenage Therapy</h3>
                <p>
                  Supporting adolescents through the unique challenges of growing up. Building
                  resilience, self-understanding and healthy coping strategies.
                </p>
                <span className={styles.serviceLink}>Learn more →</span>
              </Link>
              <Link href="/young-adult-therapy" className={styles.serviceCard}>
                <h3>Adult & Young Adult Therapy</h3>
                <p>
                  Compassionate support for adults navigating anxiety, depression, relationships and
                  life transitions. Creating lasting positive change.
                </p>
                <span className={styles.serviceLink}>Learn more →</span>
              </Link>
            </div>
          </section>

          {/* Section 4: About Andreea */}
          <section className={styles.about} aria-label="About Andreea">
            <div className={styles.aboutInner}>
              <div className={styles.aboutContent}>
                <blockquote className={styles.quote}>
                  &ldquo;I created this space to offer a therapeutic experience where you can feel
                  safe, seen, and understood — a space where your story matters. Whatever brings you
                  here, you&apos;re welcome.&rdquo;
                </blockquote>
                <p className={styles.credentials}>
                  Andreea Horhocea — MSc Psychodynamic Psychotherapy, BACP Registered
                </p>
                <Link href="/about" className={styles.aboutLink}>
                  More about me →
                </Link>
              </div>
              <div className={styles.aboutDecoration} aria-hidden="true" />
            </div>
          </section>

          {/* Section 5: CTA */}
          <section className={styles.cta} aria-label="Book a consultation">
            <div className={styles.ctaInner}>
              <h2 className={styles.ctaTitle}>Ready to take the first step?</h2>
              <p className={styles.ctaText}>
                I offer a free 15-minute phone consultation. No commitment required.
              </p>
              <Link href="/book-now" className={styles.primaryButton}>
                Book Now
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
