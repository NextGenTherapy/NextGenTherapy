import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import PageHero from '@/components/ui/PageHero';
import styles from './about.module.scss';
import buttonStyles from '../../components/ui/button.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'About Andreea Horhocea — BACP Psychotherapist in Colchester',
  description:
    'MSc Psychodynamic Psychotherapy (University of Essex, 2020). BACP registered. Working with women, neurodivergent adults, teenagers and children in Colchester and online. Sessions available in English and Romanian.',
  authors: [{ name: 'Andreea Horhocea' }],
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/about',
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
    title: 'About Andreea Horhocea — BACP Psychotherapist in Colchester',
    description:
      'MSc Psychodynamic Psychotherapy (University of Essex, 2020). BACP registered. Working with women, neurodivergent adults, teenagers and children in Colchester and online.',
    url: 'https://nextgentherapy.co.uk/about',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'profile',
    images: [
      {
        url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Andreea Horhocea — BACP Psychotherapist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Andreea Horhocea — BACP Psychotherapist in Colchester',
    description:
      'MSc Psychodynamic Psychotherapy (University of Essex, 2020). BACP registered. Working with women, neurodivergent adults, teenagers and children.',
    images: ['https://nextgentherapy.co.uk/images/default-social-share.jpg'],
  },
};

export default function AboutMe() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Andreea Horhocea',
    jobTitle: 'Psychodynamic Psychotherapist',
    description:
      'BACP registered psychodynamic psychotherapist in Colchester working with women, neurodivergent adults, teenagers and children',
    url: 'https://nextgentherapy.co.uk/about',
    sameAs: ['https://www.bacp.co.uk/therapists/385976/andreea-horhocea/london-e16'],
    memberOf: {
      '@type': 'Organization',
      name: 'British Association for Counselling and Psychotherapy',
      url: 'https://www.bacp.co.uk',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Next Generation Therapy',
      url: 'https://nextgentherapy.co.uk',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Colchester Business Centre, 1 George Williams Way',
      addressLocality: 'Colchester',
      postalCode: 'CO1 2JS',
      addressRegion: 'Essex',
      addressCountry: 'GB',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'University of Essex',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'MSc Psychodynamic Psychotherapy',
        recognizedBy: {
          '@type': 'CollegeOrUniversity',
          name: 'University of Essex',
        },
        dateCreated: '2020',
      },
    ],
    knowsLanguage: ['English', 'Romanian'],
    specialty: [
      'Psychodynamic Therapy',
      'Therapy for Women',
      'Adult ADHD and Autism',
      'Neurodivergent-Affirmative Therapy',
      'Teenager Therapy',
      'Child Therapy',
      'Play Therapy',
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
        name: 'About',
        item: 'https://nextgentherapy.co.uk/about',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        eyebrow="About Andreea"
        title="Hi, I'm Andreea — and I'm really glad you're here."
        lead="I'm a psychodynamic psychotherapist working with women, neurodivergent adults, teenagers and children in Colchester and online across the UK. I trained at the University of Essex and I've been in practice for over six years."
      />
      <div className={styles.page}>
        <main className={styles.main}>
          {/* Section 2: Why I do this work */}
          <section className={styles.whySection}>
            <div className={styles.whyContent}>
              <h2>Why I do this work</h2>
              <p>
                I grew up without access to mental health support or understanding, and that shaped
                the kind of therapist I wanted to become. I wanted to create a space specifically
                for children and women to unpack the expectations and challenges placed on them —
                somewhere they could be honest without being judged.
              </p>
              <p>
                Psychodynamic therapy is open-ended. We go at your pace, for however long it takes.
                There&apos;s no set number of sessions and no pressure to rush. The relationship we
                build matters more than any technique — it&apos;s often where the real change
                happens.
              </p>
            </div>
            <div className={styles.whyImage}>
              <Image
                src="/images/andreea.jpg"
                alt="Andreea Horhocea — Psychodynamic Psychotherapist"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                priority
                className={styles.image}
              />
            </div>
          </section>

          {/* Section 3: Training and experience */}
          <section className={styles.trainingSection}>
            <div className={styles.trainingContainer}>
              <h2>Where I trained and where I&apos;ve worked</h2>

              <div className={styles.trainingGrid}>
                <div className={styles.trainingGroup}>
                  <h3>Training</h3>
                  <dl className={styles.definitionList}>
                    <div className={styles.definitionItem}>
                      <dt>MSc Psychodynamic Psychotherapy</dt>
                      <dd>University of Essex, 2020</dd>
                    </div>
                    <div className={styles.definitionItem}>
                      <dt>Professional membership</dt>
                      <dd>
                        <a
                          href="https://www.bacp.co.uk/therapists/385976/andreea-horhocea/london-e16"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.link}
                        >
                          BACP Registered Member (MBACP)
                        </a>
                      </dd>
                    </div>
                    <div className={styles.definitionItem}>
                      <dt>Ongoing requirements</dt>
                      <dd>Clinical supervision and personal therapy</dd>
                    </div>
                  </dl>
                </div>

                <div className={styles.trainingGroup}>
                  <h3>Post-qualification training (CPD)</h3>
                  <ul className={styles.bulletList}>
                    <li>Neurodiversity (ADHD and autism — affirmative practice)</li>
                    <li>Eating disorders</li>
                    <li>Addiction</li>
                    <li>Trauma and attachment</li>
                    <li>Working with LGBTQ+ clients</li>
                  </ul>
                </div>

                <div className={styles.trainingGroup}>
                  <h3>Experience</h3>
                  <dl className={styles.definitionList}>
                    <div className={styles.definitionItem}>
                      <dt>NHS Essex</dt>
                      <dd>Workshops and seminars with children and parents in schools</dd>
                    </div>
                    <div className={styles.definitionItem}>
                      <dt>Sir Bobby Robson School, Ipswich</dt>
                      <dd>SEN-specific provision</dd>
                    </div>
                    <div className={styles.definitionItem}>
                      <dt>Mind (Mid &amp; North East Essex)</dt>
                      <dd>Youth work in schools</dd>
                    </div>
                    <div className={styles.definitionItem}>
                      <dt>YMCA (ongoing)</dt>
                      <dd>Primary school support and work with residents in Ipswich</dd>
                    </div>
                    <div className={styles.definitionItem}>
                      <dt>Private practice</dt>
                      <dd>Over six years</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: How I work */}
          <section className={styles.howSection}>
            <h2>How I work</h2>

            <div className={styles.howContent}>
              <div className={styles.howBlock}>
                <h3>The approach</h3>
                <p>
                  I&apos;m trained in psychodynamic therapy, which means we explore the patterns,
                  relationships and experiences that have shaped how you feel today. I also draw on
                  mindfulness and practical tools when they&apos;re helpful. With children, I use
                  play, sand tray, drawing and creative materials to help them express what words
                  can&apos;t.
                </p>
              </div>

              <div className={styles.howBlock}>
                <h3>The format</h3>
                <p>
                  Sessions are weekly, at the same time each week. Before we start, I offer a free
                  15-minute call — not therapy, just a chance for both of us to check whether
                  we&apos;re a good fit. Our first proper session is about getting to know each
                  other: what brought you here, what you&apos;re hoping for, and whether you feel
                  comfortable enough to want to come back. That matters more than anything else.
                </p>
              </div>

              <div className={styles.howBlock}>
                <h3>Who I work with</h3>
                <p>
                  I work with children (4–12), teenagers (13–17), young adults (18–25), adults
                  (26–40) and parents. In-person sessions are available at my therapy room in
                  Colchester. Online sessions are available UK-wide for anyone aged 16 and over.
                </p>
              </div>

              <div className={styles.howBlock}>
                <h3>Who I don&apos;t work with</h3>
                <p>
                  I don&apos;t work with couples, people over 40, anyone with open court cases or
                  forensic involvement, active psychosis, or current addiction without wraparound
                  support. Being clear about this helps us both — if I&apos;m not the right fit,
                  I&apos;ll do my best to point you in the right direction.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Romanian language */}
          <section className={styles.romanianSection}>
            <div className={styles.romanianContainer}>
              <h2>Therapy in Romanian</h2>
              <p>
                {/* {{ CONFIRM WITH ANDREEA }}: exact wording about her Romanian background */}
                I offer therapy in Romanian for adults and young adults navigating bicultural
                identity, the immigrant experience, or parenting across cultures. If your first
                language is Romanian, working in your mother tongue can make it easier to access
                emotions and memories that feel harder to reach in English.
              </p>
              <p className={styles.romanianCta}>
                {/* {{ CONFIRM WITH ANDREEA }}: Romanian CTA phrasing */}
                Dacă preferi terapia în limba română,{' '}
                <Link href="/book-now" className={styles.link}>
                  contactează-mă aici
                </Link>
                .
              </p>
            </div>
          </section>

          {/* Section 6: Custom CTA */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContainer}>
              <h2>Book a free 15-minute call</h2>
              <p>
                This isn&apos;t therapy — it&apos;s a chance for us to talk through the logistics
                and see whether we&apos;re a good fit. No commitment, no pressure.
              </p>
              <Link href="/book-now" className={buttonStyles.button}>
                Book a free 15-minute call
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
