import type { Metadata } from "next";
import styles from "./terms.module.scss";
import buttonLinksStyles from "../../components/ui/buttonLinks.module.scss";
import LegalNavigation from "../../components/layout/legal-navigation";
import Button from "../../components/ui/button";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgentherapy.co.uk"),
  title: "Terms of Service | Next Generation Therapy Colchester | Therapy Terms",
  description: "Terms of service and conditions for Next Generation Therapy Colchester website and professional psychotherapy services. BACP therapist terms and conditions.",
  keywords: [
    "terms of service therapy",
    "therapy terms conditions",
    "therapist terms service",
    "therapy agreement terms",
    "counselling terms conditions",
    "therapy service terms Colchester",
    "psychotherapy terms",
    "BACP therapy terms",
    "therapeutic terms agreement",
    "therapy website terms"
  ],
  authors: [{ name: "Andreea Horhocea" }],
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
  alternates: {
    canonical: "https://nextgentherapy.co.uk/terms",
  },
  openGraph: {
    title: "Terms of Service | Next Generation Therapy Colchester",
    description: "Terms of service and conditions for Next Generation Therapy Colchester website and professional psychotherapy services.",
    url: "https://nextgentherapy.co.uk/terms",
    siteName: "Next Generation Therapy",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://nextgentherapy.co.uk/images/default-social-share.jpg",
        width: 1200,
        height: 630,
        alt: "Terms of Service - Next Generation Therapy Colchester",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Next Generation Therapy Colchester",
    description: "Terms of service and conditions for Next Generation Therapy Colchester professional psychotherapy services.",
    images: ["https://nextgentherapy.co.uk/images/default-social-share.jpg"],
  },
};

export default function Terms() {
  return (
    <div className={styles.page}>
      <main className={styles.terms}>
        <LegalNavigation currentPage="terms" />
        
        <h1 className={styles.heading}>Terms of Service</h1>
        <p className={styles.updated}><strong>Last updated: January 1, 2025</strong></p>

        <section>
          <h2 className={styles.sectionHeading}>1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms 
            and conditions of this agreement. If you do not agree to abide by the above, please 
            do not use this service.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionHeading}>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials on Next Generation 
            Therapy&apos;s website for personal, non-commercial transitory viewing only. This is the grant 
            of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className={styles.list}>
            <li>modify or copy the materials</li>
            <li>use the materials for any commercial purpose or for any public display</li>
            <li>attempt to reverse engineer any software contained on the website</li>
            <li>remove any copyright or other proprietary notations from the materials</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.sectionHeading}>3. Professional Services Disclaimer</h2>
          <p>
            Next Generation Therapy provides professional psychotherapy services. The information 
            on this website is for general informational purposes only and does not constitute 
            medical or therapeutic advice. Always consult with a qualified healthcare professional 
            for specific concerns.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionHeading}>4. Privacy</h2>
          <p>
            Your privacy is important to us. Our Privacy Policy explains how we collect, use, 
            and protect your information when you use our Service.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionHeading}>5. Disclaimer</h2>
          <p>
            The materials on Next Generation Therapy&apos;s website are provided on an &apos;as is&apos; basis. 
            Next Generation Therapy makes no warranties, expressed or implied, and hereby disclaims 
            and negates all other warranties including without limitation, implied warranties or 
            conditions of merchantability, fitness for a particular purpose, or non-infringement 
            of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionHeading}>6. Emergency Mental Health Support</h2>
          <p>
            For mental health emergencies outside of our office hours, please contact:
          </p>
          <ul className={styles.list}>
            <li>
              <strong>NHS 111:</strong> Call 111 or visit{" "}
              <a 
                href="https://111.nhs.uk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.link}
              >
                111.nhs.uk
              </a>
            </li>
            <li>
              <strong>Samaritans:</strong> Call 116 123 (free, 24/7) or visit{" "}
              <a 
                href="https://www.samaritans.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.link}
              >
                samaritans.org
              </a>
            </li>
            <li>
              <strong>PAPYRUS (under 35s):</strong> Call 0800 068 4141 or visit{" "}
              <a 
                href="https://www.papyrus-uk.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.link}
              >
                papyrus-uk.org
              </a>
            </li>
            <li>
              <strong>Shout Crisis Text Line:</strong> Text SHOUT to 85258 or visit{" "}
              <a 
                href="https://giveusashout.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.link}
              >
                giveusashout.org
              </a>
            </li>
            <li>
              <strong>Mind:</strong> Call 0300 123 3393 or visit{" "}
              <a 
                href="https://www.mind.org.uk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.link}
              >
                mind.org.uk
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className={styles.sectionHeading}>7. Governing Law and Jurisdiction</h2>
          <p>
            These terms are governed by English law. Any disputes will be subject to the 
            exclusive jurisdiction of the courts of England and Wales.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionHeading}>8. Consumer Rights</h2>
          <p>
            Your statutory rights under the Consumer Rights Act 2015 and other applicable 
            consumer protection legislation are not affected by these terms.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionHeading}>9. Professional Standards</h2>
          <p>
            Services are provided in accordance with the British Association for 
            Counselling and Psychotherapy (BACP) guidelines and professional standards.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionHeading}>10. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us through 
            our contact form or at the address provided on our website.
          </p>
        </section>
        
        <LegalNavigation currentPage="terms" />

        <section className={buttonLinksStyles.buttonLinks}>
          <Button href="/privacy-policy">Privacy Policy</Button>
          <Button href="/about">About</Button>
          <Button href="/book-now">Book Now</Button>
        </section>
      </main>
    </div>
  );
}
