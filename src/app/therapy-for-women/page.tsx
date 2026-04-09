import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import PageHero from '@/components/ui/PageHero';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import styles from './therapy-for-women.module.scss';
import buttonStyles from '../../components/ui/button.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Therapy for Women | Colchester & Online | Burnout',
  description:
    'Psychodynamic therapy for women dealing with burnout, overthinking, anxiety, body image and self-worth. Colchester & online. BACP registered.',
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
        url: 'https://nextgentherapy.co.uk/images/og/og-therapy-for-women.jpg',
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
    images: ['https://nextgentherapy.co.uk/images/og/og-therapy-for-women.jpg'],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow="Therapy for Women"
        title="You look fine. You're not fine."
        lead="For the overthinking, the burnout, the body image stuff, the 'I don't know who I am anymore.' Psychodynamic therapy for women in Colchester and online, with a therapist who takes your inner life seriously."
      />

      <div className={styles.page}>
        <main className={styles.main}>
          {/* Section 2: Recognition Pull-Quotes */}
          <section className={styles.recognitionSection}>
            <div className={styles.recognitionContainer}>
              <h2 className={styles.recognitionHeading}>You might recognise yourself here</h2>
              <p className={styles.recognitionIntro}>
                Most of the women I work with say some version of the same thing in the first
                session. If any of these sound familiar, you&apos;re in the right place.
              </p>
              <ul className={styles.quoteList}>
                <li className={styles.quote}>&ldquo;I can&apos;t stop overthinking.&rdquo;</li>
                <li className={styles.quote}>
                  &ldquo;I&apos;m avoiding situations because of how I feel about my body.&rdquo;
                </li>
                <li className={styles.quote}>
                  &ldquo;I feel stuck and burnt out, but I can&apos;t stop doing any of the things
                  that are burning me out.&rdquo;
                </li>
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
                  &ldquo;I feel like I&apos;m failing at everything — even though everyone tells me
                  I&apos;m doing well.&rdquo;
                </li>
                <li className={styles.quote}>&ldquo;I can&apos;t switch off.&rdquo;</li>
              </ul>
              <p className={styles.recognitionNote}>
                These aren&apos;t symptoms to be tidied up in six sessions. They&apos;re usually
                telling you something important about how you&apos;ve been living, and what&apos;s
                been asked of you for a long time. That&apos;s the work I do.
              </p>
            </div>
          </section>

          {/* Section 3: How I Work */}
          <section className={styles.workSection}>
            <div className={styles.workContent}>
              <div className={styles.workText}>
                <h2>How I work</h2>
                <p>
                  I&apos;m a psychodynamic therapist, which means we don&apos;t start with a
                  worksheet. We start with what&apos;s on your mind today, and we notice what comes
                  up — patterns, feelings you weren&apos;t expecting, things you haven&apos;t said
                  out loud before. Over time, we build a shared understanding of why you are the way
                  you are, and what you&apos;d like to be different.
                </p>
                <p>
                  This is weekly, open-ended work. Some women come for a few months around a
                  specific life event. Others stay longer, because the patterns we&apos;re working
                  with took a long time to form and take a while to loosen.
                </p>
                <p>
                  I draw on other approaches when they help — mindfulness, some CBT-informed tools,
                  writing prompts between sessions. But the foundation is psychodynamic: slow,
                  considered, and curious about the whole of you.
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
                    Especially the kind that hides behind competence — the exhaustion that comes from
                    doing everything right and still feeling like you&apos;re running on empty.
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
                    The internal voice that never lets up — never satisfied, always telling you
                    you&apos;re not good enough no matter what you do.
                  </p>
                </div>
                <div className={styles.topicItem}>
                  <h3>Body image and disordered eating</h3>
                  <p>
                    Including patterns you haven&apos;t called disordered before — the complicated
                    relationship with your body that affects how you live, what you avoid, and how
                    you feel about yourself.
                  </p>
                </div>
                <div className={styles.topicItem}>
                  <h3>Identity and life transitions</h3>
                  <p>
                    &ldquo;I don&apos;t know who I am anymore&rdquo; — the disorientation that comes
                    with major life changes, or when everything looks fine but something feels wrong.
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
                    The kind that looks like productivity — getting through each day, hitting your
                    targets, but feeling flat, disconnected, or like you&apos;re just going through
                    the motions.
                  </p>
                </div>
                <div className={styles.topicItem}>
                  <h3>Perfectionism</h3>
                  <p>
                    And what it&apos;s costing you — the impossible standards that drive you forward
                    and wear you down at the same time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: LGBTQ+ Section */}
          <section id="lgbtq" className={styles.lgbtqSection}>
            <div className={styles.lgbtqContainer}>
              <h2>For women in same-sex relationships</h2>
              <p>
                A lot of my LGBTQ+ work is with women in same-sex relationships. Sometimes
                that&apos;s about the relationship itself — dynamics, family, whose family we&apos;re
                at for Christmas, the micro-negotiations of being visible or not visible in
                different contexts. Sometimes it&apos;s about identity: coming out late, internalised
                shame, questions about gender expression that don&apos;t have obvious answers.
              </p>
              <p>
                You won&apos;t need to explain the basics of your life to me, and I&apos;m not going
                to treat your sexuality as the reason you&apos;re in therapy unless you tell me it
                is. I&apos;ve completed specific post-qualification training in working with LGBTQ+
                clients.
              </p>
            </div>
          </section>

          {/* Section 6: Is This Right For You */}
          <section className={styles.fitSection}>
            <div className={styles.fitContainer}>
              <h2>Is this right for you?</h2>
              <p>
                I&apos;m not the right therapist for everyone. If you&apos;re looking for a toolkit,
                a six-week programme, or a CBT approach, we&apos;d be a mismatch — and there are
                good therapists in Colchester who work that way. If you want to understand{' '}
                <em>why</em> the patterns keep showing up and do slow, considered work, that&apos;s
                what I do.
              </p>
              <Link href="/is-this-right-for-you" className={styles.link}>
                More on whether we&apos;re a good fit →
              </Link>
            </div>
          </section>

          {/* Section: Related Services */}
          <section className={styles.relatedSection}>
            <div className={styles.relatedContainer}>
              <h2>You might also be interested in</h2>
              <div className={styles.relatedLinks}>
                <Link href="/neurodiversity" className={styles.relatedLink}>
                  <strong>ADHD &amp; Autism in Adults</strong>
                  <span>
                    If you&apos;re a woman who&apos;s late-diagnosed or self-identified as
                    neurodivergent, you might find this page more specific to your experience.
                  </span>
                </Link>
                <Link href="/romanian-therapy" className={styles.relatedLink}>
                  <strong>Therapy in Romanian</strong>
                  <span>
                    If you&apos;re a Romanian speaker navigating bicultural identity or immigrant
                    experience, I offer sessions in Romanian as well as English.
                  </span>
                </Link>
              </div>
            </div>
          </section>

          {/* Section 7: CTA */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContainer}>
              <h2>Start with a free 15-minute call</h2>
              <p>
                The free call is an informal 15-minute conversation, not a first session. You can
                ask anything you want, I&apos;ll answer honestly, and we&apos;ll decide together
                whether working with me feels like the right next step.
              </p>
              <Link href="/book-now" className={buttonStyles.primary}>
                Book a free 15-minute call
              </Link>
            </div>
          </section>

          {/* Crisis signposting */}
          <section className={styles.crisisSection}>
            <div className={styles.crisisBox}>
              <h2>If you&apos;re in crisis</h2>
              <p>
                I&apos;m not a crisis service and I don&apos;t monitor messages outside of working
                hours. If you or someone you care about is in immediate danger, please contact:
              </p>
              <div className={styles.crisisGrid}>
                <div className={styles.crisisItem}>
                  <h3>NHS 111</h3>
                  <p>
                    Call <strong>111</strong> and press option 2 for the mental health crisis line.
                    Available 24/7.
                  </p>
                </div>
                <div className={styles.crisisItem}>
                  <h3>Samaritans</h3>
                  <p>
                    Call <strong>116 123</strong> (free, 24/7) or email{' '}
                    <a href="mailto:jo@samaritans.org">jo@samaritans.org</a>.
                  </p>
                </div>
                <div className={styles.crisisItem}>
                  <h3>Shout</h3>
                  <p>
                    Text <strong>85258</strong> for free, confidential 24/7 text support.
                  </p>
                </div>
                <div className={styles.crisisItem}>
                  <h3>A&amp;E</h3>
                  <p>
                    If you or someone else is in immediate physical danger, go to your nearest
                    A&amp;E or call <strong>999</strong>.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <BreadcrumbSchema />
    </>
  );
}
