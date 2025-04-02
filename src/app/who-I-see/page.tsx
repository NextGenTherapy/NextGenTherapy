import type { Metadata } from "next";
import Image from "next/image";
import styles from "./who-i-see.module.css";
import Button from "../../components/button";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Why Therapy - Next Generation Therapy",
  description:
    "Learn why therapy is important and how it can help you achieve personal growth and emotional well-being.",
};

export default function WhoISee() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.pageTop}>
          <h1> Who do I work with? Where do I work?</h1>
        </div>

        <div className={styles.intro}>
          {/* List Container */}
          <div className={styles.list}>
            <ul>
              <li>Children and young people</li>
              <li>Adults experiencing anxiety</li>
              <li>Clients dealing with depression</li>
              <li>Individuals who have suffered abuse</li>
              <li>Trauma survivors</li>
              <li>People grieving or experiencing loss</li>
              <li>Individuals with eating disorders</li>
              <li>Clients facing identity issues</li>
              <li>People with low self-esteem</li>
              <li>Clients experiencing emotional distress</li>
              <li>ADD/ADHD related struggles</li>
              <li>Neurodiversity</li>
            </ul>
          </div>

          {/* Image Container */}
          <div className={styles.imageContainer}>
            <Image
              src="/images/andreea.jpg"
              alt="Andreea Horhocea - Psychodynamic Psychotherapist"
              height={300}
              width={300}
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.photoGallery}>
          <Image
            src="/images/andreea.jpg"
            alt="Andreea Horhocea - Psychodynamic Psychotherapist"
            height={300}
            width={300}
            className={styles.image}
          />
          <Image
            src="/images/andreea.jpg"
            alt="Andreea Horhocea - Psychodynamic Psychotherapist"
            height={300}
            width={300}
            className={styles.image}
          />
          <Image
            src="/images/andreea.jpg"
            alt="Andreea Horhocea - Psychodynamic Psychotherapist"
            height={300}
            width={300}
            className={styles.image}
          />
          <Image
            src="/images/andreea.jpg"
            alt="Andreea Horhocea - Psychodynamic Psychotherapist"
            height={300}
            width={300}
            className={styles.image}
          />
          <Image
            src="/images/andreea.jpg"
            alt="Andreea Horhocea - Psychodynamic Psychotherapist"
            height={300}
            width={300}
            className={styles.image}
          />
          <Image
            src="/images/andreea.jpg"
            alt="Andreea Horhocea - Psychodynamic Psychotherapist"
            height={300}
            width={300}
            className={styles.image}
          />
        </div>
        <div className={styles.location}>
          <div className={styles.textContainer}>
            <h2>
              This is my Google map location, so you can get to me easily and
              as stress free as possible.
            </h2>
            <div className={styles.centeredList}>
              <div>
                <h3>Monday - Tuesday</h3>
                <ul>
                  <li>10am - 7pm</li>
                </ul>
              </div>
              <div>
                <h3>Friday</h3>
                <ul>
                  <li>9am - 2pm</li>
                </ul>
              </div>
              <div>
                <h3>Saturday - Chelmsford</h3>
                <ul>
                  <li>9am - 3pm</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2462.624902209368!2d0.9056014!3d51.8860592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d905d138eb59f9%3A0xcba6bcd08ff9a10!2sAndreea%20Horhocea%20Next%20Generation%20Counselling%20%26%20Psychotherapy!5e0!3m2!1sen!2suk!4v1743611123198!5m2!1sen!2suk"
              width="600"
              height="450"
              allowFullScreen={true}
              title="Google Map Location of Andreea Horhocea Next Generation Counselling & Psychotherapy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className={styles.buttonLinks}>
          <Button href="/about">About Me</Button>
          <Button href="/services">Services</Button>
          <Button href="/book-now">Book Now</Button>
        </div>
      </main>
    </div>
  );
}