import type { Metadata } from "next";
import Image from "next/image";
import styles from "./services.module.css";
import buttonLinksStyles from "../../components/buttonLinks.module.css";
import Button from "../../components/button";

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
        url: "/images/bacp.jpg",
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
    images: ["/images/bacp.jpg"],
  },
};

export default function Services() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.greeting}>
        <h1>Services Provided</h1>
      </div>

        <section className={styles.contentTop}>
          <article className={styles.topTextContainer}>
            <h2>I offer therapy sessions tailored to help with:</h2>
            <ul>
              <li>Anxiety & Overwhelm: Managing persistent worry and finding calm.</li>
              <li>Self-Esteem & Confidence: Building a stronger sense of self-worth.</li>
              <li>Body Image & Eating Concerns: Developing a healthier relationship with food and your body.</li>
              <li>Relationship Patterns: Understanding and improving interpersonal dynamics.</li>
              <li>Teenagers: Supporting them through the complexities of becoming who they want to be.</li>
              <li>Sessions are available in-person in Colchester or online, providing flexibility to suit your lifestyle.</li>
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

        <section className={buttonLinksStyles.buttonLinks}>
          <Button href="/who-i-see">Who I See</Button>
          <Button href="/about">About Me</Button>
          <Button href="/book-now">Book Now</Button>
        </section>
      </main>
    </div>
  );
}


