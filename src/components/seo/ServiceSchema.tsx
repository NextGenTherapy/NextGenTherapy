// Schema types defined inline
interface Service {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  provider?: object;
  serviceType?: string;
  category?: string;
  audience?: object;
  areaServed?: object[];
  availableChannel?: object[];
  hoursAvailable?: object[];
  offers?: object;
  isRelatedTo?: object[];
  serviceOutput?: string[];
}

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  price?: string;
  duration?: string;
  className?: string;
}

/**
 * Service Schema Component
 * Generates structured data for individual therapy services
 */
export default function ServiceSchema({
  serviceName,
  description,
  price,
  duration,
  className,
}: ServiceSchemaProps) {
  const serviceSchema: Service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'Person',
      name: 'Andreea Horhocea',
      '@id': 'https://nextgentherapy.co.uk/about#person',
    },
    serviceType: 'Professional Mental Health Service',
    category: 'Health & Medical',
    audience: {
      '@type': 'Audience',
      audienceType: 'Adults and children seeking mental health support',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Colchester',
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Essex',
        },
      },
      {
        '@type': 'Country',
        name: 'United Kingdom',
      },
    ],
    availableChannel: [
      {
        '@type': 'ServiceChannel',
        serviceType: 'In-Person',
        serviceLocation: {
          '@type': 'Place',
          name: 'Colchester Business Centre',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1 George Williams Way',
            addressLocality: 'Colchester',
            addressRegion: 'Essex',
            postalCode: 'CO1 2JS',
            addressCountry: 'GB',
          },
        },
      },
      {
        '@type': 'ServiceChannel',
        serviceType: 'Online',
        serviceUrl: 'https://nextgentherapy.co.uk',
      },
    ],
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
    ...(price && {
      offers: {
        '@type': 'Offer',
        price: price,
        priceCurrency: 'GBP',
        ...(duration && {
          description: `${duration} session`,
        }),
        availability: 'https://schema.org/InStock',
        validFrom: '2024-01-01',
      },
    }),
    isRelatedTo: [
      {
        '@type': 'MedicalCondition',
        name: 'Anxiety Disorders',
      },
      {
        '@type': 'MedicalCondition',
        name: 'Depression',
      },
      {
        '@type': 'MedicalCondition',
        name: 'Relationship Issues',
      },
    ],
    serviceOutput: [
      'Improved mental wellbeing',
      'Enhanced coping strategies',
      'Better emotional regulation',
      'Increased self-awareness',
      'Stronger relationships',
    ],
  };

  return (
    <script
      type="application/ld+json"
      className={className}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
}

/**
 * Pre-configured service schemas for common therapy services
 */
export const PsychodynamicTherapySchema = () => (
  <ServiceSchema
    serviceName="Psychodynamic Therapy"
    description="Professional psychodynamic therapy focusing on unconscious patterns and their impact on current relationships and behaviors"
    price="60"
    duration="50 minutes"
  />
);

export const AnxietyTherapySchema = () => (
  <ServiceSchema
    serviceName="Anxiety Therapy"
    description="Specialized therapy for anxiety disorders using psychodynamic approaches to address underlying causes"
    price="60"
    duration="50 minutes"
  />
);

export const DepressionTherapySchema = () => (
  <ServiceSchema
    serviceName="Depression Counselling"
    description="Professional support for depression through psychodynamic therapy techniques and personalized treatment"
    price="60"
    duration="50 minutes"
  />
);

export const RelationshipTherapySchema = () => (
  <ServiceSchema
    serviceName="Relationship Therapy"
    description="Individual therapy focusing on relationship patterns and attachment styles using psychodynamic principles"
    price="60"
    duration="50 minutes"
  />
);

export const OnlineTherapySchema = () => (
  <ServiceSchema
    serviceName="Online Therapy"
    description="Professional psychodynamic therapy sessions conducted online via secure video platform"
    price="60"
    duration="50 minutes"
  />
);

