import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import PageHero from '@/components/ui/PageHero';
import styles from './therapy-for-women.module.scss';
import buttonStyles from '../../components/ui/button.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Therapy for Women in Colchester & Online | Burnout, Anxiety, Self-Worth',
  description:
    'Psychodynamic therapy for women dealing with burnout, overthinking, anxiety, body image and self-worth. Colchester and online across the UK. BACP registered. Includes work with women in same-sex relationships.',
  keywords: [
    'therapy for women Colchester',
    'burnout therapy Essex',
    'anxiety therapy for women',
    'body image therapy',
    'self-worth therapy Colchester',
    'women therapist Essex',
    'high-achieving women therapy',
    'LGBTQ therapy Colchester',
    'women in same-sex relationships therapy',
    'psychodynamic therapy women',
    'overthinking therapy',
    'perfectionism therapy Essex',
    'female therapist Colchester',
  ],
  authors: [{ name: 'Andreea Horhocea' }],
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/therapy-for-women',
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
    title: 'Therapy for Women in Colchester & Online | Burnout, Anxiety, Self-Worth',
    description:
      'Psychodynamic therapy for women dealing with burnout, overthinking, anxiety, body image and self-worth. BACP registered therapist in Colchester and online.',
    url: 'https://nextgentherapy.co.uk/therapy-for-women',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Therapy for Women — Next Generation Therapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Therapy for Women in Colchester & Online | Burnout, Anxiety, Self-Worth',
    description:
      'Psychodynamic therapy for women dealing with burnout, overthinking, anxiety, body image and self-worth. BACP registered.',
    images: ['https://nextgentherapy.co.uk/images/default-social-share.jpg'],
  },
};

