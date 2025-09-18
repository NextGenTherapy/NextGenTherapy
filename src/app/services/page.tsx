import type { Metadata } from "next";
import Image from "next/image";
import styles from "./services.module.scss";
import buttonLinksStyles from "../../components/ui/buttonLinks.module.scss";
import Button from "../../components/ui/button";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgentherapy.co.uk"),
  title: "Counsellor Colchester | Professional Counselling Services | BACP Registered",
  description:
    "Professional counsellor in Colchester offering expert counselling services. BACP registered support for anxiety, depression, relationships & personal growth. Book consultation today.",
  keywords: [
    "counsellor Colchester",
    "counselling services Colchester",
    "professional counsellor Colchester",
    "BACP counsellor Essex",
    "registered counsellor Colchester",
    "qualified counsellor Essex",
    "mental health counsellor Colchester",
    "anxiety counsellor Colchester",
    "depression counsellor Essex",
    "relationship counsellor Colchester",
    "child counsellor Colchester",
    "psychodynamic counsellor",
    "online counsellor UK",
    "therapy services Essex",
    "mental health support Essex",
    "counselling sessions £60",
    "BACP registered counsellor",
    "counsellor near me Essex",
    "Colchester counselling services",
    "certified counsellor Essex"
  ],
  authors: [{ name: "Andreea Horhocea" }],
  alternates: {
    canonical: "https://nextgentherapy.co.uk/services",
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
    title: "Therapy Services Colchester | Play Therapy & Adult Counselling",
    description:
      "Professional therapy services in Colchester & online. Play therapy for children, psychodynamic therapy for adults. Anxiety, depression, relationships, body image support.",
    url: "https://nextgentherapy.co.uk/services",
    siteName: "Next Generation Therapy",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://nextgentherapy.co.uk/images/default-social-share.jpg",
        width: 1200,
        height: 630,
        alt: "Andreea Horhocea - Psychodynamic Psychotherapist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Next Generation Therapy",
    description:
      "Explore the therapy services offered by Andreea Horhocea, including play therapy for children and talking therapy for adults.",
    images: ["https://nextgentherapy.co.uk/images/default-social-share.jpg"],
  },
};

