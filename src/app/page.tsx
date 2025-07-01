import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.scss";
import ButtonHome from "../components/ui/button-home";

function getMetadata(): Metadata {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://nextgentherapy.co.uk";

  return {
    metadataBase: new URL(siteUrl),
    title: "Welcome to Next Generation Therapy",
    description:
      "Discover a safe space for growth and self-discovery with Andreea Horhocea.",
    authors: [{ name: "Andreea Horhocea" }],
    openGraph: {
      title: "Welcome to Next Generation Therapy",
      description:
        "Discover a safe space for growth and self-discovery with Andreea Horhocea.",
      url: siteUrl,
      images: [
        {
          url: "https://nextgentherapy.co.uk/images/default-social-share.jpg",
          width: 1200,
          height: 630,
          alt: "Next Generation Therapy - A Safe Space for Growth and Self-Discovery",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Welcome to Next Generation Therapy",
      description:
        "Discover a safe space for growth and self-discovery with Andreea Horhocea.",
      images: ["https://nextgentherapy.co.uk/images/default-social-share.jpg"],
    },
  };
}

export const metadata = getMetadata();

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        {/* ContentTop Section */}
        <section className={styles.contentTop}>
          <div className={styles.imageLogoContainer}></div>
          <div className={styles.imageText}>
            <h1>
              Come explore a new path to healing with a safe space for growth
              and self-discovery!
            </h1>
          </div>
          <div className={styles.buttonLinksContainer}>
            <ButtonHome href="/therapy-101">Therapy 101</ButtonHome>
            <ButtonHome href="/services">Services</ButtonHome>
            <ButtonHome href="/book-now">Book Now</ButtonHome>
          </div>
        </section>

        {/* ContentEnd Section */}

        <div className={styles.greeting}>
          <h2>Hi! I am Andreea Horhocea.</h2>
        </div>
        <section className={styles.contentEnd}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/andreea.jpg"
              alt="Andreea Horhocea - Psychodynamic Psychotherapist"
              height={400}
              width={300}
              priority
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <p>
              A psychodynamic psychotherapist. I am offering 1-to-1 sessions in
              Colchester and online.
            </p>
            <p>
              I work with people of any age who are looking to address mental
              health-related challenges such as anxiety, depression, stress,
              eating disorders, and more.
            </p>
            <p>
              I focus on creating a safe, compassionate, and supportive
              environment where you can feel comfortable to achieve a meaningful
              and lasting change.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
