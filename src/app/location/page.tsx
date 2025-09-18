import { Metadata } from "next";
import styles from "./location.module.scss";
import GoogleMapEmbed from "../../components/ui/GoogleMapEmbed";
import Button from "../../components/ui/button";

const siteUrl = "https://nextgentherapy.co.uk";

export const metadata: Metadata = {
  title: "Therapist Colchester Location | Directions & Contact | Find Your Therapist",
  description:
    "Find your therapist in Colchester Business Centre. Easy directions, parking info, and contact details for your appointment with BACP registered therapist.",
  keywords: [
    "therapist Colchester location",
    "find therapist Colchester",
    "therapist directions Colchester",
    "Colchester therapist address",
    "therapist near me Colchester",
    "George Williams Way therapist",
    "therapist parking Colchester",
    "accessible therapist Colchester",
    "therapist contact Colchester",
    "local therapist Colchester",
    "Colchester Business Centre therapist"
  ],
  openGraph: {
    title: "Therapist Colchester Location | Directions & Contact",
    description:
      "Find your therapist in Colchester Business Centre with easy parking and accessibility.",
    url: `${siteUrl}/location`,
    siteName: "Next Generation Therapy",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://nextgentherapy.co.uk/images/office.jpg",
        width: 1200,
        height: 630,
        alt: "Next Generation Therapy Location - Colchester Business Centre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Therapy Location Colchester | Next Generation Therapy",
    description:
      "Find our therapy location in Colchester Business Centre with easy parking.",
    images: ["https://nextgentherapy.co.uk/images/office.jpg"],
  },
  alternates: {
    canonical: `${siteUrl}/location`,
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
};

export default function LocationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            "name": "Next Generation Therapy",
            "description": "Professional therapy location in Colchester Business Centre",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Colchester Business Centre, 1 George Williams Way",
              "addressLocality": "Colchester",
              "addressRegion": "Essex",
              "postalCode": "CO1 2JS",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.8959,
              "longitude": 0.9035
            },
            "hasMap": "https://www.google.com/maps?q=Colchester+Business+Centre,+1+George+Williams+Way,+Colchester+CO1+2JS",
            "telephone": "+447448036017",
            "url": "https://nextgentherapy.co.uk",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday"],
                "opens": "10:00",
                "closes": "19:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Friday",
                "opens": "09:00",
                "closes": "14:00"
              }
            ],
            "accessibilityFeature": [
              "Ground floor access",
              "Wheelchair accessible entrance",
              "Accessible parking"
            ]
          })
        }}
      />
      
      <div className={styles.container}>
        <main className={styles.main}>
          <header className={styles.header}>
            <h1>Our Location</h1>
            <p className={styles.subtitle}>
              Find us at Colchester Business Centre in the heart of Colchester, Essex.
            </p>
          </header>

          <section className={styles.mapSection}>
            <GoogleMapEmbed className={styles.mapContainer} />
          </section>

          <section className={styles.locationDetails}>
            <div className={styles.detailsGrid}>
              <div className={styles.addressCard}>
                <h2>Address</h2>
                <address>
                  <strong>Next Generation Therapy</strong><br />
                  Colchester Business Centre<br />
                  1 George Williams Way<br />
                  Colchester, Essex CO1 2JS<br />
                  United Kingdom
                </address>
                <p>
                  <a 
                    href="https://www.google.com/maps?q=Colchester+Business+Centre,+1+George+Williams+Way,+Colchester+CO1+2JS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mapLink}
                  >
                    View on Google Maps
                  </a>
                </p>
              </div>

              <div className={styles.hoursCard}>
                <h2>Opening Hours</h2>
                <ul className={styles.hoursList}>
                  <li><span>Monday:</span> 10:00 AM - 7:00 PM</li>
                  <li><span>Tuesday:</span> 10:00 AM - 7:00 PM</li>
                  <li><span>Wednesday:</span> Closed</li>
                  <li><span>Thursday:</span> Closed</li>
                  <li><span>Friday:</span> 9:00 AM - 2:00 PM</li>
                  <li><span>Saturday:</span> Closed</li>
                  <li><span>Sunday:</span> Closed</li>
                </ul>
              </div>

              <div className={styles.accessCard}>
                <h2>Accessibility & Parking</h2>
                <ul>
                  <li>✅ Ground floor access</li>
                  <li>✅ Wheelchair accessible entrance</li>
                  <li>✅ Free parking available</li>
                  <li>✅ Public transport accessible</li>
                  <li>✅ Quiet, private setting</li>
                </ul>
              </div>

              <div className={styles.contactCard}>
                <h2>Contact</h2>
                <div className={styles.contactInfo}>
                  <p>
                    <strong>Phone:</strong> <a href="tel:+447448036017">+44 7448 036017</a>
                  </p>
                  <p>
                    <strong>Email:</strong> <a href="mailto:andreeatherapytoday@gmail.com">andreeatherapytoday@gmail.com</a>
                  </p>
                </div>
                <div className={styles.contactButtons}>
                  <Button href="/book-now">
                    Book Appointment
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.directionsSection}>
            <h2>Getting Here</h2>
            <div className={styles.directionsGrid}>
              <div className={styles.directionCard}>
                <h3>🚗 By Car</h3>
                <p>
                  Free parking is available on-site. The Business Centre is easily accessible 
                  from the A12 and A120. Use postcode CO1 2JS for your sat nav.
                </p>
              </div>
              <div className={styles.directionCard}>
                <h3>🚌 By Bus</h3>
                <p>
                  Several bus routes stop near George Williams Way. Check local bus timetables 
                  for the most convenient route from your location.
                </p>
              </div>
              <div className={styles.directionCard}>
                <h3>🚂 By Train</h3>
                <p>
                  Colchester Station is approximately 1.5 miles away. You can take a taxi, 
                  bus, or walk to the Business Centre from the station.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
