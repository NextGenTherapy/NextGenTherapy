import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "../components/button";

function getMetadata(): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return {
    metadataBase: new URL(siteUrl),
    title: "Welcome to Next Generation Therapy",
    description: "Discover a safe space for growth and self-discovery with Andreea Horhocea.",
    authors: [{ name: "Andreea Horhocea" }], // Added authors metadata
    openGraph: {
      title: "Welcome to Next Generation Therapy",
      description: "Discover a safe space for growth and self-discovery with Andreea Horhocea.",
      url: siteUrl,
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
      description: "Discover a safe space for growth and self-discovery with Andreea Horhocea.",
      images: ["/images/default-social-share.jpg"],
    },
  };
}

export const metadata = getMetadata();

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <header className={styles.imageLogoContainer}>
          <h1>Come explore a new path to healing with a safe space for growth and self-discovery!</h1>
          <div className={styles.button}>
            <Button href="/learn-more">Learn More</Button>
            <Button href="/services">Services</Button>
            <Button href="/book-now">Book Now</Button>
          </div>
        </header>

        <section className={styles.introAndreea}>
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
        </section>
      </main>
    </div>
  );
}
