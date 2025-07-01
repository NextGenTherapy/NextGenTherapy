import type { Metadata } from "next";
import Image from "next/image";
import styles from "./services.module.scss";
import buttonLinksStyles from "../../components/ui/buttonLinks.module.scss";
import Button from "../../components/ui/button";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgentherapy.co.uk"),
  title: "Services - Next Generation Therapy",
  description:
    "Explore the therapy services offered by Andreea Horhocea, including play therapy for children and talking therapy for adults. Sessions are available in-person in Colchester or online, tailored to help with anxiety, self-esteem, body image, relationships, and more.",
  keywords: [
    "therapy services",
    "play therapy for children",
    "talking therapy for adults",
    "anxiety support",
    "self-esteem therapy",
    "body image therapy",
    "relationship therapy",
    "Colchester therapy",
    "online therapy",
    "Andreea Horhocea",
  ],
  authors: [{ name: "Andreea Horhocea" }],
  openGraph: {
    title: "Services - Next Generation Therapy",
    description:
      "Explore the therapy services offered by Andreea Horhocea, including play therapy for children and talking therapy for adults. Sessions are available in-person in Colchester or online, tailored to help with anxiety, self-esteem, body image, relationships, and more.",
    url: "https://nextgentherapy.co.uk/services",
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

        <section className={styles.contentTop}>
          <article className={styles.topTextContainer}>
            <h2>I offer therapy sessions tailored to help with:</h2>
            <ul>
              <li>
                Anxiety & Overwhelm: Managing persistent worry and finding calm.
              </li>
              <li>
                Self-Esteem & Confidence: Building a stronger sense of
                self-worth.
              </li>
              <li>
                Body Image & Eating Concerns: Developing a healthier
                relationship with food and your body.
              </li>
              <li>
                Relationship Patterns: Understanding and improving interpersonal
                dynamics.
              </li>
              <li>
                Teenagers: Supporting them through the complexities of becoming
                who they want to be.
              </li>
              <li>
                Sessions are available in-person in Colchester or online,
                providing flexibility to suit your lifestyle.
              </li>
            </ul>
          </article>
          <aside className={styles.topImageContainer}>
            <Image
              src="/images/services.jpg"
              alt="Andreea Horhocea - Psychodynamic Psychotherapist"
              height={300}
              width={300}
              priority
              className={styles.image}
            />
          </aside>
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
              <p>£60 for the therapeutic hour (50 mins).</p>
              <p>Discover the benefits in a safe space.</p>
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
              <p>£60 for the therapeutic hour (50 mins).</p>
              <p>Explore new perspectives and grow.</p>
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
                I'll ask about what brought you to therapy, your goals, and any concerns 
                you might have. We'll discuss confidentiality, how therapy works, and 
                answer any questions you have. There's no pressure to share more than 
                you're comfortable with.
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
                exceptions would be if there's a risk of serious harm to yourself or 
                others, which I would discuss with you first whenever possible.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>How many sessions will I need?</h3>
              <p>
                The number of sessions varies for each person and depends on your individual 
                goals and circumstances. Some people find benefit in just a few sessions, 
                while others prefer longer-term support. We'll regularly review your 
                progress together and you're free to end therapy whenever you feel ready.
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
              <h3>What's the difference between play therapy and talking therapy?</h3>
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
                If you're struggling with your mental health, feeling stuck, or want 
                to understand yourself better, therapy can help. You don't need to be 
                in crisis to benefit from therapy. It's a space for personal growth, 
                developing coping strategies, and improving your overall well-being.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>What if I don't know what to talk about?</h3>
              <p>
                That's completely normal and absolutely fine. I'm here to help guide 
                our conversations and create a safe space for you to explore your 
                thoughts and feelings. Many people worry about this, but you'll find 
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
