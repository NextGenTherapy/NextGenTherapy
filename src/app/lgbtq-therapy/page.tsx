import { Metadata } from 'next';
import styles from './lgbtq-therapy.module.scss';
import Link from 'next/link';
import buttonStyles from '../../components/ui/button.module.scss';

export const metadata: Metadata = {
  title: 'LGBTQ+ Therapy | Inclusive Support & Identity Affirmation | Colchester',
  description:
    'Inclusive, affirming therapy for LGBTQ+ individuals in Colchester. Safe space for identity exploration, coming out support, and mental health care for the LGBTQ+ community.',
  keywords:
    'LGBTQ therapy Colchester, gay therapy Essex, transgender therapy, queer counselling Colchester, coming out support, LGBTQ+ mental health, gender identity therapy, inclusive therapy Colchester, LGBTQ+ counselling Essex, affirming therapy',
  openGraph: {
    title: 'LGBTQ+ Therapy | Inclusive Support & Identity Affirmation',
    description:
      'Inclusive, affirming therapy for LGBTQ+ individuals in Colchester. Safe space for identity exploration and mental health support.',
    type: 'website',
    url: 'https://nextgentherapy.co.uk/lgbtq-therapy',
  },
};

export default function LGBTQTherapyPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.pageTitle}>LGBTQ+ Inclusive Therapy</h1>
            <p className={styles.heroSubtitle}>
              Affirming, inclusive therapeutic support for LGBTQ+ individuals of all ages in a safe
              and understanding environment
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className={styles.serviceIntro}>
          <div className={styles.introContent}>
            <h2>A Safe Space for Your Authentic Self</h2>
            <p>
              Every person deserves to feel seen, understood, and accepted for who they truly are.
              As an inclusive therapist, I provide a safe, affirming space for LGBTQ+ individuals to
              explore their identity, process their experiences, and work towards their mental
              health goals without fear of judgment or discrimination.
            </p>

            <p>
              Whether you&apos;re questioning your identity, navigating coming out, dealing with
              family reactions, or simply seeking support for other life challenges while being your
              authentic self, therapy can provide the understanding and tools you need to thrive.
            </p>
          </div>
        </section>

        {/* Why LGBTQ+ Affirming Therapy Matters */}
        <section className={styles.whyAffirmingSection}>
          <div className={styles.whyAffirmingContent}>
            <h2>Why LGBTQ+ Affirming Therapy Matters</h2>
            <p>
              LGBTQ+ individuals face unique challenges and stressors that require understanding and
              specialized support. Research consistently shows that affirming therapy leads to
              better mental health outcomes for LGBTQ+ clients.
            </p>

            <div className={styles.affirmingGrid}>
              <div className={styles.affirmingCard}>
                <h3>Identity Validation</h3>
                <p>
                  Your identity is valued and affirmed, not questioned or pathologized. You
                  won&apos;t have to justify who you are or defend your existence.
                </p>
              </div>

              <div className={styles.affirmingCard}>
                <h3>Cultural Competence</h3>
                <p>
                  Understanding of LGBTQ+ terminology, experiences, and the specific challenges
                  faced by different communities within the broader LGBTQ+ spectrum.
                </p>
              </div>

              <div className={styles.affirmingCard}>
                <h3>Minority Stress Understanding</h3>
                <p>
                  Recognition of how discrimination, rejection, and social stigma impact mental
                  health, and specific strategies for coping with these challenges.
                </p>
              </div>

              <div className={styles.affirmingCard}>
                <h3>Intersectionality Awareness</h3>
                <p>
                  Understanding how LGBTQ+ identity intersects with other identities including race,
                  disability, religion, and socioeconomic status.
                </p>
              </div>

              <div className={styles.affirmingCard}>
                <h3>Family and Relationship Support</h3>
                <p>
                  Guidance for navigating family relationships, coming out processes, and building
                  chosen families and supportive communities.
                </p>
              </div>

              <div className={styles.affirmingCard}>
                <h3>Confidential Environment</h3>
                <p>
                  Complete confidentiality and privacy, understanding the importance of controlling
                  who knows about your identity and when.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Areas of Support */}
        <section className={styles.supportAreasSection}>
          <div className={styles.supportAreasContent}>
            <h2>Areas of LGBTQ+ Support</h2>

            <div className={styles.supportAreasList}>
              <div className={styles.supportAreaItem}>
                <h3>Identity Exploration and Understanding</h3>
                <p>
                  Safe space to explore questions about sexual orientation, gender identity, and
                  what these mean for you personally. No pressure to label yourself or come to
                  immediate conclusions.
                </p>
              </div>

              <div className={styles.supportAreaItem}>
                <h3>Coming Out Support</h3>
                <p>
                  Guidance through the coming out process, including deciding if, when, and how to
                  come out to different people in your life. Support for dealing with various
                  reactions and outcomes.
                </p>
              </div>

              <div className={styles.supportAreaItem}>
                <h3>Family and Relationship Challenges</h3>
                <p>
                  Support for navigating family rejection, religious conflicts, relationship
                  difficulties, and building healthy chosen families and support networks.
                </p>
              </div>

              <div className={styles.supportAreaItem}>
                <h3>Gender Identity and Expression</h3>
                <p>
                  Support for transgender, non-binary, and gender-questioning individuals exploring
                  their gender identity, expression, and potential transition processes.
                </p>
              </div>

              <div className={styles.supportAreaItem}>
                <h3>Internalized Oppression</h3>
                <p>
                  Working through internalized homophobia, transphobia, and negative messages about
                  LGBTQ+ identities that may have been absorbed from society, family, or religious
                  communities.
                </p>
              </div>

              <div className={styles.supportAreaItem}>
                <h3>Discrimination and Trauma</h3>
                <p>
                  Support for processing experiences of discrimination, bullying, hate crimes,
                  conversion therapy trauma, and other LGBTQ+-specific traumas.
                </p>
              </div>

              <div className={styles.supportAreaItem}>
                <h3>Workplace and School Challenges</h3>
                <p>
                  Strategies for navigating LGBTQ+ identity in professional and educational
                  settings, dealing with discrimination, and accessing appropriate support.
                </p>
              </div>

              <div className={styles.supportAreaItem}>
                <h3>Dating and Relationships</h3>
                <p>
                  Support for navigating LGBTQ+ dating, building healthy relationships, and dealing
                  with unique challenges faced by LGBTQ+ couples.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Age-Specific Support */}
        <section className={styles.ageSpecificSection}>
          <h2>LGBTQ+ Support Across Age Groups</h2>

          <div className={styles.ageGroupsGrid}>
            <div className={styles.ageGroupCard}>
              <h3>Children & Young Teens (Ages 10-14)</h3>
              <h4>Early Identity Exploration</h4>
              <ul>
                <li>Safe space to express feelings and questions</li>
                <li>Understanding different types of families and identities</li>
                <li>Building self-esteem and confidence</li>
                <li>Support for children with LGBTQ+ family members</li>
                <li>Anti-bullying strategies and support</li>
                <li>Family education and support</li>
              </ul>
              <p className={styles.ageNote}>
                Therapy focuses on creating safety, building self-worth, and providing
                age-appropriate information and support.
              </p>
            </div>

            <div className={styles.ageGroupCard}>
              <h3>Teenagers (Ages 15-18)</h3>
              <h4>Identity Development & Coming Out</h4>
              <ul>
                <li>Identity exploration and understanding</li>
                <li>Coming out planning and support</li>
                <li>Dealing with school and peer challenges</li>
                <li>Building resilience against discrimination</li>
                <li>Family relationship navigation</li>
                <li>Dating and relationship guidance</li>
              </ul>
              <p className={styles.ageNote}>
                Teen years often involve significant identity development. Therapy provides crucial
                support during this vulnerable time.
              </p>
            </div>

            <div className={styles.ageGroupCard}>
              <h3>Young Adults (Ages 18-25)</h3>
              <h4>Independence & Authentic Living</h4>
              <ul>
                <li>Living authentically in adult contexts</li>
                <li>Career and workplace navigation</li>
                <li>Building chosen family and community</li>
                <li>Long-term relationship development</li>
                <li>Higher education and professional development</li>
                <li>Planning for future goals and dreams</li>
              </ul>
              <p className={styles.ageNote}>
                Young adulthood is about building an authentic adult life. Therapy supports this
                journey with understanding and practical strategies.
              </p>
            </div>

            <div className={styles.ageGroupCard}>
              <h3>Adults (25+)</h3>
              <h4>Continued Growth & Life Challenges</h4>
              <ul>
                <li>Later-in-life coming out experiences</li>
                <li>Career and professional development</li>
                <li>Long-term relationship and family planning</li>
                <li>Parenting as LGBTQ+ individuals</li>
                <li>Aging in LGBTQ+ communities</li>
                <li>Ongoing mental health and life challenges</li>
              </ul>
              <p className={styles.ageNote}>
                LGBTQ+ adults continue to face unique challenges throughout life. Therapy provides
                ongoing support for continued growth and wellbeing.
              </p>
            </div>
          </div>
        </section>

        {/* Creating Safety */}
        <section className={styles.safetySection}>
          <div className={styles.safetyContent}>
            <h2>Creating a Safe Therapeutic Environment</h2>
            <p>
              Safety is paramount in LGBTQ+ affirming therapy. Here&apos;s how I work to create and
              maintain a safe space for all clients:
            </p>

            <div className={styles.safetyGrid}>
              <div className={styles.safetyCard}>
                <h3>Confidentiality Protection</h3>
                <p>
                  Strict confidentiality protocols with understanding of the particular importance
                  of privacy for LGBTQ+ individuals, especially those not fully out.
                </p>
              </div>

              <div className={styles.safetyCard}>
                <h3>No Assumptions</h3>
                <p>
                  Never assuming anything about your identity, relationships, or experiences. You
                  share what you want to share, when you&apos;re ready to share it.
                </p>
              </div>

              <div className={styles.safetyCard}>
                <h3>Preferred Names and Pronouns</h3>
                <p>
                  Respecting and consistently using your chosen name and pronouns, understanding
                  these may evolve throughout our work together.
                </p>
              </div>

              <div className={styles.safetyCard}>
                <h3>Cultural Sensitivity</h3>
                <p>
                  Understanding the intersection of LGBTQ+ identity with cultural, religious, and
                  family backgrounds, without making assumptions about conflicts or compatibility.
                </p>
              </div>

              <div className={styles.safetyCard}>
                <h3>Trauma-Informed Approach</h3>
                <p>
                  Recognizing that many LGBTQ+ individuals have experienced trauma related to their
                  identity, and approaching therapy with trauma-informed principles.
                </p>
              </div>

              <div className={styles.safetyCard}>
                <h3>Ongoing Education</h3>
                <p>
                  Commitment to ongoing education about LGBTQ+ issues, terminology, and best
                  practices to provide the most current and effective support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Challenges */}
        <section className={styles.challengesSection}>
          <div className={styles.challengesContent}>
            <h2>Common Challenges I Help Address</h2>

            <div className={styles.challengesGrid}>
              <div className={styles.challengeCard}>
                <h3>Anxiety and Depression</h3>
                <p>
                  LGBTQ+ individuals experience higher rates of anxiety and depression. Therapy
                  addresses both the symptoms and underlying causes including minority stress.
                </p>
              </div>

              <div className={styles.challengeCard}>
                <h3>Rejection and Loss</h3>
                <p>
                  Processing grief from family rejection, lost friendships, or religious community
                  exclusion while building new support systems.
                </p>
              </div>

              <div className={styles.challengeCard}>
                <h3>Identity Confusion</h3>
                <p>
                  Working through questions, doubts, and confusion about identity in a supportive,
                  non-pressured environment.
                </p>
              </div>

              <div className={styles.challengeCard}>
                <h3>Relationship Difficulties</h3>
                <p>
                  Navigating unique relationship challenges including disclosure decisions, finding
                  community, and building healthy partnerships.
                </p>
              </div>

              <div className={styles.challengeCard}>
                <h3>Self-Acceptance</h3>
                <p>
                  Building self-love and acceptance in a world that may not always be accepting,
                  developing resilience and authentic self-expression.
                </p>
              </div>

              <div className={styles.challengeCard}>
                <h3>Life Transitions</h3>
                <p>
                  Support through major life changes including coming out, transition processes,
                  moving to affirming communities, or starting new relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Intersectionality */}
        <section className={styles.intersectionalitySection}>
          <div className={styles.intersectionalityContent}>
            <h2>Understanding Intersectionality</h2>
            <p>
              LGBTQ+ identity doesn&apos;t exist in isolation. I understand and work with the
              complexity of intersecting identities and their impact on your life experience:
            </p>

            <div className={styles.intersectionalityList}>
              <div className={styles.intersectionalityItem}>
                <h3>Race and Ethnicity</h3>
                <p>
                  Understanding the unique experiences of LGBTQ+ people of color, including
                  navigating multiple communities and facing compounded discrimination.
                </p>
              </div>

              <div className={styles.intersectionalityItem}>
                <h3>Religion and Spirituality</h3>
                <p>
                  Supporting individuals navigating conflicts between religious backgrounds and
                  LGBTQ+ identity, including finding affirming spiritual communities.
                </p>
              </div>

              <div className={styles.intersectionalityItem}>
                <h3>Disability and Neurodiversity</h3>
                <p>
                  Recognizing the intersection of LGBTQ+ identity with disability and
                  neurodiversity, and the unique challenges this combination can present.
                </p>
              </div>

              <div className={styles.intersectionalityItem}>
                <h3>Socioeconomic Factors</h3>
                <p>
                  Understanding how economic circumstances impact LGBTQ+ experiences, including
                  access to affirming care and safe housing.
                </p>
              </div>

              <div className={styles.intersectionalityItem}>
                <h3>Age and Generation</h3>
                <p>
                  Recognizing generational differences in LGBTQ+ experiences and the unique
                  challenges faced by different age groups.
                </p>
              </div>

              <div className={styles.intersectionalityItem}>
                <h3>Geographic Location</h3>
                <p>
                  Understanding how location impacts LGBTQ+ experience, from rural isolation to
                  urban community access.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Ready to Begin Your Journey?</h2>
            <p>
              Taking the step to seek affirming therapy is an act of self-care and courage. Whether
              you&apos;re just beginning to explore your identity or you&apos;ve been out for years,
              therapy can provide valuable support for wherever you are in your journey.
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
              All consultations are completely confidential and take place in my safe, inclusive
              practice in Colchester, Essex.
            </p>
          </div>
        </section>

        {/* Related Services */}
        <section className={styles.relatedSection}>
          <h2>Related Therapy Services</h2>
          <div className={styles.relatedGrid}>
            <Link href="/teenage-therapy" className={styles.relatedCard}>
              <h3>Teenage Therapy</h3>
              <p>
                Confidential support for LGBTQ+ teenagers navigating identity, coming out, and peer
                relationships.
              </p>
            </Link>

            <Link href="/young-adult-therapy" className={styles.relatedCard}>
              <h3>Young Adult Therapy</h3>
              <p>
                Support for LGBTQ+ young adults building authentic adult lives, careers, and
                relationships.
              </p>
            </Link>

            <Link href="/parent-support" className={styles.relatedCard}>
              <h3>Parent Support</h3>
              <p>
                Guidance for parents supporting their LGBTQ+ children through acceptance,
                understanding, and advocacy.
              </p>
            </Link>

            <Link href="/services" className={styles.relatedCard}>
              <h3>All Services</h3>
              <p>
                Comprehensive overview of all inclusive therapy services offered for individuals and
                families in Colchester.
              </p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
