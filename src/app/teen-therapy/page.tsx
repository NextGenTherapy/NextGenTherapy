import type { Metadata } from 'next';
import Link from 'next/link';

import { TeenageTherapySchema } from '@/components/seo/ServiceSchema';
import PageHero from '@/components/ui/PageHero';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

import buttonStyles from '../../components/ui/button.module.scss';
import styles from './teen-therapy.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Teen Therapy Colchester | Anxiety, School Refusal',
  description:
    'Psychodynamic therapy for teenagers aged 13–17 in Colchester. Anxiety, school refusal, self-harm, identity. BACP registered with NHS & SEN background.',
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
        url: 'https://nextgentherapy.co.uk/images/og/og-teen-therapy.jpg',
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
    images: ['https://nextgentherapy.co.uk/images/og/og-teen-therapy.jpg'],
  },
};

export default function TeenTherapyPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Section 1: Hero */}
      <PageHero
        eyebrow="Therapy for Teenagers"
        title="If your teenager is struggling and you don't know what to do next"
        lead="In-person psychodynamic therapy for teenagers aged 13–17 in Colchester. Anxiety, school refusal, self-harm, low mood, identity questions, friendship and family stuff. I work alongside parents when it's helpful, and always on the young person's terms."
      />

      <div className={styles.page}>
        <main className={styles.main}>
          {/* Section 2: Parent empathy */}
          <section className={styles.surfaceSection}>
            <div className={styles.narrowContainer}>
              <h2>If you&apos;re a parent reading this at 11pm</h2>
              <p className={styles.leadText}>
                A lot of the parents who contact me find the website at night, after their kid has
                gone to bed and the house is finally quiet enough to think. Most of them have
                already tried something — talking to school, GP visits, the CAMHS referral, online
                forums, books — and most are exhausted, scared, and quietly worried that
                they&apos;re somehow making it worse.
              </p>
              <p>
                If that&apos;s where you are right now, the first thing I want to say is: you
                haven&apos;t done anything wrong by being here, and the fact that you&apos;re
                looking is itself part of helping.
              </p>
              <p>
                The second thing I want to say is more practical. CAMHS waitlists in this part of
                the country are often 12 months or longer. School counselling is patchy and
                time-limited. There aren&apos;t many specialist private therapists in Colchester
                who work with teenagers in a way that takes both the young person and the parents
                seriously. I do.
              </p>
            </div>
          </section>

          {/* Section 3: What teenagers usually come to me with */}
          <section className={styles.normalSection}>
            <div className={styles.sectionContainer}>
              <h2>What teenagers usually come to me with</h2>
              <ul className={styles.topicsList}>
                <li className={styles.topicItem}>
                  <strong>Anxiety and panic</strong> — including the kind that doesn&apos;t have an
                  obvious cause
                </li>
                <li className={styles.topicItem}>
                  <strong>School refusal and school anxiety</strong> — when getting through the
                  school gates feels impossible
                </li>
                <li className={styles.topicItem}>
                  <strong>Mild self-harm</strong> — cutting, scratching, hair-pulling, and other
                  forms of self-injury that aren&apos;t immediately life-threatening but are part
                  of how a young person is coping
                </li>
                <li className={styles.topicItem}>
                  <strong>Low mood and feeling stuck</strong> — without it necessarily being
                  clinical depression
                </li>
                <li className={styles.topicItem}>
                  <strong>Friendship and social difficulties</strong> — including bullying,
                  exclusion, and the particular cruelty of teenage social dynamics
                </li>
                <li className={styles.topicItem}>
                  <strong>Family conflict</strong> — when home doesn&apos;t feel like a place to
                  land
                </li>
                <li className={styles.topicItem}>
                  <strong>Identity questions</strong> — gender, sexuality, &ldquo;who am I outside
                  of being a daughter / son / student&rdquo;
                </li>
                <li className={styles.topicItem}>
                  <strong>Behavioural changes</strong> that don&apos;t have a name yet but are
                  worrying you as a parent
                </li>
                <li className={styles.topicItem}>
                  <strong>Late-identified ADHD or autism</strong> — many of the teenage girls I see
                  were missed in childhood because they didn&apos;t fit the stereotype
                </li>
                <li className={styles.topicItem}>
                  <strong>Body image and the early signs of disordered eating</strong>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: What I don't work with at this age */}
          <section className={styles.surfaceSection}>
            <div className={styles.narrowContainer}>
              <h2>What I don&apos;t work with at this age</h2>
              <p>
                I&apos;m not the right therapist for every teenager, and being honest about that is
                part of doing the work properly.
              </p>
              <p>
                I don&apos;t work with teenagers in <strong>acute crisis</strong> — if your child
                is actively suicidal, has made an attempt, or has a severe eating disorder
                requiring medical monitoring, they need a specialist team rather than weekly
                individual therapy. I can help you think about what that might look like, but I
                can&apos;t be the only thing in place.
              </p>
              <p>
                I also don&apos;t work <strong>online with under-16s</strong> — this is a
                confidentiality decision. Younger teenagers have sometimes had sessions in houses
                where parents are present in adjacent rooms, which undermines the work. For
                13–15-year-olds, sessions need to be in person at Colchester Business Centre.{' '}
                <Link href="/online-therapy" className={styles.link}>
                  Read more about online therapy →
                </Link>
              </p>
            </div>
          </section>

          {/* Section 5: How I work */}
          <section className={styles.normalSection}>
            <div className={styles.narrowContainer}>
              <h2>How I work</h2>
              <p>
                Therapy with teenagers is different from therapy with adults, and a lot of that
                difference is about who&apos;s in charge of the work.
              </p>
              <p>
                The teenager is the client. What we talk about in sessions is between us, with the
                same confidentiality I&apos;d offer any adult — except in the rare situations where
                I&apos;m legally and ethically required to involve someone else (immediate risk of
                harm, mainly). I explain this clearly in our first session, in language they can
                actually understand, and they know exactly where the limits are.
              </p>
              <p>
                I work psychodynamically, which means we&apos;re not running through worksheets and
                homework. We&apos;re trying to understand what&apos;s actually going on for them —
                what they&apos;re feeling, what they&apos;re not letting themselves feel, what&apos;s
                been happening at home and at school, and what their version of the situation looks
                like. A lot of teenagers have spent years being talked at by adults who think they
                know best. Therapy might be the first place they&apos;re being taken seriously.
              </p>
              <p>
                Sessions involve talking, but also writing, drawing, sometimes worksheets between
                sessions if it helps. I follow the teenager&apos;s lead on what works for them.
              </p>
            </div>
          </section>

          {/* Section 6: How I work with parents */}
          <section className={styles.surfaceSection}>
            <div className={styles.narrowContainer}>
              <h2>How I work with parents</h2>
              <p>
                Parents are part of the picture, and I never pretend they&apos;re not. Here&apos;s
                how I usually structure the parent involvement:
              </p>
              <ul className={styles.approachList}>
                <li className={styles.approachItem}>
                  <h3>Initial parent conversation</h3>
                  <p>
                    Before I start work with your teenager, we&apos;ll have a conversation —
                    sometimes a phone call, sometimes a brief in-person meeting — where you tell me
                    what&apos;s been going on, what you&apos;re worried about, and what you&apos;re
                    hoping therapy might help with. This is also where I explain how I work and what
                    to expect.
                  </p>
                </li>
                <li className={styles.approachItem}>
                  <h3>Confidentiality boundaries</h3>
                  <p>
                    I&apos;m clear with both you and your teenager about what stays in the room and
                    what doesn&apos;t. The general principle: the content of sessions is private,
                    but I&apos;ll let you know if something happens that genuinely affects safety or
                    wellbeing.
                  </p>
                </li>
                <li className={styles.approachItem}>
                  <h3>Parent sessions when useful</h3>
                  <p>
                    Sometimes I offer parent-only sessions to think about what&apos;s happening at
                    home, how to respond to specific situations, and how to look after yourself
                    while looking after your child. These are paid sessions in their own right and
                    they&apos;re not me reporting on your child — they&apos;re me supporting you as
                    a parent.
                  </p>
                </li>
                <li className={styles.approachItem}>
                  <h3>Working with school where appropriate</h3>
                  <p>
                    If your teenager has an EHCP, is engaging with SENCo support, or is having
                    difficulties that need school involvement, I can work alongside the school with
                    consent.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7: My experience working with young people */}
          <section className={styles.normalSection}>
            <div className={styles.narrowContainer}>
              <h2>My experience working with young people</h2>
              <p>
                Most of my professional experience before private practice was with children and
                teenagers:
              </p>
              <ul className={styles.experienceList}>
                <li>
                  <strong>NHS Essex</strong> — workshops and seminars with children and parents in
                  primary and secondary schools across Essex
                </li>
                <li>
                  <strong>Sir Bobby Robson School, Ipswich</strong> — a year of SEN-specific
                  therapeutic provision for young people with significant additional needs
                </li>
                <li>
                  <strong>Mind, Mid &amp; North East Essex</strong> — youth work in schools
                </li>
                <li>
                  <strong>YMCA Ipswich (current)</strong> — two ongoing projects: supporting primary
                  school children and working with residents in YMCA accommodation
                </li>
              </ul>
              <p>
                Alongside this I have post-qualification training in working with neurodiverse
                young people, eating disorders, trauma and attachment, and LGBTQ+ clients. I&apos;m
                BACP registered and in ongoing clinical supervision.
              </p>
            </div>
          </section>

          {/* Section 8: What if my teenager refuses to come? */}
          <section className={styles.surfaceSection}>
            <div className={styles.narrowContainer}>
              <h2>What if my teenager refuses to come?</h2>
              <p>
                This is the question I get most often, and the honest answer is: it depends.
              </p>
              <p>
                Some teenagers are openly looking for therapy and just need a parent to make it
                possible. Others are firmly against it because they associate &ldquo;therapy&rdquo;
                with being labelled, judged, or fixed. Most are somewhere in between — curious,
                scared, defensive, hopeful, all at once.
              </p>
              <p>
                If your teenager is on the fence, I&apos;d suggest two things. First, the free
                15-minute call can be with you (the parent) only — you can ask me anything, decide
                if I sound like someone they could tolerate, and only then bring it up with them.
                Second, I&apos;m comfortable having a brief introductory chat with the young person
                directly, with no commitment, before any first session is booked. Most teenagers
                find that less threatening than walking into a &ldquo;therapy appointment&rdquo;
                cold.
              </p>
              <p>
                I never pressure a young person to keep coming if they don&apos;t want to. Forced
                therapy isn&apos;t therapy.
              </p>
            </div>
          </section>

          {/* Section: Related Services */}
          <section className={styles.relatedSection}>
            <div className={styles.narrowContainer}>
              <h2>Looking for therapy for a younger child?</h2>
              <p>
                If your child is under 13, I also offer{' '}
                <Link href="/child-therapy" className={styles.link}>
                  play-based therapy for children aged 4–12
                </Link>
                . The approach is different — more play, less talking — but the underlying
                psychodynamic framework is the same.
              </p>
            </div>
          </section>

          {/* Section 9: Crisis signposting */}
          <section className={styles.crisisSection}>
            <div className={styles.sectionContainer}>
              <h2>If your teenager is in crisis right now</h2>
              <p>
                Therapy is a slow process. If your teenager is in immediate danger — actively
                suicidal, has made an attempt, or is in acute mental health crisis — please contact:
              </p>
              <div className={styles.crisisGrid}>
                <div className={styles.crisisItem}>
                  <h3>NHS 111</h3>
                  <p>
                    Call <strong>111</strong> and press option 2 for the mental health crisis line.
                    Available 24/7.
                  </p>
                </div>
                <div className={styles.crisisItem}>
                  <h3>Your GP</h3>
                  <p>For an emergency same-day appointment.</p>
                </div>
                <div className={styles.crisisItem}>
                  <h3>A&amp;E at Colchester General Hospital</h3>
                  <p>If there&apos;s immediate physical risk.</p>
                </div>
                <div className={styles.crisisItem}>
                  <h3>Shout</h3>
                  <p>
                    Text <strong>85258</strong> for free, 24/7 text support.
                  </p>
                </div>
                <div className={styles.crisisItem}>
                  <h3>Papyrus HOPELINE247</h3>
                  <p>
                    Call <strong>0800 068 4141</strong> for under-35s with thoughts of suicide.
                  </p>
                </div>
              </div>
              <p className={styles.crisisClosing}>
                I&apos;m not a crisis service and can&apos;t replace one. But once the immediate
                danger has passed, weekly therapy can be part of what helps your teenager move
                forward.
              </p>
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
