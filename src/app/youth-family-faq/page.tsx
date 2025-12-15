import { Metadata } from 'next';
import styles from './youth-family-faq.module.scss';
import buttonStyles from '../../components/ui/button.module.scss';
import Link from 'next/link';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title:
    'Youth & Family Therapy FAQ | Common Questions About Child, Teen & Young Adult Therapy | Colchester',
  description:
    'Answers to frequently asked questions about child therapy, teenage therapy, and young adult therapy. Expert guidance for families considering therapy in Colchester, Essex.',
  keywords: [
    'child therapy FAQ Colchester',
    'teenage therapy questions Essex',
    'young adult therapy FAQ',
    'family therapy questions',
    'therapy for children FAQ',
    'teen therapy FAQ Colchester',
    'youth therapy questions Essex',
  ],
  authors: [{ name: 'Andreea Horhocea' }],
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/youth-family-faq',
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
    title: 'Youth & Family Therapy FAQ | Common Questions About Therapy for Young People',
    description:
      'Answers to frequently asked questions about therapy for children, teenagers, and young adults in Colchester.',
    type: 'website',
    url: 'https://nextgentherapy.co.uk/youth-family-faq',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    images: [
      {
        url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Youth & Family Therapy FAQ - Next Generation Therapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Youth & Family Therapy FAQ | Common Questions About Therapy for Young People',
    description:
      'Answers to frequently asked questions about therapy for children, teenagers, and young adults in Colchester.',
    images: ['https://nextgentherapy.co.uk/images/default-social-share.jpg'],
  },
};

