import type { Metadata } from 'next';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from './book-now.module.scss';
import buttonLinksStyles from '../../components/ui/buttonLinks.module.scss';
import Button from '../../components/ui/button';

// Dynamically import ContactForm for better performance
const ContactForm = dynamic(() => import('../../components/forms/contact-form'), {
  loading: () => <div className={styles.formLoading}>Loading contact form...</div>,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Book Counsellor Colchester | Schedule Your Session | Contact',
  description:
    'Ready to book your therapist? Schedule your session with BACP registered therapist in Colchester. £60 sessions available in-person or online.',
  keywords: [
    'book counsellor Colchester',
    'book counselling session Essex',
    'schedule counsellor appointment',
    'counselling appointment Colchester',
    'contact counsellor Colchester',
    'counsellor booking Essex',
    'book psychotherapist Colchester',
    'mental health appointment',
    'BACP counsellor booking',
    'counselling consultation free',
    'anxiety counsellor appointment',
    'depression counsellor booking',
    'relationship counsellor contact',
    'psychotherapy booking Essex',
    'online counsellor booking UK',
    'counselling session £60',
    'Andreea Horhocea counsellor',
    'mental health counsellor booking',
  ],
  authors: [{ name: 'Andreea Horhocea' }],
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/book-now',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Book Therapy Session Colchester | Contact Andreea Horhocea',
    description:
      'Book therapy with BACP registered psychotherapist Andreea Horhocea. £60 sessions in Colchester or online.',
    url: 'https://nextgentherapy.co.uk/book-now',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Book Therapy Session - Next Generation Therapy Colchester',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Now - Next Generation Therapy',
    description:
      'Book a therapy session with Andreea Horhocea, a psychodynamic psychotherapist offering services in Colchester and online.',
    images: ['https://nextgentherapy.co.uk/images/default-social-share.jpg'],
  },
};

export default function BookNow() {
  const bookingSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Book Therapy Session',
    description: 'Schedule a therapy session with BACP registered therapist in Colchester',
    url: 'https://nextgentherapy.co.uk/book-now',
    provider: {
      '@type': 'Person',
      name: 'Andreea Horhocea',
      jobTitle: 'Psychodynamic Psychotherapist',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Therapy Session',
        description: 'Individual 50-minute therapy session',
        price: '60',
        priceCurrency: 'GBP',
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://nextgentherapy.co.uk',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Book Therapy Session',
        item: 'https://nextgentherapy.co.uk/book-now',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className={styles.page}>
        <main className={styles.main}>
          <section className={styles.greeting}>
            <h1>Book a Therapist in Colchester - Let the Journey Begin</h1>
            <div className={styles.heroImageContainer}>
              <Image
                src="/images/book-now.jpg"
                alt="Book therapy session in Colchester - professional counselling and mental health support available"
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
              <p>
                Taking the first step towards therapy can feel daunting, but you don&apos;t have to
                do it alone. I&apos;m here to support you through the process.
              </p>
              <ul>
                <li>
                  If you&apos;re feeling ready to explore therapy or have questions about the
                  process, I&apos;m here to help.
                </li>
                <li>Reach out via the contact form below, email, or phone.</li>
                <li>
                  I aim to respond within 24 hours to discuss how we might work together and
                  schedule your first session.
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
                <p>I&apos;ll respond within 24 hours to discuss your needs</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>3</span>
                <h3>Book Your Session</h3>
                <p>We&apos;ll find a suitable time for your first therapy session</p>
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
                      Colchester Business Centre, 1 George Williams Way, Colchester CO1 2JS
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
    </>
  );
}
