import type { Metadata } from "next";
import Image from "next/image";
import styles from "./services.module.scss";
import buttonLinksStyles from "../../components/ui/buttonLinks.module.scss";
import Button from "../../components/ui/button";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgentherapy.co.uk"),
  title: "Therapy Services Colchester | Play Therapy & Adult Counselling",
  description:
    "Professional therapy services in Colchester & online. Play therapy for children, psychodynamic therapy for adults. Anxiety, depression, relationships, body image support. £60 per session.",
  keywords: [
    "therapy services Colchester",
    "play therapy children Colchester",
    "adult therapy Colchester",
    "psychodynamic therapy services",
    "anxiety therapy Colchester",
    "depression counselling Essex",
    "relationship therapy",
    "body image therapy",
    "self-esteem counselling",
    "online therapy UK",
    "therapy sessions £60",
    "BACP therapy services",
    "professional counselling Colchester"
  ],
  authors: [{ name: "Andreea Horhocea" }],
  alternates: {
    canonical: "https://nextgentherapy.co.uk/services",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Therapy Services Colchester | Play Therapy & Adult Counselling",
    description:
      "Professional therapy services in Colchester & online. Play therapy for children, psychodynamic therapy for adults. Anxiety, depression, relationships, body image support.",
    url: "https://nextgentherapy.co.uk/services",
    siteName: "Next Generation Therapy",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://nextgentherapy.co.uk/images/default-social-share.jpg",
        width: 300,
        height: 300,
        alt: "Andreea Horhocea - Psychodynamic Psychotherapist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Next Generation Therapy",
    description:
      "Explore the therapy services offered by Andreea Horhocea, including play therapy for children and talking therapy for adults.",
    images: ["https://nextgentherapy.co.uk/images/default-social-share.jpg"],
  },
};

