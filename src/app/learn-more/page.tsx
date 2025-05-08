import type { Metadata } from "next";
import Image from "next/image";
import styles from "./learn-more.module.css";
import buttonLinksStyles from "../../components/buttonLinks.module.css";
import Button from "../../components/button";

// Page-specific metadata
export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Why Therapy - Next Generation Therapy",
  description:
    "Learn why therapy is important and how it can help you achieve personal growth and emotional well-being.",
  keywords: [
    "why therapy",
    "importance of therapy",
    "mental health support",
    "emotional well-being",
    "personal growth",
    "Andreea Horhocea",
  ],
  authors: [{ name: "Andreea Horhocea" }],
  openGraph: {
    title: "Why Therapy - Next Generation Therapy",
    description:
      "Learn why therapy is important and how it can help you achieve personal growth and emotional well-being.",
    url: "http://localhost:3000/learn-more",
    images: [
      {
        url: "/images/andreea.jpg",
        width: 300,
        height: 300,
        alt: "Andreea Horhocea - Psychodynamic Psychotherapist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Therapy - Next Generation Therapy",
    description:
      "Learn why therapy is important and how it can help you achieve personal growth and emotional well-being.",
    images: ["/images/andreea.jpg"],
  },
};

export default function LearnMore() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.pageTop}>
          <h1>Why Therapy?</h1>
          <Image
            src="/images/andreea.jpg"
            alt="Andreea Horhocea - Psychodynamic Psychotherapist"
            height={300}
            width={300}
            className={styles.image}
          />
        </section>

        <section className={styles.intro}>
          <h2>Why do people seek therapy?</h2>
          <article className={styles.list}>
            <p>
              Therapy can help when you&#39;re feeling anxious, overwhelmed, or
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

        <section className={styles.outro}>
          <h2>How can therapy help?</h2>
          <ol className={styles.list}>
            <li>
              <h3>Personal Growth and Self-Awareness</h3>
              <p>
                Therapy helps individuals gain a deeper understanding of
                themselves. It provides a structured environment to explore
                thoughts, feelings, and behaviors, leading to greater
                self-awareness and personal growth.
              </p>
            </li>
            <li>
              <h3>Coping with Life Transitions</h3>
              <p>
                Life is full of transitions such as starting a new job, moving
                to a new city, marriage, divorce, or retirement. Therapy can
                provide support and guidance during these changes, helping
                individuals adapt and manage stress effectively.
              </p>
            </li>
            <li>
              <h3>Improving Relationships</h3>
              <p>
                Therapy can enhance interpersonal skills and improve
                relationships with family, friends, and colleagues. It offers
                strategies for better communication, conflict resolution, and
                understanding others&#39; perspectives.
              </p>
            </li>
            <li>
              <h3>Enhancing Emotional Resilience</h3>
              <p>
                Regular therapy can build emotional resilience, equipping
                individuals with tools to handle future stressors and challenges
                more effectively.
              </p>
            </li>
            <li>
              <h3>Managing Everyday Stress and Anxiety</h3>
              <p>
                Therapy provides techniques to manage everyday stress and
                anxiety, promoting a more balanced and peaceful life.
              </p>
            </li>
            <li>
              <h3>Preventative Care</h3>
              <p>
                Much like physical health, mental health benefits from
                preventative care. Engaging in therapy before reaching a crisis
                point can prevent the development of more severe mental health
                issues.
              </p>
            </li>
            <li>
              <h3>Addressing Subclinical Issues</h3>
              <p>
                Therapy can address subclinical issues, such as mild anxiety,
                low self-esteem, or relationship difficulties, which still
                affect quality of life.
              </p>
            </li>
            <li>
              <h3>Support for Chronic Conditions</h3>
              <p>
                For those with chronic mental health conditions, ongoing therapy
                provides continuous support and management strategies.
              </p>
            </li>
            <li>
              <h3>Fostering Positive Habits</h3>
              <p>
                Therapists can assist in developing and maintaining positive
                habits and routines, such as exercise, mindfulness, and healthy
                eating.
              </p>
            </li>
            <li>
              <h3>Empowerment and Confidence</h3>
              <p>
                Therapy empowers individuals by giving them tools to handle
                various life situations confidently.
              </p>
            </li>
          </ol>
        </section>

        <div className={buttonLinksStyles.buttonLinks}>
          <Button href="/who-i-see">Who I See</Button>
          <Button href="/services">Services</Button>
          <Button href="/book-now">Book Now</Button>
        </div>
      </main>
    </div>
  );
}