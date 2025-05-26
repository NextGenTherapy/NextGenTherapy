import type { Metadata } from "next";
import Image from "next/image";
import styles from "./who-i-see.module.css";
import buttonLinksStyles from "../../components/buttonLinks.module.css";
import Button from "../../components/button";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Who I See - Next Generation Therapy",
  description:
    "Discover who Andreea Horhocea works with, including children, adults, and individuals facing anxiety, depression, trauma, and more. Learn about her therapy approach and locations.",
  keywords: [
    "therapy for children",
    "therapy for adults",
    "anxiety therapy",
    "depression therapy",
    "trauma therapy",
    "grief therapy",
    "identity issues",
    "low self-esteem",
    "neurodiversity support",
    "Andreea Horhocea",
  ],
  authors: [{ name: "Andreea Horhocea" }],
  openGraph: {
    title: "Who I See - Next Generation Therapy",
    description:
      "Discover who Andreea Horhocea works with, including children, adults, and individuals facing anxiety, depression, trauma, and more. Learn about her therapy approach and locations.",
    url: "http://localhost:3000/who-i-see",
    images: [
      {
        url: "/images/andreea.jpg",
        width: 300,
        height: 300,
        alt: "Andreea Horhocea - Psychodynamic Psychotherapist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Who I See - Next Generation Therapy",
    description:
      "Discover who Andreea Horhocea works with, including children, adults, and individuals facing anxiety, depression, trauma, and more.",
    images: ["/images/andreea.jpg"],
  },
};

// Image data for the photo gallery
const images = [
  { src: "/images/office.jpg", alt: "Picture of office with laptop" },
  { src: "/images/doll-house.jpg", alt: "Picture of doll house for play therapy for children" },
  { src: "/images/board-games.jpg", alt: "Picture of shelves including games for children to play with" },
  { src: "/images/room-2.jpg", alt: "Picture of therapy room with sofa and arm chair" },
  { src: "/images/room.jpg", alt: "Picture of therapy room with sofa and arm chair" },
  { src: "/images/shelf.jpeg", alt: "Picture of shelf with plants on" },
];

export default function WhoISee() {
  return (
    <div className={styles.page}>
      {/* Page top */}
      <main className={styles.main}>
        <div className={styles.greeting}>
        <h1>Who Do I Work With?</h1>
      </div>

      
        {/* Intro Section */}
        <section className={styles.contentTop}>
          <article className={styles.list}>
            <h2>Who I Work With</h2>
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
          </article>
          <aside className={styles.imageContainer}>
            <Image
              src="/images/who-i-see.jpg"
              alt="A therapist talking to a patient"
              height={400}
              width={300}
              className={styles.image}
            />
          </aside>
        </section>

        {/* Photo Gallery Section */}
        <section className={styles.photoGallery}>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              height={500}
              width={400}
              className={styles.image}
            />
          ))}
        </section>

        {/* Location Section */}
          <div className={styles.locationIntro}>
            <h2>Location & Working Hours for Colchester and online sessions.</h2>
          </div>
          <section className={styles.contentEnd}>
          <div className={styles.locationContent}>
            <div className={styles.centeredList}>
              <div>
                <h3>Monday - Tuesday</h3>
                <ul>
                  <li>10am - 7pm</li>
                </ul>
                <h3>Friday</h3>
                <ul>
                  <li>9am - 2pm</li>
                </ul>
            </div>
            </div>
            <aside className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2462.624902209368!2d0.9056014!3d51.8860592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d905d138eb59f9%3A0xcba6bcd08ff9a10!2sAndreea%20Horhocea%20Next%20Generation%20Counselling%20%26%20Psychotherapy!5e0!3m2!1sen!2suk!4v1743611123198!5m2!1sen!2suk"
                width="600"
                height="450"
                allowFullScreen={true}
                title="Google Map Location of Andreea Horhocea Next Generation Counselling & Psychotherapy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </aside>
          </div>
        </section>

        {/* Button Links Section */}
        <section className={buttonLinksStyles.buttonLinks}>
          <Button href="/about">About Me</Button>
          <Button href="/services">Services</Button>
          <Button href="/book-now">Book Now</Button>
        </section>
      </main>
    </div>
  );
}