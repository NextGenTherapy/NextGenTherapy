import type { Metadata } from 'next';
import Link from 'next/link';

import PageHero from '@/components/ui/PageHero';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

import buttonStyles from '../../components/ui/button.module.scss';
import styles from './is-this-right-for-you.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Is Psychodynamic Therapy Right For You? | Honest Guide',
  description:
    "Honest guide to whether psychodynamic therapy suits you. What I offer, what I don't, and where else to look. Colchester & online.",
  keywords: [
    'is therapy right for me',
    'psychodynamic therapy explained',
    'therapy expectations',
    'psychodynamic vs CBT',
    'Colchester therapist',
    'what to expect therapy',
    'how to choose therapist',
    'first therapy session',
    'psychodynamic vs cognitive behavioural therapy',
    'open-ended therapy',
    'finding right therapist',
  ],
  authors: [{ name: 'Andreea Horhocea' }],
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/is-this-right-for-you',
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
    title: 'Is Psychodynamic Therapy Right For You? | Honest Guide | Next Generation Therapy',
    description:
      "An honest guide to whether I'm the right therapist for you — what psychodynamic therapy offers, what I don't do, and where to go if I'm not a fit.",
    url: 'https://nextgentherapy.co.uk/is-this-right-for-you',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Is Psychodynamic Therapy Right For You? — Next Generation Therapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is Psychodynamic Therapy Right For You? | Honest Guide',
    description:
      "An honest guide to whether I'm the right therapist for you — what psychodynamic therapy offers, what I don't do, and where to go if I'm not a fit.",
    images: ['https://nextgentherapy.co.uk/images/default-social-share.jpg'],
  },
};

