import type { Metadata } from "next";
import Image from "next/image";
import styles from "./book-now.module.css";
import Button from "../../components/button";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Book now - Next Generation Therapy",
  description:
    "Book a therapy session with Andreea Horhocea, a psychodynamic psychotherapist offering services in Colchester, Chelmsford, and online.",
  keywords: [
    "book therapy session",
    "psychodynamic psychotherapy",
    "therapy in Colchester",
    "therapy in Chelmsford",
    "online therapy",
    "Andreea Horhocea",
  ],
  authors: [{ name: "Andreea Horhocea" }],
  openGraph: {
    title: "Book now - Next Generation Therapy",
    description:
      "Book a therapy session with Andreea Horhocea, a psychodynamic psychotherapist offering services in Colchester, Chelmsford, and online.",
    url: "http://localhost:3000/book-now",
    images: [
      {
        url: "/images/book-now.jpg",
        width: 500,
        height: 500,
        alt: "Therapy session illustration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book now - Next Generation Therapy",
    description:
      "Book a therapy session with Andreea Horhocea, a psychodynamic psychotherapist offering services in Colchester, Chelmsford, and online.",
    images: ["/images/book-now.jpg"],
  },
};

export default function BookNow() {
  return (
    <div className={styles.page}>
      <header className={styles.pageTop}>
        <h1>Let the journey begin… Enquiry form</h1>
      </header>

      <main className={styles.layout}>
        <section className={styles.leftSide}>
          <article className={styles.content}>
            <h2>Ready to Take the First Step?</h2>
            <p>
              If you&apos;re feeling ready to explore therapy or have questions about
              the process, I&apos;m here to help. Reach out via the contact form
              below, email, or phone. I aim to respond within 24 hours to
              schedule a brief consultation and discuss how we might work
              together.
            </p>
          </article>

          <section className={styles.contact}>
            <h3>My contact details</h3>
            <a
              href="mailto:andreeatherapytoday@gmail.com"
              aria-label="Send an email to Andreea Therapy Today"
            >
              Email: andreeatherapytoday@gmail.com
            </a>
            <a
              href="tel:07448036017"
              aria-label="Call Andreea Therapy Today at 07448036017"
            >
              Phone number: 07448036017
            </a>
          </section>

          <section className={styles.location}>
            <h3>Location</h3>
            <ul>
              <li>
                <a
                  href="https://www.google.com/maps?q=Colchester+Business+Centre,+1+George+Williams+Way,+Colchester+CO1+2JS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Colchester Business Centre, 1 George Williams Way, Colchester CO1 2JS
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps?q=The+Henry+Centre,+Rochester+House,+145+New+London+Rd,+Chelmsford+CM2+0QT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Henry Centre, Rochester House, 145 New London Rd, Chelmsford CM2 0QT
                </a>
              </li>
            </ul>
          </section>

          <section className={styles.hours}>
            <h3>Working office hours (however more availability online)</h3>
            <ul>
              <li>Monday - Tuesday</li>
              <li>10am - 7pm</li>
              <li>Friday</li>
              <li>9am - 2pm</li>
              <li>Saturday - Chelmsford</li>
              <li>9am - 3pm</li>
            </ul>
          </section>
        </section>

        <aside className={styles.imageContainer}>
          <Image
            src="/images/book-now.jpg"
            alt="Therapy session illustration"
            width={500}
            height={500}
            className={styles.image}
            loading="lazy"
          />
        </aside>
      </main>

      <section className={styles.formContainer}>
        <ContactForm />
      </section>

      <footer className={styles.buttonLinks}>
        <Button href="/who-i-see">Who I See</Button>
        <Button href="/services">Services</Button>
        <Button href="/book-now">Book Now</Button>
      </footer>
    </div>
  );
}