export const FreeConsultationSchema = () => (
  <ServiceSchema
    serviceName="Free Consultation"
    description="Complimentary 15-minute consultation to discuss therapy needs and determine if services are suitable"
    price="0"
    duration="15 minutes"
  />
);

/**
 * Child and Adolescent Therapy Schemas
 */
export const ChildTherapySchema = () => {
  const childTherapySchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Child Therapy',
    description:
      'Professional play-based therapy for children aged 5-12 dealing with anxiety, behavioral challenges, and emotional difficulties in Colchester, Essex',
    provider: {
      '@type': 'Person',
      name: 'Andreea Horhocea',
      '@id': 'https://nextgentherapy.co.uk/about#person',
    },
    serviceType: 'Child Psychology Service',
    category: 'Mental Health',
    audience: {
      '@type': 'Audience',
      audienceType: 'Children aged 5-12 and their families',
      suggestedMinAge: '5',
      suggestedMaxAge: '12',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Colchester',
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Essex',
        },
      },
      {
        '@type': 'Country',
        name: 'United Kingdom',
      },
    ],
    availableChannel: [
      {
        '@type': 'ServiceChannel',
        serviceType: 'In-Person',
        serviceLocation: {
          '@type': 'Place',
          name: 'Colchester Business Centre',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1 George Williams Way',
            addressLocality: 'Colchester',
            addressRegion: 'Essex',
            postalCode: 'CO1 2JS',
            addressCountry: 'GB',
          },
        },
      },
    ],
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
    offers: {
      '@type': 'Offer',
      price: '60',
      priceCurrency: 'GBP',
      description: '50 minute child therapy session',
      availability: 'https://schema.org/InStock',
      validFrom: '2024-01-01',
    },
    isRelatedTo: [
      {
        '@type': 'MedicalCondition',
        name: 'Childhood Anxiety',
      },
      {
        '@type': 'MedicalCondition',
        name: 'Behavioral Problems in Children',
      },
      {
        '@type': 'MedicalCondition',
        name: 'Childhood Trauma',
      },
      {
        '@type': 'MedicalCondition',
        name: 'Separation Anxiety',
      },
    ],
    serviceOutput: [
      'Improved emotional regulation in children',
      'Enhanced coping skills through play therapy',
      'Better family communication',
      'Reduced behavioral difficulties',
      'Increased confidence and self-esteem',
    ],
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Therapy Approach',
        value: 'Play-based therapy',
      },
      {
        '@type': 'PropertyValue',
        name: 'Session Format',
        value: 'Individual child sessions with parent involvement',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(childTherapySchema) }}
    />
  );
};

export const TeenageTherapySchema = () => {
  const teenTherapySchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Teenage Therapy',
    description:
      'Confidential therapy for teenagers aged 13-18 dealing with depression, anxiety, identity issues, and life transitions in Colchester, Essex',
    provider: {
      '@type': 'Person',
      name: 'Andreea Horhocea',
      '@id': 'https://nextgentherapy.co.uk/about#person',
    },
    serviceType: 'Adolescent Psychology Service',
    category: 'Mental Health',
    audience: {
      '@type': 'Audience',
      audienceType: 'Teenagers aged 13-18',
      suggestedMinAge: '13',
      suggestedMaxAge: '18',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Colchester',
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Essex',
        },
      },
      {
        '@type': 'Country',
        name: 'United Kingdom',
      },
    ],
    availableChannel: [
      {
        '@type': 'ServiceChannel',
        serviceType: 'In-Person',
        serviceLocation: {
          '@type': 'Place',
          name: 'Colchester Business Centre',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1 George Williams Way',
            addressLocality: 'Colchester',
            addressRegion: 'Essex',
            postalCode: 'CO1 2JS',
            addressCountry: 'GB',
          },
        },
      },
      {
        '@type': 'ServiceChannel',
        serviceType: 'Online',
        serviceUrl: 'https://nextgentherapy.co.uk',
      },
    ],
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
    offers: {
      '@type': 'Offer',
      price: '60',
      priceCurrency: 'GBP',
      description: '50 minute teenage therapy session',
      availability: 'https://schema.org/InStock',
      validFrom: '2024-01-01',
    },
    isRelatedTo: [
      {
        '@type': 'MedicalCondition',
        name: 'Adolescent Depression',
      },
      {
        '@type': 'MedicalCondition',
        name: 'Teen Anxiety',
      },
      {
        '@type': 'MedicalCondition',
        name: 'Identity Issues',
      },
      {
        '@type': 'MedicalCondition',
        name: 'School Refusal',
      },
      {
        '@type': 'MedicalCondition',
        name: 'Self-harm',
      },
    ],
    serviceOutput: [
      'Improved mental health in teenagers',
      'Better emotional regulation',
      'Enhanced identity development',
      'Improved family relationships',
      'Increased confidence and self-esteem',
    ],
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Therapy Approach',
        value: 'Psychodynamic therapy',
      },
      {
        '@type': 'PropertyValue',
        name: 'Session Format',
        value: 'Confidential individual sessions',
      },
      {
        '@type': 'PropertyValue',
        name: 'Confidentiality',
        value: 'Complete privacy with safety exceptions',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(teenTherapySchema) }}
    />
  );
};

