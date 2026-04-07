import type { Metadata } from 'next';
import Link from 'next/link';
import { ChildTherapySchema } from '@/components/seo/ServiceSchema';
import PageHero from '@/components/ui/PageHero';
import styles from './child-therapy.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Child Therapy in Colchester | Play-Based Psychodynamic Therapy 4–12',
  description:
    'Play-based psychodynamic therapy for children aged 4–12 in Colchester. Anxiety, school refusal, behavioural changes, family transitions, neurodiversity. BACP registered with NHS and SEN background.',
  keywords: [
    'child therapy Colchester',
    'child therapist Colchester',
    'child counselling Essex',
    'child psychotherapist Colchester',
    'play therapy Colchester',
    'child anxiety therapy',
    'school refusal therapy',
    'therapy for children Colchester',
    'BACP child therapist',
    'child trauma therapy',
    'SEN therapist Colchester',
    'neurodivergent child therapy',
    'child behaviour therapy Essex',
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
    title: 'Child Therapy in Colchester | Play-Based Therapy for Ages 4–12',
    description:
      'Play-based psychodynamic therapy for children in Colchester. BACP registered therapist with NHS schools experience and specialist SEN training.',
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
    title: 'Child Therapy in Colchester | Play-Based Therapy 4–12',
    description:
      'Play-based psychodynamic therapy for children aged 4–12. BACP registered with NHS schools experience and SEN specialist training.',
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What age children do you work with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I work with children aged 4 through to 12 in person at my Colchester practice. Play-based therapy techniques are used for younger children, adapting the approach as they develop.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long do child therapy sessions last?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Child therapy sessions are 50 minutes long and take place weekly, at the same day and time each week. The total length of therapy varies depending on your child's needs.",
        },
      },
      {
        '@type': 'Question',
        name: "Will I know what happens in my child's therapy sessions?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "While sessions are confidential, I provide regular parent review meetings to discuss general themes and progress. I won't share specific details your child has said, but I'll help you understand how you can support them at home.",
        },
      },
      {
        '@type': 'Question',
        name: 'How much does child therapy cost in Colchester?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Child therapy sessions cost £60 for a 50-minute session. All sessions for children aged 4–12 are in person only at my Colchester practice.',
        },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Section 1: PageHero */}
      <PageHero
        eyebrow="Therapy for Children"
        title="When something's not quite right with your child, but you can't put it into words yet."
        lead="Play-based psychodynamic therapy for children aged 4–12, in person in Colchester. For anxiety, behavioural changes, school difficulties, family transitions, neurodiversity, and the things children can't say but can show."
      />

      <div className={styles.page}>
        <div className={styles.main}>
          <section className={styles.contentSection}>
            <div className={styles.textContainer}>

              {/* Section 2: When parents bring children to me */}
              <section className={styles.introduction}>
                <h2>When parents bring children to me</h2>
                <p>
                  You&apos;ve noticed something. Maybe sleep has changed — nightmares, bed-wetting
                  that had stopped, trouble settling. Maybe there are meltdowns that seem to come
                  from nowhere, or a withdrawal from friends and activities they used to love. Maybe
                  school is calling, or you&apos;re getting reports that don&apos;t match the child
                  you know at home.
                </p>
                <p>
                  Often parents can&apos;t point to a single trigger. Sometimes they can — a
                  separation, a bereavement, a move, something that happened at school. Either way,
                  the child in front of them is struggling and the usual parenting approaches
                  aren&apos;t landing.
                </p>
                <p>
                  Children don&apos;t have the words adults do. When something is wrong, they show us
                  through behaviour — through tantrums, through silence, through regression, through
                  changes that are hard to explain. This behaviour is communication. Therapy gives
                  them a space to work through what they can&apos;t say.
                </p>
              </section>

              {/* Section 3: What I often work with */}
              <section className={styles.workWithSection}>
                <h2>What I often work with</h2>
                <p>
                  Every child is different, but these are some of the difficulties that bring
                  families to me:
                </p>
                <ul className={styles.workWithList}>
                  <li className={styles.workWithItem}>
                    <strong>Anxiety and worry</strong> — including separation anxiety, social anxiety, fears that don&apos;t seem to shift, and worry that&apos;s affecting daily life
                  </li>
                  <li className={styles.workWithItem}>
                    <strong>School-related difficulties</strong> — refusal, avoidance, trouble settling, friendship problems, bullying, difficulty with transitions
                  </li>
                  <li className={styles.workWithItem}>
                    <strong>Family transitions</strong> — separation, divorce, blended families, new siblings, bereavement, moving house
                  </li>
                  <li className={styles.workWithItem}>
                    <strong>Behavioural changes</strong> — withdrawal, anger, aggression, regression, changes that don&apos;t seem to have an obvious cause
                  </li>
                  <li className={styles.workWithItem}>
                    <strong>Sleep difficulties and night fears</strong> — nightmares, trouble settling, bed-wetting that had stopped, night terrors
                  </li>
                  <li className={styles.workWithItem}>
                    <strong>Neurodiversity</strong> — ADHD, autism, sensory processing differences. I work affirmatively with neurodivergent children
                  </li>
                  <li className={styles.workWithItem}>
                    <strong>Trauma and difficult experiences</strong> — hospital stays, accidents, frightening experiences, things that happened too early to remember clearly
                  </li>
                  <li className={styles.workWithItem}>
                    <strong>Self-confidence and self-esteem</strong> — children who seem to carry a sense that something is wrong with them
                  </li>
                  <li className={styles.workWithItem}>
                    <strong>The things you can&apos;t quite put into words</strong> — when you just know something&apos;s not right
                  </li>
                </ul>
              </section>

              {/* Section 4: How I work with younger children */}
              <section className={styles.approach}>
                <h2>How I work with younger children</h2>
                <p>
                  Children don&apos;t sit on a couch and talk about their feelings the way adults
                  might. A 7-year-old can&apos;t articulate &quot;I&apos;m anxious because I
                  don&apos;t feel secure since you and Dad separated.&quot; But they can show you —
                  in a sand tray, in the way they play with toys, in the stories they make up, in
                  what they draw without being asked.
                </p>
                <p>
                  This isn&apos;t entertainment, and it isn&apos;t a distraction technique.
                  Play-based psychodynamic therapy uses play as the language it is. I watch, I
                  follow, I sometimes name what I&apos;m noticing. Over time, children work through
                  what they can&apos;t say in words.
                </p>
                <p>
                  My therapy room at Colchester Business Centre is set up for children. Ground
                  floor, quiet, plants, soft lighting. There&apos;s a sand tray, drawing and art
                  materials, puppets, small-world toys, and sensory objects. Fidgets are available
                  for any age, and stimming is welcomed — this matters especially for neurodivergent
                  children who need to move to think.
                </p>
              </section>

              {/* Section 5: What sessions actually look like */}
              <section className={styles.sessionsSection}>
                <h2>What sessions actually look like</h2>
                <p>
                  Sessions are 50 minutes, weekly, at the same day and time each week. This
                  consistency matters — children feel safer when they know what to expect.
                </p>
                <p>
                  For younger children, a parent or carer brings them to the waiting area and
                  collects them afterwards. I&apos;ll briefly check in with you at the start and end
                  — not to discuss content, but to flag anything you think I should know or anything
                  I think would help at home.
                </p>
                <p>
                  There&apos;s no script for what happens inside the room. Some children arrive
                  ready to play. Others need time to settle. Some talk constantly; some barely speak
                  for weeks. All of this is normal and all of it is part of the process. I follow
                  your child&apos;s lead rather than imposing an agenda.
                </p>
                <p>
                  Therapy is open-ended — we work for as long as your child needs, not to a fixed
                  number of sessions. Endings are planned carefully and worked through together when
                  it&apos;s time.
                </p>
              </section>

              {/* Section 6: For parents */}
              <section id="for-parents" className={styles.forParentsSection}>
                <h2>For parents: how I work with you</h2>
                <p>
                  <strong>Parents are part of the work, not on the sidelines.</strong>
                </p>
                <p>
                  Before I meet your child, I&apos;ll have an initial conversation with you — either
                  by phone or in person — to understand the full picture. What you&apos;ve noticed,
                  when it started, what you&apos;ve tried. Your child&apos;s history. What you&apos;re
                  hoping might shift. This gives me context and gives you space to share things you
                  might not say in front of your child.
                </p>
                <p>
                  Throughout the therapy, I offer <strong>parent review meetings</strong> — regular
                  sessions without your child present. I won&apos;t share the specific content of
                  their sessions (that stays confidential), but I&apos;ll discuss general themes,
                  how things seem to be progressing, and what might help at home.
                </p>
                <p>
                  If you&apos;re struggling yourself — if your child&apos;s difficulties are
                  affecting your own wellbeing, your relationship, your capacity to cope — I also
                  offer <strong>parent-only sessions</strong>. Sometimes the most useful thing is
                  for you to have your own space.
                </p>

                <div className={styles.experienceNote}>
                  <p>
                    I&apos;ve worked with children and families in schools and community settings
                    across Essex and Suffolk — including NHS Essex (workshops in primary and
                    secondary schools), Sir Bobby Robson School in Ipswich (SEN-specific provision),
                    Mind Mid &amp; North East Essex (youth work), and ongoing work with YMCA
                    supporting primary school children and young people in supported accommodation.
                  </p>
                </div>

              </section>

              {/* Section 7: Working with school and other professionals */}
              <section className={styles.schoolSection}>
                <h2>Working with school and other professionals</h2>
                <p>
                  With your consent, I can liaise with your child&apos;s school — their class
                  teacher, SENCo, or ELSA. I can write letters for EHCP applications or reviews if
                  therapy observations would be useful. I&apos;m also happy to coordinate with other
                  professionals involved in your child&apos;s care — paediatricians, occupational
                  therapists, speech and language therapists — where that helps.
                </p>
                <p>
                  This only happens with your explicit agreement. You&apos;re always in control of
                  who I speak to and what information is shared.
                </p>
              </section>

              {/* Section 8: What I don't work with at this age */}
              <section className={styles.limitsSection}>
                <h2>What I don&apos;t work with at this age</h2>
                <p>
                  There are some situations where a different kind of support is more appropriate:
                </p>
                <ul className={styles.limitsList}>
                  <li className={styles.limitsItem}>
                    <strong>Acute crisis or active risk.</strong> If your child is in immediate
                    danger, actively self-harming, or experiencing a mental health crisis, they need
                    a crisis team — CAMHS, A&amp;E, or your GP. Private weekly therapy can&apos;t
                    provide the wraparound support a child in acute crisis needs. Once they&apos;re
                    stable, we can talk.
                  </li>
                  <li className={styles.limitsItem}>
                    <strong>Online therapy for under-16s.</strong> I only offer online sessions to
                    clients aged 16 and over. For children, the work needs to happen in person —
                    play-based therapy doesn&apos;t translate to a screen, and confidentiality is
                    harder to maintain when a child is at home. Learn more about{' '}
                    <Link href="/online-therapy" className={styles.limitsLink}>
                      online therapy and who it&apos;s for
                    </Link>.
                  </li>
                </ul>
              </section>

              {/* Section 9: Crisis signposting */}
              <section className={styles.crisisSection}>
                <h2>If your child is in crisis right now</h2>
                <p>
                  If your child is in crisis or you&apos;re concerned about their immediate safety,
                  please contact:
                </p>
                <ul className={styles.crisisList}>
                  <li className={styles.crisisItem}>
                    <span className={styles.crisisName}>NHS 111</span>
                    <span className={styles.crisisNumber}>111</span>{' '}
                    <span className={styles.crisisNote}>(press option 2 for mental health crisis) — 24/7</span>
                  </li>
                  <li className={styles.crisisItem}>
                    <span className={styles.crisisName}>Your GP</span>
                    <span className={styles.crisisNote}>for same-day emergency appointments</span>
                  </li>
                  <li className={styles.crisisItem}>
                    <span className={styles.crisisName}>A&amp;E at Colchester General Hospital</span>
                    <span className={styles.crisisNote}>for immediate danger or medical emergency</span>
                  </li>
                  <li className={styles.crisisItem}>
                    <span className={styles.crisisName}>Childline</span>
                    <span className={styles.crisisNumber}>0800 1111</span>{' '}
                    <span className={styles.crisisNote}>— free, confidential support for children and young people</span>
                  </li>
                </ul>
                <p>
                  Therapy is part of the longer-term picture, not the right tool for an emergency.
                </p>
              </section>

              {/* Section 10: CTA */}
              <section className={styles.ctaSection}>
                <h2>Start with a parent-only conversation</h2>
                <p>
                  The free 15-minute call is just for you. A chance to tell me what&apos;s happening,
                  ask any questions, and see whether I might be the right fit for your child. No
                  pressure, no commitment, and your child doesn&apos;t need to be involved yet.
                </p>
                <Link href="/book-now" className={styles.ctaButton}>
                  Book a Free 15-Minute Call
                </Link>
              </section>

            </div>
          </section>
        </div>
      </div>
    </>
  );
}