export default function IsThisRightForYouPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is psychodynamic therapy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Psychodynamic therapy is a form of talk therapy that explores how your past experiences, relationships, and unconscious patterns affect your current life. Unlike CBT which focuses on changing specific thoughts and behaviours, psychodynamic work aims to understand why patterns keep repeating and what your feelings are trying to tell you.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does psychodynamic therapy take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Psychodynamic therapy is open-ended, meaning we don't set a fixed number of sessions in advance. Some people stay for a few months, some for years. The work continues as long as it's useful. This isn't about prolonging therapy unnecessarily — it's about giving the process the time it needs without artificial deadlines.",
        },
      },
      {
        '@type': 'Question',
        name: 'What happens in the first therapy session?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The first session is mostly about getting to know each other. I\'ll ask what brought you to therapy and listen to your story. We won\'t dive into deep exploration straight away — the first priority is making sure you feel comfortable enough to want to come back.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is psychodynamic therapy better than CBT?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Neither is objectively better — they're different tools for different needs. CBT is often helpful for specific, concrete problems where you want practical strategies quickly. Psychodynamic therapy suits people who want to understand the deeper patterns in their life and are willing to take the time to explore them. If you're not sure which is right for you, we can discuss it in a free 15-minute call.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Section 1: Hero */}
      <PageHero
        eyebrow="Is This Right For You?"
        title="I'm not the right therapist for everyone. Let's work out whether I'm right for you."
        lead="Therapists don't usually write pages like this, which is maybe why so many first sessions end in a mismatch. Before you book anything, here's an honest look at how I work, what I do well, and what I don't offer — so you can decide with full information."
      />

      <div className={styles.page}>
        <main className={styles.main}>
          {/* Section 2: What I actually do */}
          <section className={styles.surfaceSection}>
            <div className={styles.narrowContainer}>
              <h2>What I actually do</h2>
              <p>
                I&apos;m a psychodynamic psychotherapist. In practical terms, that means:
              </p>
              <p>
                <strong>We meet weekly, in 50-minute sessions.</strong> Same day, same time,
                ideally for as long as we&apos;re working together.
              </p>
              <p>
                <strong>The work is open-ended.</strong> We don&apos;t start with a fixed number
                of sessions or a predetermined structure. Some people work with me for a few months
                around a specific life event. Others stay for a few years because the patterns
                we&apos;re working with took a long time to form and take a while to loosen.
                We review how things are going as we go.
              </p>
              <p>
                <strong>The focus is on understanding, not techniques.</strong> Rather than giving
                you tools to manage symptoms, we try to understand why certain patterns — overthinking,
                anxiety, avoidance, self-criticism, whatever&apos;s brought you here — keep showing up
                in your life. Where they came from, what they&apos;re protecting, and what it would
                mean to work with them differently.
              </p>
              <p>
                <strong>We take your inner life seriously.</strong> Dreams, feelings that don&apos;t
                make sense, memories that come up unexpectedly, the things you haven&apos;t said out
                loud to anyone — all of that is part of the material we work with.
              </p>
              <p>
                <strong>I&apos;ll draw on other approaches when they help.</strong> Mindfulness, some
                CBT-informed tools, creative work with younger clients, writing prompts between
                sessions — but the foundation is always psychodynamic.
              </p>
            </div>
          </section>

          {/* Section 3: What I don't do — and who does */}
          <section className={styles.normalSection}>
            <div className={styles.narrowContainer}>
              <h2>What I don&apos;t do — and who does</h2>
              <p>
                If you&apos;re looking for something I don&apos;t offer, here are some places that
                might be a better fit:
              </p>
              <ul className={styles.alternativesList}>
                <li>
                  <strong>Short-term or solution-focused therapy</strong> — If you want a structured
                  programme with a set number of sessions and clear goals, try{' '}
                  <a
                    href="https://www.therapyforyou.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    NHS Therapy For You
                  </a>{' '}
                  (free NHS service for Essex) or search the{' '}
                  <a
                    href="https://www.bacp.co.uk/search/Therapists"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    BACP therapist directory
                  </a>{' '}
                  or{' '}
                  <a
                    href="https://www.counselling-directory.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Counselling Directory
                  </a>{' '}
                  to find a therapist who offers short-term work.
                </li>
                <li>
                  <strong>CBT (Cognitive Behavioural Therapy)</strong> — If you want to focus on
                  changing specific thoughts and behaviours with practical exercises, the{' '}
                  <a
                    href="https://www.cbtregisteruk.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    BABCP register
                  </a>{' '}
                  can help you find an accredited CBT therapist.
                </li>
                <li>
                  <strong>Couples therapy</strong> — I only work with individuals.{' '}
                  <a
                    href="https://www.relate.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Relate
                  </a>{' '}
                  offers couples counselling, including online.
                </li>
                <li>
                  <strong>Addiction (without wraparound support)</strong> — I can work with people in
                  recovery, but if you&apos;re currently in active addiction without other support in
                  place, you need specialist help first.{' '}
                  <a
                    href="https://openroad.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Open Road
                  </a>{' '}
                  provides free addiction services in Essex.
                </li>
                <li>
                  <strong>Forensic work or open court cases</strong> — I don&apos;t provide court
                  reports or work with clients involved in ongoing legal proceedings.
                </li>
                <li>
                  <strong>Active psychosis</strong> — If you&apos;re experiencing psychosis, you need
                  a specialist team, not weekly talking therapy.
                </li>
              </ul>
              <p>
                I&apos;d rather point you toward the right help than have you book with me and realise
                it&apos;s not what you needed.
              </p>
            </div>
          </section>

          {/* Section 4: When I'm probably the right therapist for you */}
          <section className={styles.surfaceSection}>
            <div className={styles.sectionContainer}>
              <h2>When I&apos;m probably the right therapist for you</h2>
              <p>
                You don&apos;t need to tick every box. But if several of these sound familiar,
                we&apos;re probably a good fit:
              </p>
              <ul className={styles.fitList}>
                <li>
                  You&apos;ve tried short-term therapy or CBT and it helped a bit, but you didn&apos;t
                  quite get where you needed to go
                </li>
                <li>
                  You want to understand <em>why</em> the same patterns keep repeating in your life,
                  not just manage the symptoms
                </li>
                <li>
                  You&apos;re willing to commit to weekly sessions and give the work time to unfold
                </li>
                <li>
                  You&apos;re a{' '}
                  <Link href="/therapy-for-women" className={styles.link}>
                    woman dealing with burnout, anxiety, overthinking, self-worth questions, body
                    image, or identity
                  </Link>
                </li>
                <li>
                  You&apos;re a{' '}
                  <Link href="/neurodiversity" className={styles.link}>
                    neurodivergent adult (ADHD, autism)
                  </Link>{' '}
                  looking for an affirmative therapist who won&apos;t try to &ldquo;fix&rdquo; you
                </li>
                <li>
                  You&apos;re a parent looking for therapy for your{' '}
                  <Link href="/teen-therapy" className={styles.link}>
                    teenager
                  </Link>{' '}
                  or{' '}
                  <Link href="/child-therapy" className={styles.link}>
                    child
                  </Link>{' '}
                  (ages 4–17, in-person only)
                </li>
                <li>
                  You&apos;re a{' '}
                  <Link href="/romanian-therapy" className={styles.link}>
                    Romanian speaker
                  </Link>{' '}
                  and want therapy in your first language
                </li>
                <li>
                  You&apos;re anywhere in the UK and want{' '}
                  <Link href="/online-therapy" className={styles.link}>
                    online therapy
                  </Link>{' '}
                  (available for age 16+)
                </li>
                <li>
                  You want an honest therapist who will tell you what she sees, not just reflect
                  things back
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5: When I'm probably not */}
          <section className={styles.notRightSection}>
            <div className={styles.sectionContainer}>
              <h2>When I&apos;m probably not the right therapist</h2>
              <ul className={styles.notFitList}>
                <li>
                  You want a 6-session plan with homework, goals, and measurable outcomes
                </li>
                <li>
                  You want advice, coaching, or someone to tell you what to do
                </li>
                <li>You&apos;re looking for couples therapy</li>
              </ul>
              <p>
                None of these make you a bad fit for therapy — just for therapy with me. There are
                excellent therapists who specialise in exactly what you need.
              </p>

              {/* Crisis signposting */}
              <div className={styles.crisisBox}>
                <h3>If you&apos;re in crisis right now</h3>
                <p>
                  If you&apos;re in immediate danger or need urgent support, please contact:
                </p>
                <div className={styles.crisisGrid}>
                  <div className={styles.crisisItem}>
                    <h4>NHS 111</h4>
                    <p>
                      Call <strong>111</strong>, press option 2 for the mental health crisis line.
                      Available 24/7.
                    </p>
                  </div>
                  <div className={styles.crisisItem}>
                    <h4>Shout</h4>
                    <p>
                      Text <strong>85258</strong> for free, confidential 24/7 text support.
                    </p>
                  </div>
                  <div className={styles.crisisItem}>
                    <h4>Your GP</h4>
                    <p>For an emergency same-day appointment.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: What the first session is actually like */}
          <section className={styles.normalSection}>
            <div className={styles.narrowContainer}>
              <h2>What the first session is actually like</h2>
              <p>
                Before any session, there&apos;s a <strong>free 15-minute phone call</strong>. This
                isn&apos;t therapy — it&apos;s a vibe check for both of us. You can ask me anything,
                I can hear a bit about what&apos;s brought you here, and we both get a sense of
                whether this feels like it could work.
              </p>
              <p>
                If we decide to go ahead, the first proper session is about getting to know each
                other. I&apos;ll ask what brought you to therapy and then mostly listen. We won&apos;t
                dive into deep exploration straight away — the first priority is making sure you feel
                comfortable enough with me to want to come back.
              </p>
              <p>
                There&apos;s no assessment, no form-filling, no clinical checklist. Just two people in
                a room (or on a screen), working out whether they can talk to each other.
              </p>
              <p className={styles.quote}>
                &ldquo;I take comfort and fit seriously. No amount of clinical skill replaces the
                feeling of sitting across from someone you can actually talk to.&rdquo;
              </p>
            </div>
          </section>

          {/* Section 7: CTA */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContainer}>
              <h2>Still think I might be a fit?</h2>
              <p>
                Book a free 15-minute call and we can take it from there.
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
