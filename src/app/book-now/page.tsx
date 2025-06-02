import type { Metadata } from "next";
import Image from "next/image";
import styles from "./book-now.module.css";
import buttonLinksStyles from "../../components/buttonLinks.module.css";
import Button from "../../components/button";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgentherapy.co.uk"),
  title: "Book Now - Next Generation Therapy",
  description:
    "Book a therapy session with Andreea Horhocea, a psychodynamic psychotherapist offering services in Colchester and online.",
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
    title: "Book Now - Next Generation Therapy",
    description:
      "Book a therapy session with Andreea Horhocea, a psychodynamic psychotherapist offering services in Colchester and online.",
    url: "https://nextgentherapy.co.uk/book-now",
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
    title: "Book Now - Next Generation Therapy",
    description:
      "Book a therapy session with Andreea Horhocea, a psychodynamic psychotherapist offering services in Colchester, Chelmsford, and online.",
    images: ["/images/book-now.jpg"],
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
            <p>
              If you&apos;re feeling ready to explore therapy or have questions about
              the process, I&apos;m here to help. Reach out via the contact form
              below, email, or phone. I aim to respond within 24 hours to
              schedule a brief consultation and discuss how we might work
              together.
            </p>
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
              <p>
                <a
                  href="mailto:andreeatherapytoday@gmail.com"
                  aria-label="Send an email to Andreea Therapy Today"
                >
                  Email: andreeatherapytoday@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:07448036017"
                  aria-label="Call Andreea Therapy Today at 07448036017"
                >
                  Phone: 07448036017
                </a>
              </p>
            </div>
             
             <div className={styles.location}>
             <h3>Location</h3>
               <p>
                 <a href="https://www.google.com/maps?q=Colchester+Business+Centre,+1+George+Williams+Way,+Colchester+CO1+2JS"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Colchester Business Centre on Google Maps"
                  >
                    Colchester Business Centre, 1 George Williams Way, Colchester CO1 2JS
                  </a>
               </p>            
             </div>
            <div className={styles.hours}>
            <h3>Working Office Hours (More availability online)</h3>
              <p>Monday - Tuesday: 10am - 7pm</p>
              <p>Friday: 9am - 2pm</p>
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


