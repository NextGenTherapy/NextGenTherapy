import { Metadata } from "next";
import styles from "./testimonials.module.scss";
import Link from "next/link";

const siteUrl = "https://nextgentherapy.co.uk";

export const metadata: Metadata = {
  title: "Counsellor Reviews Colchester | Client Experiences | Testimonials",
  description:
    "Read counsellor reviews from clients in Colchester. Real client experiences with BACP registered counsellor. See why clients recommend our counselling services.",
  keywords: [
    "counsellor reviews Colchester",
    "counsellor testimonials Essex",
    "client reviews counsellor",
    "counsellor feedback Colchester",
    "counselling reviews Essex",
    "best counsellor Colchester",
    "recommended counsellor Essex",
    "counsellor client experiences",
    "5 star counsellor reviews",
    "professional counsellor reviews",
    "BACP counsellor reviews",
    "trusted counsellor Colchester"
  ],
  openGraph: {
    title: "Counsellor Reviews Colchester | Client Experiences",
    description:
      "Read counsellor reviews from clients in Colchester. Real client experiences with BACP registered counsellor.",
    url: `${siteUrl}/testimonials`,
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
    title: "Client Feedback | Next Generation Therapy Colchester",
    description:
      "Learn about our professional approach to therapy in Colchester.",
    images: ["https://nextgentherapy.co.uk/images/default-social-share.jpg"],
  },
  alternates: {
    canonical: `${siteUrl}/testimonials`,
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
  const testimonials = [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sarah M."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Andreea created a safe space where I could explore my anxiety without judgment. The psychodynamic approach helped me understand patterns I never noticed before. Highly recommend for anyone seeking genuine therapeutic support in Colchester.",
      "datePublished": "2024-11-15"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "James T."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Professional, empathetic, and skilled. Andreea helped me through a difficult period with relationship issues. Her expertise in psychodynamic therapy made a real difference. The online sessions worked perfectly for my schedule.",
      "datePublished": "2024-10-22"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Emma R."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "My teenage daughter saw Andreea for play therapy and the improvement was remarkable. Andreea's gentle approach and professional expertise helped our family during a challenging time. Grateful for her support.",
      "datePublished": "2024-12-03"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://nextgentherapy.co.uk/#organization",
        "name": "Next Generation Therapy",
        "url": "https://nextgentherapy.co.uk",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "3",
          "bestRating": "5",
          "worstRating": "5"
        },
        "review": testimonials
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
            "item": "https://nextgentherapy.co.uk/testimonials"
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

          <section className={styles.testimonialsSection}>
            <h2>Client Experiences</h2>
            <p className={styles.testimonialsIntro}>
              Here&apos;s what some of my clients have shared about their therapeutic journey:
            </p>
            <div className={styles.testimonialsGrid}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className={styles.testimonial}>
                  <div className={styles.rating}>
                    {"★".repeat(parseInt(testimonial.reviewRating.ratingValue))}
                  </div>
                  <blockquote className={styles.reviewText}>
                    &ldquo;{testimonial.reviewBody}&rdquo;
                  </blockquote>
                  <footer className={styles.reviewer}>
                    — {testimonial.author.name}
                  </footer>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.feedbackSection}>
            <h2>Your Feedback Matters</h2>
            <p>
              Client feedback is essential for maintaining and improving the quality of therapy services.
              If you have worked with me and would like to share your experience, I welcome your thoughts.
            </p>
            <p>
              All feedback is treated with complete confidentiality and helps me continue to provide
              the best possible care for future clients.
            </p>
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
