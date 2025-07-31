import type { Metadata } from "next";
import Image from "next/image";
import styles from "./about-therapy.module.scss";
import buttonLinksStyles from "../../components/ui/buttonLinks.module.scss";
import Button from "../../components/ui/button";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nextgentherapy.co.uk"),
  title: "What is Therapy? Benefits & Process | Colchester Therapist",
  description:
    "Learn about psychodynamic therapy benefits, who it helps, and what to expect. Professional guidance for anxiety, depression, relationships & personal growth in Colchester & online.",
  keywords: [
    "what is therapy",
    "therapy benefits",
    "psychodynamic therapy explained",
    "who needs therapy",
    "therapy process Colchester",
    "mental health benefits",
    "anxiety therapy help",
    "depression therapy benefits",
    "relationship therapy process",
    "child therapy benefits",
    "therapy expectations",
    "therapy myths debunked",
    "Colchester therapy information"
  ],
  authors: [{ name: "Andreea Horhocea" }],
  alternates: {
    canonical: "https://www.nextgentherapy.co.uk/about-therapy",
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
    title: "What is Therapy? Benefits & Process | Colchester Therapist",
    description:
      "Learn about psychodynamic therapy benefits, who it helps, and what to expect. Professional guidance for anxiety, depression, relationships & personal growth.",
    url: "https://www.nextgentherapy.co.uk/about-therapy",
    siteName: "Next Generation Therapy",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.nextgentherapy.co.uk/images/default-social-share.jpg",
        width: 300,
        height: 300,
        alt: "Andreea Horhocea - Psychodynamic Psychotherapist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Therapy - Next Generation Therapy",
    description:
      "Learn about therapy, who it's for, and how it can help. Discover what to expect and see who Andreea Horhocea works with.",
    images: ["https://www.nextgentherapy.co.uk/images/default-social-share.jpg"],
  },
};



export default function AboutTherapy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About Therapy",
    "description": "Learn about therapy, who it's for, and how it can help with mental health and personal growth.",
    "provider": {
      "@type": "Person",
      "name": "Andreea Horhocea",
      "jobTitle": "Psychodynamic Psychotherapist"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className={styles.page}>
        <main className={styles.main}>
          {/* Hero Section */}
          <section className={styles.heroSection}>
            <div className={styles.greeting}>
              <h1>About Therapy</h1>
              <p className={styles.subtitle}>
                Understanding how therapy works and who it can help
              </p>
            </div>
            
            {/* Image Section */}
            <div className={styles.imageContainer}>
              <Image
                src="/images/learn-more.jpg"
                alt="Visual representation of stress, anxiety and depression concepts"
                height={400}
                width={600}
                priority
                className={styles.image}
              />
            </div>
          </section>

          {/* Why Therapy Section */}
          <section className={styles.whyTherapySection}>
            <article className={styles.textContent}>
              <h2>Why do people seek therapy?</h2>
              <p>
                Therapy can help when you&apos;re feeling anxious, overwhelmed, or
                struggling to manage emotions. It provides support for navigating
                challenges in relationships, fostering meaningful connections, and
                improving communication.
              </p>
              <p>
                It offers a space for self-reflection, helping you rediscover your
                values, process significant life events, and adapt to major
                transitions like career changes or loss.
              </p>
              <p>
                Therapy is a valuable tool for addressing unhealthy coping
                mechanisms, building self-confidence, and fostering a healthier
                relationship with yourself. It provides a safe, non-judgmental
                environment to explore feelings and grow emotionally.
              </p>
            </article>
          </section>

          {/* How Therapy Helps Section */}
          <section className={styles.howTherapyHelpsSection}>
            <h2>How Can Therapy Help?</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h3>Personal Growth & Self-Awareness</h3>
                <p>
                  Therapy helps individuals gain a deeper understanding of
                  themselves, providing a structured environment to explore
                  thoughts, feelings, and behaviors.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Coping with Life Transitions</h3>
                <p>
                  Whether it&apos;s starting a new job, moving, marriage, divorce, or
                  retirement, therapy provides support and guidance during changes.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Improving Relationships</h3>
                <p>
                  Therapy enhances interpersonal skills and improves relationships
                  through better communication and conflict resolution strategies.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Building Emotional Resilience</h3>
                <p>
                  Regular therapy builds emotional resilience, equipping you with
                  tools to handle future stressors and challenges more effectively.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Managing Stress & Anxiety</h3>
                <p>
                  Learn practical techniques to manage everyday stress and anxiety,
                  promoting a more balanced and peaceful life.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Preventative Mental Health Care</h3>
                <p>
                  Like physical health, mental health benefits from preventative
                  care, helping prevent more severe issues from developing.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Addressing Subclinical Issues</h3>
                <p>
                  Many people experience subclinical issues that aren&apos;t severe enough 
                  to qualify as a mental disorder but still affect quality of life, such 
                  as mild anxiety or low self-esteem.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Support for Chronic Conditions</h3>
                <p>
                  For those with chronic mental health conditions, ongoing therapy 
                  provides continuous support and management strategies to maintain 
                  stability and improve quality of life.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Fostering Positive Habits</h3>
                <p>
                  Therapists can assist in developing and maintaining positive habits 
                  and routines, such as exercise, mindfulness, and healthy eating, 
                  which contribute to overall well-being.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Empowerment & Confidence</h3>
                <p>
                  Therapy empowers individuals by giving them tools to handle various 
                  life situations confidently, fostering a sense of control and 
                  competence that enhances overall life satisfaction.
                </p>
              </div>
            </div>
          </section>

          {/* Location Section */}
          <section className={styles.locationSection}>
            <div className={styles.locationIntro}>
              <h2>Location & Working Hours</h2>
              <p>Available for both in-person sessions in Colchester and online therapy</p>
            </div>
            <div className={styles.locationContent}>
              <div className={styles.hoursContainer}>
                <div className={styles.hours}>
                  <h3>Monday - Tuesday</h3>
                  <p>10am - 7pm</p>
                  <h3>Friday</h3>
                  <p>9am - 2pm</p>
                </div>
              </div>
              <div className={styles.mapContainer}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2462.624902209368!2d0.9056014!3d51.8860592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d905d138eb59f9%3A0xcba6bcd08ff9a10!2sAndreea%20Horhocea%20Next%20Generation%20Counselling%20%26%20Psychotherapy!5e0!3m2!1sen!2suk!4v1743611123198!5m2!1sen!2suk"
                  width="100%"
                  height="300"
                  allowFullScreen={true}
                  title="Google Map Location of Andreea Horhocea Next Generation Counselling & Psychotherapy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={styles.map}
                ></iframe>
              </div>
            </div>
          </section>

          {/* Button Links Section */}
          <section className={buttonLinksStyles.buttonLinks}>
            <Button href="/about">About Me</Button>
            <Button href="/services">Services</Button>
            <Button href="/book-now">Book Now</Button>
          </section>
        </main>
      </div>
    </>
  );
}
