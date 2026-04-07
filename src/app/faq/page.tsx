import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import FaqAccordion from '@/components/ui/FaqAccordion';
import FaqSchema from '@/components/seo/FaqSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import styles from './faq.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'FAQ — Therapy Questions Answered | Next Generation Therapy Colchester',
  description:
    'Honest answers to the questions I get asked most: cost, how therapy works, online sessions, who I work with, confidentiality, and what to expect. Psychodynamic therapy in Colchester and online.',
  keywords: [
    'therapy questions Colchester',
    'therapy FAQ Essex',
    'therapy costs Colchester',
    'what to expect therapy',
    'therapy process explained',
    'psychodynamic therapy questions',
    'online therapy FAQ UK',
    'therapy confidentiality',
    'therapy session questions',
    'BACP therapist questions',
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
    title: 'FAQ — Therapy Questions Answered | Next Generation Therapy',
    description:
      'Honest answers to the questions I get asked most about therapy in Colchester and online.',
    url: 'https://nextgentherapy.co.uk/faq',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'FAQ — Therapy Questions Answered | Next Generation Therapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ — Therapy Questions Answered | Next Generation Therapy',
    description:
      'Honest answers to the questions I get asked most about therapy in Colchester and online.',
    images: ['https://nextgentherapy.co.uk/images/default-social-share.jpg'],
  },
};

// FAQ data organised by section
const gettingStartedFaqs = [
  {
    question: 'How do I book a first session?',
    answer: (
      <p>
        Start with a free 15-minute phone call. This is not therapy — it is a chance for both of us
        to check if we are a good fit. You can ask questions, tell me a bit about what is going on,
        and see whether you feel comfortable enough to work with me. If it feels right, we book a
        first session. <Link href="/book-now">Book your free call here</Link>.
      </p>
    ),
    plainAnswer:
      'Start with a free 15-minute phone call. This is not therapy — it is a chance for both of us to check if we are a good fit. You can ask questions, tell me a bit about what is going on, and see whether you feel comfortable enough to work with me. If it feels right, we book a first session.',
  },
  {
    question: 'What happens in the first session?',
    answer: (
      <p>
        The first session is about getting to know you. I will ask what brought you to therapy right
        now, and we will talk about your current life, your history, and what you hope to get from
        this work. There is no pressure to share more than you are ready to. Feeling comfortable is
        more important than covering everything at once. Read more about{' '}
        <Link href="/blog/preparing-for-first-therapy-session">
          what to expect from your first session
        </Link>
        .
      </p>
    ),
    plainAnswer:
      'The first session is about getting to know you. I will ask what brought you to therapy right now, and we will talk about your current life, your history, and what you hope to get from this work. There is no pressure to share more than you are ready to. Feeling comfortable is more important than covering everything at once.',
  },
  {
    question: 'Do I need a diagnosis or referral to start therapy?',
    answer: (
      <p>
        No. Most of my clients come to me directly, without a referral or formal diagnosis. You do
        not need to have a label for what you are experiencing — just a sense that something is not
        working the way you want it to.
      </p>
    ),
    plainAnswer:
      'No. Most of my clients come to me directly, without a referral or formal diagnosis. You do not need to have a label for what you are experiencing — just a sense that something is not working the way you want it to.',
  },
  {
    question: 'How do I know if I am ready for therapy?',
    answer: (
      <p>
        If you are asking the question, you are probably ready enough. You do not need to be in
        crisis or have everything figured out. Therapy is a space to explore, not a test you need to
        prepare for. The 15-minute call is a good way to check in with yourself about whether now
        feels like the right time.
      </p>
    ),
    plainAnswer:
      'If you are asking the question, you are probably ready enough. You do not need to be in crisis or have everything figured out. Therapy is a space to explore, not a test you need to prepare for. The 15-minute call is a good way to check in with yourself about whether now feels like the right time.',
  },
];

