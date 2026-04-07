import type { Metadata } from 'next';
import Link from 'next/link';

import PageHero from '@/components/ui/PageHero';
import styles from './neurodiversity.module.scss';
import buttonStyles from '../../components/ui/button.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'ADHD & Autism Therapy for Adults — Colchester & Online | Affirmative Practice',
  description:
    'Psychodynamic, affirmative therapy for neurodivergent adults in Colchester and online. Sensory-aware room, stimming welcome, no formal diagnosis required. BACP registered.',
  keywords: [
    'ADHD therapy Colchester',
    'autism therapy Essex',
    'neurodivergent therapist UK',
    'adult ADHD therapy Essex',
    'adult autism support Colchester',
    'affirmative autism therapy',
    'late diagnosed ADHD support',
    'neurodivergent-affirming therapist',
    'sensory-friendly therapy room',
    'AuDHD therapy Colchester',
    'ADHD burnout therapy',
    'autistic therapist Essex',
    'neurodiversity-affirming practice',
    'masking burnout support',
  ],
  authors: [{ name: 'Andreea Horhocea' }],
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/neurodiversity',
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
    title: 'ADHD & Autism Therapy for Adults — Colchester & Online | Affirmative Practice',
    description:
      'Psychodynamic, affirmative therapy for neurodivergent adults in Colchester and online. Sensory-aware room, stimming welcome, no formal diagnosis required.',
    url: 'https://nextgentherapy.co.uk/neurodiversity',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'ADHD & Autism Therapy for Adults — Next Generation Therapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADHD & Autism Therapy for Adults — Colchester & Online | Affirmative Practice',
    description:
      'Psychodynamic, affirmative therapy for neurodivergent adults in Colchester and online. Sensory-aware room, stimming welcome.',
    images: ['https://nextgentherapy.co.uk/images/default-social-share.jpg'],
  },
};

