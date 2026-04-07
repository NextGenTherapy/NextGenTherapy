import type { Metadata } from 'next';
import Link from 'next/link';

import PageHero from '@/components/ui/PageHero';
import styles from './romanian-therapy.module.scss';
import buttonStyles from '../../components/ui/button.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Romanian Therapist UK — Terapie în Limba Română | BACP Registered',
  description:
    'Romanian-speaking psychodynamic therapist in Colchester and online across the UK. Sesiuni de terapie în limba română. BACP registered, MSc University of Essex.',
  keywords: [
    'romanian therapist uk',
    'romanian speaking therapist essex',
    'terapeut român anglia',
    'psihoterapeut român uk',
    'terapie online limba română',
    'romanian counsellor colchester',
    'romanian speaking therapy',
    'terapie în română uk',
  ],
  authors: [{ name: 'Andreea Horhocea' }],
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/romanian-therapy',
    languages: {
      'en-GB': '/romanian-therapy',
      ro: '/romanian-therapy',
    },
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
    title: 'Romanian Therapist UK — Terapie în Limba Română | BACP Registered',
    description:
      'Romanian-speaking psychodynamic therapist in Colchester and online across the UK. Sesiuni de terapie în limba română. BACP registered.',
    url: 'https://nextgentherapy.co.uk/romanian-therapy',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Romanian Therapist UK — Next Generation Therapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Romanian Therapist UK — Terapie în Limba Română | BACP Registered',
    description:
      'Romanian-speaking psychodynamic therapist in Colchester and online across the UK. Sesiuni de terapie în limba română.',
    images: ['https://nextgentherapy.co.uk/images/default-social-share.jpg'],
  },
};

