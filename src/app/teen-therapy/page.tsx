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
        title="If your teenager is struggling, you're probably struggling too"
        lead="Therapy for teenagers aged 13–17 in Colchester. Anxiety, school refusal, self-harm, low mood, identity. A space for them to talk, and support for you as a parent."
      />

      <div className={styles.page}>
        <main className={styles.main}>
          {/* Section 2: Parent empathy */}
          <section className={styles.surfaceSection}>
            <div className={styles.narrowContainer}>
              <h2>If you&apos;re reading this at 11pm</h2>
              <p className={styles.leadText}>
                You&apos;re worried. Your teenager has changed — withdrawn, angry, tearful, refusing
                school, or something else you can&apos;t quite name. You&apos;ve tried talking to
                them. You&apos;ve tried giving them space. Nothing seems to help.
              </p>
              <p>
                The CAMHS waitlist is impossibly long. You&apos;re not sure if this is
                &ldquo;serious enough&rdquo; for private therapy, or whether your teenager would even
                agree to go. You&apos;re exhausted, and you don&apos;t know what the right next step
                is.
              </p>
              <p>
                I work with teenagers like yours, and with parents who are trying to figure out how
                to help. A free 15-minute call might be a good place to start — no pressure, just a
                conversation about whether therapy could help.
              </p>
            </div>
          </section>

          {/* Section 3: What I work with */}
          <section className={styles.normalSection}>
            <div className={styles.sectionContainer}>
              <h2>What I work with</h2>
              <p>
                I see teenagers dealing with a range of difficulties. These are the most common:
              </p>
              <div className={styles.topicsGrid}>
                <div className={styles.topicItem}>Anxiety and panic</div>
                <div className={styles.topicItem}>School refusal and avoidance</div>
                <div className={styles.topicItem}>Self-harm</div>
                <div className={styles.topicItem}>Low mood and depression</div>
                <div className={styles.topicItem}>Anger and irritability</div>
                <div className={styles.topicItem}>Friendship difficulties and social anxiety</div>
                <div className={styles.topicItem}>Identity and sexuality questions</div>
                <div className={styles.topicItem}>Family conflict</div>
                <div className={styles.topicItem}>Academic pressure and perfectionism</div>
                <div className={styles.topicItem}>Grief and loss</div>
              </div>
            </div>
          </section>

          {/* Section 4: What I don't work with */}
          <section className={styles.surfaceSection}>
            <div className={styles.narrowContainer}>
              <h2>What I don&apos;t work with</h2>
              <p>
                Being clear about my limits helps you find the right support. I&apos;m not the right
                therapist if your teenager is:
              </p>
              <ul className={styles.limitsList}>
                <li className={styles.limitItem}>
                  In acute crisis requiring immediate psychiatric support
                </li>
                <li className={styles.limitItem}>
                  Actively suicidal with no current professional support
                </li>
                <li className={styles.limitItem}>
                  Involved in ongoing court proceedings or forensic assessment
                </li>
                <li className={styles.limitItem}>Experiencing psychosis</li>
                <li className={styles.limitItem}>
                  Struggling with severe addiction without wraparound support
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
              <h2>How I work with teenagers</h2>
              <p>
                I&apos;m a psychodynamic therapist. That means I&apos;m interested in understanding
                <em>why</em> your teenager is struggling, not just managing symptoms. We don&apos;t
                start with worksheets or homework assignments — we start with conversation, at their
                pace.
              </p>
              <ul className={styles.approachList}>
                <li className={styles.approachItem}>
                  <h3>Confidentiality</h3>
                  <p>
                    What your teenager tells me stays between us, with exceptions only for immediate
                    safety concerns. They need to know they can speak freely without it getting back
                    to you. I can give you general updates about how therapy is going — whether
                    they&apos;re engaging, whether we seem to be making progress — without sharing
                    the content.
                  </p>
                </li>
                <li className={styles.approachItem}>
                  <h3>Teenager-led</h3>
                  <p>
                    Your teenager chooses what to talk about. I&apos;m not there to extract
                    information or push them to open up before they&apos;re ready. Trust takes time,
                    especially with teenagers who&apos;ve learned that adults often have an agenda.
                  </p>
                </li>
                <li className={styles.approachItem}>
                  <h3>Weekly, open-ended</h3>
                  <p>
                    I see teenagers weekly. We don&apos;t start with a fixed number of sessions —
                    some teenagers come for a few months, others for longer. We review how it&apos;s
                    going together and with you as the parent.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 6: How I work with parents */}
          <section className={styles.surfaceSection}>
            <div className={styles.narrowContainer}>
              <h2>How I work with parents</h2>
              <p>
                You&apos;re part of this, even though your teenager&apos;s sessions are theirs. I
                offer parent sessions alongside teen therapy — space for you to talk about
                what&apos;s happening at home, how to respond when they&apos;re struggling, and what
                you can do to support them without taking over.
              </p>
              <p>
                If there&apos;s school involvement — meetings, SENCO conversations, safeguarding
                concerns — I can liaise with school with your permission. I&apos;ve worked in
                schools and understand how the system operates.
              </p>
              <p>
                Parent sessions are separate from your teenager&apos;s therapy and are charged at
                the same rate (£60).
              </p>
            </div>
          </section>

          {/* Section 7: My experience */}
          <section className={styles.normalSection}>
            <div className={styles.sectionContainer}>
              <h2>My experience with young people</h2>
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
                    A year working in this SEN-specific provision, supporting young people with
                    complex needs.
                  </p>
                </div>
                <div className={styles.experienceItem}>
                  <h3>Mind (Mid &amp; North East Essex)</h3>
                  <p>Youth work in schools, supporting young people with mental health.</p>
                </div>
                <div className={styles.experienceItem}>
                  <h3>YMCA Ipswich</h3>
                  <p>
                    Ongoing work across two projects: primary school support and work with young
                    residents in YMCA accommodation.
                  </p>
                </div>
              </div>
              <p>
                I hold an MSc in Psychodynamic Psychotherapy from the University of Essex (2020) and
                am a registered member of the BACP. I continue to train in neurodiversity,
                attachment, and trauma.
              </p>
            </div>
          </section>

          {/* Section 8: What if my teenager won't come? */}
          <section className={styles.surfaceSection}>
            <div className={styles.narrowContainer}>
              <h2>What if my teenager won&apos;t come?</h2>
              <p>
                This is one of the most common questions I get from parents. Your teenager might be
                resistant because they don&apos;t want to talk about their feelings, because
                they&apos;re worried you&apos;ll find out what they say, or because they don&apos;t
                believe it will help.
              </p>
              <p>
                Sometimes it helps to frame therapy as something you&apos;re offering, not forcing.
                A trial session with no commitment. Sometimes it helps to let me speak with them
                briefly beforehand. Sometimes they&apos;re more willing than you expect once they
                understand that what they say stays confidential.
              </p>
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
                    Call <strong>111</strong> and select the mental health option for urgent
                    assessment and advice.
                  </p>
                </div>
                <div className={styles.crisisItem}>
                  <h3>Your GP</h3>
                  <p>
                    Your teenager&apos;s GP can provide urgent referrals and crisis support during
                    surgery hours.
                  </p>
                </div>
                <div className={styles.crisisItem}>
                  <h3>A&amp;E</h3>
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
                    For young people under 35 who are having thoughts of suicide. Call{' '}
                    <strong>0800 068 4141</strong>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10: CTA */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContainer}>
              <h2>Book a free 15-minute call</h2>
              <p>
                The free call is for parents. We&apos;ll talk about what&apos;s happening with your
                teenager, whether therapy seems like the right next step, and any questions you
                have. No pressure, no commitment.
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