export default function Services() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Psychodynamic Psychotherapy Services",
    "provider": {
      "@type": "Person",
      "name": "Andreea Horhocea",
      "jobTitle": "Psychodynamic Psychotherapist"
    },
    "serviceType": ["Play Therapy for Children", "Talking Therapy for Adults"],
    "areaServed": ["Colchester", "Online"],
    "description": "Professional therapy services including play therapy for children and talking therapy for adults, addressing anxiety, self-esteem, body image, and relationship issues.",
    "offers": [
      {
        "@type": "Offer",
        "name": "Individual Therapy Session",
        "description": "50-minute individual therapy sessions available in-person or online"
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        "name": "Therapy Services",
        "item": "https://nextgentherapy.co.uk/services"
      }
    ]
  };

  const servicesFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What should I expect in my first therapy session in Colchester?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your first session with me as your Colchester therapist is an opportunity for us to get to know each other. I'll ask about what brought you to therapy, your goals, and any concerns you might have. We'll discuss confidentiality, how therapy works, and answer any questions you have. There's no pressure to share more than you're comfortable with."
        }
      },
      {
        "@type": "Question",
        "name": "How long are therapy sessions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Each therapy session lasts 50 minutes (the therapeutic hour). This gives us enough time to explore your thoughts and feelings while maintaining healthy boundaries. Sessions are scheduled weekly, though frequency can be adjusted based on your individual needs."
        }
      },
      {
        "@type": "Question",
        "name": "Is everything I say confidential?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, everything discussed in our sessions is strictly confidential. I follow professional guidelines that protect your privacy. The only exceptions would be if there's a risk of serious harm to yourself or others, which I would discuss with you first whenever possible."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer online therapy sessions as a Colchester therapist?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, as a qualified therapist in Colchester, I offer both in-person sessions at my Colchester practice and secure online sessions via video call. Online therapy can be just as effective as in-person sessions and offers flexibility for those with busy schedules or who prefer the comfort of their own space."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between play therapy and talking therapy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Play therapy is designed specifically for children and uses toys, games, and creative activities as the primary way of communication. Children often express themselves more naturally through play than words. Talking therapy for adults and teenagers focuses on verbal communication to explore thoughts, feelings, and experiences."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know if therapy is right for me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you're struggling with your mental health, feeling stuck, or want to understand yourself better, therapy can help. You don't need to be in crisis to benefit from therapy. It's a space for personal growth, developing coping strategies, and improving your overall well-being."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFAQSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            "name": "Next Generation Therapy",
            "description": "Professional psychodynamic therapy services in Colchester, Essex",
            "url": "https://nextgentherapy.co.uk/services",
            "medicalSpecialty": [
              "Psychotherapy",
              "Mental Health Counseling",
              "Anxiety Treatment",
              "Depression Treatment"
            ],
            "serviceOffered": [
              {
                "@type": "MedicalProcedure",
                "name": "Individual Psychodynamic Therapy",
                "description": "One-to-one therapy sessions using psychodynamic approach for adults",
                "procedureType": "Psychotherapy"
              },
              {
                "@type": "MedicalProcedure", 
                "name": "Child Therapy",
                "description": "Specialized therapy services for children and young people",
                "procedureType": "Child Psychology"
              },
              {
                "@type": "MedicalProcedure",
                "name": "Online Therapy",
                "description": "Remote therapy sessions via secure video call",
                "procedureType": "Telepsychology"
              }
            ],
            "provider": {
              "@type": "Person",
              "name": "Andreea Horhocea",
              "jobTitle": "BACP Registered Psychodynamic Psychotherapist",
              "hasCredential": "BACP Registration"
            }
          })
        }}
      />
      <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.greeting}>
          <h1>Colchester Therapist - Professional Therapy Services</h1>
          <p className={styles.professionalIntro}>
            Experienced therapist serving Colchester and surrounding Essex areas. Offering both in-person therapy sessions in Colchester and secure online therapy across the UK.
          </p>
        </div>

        <section className={styles.servicesOverview}>
          <div className={styles.contentGrid}>
            <article className={styles.textContent}>
              <h2>Who I Work With & What I Help With</h2>
              <p>As a qualified therapist in Colchester, I offer professional therapy sessions tailored to support a diverse range of clients and concerns. Whether you&apos;re looking for mental health support in Colchester for face-to-face sessions or prefer online emotional wellbeing therapy, I provide flexible, compassionate psychological therapy to suit your lifestyle and needs.</p>
              
              <div className={styles.servicesList}>
                <div className={styles.listColumn}>
                  <h3>Who I Support</h3>
                  <ul>
                    <li>Children and young people seeking therapy in Colchester</li>
                    <li>Adults experiencing anxiety</li>
                    <li>Clients dealing with depression</li>
                    <li>Individuals who have suffered abuse</li>
                    <li>Trauma survivors needing specialist therapist support</li>
                    <li>People grieving or experiencing loss</li>
                    <li>LGBTQ+ individuals and couples</li>
                  </ul>
                </div>
                <div className={styles.listColumn}>
                  <h3>Areas I Help With</h3>
                  <ul>
                    <li>Anxiety & overwhelm</li>
                    <li>Self-esteem & confidence</li>
                    <li>Body image & eating concerns</li>
                    <li>Relationship patterns</li>
                    <li>Identity issues & life transitions</li>
                    <li>ADD/ADHD related struggles</li>
                    <li>Neurodiversity support</li>
                  </ul>
                </div>
              </div>
            </article>
            <aside className={styles.imageContainer}>
              <Image
                src="/images/services.jpg"
                alt="A therapist talking to a patient"
                height={400}
                width={300}
                className={styles.image}
              />
            </aside>
          </div>
        </section>

        <section className={styles.contentEnd}>
          <div className={styles.childrenSection}>
            <aside className={styles.endImageContainer}>
              <Image
                src="/images/child.jpg"
                alt="Play therapy session for children"
                height={250}
                width={250}
                className={styles.image}
              />
            </aside>
            <article className={styles.childTextContainer}>
              <h2>Play Therapy for Children in Colchester</h2>
              <p><strong>£60 for the therapeutic hour (50 mins)</strong></p>
              <p>
                As a qualified play therapist in Colchester, I provide children with a natural way to express their 
                feelings and work through challenges. Using toys, games, and creative 
                activities, children can explore difficult emotions in a safe, 
                supportive environment.
              </p>
              <p>
                This approach is particularly effective for children who may struggle 
                to articulate their feelings verbally, helping them develop emotional 
                resilience and coping strategies.
              </p>
            </article>
          </div>

          <div className={styles.adultsSection}>
            <aside className={styles.endImageContainer}>
              <Image
                src="/images/adult.jpg"
                alt="Talking therapy session for adults"
                height={250}
                width={250}
                className={styles.image}
              />
            </aside>
            <article className={styles.adultTextContainer}>
              <h2>Adult Therapy in Colchester - Online & In-Person</h2>
              <p><strong>£60 for the therapeutic hour (50 mins)</strong></p>
              <p>
                As an experienced therapist in Colchester, I offer individual therapy sessions designed to help you explore your thoughts, 
                feelings, and experiences in a confidential, non-judgmental space. 
                Whether you prefer online or in-person sessions in Colchester, therapy is tailored to your unique needs.
              </p>
              <p>
                Together, we&apos;ll work to understand patterns, develop coping strategies, 
                and support your journey toward greater self-awareness and emotional 
                well-being.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.faqContainer}>
            <h2>Frequently Asked Questions</h2>
            
            <div className={styles.faqItem}>
              <h3>What should I expect in my first therapy session in Colchester?</h3>
              <p>
                Your first session with me as your Colchester therapist is an opportunity for us to get to know each other. 
                I&apos;ll ask about what brought you to therapy, your goals, and any concerns 
                you might have. We&apos;ll discuss confidentiality, how therapy works, and 
                answer any questions you have. There&apos;s no pressure to share more than 
                you&apos;re comfortable with.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>How long are therapy sessions?</h3>
              <p>
                Each therapy session lasts 50 minutes (the therapeutic hour). This gives 
                us enough time to explore your thoughts and feelings while maintaining 
                healthy boundaries. Sessions are scheduled weekly, though frequency can 
                be adjusted based on your individual needs.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Is everything I say confidential?</h3>
              <p>
                Yes, everything discussed in our sessions is strictly confidential. 
                I follow professional guidelines that protect your privacy. The only 
                exceptions would be if there&apos;s a risk of serious harm to yourself or 
                others, which I would discuss with you first whenever possible.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>How many sessions will I need?</h3>
              <p>
                The number of sessions varies for each person and depends on your individual 
                goals and circumstances. Some people find benefit in just a few sessions, 
                while others prefer longer-term support. We&apos;ll regularly review your 
                progress together and you&apos;re free to end therapy whenever you feel ready.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Do you offer online therapy sessions as a Colchester therapist?</h3>
              <p>
                Yes, as a qualified therapist in Colchester, I offer both in-person sessions at my Colchester practice and secure online 
                sessions via video call. Online therapy can be just as effective as 
                in-person sessions and offers flexibility for those with busy schedules 
                or who prefer the comfort of their own space.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>What&apos;s the difference between play therapy and talking therapy?</h3>
              <p>
                Play therapy is designed specifically for children and uses toys, games, 
                and creative activities as the primary way of communication. Children 
                often express themselves more naturally through play than words. Talking 
                therapy for adults and teenagers focuses on verbal communication to 
                explore thoughts, feelings, and experiences.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>How do I know if therapy is right for me?</h3>
              <p>
                If you&apos;re struggling with your mental health, feeling stuck, or want 
                to understand yourself better, therapy can help. You don&apos;t need to be 
                in crisis to benefit from therapy. It&apos;s a space for personal growth, 
                developing coping strategies, and improving your overall well-being.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>What if I don&apos;t know what to talk about?</h3>
              <p>
                That&apos;s completely normal and absolutely fine. I&apos;m here to help guide 
                our conversations and create a safe space for you to explore your 
                thoughts and feelings. Many people worry about this, but you&apos;ll find 
                that once we start talking, things naturally emerge.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.locationCoverage}>
          <h2>Therapy Coverage Areas</h2>
          <div className={styles.coverageGrid}>
            <div className={styles.inPersonServices}>
              <h3>In-Person Therapy in Colchester</h3>
              <p>Face-to-face therapy sessions available in central Colchester. Easily accessible location with parking available.</p>
              <ul>
                <li>Central Colchester location</li>
                <li>Confidential, welcoming therapy room</li>
                <li>Flexible appointment times</li>
                <li>Easy access from surrounding areas</li>
              </ul>
            </div>
            <div className={styles.onlineServices}>
              <h3>Online Therapy Sessions</h3>
              <p>Secure video therapy sessions for clients across Essex and the UK who prefer online support.</p>
              <ul>
                <li>Same quality of care as in-person</li>
                <li>Flexible scheduling options</li>
                <li>No travel required</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.credentialsSection}>
          <h2>Why Choose Our Colchester Therapy Practice</h2>
          <div className={styles.credentialsGrid}>
            <div className={styles.credential}>
              <h3>BACP Registered</h3>
              <p>Fully registered therapist following professional ethical guidelines and continuing professional development.</p>
            </div>
            <div className={styles.credential}>
              <h3>Local Expertise</h3>
              <p>Understanding of local community mental health needs and resources available in the Colchester and Essex area. How does therapy work locally? I know the area well.</p>
            </div>
            <div className={styles.credential}>
              <h3>Specialized Training</h3>
              <p>Training in psychodynamic therapy, play therapy, and working with diverse client needs.</p>
            </div>
          </div>
        </section>

        <section className={styles.therapyFaq}>
          <h2>Common Questions About Therapy Services</h2>
          <div className={styles.faqContainer}>
            <div className={styles.faqItem}>
              <h3>What makes your therapy approach unique?</h3>
              <p>I use psychodynamic therapy principles combined with a warm, non-judgmental approach tailored to each client&apos;s individual needs and circumstances.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>How do I know if therapy is right for me?</h3>
              <p>Therapy can help with anxiety, depression, relationship issues, life transitions, and personal growth. A free 15-minute consultation can help determine if we&apos;re a good fit.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>What&apos;s the difference between in-person and online therapy?</h3>
              <p>Both offer the same therapeutic benefits. In-person sessions provide physical presence, while online therapy offers convenience and accessibility from your own space.</p>
            </div>
          </div>
        </section>

        <section className={buttonLinksStyles.buttonLinks}>
          <Button href="/about-therapy">About Therapy</Button>
          <Button href="/about">About Me</Button>
          <Button href="/book-now">Book Now</Button>
        </section>
      </main>
    </div>
    </>
  );
}
