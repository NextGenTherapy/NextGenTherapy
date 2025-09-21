import { Metadata } from 'next';
import styles from './parent-support.module.scss';
import buttonStyles from '../../components/ui/button.module.scss';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Parent Support and Guidance | Supporting Your Child&apos;s Mental Health | Colchester',
  description:
    'Expert guidance for parents navigating their child&apos;s mental health journey. Support for families dealing with anxiety, depression, school avoidance, and behavioral challenges in Colchester.',
  keywords:
    'parent support Colchester, child mental health guidance, family therapy support Essex, parenting anxious child, supporting child therapy, parent counselling Colchester, family mental health support, child psychology guidance Essex',
  openGraph: {
    title: 'Parent Support and Guidance | Supporting Your Child&apos;s Mental Health',
    description:
      'Expert guidance for parents navigating their child&apos;s mental health journey in Colchester.',
    type: 'website',
    url: 'https://nextgentherapy.co.uk/parent-support',
  },
};

export default function ParentSupportPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.pageTitle}>Parent Support and Guidance</h1>
            <p className={styles.heroSubtitle}>
              Supporting you as you support your child through their mental health journey
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className={styles.serviceIntro}>
          <div className={styles.introContent}>
            <h2>You&apos;re Not Alone in This Journey</h2>
            <p>
              Watching your child struggle with their mental health can be one of the most
              challenging experiences a parent faces. You want to help, but you might feel unsure
              about what to say or do. You&apos;re trying your best, but sometimes it feels like
              nothing you do makes a difference.
            </p>

            <p>
              These feelings are completely normal. Parenting a child with mental health
              difficulties requires additional skills, patience, and support that many of us
              weren&apos;t taught. In my Colchester practice, I work extensively with parents and
              carers to help them feel more confident and equipped to support their children&apos;s
              emotional wellbeing.
            </p>
          </div>
        </section>

        {/* What Parent Support Includes */}
        <section className={styles.serviceDetails}>
          <h2>What Parent Support and Guidance Includes</h2>

          <div className={styles.detailsGrid}>
            <div className={styles.detailCard}>
              <h3>Understanding Your Child&apos;s Experience</h3>
              <p>
                Learn about your child&apos;s specific mental health challenges, including anxiety,
                depression, trauma responses, or behavioral difficulties. Understanding the
                &apos;why&apos; behind behaviors can help you respond with compassion rather than
                frustration.
              </p>
            </div>

            <div className={styles.detailCard}>
              <h3>Communication Strategies</h3>
              <p>
                Develop skills for talking with your child about difficult topics, validating their
                emotions, and creating safe spaces for them to express themselves. Learn how to
                listen effectively and when to offer advice versus when to simply be present.
              </p>
            </div>

            <div className={styles.detailCard}>
              <h3>Managing Your Own Emotions</h3>
              <p>
                Supporting a struggling child is emotionally demanding. Learn strategies for
                managing your own stress, anxiety, and feelings of helplessness while maintaining
                your emotional availability for your family.
              </p>
            </div>

            <div className={styles.detailCard}>
              <h3>Creating Supportive Home Environment</h3>
              <p>
                Understand how to structure your home environment to support your child&apos;s
                emotional regulation, including routines, boundaries, and family dynamics that
                promote healing and stability.
              </p>
            </div>

            <div className={styles.detailCard}>
              <h3>Working with Schools and Professionals</h3>
              <p>
                Navigate relationships with teachers, mental health professionals, and other support
                services. Learn how to advocate effectively for your child while building
                collaborative relationships.
              </p>
            </div>

            <div className={styles.detailCard}>
              <h3>Supporting Siblings and Family</h3>
              <p>
                Mental health difficulties in one child affect the whole family. Learn strategies
                for supporting siblings, maintaining family relationships, and ensuring
                everyone&apos;s needs are considered.
              </p>
            </div>
          </div>
        </section>

        {/* Common Concerns */}
        <section className={styles.concernsSection}>
          <h2>Common Concerns I Help Parents With</h2>

          <div className={styles.concernsList}>
            <div className={styles.concernItem}>
              <h3>&quot;I don&apos;t know what to say when my child is upset&quot;</h3>
              <p>
                Many parents worry about saying the wrong thing. We&apos;ll work together to develop
                your confidence in responding to your child&apos;s emotional needs with empathy and
                appropriate support.
              </p>
            </div>

            <div className={styles.concernItem}>
              <h3>&quot;My child won&apos;t talk to me about their problems&quot;</h3>
              <p>
                This is incredibly common, especially with teenagers. We&apos;ll explore ways to
                create opportunities for connection and communication that feel natural and
                non-threatening to your child.
              </p>
            </div>

            <div className={styles.concernItem}>
              <h3>&quot;I feel like I&apos;m walking on eggshells at home&quot;</h3>
              <p>
                When children are struggling, family dynamics can become tense. We&apos;ll work on
                finding the balance between being supportive and maintaining healthy boundaries and
                expectations.
              </p>
            </div>

            <div className={styles.concernItem}>
              <h3>&quot;I don&apos;t know if I should push them or give them space&quot;</h3>
              <p>
                This is one of the most difficult judgments parents face. We&apos;ll explore how to
                read your child&apos;s needs and respond appropriately to different situations and
                emotional states.
              </p>
            </div>

            <div className={styles.concernItem}>
              <h3>&quot;I&apos;m struggling with my own emotions about this&quot;</h3>
              <p>
                It&apos;s normal to feel guilty, anxious, frustrated, or helpless when your child is
                struggling. These feelings don&apos;t make you a bad parent - they make you human.
                We&apos;ll work on managing these emotions so you can be present for your family.
              </p>
            </div>

            <div className={styles.concernItem}>
              <h3>&quot;I don&apos;t know when to seek professional help&quot;</h3>
              <p>
                Understanding when your child might benefit from therapy or other professional
                support can be challenging. We&apos;ll discuss warning signs and help you make
                informed decisions about additional support.
              </p>
            </div>
          </div>
        </section>

        {/* Age-Specific Guidance */}
        <section className={styles.ageGuidanceSection}>
          <h2>Age-Specific Parenting Guidance</h2>

          <div className={styles.ageGrid}>
            <div className={styles.ageCard}>
              <h3>Early Childhood (Ages 3-7)</h3>
              <ul>
                <li>Understanding emotional development and regulation</li>
                <li>Supporting children through big feelings and tantrums</li>
                <li>Building emotional vocabulary and expression</li>
                <li>Creating predictable routines and security</li>
                <li>Dealing with separation anxiety and fears</li>
              </ul>
              <Link href="/child-therapy" className={styles.ageLink}>
                Learn about Child Therapy →
              </Link>
            </div>

            <div className={styles.ageCard}>
              <h3>School Age (Ages 8-12)</h3>
              <ul>
                <li>Supporting academic and social challenges</li>
                <li>Building confidence and resilience</li>
                <li>Managing friendship difficulties and bullying</li>
                <li>Dealing with perfectionism and performance anxiety</li>
                <li>Supporting children through family changes</li>
              </ul>
              <Link href="/child-therapy" className={styles.ageLink}>
                Learn about Child Therapy →
              </Link>
            </div>

            <div className={styles.ageCard}>
              <h3>Adolescence (Ages 13-18)</h3>
              <ul>
                <li>Navigating the push-pull of teenage independence</li>
                <li>Supporting identity development and self-discovery</li>
                <li>Managing mood changes and emotional intensity</li>
                <li>Dealing with risky behaviors and decision-making</li>
                <li>Maintaining connection while respecting autonomy</li>
              </ul>
              <Link href="/teenage-therapy" className={styles.ageLink}>
                Learn about Teenage Therapy →
              </Link>
            </div>

            <div className={styles.ageCard}>
              <h3>Young Adults (Ages 18-25)</h3>
              <ul>
                <li>Supporting the transition to independence</li>
                <li>Balancing support with encouraging autonomy</li>
                <li>Helping with life decisions and future planning</li>
                <li>Supporting through education and career challenges</li>
                <li>Maintaining relationships as roles evolve</li>
              </ul>
              <Link href="/young-adult-therapy" className={styles.ageLink}>
                Learn about Young Adult Therapy →
              </Link>
            </div>
          </div>
        </section>

        {/* Self-Care for Parents */}
        <section className={styles.selfCareSection}>
          <h2>The Importance of Parent Self-Care</h2>
          <div className={styles.selfCareContent}>
            <p>
              Supporting a child with mental health difficulties is emotionally and physically
              demanding. You cannot pour from an empty cup, and taking care of yourself isn&apos;t
              selfish - it&apos;s essential for your family&apos;s wellbeing.
            </p>

            <div className={styles.selfCareStrategies}>
              <div className={styles.selfCareCard}>
                <h3>Recognize Your Limits</h3>
                <p>
                  You cannot solve all of your child&apos;s problems, and that&apos;s okay.
                  Understanding what is and isn&apos;t within your control can help reduce feelings
                  of guilt and overwhelm.
                </p>
              </div>

              <div className={styles.selfCareCard}>
                <h3>Seek Your Own Support</h3>
                <p>
                  Whether through therapy, support groups, or trusted friends and family, having
                  your own emotional support is crucial. You need people who can listen to your
                  concerns without judgment.
                </p>
              </div>

              <div className={styles.selfCareCard}>
                <h3>Maintain Your Identity</h3>
                <p>
                  While being a parent is important, you&apos;re also an individual with your own
                  needs, interests, and relationships. Maintaining aspects of your identity outside
                  of parenting helps you stay emotionally balanced.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How I Work with Parents */}
        <section className={styles.approachSection}>
          <h2>How I Work with Parents</h2>
          <div className={styles.approachContent}>
            <p>
              My approach to parent support is collaborative and non-judgmental. I understand that
              parenting doesn&apos;t come with a manual, and every family&apos;s situation is
              unique. Together, we&apos;ll:
            </p>

            <ul className={styles.approachList}>
              <li>
                <strong>Assess your family&apos;s specific needs</strong> - Understanding your
                child&apos;s difficulties, your family dynamics, and your current challenges
              </li>
              <li>
                <strong>Develop practical strategies</strong> - Learning specific techniques and
                approaches that work for your family&apos;s situation
              </li>
              <li>
                <strong>Practice new skills</strong> - Role-playing difficult conversations and
                trying out new approaches in a safe environment
              </li>
              <li>
                <strong>Process your emotions</strong> - Working through your own feelings about
                your child&apos;s struggles and your role as a parent
              </li>
              <li>
                <strong>Build your confidence</strong> - Helping you trust your parental instincts
                while developing new skills and knowledge
              </li>
              <li>
                <strong>Plan for the future</strong> - Developing long-term strategies for
                supporting your child&apos;s continued growth and development
              </li>
            </ul>
          </div>
        </section>

        {/* When to Seek Support */}
        <section className={styles.whenToSeekSection}>
          <h2>When to Seek Parent Support</h2>
          <p>Consider parent support if you&apos;re experiencing:</p>

          <div className={styles.warningSignsGrid}>
            <div className={styles.warningCard}>
              <h3>Feeling Overwhelmed</h3>
              <p>
                If you feel constantly stressed, anxious, or exhausted by your child&apos;s needs,
                support can help you develop coping strategies and find balance.
              </p>
            </div>

            <div className={styles.warningCard}>
              <h3>Communication Difficulties</h3>
              <p>
                If conversations with your child often end in arguments, silence, or frustration, we
                can work on improving communication patterns.
              </p>
            </div>

            <div className={styles.warningCard}>
              <h3>Uncertainty About Decisions</h3>
              <p>
                If you&apos;re unsure about how to respond to your child&apos;s behaviors or whether
                to seek professional help, guidance can provide clarity.
              </p>
            </div>

            <div className={styles.warningCard}>
              <h3>Family Tensions</h3>
              <p>
                If your child&apos;s difficulties are affecting family relationships, work, or other
                aspects of your life, support can help restore balance.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Ready to Get Support?</h2>
            <p>
              Parenting a child with mental health difficulties can feel isolating, but you
              don&apos;t have to do it alone. With the right support and guidance, you can feel more
              confident and effective in helping your child thrive.
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
              All consultations are confidential and take place in my comfortable practice in
              Colchester, Essex.
            </p>
          </div>
        </section>

        {/* Related Services */}
        <section className={styles.relatedSection}>
          <h2>Related Services</h2>
          <div className={styles.relatedGrid}>
            <Link href="/child-therapy" className={styles.relatedCard}>
              <h3>Child Therapy</h3>
              <p>
                Gentle, play-based therapy for children ages 5-12 dealing with anxiety, behavioral
                challenges, and emotional difficulties.
              </p>
            </Link>

            <Link href="/teenage-therapy" className={styles.relatedCard}>
              <h3>Teenage Therapy</h3>
              <p>
                Confidential support for teenagers navigating depression, anxiety, identity issues,
                and life transitions.
              </p>
            </Link>

            <Link
              href="/blog/school-avoidance-education-feels-impossible"
              className={styles.relatedCard}
            >
              <h3>School Anxiety Support</h3>
              <p>
                Understanding and supporting emotionally based school avoidance through our
                comprehensive guide.
              </p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