export default function TherapyForWomenPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Psychodynamic Therapy for Women',
    provider: {
      '@type': 'Person',
      name: 'Andreea Horhocea',
      jobTitle: 'Psychodynamic Psychotherapist',
    },
    serviceType: ['Psychodynamic Therapy', 'Therapy for Women', 'LGBTQ+ Therapy'],
    areaServed: ['Colchester', 'Essex', 'United Kingdom (online)'],
    availableLanguage: ['English', 'Romanian'],
    description:
      'Psychodynamic therapy for women dealing with burnout, overthinking, anxiety, body image and self-worth. Weekly, open-ended sessions in Colchester and online across the UK.',
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
        name: 'Services',
        item: 'https://nextgentherapy.co.uk/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Therapy for Women',
        item: 'https://nextgentherapy.co.uk/therapy-for-women',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What issues do you help women with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I work with women dealing with burnout, overthinking, anxiety, self-esteem, body image difficulties, relationship patterns, perfectionism, and identity questions. Many of my clients are high-functioning — they look fine on the outside but feel exhausted, stuck, or like they\'re failing at everything.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you work with LGBTQ+ women?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. I have specific training in working with LGBTQ+ clients and see women navigating identity, relationships, and internalised shame. You won\'t need to explain your life or come out again — I understand the landscape.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does therapy take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I work open-ended, meaning we don\'t start with a fixed number of sessions. Some people come for a few months, some for a few years. We meet weekly and review how it\'s going as we go.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow="Therapy for Women"
        title="You look fine. You're not fine."
        lead="For the overthinking, the burnout, the body image stuff, the feeling of never quite being enough — even when everyone else thinks you've got it all together."
      />

      <div className={styles.page}>
        <main className={styles.main}>
          {/* Section 2: Recognition Pull-Quotes */}
          <section className={styles.recognitionSection}>
            <div className={styles.recognitionContainer}>
              <h2 className={styles.recognitionHeading}>
                If any of this sounds familiar, you&apos;re in the right place
              </h2>
              <ul className={styles.quoteList}>
                <li className={styles.quote}>&ldquo;I can&apos;t stop overthinking.&rdquo;</li>
                <li className={styles.quote}>
                  &ldquo;I&apos;m avoiding situations because of how I feel about my body.&rdquo;
                </li>
                <li className={styles.quote}>&ldquo;I feel stuck and burnt out.&rdquo;</li>
                <li className={styles.quote}>
                  &ldquo;I fit everything in and somehow still feel like I&apos;m slipping
                  something.&rdquo;
                </li>
                <li className={styles.quote}>
                  &ldquo;I can&apos;t seem to stop worrying.&rdquo;
                </li>
                <li className={styles.quote}>
                  &ldquo;I don&apos;t know who I am anymore.&rdquo;
                </li>
                <li className={styles.quote}>
                  &ldquo;I feel like I&apos;m failing at everything.&rdquo;
                </li>
                <li className={styles.quote}>&ldquo;I can&apos;t switch off.&rdquo;</li>
              </ul>
              <p className={styles.recognitionNote}>
                These are real things women say to me in first sessions.
              </p>
            </div>
          </section>

          {/* Section 3: How I Work */}
          <section className={styles.workSection}>
            <div className={styles.workContent}>
              <div className={styles.workText}>
                <h2>How I work</h2>
                <p>
                  I&apos;m a psychodynamic therapist. That means we spend time together
                  understanding why certain patterns keep showing up in your life — the
                  overthinking, the self-criticism, the feeling that you should be doing better.
                  Where did they come from? What are they protecting?
                </p>
                <p>
                  This isn&apos;t a six-week toolkit or a set of techniques to manage your symptoms.
                  We meet weekly, and we keep meeting until something has genuinely shifted. For
                  some people that&apos;s a few months; for others, a few years.
                </p>
                <p>
                  I draw on other approaches when they&apos;re useful — mindfulness, some
                  CBT-informed tools, writing prompts — but the foundation is always
                  psychodynamic. The goal is understanding, not managing.
                </p>
              </div>
              <div className={styles.workImage}>
                <Image
                  src="/images/room-opt.jpg"
                  alt="Therapy room at Colchester Business Centre — comfortable seating and calming atmosphere"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className={styles.image}
                />
              </div>
            </div>
          </section>

          {/* Section 4: What I Often Work With */}
          <section className={styles.topicsSection}>
            <div className={styles.topicsContainer}>
              <h2>What I often work with</h2>
              <div className={styles.topicsGrid}>
                <div className={styles.topicItem}>
                  <h3>Burnout and overwhelm</h3>
                  <p>
                    The exhaustion that comes from doing everything right and still feeling like
                    you&apos;re running on empty.
                  </p>
                </div>
                <div className={styles.topicItem}>
                  <h3>Anxiety and overthinking</h3>
                  <p>
                    The mind that won&apos;t switch off, the constant worry, the replaying of
                    conversations at 2am.
                  </p>
                </div>
                <div className={styles.topicItem}>
                  <h3>Self-esteem and self-criticism</h3>
                  <p>
                    The inner voice that&apos;s never satisfied, the feeling that you&apos;re not
                    good enough no matter what you do.
                  </p>
                </div>
                <div className={styles.topicItem}>
                  <h3>Body image and eating difficulties</h3>
                  <p>
                    The complicated relationship with your body that affects how you live, what you
                    avoid, and how you feel about yourself.
                  </p>
                </div>
                <div className={styles.topicItem}>
                  <h3>Identity and life transitions</h3>
                  <p>
                    The sense of not knowing who you are anymore, or the disorientation that comes
                    with major life changes.
                  </p>
                </div>
                <div className={styles.topicItem}>
                  <h3>Relationship patterns</h3>
                  <p>
                    The same dynamics showing up again and again — in friendships, at work, in
                    romantic relationships.
                  </p>
                </div>
                <div className={styles.topicItem}>
                  <h3>High-functioning depression</h3>
                  <p>
                    Getting through each day, hitting your targets, but feeling flat, disconnected,
                    or like you&apos;re just going through the motions.
                  </p>
                </div>
                <div className={styles.topicItem}>
                  <h3>Perfectionism</h3>
                  <p>
                    The impossible standards that drive you forward and wear you down at the same
                    time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: LGBTQ+ Section */}
          <section id="lgbtq" className={styles.lgbtqSection}>
            <div className={styles.lgbtqContainer}>
              <h2>Working with LGBTQ+ women</h2>
              <p>
                I have specific training in working with LGBTQ+ clients and see women navigating
                identity, same-sex relationships, family dynamics, and internalised shame. You
                won&apos;t need to explain your life or come out again — I understand the landscape.
              </p>
              <p>
                Whether you&apos;re dealing with questions about your identity, difficulties in your
                relationship, family pressures, or the weight of expectations you&apos;ve carried
                for years, this is a space where your experience is understood, not pathologised.
              </p>
            </div>
          </section>

          {/* Section 6: Is This Right For You */}
          <section className={styles.fitSection}>
            <div className={styles.fitContainer}>
              <h2>Is this right for you?</h2>
              <p>
                This kind of therapy works best if you want to understand why things keep happening,
                not just stop them from happening. If you&apos;re looking for a short-term course or
                a structured CBT programme, I&apos;m probably not the right fit — but I can point
                you to people who are.
              </p>
              <p>
                I work with women aged 18–40, in-person in Colchester or online across the UK.
                Online sessions are available for anyone 16 or older.
              </p>
              <Link href="/is-this-right-for-you" className={styles.link}>
                See full details on who I work with
              </Link>
            </div>
          </section>

          {/* Section 7: CTA */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContainer}>
              <h2>Book a free 15-minute call</h2>
              <p>
                The free call is an informal 15-minute conversation, not a first session. We use it
                to see whether working together feels right, sort out logistics, and give you a
                chance to ask anything you want to.
              </p>
              <Link href="/book-now" className={buttonStyles.primary}>
                Book a free 15-minute call
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
