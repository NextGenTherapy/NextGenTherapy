import type { Metadata } from 'next';
import Link from 'next/link';
import { YoungAdultTherapySchema } from '@/components/seo/ServiceSchema';
import styles from './young-adult-therapy.module.scss';
import buttonStyles from '../../components/ui/button.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Young Adult Therapy Colchester | BACP Therapist | Next Generation',
  description:
    'Professional young adult therapy in Colchester & online. BACP registered therapist helping with life transitions, career stress, relationships & identity. Expert support for 18-30s.',
  keywords: [
    'young adult therapy Colchester',
    'young adult therapist Essex',
    'therapy for young adults',
    '18-30 therapy Colchester',
    'young adult counselling',
    'life transition therapy',
    'career stress therapy',
    'young adult anxiety therapy',
    'young adult depression therapy',
    'university stress therapy',
    'young adult relationships therapy',
    'emerging adult therapy',
    'quarter life crisis therapy',
    'young professional therapy',
    'young adult mental health Colchester',
  ],
  authors: [{ name: 'Andreea Horhocea' }],
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/young-adult-therapy',
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
    title: 'Young Adult Therapy Colchester | Professional Support 18-30s',
    description:
      'Expert young adult therapy in Colchester & online. BACP registered therapist providing support for life transitions, career stress & relationship challenges.',
    url: 'https://nextgentherapy.co.uk/young-adult-therapy',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Young Adult Therapy Services in Colchester - Next Generation Therapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Young Adult Therapy Colchester | BACP Registered Therapist',
    description:
      'Professional young adult therapy services in Colchester & online. Support for life transitions and emerging adult challenges.',
    images: ['https://nextgentherapy.co.uk/images/default-social-share.jpg'],
  },
};