const howTherapyWorksFaqs = [
  {
    question: 'What is psychodynamic therapy?',
    answer: (
      <p>
        Psychodynamic therapy explores how your past experiences — especially early relationships —
        shape the way you think, feel, and relate to others now. It is not about giving you a
        checklist or teaching you techniques. It is about understanding why you are the way you are,
        so that change becomes possible. I have written more about{' '}
        <Link href="/blog/understanding-different-therapy-approaches">
          how psychodynamic therapy differs from other approaches
        </Link>
        .
      </p>
    ),
    plainAnswer:
      'Psychodynamic therapy explores how your past experiences — especially early relationships — shape the way you think, feel, and relate to others now. It is not about giving you a checklist or teaching you techniques. It is about understanding why you are the way you are, so that change becomes possible.',
  },
  {
    question: 'How is this different from CBT?',
    answer: (
      <p>
        CBT focuses on changing thoughts and behaviours in the present. Psychodynamic therapy goes
        deeper — it asks why those patterns exist in the first place. If you have tried CBT and it
        felt too surface-level, or if your problems keep coming back, psychodynamic work may be a
        better fit. See my page on{' '}
        <Link href="/is-this-right-for-you">whether this type of therapy is right for you</Link>.
      </p>
    ),
    plainAnswer:
      'CBT focuses on changing thoughts and behaviours in the present. Psychodynamic therapy goes deeper — it asks why those patterns exist in the first place. If you have tried CBT and it felt too surface-level, or if your problems keep coming back, psychodynamic work may be a better fit.',
  },
  {
    question: 'How long does therapy take?',
    answer: (
      <p>
        It depends on what you are working through. Some clients stay for a few months; others for a
        year or more. Psychodynamic therapy is open-ended, meaning we do not set a fixed number of
        sessions upfront. We go at your pace and review regularly. The goal is lasting change, not a
        quick fix.
      </p>
    ),
    plainAnswer:
      'It depends on what you are working through. Some clients stay for a few months; others for a year or more. Psychodynamic therapy is open-ended, meaning we do not set a fixed number of sessions upfront. We go at your pace and review regularly. The goal is lasting change, not a quick fix.',
  },
  {
    question: 'Do you give homework or exercises?',
    answer: (
      <p>
        Sometimes. I might suggest journalling prompts or something to notice between sessions, but
        there is no pressure to complete tasks. The main work happens in the room.
      </p>
    ),
    plainAnswer:
      'Sometimes. I might suggest journalling prompts or something to notice between sessions, but there is no pressure to complete tasks. The main work happens in the room.',
  },
  {
    question: 'Will you tell me what to do?',
    answer: (
      <p>
        No. I will not give you advice or tell you how to live your life. My role is to help you
        understand yourself better so that you can make your own choices. That might feel
        frustrating at first, but it leads to real, lasting change rather than just following
        someone else&apos;s instructions.
      </p>
    ),
    plainAnswer:
      'No. I will not give you advice or tell you how to live your life. My role is to help you understand yourself better so that you can make your own choices. That might feel frustrating at first, but it leads to real, lasting change rather than just following someone else\'s instructions.',
  },
];

