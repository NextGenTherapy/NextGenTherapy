import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

function getMetadata(): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nextgentherapy.co.uk';

  return {
    metadataBase: new URL(siteUrl),
    title: 'Psychodynamic Therapy in Colchester & Online | Andreea Horhocea',
    description:
      'Psychodynamic therapy in Colchester and online (UK-wide) for women, neurodivergent adults and teenagers. BACP registered. Sessions in English and Romanian. Free 15-minute intro call.',
    keywords: [
      'therapy Colchester',
      'psychodynamic therapist Colchester',
      'BACP therapist Essex',
      'therapy for women Colchester',
      'burnout therapy',
      'anxiety therapy Colchester',
      'neurodivergent therapist Essex',
      'ADHD therapist Colchester',
      'autism therapist Essex',
      'teen therapy Colchester',
      'online therapy UK',
      'Romanian therapist UK',
      'Andreea Horhocea therapist',
      'psychodynamic therapy Essex',
      'therapist near me Essex',
    ],
    authors: [{ name: 'Andreea Horhocea' }],
    openGraph: {
      title: 'Psychodynamic Therapy in Colchester & Online | Andreea Horhocea',
      description:
        'Psychodynamic therapy in Colchester and online (UK-wide) for women, neurodivergent adults and teenagers. BACP registered. Free 15-minute intro call.',
      url: siteUrl,
      siteName: 'Next Generation Therapy',
      locale: 'en_GB',
      type: 'website',
      images: [
        {
          url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
          width: 1200,
          height: 630,
          alt: 'Andreea Horhocea - Psychodynamic Therapist in Colchester',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Psychodynamic Therapy in Colchester & Online | Andreea Horhocea',
      description:
        'Psychodynamic therapy in Colchester and online (UK-wide) for women, neurodivergent adults and teenagers. BACP registered. Free 15-minute intro call.',
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
                You fit everything in. And somehow you still feel like you&apos;re slipping
                something.
              </h1>
              <p className={styles.subheading}>
                I&apos;m Andreea — a psychodynamic psychotherapist in Colchester and online. I work
                mainly with women, neurodivergent adults, and teenagers who look fine from the
                outside and are exhausted on the inside.
              </p>
              <div className={styles.heroCta}>
                <Link href="/book-now" className={styles.primaryButton}>
                  Book a Free 15-Minute Call
                </Link>
                <Link href="/is-this-right-for-you" className={styles.secondaryLink}>
                  See if we&apos;re the right fit →
                </Link>
              </div>
            </div>
            <div className={styles.heroImageWrapper}>
              <div className={styles.heroImageFrame}>
                <Image
                  src="/images/andreea.jpg"
                  alt="Andreea Horhocea - BACP registered psychotherapist in Colchester"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 450px"
                  priority
                  className={styles.heroImage}
                />
              </div>
            </div>
          </section>

          {/* Section 2: Trust Bar */}
          <section className={styles.trustBar} aria-label="Credentials">
            <div className={styles.trustBarInner}>
              <span className={styles.trustItem}>BACP Registered</span>
              <span className={styles.trustItem}>Colchester & Online (UK)</span>
              <span className={styles.trustItem}>English & Romanian</span>
            </div>
          </section>

          {/* Section 3: What I Work With */}
          <section className={styles.services} aria-labelledby="services-title">
            <h2 id="services-title" className={styles.sectionTitle}>
              What I Work With
            </h2>
            <div className={styles.servicesGrid}>
              <Link href="/therapy-for-women" className={styles.serviceCard}>
                <h3>Therapy for Women</h3>
                <p>
                  For the overthinking, the burnout, the body image stuff, the &ldquo;I don&apos;t
                  know who I am anymore.&rdquo; Work that takes your inner life seriously without
                  pathologising it.
                </p>
                <span className={styles.serviceLink}>Learn more →</span>
              </Link>
              <Link href="/neurodiversity" className={styles.serviceCard}>
                <h3>ADHD & Autism in Adults</h3>
                <p>
                  Affirmative therapy for late-diagnosed and self-identified neurodivergent adults.
                  The room is quiet, sensory-aware, and stimming is welcome.
                </p>
                <span className={styles.serviceLink}>Learn more →</span>
              </Link>
              <Link href="/teen-therapy" className={styles.serviceCard}>
                <h3>Therapy for Teenagers</h3>
                <p>
                  For teens aged 13–17 navigating anxiety, self-harm, school, friendships, identity.
                  I work alongside parents when it&apos;s helpful and always on the young
                  person&apos;s terms.
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
                  &ldquo;I&apos;ve worked in NHS schools, SEN provision, Mind, and YMCA alongside my
                  private practice. What I do now is a continuation of all of that — slower, more
                  considered, and one person at a time.&rdquo;
                </blockquote>
                <p className={styles.credentials}>
                  Andreea Horhocea — MSc Psych (University of Essex, 2020), BACP Registered
                </p>
                <Link href="/about" className={styles.aboutLink}>
                  More about me →
                </Link>
              </div>
              <div className={styles.aboutDecoration} aria-hidden="true" />
            </div>
          </section>

          {/* Section 5: Romanian Language */}
          <section className={styles.romanian} aria-label="Romanian language therapy">
            <div className={styles.romanianInner}>
              <h2 className={styles.romanianTitle}>Terapie în limba română</h2>
              <p className={styles.romanianText}>
                I also offer therapy in Romanian. If you grew up between Romania and the UK, there
                are things that are easier to talk about in your first language — and things about
                the experience of moving between cultures that are hard to explain to someone who
                hasn&apos;t lived it.
              </p>
              <Link href="/romanian-therapy" className={styles.romanianLink}>
                Learn more →
              </Link>
            </div>
          </section>

          {/* Section 6: CTA */}
          <section className={styles.cta} aria-label="Book a consultation">
            <div className={styles.ctaInner}>
              <h2 className={styles.ctaTitle}>Not sure yet? That&apos;s what the free call is for.</h2>
              <p className={styles.ctaText}>
                The free 15-minute call is not a first session. It&apos;s an informal conversation —
                you ask what you want, I answer honestly, and we both decide whether working
                together feels right. No pressure.
              </p>
              <Link href="/book-now" className={styles.primaryButton}>
                Book a Free 15-Minute Call
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
