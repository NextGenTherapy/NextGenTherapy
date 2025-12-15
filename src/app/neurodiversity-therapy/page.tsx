import { Metadata } from 'next';
import styles from './neurodiversity-therapy.module.scss';
import Link from 'next/link';
import buttonStyles from '../../components/ui/button.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Neurodiversity Therapy | ADHD, Autism & SEN Support | Colchester',
  description:
    'Specialist therapy for neurodivergent children, teenagers, and young adults in Colchester. Expert support for ADHD, autism, and other neurodivergent conditions with SEN school experience.',
  keywords: [
    'neurodiversity therapy Colchester',
    'ADHD therapy Essex',
    'autism therapy Colchester',
    'SEN therapy support',
    'neurodivergent children therapy',
    'ADHD counselling Colchester',
    'autism support Essex',
    'sensory processing therapy',
    'executive function support',
    'neurodiversity counselling',
  ],
  authors: [{ name: 'Andreea Horhocea' }],
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/neurodiversity-therapy',
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
    title: 'Neurodiversity Therapy | ADHD, Autism & SEN Support',
    description:
      'Specialist therapy for neurodivergent children, teenagers, and young adults in Colchester with SEN school experience.',
    type: 'website',
    url: 'https://nextgentherapy.co.uk/neurodiversity-therapy',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    images: [
      {
        url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Neurodiversity Therapy - Next Generation Therapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neurodiversity Therapy | ADHD, Autism & SEN Support',
    description:
      'Specialist therapy for neurodivergent children, teenagers, and young adults in Colchester with SEN school experience.',
    images: ['https://nextgentherapy.co.uk/images/default-social-share.jpg'],
  },
};