export default function NeurodiversityTherapyPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Affirmative Therapy for Neurodivergent Adults',
    provider: {
      '@type': 'Person',
      name: 'Andreea Horhocea',
      jobTitle: 'Psychodynamic Psychotherapist',
    },
    serviceType: ['ADHD Therapy', 'Autism Therapy', 'Neurodivergent-Affirmative Therapy'],
    areaServed: ['Colchester', 'Essex', 'United Kingdom (online)'],
    availableLanguage: ['English', 'Romanian'],
    description:
      'Psychodynamic, affirmative therapy for neurodivergent adults including ADHD and autism. Sensory-aware room in Colchester, online sessions UK-wide. No formal diagnosis required.',
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
        name: 'Neurodiversity Therapy',
        item: 'https://nextgentherapy.co.uk/neurodiversity',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need a formal diagnosis to work with you?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "No. NHS assessment waitlists are years long, and many people self-identify long before they get a diagnosis — if they ever do. If you recognise yourself as ADHD or autistic, that's enough to start working together.",
        },
      },
      {
        '@type': 'Question',
        name: 'What does affirmative practice mean?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Affirmative practice means I'm not trying to fix, reduce, or mask your neurodivergence. I work with you as you are, not towards some neurotypical standard. The goal is understanding yourself better and building a life that works for your brain.",
        },
      },
      {
        '@type': 'Question',
        name: 'What makes your therapy room sensory-friendly?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The room has soft, adjustable lighting, fidgets available for any age, comfortable seating options, and plants. Stimming is welcome. The space is designed to reduce overwhelm rather than add to it.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer online sessions for neurodivergent clients?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, I see neurodivergent adults online across the UK. Many neurodivergent clients actually prefer online — you're in your own space, with your own lighting and sensory setup, and no travel required.",
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
        eyebrow="ADHD & Autism in Adults"
        title="Affirmative therapy. Sensory-aware room. Stimming welcome."
        lead="Psychodynamic therapy for neurodivergent adults in Colchester and online. For people who've been late-diagnosed, self-identified, or finally had the words for it after their child's assessment."
      />

      <div className={styles.page}>
        <main className={styles.main}>
          {/* Section 2: Recognition */}
          <section className={styles.recognitionSection}>
            <div className={styles.recognitionContainer}>
              <h2 className={styles.recognitionHeading}>
                If you&apos;re reading this, you might already know
              </h2>
              <ul className={styles.quoteList}>
                <li className={styles.quote}>
                  &ldquo;I&apos;ve spent my whole life feeling like everyone got a manual I
                  didn&apos;t.&rdquo;
                </li>
                <li className={styles.quote}>
                  &ldquo;I only found out after my child was diagnosed — and suddenly everything made
                  sense.&rdquo;
                </li>
                <li className={styles.quote}>
                  &ldquo;I&apos;m exhausted from performing being normal.&rdquo;
                </li>
                <li className={styles.quote}>
                  &ldquo;I&apos;m not sure if I&apos;m autistic or ADHD or both — I just know
                  something&apos;s different.&rdquo;
                </li>
                <li className={styles.quote}>
                  &ldquo;I mask so well that no one believes me when I say I&apos;m
                  struggling.&rdquo;
                </li>
              </ul>
              <p className={styles.recognitionNote}>
                Many of my neurodivergent clients have spent years adapting to a world that
                wasn&apos;t built for them. Therapy isn&apos;t about adapting harder. It&apos;s
                about understanding yourself and building a life that actually works for your brain.
              </p>
            </div>
          </section>

          {/* Section 3: Approach */}
          <section className={styles.approachSection}>
            <div className={styles.approachContainer}>
              <h2>How I work (and what I don&apos;t do)</h2>
              <p>
                I&apos;m a psychodynamic therapist with post-qualification training in
                neurodiversity. That means I&apos;m interested in the whole of you — not just your
                symptoms or your strategies for getting through the day.
              </p>
              <p>
                We&apos;ll talk about what it&apos;s been like to be you. The ways you&apos;ve
                adapted. What got missed. What you&apos;re only just realising. What might need to
                change — and what doesn&apos;t need fixing at all.
              </p>
              <p>
                This is weekly, open-ended work. Some people come for a few months around a specific
                issue. Others stay longer, because they&apos;ve spent a lifetime not being
                understood and need time to untangle that.
              </p>

              <h3 className={styles.subheading}>What I don&apos;t do</h3>
              <ul className={styles.notList}>
                <li>
                  <strong>I don&apos;t do ABA or any approach that treats neurodivergence as a
                  problem to be corrected.</strong>
                </li>
                <li>
                  <strong>I don&apos;t teach masking strategies</strong> — you&apos;ve probably got
                  enough of those already.
                </li>
                <li>
                  <strong>I don&apos;t offer short-term skills programmes.</strong> If you want a
                  6-week ADHD toolkit, I&apos;m not the right fit — but there are people who do that
                  well.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: The Room (KEY DIFFERENTIATOR) */}
          <section className={styles.roomSection}>
            <div className={styles.roomContainer}>
              <h2>The room matters</h2>
              <p className={styles.roomIntro}>
                If you&apos;re coming in person, you&apos;ll be at my room in Colchester Business
                Centre. I&apos;ve set it up with neurodivergent clients in mind:
              </p>
              <ul className={styles.roomFeatures}>
                <li>
                  <strong>Soft, adjustable lighting</strong> — no harsh overhead fluorescents
                </li>
                <li>
                  <strong>Fidgets available</strong> — for any age, no questions asked
                </li>
                <li>
                  <strong>Stimming is welcome</strong> — move however you need to
                </li>
                <li>
                  <strong>Comfortable seating options</strong> — couch and chairs
                </li>
                <li>
                  <strong>Calm atmosphere</strong> — plants, quiet, ground floor
                </li>
              </ul>
              <p className={styles.roomNote}>
                The space shouldn&apos;t add to your overwhelm. It should reduce it.
              </p>
              {/* {{ CONFIRM WITH ANDREEA: room photo }} */}
            </div>
          </section>

          {/* Section 5: Challenges */}
          <section className={styles.challengesSection}>
            <div className={styles.challengesContainer}>
              <h2>What neurodivergent adults often come to me with</h2>
              <div className={styles.challengesGrid}>
                <div className={styles.challengeItem}>
                  <h3>Burnout from masking</h3>
                  <p>
                    Years of performing &ldquo;normal&rdquo; catch up with you. The exhaustion goes
                    deeper than rest can fix.
                  </p>
                </div>
                <div className={styles.challengeItem}>
                  <h3>Late diagnosis grief</h3>
                  <p>
                    The relief of finally knowing, mixed with anger about everything that could have
                    been different.
                  </p>
                </div>
                <div className={styles.challengeItem}>
                  <h3>Anxiety</h3>
                  <p>
                    Often lifelong, often misdiagnosed. The hypervigilance that comes from always
                    having to work harder to fit in.
                  </p>
                </div>
                <div className={styles.challengeItem}>
                  <h3>Relationships and communication</h3>
                  <p>
                    Misunderstandings, feeling like you&apos;re always getting it wrong, not knowing
                    why connection feels so hard.
                  </p>
                </div>
                <div className={styles.challengeItem}>
                  <h3>Rejection sensitivity</h3>
                  <p>
                    The intensity of feeling rejected or criticised — and how much it shapes what
                    you do and don&apos;t do.
                  </p>
                </div>
                <div className={styles.challengeItem}>
                  <h3>Identity questions</h3>
                  <p>
                    Who am I when I stop performing? What do I actually want — not what I&apos;ve
                    been told to want?
                  </p>
                </div>
                <div className={styles.challengeItem}>
                  <h3>Executive function struggles</h3>
                  <p>
                    Not a skills deficit — often the shame and frustration that comes with a brain
                    that doesn&apos;t work the way people expect.
                  </p>
                </div>
                <div className={styles.challengeItem}>
                  <h3>Parenting as a neurodivergent adult</h3>
                  <p>
                    Raising kids when your own needs are high. Managing your regulation alongside
                    theirs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Diagnosis */}
          <section className={styles.diagnosisSection}>
            <div className={styles.diagnosisContainer}>
              <h2>You don&apos;t need a formal diagnosis</h2>
              <p>
                NHS ADHD and autism assessment waitlists are years long in most areas. Many people
                self-identify long before they ever get on a list — if they pursue assessment at
                all.
              </p>
              <p>
                If you recognise yourself as ADHD, autistic, or both, that&apos;s enough. You
                don&apos;t need to prove anything to me. We work with your experience, not a piece
                of paper.
              </p>
            </div>
          </section>

          {/* Section 7: Online */}
          <section className={styles.onlineSection}>
            <div className={styles.onlineContainer}>
              <h2>Online therapy for neurodivergent adults</h2>
              <p>
                Many neurodivergent clients actually prefer online. You&apos;re in your own space,
                with your own lighting and sensory setup. No travel, no waiting rooms, no
                transition stress.
              </p>
              <p>
                I see neurodivergent adults online across the UK. If you&apos;re 16 or over, online
                is an option.
              </p>
              <Link href="/online-therapy" className={styles.link}>
                More about online therapy →
              </Link>
            </div>
          </section>

          {/* Section 8: CTA */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContainer}>
              <h2>Book a free 15-minute call</h2>
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
        </main>
      </div>
    </>
  );
}
