export default function LocalBusinessSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://nextgentherapy.co.uk/#localbusiness",
    "name": "Next Generation Therapy",
    "image": "https://nextgentherapy.co.uk/images/office.jpg",
    "description": "Professional psychodynamic therapy services in Colchester, Essex. BACP registered therapist offering individual therapy for anxiety, depression, relationships and personal growth.",
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
    "url": "https://nextgentherapy.co.uk",
    "telephone": "+447448036017",
    "email": "andreeatherapytoday@gmail.com",
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
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 51.8959,
        "longitude": 0.9035
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Therapy Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Individual Therapy",
            "description": "50-minute individual therapy sessions using psychodynamic approach"
          },
          "price": "60",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Free Consultation",
            "description": "15-20 minute free consultation to discuss therapy needs"
          },
          "price": "0",
          "priceCurrency": "GBP"
        }
      ]
    },
    "paymentAccepted": ["Cash", "Bank Transfer", "Card"],
    "currenciesAccepted": "GBP",
    "priceRange": "££"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema)
      }}
    />
  );
}
