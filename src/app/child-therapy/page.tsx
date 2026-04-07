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
        lead="Play-based psychodynamic therapy for children aged 4–12, in person in Colchester. I help children work through anxiety, behavioural changes, and difficult experiences in a way that makes sense to them."
      />

      <div className={styles.page}>
        <div className={styles.main}>
          <section className={styles.contentSection}>
            <div className={styles.textContainer}>

              {/* Section 2: When parents bring children to me */}
              <section className={styles.introduction}>
                <h2>When parents bring their children to me</h2>
                <p>
                  You know something isn&apos;t right. Maybe it&apos;s the meltdowns that seem to come
                  from nowhere. The withdrawal from friends or activities they used to love. The
                  anxiety that&apos;s started creeping into everything. The behaviour that&apos;s
                  leaving teachers concerned.
                </p>
                <p>
                  Children don&apos;t have the words adults do. When something is wrong, they show us
                  through behaviour — through tantrums, through silence, through regression, through
                  changes that are hard to explain. These are the ways children communicate distress
                  when they can&apos;t articulate it.
                </p>
                <p>
                  As a parent, watching your child struggle is exhausting. You want to help but you
                  don&apos;t always know how. Therapy gives your child a dedicated space to work
                  through what&apos;s happening, with support that&apos;s designed for the way
                  children actually process their experiences.
                </p>
              </section>

              {/* Section 3: What I often work with */}
              <section className={styles.workWithSection}>
                <h2>What I often work with</h2>
                <p>
                  Every child is different, but these are the difficulties that bring families to me
                  most often:
                </p>
                <ul className={styles.workWithList}>
                  <li className={styles.workWithItem}>Anxiety, worry, and fearfulness</li>
                  <li className={styles.workWithItem}>School difficulties — avoidance, refusal, or struggles to settle</li>
                  <li className={styles.workWithItem}>Family transitions — divorce, separation, new siblings, bereavement</li>
                  <li className={styles.workWithItem}>Behavioural changes that don&apos;t seem to have an obvious cause</li>
                  <li className={styles.workWithItem}>Sleep difficulties or nightmares</li>
                  <li className={styles.workWithItem}>Neurodivergent children — ADHD, autism, sensory differences</li>
                  <li className={styles.workWithItem}>Trauma or frightening experiences</li>
                  <li className={styles.workWithItem}>Low confidence or self-esteem</li>
                </ul>
              </section>

              {/* Section 4: How I work with younger children */}
              <section className={styles.approach}>
                <h2>How I work with younger children</h2>
                <p>
                  Children don&apos;t sit on a couch and talk about their feelings the way adults
                  might. They process the world through play, through stories, through drawing and
                  making things. That&apos;s why I use play-based psychodynamic therapy — it works
                  with the way children naturally communicate.
                </p>
                <p>
                  In sessions, children might use a sand tray to create worlds and scenarios. They
                  might draw, paint, or use toys to act out situations. Sometimes we talk, sometimes
                  we don&apos;t. I follow your child&apos;s lead and meet them where they are.
                </p>
                <p>
                  My therapy room at Colchester Business Centre is set up with younger clients in
                  mind. It&apos;s a ground-floor space, quiet and calm. Plants, soft lighting, a
                  couch and comfortable chairs. There&apos;s a desk with toys, art materials, and
                  therapeutic play equipment. Fidgets are available for any age, and stimming is
                  welcomed — this matters particularly for neurodivergent children who need to move
                  to think.
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
                  For younger children, a parent or carer usually brings them to the waiting area
                  and collects them afterwards. Some children separate easily; others need time. I
                  work with whatever your child needs to feel comfortable.
                </p>
                <p>
                  There&apos;s no script for what happens in sessions. Some children arrive ready to
                  play. Others need time to settle. Some talk constantly; some barely speak for
                  weeks. All of this is normal and all of it is therapeutic. I follow your
                  child&apos;s pace rather than imposing my own agenda.
                </p>
                <p>
                  Therapy is open-ended — we work for as long as your child needs, not to a fixed
                  number of sessions. Endings are planned carefully and worked through together.
                </p>
              </section>

              {/* Section 6: For parents */}
              <section id="for-parents" className={styles.forParentsSection}>
                <h2>For parents: how I work with you</h2>
                <p>
                  Child therapy isn&apos;t just about the child — it involves you too. Before I meet
                  your child, I&apos;ll have an initial conversation with you (either in person or
                  by phone) to understand the full picture: what&apos;s happening, what you&apos;ve
                  noticed, your child&apos;s history, and what you&apos;re hoping might change.
                </p>
                <p>
                  Throughout the therapy, I offer regular parent review meetings. These happen
                  without your child present. I won&apos;t share specific things your child has said
                  — their sessions are confidential — but I&apos;ll discuss general themes, how the
                  work is progressing, and how you can support them at home.
                </p>
                <p>
                  If you&apos;re finding it hard yourself — if your child&apos;s difficulties are
                  affecting your own wellbeing — I also offer parent-only sessions. Sometimes the
                  most helpful thing is for parents to have their own space to process what&apos;s
                  happening.
                </p>

                <div className={styles.experienceNote}>
                  <p>
                    I&apos;ve worked extensively with children and families in schools and
                    community settings — including NHS Essex (workshops with children and parents
                    in primary and secondary schools), Sir Bobby Robson School in Ipswich
                    (SEN-specific provision), Mind Mid &amp; North East Essex (youth work in
                    schools), and ongoing work with YMCA in Ipswich supporting primary school
                    children and young people in supported accommodation.
                  </p>
                </div>

                <div className={styles.parentResources}>
                  <Link
                    href="/blog/supporting-child-through-therapy"
                    className={styles.resourceLink}
                  >
                    Read: Supporting Your Child Through Therapy
                  </Link>
                  <Link
                    href="/blog/school-avoidance-education-feels-impossible"
                    className={styles.resourceLink}
                  >
                    Read: School Avoidance Support
                  </Link>
                </div>
              </section>

              {/* Section 7: Working with schools and other professionals */}
              <section className={styles.schoolSection}>
                <h2>Working with schools and other professionals</h2>
                <p>
                  With your consent, I can liaise with your child&apos;s school — their class
                  teacher, SENCo, or ELSA. Sometimes a joined-up approach makes a real difference,
                  especially when a child is struggling in the classroom as well as at home.
                </p>
                <p>
                  I can write letters for EHCP applications or reviews if therapy observations
                  would be helpful. I&apos;m also happy to coordinate with other professionals
                  involved in your child&apos;s care — paediatricians, occupational therapists,
                  speech and language therapists — where that&apos;s useful.
                </p>
                <p>
                  This kind of communication only happens with your explicit agreement. You&apos;re
                  always in control of who I speak to and what information is shared.
                </p>
              </section>

              {/* Section 8: What I don't work with at this age */}
              <section className={styles.limitsSection}>
                <h2>What I don&apos;t work with at this age</h2>
                <p>
                  There are some situations where a different kind of support would be more
                  appropriate:
                </p>
                <ul className={styles.limitsList}>
                  <li className={styles.limitsItem}>
                    <strong>Acute crisis or active risk.</strong> If your child is in immediate
                    danger or experiencing a mental health crisis, they need a multidisciplinary
                    team — CAMHS crisis services, A&amp;E, or your GP. Private therapy can&apos;t
                    provide the wraparound support a child in crisis needs.
                  </li>
                  <li className={styles.limitsItem}>
                    <strong>Online therapy for under-16s.</strong> I only offer online sessions to
                    clients aged 16 and over. For younger children, the work needs to happen in
                    person where I can use play and creative materials effectively, and where
                    confidentiality can be properly maintained. Learn more about{' '}
                    <Link href="/online-therapy" className={styles.limitsLink}>
                      online therapy and who it&apos;s for
                    </Link>.
                  </li>
                </ul>
              </section>

              {/* Section 9: Crisis signposting */}
              <section className={styles.crisisSection}>
                <h2>If your child needs urgent help</h2>
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
              </section>

              {/* Section 10: CTA */}
              <section className={styles.ctaSection}>
                <h2>Start with a free 15-minute call</h2>
                <p>
                  This is a conversation just for you, as the parent — a chance to tell me
                  what&apos;s happening, ask any questions, and see whether I might be the right
                  fit for your child. No pressure, no commitment.
                </p>
                <Link href="/book-now" className={styles.ctaButton}>
                  Book a free consultation
                </Link>
              </section>

            </div>
          </section>
        </div>
      </div>
    </>
  );
}
