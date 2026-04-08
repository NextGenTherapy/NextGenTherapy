import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import CTABlock from '@/components/ui/CTABlock';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import styles from './services.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Therapy Services | Psychodynamic Therapy Colchester',
  description:
    'Psychodynamic therapy in Colchester & online. Women, neurodivergent adults, teenagers, children. Romanian available. BACP registered.',
  keywords: [
    'therapy colchester',
    'psychodynamic therapy colchester',
    'therapist colchester',
    'counsellor colchester',
    'BACP therapist essex',
    'therapy for women',
    'neurodiversity therapy',
    'teen therapy colchester',
    'child therapy colchester',
    'romanian therapist uk',
    'online therapy uk',
  ],
  authors: [{ name: 'Andreea Horhocea' }],
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/services',
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
    title: 'Therapy Services | Next Generation Therapy',
    description:
      'Psychodynamic therapy in Colchester and online. I work with women, neurodivergent adults, teenagers, children, and Romanian speakers.',
    url: 'https://nextgentherapy.co.uk/services',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Andreea Horhocea - Psychodynamic Psychotherapist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Therapy Services | Next Generation Therapy',
    description:
      'Psychodynamic therapy in Colchester and online. I work with women, neurodivergent adults, teenagers, children, and Romanian speakers.',
    images: ['https://nextgentherapy.co.uk/images/default-social-share.jpg'],
  },
};

export default function ServicesPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Psychodynamic Psychotherapy Services',
    provider: {
      '@type': 'Person',
      name: 'Andreea Horhocea',
      jobTitle: 'Psychodynamic Psychotherapist',
    },
    serviceType: [
      'Therapy for Women',
      'Neurodiversity Therapy',
      'Teen Therapy',
      'Child Therapy',
      'Romanian Language Therapy',
      'Online Therapy',
    ],
    areaServed: ['Colchester', 'Essex', 'Online UK-wide'],
    description:
      'Psychodynamic therapy for women, neurodivergent adults, teenagers, and children. In-person in Colchester and online across the UK.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageHero
        eyebrow="What I Work With"
        title="Therapy for women, neurodivergent adults, teenagers, and children."
        lead="I'm a psychodynamic therapist in Colchester and online. Here's an honest look at the kinds of things I work with, and who I work best with."
      />

      <div className={styles.page}>
        <main className={styles.main}>
          <section className={styles.servicesHub}>
            <div className={styles.servicesGrid}>
              <Link href="/therapy-for-women" className={styles.serviceCard}>
                <h2>Therapy for women</h2>
                <p>
                  For overthinking, burnout, self-esteem, body image, anxiety, identity. Includes
                  work with women in same-sex relationships.
                </p>
              </Link>

              <Link href="/neurodiversity" className={styles.serviceCard}>
                <h2>ADHD and autism in adults</h2>
                <p>
                  Affirmative therapy for late-diagnosed and self-identified neurodivergent adults.
                  Sensory-aware room.
                </p>
              </Link>

              <Link href="/teen-therapy" className={styles.serviceCard}>
                <h2>Therapy for teenagers</h2>
                <p>Ages 13-17. Anxiety, self-harm, school, friendships. In-person only.</p>
              </Link>

              <Link href="/child-therapy" className={styles.serviceCard}>
                <h2>Therapy for children</h2>
                <p>Ages 4-12. Play-based psychodynamic work with parent involvement.</p>
              </Link>

              <Link href="/romanian-therapy" className={styles.serviceCard}>
                <h2>Therapy in Romanian</h2>
                <p>Terapie în limba română pentru adulți și adolescenți.</p>
              </Link>

              <Link href="/online-therapy" className={styles.serviceCard}>
                <h2>Online therapy (UK-wide)</h2>
                <p>Mon, Tue, Wed, Fri. Age 16 and over only. Secure video.</p>
              </Link>
            </div>
          </section>

          <section className={styles.notOffered}>
            <h2>What I don&apos;t offer</h2>
            <p>
              I don&apos;t offer couples therapy, short-term CBT, forensic work, or therapy for
              active psychosis and untreated addiction. If that&apos;s what you need, I&apos;m happy
              to point you toward people who specialise in it.
            </p>
          </section>
        </main>
      </div>

      <CTABlock />
      <BreadcrumbSchema />
    </>
  );
}
