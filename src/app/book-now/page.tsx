import type { Metadata } from "next";
import Image from "next/image";
import styles from "./book-now.module.css";
import Button from "../../components/button";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Book now - Next Generation Therapy",
  description:
    "Learn about Andreea Horhocea, a psychodynamic psychotherapist with extensive experience working with children, young people, and adults. Discover her approach to therapy, her qualifications, and her dedication to creating a safe and supportive space for personal growth.",
};

export default function BookNow() {
  return (
    <div className={styles.page}>
      {/* Page Top Section */}
      <div className={styles.pageTop}>
        <h1>Let the journey begin… Enquiry form</h1>
      </div>

      {/* Layout Section */}
      <div className={styles.layout}>
        {/* Left Side: Intro and Content */}
        <div className={styles.leftSide}>
          <div className={styles.content}>
            <h2>Ready to Take the First Step?</h2>
            <p>
              If you&apos;re feeling ready to explore therapy or have questions about
              the process, I&apos;m here to help. Reach out via the contact form
              below, email, or phone. I aim to respond within 24 hours to
              schedule a brief consultation and discuss how we might work
              together.
            </p>
          </div>

          <div className={styles.contact}>
            <h3>My contact details</h3>
            <a href="mailto:andreeatherapytoday@gmail.com">
              Email: andreeatherapytoday@gmail.com
            </a>
            <a href="tel:07448036017">Phone number: 07448036017</a>
          </div>

          <div className={styles.location}>
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
          </div>

          <div className={styles.hours}>
            <h3>Working office hours (however more availability online)</h3>
            <ul>
              <li>Monday - Tuesday</li>
              <li>10am - 7pm</li>
              <li>Friday</li>
              <li>9am - 2pm</li>
              <li>Saturday - Chelmsford</li>
              <li>9am - 3pm</li>
            </ul>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className={styles.imageContainer}>
          <Image
            src="/images/book-now.jpg" // Replace with your image path
            alt="Therapy session illustration"
            width={500}
            height={500}
            className={styles.image}
          />
        </div>
      </div>

      {/* Contact Form Below */}
      <div className={styles.formContainer}>
        <ContactForm />
      </div>

      {/* Button Links */}
      <div className={styles.buttonLinks}>
        <Button href="/who-i-see">Who I See</Button>
        <Button href="/services">Services</Button>
        <Button href="/book-now">Book Now</Button>
      </div>
    </div>
  );
}


