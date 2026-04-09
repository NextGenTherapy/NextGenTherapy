import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import PageHero from '@/components/ui/PageHero';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { TrackedBACPLink } from '@/components/ui/TrackedContactLinks';
import styles from './about.module.scss';
import buttonStyles from '../../components/ui/button.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'About Andreea Horhocea — BACP Psychotherapist in Colchester',
  description:
    'MA Psychodynamic Psychotherapy (University of Essex, 2020). BACP registered. Working with women, neurodivergent adults, teenagers and children in Colchester and online. Sessions available in English and Romanian.',
  keywords: [
    'about Andreea Horhocea',
    'BACP therapist Colchester',
    'psychodynamic psychotherapist Essex',
    'University of Essex therapist',
    'female therapist Colchester',
    'Romanian speaking therapist',
    'Colchester psychotherapist',
    'MBACP therapist Essex',
    'qualified therapist Colchester',
  ],
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
      'MA Psychodynamic Psychotherapy (University of Essex, 2020). BACP registered. Working with women, neurodivergent adults, teenagers and children in Colchester and online.',
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
      'MA Psychodynamic Psychotherapy (University of Essex, 2020). BACP registered. Working with women, neurodivergent adults, teenagers and children.',
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
        name: 'BA Criminology and Social Psychology',
        recognizedBy: {
          '@type': 'CollegeOrUniversity',
          name: 'University of Essex',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'MA Psychodynamic Psychotherapy',
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
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
                I became a therapist because I grew up without access to the kind of understanding
                I needed, and I wanted to make sure other people — particularly women and young
                people — had somewhere to take the things they&apos;re carrying. That&apos;s still
                why I do this work now.
              </p>
              <p>
                The work I do is slow and open-ended. It&apos;s not a toolkit or a six-week course.
                We meet weekly, and we keep meeting until something has genuinely shifted. For some
                people that&apos;s a few months; for others, it&apos;s a few years.
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
                      <dt>BA Criminology and Social Psychology</dt>
                      <dd>University of Essex</dd>
                    </div>
                    <div className={styles.definitionItem}>
                      <dt>MA Psychodynamic Psychotherapy</dt>
                      <dd>University of Essex, 2020</dd>
                    </div>
                    <div className={styles.definitionItem}>
                      <dt>Professional membership</dt>
                      <dd>
                        <TrackedBACPLink location="about" className={styles.link}>
                          BACP Registered Member (MBACP)
                        </TrackedBACPLink>
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
                  I&apos;m a psychodynamic therapist. That means we spend time together
                  understanding why certain patterns keep showing up in your life, where they came
                  from, and what they&apos;re protecting. I draw on other approaches — mindfulness,
                  some CBT-informed tools, creative work with younger clients — but the foundation
                  is always psychodynamic.
                </p>
              </div>

              <div className={styles.howBlock}>
                <h3>The format</h3>
                <p>
                  Sessions are weekly and 50 minutes long. I work open-ended, which means we
                  don&apos;t start with a fixed number of sessions. Some people come for a few
                  months, some come for a few years. We review how it&apos;s going as we go.
                </p>
              </div>

              <div className={styles.howBlock}>
                <h3>Who I work with</h3>
                <p>
                  I work with women, neurodivergent adults, teenagers aged 13–17, young adults, and
                  children from 4 upwards. I also see parents as clients in their own right. Online
                  sessions are available for anyone 16 or older — I don&apos;t do online work for
                  younger clients because confidentiality is hard to guarantee at home.
                </p>
              </div>

              <div className={styles.howBlock}>
                <h3>Who I don&apos;t work with</h3>
                <p>
                  I don&apos;t offer couples therapy, forensic work, or work with active psychosis
                  or untreated addiction. If that&apos;s what you need, I&apos;m happy to point you
                  toward people who specialise in it.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Romanian language */}
          <section className={styles.romanianSection}>
            <div className={styles.romanianContainer}>
              <h2>Therapy in Romanian</h2>
              <p>
                I also offer sessions in Romanian. If you grew up in Romania, or between Romania
                and the UK, there are things that are easier to say in your first language — and
                things about the experience of being between two cultures that can be hard to
                explain to someone who hasn&apos;t lived it. I have.
              </p>
              {/* {{ CONFIRM WITH ANDREEA: a single sentence about her own Romanian background if she wants to include it, otherwise delete this last sentence }} */}
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
                The free call is an informal 15-minute conversation, not a first session. We use it
                to see whether working together feels right, sort out logistics, and give you a
                chance to ask anything you want to.
              </p>
              <Link href="/book-now" className={buttonStyles.button}>
                Book a free 15-minute call
              </Link>
            </div>
          </section>
        </main>
      </div>
      <BreadcrumbSchema />
    </>
  );
}
