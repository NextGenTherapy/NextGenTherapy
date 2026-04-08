interface LocationLocalBusinessSchemaProps {
  locationName: string;
  containedIn: string;
  description: string;
  driveTime?: string;
}

export default function LocationLocalBusinessSchema({
  locationName,
  containedIn,
  description,
  driveTime,
}: LocationLocalBusinessSchemaProps) {
  const locationId = locationName.toLowerCase().replace(/\s+/g, '-');

  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://nextgentherapy.co.uk/#${locationId}-service`,
    name: 'Next Generation Therapy',
    description: description,
    url: `https://nextgentherapy.co.uk/therapy-in-${locationId}`,
    isPartOf: {
      '@id': 'https://nextgentherapy.co.uk/#localbusiness',
    },
    areaServed: {
      '@type': 'City',
      name: locationName,
      containedIn: containedIn,
    },
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
    telephone: '+447448036017',
    email: 'andreeatherapytoday@gmail.com',
    priceRange: '£60 per session',
    ...(driveTime && {
      additionalProperty: {
        '@type': 'PropertyValue',
        name: 'Approximate travel time',
        value: driveTime,
      },
    }),
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
    sameAs: [
      'https://www.facebook.com/share/16dg5gpZRo/',
      'https://www.instagram.com/nextgentherapycolchester',
      'https://www.bacp.co.uk/therapists/385976/andreea-horhocea/london-e16',
    ],
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Wheelchair accessible',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Ground floor access',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Free parking',
        value: true,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(locationSchema),
      }}
    />
  );
}
