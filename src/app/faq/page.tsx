import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABlock from '@/components/ui/CTABlock';
import styles from './faq.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Therapy FAQ Colchester | Common Questions | BACP Therapist',
  description:
    'Common therapy questions answered by BACP registered therapist in Colchester. Learn about therapy process, costs, what to expect. Book consultation today!',
  keywords: [
    'therapy questions Colchester',
    'therapy FAQ Essex',
    'therapy costs Colchester',
    'what to expect therapy',
    'therapy process explained',
    'therapist questions Colchester',
    'mental health therapy questions',
    'therapy help questions',
    'therapy FAQ answered',
    'BACP therapist questions',
    'therapy appointment questions',
    'therapy session questions',
    'anxiety therapy questions',
    'depression therapy FAQ',
    'therapy consultation questions',
  ],
  authors: [{ name: 'Andreea Horhocea' }],
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/faq',
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
    title: 'FAQ - Therapy Questions Answered | Colchester Therapist',
    description:
      'Common therapy questions answered by BACP registered therapist in Colchester. Learn about costs, process & what to expect.',
    url: 'https://nextgentherapy.co.uk/faq',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'FAQ - Therapy Questions Answered | Next Generation Therapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Therapy FAQ | Common Questions Answered | Colchester',
    description:
      'Common therapy questions answered by BACP registered therapist in Colchester. Learn about costs, process & what to expect.',
    images: ['https://nextgentherapy.co.uk/images/default-social-share.jpg'],
  },
};

export default function FAQ() {
  const faqData = [
    {
      question: 'How much does therapy cost in Colchester?',
      answer:
        "Individual therapy sessions are £60 for 50 minutes. Get in touch to discuss your needs and see if we're a good fit to work together.",
    },
    {
      question: 'Do you offer online therapy sessions?',
      answer:
        'Yes, I offer both in-person sessions in Colchester and online therapy sessions via secure video calls. Online therapy can be just as effective as face-to-face sessions.',
    },
    {
      question: 'What should I expect in my first therapy session?',
      answer:
        "Your first session will focus on getting to know you and understanding what brings you to therapy. We'll discuss your goals, background, and I'll explain how I work. It's completely confidential and there's no pressure.",
    },
    {
      question: 'How long does therapy take to work?',
      answer:
        "This varies for everyone. Some people notice changes after a few sessions, while others benefit from longer-term work. We'll regularly review your progress and goals together.",
    },
    {
      question: 'What is psychodynamic therapy?',
      answer:
        'Psychodynamic therapy explores how your past experiences and unconscious thoughts influence your current relationships and life patterns. It helps you gain insight and make lasting changes.',
    },
    {
      question: 'Are you qualified and registered?',
      answer:
        "Yes, I'm BACP (British Association for Counselling and Psychotherapy) registered with a Master's degree in psychodynamic psychotherapy. I have 6+ years experience working with children, adults and families.",
    },
    {
      question: 'What issues do you help with?',
      answer:
        'I work with anxiety, depression, relationship difficulties, self-esteem issues, eating disorders, body image concerns, trauma, and life transitions. Both children and adults are welcome.',
    },
    {
      question: 'Is therapy confidential?',
      answer:
        "Yes, everything we discuss is strictly confidential. The only exceptions are if there's a risk of serious harm to yourself or others, which I would discuss with you first.",
    },
    {
      question: 'How do I book a therapy session in Colchester?',
      answer:
        'You can book through the contact form on my website, call me directly, or email. I respond within 24 hours to discuss your needs and answer any questions.',
    },
    {
      question: 'Do you work with children?',
      answer:
        'Yes, I specialize in child therapy using play therapy techniques. I work with children experiencing anxiety, emotional difficulties, behavioural concerns, and family changes.',
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        mainEntity: faqData.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      {
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
            name: 'FAQ',
            item: 'https://nextgentherapy.co.uk/faq',
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageHero
        eyebrow="Common Questions"
        title="Everything you want to know before getting in touch"
        lead="I know reaching out to a therapist can feel daunting. Here are the questions I get asked most often — answered honestly."
      />
      <div className={styles.page}>
        <main>
          <section className={styles.faqSection}>
            <div className={styles.faqGrid}>
              {faqData.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <CTABlock />
        </main>
      </div>
    </>
  );
}