export default function Services() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Psychodynamic Psychotherapy Services",
    "provider": {
      "@type": "Person",
      "name": "Andreea Horhocea",
      "jobTitle": "Psychodynamic Psychotherapist"
    },
    "serviceType": ["Play Therapy for Children", "Talking Therapy for Adults"],
    "areaServed": ["Colchester", "Online"],
    "description": "Professional therapy services including play therapy for children and talking therapy for adults, addressing anxiety, self-esteem, body image, and relationship issues.",
    "offers": [
      {
        "@type": "Offer",
        "name": "Individual Therapy Session",
        "description": "50-minute individual therapy sessions available in-person or online"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.greeting}>
          <h1>Services Provided</h1>
        </div>

        <section className={styles.servicesOverview}>
          <div className={styles.contentGrid}>
            <article className={styles.textContent}>
              <h2>Who I Work With & What I Help With</h2>
              <p>I offer therapy sessions tailored to support a diverse range of clients and concerns. Sessions are available in-person in Colchester or online, providing flexibility to suit your lifestyle.</p>
              
              <div className={styles.servicesList}>
                <div className={styles.listColumn}>
                  <h3>Who I Support</h3>
                  <ul>
                    <li>Children and young people</li>
                    <li>Adults experiencing anxiety</li>
                    <li>Clients dealing with depression</li>
                    <li>Individuals who have suffered abuse</li>
                    <li>Trauma survivors</li>
                    <li>People grieving or experiencing loss</li>
                    <li>LGBTQ+ individuals and couples</li>
                  </ul>
                </div>
                <div className={styles.listColumn}>
                  <h3>Areas I Help With</h3>
                  <ul>
                    <li>Anxiety & overwhelm</li>
                    <li>Self-esteem & confidence</li>
                    <li>Body image & eating concerns</li>
                    <li>Relationship patterns</li>
                    <li>Identity issues & life transitions</li>
                    <li>ADD/ADHD related struggles</li>
                    <li>Neurodiversity support</li>
                  </ul>
                </div>
              </div>
            </article>
            <aside className={styles.imageContainer}>
              <Image
                src="/images/services.jpg"
                alt="A therapist talking to a patient"
                height={400}
                width={300}
                className={styles.image}
              />
            </aside>
          </div>
        </section>

        <section className={styles.contentEnd}>
          <div className={styles.childrenSection}>
            <aside className={styles.endImageContainer}>
              <Image
                src="/images/child.jpg"
                alt="Play therapy session for children"
                height={300}
                width={300}
                className={styles.image}
              />
            </aside>
            <article className={styles.childTextContainer}>
              <h2>Play Therapy for Children</h2>
              <p><strong>£60 for the therapeutic hour (50 mins)</strong></p>
              <p>
                Play therapy provides children with a natural way to express their 
                feelings and work through challenges. Using toys, games, and creative 
                activities, children can explore difficult emotions in a safe, 
                supportive environment.
              </p>
              <p>
                This approach is particularly effective for children who may struggle 
                to articulate their feelings verbally, helping them develop emotional 
                resilience and coping strategies.
              </p>
            </article>
          </div>

          <div className={styles.adultsSection}>
            <aside className={styles.endImageContainer}>
              <Image
                src="/images/adult.jpg"
                alt="Talking therapy session for adults"
                height={300}
                width={300}
                className={styles.image}
              />
            </aside>
            <article className={styles.adultTextContainer}>
              <h2>Talking Therapy Online or In-Person</h2>
              <p><strong>£60 for the therapeutic hour (50 mins)</strong></p>
              <p>
                Individual therapy sessions designed to help you explore your thoughts, 
                feelings, and experiences in a confidential, non-judgmental space. 
                Whether online or in-person, sessions are tailored to your unique needs.
              </p>
              <p>
                Together, we&apos;ll work to understand patterns, develop coping strategies, 
                and support your journey toward greater self-awareness and emotional 
                well-being.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.faqContainer}>
            <h2>Frequently Asked Questions</h2>
            
            <div className={styles.faqItem}>
              <h3>What should I expect in my first session?</h3>
              <p>
                Your first session is an opportunity for us to get to know each other. 
                I&apos;ll ask about what brought you to therapy, your goals, and any concerns 
                you might have. We&apos;ll discuss confidentiality, how therapy works, and 
                answer any questions you have. There&apos;s no pressure to share more than 
                you&apos;re comfortable with.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>How long are therapy sessions?</h3>
              <p>
                Each therapy session lasts 50 minutes (the therapeutic hour). This gives 
                us enough time to explore your thoughts and feelings while maintaining 
                healthy boundaries. Sessions are scheduled weekly, though frequency can 
                be adjusted based on your individual needs.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Is everything I say confidential?</h3>
              <p>
                Yes, everything discussed in our sessions is strictly confidential. 
                I follow professional guidelines that protect your privacy. The only 
                exceptions would be if there&apos;s a risk of serious harm to yourself or 
                others, which I would discuss with you first whenever possible.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>How many sessions will I need?</h3>
              <p>
                The number of sessions varies for each person and depends on your individual 
                goals and circumstances. Some people find benefit in just a few sessions, 
                while others prefer longer-term support. We&apos;ll regularly review your 
                progress together and you&apos;re free to end therapy whenever you feel ready.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Do you offer online sessions?</h3>
              <p>
                Yes, I offer both in-person sessions in Colchester and secure online 
                sessions via video call. Online therapy can be just as effective as 
                in-person sessions and offers flexibility for those with busy schedules 
                or who prefer the comfort of their own space.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>What&apos;s the difference between play therapy and talking therapy?</h3>
              <p>
                Play therapy is designed specifically for children and uses toys, games, 
                and creative activities as the primary way of communication. Children 
                often express themselves more naturally through play than words. Talking 
                therapy for adults and teenagers focuses on verbal communication to 
                explore thoughts, feelings, and experiences.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>How do I know if therapy is right for me?</h3>
              <p>
                If you&apos;re struggling with your mental health, feeling stuck, or want 
                to understand yourself better, therapy can help. You don&apos;t need to be 
                in crisis to benefit from therapy. It&apos;s a space for personal growth, 
                developing coping strategies, and improving your overall well-being.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>What if I don&apos;t know what to talk about?</h3>
              <p>
                That&apos;s completely normal and absolutely fine. I&apos;m here to help guide 
                our conversations and create a safe space for you to explore your 
                thoughts and feelings. Many people worry about this, but you&apos;ll find 
                that once we start talking, things naturally emerge.
              </p>
            </div>
          </div>
        </section>

        <section className={buttonLinksStyles.buttonLinks}>
          <Button href="/about-therapy">About Therapy</Button>
          <Button href="/about">About Me</Button>
          <Button href="/book-now">Book Now</Button>
        </section>
      </main>
    </div>
    </>
  );
}