export const YoungAdultTherapySchema = () => {
  const youngAdultSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Young Adult Therapy',
    description:
      'Specialized therapy for young adults aged 18-25 navigating life transitions, career stress, relationships, and emerging independence in Colchester, Essex',
    provider: {
      '@type': 'Person',
      name: 'Andreea Horhocea',
      '@id': 'https://nextgentherapy.co.uk/about#person',
    },
    serviceType: 'Young Adult Psychology Service',
    category: 'Mental Health',
    audience: {
      '@type': 'Audience',
      audienceType: 'Young adults aged 18-25',
      suggestedMinAge: '18',
      suggestedMaxAge: '25',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Colchester',
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Essex',
        },
      },
      {
        '@type': 'Country',
        name: 'United Kingdom',
      },
    ],
    availableChannel: [
      {
        '@type': 'ServiceChannel',
        serviceType: 'In-Person',
        serviceLocation: {
          '@type': 'Place',
          name: 'Colchester Business Centre',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1 George Williams Way',
            addressLocality: 'Colchester',
            addressRegion: 'Essex',
            postalCode: 'CO1 2JS',
            addressCountry: 'GB',
          },
        },
      },
      {
        '@type': 'ServiceChannel',
        serviceType: 'Online',
        serviceUrl: 'https://nextgentherapy.co.uk',
      },
    ],
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
    offers: {
      '@type': 'Offer',
      price: '60',
      priceCurrency: 'GBP',
      description: '50 minute young adult therapy session',
      availability: 'https://schema.org/InStock',
      validFrom: '2024-01-01',
    },
    isRelatedTo: [
      {
        '@type': 'MedicalCondition',
        name: 'Career Anxiety',
      },
      {
        '@type': 'MedicalCondition',
        name: 'Life Transition Stress',
      },
      {
        '@type': 'MedicalCondition',
        name: 'Relationship Issues',
      },
      {
        '@type': 'MedicalCondition',
        name: 'University Stress',
      },
      {
        '@type': 'MedicalCondition',
        name: 'Independence Anxiety',
      },
    ],
    serviceOutput: [
      'Improved life direction clarity',
      'Enhanced relationship skills',
      'Better stress management',
      'Increased independence confidence',
      'Career decision support',
    ],
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Therapy Approach',
        value: 'Psychodynamic therapy',
      },
      {
        '@type': 'PropertyValue',
        name: 'Session Format',
        value: 'Individual therapy sessions',
      },
      {
        '@type': 'PropertyValue',
        name: 'Focus Area',
        value: 'Life transitions and emerging adulthood',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(youngAdultSchema) }}
    />
  );
};
