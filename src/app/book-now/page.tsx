import type { Metadata } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "./book-now.module.scss";
import buttonLinksStyles from "../../components/buttonLinks.module.scss";
import Button from "../../components/button";

// Dynamically import ContactForm for better performance
const ContactForm = dynamic(() => import("../../components/contact-form"), {
  loading: () => <div className={styles.formLoading}>Loading contact form...</div>,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgentherapy.co.uk"),
  title: "Book Now - Next Generation Therapy",
  description:
    "Book a therapy session with Andreea Horhocea, a psychodynamic psychotherapist offering services in Colchester and online.",
  keywords: [
    "book therapy session",
    "psychodynamic psychotherapy",
    "therapy in Colchester",
    "online therapy",
    "Andreea Horhocea",
  ],
  authors: [{ name: "Andreea Horhocea" }],
  openGraph: {
    title: "Book Now - Next Generation Therapy",
    description:
      "Book a therapy session with Andreea Horhocea, a psychodynamic psychotherapist offering services in Colchester and online.",
    url: "https://nextgentherapy.co.uk/book-now",
    images: [
      {
        url: "https://nextgentherapy.co.uk/images/default-social-share.jpg",
        width: 500,
        height: 500,
        alt: "Therapy session illustration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Now - Next Generation Therapy",
    description:
      "Book a therapy session with Andreea Horhocea, a psychodynamic psychotherapist offering services in Colchester and online.",
    images: ["https://nextgentherapy.co.uk/images/default-social-share.jpg"],
  },
};

export default function BookNow() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.greeting}>
          <h1>Let the Journey Begin… Enquiry Form</h1>
        </section>

        <section className={styles.contentTop}>
          <article>
            <h2>Ready to Take the First Step?</h2>
            <ul>
              <li>
                If you&apos;re feeling ready to explore therapy or have
                questions about the process, I&apos;m here to help.
              </li>
              <li>Reach out via the contact form below, email, or phone.</li>
              <li>
                I aim to respond within 24 hours to schedule a brief
                consultation and discuss how we might work together.
              </li>
            </ul>
          </article>
          <aside className={styles.topImageContainer}>
            <Image
              src="/images/book-now.jpg"
              alt="A brain with thread being pulled to showing a therapist unravelling problems"
              width={300}
              height={300}
              className={styles.image}
              priority
            />
          </aside>
        </section>

        <section className={styles.contentMiddle}>
          <div className={styles.contact}>
            <h3>My Contact Details</h3>
            <ul>
              <li>
                <a
                  href="mailto:andreeatherapytoday@gmail.com"
                  aria-label="Send an email to Andreea Therapy Today"
                >
                  Email: andreeatherapytoday@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:07448036017"
                  aria-label="Call Andreea Therapy Today at 07448036017"
                >
                  Phone: 07448036017
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.location}>
            <h3>Location</h3>
            <ul>
              <li>
                <a
                  href="https://www.google.com/maps?q=Colchester+Business+Centre,+1+George+Williams+Way,+Colchester+CO1+2JS"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Colchester Business Centre on Google Maps"
                >
                  Colchester Business Centre, 1 George Williams Way, Colchester
                  CO1 2JS
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.hours}>
            <h3>Working Office Hours</h3>
            <ul>
              <li>Monday - Tuesday: 10am - 7pm</li>
              <li>Friday: 9am - 2pm</li>
              <li>More availability online</li>
            </ul>
          </div>
        </section>

        <section className={styles.contentEnd}>
          <h2>Contact Form</h2>
          <ContactForm />
        </section>

        <section className={buttonLinksStyles.buttonLinks}>
          <Button href="/who-i-see">Who I See</Button>
          <Button href="/services">Services</Button>
          <Button href="/book-now">Book Now</Button>
        </section>
      </main>
    </div>
  );
}
