import type { Metadata } from 'next';
import Link from 'next/link';

import PageHero from '@/components/ui/PageHero';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import styles from './online-therapy.module.scss';
import buttonStyles from '../../components/ui/button.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Online Therapy UK | Video Sessions Age 16+',
  description:
    'Online psychodynamic therapy UK-wide. Secure video sessions, age 16+. £60 per session. Available Mon, Tue, Wed, Fri. BACP registered. English & Romanian.',
  keywords: [
    'online therapy uk',
    'online psychodynamic therapy',
    'video therapy sessions uk',
    'online therapist uk',
    'online therapy adhd',
    'romanian therapist online uk',
    'online counselling uk',
    'video therapy burnout',
    'online therapy anxiety',
    'uk wide therapy',
    'remote therapy sessions',
    'online psychotherapist',
  ],
  authors: [{ name: 'Andreea Horhocea' }],
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/online-therapy',
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
    title: 'Online Therapy UK | Video Sessions Age 16+ | Next Generation Therapy',
    description:
      'Online psychodynamic therapy across the UK. Secure video sessions for clients aged 16 and over. BACP registered therapist.',
    url: 'https://nextgentherapy.co.uk/online-therapy',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://nextgentherapy.co.uk/images/og/og-online-therapy.jpg',
        width: 1200,
        height: 630,
        alt: 'Online Therapy UK — Next Generation Therapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Therapy UK | Video Sessions Age 16+ | Next Generation Therapy',
    description:
      'Online psychodynamic therapy across the UK. Secure video sessions for clients aged 16 and over. BACP registered.',
    images: ['https://nextgentherapy.co.uk/images/og/og-online-therapy.jpg'],
  },
};

