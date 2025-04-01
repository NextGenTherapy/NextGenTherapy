import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "../components/button";

// Page-specific metadata
export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"), // Base URL for resolving relative URLs
  title: "Welcome to Next Generation Therapy",
  description: "Discover a safe space for growth and self-discovery with Andreea Horhocea, a psychodynamic psychotherapist offering 1-to-1 sessions in Colchester, Chelmsford, and online.",
  keywords: [
    "therapy",
    "psychotherapy",
    "mental health",
    "Colchester",
    "Chelmsford",
    "psychodynamic therapy",
    "personal growth",
    "emotional well-being",
    "online",
  ],
  openGraph: {
    title: "Welcome to Next Generation Therapy",
    description: "Discover a safe space for growth and self-discovery with Andreea Horhocea, a psychodynamic psychotherapist offering 1-to-1 sessions in Colchester, Chelmsford, and online.",
    url: "http://localhost:3000", // Replace with actual website link
    images: [
      {
        url: "/images/default-social-share.jpg",
        width: 1200,
        height: 630,
        alt: "Next Generation Therapy - A Safe Space for Growth and Self-Discovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to Next Generation Therapy",
    description: "Discover a safe space for growth and self-discovery with Andreea Horhocea, a psychodynamic psychotherapist offering 1-to-1 sessions in Colchester, Chelmsford, and online.",
    images: ["/images/default-social-share.jpg"],
  },
};

// Separate viewport export
export const viewport = "width=device-width, initial-scale=1";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <div className={styles.imageLogoContainer}>
          <div className={styles.buttonLinks}>
            <h1>Come explore a new path to healing with a safe space for growth and self-discovery!</h1>
            <div className={styles.button}>
              <Button href="/learn-more">Learn More</Button>
              <Button href="/services">Services</Button>
              <Button href="/book-now">Book Now</Button>
            </div>
          </div>
        </div>

        <div className={styles.introAndreea}>
          <div className={styles.textContainer}>
            <div className={styles.greeting}>
              <p>Hi! I am Andreea Horhocea.</p>
            </div>
            <div className={styles.description}>
              <p>
                A psychodynamic psychotherapist. I am offering 1-to-1 sessions in Colchester, Chelmsford, and online. I work with people of any age who are looking to address mental health-related challenges such as anxiety, depression, stress, eating disorders, and more. I focus on creating a safe, compassionate, and supportive environment where you can feel comfortable to achieve a meaningful and lasting change.
              </p>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/images/andreea.jpg"
              alt="Andreea Horhocea - Psychodynamic Psychotherapist"
              height={400}
              width={300}
              className={styles.image}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
