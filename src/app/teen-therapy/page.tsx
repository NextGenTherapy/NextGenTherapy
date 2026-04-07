import type { Metadata } from 'next';
import Link from 'next/link';

import { TeenageTherapySchema } from '@/components/seo/ServiceSchema';
import PageHero from '@/components/ui/PageHero';

import buttonStyles from '../../components/ui/button.module.scss';
import styles from './teen-therapy.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Therapy for Teenagers in Colchester | Anxiety, School Refusal, Self-Harm',
  description:
    'Psychodynamic therapy for teenagers aged 13–17 in Colchester. Anxiety, school refusal, self-harm, low mood, identity. BACP registered. NHS, SEN and youth work background. Free intro call for parents.',
  keywords: [
    'teen therapy Colchester',
    'teenage therapist Colchester',
    'adolescent therapy Essex',
    'school refusal therapy',
    'teen anxiety Colchester',
    'self-harm therapy teenagers',
    'teen mental health Colchester',
    'BACP teen therapist',
    'teenager counselling Essex',
    'parent support teen therapy',
  ],
  authors: [{ name: 'Andreea Horhocea' }],
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/teen-therapy',
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
    title: 'Therapy for Teenagers in Colchester | Anxiety, School Refusal, Self-Harm',
    description:
      'Psychodynamic therapy for teenagers aged 13–17 in Colchester. BACP registered therapist with NHS, SEN and youth work background. Free intro call for parents.',
    url: 'https://nextgentherapy.co.uk/teen-therapy',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Teen Therapy in Colchester — Next Generation Therapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Therapy for Teenagers in Colchester | BACP Registered Therapist',
    description:
      'Psychodynamic therapy for teenagers 13–17 in Colchester. Anxiety, school refusal, self-harm, identity. Free intro call for parents.',
    images: ['https://nextgentherapy.co.uk/images/default-social-share.jpg'],
  },
};

