import type { Metadata } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "./book-now.module.scss";
import buttonLinksStyles from "../../components/ui/buttonLinks.module.scss";
import Button from "../../components/ui/button";

// Dynamically import ContactForm for better performance
const ContactForm = dynamic(() => import("../../components/forms/contact-form"), {
  loading: () => <div className={styles.formLoading}>Loading contact form...</div>,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nextgentherapy.co.uk"),
  title: "Book Therapist Colchester | Schedule Therapy Session | Andreea Horhocea",
  description:
    "Book therapist in Colchester. Schedule therapy session with BACP registered psychotherapist Andreea Horhocea. £60 sessions in Colchester or online. Free 15-min consultation available.",
  keywords: [
    "book therapist Colchester",
    "book therapy session Colchester", 
    "schedule therapist Colchester",
    "therapy appointment Colchester",
    "contact therapist Colchester",
    "therapist booking Colchester",
    "book counsellor Colchester",
    "therapy appointment booking",
    "Andreea Horhocea contact",
    "psychotherapy booking Colchester",
    "online therapy booking UK",
    "therapy consultation free",
    "anxiety therapy appointment",
    "depression counselling booking",
    "relationship therapy contact",
    "BACP therapist booking",
    "therapy prices £60"
  ],
  authors: [{ name: "Andreea Horhocea" }],
  alternates: {
    canonical: "https://www.nextgentherapy.co.uk/book-now",
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
  openGraph: {
    title: "Book Therapy Session Colchester | Contact Andreea Horhocea",
    description:
      "Book therapy with BACP registered psychotherapist Andreea Horhocea. £60 sessions in Colchester or online. Free 15-min consultation.",
    url: "https://www.nextgentherapy.co.uk/book-now",
    siteName: "Next Generation Therapy",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.nextgentherapy.co.uk/images/default-social-share.jpg",
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
    images: ["https://www.nextgentherapy.co.uk/images/default-social-share.jpg"],
  },
};

export default function BookNow() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.greeting}>
          <h1>Book a Therapist in Colchester - Let the Journey Begin</h1>
          <div className={styles.heroImageContainer}>
            <Image
              src="/images/book-now.jpg"
              alt="A brain with thread being pulled to showing a therapist unravelling problems"
              width={600}
              height={400}
              className={styles.heroImage}
              priority
            />
          </div>
        </section>

        <section className={styles.contentTop}>
          <article>
            <h2>Ready to Take the First Step?</h2>
            <div className={styles.consultationOffer}>
              <h3>Free 15-Minute Consultation Available</h3>
              <p>
                Not sure if therapy is right for you? I offer a brief, no-obligation 
                consultation to discuss your needs and answer any questions about the process.
              </p>
            </div>
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
        </section>

        {/* Trust Signals & Credentials */}
        <section className={styles.trustSection}>
          <div className={styles.trustContainer}>
            <div className={styles.credentials}>
              <h3>Professional Qualifications</h3>
              <ul>
                <li>🎓 Masters in Psychodynamic Psychotherapy</li>
                <li>🎓 BA in Criminology and Social Psychology</li>
                <li>✅ BACP Registered Member</li>
                <li>💼 5+ Years Experience</li>
              </ul>
            </div>
            <div className={styles.sessionInfo}>
              <h3>Session Information</h3>
              <ul>
                <li>⏱️ 50-minute sessions at £60</li>
                <li>📍 In-person (Colchester) or Online</li>
                <li>🔒 Completely confidential</li>
                <li>📅 Flexible scheduling available</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What Happens Next */}
        <section className={styles.processSection}>
          <h2>What Happens Next?</h2>
          <div className={styles.processSteps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <h3>Submit Your Enquiry</h3>
              <p>Fill out the contact form below or call/email directly</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <h3>Initial Response</h3>
              <p>I&apos;ll respond within 24 hours to arrange a brief consultation</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <h3>Free Consultation</h3>
              <p>We&apos;ll have a 15-minute chat to discuss your needs and answer questions</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>4</span>
              <h3>Book Your Session</h3>
              <p>If we&apos;re a good fit, we&apos;ll schedule your first therapy session</p>
            </div>
          </div>
        </section>

        <section className={styles.contentMiddle}>
          <div className={styles.contactInfo}>
            <div className={styles.contactCard}>
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

            <div className={styles.locationCard} id="location">
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
              
              {/* Google Maps Embed */}
              <div className={styles.mapContainer}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2462.624902209368!2d0.9056014!3d51.8860592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d905d138eb59f9%3A0xcba6bcd08ff9a10!2sAndreea%20Horhocea%20Next%20Generation%20Counselling%20%26%20Psychotherapy!5e0!3m2!1sen!2suk!4v1743611123198!5m2!1sen!2suk"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Next Generation Therapy Location Map"
                  aria-label="Google Maps showing location of Next Generation Therapy at Colchester Business Centre, 1 George Williams Way, Colchester CO1 2JS"
                ></iframe>
              </div>
            </div>
            
            <div className={styles.hoursCard} id="working-hours">
              <h3>Working Office Hours</h3>
              <ul>
                <li>Monday - Tuesday: 10am - 7pm</li>
                <li>Friday: 9am - 2pm</li>
                <li>More availability online</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.contentEnd} id="contact-form">
          <h2>Contact Form</h2>
          <ContactForm />
        </section>

        <section className={buttonLinksStyles.buttonLinks}>
          <Button href="/about-therapy">About Therapy</Button>
          <Button href="/services">Services</Button>
          <Button href="/book-now">Book Now</Button>
        </section>
      </main>
    </div>
  );
}
