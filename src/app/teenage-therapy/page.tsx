import type { Metadata } from 'next';
import Link from 'next/link';
import { TeenageTherapySchema } from '@/components/seo/ServiceSchema';
import styles from './teenage-therapy.module.scss';
import buttonStyles from '../../components/ui/button.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Teenage Therapy Colchester | BACP Teen Therapist | Next Generation',
  description:
    'Professional teenage therapy in Colchester & online. BACP registered therapist helping teens with anxiety, depression, school stress & identity. Confidential support for teenagers & families.',
  keywords: [
    'teenage therapy Colchester',
    'teen therapist Colchester',
    'adolescent therapy Essex',
    'teenage counselling Colchester',
    'teen mental health Colchester',
    'adolescent counselling Essex',
    'teenager therapy near me',
    'teen anxiety therapy',
    'adolescent depression therapy',
    'school anxiety therapy teens',
    'teenage therapy online',
    'BACP teen therapist',
    'confidential teen therapy',
    'teen therapy sessions',
    'adolescent mental health support',
  ],
  authors: [{ name: 'Andreea Horhocea' }],
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/teenage-therapy',
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
    title: 'Teenage Therapy Colchester | Professional Support for Teens',
    description:
      'Expert teenage therapy in Colchester & online. BACP registered therapist providing confidential support for teens facing anxiety, depression & life challenges.',
    url: 'https://nextgentherapy.co.uk/teenage-therapy',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Teenage Therapy Services in Colchester - Next Generation Therapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teenage Therapy Colchester | BACP Registered Therapist',
    description:
      'Professional teenage therapy services in Colchester & online. Confidential support for teens&apos; mental health and wellbeing.',
    images: ['https://nextgentherapy.co.uk/images/default-social-share.jpg'],
  },
};