const practicalFaqs = [
  {
    question: 'How much does therapy cost?',
    answer: (
      <p>
        £60 per 50-minute session. See my <Link href="/pricing">pricing page</Link> for full
        details.
      </p>
    ),
    plainAnswer: '£60 per 50-minute session.',
  },
  {
    question: 'Do you offer reduced fees?',
    answer: (
      <p>
        {'{{ CONFIRM WITH ANDREEA: Do you offer sliding scale or reduced fee slots? If so, how many and for whom? }}'}
      </p>
    ),
    plainAnswer:
      '{{ CONFIRM WITH ANDREEA: Do you offer sliding scale or reduced fee slots? If so, how many and for whom? }}',
  },
  {
    question: 'How do I pay?',
    answer: (
      <p>
        {'{{ CONFIRM WITH ANDREEA: Bank transfer / card? Do clients pay weekly, monthly, or per session? }}'}
      </p>
    ),
    plainAnswer:
      '{{ CONFIRM WITH ANDREEA: Bank transfer / card? Do clients pay weekly, monthly, or per session? }}',
  },
  {
    question: 'What is your cancellation policy?',
    answer: (
      <p>
        {'{{ CONFIRM WITH ANDREEA: What is the notice period for cancellations? What happens with late cancellations? }}'}
      </p>
    ),
    plainAnswer:
      '{{ CONFIRM WITH ANDREEA: What is the notice period for cancellations? What happens with late cancellations? }}',
  },
  {
    question: 'Where are you based?',
    answer: (
      <p>
        In-person sessions take place at Colchester Business Centre, 1 George Williams Way,
        Colchester CO1 2JS. The room is on the ground floor, quiet, and designed to feel calm — with
        plants, soft lighting, and comfortable seating. There is free parking on site.
      </p>
    ),
    plainAnswer:
      'In-person sessions take place at Colchester Business Centre, 1 George Williams Way, Colchester CO1 2JS. The room is on the ground floor, quiet, and designed to feel calm — with plants, soft lighting, and comfortable seating. There is free parking on site.',
  },
  {
    question: 'What days and times do you work?',
    answer: (
      <p>
        I see clients on Mondays and Tuesdays (10am–7pm) and Fridays (9am–2pm). Wednesdays are
        reserved for online sessions only.
      </p>
    ),
    plainAnswer:
      'I see clients on Mondays and Tuesdays (10am–7pm) and Fridays (9am–2pm). Wednesdays are reserved for online sessions only.',
  },
];

const onlineTherapyFaqs = [
  {
    question: 'Do you offer online sessions?',
    answer: (
      <p>
        Yes, for clients aged 16 and over. Online therapy is available UK-wide. I keep Wednesdays
        for online sessions, but there is some flexibility on other days. See my{' '}
        <Link href="/online-therapy">online therapy page</Link> for more details.
      </p>
    ),
    plainAnswer:
      'Yes, for clients aged 16 and over. Online therapy is available UK-wide. I keep Wednesdays for online sessions, but there is some flexibility on other days.',
  },
  {
    question: 'Why is there an age limit for online sessions?',
    answer: (
      <p>
        Younger clients sometimes have sessions while a parent is elsewhere in the house. This can
        undermine the confidentiality that makes therapy work. For under-16s, I offer in-person
        sessions only, where privacy is easier to guarantee.
      </p>
    ),
    plainAnswer:
      'Younger clients sometimes have sessions while a parent is elsewhere in the house. This can undermine the confidentiality that makes therapy work. For under-16s, I offer in-person sessions only, where privacy is easier to guarantee.',
  },
  {
    question: 'What platform do you use for online sessions?',
    answer: (
      <p>
        {'{{ CONFIRM WITH ANDREEA: Zoom, Google Meet, or other platform? Is it encrypted/secure? }}'}
      </p>
    ),
    plainAnswer:
      '{{ CONFIRM WITH ANDREEA: Zoom, Google Meet, or other platform? Is it encrypted/secure? }}',
  },
];

