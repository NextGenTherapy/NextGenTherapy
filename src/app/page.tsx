import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

function getMetadata(): Metadata {
const siteUrl = 
  process.env.NEXT_PUBLIC_SITE_URL || "https://nextgentherapy.co.uk";  return {
    metadataBase: new URL(siteUrl),
    title: "Therapy Colchester | BACP Registered Therapist | Next Generation Therapy",
    description:
      "Professional therapy in Colchester & online. BACP registered therapist Andreea Horhocea offering anxiety, depression & relationship therapy. Free 15-min consultation. Book therapy today!",
    keywords: [
      "therapy Colchester",
      "therapist Colchester",
      "therapy sessions Colchester",
      "BACP therapist Essex",
      "registered therapist Colchester",
      "qualified therapist Essex",
      "professional therapy Colchester",
      "therapy Colchester Essex",
      "online therapy UK",
      "depression therapy Colchester",
      "anxiety therapy Colchester",
      "relationship therapy Essex",
      "child therapy Colchester",
      "mental health therapy Essex",
      "therapy services Colchester",
      "Andreea Horhocea therapist",
      "therapist near me Essex",
      "therapy appointments Colchester"
    ],
    authors: [{ name: "Andreea Horhocea" }],
    openGraph: {
      title: "Therapy Colchester | BACP Registered Therapist",
      description:
        "Professional therapy in Colchester & online. Expert help for anxiety, depression, relationships & personal growth. BACP registered therapist.",
      url: siteUrl,
      siteName: "Next Generation Therapy",
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: "https://nextgentherapy.co.uk/images/default-social-share.jpg",
          width: 1200,
          height: 630,
          alt: "Next Generation Therapy - Professional Therapy Services in Colchester",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Professional Therapy Services Colchester | Next Generation Therapy",
      description:
        "Professional psychodynamic therapy in Colchester & online. Expert help for anxiety, depression, relationships & personal growth.",
      images: ["https://nextgentherapy.co.uk/images/default-social-share.jpg"],
    },
    alternates: {
      canonical: siteUrl,
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
  };
}

export const metadata = getMetadata();

export default function Home() {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Professional Therapy Services Colchester | Next Generation Therapy",
    "description": "BACP registered psychodynamic therapist offering professional counselling in Colchester & online. Expert help for anxiety, depression, relationships & personal growth.",
    "url": "https://nextgentherapy.co.uk",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Next Generation Therapy"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://nextgentherapy.co.uk/images/andreea.jpg"
    },
    "lastReviewed": "2025-09-14",
    "reviewedBy": {
      "@type": "Person",
      "name": "Andreea Horhocea"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <div className={styles.page}>
      <main>
        {/* Logo Section at Top */}
        <section className={styles.logoSection}>
          <div className={styles.logoContainer}>
            <div className={styles.logoImage}></div>
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.contentSection}>
          <div className={styles.greeting}>
            <h1>Hi! I am Andreea Horhocea - Therapist in Colchester.</h1>
            <p className={styles.subtitle}>
              A BACP registered therapist offering professional therapy sessions in
              Colchester and online. <Link href="/faq">View common therapy questions</Link> or <Link href="/services">explore our therapy services</Link>.
            </p>
          </div>

          {/* Image under greeting - centered */}
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/andreea.jpg"
                alt="Andreea Horhocea - BACP registered counsellor and psychotherapist in Colchester offering professional mental health counselling services"
                height={400}
                width={300}
                priority
                className={styles.image}
              />
            </div>
          </div>

          {/* Cards Container */}
          <div className={styles.aboutContainer}>
            <div className={styles.cardsContainer}>
              <Link href="/about" className={styles.introCard}>
                <h2>About Me</h2>
                <p>
                  Learn about my background, qualifications, and approach to therapy.
                </p>
              </Link>
              <Link href="/services" className={styles.servicesCard}>
                <h2>Who I Help</h2>
                <p>
                  I work with people of any age addressing mental health challenges
                  such as anxiety, depression, stress, eating disorders, and more.
                </p>
              </Link>
              <Link href="/blog#professional-thoughts" className={styles.approachCard}>
                <h2>My Approach</h2>
                <p>
                  I focus on creating a safe, compassionate, and supportive
                  environment where you can achieve meaningful and lasting change.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
    </>
  );
}