export default function RomanianTherapyPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Romanian-Speaking Psychodynamic Therapy',
    provider: {
      '@type': 'Person',
      name: 'Andreea Horhocea',
      jobTitle: 'Psychodynamic Psychotherapist',
    },
    serviceType: ['Psychodynamic Therapy', 'Romanian-Speaking Therapy'],
    areaServed: ['Colchester', 'Essex', 'United Kingdom (online)'],
    availableLanguage: ['English', 'Romanian'],
    description:
      'Psychodynamic therapy in Romanian and English for individuals navigating bicultural identity, immigrant experience, and life between cultures. In-person in Colchester and online across the UK.',
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
        name: 'Romanian Therapy',
        item: 'https://nextgentherapy.co.uk/romanian-therapy',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        eyebrow="Therapy in English & Romanian"
        title="Sunt aici. I'm here, in both languages."
        lead="Psychodynamic therapy with a Romanian-speaking BACP-registered therapist. Some things are easier to say in your first language — and sometimes, you need someone who understands where you come from without you having to explain."
      />

      <div className={styles.page}>
        <main className={styles.main}>
          {/* Section 2: English Introduction */}
          <section className={styles.introSection}>
            <h2>Therapy in your first language</h2>
            <p>
              Some things are easier to say in Romanian. The words you grew up with, the ones that
              carry the weight of early experiences, the feelings that don&apos;t translate cleanly.
              When you&apos;re trying to describe how your family works, or how you feel about where
              you come from, or what it means to be caught between two places — it helps to have a
              therapist who already knows the landscape.
            </p>
            <p>
              I offer psychodynamic therapy in both Romanian and English. You can move between the
              two as you need, or stay in one — whatever feels right. I&apos;m a native Romanian
              speaker who trained and works in the UK, which means I understand both worlds and the
              particular experience of living between them.
            </p>
            <p>
              I work with Romanian-speaking adults and young adults across the UK — in person at my
              practice in Colchester, or online for anyone age 16 and over.
            </p>
          </section>

          {/* Section 3: Romanian Introduction */}
          <section className={styles.romanianSection}>
            <div className={styles.romanianContainer}>
              {/* {{ CONFIRM WITH ANDREEA — Romanian translation below is provisional }} */}
              <h2 className={styles.romanianHeading}>Terapie în limba română</h2>
              <p>
                Sunt Andreea — psihoterapeut psihodinamic înregistrat BACP. Ofer ședințe de terapie
                în limba română, în persoană la Colchester sau online oriunde în Regatul Unit.
              </p>
              <p>
                Unele lucruri sunt mai ușor de spus în română. Cuvintele cu care ai crescut, cele
                care poartă greutatea experiențelor timpurii, sentimentele care nu se traduc curat.
                Când încerci să descrii cum funcționează familia ta, sau ce simți despre locul din
                care vii, sau ce înseamnă să fii prins între două locuri — ajută să ai un terapeut
                care înțelege deja peisajul.
              </p>
              <p>
                Poți alege să vorbești în română, în engleză, sau să treci de la una la alta în
                funcție de ce simți.
              </p>
            </div>
          </section>

          {/* Section 4: What I Often Work With - Bilingual */}
          <section className={styles.topicsSection}>
            <div className={styles.topicsContainer}>
              <div className={styles.topicsColumn}>
                <h2>What I often work with</h2>
                <ul className={styles.topicsList}>
                  <li>
                    <strong>Cultural identity and belonging</strong> — the sense of not quite fitting
                    anywhere, the complicated feelings about where home is.
                  </li>
                  <li>
                    <strong>Immigrant experience</strong> — what it takes to build a life in a new
                    country, the losses and gains that come with it.
                  </li>
                  <li>
                    <strong>Family dynamics across distance</strong> — relationships with family back
                    home, expectations, guilt, the weight of being far away.
                  </li>
                  <li>
                    <strong>Bicultural parenting</strong> — raising children between cultures, passing
                    on language and traditions, the questions about what you keep and what you let go.
                  </li>
                  <li>
                    <strong>Burnout, anxiety, self-esteem</strong> — issues that affect everyone, but
                    can feel different when you&apos;re navigating them in a second language and
                    culture.
                  </li>
                  <li>
                    <strong>Young adults born in the UK to Romanian parents</strong> — identity
                    questions, sense of belonging, relationships with parents who have a different
                    experience of the world.
                  </li>
                </ul>
              </div>

              <div className={styles.topicsColumn}>
                {/* {{ CONFIRM WITH ANDREEA — Romanian translation below is provisional }} */}
                <h2 className={styles.romanianHeadingSmall}>Ce lucrez adesea</h2>
                <ul className={styles.topicsList}>
                  <li>
                    <strong>Identitate culturală și apartenență</strong> — sentimentul de a nu te
                    potrivi nicăieri, sentimentele complicate despre unde este acasă.
                  </li>
                  <li>
                    <strong>Experiența de imigrant</strong> — ce presupune să îți construiești o viață
                    într-o țară nouă, pierderile și câștigurile care vin cu asta.
                  </li>
                  <li>
                    <strong>Dinamica familiei la distanță</strong> — relațiile cu familia de acasă,
                    așteptările, vinovăția, greutatea de a fi departe.
                  </li>
                  <li>
                    <strong>Creșterea copiilor între culturi</strong> — transmiterea limbii și
                    tradițiilor, întrebările despre ce păstrezi și ce lași.
                  </li>
                  <li>
                    <strong>Burnout, anxietate, stimă de sine</strong> — probleme care afectează pe
                    toată lumea, dar pot simți diferit când le navighezi într-o limbă și cultură
                    secundară.
                  </li>
                  <li>
                    <strong>Tineri adulți născuți în UK din părinți români</strong> — întrebări despre
                    identitate, sentimentul de apartenență, relații cu părinții care au o experiență
                    diferită a lumii.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5: Practical Bits */}
          <section className={styles.practicalSection}>
            <div className={styles.practicalGrid}>
              <div className={styles.practicalColumn}>
                <h2>Practical bits</h2>
                <dl className={styles.practicalList}>
                  <div className={styles.practicalItem}>
                    <dt>Location</dt>
                    <dd>
                      Colchester Business Centre, ground floor, accessible. Easy parking, quiet
                      space.
                    </dd>
                  </div>
                  <div className={styles.practicalItem}>
                    <dt>Online</dt>
                    <dd>Available UK-wide for ages 16 and over. Sessions via secure video call.</dd>
                  </div>
                  <div className={styles.practicalItem}>
                    <dt>Language</dt>
                    <dd>
                      Your choice. Romanian, English, or both. You can switch mid-session if you
                      need to.
                    </dd>
                  </div>
                  <div className={styles.practicalItem}>
                    <dt>Cost</dt>
                    <dd>£60 per 50-minute session, weekly.</dd>
                  </div>
                  <div className={styles.practicalItem}>
                    <dt>First step</dt>
                    <dd>
                      A free 15-minute call to see if we&apos;re a good fit. No pressure, no
                      commitment.
                    </dd>
                  </div>
                </dl>
              </div>

              <div className={styles.practicalColumn}>
                {/* {{ CONFIRM WITH ANDREEA — Romanian translation below is provisional }} */}
                <h2 className={styles.romanianHeadingSmall}>Informații practice</h2>
                <dl className={styles.practicalList}>
                  <div className={styles.practicalItem}>
                    <dt>Locație</dt>
                    <dd>
                      Colchester Business Centre, parter, accesibil. Parcare ușoară, spațiu
                      liniștit.
                    </dd>
                  </div>
                  <div className={styles.practicalItem}>
                    <dt>Online</dt>
                    <dd>
                      Disponibil în toată Marea Britanie pentru vârste de 16 ani și peste. Ședințe
                      prin apel video securizat.
                    </dd>
                  </div>
                  <div className={styles.practicalItem}>
                    <dt>Limba</dt>
                    <dd>
                      Alegerea ta. Română, engleză, sau ambele. Poți schimba în timpul ședinței
                      dacă ai nevoie.
                    </dd>
                  </div>
                  <div className={styles.practicalItem}>
                    <dt>Cost</dt>
                    <dd>£60 pe ședință de 50 de minute, săptămânal.</dd>
                  </div>
                  <div className={styles.practicalItem}>
                    <dt>Primul pas</dt>
                    <dd>
                      Un apel gratuit de 15 minute pentru a vedea dacă ne potrivim. Fără presiune,
                      fără angajament.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          {/* Section 6: Bilingual CTA */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContainer}>
              <h2>Let&apos;s talk / Hai să vorbim</h2>
              <p>
                The free 15-minute call is an informal conversation, not a first session. You can
                ask anything you want, and we&apos;ll decide together whether working together feels
                right.
              </p>
              {/* {{ CONFIRM WITH ANDREEA — Romanian translation below is provisional }} */}
              <p className={styles.romanianText}>
                Apelul gratuit de 15 minute este o conversație informală, nu o primă ședință. Poți
                întreba orice vrei, și vom decide împreună dacă colaborarea pare potrivită.
              </p>
              <Link href="/book-now" className={buttonStyles.primary}>
                Book a free 15-minute call
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