const whoIWorkWithFaqs = [
  {
    question: 'What age groups do you work with?',
    answer: (
      <>
        <p>
          I work with children (4–12), teenagers (13–17), young adults (18–25), and adults (26–40).
        </p>
        <p>
          Children under 16 must attend in person. Online sessions are available from age 16
          upwards.
        </p>
      </>
    ),
    plainAnswer:
      'I work with children (4–12), teenagers (13–17), young adults (18–25), and adults (26–40). Children under 16 must attend in person. Online sessions are available from age 16 upwards.',
  },
  {
    question: 'Do you work with neurodivergent clients?',
    answer: (
      <p>
        Yes. I have post-qualification training in neurodiversity and work affirmatively with ADHD
        and autistic clients. My therapy room is sensory-aware — soft lighting, quiet space,
        fidgets available — and stimming is welcomed. See my{' '}
        <Link href="/neurodiversity">neurodiversity page</Link>.
      </p>
    ),
    plainAnswer:
      'Yes. I have post-qualification training in neurodiversity and work affirmatively with ADHD and autistic clients. My therapy room is sensory-aware — soft lighting, quiet space, fidgets available — and stimming is welcomed.',
  },
  {
    question: 'Do you work with LGBTQ+ clients?',
    answer: (
      <p>
        Yes. I have specific training in working with LGBTQ+ clients and you will not need to
        explain or justify yourself. See the{' '}
        <Link href="/therapy-for-women#lgbtq">LGBTQ+ section on my therapy for women page</Link>.
      </p>
    ),
    plainAnswer:
      'Yes. I have specific training in working with LGBTQ+ clients and you will not need to explain or justify yourself.',
  },
  {
    question: 'Do you offer therapy in Romanian?',
    answer: (
      <p>
        Da. Ofer terapie în limba română pentru adulți și tineri din Essex, Suffolk, sau online în
        toată Marea Britanie. Visit my <Link href="/romanian-therapy">Romanian therapy page</Link>.
      </p>
    ),
    plainAnswer:
      'Da. Ofer terapie în limba română pentru adulți și tineri din Essex, Suffolk, sau online în toată Marea Britanie.',
  },
  {
    question: 'Do you work with couples or families?',
    answer: (
      <p>
        No. I work with individuals only. If you are looking for couples or family therapy, I can
        suggest some colleagues who offer this.
      </p>
    ),
    plainAnswer:
      'No. I work with individuals only. If you are looking for couples or family therapy, I can suggest some colleagues who offer this.',
  },
];

const confidentialityFaqs = [
  {
    question: 'Is everything I say confidential?',
    answer: (
      <p>
        Yes, with a few legal exceptions. I am required to break confidentiality if there is a
        serious risk of harm to yourself or someone else, if a child or vulnerable adult is at risk,
        or if compelled by law. I would always try to discuss this with you first.
      </p>
    ),
    plainAnswer:
      'Yes, with a few legal exceptions. I am required to break confidentiality if there is a serious risk of harm to yourself or someone else, if a child or vulnerable adult is at risk, or if compelled by law. I would always try to discuss this with you first.',
  },
  {
    question: 'Do you keep notes?',
    answer: (
      <p>
        Yes, I keep brief, confidential notes about our sessions. These are stored securely in line
        with UK GDPR and you have the right to request access to them at any time.
      </p>
    ),
    plainAnswer:
      'Yes, I keep brief, confidential notes about our sessions. These are stored securely in line with UK GDPR and you have the right to request access to them at any time.',
  },
  {
    question: 'What happens if I see you in public?',
    answer: (
      <p>
        I will not acknowledge you unless you approach me first. Your privacy is protected
        completely. If we happen to meet, you can choose whether to say hello or pretend we do not
        know each other — whatever feels comfortable for you.
      </p>
    ),
    plainAnswer:
      'I will not acknowledge you unless you approach me first. Your privacy is protected completely. If we happen to meet, you can choose whether to say hello or pretend we do not know each other — whatever feels comfortable for you.',
  },
];

