export default function LocalBusinessSchema() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://nextgentherapy.co.uk/#localbusiness',
    name: 'Next Generation Therapy',
    image: 'https://nextgentherapy.co.uk/images/office-opt.jpg',
    description:
      'Professional psychodynamic therapy services in Colchester, Essex. BACP registered therapist offering individual therapy for anxiety, depression, relationships and personal growth.',
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
    url: 'https://nextgentherapy.co.uk',
    telephone: '+447448036017',
    email: 'andreeatherapytoday@gmail.com',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday'],
        opens: '10:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 51.8959,
        longitude: 0.9035,
      },
      geoRadius: '50000',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Colchester',
        containedIn: 'Essex',
      },
      {
        '@type': 'City',
        name: 'Wivenhoe',
        containedIn: 'Essex',
      },
      {
        '@type': 'City',
        name: 'Mersea',
        containedIn: 'Essex',
      },
      {
        '@type': 'City',
        name: 'Tiptree',
        containedIn: 'Essex',
      },
      {
        '@type': 'City',
        name: 'Marks Tey',
        containedIn: 'Essex',
      },
      {
        '@type': 'City',
        name: 'Manningtree',
        containedIn: 'Essex',
      },
      {
        '@type': 'City',
        name: 'Clacton',
        containedIn: 'Essex',
      },
      {
        '@type': 'City',
        name: 'Ipswich',
        containedIn: 'Suffolk',
      },
      {
        '@type': 'Country',
        name: 'United Kingdom',
      },
    ],
    knowsLanguage: ['en-GB', 'ro'],
    availableLanguage: ['English', 'Romanian'],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional Membership',
      name: 'BACP Registered Member (MBACP)',
      recognizedBy: {
        '@type': 'Organization',
        name: 'British Association for Counselling and Psychotherapy',
        url: 'https://www.bacp.co.uk',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Therapy Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Individual Therapy',
            description: '50-minute individual therapy sessions using psychodynamic approach',
          },
          price: '60',
          priceCurrency: 'GBP',
        },
      ],
    },
    paymentAccepted: ['Bank Transfer'],
    currenciesAccepted: 'GBP',
    priceRange: '£60',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema),
      }}
    />
  );
}
