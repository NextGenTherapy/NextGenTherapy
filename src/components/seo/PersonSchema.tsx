// Schema types defined inline
interface Person {
  '@context': string;
  '@type': string;
  '@id'?: string;
  name: string;
  givenName?: string;
  familyName?: string;
  jobTitle?: string;
  description?: string;
  url?: string;
  image?: object;
  sameAs?: string[];
  worksFor?: object;
  memberOf?: object;
  hasCredential?: object[];
  knowsAbout?: string[];
  areaServed?: object[];
  serviceType?: string[];
  contactPoint?: object;
  address?: object;
  makesOffer?: object[];
}

interface PersonSchemaProps {
  className?: string;
}

/**
 * Person Schema for Andreea Horhocea
 * Provides structured data about the therapist for better search visibility
 */
export default function PersonSchema({ className }: PersonSchemaProps) {
  const personSchema: Person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://nextgentherapy.co.uk/about#person',
    name: 'Andreea Horhocea',
    givenName: 'Andreea',
    familyName: 'Horhocea',
    jobTitle: 'Psychodynamic Psychotherapist',
    description:
      'BACP registered psychodynamic psychotherapist specializing in anxiety, depression, relationships, and personal growth. Providing professional therapy services in Colchester and online.',
    url: 'https://nextgentherapy.co.uk/about',
    image: {
      '@type': 'ImageObject',
      url: 'https://nextgentherapy.co.uk/images/andreea.jpg',
      width: '400',
      height: '400',
      caption: 'Andreea Horhocea - Psychodynamic Psychotherapist',
    },
    sameAs: ['https://www.bacp.co.uk/', 'https://nextgentherapy.co.uk'],
    worksFor: {
      '@type': 'Organization',
      name: 'Next Generation Therapy',
      url: 'https://nextgentherapy.co.uk',
    },
    memberOf: {
      '@type': 'Organization',
      name: 'British Association for Counselling and Psychotherapy',
      alternateName: 'BACP',
      url: 'https://www.bacp.co.uk/',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Masters in Psychodynamic Psychotherapy',
        credentialCategory: 'degree',
        educationalLevel: "Master's Degree",
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'BA in Criminology and Social Psychology',
        credentialCategory: 'degree',
        educationalLevel: "Bachelor's Degree",
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'BACP Registered Member',
        credentialCategory: 'certification',
        recognizedBy: {
          '@type': 'Organization',
          name: 'British Association for Counselling and Psychotherapy',
        },
      },
    ],
    knowsAbout: [
      'Psychodynamic Therapy',
      'Anxiety Treatment',
      'Depression Counselling',
      'Relationship Therapy',
      'Mental Health',
      'Psychological Wellbeing',
      'Personal Development',
      'Emotional Support',
      'Therapeutic Relationships',
      'Child and Adolescent Therapy',
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Colchester',
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Essex',
          containedInPlace: {
            '@type': 'Country',
            name: 'United Kingdom',
          },
        },
      },
      {
        '@type': 'Country',
        name: 'United Kingdom',
      },
    ],
    serviceType: [
      'Psychodynamic Psychotherapy',
      'Individual Counselling',
      'Online Therapy',
      'Mental Health Support',
      'Anxiety Counselling',
      'Depression Therapy',
      'Relationship Counselling',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+44-7448-036017',
      email: 'andreeatherapytoday@gmail.com',
      contactType: 'Professional Services',
      availableLanguage: 'English',
      hoursAvailable: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday'],
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
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Colchester Business Centre, 1 George Williams Way',
      addressLocality: 'Colchester',
      addressRegion: 'Essex',
      postalCode: 'CO1 2JS',
      addressCountry: 'GB',
    },
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Free Consultation',
          description: '15-minute complimentary consultation',
        },
        price: '0',
        priceCurrency: 'GBP',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Individual Therapy Session',
          description: '50-minute psychodynamic therapy session',
        },
        price: '60',
        priceCurrency: 'GBP',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      className={className}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
