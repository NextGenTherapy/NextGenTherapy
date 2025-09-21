import type { Metadata } from 'next';
import '../styles/variables.scss';
import '../styles/globals.scss';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import ScrollToTop from '../components/ui/scroll-to-top';
import ErrorBoundary from '../components/layout/ErrorBoundary';
import CookieConsent from '../components/layout/CookieConsent';
import ConditionalAnalytics from '../components/layout/ConditionalAnalytics';
import ConditionalVercelAnalytics from '../components/layout/ConditionalVercelAnalytics';
import WebVitalsReporter from '../components/layout/WebVitalsReporter';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Next Generation Therapy | Counsellor & Psychotherapist Colchester',
    template: '%s | Next Generation Therapy',
  },
  description:
    'Professional counsellor & psychotherapist in Colchester & online. BACP registered mental health counsellor Andreea Horhocea. Expert help for anxiety, depression, relationships. Book today.',
  keywords: [
    'counsellor Colchester',
    'psychotherapist Colchester',
    'mental health counsellor Colchester',
    'BACP therapist Colchester',
    'BACP counsellor Essex',
    'psychodynamic counsellor',
    'registered counsellor Colchester',
    'qualified therapist Colchester',
    'certified counsellor Essex',
    'registered therapist Colchester',
    'qualified counsellor Essex',
    'therapy Colchester',
    'counsellor Essex',
    'online counsellor UK',
    'depression counsellor Colchester',
    'anxiety counsellor Colchester',
    'relationship counsellor Essex',
    'child counsellor Colchester',
    'play therapist Essex',
    'mental health support Essex',
    'psychotherapy Essex',
    'professional counselling Colchester',
    'BACP registered therapist',
    'Andreea Horhocea counsellor',
  ],
  authors: [{ name: 'Andreea Horhocea' }],
  creator: 'Andreea Horhocea',
  publisher: 'Next Generation Therapy',
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
  other: {
    'geo.region': 'GB-ESS',
    'geo.placename': 'Colchester',
    'geo.position': '51.8959;0.9035',
    ICBM: '51.8959, 0.9035',
    profession: 'Psychotherapist',
    specialty: 'Psychodynamic Therapy',
    googlebot: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    bingbot: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    'google-site-verification': 'P2NojIbNyYheM5XtqaNmtH5Cpp1ugkxcaddXxjZF4Dc',
  },
  openGraph: {
    title: 'Next Generation Therapy | Professional Therapy Services Colchester',
    description:
      'Professional psychodynamic therapy in Colchester & online with BACP registered therapist Andreea Horhocea. Expert help for anxiety, depression & relationships.',
    url: 'https://nextgentherapy.co.uk',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Next Generation Therapy - Professional Therapy Services Colchester',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next Generation Therapy | Professional Therapy Services Colchester',
    description:
      'Professional psychodynamic therapy in Colchester & online with BACP registered therapist Andreea Horhocea.',
    images: ['https://nextgentherapy.co.uk/images/default-social-share.jpg'],
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* iPhone/Safari status bar styling */}
        <meta name="theme-color" content="#164b39" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        {/* Additional mobile browser theme colors */}
        <meta name="msapplication-TileColor" content="#164b39" />
        <meta name="msapplication-navbutton-color" content="#164b39" />

        {/* Google Business Profile Integration */}
        <meta
          name="google-business-verification"
          content="P2NojIbNyYheM5XtqaNmtH5Cpp1ugkxcaddXxjZF4Dc"
        />
        <meta name="business-type" content="Health & Medical" />
        <meta name="business-category" content="Mental Health Service" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': ['Organization', 'LocalBusiness', 'MedicalBusiness'],
                  '@id': 'https://nextgentherapy.co.uk/#organization',
                  name: 'Next Generation Therapy',
                  url: 'https://nextgentherapy.co.uk',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://nextgentherapy.co.uk/images/logo.jpg',
                    width: 400,
                    height: 400,
                  },
                  description:
                    'Professional psychodynamic therapy services in Colchester and online. BACP registered therapist specializing in anxiety, depression, relationships and personal growth.',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Colchester Business Centre, 1 George Williams Way',
                    addressLocality: 'Colchester',
                    addressRegion: 'Essex',
                    postalCode: 'CO1 2JS',
                    addressCountry: 'GB',
                  },
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: 51.8959,
                    longitude: 0.9035,
                  },
                  contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+44-7448-036017',
                    contactType: 'Customer Service',
                    email: 'andreeatherapytoday@gmail.com',
                    availableLanguage: 'English',
                  },
                  openingHoursSpecification: [
                    {
                      '@type': 'OpeningHoursSpecification',
                      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                      opens: '09:00',
                      closes: '18:00',
                    },
                  ],
                  priceRange: '££',
                  areaServed: [
                    {
                      '@type': 'City',
                      name: 'Colchester',
                    },
                    {
                      '@type': 'AdministrativeArea',
                      name: 'Essex',
                    },
                  ],
                  serviceType: 'Psychodynamic Psychotherapy',
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Therapy Services Menu',
                    itemListElement: [
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Free 15-minute Consultation',
                          description: 'Complimentary consultation call to discuss therapy needs',
                        },
                        price: '0',
                        priceCurrency: 'GBP',
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Individual Therapy Session',
                          description: '50-minute therapy session in Colchester or online',
                        },
                        price: '60',
                        priceCurrency: 'GBP',
                      },
                    ],
                  },
                  sameAs: ['https://www.bacp.co.uk/'],
                },
                {
                  '@type': 'Person',
                  '@id': 'https://nextgentherapy.co.uk/#person',
                  name: 'Andreea Horhocea',
                  jobTitle: 'Psychodynamic Psychotherapist',
                  worksFor: {
                    '@id': 'https://nextgentherapy.co.uk/#organization',
                  },
                  description:
                    "BACP registered psychodynamic psychotherapist with Master's degree and 6+ years experience working with children, adults and families.",
                  url: 'https://nextgentherapy.co.uk/about',
                  knowsAbout: [
                    'Psychodynamic Therapy',
                    'Anxiety Treatment',
                    'Depression Counselling',
                    'Relationship Therapy',
                    'Play Therapy',
                    'Body Image Therapy',
                  ],
                },
                {
                  '@type': 'ProfessionalService',
                  '@id': 'https://nextgentherapy.co.uk/#service',
                  name: 'Psychodynamic Therapy Services',
                  provider: {
                    '@id': 'https://nextgentherapy.co.uk/#organization',
                  },
                  serviceType: 'Mental Health Therapy',
                  areaServed: ['Colchester', 'Essex', 'United Kingdom'],
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Therapy Services',
                    itemListElement: [
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Individual Therapy',
                          description: 'One-to-one psychodynamic therapy sessions',
                        },
                        price: '60',
                        priceCurrency: 'GBP',
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Play Therapy',
                          description: 'Specialized therapy for children using play',
                        },
                        price: '60',
                        priceCurrency: 'GBP',
                      },
                    ],
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <a href="#main-navigation" className="skip-link">
          Skip to navigation
        </a>
        <div className="layout-container">
          <Header />
          <ErrorBoundary>
            <main id="main-content" className="page">
              {children}
            </main>
          </ErrorBoundary>
          <ConditionalVercelAnalytics />
          <ConditionalAnalytics />
          <WebVitalsReporter />
          <Footer />
          <ScrollToTop />
          <CookieConsent />
        </div>
      </body>
    </html>
  );
}