export default function YouthFamilyFAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What age groups do you work with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I work with children from age 5 through young adults up to age 25. Each age group has different needs: play-based therapy for younger children (5-12), talking therapy for teenagers (13-18), and specialized support for young adults (18-25) navigating independence and life transitions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I know if my child needs therapy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Consider therapy if your child is experiencing persistent difficulties that interfere with daily life, such as anxiety that prevents school attendance, behavioral changes lasting more than a few weeks, difficulty processing a traumatic event, or expressing feelings of hopelessness. Trust your parental instincts - if you're concerned, it's worth exploring.",
        },
      },
      {
        '@type': 'Question',
        name: 'Will my teenager actually talk to a therapist?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Many teenagers are initially reluctant but often engage once they feel heard and respected. I focus on building rapport, respecting their autonomy, and ensuring they don't feel judged. Most teenagers appreciate having a neutral adult who listens without trying to fix everything immediately.",
        },
      },
      {
        '@type': 'Question',
        name: 'How long does therapy typically last?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This varies greatly depending on the individual and their needs. Some young people benefit from short-term therapy (6-12 sessions) for specific issues, while others need longer-term support. We regularly review progress and discuss when therapy feels complete.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer online therapy for young people?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, I offer online sessions for teenagers and young adults when appropriate. However, I prefer in-person sessions for younger children as play therapy is more effective face-to-face. Online therapy can be particularly helpful for young people with school anxiety or those away at university.',
        },
      },
    ],
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
        name: 'Youth & Family FAQ',
        item: 'https://nextgentherapy.co.uk/youth-family-faq',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className={styles.page}>
        <main className={styles.main}>
          {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.pageTitle}>Youth & Family Therapy FAQ</h1>
            <p className={styles.heroSubtitle}>
              Common questions about therapy for children, teenagers, and young adults
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className={styles.serviceIntro}>
          <div className={styles.introContent}>
            <h2>Everything You Need to Know</h2>
            <p>
              Considering therapy for your child, teenager, or young adult can raise many questions.
              As parents and young people, you want to understand what therapy involves, how it
              works, and what to expect. Here are answers to the most common questions I receive in
              my Colchester practice.
            </p>

            <p>
              These answers are based on my experience working with children, teenagers, and young
              adults across Essex, and the concerns most frequently raised by families seeking
              support.
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className={styles.faqSection}>
          <div className={styles.faqContainer}>
            {/* General Questions */}
            <h2>General Questions About Youth Therapy</h2>

            <div className={styles.faqItem}>
              <h3>What age groups do you work with?</h3>
              <p>
                I work with children from age 5 through young adults up to age 25. Each age group
                has different needs: play-based therapy for younger children (5-12), talking therapy
                for teenagers (13-18), and specialized support for young adults (18-25) navigating
                independence and life transitions.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>How do I know if my child needs therapy?</h3>
              <p>
                Consider therapy if your child is experiencing persistent difficulties that
                interfere with daily life, such as anxiety that prevents school attendance,
                behavioral changes lasting more than a few weeks, difficulty processing a traumatic
                event, or expressing feelings of hopelessness. Trust your parental instincts - if
                you&apos;re concerned, it&apos;s worth exploring.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>What&apos;s the difference between child, teenage, and young adult therapy?</h3>
              <p>
                <strong>Child therapy (5-12)</strong> is primarily play-based, using toys, art, and
                games to help children express feelings. <strong>Teenage therapy (13-18)</strong>{' '}
                focuses on talking therapy with emphasis on confidentiality and independence.{' '}
                <strong>Young adult therapy (18-25)</strong> addresses life transitions, career
                stress, relationships, and emerging independence while navigating family dynamics.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Do you work with the whole family or just the young person?</h3>
              <p>
                I focus on individual therapy with the young person. For younger children, I may provide
                brief updates to parents as needed. For teenagers, individual sessions are primary and
                confidential (with teen&apos;s consent for any parent communication). Young adults
                have completely individual sessions. One-off parent support sessions are available
                separately at the standard session rate if needed.
              </p>
            </div>

            {/* Child Therapy Specific */}
            <h2>Child Therapy Questions (Ages 5-12)</h2>

            <div className={styles.faqItem}>
              <h3>How do you explain therapy to young children?</h3>
              <p>
                I describe therapy as &quot;a special place where children can talk about their
                feelings and play games that help them feel better.&quot; For very young children, I
                might say &quot;We&apos;re going to meet someone who helps children with their
                worries.&quot; The language is always age-appropriate and non-threatening.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>What happens in a typical child therapy session?</h3>
              <p>
                Sessions usually involve play therapy - using toys, drawing, storytelling, or games
                to help children express themselves. Children naturally communicate through play, so
                this feels fun rather than clinical. I might also use books about feelings or simple
                mindfulness exercises appropriate for their age.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>My child is very shy. Will they be able to engage in therapy?</h3>
              <p>
                Absolutely. Shy children often benefit greatly from therapy once they feel safe. I
                allow plenty of time for building trust and never pressure children to talk. Many
                shy children find it easier to express themselves through drawing, toys, or sand
                play rather than direct conversation.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>How involved will I be as a parent in my child&apos;s therapy?</h3>
              <p>
                Limited but supportive. For younger children, I provide brief updates and guidance
                as needed to support your child&apos;s progress. The focus remains on individual
                therapy with your child. If you need additional support as a parent, one-off
                sessions are available separately at the standard rate.
              </p>
            </div>

            {/* Teenage Therapy Specific */}
            <h2>Teenage Therapy Questions (Ages 13-18)</h2>

            <div className={styles.faqItem}>
              <h3>Will my teenager actually talk to a therapist?</h3>
              <p>
                Many teenagers are initially reluctant but often engage once they feel heard and
                respected. I focus on building rapport, respecting their autonomy, and ensuring they
                don&apos;t feel judged. Most teenagers appreciate having a neutral adult who listens
                without trying to &quot;fix&quot; everything immediately.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>What if my teenager doesn&apos;t want to go to therapy?</h3>
              <p>
                This is very common. I recommend starting with an honest conversation about why you
                think therapy might help, emphasizing that it&apos;s their space and they won&apos;t
                be forced to share anything they don&apos;t want to. Sometimes agreeing to try just
                one or two sessions can help overcome initial resistance.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>How much will you tell me about what my teenager discusses in sessions?</h3>
              <p>
                Teenage therapy is confidential with important exceptions: if there&apos;s risk of
                serious harm to themselves or others, or if they&apos;re being abused. Otherwise,
                what your teenager shares stays private unless they choose to include you. I do
                provide general updates about progress and strategies you can use to support them.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Can therapy help with school refusal or school anxiety?</h3>
              <p>
                Yes, absolutely. School anxiety and emotionally-based school avoidance are areas I
                specialize in. We work together to understand what makes school feel threatening and
                develop strategies to gradually rebuild confidence and attendance. This often
                involves working with both the teenager and school staff.
              </p>
            </div>

            {/* Young Adult Therapy Specific */}
            <h2>Young Adult Therapy Questions (Ages 18-25)</h2>

            <div className={styles.faqItem}>
              <h3>My young adult child still lives at home. How does therapy work?</h3>
              <p>
                Young adult therapy respects their legal autonomy and maintains complete
                confidentiality. Sessions focus entirely on the young adult&apos;s needs and goals.
                If parents need support understanding their young adult&apos;s journey, one-off
                support sessions are available separately at the standard session rate.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Can you help with career anxiety and life direction concerns?</h3>
              <p>
                Yes, these are very common concerns for young adults. We explore their values,
                interests, and fears about the future. Many young adults feel overwhelmed by choices
                and expectations. Therapy can help them develop confidence in decision-making and
                manage anxiety about their future.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>What about university mental health support vs. private therapy?</h3>
              <p>
                University counseling services are valuable but often have long waiting lists and
                session limits. Private therapy offers more flexibility, longer-term support, and
                specialized approaches. Many young adults benefit from having support both at
                university and privately.
              </p>
            </div>

            {/* Practical Questions */}
            <h2>Practical Questions</h2>

            <div className={styles.faqItem}>
              <h3>How long does therapy typically last?</h3>
              <p>
                This varies greatly depending on the individual and their needs. Some young people
                benefit from short-term therapy (6-12 sessions) for specific issues, while others
                need longer-term support. We regularly review progress and discuss when therapy
                feels complete.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>How often do you meet with young people?</h3>
              <p>
                Typically weekly, especially initially. As progress is made, we might move to
                fortnightly sessions. Consistency is important for building trust and maintaining
                therapeutic momentum, particularly with younger children and teenagers.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>What should we expect in the first session?</h3>
              <p>
                First sessions focus on getting to know each other and understanding what brings you
                to therapy. For children, this includes lots of play. For teenagers and young
                adults, we discuss confidentiality, their concerns, and what they hope therapy might
                help with. There&apos;s no pressure to share deeply personal information
                immediately.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Do you offer online therapy for young people?</h3>
              <p>
                Yes, I offer online sessions for teenagers and young adults when appropriate.
                However, I prefer in-person sessions for younger children as play therapy is more
                effective face-to-face. Online therapy can be particularly helpful for young people
                with school anxiety or those away at university.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>What areas of Colchester and Essex do you serve?</h3>
              <p>
                My practice is located in Colchester, and I work with families throughout Essex
                including Chelmsford, Braintree, Witham, Maldon, and surrounding areas. I also offer
                online sessions for those who prefer remote therapy or live further away.
              </p>
            </div>

            {/* Crisis and Safety Questions */}
            <h2>Safety and Crisis Questions</h2>

            <div className={styles.faqItem}>
              <h3>What if my child or teenager is having thoughts of self-harm?</h3>
              <p>
                Please seek immediate support. Contact your GP, call 111, or go to A&E if
                there&apos;s immediate danger. I work with young people who have self-harm thoughts,
                but safety is always the priority. We&apos;ll work together to create safety plans
                and involve appropriate professional support.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>How do you handle confidentiality when there are safety concerns?</h3>
              <p>
                I explain confidentiality clearly to all young people: what they share stays private
                unless there&apos;s risk of serious harm to themselves or others, or if someone is
                hurting them. When possible, I involve young people in decisions about sharing
                information and explain why it&apos;s necessary.
              </p>
            </div>

            {/* Family Dynamics */}
            <h2>Family Dynamics Questions</h2>

            <div className={styles.faqItem}>
              <h3>
                My partner and I disagree about whether our child needs therapy. What should we do?
              </h3>
              <p>
                This is common. Consider scheduling a consultation where we can discuss your
                concerns together. Sometimes one parent is more worried while the other prefers to
                &quot;wait and see.&quot; Understanding your child&apos;s needs and the benefits of
                early intervention can help you reach agreement.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>How do you work with divorced or separated parents?</h3>
              <p>
                I work with whatever family structure exists while maintaining focus on the young person&apos;s
                individual therapy. Brief communications with parents can be coordinated as needed.
                The young person&apos;s wellbeing is always the priority. If parents need additional
                support, one-off sessions are available separately at the standard rate.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>What if my child&apos;s other parent doesn&apos;t support therapy?</h3>
              <p>
                This can be challenging. I encourage open communication about the benefits of
                therapy and can provide information to help explain why professional support might
                be helpful. In some cases, one parent can proceed with therapy while keeping the
                other informed about general progress.
              </p>
            </div>

            {/* Progress and Outcomes */}
            <h2>Progress and Outcomes</h2>

            <div className={styles.faqItem}>
              <h3>How will I know if therapy is working?</h3>
              <p>
                Progress looks different for each young person. You might notice improved mood,
                better communication, increased confidence, or better coping with stress. For
                children, you might see changes in play or behavior. I provide regular updates and
                we&apos;ll discuss what progress looks like for your specific situation.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>What if my child doesn&apos;t seem to be improving?</h3>
              <p>
                Progress isn&apos;t always linear, and sometimes things feel worse before they
                improve as young people process difficult emotions. However, if we&apos;re not
                seeing progress after several sessions, we&apos;ll reassess the approach and discuss
                whether a different therapeutic method or additional support might be helpful.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>How do we know when therapy is finished?</h3>
              <p>
                Therapy concludes when the young person has achieved their goals, developed good
                coping strategies, and feels confident managing their challenges. This is always a
                collaborative decision. Some young people return for &quot;top-up&quot; sessions
                during stressful periods, which is completely normal.
              </p>
            </div>
          </div>
        </section>

        {/* Still Have Questions Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Still Have Questions?</h2>
            <p>
              Every family&apos;s situation is unique, and you may have specific questions not
              covered here. I&apos;m happy to discuss your particular circumstances and how therapy
              might help your child, teenager, or young adult.
            </p>

            <div className={styles.ctaButtons}>
              <Link href="/contact" className={buttonStyles.button}>
                Ask Your Question
              </Link>
              <Link href="/about" className={buttonStyles.button}>
                Learn About My Approach
              </Link>
            </div>

            <p className={styles.contactNote}>
              All consultations are confidential and take place in my comfortable practice in
              Colchester, Essex.
            </p>
          </div>
        </section>

        {/* Related Services */}
        <section className={styles.relatedSection}>
          <h2>Explore Our Youth & Family Services</h2>
          <div className={styles.relatedGrid}>
            <Link href="/child-therapy" className={styles.relatedCard}>
              <h3>Child Therapy (Ages 5-12)</h3>
              <p>
                Gentle, play-based therapy helping children express feelings and develop coping
                skills through creative approaches.
              </p>
            </Link>

            <Link href="/teenage-therapy" className={styles.relatedCard}>
              <h3>Teenage Therapy (Ages 13-18)</h3>
              <p>
                Confidential support for teenagers navigating identity, relationships, school
                stress, and emotional challenges.
              </p>
            </Link>

            <Link href="/young-adult-therapy" className={styles.relatedCard}>
              <h3>Young Adult Therapy (Ages 18-25)</h3>
              <p>
                Specialized support for life transitions, career anxiety, relationships, and
                developing independence.
              </p>
            </Link>

            <Link
              href="/blog/school-avoidance-education-feels-impossible"
              className={styles.relatedCard}
            >
              <h3>School Anxiety Support</h3>
              <p>
                Expert help for emotionally-based school avoidance, school phobia, and
                education-related anxiety.
              </p>
            </Link>

            <Link href="/parent-support" className={styles.relatedCard}>
              <h3>Parent Support & Guidance</h3>
              <p>
                Practical strategies and emotional support for parents navigating their child&apos;s
                mental health journey.
              </p>
            </Link>

            <Link href="/services" className={styles.relatedCard}>
              <h3>All Services</h3>
              <p>
                Comprehensive overview of all therapy services offered for individuals, families,
                and young people in Colchester.
              </p>
            </Link>
          </div>
        </section>
        </main>
      </div>
    </>
  );
}
