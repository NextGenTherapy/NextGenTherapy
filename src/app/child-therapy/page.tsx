import type { Metadata } from 'next';
import Link from 'next/link';
import { ChildTherapySchema } from '@/components/seo/ServiceSchema';
import styles from './child-therapy.module.scss';
import buttonStyles from '../../components/ui/button.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Child Therapy Colchester | BACP Registered Child Therapist | Next Generation',
  description:
    'Professional child therapy in Colchester & online. BACP registered therapist helping children with anxiety, emotions, behaviour & family challenges. Compassionate support for children & parents.',
  keywords: [
    'child therapy Colchester',
    'child therapist Colchester',
    'child counselling Essex',
    'child psychotherapist Colchester',
    'children&apos;s mental health therapy',
    'child anxiety therapy',
    'child behaviour therapy',
    'therapy for children Colchester',
    'child emotional support',
    'BACP child therapist',
    'play therapy Colchester',
    'child trauma therapy',
    'family therapy children',
    'child therapy near me',
    'professional child therapy Essex',
  ],
  authors: [{ name: 'Andreea Horhocea' }],
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/child-therapy',
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
    title: 'Child Therapy Colchester | Professional Support for Children',
    description:
      'Expert child therapy in Colchester & online. BACP registered therapist providing compassionate support for children facing emotional & behavioural challenges.',
    url: 'https://nextgentherapy.co.uk/child-therapy',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Child Therapy Services in Colchester - Next Generation Therapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Child Therapy Colchester | BACP Registered Therapist',
    description:
      'Professional child therapy services in Colchester & online. Expert support for children&apos;s emotional wellbeing and family relationships.',
    images: ['https://nextgentherapy.co.uk/images/default-social-share.jpg'],
  },
};