export default function NeurodiversityTherapyPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Neurodiversity Therapy & SEN Support',
    provider: {
      '@type': 'Person',
      name: 'Andreea Horhocea',
      jobTitle: 'Psychodynamic Psychotherapist',
    },
    serviceType: ['ADHD Therapy', 'Autism Support', 'SEN Support'],
    areaServed: ['Colchester', 'Essex', 'Online'],
    description:
      'Specialist therapy for neurodivergent children, teenagers, and young adults. Expert support for ADHD, autism, and other neurodivergent conditions with SEN school experience.',
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
        name: 'Services',
        item: 'https://nextgentherapy.co.uk/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Neurodiversity Therapy',
        item: 'https://nextgentherapy.co.uk/neurodiversity-therapy',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
            <h1 className={styles.pageTitle}>Neurodiversity Therapy & SEN Support</h1>
            <p className={styles.heroSubtitle}>
              Specialist therapy for neurodivergent children, teenagers, and young adults with deep
              understanding of their unique strengths and challenges
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className={styles.serviceIntro}>
          <div className={styles.introContent}>
            <h2>Understanding Neurodiversity Through Experience</h2>
            <p>
              Every neurodivergent individual has unique strengths, challenges, and ways of
              experiencing the world. Through my experience working in SEN schools, I have developed
              a deep understanding of the complexities and nuances of supporting neurodivergent
              young people in their mental health journey.
            </p>

            <p>
              Neurodiversity encompasses conditions such as ADHD, autism, dyslexia, dyspraxia,
              Tourette&apos;s syndrome, and other neurological differences. Rather than viewing
              these as deficits, I approach neurodiversity from a strengths-based perspective,
              recognizing that different neurological wiring brings both unique challenges and
              remarkable abilities.
            </p>
          </div>
        </section>

        {/* SEN Experience Section */}
        <section className={styles.experienceSection}>
          <div className={styles.experienceContent}>
            <h2>SEN School Experience & Expertise</h2>
            <p>
              My hands-on experience working in Special Educational Needs (SEN) schools has provided
              me with invaluable insights into the daily realities faced by neurodivergent young
              people. This experience has taught me:
            </p>

            <div className={styles.experienceGrid}>
              <div className={styles.experienceCard}>
                <h3>Individual Learning Styles</h3>
                <p>
                  Understanding that each neurodivergent child processes information differently and
                  requires tailored approaches to learning and communication.
                </p>
              </div>

              <div className={styles.experienceCard}>
                <h3>Sensory Considerations</h3>
                <p>
                  Recognizing how sensory processing differences impact daily functioning and
                  therapeutic engagement, and adapting environments accordingly.
                </p>
              </div>

              <div className={styles.experienceCard}>
                <h3>Communication Adaptations</h3>
                <p>
                  Developing flexible communication strategies that work with each individual&apos;s
                  preferred methods of expression and understanding.
                </p>
              </div>

              <div className={styles.experienceCard}>
                <h3>Routine and Structure</h3>
                <p>
                  Understanding the importance of predictability and clear expectations while
                  maintaining flexibility when needed.
                </p>
              </div>

              <div className={styles.experienceCard}>
                <h3>Collaborative Approach</h3>
                <p>
                  Working closely with families, schools, and other professionals to create
                  consistent support across all environments.
                </p>
              </div>

              <div className={styles.experienceCard}>
                <h3>Strengths-Based Focus</h3>
                <p>
                  Identifying and building upon each individual&apos;s unique strengths, interests,
                  and natural abilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Adaptations Section */}
        <section className={styles.adaptationsSection}>
          <div className={styles.adaptationsContent}>
            <h2>Therapeutic Adaptations for Neurodivergent Clients</h2>
            <p>
              Effective therapy for neurodivergent individuals often requires thoughtful adaptations
              to ensure full engagement and meaningful progress. Based on my SEN experience, I
              understand that one size does not fit all.
            </p>

            <div className={styles.adaptationsList}>
              <div className={styles.adaptationItem}>
                <h3>Flexible Session Length</h3>
                <p>
                  Sessions may be shorter to accommodate attention spans and processing needs. Some
                  clients thrive with 30-minute sessions, while others benefit from traditional
                  50-minute sessions. We find what works best for each individual.
                </p>
              </div>

              <div className={styles.adaptationItem}>
                <h3>Sensory-Friendly Environment</h3>
                <p>
                  Adjusting lighting, noise levels, and sensory elements in the therapy room to
                  create a comfortable space that reduces overwhelm and supports focus.
                </p>
              </div>

              <div className={styles.adaptationItem}>
                <h3>Visual and Concrete Tools</h3>
                <p>
                  Using visual aids, social stories, charts, and hands-on materials to support
                  understanding and communication when verbal processing is challenging.
                </p>
              </div>

              <div className={styles.adaptationItem}>
                <h3>Movement and Fidgets</h3>
                <p>
                  Incorporating movement breaks and fidget tools when needed, understanding that
                  physical movement often supports concentration and emotional regulation for
                  neurodivergent individuals.
                </p>
              </div>

              <div className={styles.adaptationItem}>
                <h3>Clear Structure and Expectations</h3>
                <p>
                  Providing clear session structure with visual schedules when helpful, while
                  maintaining flexibility to adapt based on the individual&apos;s needs on any given
                  day.
                </p>
              </div>

              <div className={styles.adaptationItem}>
                <h3>Special Interests Integration</h3>
                <p>
                  Incorporating the client&apos;s special interests and passions into therapy
                  sessions to build rapport and create meaningful connections to therapeutic goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Age-Specific Support */}
        <section className={styles.ageSpecificSection}>
          <h2>Neurodiversity Support Across Age Groups</h2>

          <div className={styles.ageGroupsGrid}>
            <div className={styles.ageGroupCard}>
              <h3>Children (Ages 5-12)</h3>
              <h4>Building Foundation Skills</h4>
              <ul>
                <li>Emotional recognition and regulation strategies</li>
                <li>Social skills development through play and structured activities</li>
                <li>Coping strategies for sensory challenges</li>
                <li>Building self-awareness and self-advocacy skills</li>
                <li>Supporting family understanding and communication</li>
                <li>Preparing for transitions and changes</li>
              </ul>
              <p className={styles.ageNote}>
                Sessions often incorporate play therapy techniques, visual schedules, and hands-on
                activities tailored to the child&apos;s interests and learning style.
              </p>
            </div>

            <div className={styles.ageGroupCard}>
              <h3>Teenagers (Ages 13-18)</h3>
              <h4>Identity and Independence</h4>
              <ul>
                <li>Understanding their neurodivergent identity and strengths</li>
                <li>Developing self-advocacy skills for school and social settings</li>
                <li>Managing anxiety and depression that may co-occur</li>
                <li>Navigating friendships and social relationships</li>
                <li>Planning for post-school transitions</li>
                <li>Building executive function and organizational skills</li>
              </ul>
              <p className={styles.ageNote}>
                Teen sessions focus on building confidence, self-understanding, and practical skills
                for increasing independence.
              </p>
            </div>

            <div className={styles.ageGroupCard}>
              <h3>Young Adults (Ages 18-25)</h3>
              <h4>Exploration and Growth</h4>
              <ul>
                <li>Career exploration and workplace accommodation needs</li>
                <li>Relationship development and communication skills</li>
                <li>Independent living skills and self-management</li>
                <li>Understanding personal support needs</li>
                <li>Managing transitions to higher education or employment</li>
                <li>Developing authentic self-identity and confidence</li>
              </ul>
              <p className={styles.ageNote}>
                Therapy becomes an exploration space where young adults can discover their authentic
                selves, build on their strengths, and develop strategies for thriving in adult life.
              </p>
            </div>
          </div>
        </section>

        {/* Common Challenges Section */}
        <section className={styles.challengesSection}>
          <div className={styles.challengesContent}>
            <h2>Common Challenges I Help Address</h2>

            <div className={styles.challengesGrid}>
              <div className={styles.challengeCard}>
                <h3>Executive Function Difficulties</h3>
                <p>
                  Supporting the development of planning, organization, time management, and task
                  initiation skills through practical strategies and tools.
                </p>
              </div>

              <div className={styles.challengeCard}>
                <h3>Sensory Processing Challenges</h3>
                <p>
                  Understanding sensory needs and developing coping strategies for overwhelming
                  environments or sensory-seeking behaviors.
                </p>
              </div>

              <div className={styles.challengeCard}>
                <h3>Social Communication</h3>
                <p>
                  Building skills for reading social cues, maintaining friendships, and navigating
                  complex social situations with confidence.
                </p>
              </div>

              <div className={styles.challengeCard}>
                <h3>Emotional Regulation</h3>
                <p>
                  Developing strategies for managing big emotions, meltdowns, and overwhelming
                  feelings in healthy ways.
                </p>
              </div>

              <div className={styles.challengeCard}>
                <h3>Anxiety and Overwhelm</h3>
                <p>
                  Addressing anxiety that often accompanies neurodivergent conditions, particularly
                  around social situations and changes.
                </p>
              </div>

              <div className={styles.challengeCard}>
                <h3>Self-Esteem and Identity</h3>
                <p>
                  Building positive self-concept and understanding personal strengths while
                  addressing feelings of being &quot;different&quot; or misunderstood.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Therapy as Exploration */}
        <section className={styles.explorationSection}>
          <div className={styles.explorationContent}>
            <h2>Therapy as an Exploration Space</h2>
            <p>
              For neurodivergent teenagers and young adults especially, therapy becomes a unique
              exploration space where they can:
            </p>

            <div className={styles.explorationList}>
              <div className={styles.explorationItem}>
                <h3>Discover Their Authentic Self</h3>
                <p>
                  Free from external expectations and pressures, clients can explore who they truly
                  are, what matters to them, and how they want to navigate the world.
                </p>
              </div>

              <div className={styles.explorationItem}>
                <h3>Understand Their Neurodivergent Brain</h3>
                <p>
                  Learning about their specific neurological differences, how their brain works, and
                  why certain things that are easy for others might be challenging for them.
                </p>
              </div>

              <div className={styles.explorationItem}>
                <h3>Experiment with Strategies</h3>
                <p>
                  Trying different approaches to challenges without fear of judgment, finding what
                  works for their unique brain and lifestyle.
                </p>
              </div>

              <div className={styles.explorationItem}>
                <h3>Build Self-Advocacy Skills</h3>
                <p>
                  Learning to communicate their needs, ask for accommodations, and educate others
                  about their neurodivergent experience.
                </p>
              </div>

              <div className={styles.explorationItem}>
                <h3>Process Experiences</h3>
                <p>
                  Making sense of past experiences, trauma, or feeling misunderstood, while building
                  resilience for future challenges.
                </p>
              </div>

              <div className={styles.explorationItem}>
                <h3>Plan for the Future</h3>
                <p>
                  Exploring career paths, relationships, and life goals that align with their
                  strengths and accommodate their challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Family Support Section */}
        <section className={styles.familySection}>
          <div className={styles.familyContent}>
            <h2>Supporting Families of Neurodivergent Young People</h2>
            <p>
              Families play a crucial role in supporting neurodivergent individuals. My work often
              includes:
            </p>

            <div className={styles.familySupport}>
              <div className={styles.supportCard}>
                <h3>Understanding Neurodiversity</h3>
                <p>
                  Helping families understand their child&apos;s neurodivergent profile, including
                  strengths and challenges, to respond with empathy and appropriate support.
                </p>
              </div>

              <div className={styles.supportCard}>
                <h3>Developing Strategies</h3>
                <p>
                  Teaching practical strategies for daily challenges like routines, transitions,
                  emotional regulation, and communication.
                </p>
              </div>

              <div className={styles.supportCard}>
                <h3>Advocacy Skills</h3>
                <p>
                  Supporting parents in advocating for their child&apos;s needs in school,
                  healthcare, and community settings.
                </p>
              </div>

              <div className={styles.supportCard}>
                <h3>Celebrating Strengths</h3>
                <p>
                  Helping families recognize and nurture their child&apos;s unique strengths,
                  interests, and abilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Ready to Support Your Neurodivergent Journey?</h2>
            <p>
              Whether you&apos;re a neurodivergent individual seeking understanding and strategies,
              or a family looking for support, therapy can provide a safe space for growth,
              exploration, and positive change.
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
              All consultations are confidential and take place in my comfortable,
              neurodiversity-friendly practice in Colchester, Essex.
            </p>
          </div>
        </section>

        {/* Related Services */}
        <section className={styles.relatedSection}>
          <h2>Related Therapy Services</h2>
          <div className={styles.relatedGrid}>
            <Link href="/child-therapy" className={styles.relatedCard}>
              <h3>Child Therapy</h3>
              <p>
                Gentle, play-based therapy for children including neurodivergent young people with
                specialized approaches.
              </p>
            </Link>

            <Link href="/teenage-therapy" className={styles.relatedCard}>
              <h3>Teenage Therapy</h3>
              <p>
                Confidential support for neurodivergent teenagers navigating identity, school
                challenges, and social relationships.
              </p>
            </Link>

            <Link href="/young-adult-therapy" className={styles.relatedCard}>
              <h3>Young Adult Therapy</h3>
              <p>
                Support for neurodivergent young adults exploring career paths, relationships, and
                independent living.
              </p>
            </Link>

            <Link href="/parent-support" className={styles.relatedCard}>
              <h3>Parent Support</h3>
              <p>
                Guidance for parents supporting their neurodivergent children through challenges and
                celebrating strengths.
              </p>
            </Link>

            <Link href="/services" className={styles.relatedCard}>
              <h3>All Services</h3>
              <p>
                Comprehensive overview of all therapy services offered for individuals and families
                in Colchester.
              </p>
            </Link>
          </div>
        </section>
        </main>
      </div>
    </>
  );
}