export default function YoungAdultTherapyPage() {
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
        name: 'Young Adult Therapy',
        item: 'https://nextgentherapy.co.uk/young-adult-therapy',
      },
    ],
  };

  return (
    <>
      <YoungAdultTherapySchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className={styles.page}>
        <div className={styles.main}>
          <section className={styles.heroSection}>
            <h1>Young Adult Therapy in Colchester</h1>
            <p className={styles.subtitle}>
              Professional therapy support for young adults navigating life transitions, career
              challenges, and the complexities of emerging adulthood. Find clarity and confidence in
              this pivotal life stage.
            </p>
          </section>

          <section className={styles.contentSection}>
            <div className={styles.textContainer}>
              <section className={styles.introduction}>
                <h2>Understanding the Young Adult Journey</h2>
                <p>
                  Your twenties and early thirties can feel like you&apos;re supposed to have
                  everything figured out, but the reality is often very different. This is a time of
                  significant transition—finishing education, starting careers, forming serious
                  relationships, and establishing independence. It&apos;s exciting but can also feel
                  overwhelming and isolating.
                </p>
                <p>
                  In my practice in Colchester, I work with young adults who are navigating these
                  complex life transitions. Whether you&apos;re struggling with anxiety about the
                  future, feeling stuck in your career, dealing with relationship challenges, or
                  questioning your life direction, therapy can provide clarity and support during
                  this transformative time.
                </p>
              </section>

              <section className={styles.whenToConsider}>
                <h2>Common Young Adult Challenges</h2>
                <p>
                  Young adulthood brings unique pressures and opportunities. You might find therapy
                  helpful if you&apos;re experiencing:
                </p>

                <div className={styles.challengesGrid}>
                  <div className={styles.challengeCategory}>
                    <h3>Life Transitions</h3>
                    <ul>
                      <li>Finishing university and starting your career</li>
                      <li>Moving away from family or to new cities</li>
                      <li>Relationship milestones and decisions</li>
                      <li>Financial independence and responsibility</li>
                      <li>Feeling lost or directionless about the future</li>
                    </ul>
                  </div>

                  <div className={styles.challengeCategory}>
                    <h3>Career & Achievement Stress</h3>
                    <ul>
                      <li>Imposter syndrome and self-doubt</li>
                      <li>Work-life balance struggles</li>
                      <li>Career uncertainty or dissatisfaction</li>
                      <li>Perfectionism and high expectations</li>
                      <li>Comparison with peers on social media</li>
                    </ul>
                  </div>

                  <div className={styles.challengeCategory}>
                    <h3>Relationships & Identity</h3>
                    <ul>
                      <li>Serious relationship challenges and decisions</li>
                      <li>Friendship changes and social pressures</li>
                      <li>Family relationship dynamics as an adult</li>
                      <li>Identity questions and personal values</li>
                      <li>Intimacy and commitment concerns</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className={styles.approach}>
                <h2>My Approach to Young Adult Therapy</h2>
                <p>
                  Working with young adults means understanding the unique pressures of this life
                  stage while respecting your autonomy and goals. I provide a space where you can
                  explore your feelings and experiences without judgment, helping you develop the
                  insights and skills needed to navigate this complex time with greater confidence.
                </p>

                <div className={styles.approachPoints}>
                  <div className={styles.point}>
                    <h3>Goal-Oriented Support</h3>
                    <p>
                      We work collaboratively to identify what you want to achieve in therapy,
                      whether that&apos;s managing anxiety, improving relationships, or finding
                      career direction.
                    </p>
                  </div>

                  <div className={styles.point}>
                    <h3>Practical Strategies</h3>
                    <p>
                      Therapy combines emotional understanding with practical tools you can use in
                      your daily life to manage stress, improve relationships, and make decisions.
                    </p>
                  </div>

                  <div className={styles.point}>
                    <h3>Independence Focused</h3>
                    <p>
                      The goal is to help you develop your own insights and coping strategies so you
                      feel confident managing life&apos;s challenges independently.
                    </p>
                  </div>
                </div>
              </section>

              <section className={styles.commonConcerns}>
                <h2>Areas I Help Young Adults With</h2>
                <div className={styles.concernsGrid}>
                  <div className={styles.concern}>
                    <h3>Anxiety & Future Worries</h3>
                    <p>
                      Managing anxiety about career prospects, financial security, relationships,
                      and life decisions that feel overwhelming or uncertain.
                    </p>
                  </div>

                  <div className={styles.concern}>
                    <h3>Depression & Low Motivation</h3>
                    <p>
                      When life feels purposeless, you&apos;re struggling with motivation, or
                      experiencing persistent low mood that interferes with work and relationships.
                    </p>
                  </div>

                  <div className={styles.concern}>
                    <h3>Career & Purpose</h3>
                    <p>
                      Exploring career dissatisfaction, finding your passion, dealing with workplace
                      stress, or feeling stuck in your professional development.
                    </p>
                  </div>

                  <div className={styles.concern}>
                    <h3>Relationships & Dating</h3>
                    <p>
                      Navigating serious relationships, marriage decisions, dating anxiety,
                      breakups, or patterns in relationships that aren&apos;t working.
                    </p>
                  </div>

                  <div className={styles.concern}>
                    <h3>Life Transitions</h3>
                    <p>
                      Managing major life changes like graduation, moving cities, career changes, or
                      other significant transitions that feel overwhelming.
                    </p>
                  </div>

                  <div className={styles.concern}>
                    <h3>Self-Worth & Identity</h3>
                    <p>
                      Building confidence, overcoming imposter syndrome, developing a stronger sense
                      of self, and establishing your own values and goals.
                    </p>
                  </div>
                </div>
              </section>

              <section className={styles.universityStudents}>
                <h2>Support for University Students</h2>
                <p>
                  If you&apos;re currently at university or recently graduated, you might be dealing
                  with academic pressure, social anxiety, financial stress, or uncertainty about
                  your future. The transition from student life to the working world can feel
                  daunting, especially when you&apos;re not sure what you want to do or how to get
                  there.
                </p>
                <p>
                  I understand the unique challenges facing students and recent graduates, from
                  managing study stress to navigating the competitive job market and establishing
                  your independence.
                </p>
              </section>

              <section className={styles.practicalInfo}>
                <h2>What to Expect from Young Adult Therapy</h2>
                <div className={styles.expectationsList}>
                  <div className={styles.expectation}>
                    <h3>Initial Assessment</h3>
                    <p>
                      We&apos;ll discuss what&apos;s brought you to therapy, your current
                      challenges, and what you hope to achieve. This helps us develop a focused
                      approach.
                    </p>
                  </div>

                  <div className={styles.expectation}>
                    <h3>Collaborative Approach</h3>
                    <p>
                      Therapy is a partnership where your input guides our work. You&apos;ll have an
                      active role in setting goals and exploring what matters most to you.
                    </p>
                  </div>

                  <div className={styles.expectation}>
                    <h3>Flexible Duration</h3>
                    <p>
                      Some young adults benefit from short-term, focused work on specific issues,
                      while others prefer longer-term support through multiple life transitions.
                    </p>
                  </div>

                  <div className={styles.expectation}>
                    <h3>Real-World Application</h3>
                    <p>
                      We focus on developing skills and insights you can apply immediately to your
                      relationships, work, and daily life challenges.
                    </p>
                  </div>
                </div>
              </section>

              <section className={styles.callToAction}>
                <h2>Ready to Invest in Your Future?</h2>
                <p>
                  Your twenties and thirties are a time of incredible growth and possibility. While
                  it can feel overwhelming, it&apos;s also an opportunity to build the foundation
                  for the life you want. Therapy can help you navigate this time with greater
                  clarity, confidence, and purpose.
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
                  <strong>Location:</strong> I offer young adult therapy sessions in Colchester and
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