export default function OnlineTherapyPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Online Psychodynamic Therapy — Next Generation Therapy',
    provider: {
      '@type': 'Person',
      name: 'Andreea Horhocea',
      jobTitle: 'Psychodynamic Psychotherapist',
    },
    serviceType: 'Online Psychotherapy',
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    availableLanguage: ['English', 'Romanian'],
    description:
      'Online psychodynamic therapy for adults and teens aged 16+ across the UK. Weekly video sessions available Monday, Tuesday, Wednesday, and Friday.',
  };


  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why is online therapy only available for ages 16 and over?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Therapy requires confidentiality to work well. For clients under 16, online sessions often mean a parent is elsewhere in the house, which can affect what the young person feels able to share. For younger clients, I offer in-person sessions in Colchester where we can ensure real privacy.',
        },
      },
      {
        '@type': 'Question',
        name: 'When are online therapy sessions available?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Online sessions are available Monday, Tuesday, Wednesday, and Friday. Wednesdays are dedicated entirely to online sessions, while on Monday, Tuesday, and Friday I offer both in-person and online appointments.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long are online therapy sessions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Each session is 50 minutes, the same as in-person sessions. We meet weekly, at the same time each week. This consistency is part of what makes psychodynamic work effective.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow="Online Therapy — UK-wide"
        title="Therapy that comes to you"
        lead="Psychodynamic therapy via secure video, wherever you are in the UK. For clients aged 16 and over. Available Monday, Tuesday, Wednesday, and Friday."
      />

      <div className={styles.page}>
        <main className={styles.main}>
          {/* Section: How It Works */}
          <section className={styles.howSection}>
            <div className={styles.howContainer}>
              <h2>How online therapy works</h2>
              <div className={styles.howContent}>
                <p>
                  Online sessions are available Monday, Tuesday, Wednesday, and Friday. Wednesdays
                  are dedicated entirely to online sessions, while on other days I offer both
                  in-person and online appointments — whichever works better for you.
                </p>
                <p>
                  We meet weekly, at the same time each week, for 50 minutes. Sessions happen via
                  secure video. You need a private space where you won&apos;t be overheard, a
                  reliable internet connection, and a device with a camera. That&apos;s it.
                </p>
                <p>
                  The work is the same as in-person — psychodynamic therapy, open-ended, focused on
                  understanding why patterns keep showing up rather than just managing symptoms. The
                  only difference is we&apos;re not in the same room.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Why 16+ Only */}
          <section className={styles.ageSection}>
            <div className={styles.ageContainer}>
              <h2>Why online therapy is for ages 16 and over</h2>
              <p>
                Therapy only works when you can speak freely. For clients under 16, online sessions
                often mean a parent is somewhere in the house — and that changes what a young person
                feels able to say.
              </p>
              <p>
                This isn&apos;t about capability. Younger clients do excellent therapeutic work. But
                they need a space that&apos;s truly private, and that&apos;s harder to guarantee
                when the session happens in a family home. For children and younger teenagers, I
                offer{' '}
                <Link href="/child-therapy" className={styles.link}>
                  in-person sessions in Colchester
                </Link>{' '}
                where we can ensure real confidentiality.
              </p>
              <p>
                For clients aged 16 and over, online therapy works well. You&apos;re typically more
                autonomous, more able to find private time, and more comfortable with the
                technology.
              </p>
            </div>
          </section>

          {/* Section: What I Work With */}
          <section className={styles.topicsSection}>
            <div className={styles.topicsContainer}>
              <h2>What I work with online</h2>
              <div className={styles.topicsGrid}>
                <div className={styles.topicItem}>
                  <h3>Burnout and overwhelm</h3>
                  <p>
                    The exhaustion that hides behind competence. Doing everything right and still
                    feeling like you&apos;re running on empty.
                  </p>
                </div>
                <div className={styles.topicItem}>
                  <h3>Anxiety and overthinking</h3>
                  <p>
                    The mind that won&apos;t switch off. The constant worry. The replaying of
                    conversations at 2am.
                  </p>
                </div>
                <div className={styles.topicItem}>
                  <h3>Self-esteem and identity</h3>
                  <p>
                    &ldquo;I don&apos;t know who I am anymore.&rdquo; The disorientation that comes
                    with life transitions or when everything looks fine but something feels wrong.
                  </p>
                </div>
                <div className={styles.topicItem}>
                  <h3>ADHD and autism</h3>
                  <p>
                    Affirmative work with neurodivergent adults and older teens. Processing
                    late-diagnosis, masking, and the burnout that comes from years of trying to fit
                    a neurotypical mould.
                  </p>
                </div>
                <div className={styles.topicItem}>
                  <h3>Body image and eating</h3>
                  <p>
                    Including patterns you haven&apos;t called disordered before — the complicated
                    relationship with your body that affects how you live.
                  </p>
                </div>
                <div className={styles.topicItem}>
                  <h3>Romanian-speaking clients</h3>
                  <p>
                    I offer therapy in Romanian. If navigating bicultural identity, immigrant
                    experience, or simply preferring your first language —{' '}
                    <Link href="/romanian-therapy" className={styles.link}>
                      learn more
                    </Link>
                    .
                  </p>
                </div>
                <div className={styles.topicItem}>
                  <h3>Relationship patterns and life transitions</h3>
                  <p>
                    The same dynamic showing up in every relationship. Major life changes that leave
                    you unmoored. Navigating parenthood, separation, or career shifts.
                  </p>
                </div>
                <div className={styles.topicItem}>
                  <h3>The things you haven&apos;t found words for yet</h3>
                  <p>
                    Not everything arrives with a label. Sometimes you just know something
                    isn&apos;t right, and that&apos;s enough to start.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Online vs In-Person */}
          <section className={styles.comparisonSection}>
            <div className={styles.comparisonContainer}>
              <h2>Online or in-person?</h2>
              <p className={styles.comparisonIntro}>
                Neither is better. They&apos;re different. The right choice depends on your
                circumstances.
              </p>
              <div className={styles.comparisonGrid}>
                <div className={styles.comparisonColumn}>
                  <h3>Online works well when</h3>
                  <ul>
                    <li>You live outside Colchester or Essex</li>
                    <li>You travel frequently for work</li>
                    <li>You prefer the flexibility of not commuting</li>
                    <li>You have a private space at home</li>
                    <li>You&apos;re more comfortable speaking from your own environment</li>
                  </ul>
                </div>
                <div className={styles.comparisonColumn}>
                  <h3>In-person works well when</h3>
                  <ul>
                    <li>You&apos;re under 16 (confidentiality reasons)</li>
                    <li>You don&apos;t have a private space at home</li>
                    <li>You prefer the structure of leaving the house for therapy</li>
                    <li>You want the room to feel like a distinct space, separate from home</li>
                    <li>Play-based or creative work is part of the therapy (children)</li>
                  </ul>
                </div>
              </div>
              <p className={styles.comparisonNote}>
                If you&apos;re not sure, we can discuss it in the free 15-minute call. Some people
                start with one and switch to the other. That&apos;s fine.
              </p>
            </div>
          </section>

          {/* Section: Practical Details */}
          <section className={styles.detailsSection}>
            <div className={styles.detailsContainer}>
              <h2>Practical details</h2>
              <dl className={styles.detailsList}>
                <div className={styles.detailsItem}>
                  <dt>Days</dt>
                  <dd>Mon, Tue, Wed (online-only), Fri</dd>
                </div>
                <div className={styles.detailsItem}>
                  <dt>Age</dt>
                  <dd>16 and over</dd>
                </div>
                <div className={styles.detailsItem}>
                  <dt>Session length</dt>
                  <dd>50 minutes</dd>
                </div>
                <div className={styles.detailsItem}>
                  <dt>Frequency</dt>
                  <dd>Weekly, same time each week</dd>
                </div>
                <div className={styles.detailsItem}>
                  <dt>Cost</dt>
                  <dd>£60 per session</dd>
                </div>
                <div className={styles.detailsItem}>
                  <dt>Platform</dt>
                  <dd>Google Meet (link sent before each session)</dd>
                </div>
                <div className={styles.detailsItem}>
                  <dt>Languages</dt>
                  <dd>English and Romanian</dd>
                </div>
                <div className={styles.detailsItem}>
                  <dt>Coverage</dt>
                  <dd>UK-wide</dd>
                </div>
                <div className={styles.detailsItem}>
                  <dt>What you need</dt>
                  <dd>
                    A private space where you won&apos;t be overheard, a stable internet connection,
                    and a device with camera
                  </dd>
                </div>
              </dl>
            </div>
          </section>

          {/* Section: CTA */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContainer}>
              <h2>Start with a free 15-minute call</h2>
              <p>
                The free call is an informal conversation, not a first session. You can ask anything
                you want, I&apos;ll answer honestly, and we&apos;ll decide together whether working
                with me feels like the right next step.
              </p>
              <Link href="/book-now" className={buttonStyles.primary}>
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
