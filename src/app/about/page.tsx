import type { Metadata } from "next";
import Image from "next/image";
import styles from "./about.module.scss";
import buttonLinksStyles from "../../components/ui/buttonLinks.module.scss";
import Button from "../../components/ui/button";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nextgentherapy.co.uk"),
  title: "About Andreea Horhocea | Psychodynamic Therapist Colchester",
  description:
    "Meet Andreea Horhocea, BACP registered psychodynamic psychotherapist in Colchester. Master's degree, 6+ years experience with children, adults & families. Specializing in anxiety, depression & relationship issues.",
  keywords: [
    "Andreea Horhocea therapist",
    "psychodynamic psychotherapy Colchester",
    "BACP registered therapist",
    "therapy qualifications Essex",
    "experienced therapist Colchester",
    "Master's psychotherapy",
    "child therapy specialist",
    "family therapy Colchester",
    "anxiety therapist",
    "depression counsellor",
    "relationship therapy",
    "online therapy UK"
  ],
  authors: [{ name: "Andreea Horhocea" }],
  alternates: {
    canonical: "https://www.nextgentherapy.co.uk/about",
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
    title: "About Andreea Horhocea | Psychodynamic Therapist Colchester",
    description:
      "Meet Andreea Horhocea, BACP registered psychodynamic psychotherapist in Colchester. Master's degree, 6+ years experience with children, adults & families.",
    url: "https://www.nextgentherapy.co.uk/about",
    siteName: "Next Generation Therapy",
    locale: "en_GB",
    type: "profile",
    images: [
      {
        url: "https://www.nextgentherapy.co.uk/images/default-social-share.jpg",
        width: 300,
        height: 300,
        alt: "Andreea Horhocea - Psychodynamic Psychotherapist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About me - Next Generation Therapy",
    description:
      "Learn about Andreea Horhocea, a psychodynamic psychotherapist with extensive experience working with children, young people, and adults.",
    images: ["https://www.nextgentherapy.co.uk/images/default-social-share.jpg"],
  },
};

// Therapy room images for gallery
const therapyRoomImages = [
  { src: "/images/office-opt.jpg", alt: "Picture of office with laptop" },
  {
    src: "/images/doll-house-opt.jpg",
    alt: "Picture of doll house for play therapy for children",
  },
  {
    src: "/images/board-games-opt.jpg",
    alt: "Picture of shelves including games for children to play with",
  },
  {
    src: "/images/room-2-opt.jpg",
    alt: "Picture of therapy room with sofa and arm chair",
  },
  {
    src: "/images/room-opt.jpg",
    alt: "Picture of therapy room with sofa and arm chair",
  },
  { src: "/images/shelf-opt.jpeg", alt: "Picture of shelf with plants on" },
];

export default function AboutMe() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.greeting}>
            <h1>About Me</h1>
          </div>
        </section>

        {/* Image Section */}
        <section className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/andreea.jpg"
              alt="Andreea Horhocea - Psychodynamic Psychotherapist"
              height={400}
              width={400}
              priority
              className={styles.image}
            />
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.contentSection}>
          <article className={styles.textContainer}>
            <div className={styles.introSection}>
              <h3>Hi There</h3>
              <p>It&apos;s lovely to meet you, and I&apos;m really glad you&apos;re here.</p>
              <p>
                I&apos;m a psychodynamic psychotherapist with a Master&apos;s degree in
                Psychodynamic Psychotherapy and a background in Criminology and Social
                Psychology, both awarded by the University of Essex. Over the past six years,
                I&apos;ve worked with children, young people, and adults across schools, charities,
                the NHS, and private practice.
              </p>
            </div>

            <div className={styles.approachSection}>
              <p>
                I know how overwhelming it can be to find the right therapist — especially when
                you&apos;re already feeling vulnerable or stuck. Whether you&apos;re exploring therapy for
                the first time or have tried it before, my aim is to make the process feel simple,
                supportive, and respectful from the very start.
              </p>
              <p>
                Alongside my private practice, I currently work with YMCA Trinity, supporting
                young people in schools and delivering groups for both students and parents/carers.
                I&apos;m a registered member of the British Association for Counselling and Psychotherapy
                (BACP) and I work in accordance with their ethical framework.
              </p>
            </div>

            <div className={styles.philosophySection}>
              <h3>My Approach</h3>
              <p>
                I created this space to offer a therapeutic experience where you can feel safe,
                seen, and understood — a space where your story matters.
              </p>
              <p>
                Therapy isn&apos;t just for when everything falls apart. It can be a powerful space
                for self-reflection, growth, and healing at any stage of life. Many of my clients
                come to me when they feel anxious, lost in relationships, critical of themselves,
                or disconnected from who they are. Some struggle with food, body image, or
                people-pleasing. Others carry a deep sense of not feeling &quot;enough.&quot;
              </p>
              <p>
                Whatever brings you here — you&apos;re welcome.
              </p>
              <p>
                I offer open-ended therapy, which means we go at your pace. There&apos;s no pressure
                to share more than you&apos;re ready to. Our work together is grounded in building a
                strong, authentic connection. I believe this relationship is at the heart of healing.
              </p>
              <p>
                When working with children, I use creative tools and play-based approaches to help
                them safely express big or confusing emotions. With teens and adults, I draw from
                psychodynamic understanding while also weaving in mindfulness and helpful coping
                strategies tailored to you.
              </p>
            </div>

            <div className={styles.practiceSection}>
              <h3>A Place to Begin</h3>
              <p>
                What I&apos;ve learned from working across different systems is that the need for mental
                health support is growing — and that people are becoming more aware of the emotional
                weight they carry day to day. That&apos;s why I aim to offer an initial session within
                one week of your enquiry. I want to make accessing support feel doable, not daunting.
              </p>
              <p>
                If it turns out I&apos;m not the right fit for you, I&apos;ll do my best to help you find
                someone who is. Because ultimately, you deserve to feel safe, respected, and heard
                — no matter where you are in your journey.
              </p>
            </div>
          </article>
        </section>

        {/* Therapy Room Gallery */}
        <section className={styles.gallerySection}>
          <h2>My Therapy Environment</h2>
          <div className={styles.therapyGallery}>
            {therapyRoomImages.map((image, index) => (
              <div key={index} className={styles.galleryItem}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  height={300}
                  width={400}
                  className={styles.galleryImage}
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
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