export default function TeenTherapyPage() {
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
        name: 'Teen Therapy',
        item: 'https://nextgentherapy.co.uk/teen-therapy',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What ages do you work with for teen therapy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I work with teenagers aged 13–17 in person at my Colchester practice. Online sessions are available for those aged 16 and above.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is teen therapy confidential from parents?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. What your teenager tells me stays confidential, with exceptions only for immediate safety concerns. I can provide general updates to parents about how therapy is going, without sharing specific content.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if my teenager refuses to come to therapy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "This is common. I'm happy to speak with you first about whether therapy seems right for them, and we can discuss ways to introduce the idea. Sometimes parents find it useful to have their own session to talk through the situation.",
        },
      },
      {
        '@type': 'Question',
        name: 'How much does teen therapy cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Teen therapy sessions cost £60 for a 50-minute session, available in-person in Colchester. A free 15-minute phone call for parents is available before booking.',
        },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Section 1: Hero */}
      <PageHero
        eyebrow="Therapy for Teenagers"
        title="If your teenager is struggling and you don't know what to do next"
        lead="In-person psychodynamic therapy for teenagers aged 13–17 in Colchester. Working alongside parents, not around them. CAMHS has a 12-month waitlist — you don't have to wait that long."
      />

      <div className={styles.page}>
        <main className={styles.main}>
          {/* Section 2: Parent empathy */}
          <section className={styles.surfaceSection}>
            <div className={styles.narrowContainer}>
              <h2>If you&apos;re a parent reading this at 11pm</h2>
              <p className={styles.leadText}>
                You&apos;ve noticed something has changed. Your teenager is withdrawn, or angry, or
                tearful, or refusing school — or something you can&apos;t quite name. You&apos;ve
                tried talking. You&apos;ve tried giving space. You&apos;ve tried being patient.
                Nothing seems to shift it.
              </p>
              <p>
                You&apos;ve probably already spoken to the school. Maybe you&apos;ve been to the GP.
                There might be a CAMHS referral sitting somewhere in a queue — the waitlist in Essex
                is 12 months or longer. You&apos;re exhausted, and you&apos;re not sure what to do
                next.
              </p>
              <p>
                I work with teenagers like yours, and I take the parents seriously too. You&apos;re
                not being dramatic. You know your child. If something feels wrong, it probably is
                worth looking into.
              </p>
            </div>
          </section>

          {/* Section 3: What teenagers usually come to me with */}
          <section className={styles.normalSection}>
            <div className={styles.sectionContainer}>
              <h2>What teenagers usually come to me with</h2>
              <p>
                I see teenagers dealing with a range of difficulties. These are the most common:
              </p>
              <div className={styles.topicsGrid}>
                <div className={styles.topicItem}>Anxiety and panic</div>
                <div className={styles.topicItem}>School refusal and school anxiety</div>
                <div className={styles.topicItem}>Mild self-harm (cutting, scratching, hair-pulling)</div>
                <div className={styles.topicItem}>Low mood and feeling stuck</div>
                <div className={styles.topicItem}>Friendship and social difficulties</div>
                <div className={styles.topicItem}>Family conflict</div>
                <div className={styles.topicItem}>Identity questions (gender, sexuality, self)</div>
                <div className={styles.topicItem}>Behavioural changes without a name yet</div>
                <div className={styles.topicItem}>Late-identified ADHD or autism</div>
                <div className={styles.topicItem}>Body image and early signs of disordered eating</div>
              </div>
            </div>
          </section>

          {/* Section 4: What I don't work with at this age */}
          <section className={styles.surfaceSection}>
            <div className={styles.narrowContainer}>
              <h2>What I don&apos;t work with at this age</h2>
              <p>
                Being clear about my limits helps you find the right support. I&apos;m not the right
                fit if your teenager is:
              </p>
              <ul className={styles.limitsList}>
                <li className={styles.limitItem}>
                  In acute crisis or actively suicidal with no current support in place
                </li>
                <li className={styles.limitItem}>
                  Dealing with a severe eating disorder that needs medical monitoring
                </li>
                <li className={styles.limitItem}>
                  Involved in ongoing court proceedings or forensic assessment
                </li>
                <li className={styles.limitItem}>Experiencing psychosis</li>
                <li className={styles.limitItem}>
                  Struggling with active addiction without wraparound support
                </li>
              </ul>
              <p>
                <strong>Online sessions:</strong> I only offer online therapy to those aged 16 and
                above. This is a confidentiality decision — younger teenagers have sometimes had
                sessions in houses where parents are present in adjacent rooms, which undermines the
                work.{' '}
                <Link href="/online-therapy" className={styles.link}>
                  More about online therapy →
                </Link>
              </p>
            </div>
          </section>

          {/* Section 5: How I work */}
          <section className={styles.normalSection}>
            <div className={styles.narrowContainer}>
              <h2>How I work</h2>
              <p>
                Your teenager is the client, with the same confidentiality I&apos;d offer any adult.
                What they tell me stays between us — with exceptions only for immediate safety
                concerns. They need to know they can speak freely without it getting back to you.
              </p>
              <p>
                I&apos;m a psychodynamic therapist. That means I&apos;m interested in understanding{' '}
                <em>why</em> your teenager is struggling, not just managing the symptoms. This
                isn&apos;t a 6-week worksheet programme. We work at their pace, for as long as
                they need.
              </p>
              <p>
                In session, we talk. Sometimes we write, or draw, or use other materials — whatever
                helps them process what&apos;s going on. The approach adapts to the teenager, not
                the other way around.
              </p>
            </div>
          </section>

          {/* Section 6: How I work with parents */}
          <section className={styles.surfaceSection}>
            <div className={styles.narrowContainer}>
              <h2>How I work with parents</h2>
              <p>
                You&apos;re part of this, even though your teenager&apos;s sessions are theirs.
              </p>
              <ul className={styles.approachList}>
                <li className={styles.approachItem}>
                  <h3>Initial conversation</h3>
                  <p>
                    Before work begins, I speak with you as the parent to understand the background,
                    what you&apos;ve noticed, what you&apos;ve already tried. This informs the
                    therapy without breaking your teenager&apos;s confidentiality later.
                  </p>
                </li>
                <li className={styles.approachItem}>
                  <h3>Confidentiality boundaries</h3>
                  <p>
                    I&apos;ll be clear with both of you about what I will and won&apos;t share. I
                    can tell you how therapy is going in general terms — whether they&apos;re
                    engaging, whether we&apos;re making progress — without revealing content.
                  </p>
                </li>
                <li className={styles.approachItem}>
                  <h3>Parent sessions when useful</h3>
                  <p>
                    Separate sessions for you to talk through what&apos;s happening at home, how to
                    respond when they&apos;re struggling, how to support without taking over. These
                    are £60, separate from your teenager&apos;s therapy.
                  </p>
                </li>
                <li className={styles.approachItem}>
                  <h3>Working with school</h3>
                  <p>
                    If there&apos;s school involvement — meetings, SENCO conversations, EHCP
                    processes, safeguarding concerns — I can liaise with the school with your
                    permission. I&apos;ve worked in schools and understand how the system operates.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7: My experience working with young people */}
          <section className={styles.normalSection}>
            <div className={styles.sectionContainer}>
              <h2>My experience working with young people</h2>
              <p>
                I&apos;ve worked with teenagers in schools, in the NHS, and in community settings.
                This isn&apos;t something I do occasionally — it&apos;s a core part of my practice.
              </p>
              <div className={styles.experienceGrid}>
                <div className={styles.experienceItem}>
                  <h3>NHS Essex</h3>
                  <p>
                    Workshops and seminars with children and parents in primary and secondary
                    schools across Essex.
                  </p>
                </div>
                <div className={styles.experienceItem}>
                  <h3>Sir Bobby Robson School, Ipswich</h3>
                  <p>
                    One year in this SEN-specific provision, supporting young people with complex
                    needs.
                  </p>
                </div>
                <div className={styles.experienceItem}>
                  <h3>Mind (Mid &amp; North East Essex)</h3>
                  <p>Youth work in schools, supporting young people with mental health.</p>
                </div>
                <div className={styles.experienceItem}>
                  <h3>YMCA Ipswich (current)</h3>
                  <p>
                    Ongoing work across two projects: primary school support and work with young
                    residents in YMCA accommodation.
                  </p>
                </div>
              </div>
              <p>
                I hold an MSc in Psychodynamic Psychotherapy from the University of Essex (2020) and
                am a registered member of the BACP. I continue to train in areas relevant to young
                people: neurodiversity, eating disorders, trauma, attachment, and working with
                LGBTQ+ clients.
              </p>
            </div>
          </section>

          {/* Section 8: What if my teenager refuses to come? */}
          <section className={styles.surfaceSection}>
            <div className={styles.narrowContainer}>
              <h2>What if my teenager refuses to come?</h2>
              <p>
                This is the most common question parents ask me. Teenagers exist on a spectrum:
                some are actively asking for help, some are ambivalent, some are firmly against the
                idea. Your teenager might be resistant because they don&apos;t want to talk about
                feelings, because they&apos;re worried you&apos;ll find out what they say, or
                because they don&apos;t believe anything will help.
              </p>
              <p>
                There are a few ways to approach this:
              </p>
              <ul className={styles.limitsList}>
                <li className={styles.limitItem}>
                  <strong>A parent-only call first</strong> — we can talk through the situation and
                  whether therapy seems right, without involving your teenager yet.
                </li>
                <li className={styles.limitItem}>
                  <strong>A brief intro chat with your teenager</strong> — 10 minutes, no
                  commitment, just so they can see what I&apos;m like and ask questions.
                </li>
                <li className={styles.limitItem}>
                  <strong>No pressure</strong> — sometimes framing it as &ldquo;one session to
                  try&rdquo; rather than a commitment helps.
                </li>
              </ul>
              <p>
                If they genuinely won&apos;t come, I can still work with you as a parent — helping
                you understand what might be going on and how to respond.
              </p>
            </div>
          </section>

          {/* Section 9: Crisis signposting */}
          <section className={styles.crisisSection}>
            <div className={styles.sectionContainer}>
              <h2>If your teenager is in crisis right now</h2>
              <p>
                This page isn&apos;t for emergencies. If your teenager is in immediate danger or you
                need urgent help, please contact one of these services:
              </p>
              <div className={styles.crisisGrid}>
                <div className={styles.crisisItem}>
                  <h3>NHS 111</h3>
                  <p>
                    Call <strong>111</strong> and press option 2 for the mental health crisis line.
                  </p>
                </div>
                <div className={styles.crisisItem}>
                  <h3>Your GP</h3>
                  <p>
                    Your teenager&apos;s GP can offer emergency same-day appointments and urgent
                    referrals.
                  </p>
                </div>
                <div className={styles.crisisItem}>
                  <h3>A&amp;E Colchester General Hospital</h3>
                  <p>
                    Go to A&amp;E if your teenager has harmed themselves seriously or is at
                    immediate risk.
                  </p>
                </div>
                <div className={styles.crisisItem}>
                  <h3>Shout</h3>
                  <p>
                    Free, confidential 24/7 text service for young people. Text{' '}
                    <strong>SHOUT to 85258</strong>.
                  </p>
                </div>
                <div className={styles.crisisItem}>
                  <h3>Papyrus HOPELINEUK</h3>
                  <p>
                    For young people under 35 having thoughts of suicide. Call{' '}
                    <strong>0800 068 4141</strong>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10: CTA */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContainer}>
              <h2>Start with a free 15-minute call</h2>
              <p>
                The call can be just you as the parent, just your teenager, or both of you
                together — whatever makes most sense. We&apos;ll talk about what&apos;s going on,
                whether therapy seems like the right next step, and any questions you have. No
                pressure, no commitment.
              </p>
              <Link href="/book-now" className={buttonStyles.primary}>
                Book a free call
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
