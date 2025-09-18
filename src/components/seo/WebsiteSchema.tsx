// Schema types defined inline
interface WebSite {
  "@context": string;
  "@type": string;
  "@id"?: string;
  name: string;
  alternateName?: string;
  description?: string;
  url: string;
  inLanguage?: string;
  copyrightYear?: string;
  copyrightHolder?: object;
  publisher?: object;
  potentialAction?: object[];
  mainEntity?: object;
  about?: object[];
  audience?: object;
  serviceArea?: object;
  keywords?: string[];
}

interface WebsiteSchemaProps {
  className?: string;
}

/**
 * Website Schema for Next Generation Therapy
 * Provides structured data about the website for search engines
 */
export default function WebsiteSchema({ className }: WebsiteSchemaProps) {
  const websiteSchema: WebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://nextgentherapy.co.uk/#website",
    "name": "Next Generation Therapy",
    "alternateName": "NGT Colchester",
    "description": "Professional psychodynamic therapy services in Colchester and online with BACP registered therapist Andreea Horhocea",
    "url": "https://nextgentherapy.co.uk",
    "inLanguage": "en-GB",
    "copyrightYear": "2024",
    "copyrightHolder": {
      "@type": "Person",
      "name": "Andreea Horhocea",
      "@id": "https://nextgentherapy.co.uk/about#person"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Next Generation Therapy",
      "@id": "https://nextgentherapy.co.uk/#organization"
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://nextgentherapy.co.uk/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    ],
    "mainEntity": {
      "@type": "Organization",
      "@id": "https://nextgentherapy.co.uk/#organization"
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Psychodynamic Therapy",
        "description": "Professional psychodynamic therapy approach"
      },
      {
        "@type": "Thing",
        "name": "Mental Health Services",
        "description": "Comprehensive mental health support and counselling"
      },
      {
        "@type": "Thing",
        "name": "BACP Therapy",
        "description": "BACP registered professional therapy services"
      }
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "People seeking mental health support",
      "geographicArea": [
        {
          "@type": "City",
          "name": "Colchester"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Essex"
        },
        {
          "@type": "Country",
          "name": "United Kingdom"
        }
      ]
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 51.8959,
        "longitude": 0.9035
      },
      "geoRadius": "50000"
    },
    "keywords": [
      "therapy Colchester",
      "psychodynamic therapy",
      "BACP therapist",
      "mental health counselling",
      "anxiety therapy",
      "depression counselling",
      "online therapy UK",
      "professional counsellor",
      "psychotherapist Essex"
    ]
  };

  return (
    <script
      type="application/ld+json"
      className={className}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  );
}