export default function ChildTherapyPage() {
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
        name: 'Child Therapy',
        item: 'https://nextgentherapy.co.uk/child-therapy',
      },
    ],
  };

  return (
    <>
      <ChildTherapySchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className={styles.page}>
        <div className={styles.main}>
          <section className={styles.heroSection}>
            <h1>Child Therapy in Colchester</h1>
            <p className={styles.subtitle}>
              Compassionate, professional therapy support for children navigating life&apos;s
              challenges. BACP registered therapist providing a safe, understanding space for your
              child to grow and heal.
            </p>
          </section>

          <section className={styles.contentSection}>
            <div className={styles.textContainer}>
              <section className={styles.introduction}>
                <h2>Understanding Your Child&apos;s World</h2>
                <p>
                  Children experience the world differently from adults, and their emotional needs
                  require specialised understanding and care. In my practice in Colchester, I work
                  with children who may be struggling with big feelings, difficult experiences, or
                  challenging behaviours.
                </p>
                <p>
                  Every child is unique, and therapy is tailored to meet them exactly where they
                  are. Whether your child is naturally chatty or more reserved, enjoys creative
                  activities or prefers quiet conversation, I adapt my approach to help them feel
                  comfortable and understood.
                </p>
              </section>

              <section className={styles.whenToConsider}>
                <h2>When to Consider Child Therapy</h2>
                <p>
                  Parents often wonder whether their child might benefit from therapy. You know your
                  child best, and if you&apos;re noticing changes that concern you, it&apos;s worth
                  exploring. Children might benefit from therapy when experiencing:
                </p>

                <div className={styles.symptomsGrid}>
                  <div className={styles.symptomCategory}>
                    <h3>Emotional Challenges</h3>
                    <ul>
                      <li>Persistent sadness or tearfulness</li>
                      <li>Increased anxiety or worry</li>
                      <li>Sudden changes in mood or behaviour</li>
                      <li>Difficulty expressing feelings</li>
                      <li>Overwhelming anger or frequent meltdowns</li>
                    </ul>
                  </div>

                  <div className={styles.symptomCategory}>
                    <h3>Behavioural Changes</h3>
                    <ul>
                      <li>Regression in previously mastered skills</li>
                      <li>Sleep difficulties or nightmares</li>
                      <li>Changes in appetite or eating patterns</li>
                      <li>Withdrawal from friends or activities</li>
                      <li>Difficulties at school or with learning</li>
                    </ul>
                  </div>

                  <div className={styles.symptomCategory}>
                    <h3>Life Transitions</h3>
                    <ul>
                      <li>Family changes (divorce, new baby, moving house)</li>
                      <li>Starting school or changing schools</li>
                      <li>Loss of a loved one or pet</li>
                      <li>Medical procedures or illness</li>
                      <li>Friendship difficulties or bullying</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className={styles.approach}>
                <h2>My Approach to Child Therapy</h2>
                <p>
                  Working with children requires patience, creativity, and deep respect for their
                  inner world. I use a psychodynamic approach, which means we explore not just
                  what&apos;s happening on the surface, but also the deeper feelings and experiences
                  that might be driving your child&apos;s struggles.
                </p>

                <div className={styles.approachPoints}>
                  <div className={styles.point}>
                    <h3>Child-Led Therapy</h3>
                    <p>
                      Children communicate through play, art, stories, and movement as much as
                      through words. Sessions are designed to follow your child&apos;s natural way
                      of expressing themselves.
                    </p>
                  </div>

                  <div className={styles.point}>
                    <h3>Safe Space</h3>
                    <p>
                      The therapy room is a consistent, predictable space where your child can
                      explore difficult feelings without judgment or pressure to &apos;be good&apos;
                      or &apos;behave properly&apos;.
                    </p>
                  </div>

                  <div className={styles.point}>
                    <h3>Family Involvement</h3>
                    <p>
                      Parents and carers are vital partners in the therapeutic process. Regular
                      check-ins help ensure we&apos;re all working together to support your
                      child&apos;s wellbeing.
                    </p>
                  </div>
                </div>
              </section>

              <section className={styles.commonConcerns}>
                <h2>Common Concerns I Help Children With</h2>
                <div className={styles.concernsGrid}>
                  <div className={styles.concern}>
                    <h3>Anxiety & Worry</h3>
                    <p>
                      From separation anxiety to general worries about the world, I help children
                      understand and manage their anxious feelings in age-appropriate ways.
                    </p>
                  </div>

                  <div className={styles.concern}>
                    <h3>Big Emotions</h3>
                    <p>
                      Learning to understand and express feelings like anger, sadness, frustration,
                      and fear in healthy ways that help rather than overwhelm.
                    </p>
                  </div>

                  <div className={styles.concern}>
                    <h3>Family Changes</h3>
                    <p>
                      Supporting children through transitions like divorce, new siblings, moving
                      house, or other significant changes in their family structure.
                    </p>
                  </div>

                  <div className={styles.concern}>
                    <h3>School Difficulties</h3>
                    <p>
                      Whether it&apos;s academic pressure, social challenges, or difficulty
                      separating from parents, I help children navigate their school experiences
                      more confidently.
                    </p>
                  </div>

                  <div className={styles.concern}>
                    <h3>Trauma & Loss</h3>
                    <p>
                      Gentle, trauma-informed support for children who have experienced difficult or
                      frightening events, helping them process and heal at their own pace.
                    </p>
                  </div>

                  <div className={styles.concern}>
                    <h3>Self-Esteem</h3>
                    <p>
                      Building confidence and self-worth, helping children develop a stronger sense
                      of who they are and their place in the world.
                    </p>
                  </div>
                </div>
              </section>

              <section className={styles.parentSupport}>
                <h2>Supporting Parents Too</h2>
                <p>
                  When a child is struggling, parents often feel overwhelmed, confused, or worried
                  about whether they&apos;re doing the right thing. Child therapy isn&apos;t just
                  about supporting the child—it&apos;s about supporting the whole family system.
                </p>
                <p>
                  I provide guidance on how to respond to challenging behaviours, communicate with
                  your child about difficult topics, and create a supportive home environment that
                  complements the therapeutic work. You&apos;re not alone in this journey.
                </p>
                <div className={styles.parentResources}>
                  <Link
                    href="/blog/supporting-child-through-therapy"
                    className={styles.resourceLink}
                  >
                    Read: Supporting Your Child Through Therapy
                  </Link>
                </div>
              </section>

              <section className={styles.practicalInfo}>
                <h2>What to Expect</h2>
                <div className={styles.expectationsList}>
                  <div className={styles.expectation}>
                    <h3>Initial Consultation</h3>
                    <p>
                      We begin with a conversation (usually with parents) to understand your
                      child&apos;s history, current difficulties, and what you&apos;re hoping
                      therapy might help with.
                    </p>
                  </div>

                  <div className={styles.expectation}>
                    <h3>First Sessions</h3>
                    <p>
                      Early sessions focus on helping your child feel comfortable and safe.
                      There&apos;s no pressure to &apos;open up&apos; immediately—trust builds
                      gradually.
                    </p>
                  </div>

                  <div className={styles.expectation}>
                    <h3>Ongoing Work</h3>
                    <p>
                      Sessions typically last 50 minutes and happen weekly. The length of therapy
                      varies depending on your child&apos;s needs and the complexity of their
                      difficulties.
                    </p>
                  </div>

                  <div className={styles.expectation}>
                    <h3>Regular Reviews</h3>
                    <p>
                      We regularly check in about progress and adjust our approach as needed. Your
                      input as a parent is invaluable in this process.
                    </p>
                  </div>
                </div>
              </section>

              <section className={styles.callToAction}>
                <h2>Ready to Take the Next Step?</h2>
                <p>
                  If you&apos;re concerned about your child&apos;s wellbeing and think therapy might
                  help, I&apos;d be happy to discuss your situation. Every child deserves to feel
                  understood, supported, and hopeful about their future.
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
                  <strong>Location:</strong> I offer child therapy sessions in Colchester and
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
