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
            <div className={styles.narrowContainer}>
              <h2>If you&apos;re reading this, you might already know</h2>
              <p>
                You might have been diagnosed recently. You might be self-identified and reading
                everything you can. You might have spent forty years being told you were lazy, too
                sensitive, too much, or not enough — and somewhere along the way you started to
                believe it.
              </p>
              <p>
                I work with neurodivergent adults who are tired of masking, tired of being told to
                try harder, and looking for a therapist who isn&apos;t going to treat ADHD or autism
                as a problem to be solved.
              </p>
            </div>
          </section>

          {/* Section 3: Approach */}
          <section className={styles.approachSection}>
            <div className={styles.approachContainer}>
              <h2>How I work</h2>
              <p>
                My practice is affirmative. That means I start from the assumption that your brain
                works the way it works, and the goal isn&apos;t to make it look like a neurotypical
                one. The goal is to understand how you actually function, what&apos;s been costing
                you, what&apos;s been hidden, and what would make your life feel more like your own.
              </p>
              <p>
                I&apos;ve completed specific post-qualification training in neurodiversity,
                alongside my MSc in Psychodynamic Psychotherapy. I&apos;ve worked in SEN provision
                at Sir Bobby Robson School in Ipswich and in primary and secondary schools with Mind
                and the YMCA. Most of what I&apos;ve learned, though, has come from working with
                neurodivergent clients in private practice — many of whom knew more about their own
                neurotype than any textbook I could read.
              </p>

              <h3 className={styles.subheading}>What I don&apos;t do</h3>
              <p>
                I don&apos;t do ADHD or autism &ldquo;coaching&rdquo; — I&apos;m a therapist, not a
                behavioural trainer. I don&apos;t try to reduce stimming, eye contact avoidance, or
                other regulating behaviours. I don&apos;t require a formal diagnosis for you to work
                with me. And I don&apos;t pathologise the parts of you that are actually adaptations
                to a world that wasn&apos;t built for your brain.
              </p>
            </div>
          </section>

          {/* Section 4: The Room (KEY DIFFERENTIATOR) */}
          <section className={styles.roomSection}>
            <div className={styles.roomContainer}>
              <h2>The room matters</h2>
              <p>
                My therapy room is on the ground floor at Colchester Business Centre. It&apos;s
                quiet, it has plants, and the lighting is soft — none of the fluorescent overheads
                you get in most clinical settings. There&apos;s a couch, two comfortable chairs, and
                a desk with fidgets on it. Stimming is welcome. You don&apos;t have to sit still.
                You don&apos;t have to make eye contact. You can move around if you need to, bring a
                drink, take breaks, or ask me to repeat something.
              </p>
              <p>
                None of this is a gimmick. Sensory environment matters for neurodivergent clients,
                and I designed the room knowing that.
              </p>
              {/* {{ CONFIRM WITH ANDREEA: room photo }} */}
            </div>
          </section>

          {/* Section 5: Challenges */}
          <section className={styles.challengesSection}>
            <div className={styles.challengesContainer}>
              <h2>What neurodivergent adults often come to me with</h2>
              <ul className={styles.challengesList}>
                <li>
                  <strong>Burnout from masking</strong> — the exhaustion that comes from years of
                  performing neurotypical
                </li>
                <li>
                  <strong>Late diagnosis grief and relief</strong> — the strange double-feeling of
                  &ldquo;I finally understand&rdquo; and &ldquo;I&apos;ve lost so much time&rdquo;
                </li>
                <li>
                  <strong>Anxiety and overwhelm</strong> — sensory, social, or both
                </li>
                <li>
                  <strong>Relationship difficulties</strong> — especially mixed-neurotype
                  relationships and family dynamics
                </li>
                <li>
                  <strong>Rejection sensitivity</strong> — the pain that doesn&apos;t match the
                  situation
                </li>
                <li>
                  <strong>Identity</strong> — who were you before you started masking, and who are
                  you now
                </li>
                <li>
                  <strong>Executive function and self-compassion</strong> — not skills-based
                  coaching, but the emotional work underneath the struggle
                </li>
                <li>
                  <strong>Parenting a neurodivergent child while being one yourself</strong> — the
                  exhaustion no one talks about
                </li>
              </ul>
            </div>
          </section>

          {/* Section 6: Diagnosis */}
          <section className={styles.diagnosisSection}>
            <div className={styles.narrowContainer}>
              <h2>You don&apos;t need a formal diagnosis</h2>
              <p>
                If you&apos;ve identified yourself as autistic, ADHD, or both — that&apos;s enough
                for me. NHS waiting lists for assessment are years long and private assessment is
                expensive. I work with self-identified clients, and I treat your understanding of
                your own neurotype as credible.
              </p>
            </div>
          </section>

          {/* Section 7: Online */}
          <section className={styles.onlineSection}>
            <div className={styles.narrowContainer}>
              <h2>Online therapy for neurodivergent adults</h2>
              <p>
                I work online on Wednesdays, UK-wide, for clients aged 16 and over. For a lot of
                neurodivergent adults, online therapy is more accessible than in-person — no
                commute, familiar environment, ability to fidget off-camera, no fluorescent waiting
                room. If that&apos;s what works for you, it works for me.
              </p>
              <Link href="/online-therapy" className={styles.link}>
                More about online therapy →
              </Link>
            </div>
          </section>

          {/* Section 8: CTA */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContainer}>
              <h2>Start with a free 15-minute call</h2>
              <p>
                If you want to ask about the approach, the room, online options, or anything else —
                the free call is the place to do it. It&apos;s 15 minutes, informal, and you can ask
                absolutely anything.
              </p>
              <Link href="/book-now" className={buttonStyles.primary}>
                Book a Free 15-Minute Call
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