export default function TeenageTherapyPage() {
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
        name: 'Teenage Therapy',
        item: 'https://nextgentherapy.co.uk/teenage-therapy',
      },
    ],
  };

  return (
    <>
      <TeenageTherapySchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className={styles.page}>
        <div className={styles.main}>
          <section className={styles.heroSection}>
            <h1>Teenage Therapy in Colchester</h1>
            <p className={styles.subtitle}>
              Understanding, confidential therapy support for teenagers navigating the complexities
              of adolescence. A safe space to explore identity, relationships, and life&apos;s
              challenges.
            </p>
          </section>

          <section className={styles.contentSection}>
            <div className={styles.textContainer}>
              <section className={styles.introduction}>
                <h2>Understanding the Teenage Experience</h2>
                <p>
                  Being a teenager can feel overwhelming. You&apos;re trying to figure out who you
                  are, where you fit in, and what you want from life, all while dealing with school
                  pressure, family expectations, changing friendships, and a body and brain that
                  sometimes feel completely out of your control.
                </p>
                <p>
                  In my practice in Colchester, I work with teenagers who are struggling with these
                  challenges. Whether you&apos;re feeling anxious, depressed, angry, confused, or
                  just different from everyone else, therapy can provide a space to make sense of
                  your experiences and find your own way forward.
                </p>
              </section>

              <section className={styles.whenToConsider}>
                <h2>Signs You Might Benefit from Therapy</h2>
                <p>
                  You don&apos;t have to be in crisis to benefit from therapy. Sometimes it&apos;s
                  just about having someone to talk to who really understands. You might find
                  therapy helpful if you&apos;re experiencing:
                </p>

                <div className={styles.symptomsGrid}>
                  <div className={styles.symptomCategory}>
                    <h3>Emotional Struggles</h3>
                    <ul>
                      <li>Persistent feelings of sadness or emptiness</li>
                      <li>Anxiety that interferes with daily life</li>
                      <li>Feeling angry or irritable most of the time</li>
                      <li>Emotional numbness or disconnection</li>
                      <li>Overwhelming feelings you can&apos;t understand</li>
                    </ul>
                  </div>

                  <div className={styles.symptomCategory}>
                    <h3>School & Life Challenges</h3>
                    <ul>
                      <li>Difficulty concentrating or completing work</li>
                      <li>School avoidance or refusal</li>
                      <li>Academic pressure and perfectionism</li>
                      <li>Problems with teachers or authority figures</li>
                      <li>Stress about future plans and expectations</li>
                    </ul>
                  </div>

                  <div className={styles.symptomCategory}>
                    <h3>Social & Identity Issues</h3>
                    <ul>
                      <li>Friendship difficulties or social anxiety</li>
                      <li>Feeling different or like you don&apos;t belong</li>
                      <li>Questions about identity, sexuality, or gender</li>
                      <li>Relationship problems or romantic stress</li>
                      <li>Family conflicts or communication issues</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className={styles.approach}>
                <h2>My Approach to Teenage Therapy</h2>
                <p>
                  Working with teenagers requires respect, authenticity, and genuine understanding
                  of the unique challenges you face. I don&apos;t treat teenagers like children or
                  try to be your friend—I&apos;m here as a professional who genuinely cares about
                  helping you navigate this complex time in your life.
                </p>

                <div className={styles.approachPoints}>
                  <div className={styles.point}>
                    <h3>Your Space, Your Pace</h3>
                    <p>
                      Therapy sessions are led by you. You choose what to talk about and how deep to
                      go. There&apos;s no pressure to share everything immediately—trust builds over
                      time.
                    </p>
                  </div>

                  <div className={styles.point}>
                    <h3>Confidentiality Respected</h3>
                    <p>
                      What we discuss stays between us, with only rare exceptions for safety. You
                      have the right to privacy and to speak freely without worry about parents
                      being told everything.
                    </p>
                  </div>

                  <div className={styles.point}>
                    <h3>No Judgment Zone</h3>
                    <p>
                      Whether you&apos;re dealing with identity questions, relationship drama,
                      family conflict, or mental health struggles, this is a space free from
                      judgment or unsolicited advice.
                    </p>
                  </div>
                </div>
              </section>

              <section className={styles.commonConcerns}>
                <h2>Common Issues I Help Teenagers With</h2>
                <div className={styles.concernsGrid}>
                  <div className={styles.concern}>
                    <h3>Anxiety & Overwhelm</h3>
                    <p>
                      From social anxiety to panic attacks to general worry about everything, I help
                      teens understand and manage anxiety in practical, sustainable ways.
                    </p>
                  </div>

                  <div className={styles.concern}>
                    <h3>Depression & Low Mood</h3>
                    <p>
                      When life feels heavy, empty, or pointless, therapy can help you understand
                      these feelings and find ways to reconnect with things that matter to you.
                    </p>
                  </div>

                  <div className={styles.concern}>
                    <h3>School Stress</h3>
                    <p>
                      Academic pressure, perfectionism, social dynamics, and future planning can
                      create overwhelming stress. I help teens find balance and perspective.
                    </p>
                  </div>

                  <div className={styles.concern}>
                    <h3>Identity & Self-Worth</h3>
                    <p>
                      Questions about who you are, your sexuality, your values, and your place in
                      the world are normal but can feel isolating. Therapy provides space to explore
                      safely.
                    </p>
                  </div>

                  <div className={styles.concern}>
                    <h3>Family Relationships</h3>
                    <p>
                      Conflicts with parents, feeling misunderstood, or navigating changing family
                      dynamics while asserting your independence and autonomy.
                    </p>
                  </div>

                  <div className={styles.concern}>
                    <h3>Trauma & Difficult Experiences</h3>
                    <p>
                      Whether it&apos;s bullying, abuse, loss, or other difficult experiences,
                      trauma-informed therapy helps you process and heal at your own pace.
                    </p>
                  </div>
                </div>
              </section>

              <section className={styles.forParents}>
                <h2>Information for Parents</h2>
                <p>
                  Supporting a teenager through therapy means finding the right balance between
                  involvement and giving them space. Most teenagers benefit from knowing their
                  parents support their therapy while respecting their need for privacy and
                  autonomy.
                </p>
                <p>
                  I&apos;m happy to provide general updates about progress and offer guidance on how
                  to support your teenager at home, while maintaining the confidential therapeutic
                  relationship that&apos;s essential for their growth.
                </p>
                <div className={styles.parentResources}>
                  <Link
                    href="/blog/adolescent-depression-struggles"
                    className={styles.resourceLink}
                  >
                    Read: Understanding Adolescent Depression
                  </Link>
                  <Link
                    href="/blog/understanding-anxiety-young-people"
                    className={styles.resourceLink}
                  >
                    Read: Anxiety in Young People
                  </Link>
                </div>
              </section>

              <section className={styles.practicalInfo}>
                <h2>What to Expect from Teenage Therapy</h2>
                <div className={styles.expectationsList}>
                  <div className={styles.expectation}>
                    <h3>First Session</h3>
                    <p>
                      We&apos;ll start by talking about what brought you to therapy and what
                      you&apos;re hoping for. There&apos;s no pressure to open up
                      immediately—we&apos;ll go at your pace.
                    </p>
                  </div>

                  <div className={styles.expectation}>
                    <h3>Building Trust</h3>
                    <p>
                      Early sessions focus on getting comfortable and building trust. You&apos;ll
                      get a sense of my approach and whether you feel understood and supported.
                    </p>
                  </div>

                  <div className={styles.expectation}>
                    <h3>Exploring Issues</h3>
                    <p>
                      As trust develops, we&apos;ll explore the issues that matter most to you,
                      understanding patterns and developing strategies that actually work for your
                      life.
                    </p>
                  </div>

                  <div className={styles.expectation}>
                    <h3>Your Journey</h3>
                    <p>
                      Therapy length varies depending on what you&apos;re working on. Some teens
                      benefit from short-term support; others prefer longer-term work as they
                      navigate adolescence.
                    </p>
                  </div>
                </div>
              </section>

              <section className={styles.callToAction}>
                <h2>Ready to Take the First Step?</h2>
                <p>
                  Whether you&apos;re thinking about therapy for yourself or a parent is encouraging
                  you to try it, taking that first step can feel daunting. I&apos;m here to make it
                  as comfortable as possible and to help you figure out if therapy might be useful
                  for you.
                </p>
                <div className={styles.ctaButtons}>
                  <Link href="/contact" className={buttonStyles.button}>
                    Book a Consultation
                  </Link>
                  <Link href="/about" className={buttonStyles.button}>
                    Learn About My Approach
                  </Link>
                </div>
                <p className={styles.contactNote}>
                  <strong>Location:</strong> I offer teenage therapy sessions in Colchester and
                  online.
                  <Link href="/pricing">View pricing information</Link> or
                  <Link href="/about">learn more about my background and qualifications</Link>.
                </p>
              </section>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
