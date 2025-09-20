import { Metadata } from "next";
import styles from "./trust.module.scss";
import Link from "next/link";

const siteUrl = "https://nextgentherapy.co.uk";

export const metadata: Metadata = {
  title: "Trust & Care | BACP Registered Counsellor Colchester",
  description:
    "Professional counsellor in Colchester committed to trust and care. BACP registered with highest ethical standards. Safe therapy environment.",
  keywords: [
    "trusted counsellor Colchester",
    "professional standards counsellor",
    "BACP registered counsellor",
    "ethical counsellor Essex",
    "confidential therapy Colchester",
    "safe counsellor environment",
    "professional therapy ethics",
    "counsellor supervision standards",
    "reliable counsellor Colchester",
    "honest counsellor Essex",
    "trustworthy therapist Colchester",
    "professional care counsellor"
  ],
  openGraph: {
    title: "Trust & Care | Professional Standards | BACP Registered Counsellor",
    description:
      "Professional counsellor in Colchester committed to trust and care. BACP registered with highest ethical standards.",
    url: `${siteUrl}/trust`,
    siteName: "Next Generation Therapy",
    images: [
      {
        url: "/images/default-social-share.jpg",
        width: 1200,
        height: 630,
        alt: "Professional therapy approach in Colchester",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trust & Care | Next Generation Therapy Colchester",
    description:
      "Professional counsellor committed to trust and care with BACP ethical standards.",
    images: ["https://nextgentherapy.co.uk/images/default-social-share.jpg"],
  },
  alternates: {
    canonical: `${siteUrl}/trust`,
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

export default function TestimonialsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://nextgentherapy.co.uk/#organization",
        "name": "Next Generation Therapy",
        "url": "https://nextgentherapy.co.uk"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://nextgentherapy.co.uk"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Trust & Care",
            "item": "https://nextgentherapy.co.uk/trust"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className={styles.container}>
        <main className={styles.main}>
          <header className={styles.header}>
            <h1>Building Trust Through Professional Care</h1>
            <p className={styles.subtitle}>
              Creating a safe, confidential environment where healing can begin in Colchester, Essex.
            </p>
          </header>

          <section className={styles.approachSection}>
            <div className={styles.approach}>
              <h2>My Commitment to You</h2>
              <div className={styles.commitmentGrid}>
                <div className={styles.commitmentItem}>
                  <h3>Safe Environment</h3>
                  <p>
                    Every session takes place in a confidential, non-judgmental space 
                    where you can explore your thoughts and feelings freely.
                  </p>
                </div>
                <div className={styles.commitmentItem}>
                  <h3>Professional Standards</h3>
                  <p>
                    As a BACP registered therapist, I maintain the highest standards 
                    of professional practice and ethical conduct.
                  </p>
                </div>
                <div className={styles.commitmentItem}>
                  <h3>Personalized Approach</h3>
                  <p>
                    Using psychodynamic therapy principles, I tailor each session 
                    to your unique needs and circumstances.
                  </p>
                </div>
                <div className={styles.commitmentItem}>
                  <h3>Confidentiality</h3>
                  <p>
                    Your privacy is paramount. Everything discussed in our sessions 
                    remains strictly confidential.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.qualificationsSection}>
            <h2>Professional Qualifications & Experience</h2>
            <div className={styles.qualifications}>
              <div className={styles.qualification}>
                <h3>BACP Registered</h3>
                <p>
                  Registered with the British Association for Counselling and Psychotherapy, 
                  ensuring adherence to professional standards and ongoing development.
                </p>
              </div>
              <div className={styles.qualification}>
                <h3>Psychodynamic Training</h3>
                <p>
                  Specialized training in psychodynamic psychotherapy, focusing on understanding 
                  unconscious patterns and their impact on current relationships and behaviors.
                </p>
              </div>
              <div className={styles.qualification}>
                <h3>Ongoing Supervision</h3>
                <p>
                  Regular professional supervision ensures continued development and 
                  maintains the highest quality of care for all clients.
                </p>
              </div>
            </div>
          </section>


          <section className={styles.ctaSection}>
            <h2>Ready to Begin Your Journey?</h2>
            <p>
              Take the first step towards healing and personal growth with professional, 
              confidential therapy support in Colchester.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/book-now" className={styles.primaryButton}>
                Book Free Consultation
              </Link>
              <Link href="/about" className={styles.secondaryButton}>
                Learn About My Approach
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