const notRightFaqs = [
  {
    question: 'Who do you not work with?',
    answer: (
      <>
        <p>I do not work with:</p>
        <ul>
          <li>Clients over 40</li>
          <li>Couples or families</li>
          <li>Anyone with an open court case</li>
          <li>Forensic or court-mandated work</li>
          <li>
            Active addiction without wraparound support (such as a GP or addiction service
            involvement)
          </li>
          <li>Active psychosis</li>
        </ul>
        <p>
          This is not a judgment — it is about making sure I can offer the right kind of help. If
          you are unsure whether I am the right fit, the free 15-minute call is the place to ask.
          See my <Link href="/is-this-right-for-you">Is this right for you?</Link> page.
        </p>
      </>
    ),
    plainAnswer:
      'I do not work with: clients over 40, couples or families, anyone with an open court case, forensic or court-mandated work, active addiction without wraparound support, or active psychosis. This is not a judgment — it is about making sure I can offer the right kind of help.',
  },
  {
    question: 'What if I am in crisis right now?',
    answer: (
      <>
        <p>
          This website is not a crisis service. If you are in immediate danger or need urgent help,
          please contact:
        </p>
        <ul>
          <li>
            <strong>Samaritans:</strong> 116 123 (free, 24/7)
          </li>
          <li>
            <strong>NHS Crisis Line:</strong> 111 (press option 2 for mental health)
          </li>
          <li>
            <strong>Emergency services:</strong> 999
          </li>
        </ul>
      </>
    ),
    plainAnswer:
      'This website is not a crisis service. If you are in immediate danger or need urgent help, please contact: Samaritans on 116 123 (free, 24/7), NHS Crisis Line on 111 (option 2 for mental health), or emergency services on 999.',
  },
  {
    question: 'Can I try a few sessions and then decide?',
    answer: (
      <p>
        Of course. Many people are not sure if therapy is right for them at first. The free call
        helps, and the first few sessions are often about working out if this feels like the right
        fit. There is no commitment beyond one session at a time.
      </p>
    ),
    plainAnswer:
      'Of course. Many people are not sure if therapy is right for them at first. The free call helps, and the first few sessions are often about working out if this feels like the right fit. There is no commitment beyond one session at a time.',
  },
];

// Flatten all FAQs for schema
const allFaqsForSchema = [
  ...gettingStartedFaqs,
  ...howTherapyWorksFaqs,
  ...practicalFaqs,
  ...onlineTherapyFaqs,
  ...whoIWorkWithFaqs,
  ...confidentialityFaqs,
  ...notRightFaqs,
].map((faq) => ({
  question: faq.question,
  answer: faq.plainAnswer,
}));

const breadcrumbs = [
  { name: 'Home', url: 'https://nextgentherapy.co.uk' },
  { name: 'FAQ', url: 'https://nextgentherapy.co.uk/faq' },
];

export default function FAQ() {
  return (
    <>
      <FaqSchema items={allFaqsForSchema} />
      <BreadcrumbSchema items={breadcrumbs} />

      <PageHero
        eyebrow="Questions Answered"
        title="Everything you want to know before getting in touch"
        lead="I know reaching out to a therapist can feel daunting. Here are honest answers to the questions I hear most often."
      />

      <div className={styles.page}>
        <main className={styles.content}>
          <section className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Getting started</h2>
            <FaqAccordion items={gettingStartedFaqs} idPrefix="getting-started" />
          </section>

          <section className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>How therapy works</h2>
            <FaqAccordion items={howTherapyWorksFaqs} idPrefix="how-therapy-works" />
          </section>

          <section className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Practical and money</h2>
            <FaqAccordion items={practicalFaqs} idPrefix="practical" />
          </section>

          <section className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Online therapy</h2>
            <FaqAccordion items={onlineTherapyFaqs} idPrefix="online" />
          </section>

          <section className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Who I work with</h2>
            <FaqAccordion items={whoIWorkWithFaqs} idPrefix="who" />
          </section>

          <section className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Confidentiality</h2>
            <FaqAccordion items={confidentialityFaqs} idPrefix="confidentiality" />
          </section>

          <section className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>When therapy is not right</h2>
            <FaqAccordion items={notRightFaqs} idPrefix="not-right" />
          </section>

          <section className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Still have questions?</h2>
            <p className={styles.ctaText}>
              Book a free 15-minute call and ask me directly. No pressure, no commitment — just a
              chance to see if this feels right.
            </p>
            <Link href="/book-now" className={styles.ctaButton}>
              Book your free call
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}
