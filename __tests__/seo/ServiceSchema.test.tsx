import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ServiceSchema, {
  PsychodynamicTherapySchema,
  AnxietyTherapySchema,
  DepressionTherapySchema,
  RelationshipTherapySchema,
  OnlineTherapySchema,
  FreeConsultationSchema,
  ChildTherapySchema,
  TeenageTherapySchema,
  YoungAdultTherapySchema,
} from '../../src/components/seo/ServiceSchema';

describe('ServiceSchema Component', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <ServiceSchema serviceName="Test Service" description="Test description" />
    );
    expect(container).toBeInTheDocument();
  });

  it('generates valid JSON-LD structured data', () => {
    const { container } = render(
      <ServiceSchema serviceName="Test Service" description="Test description" />
    );
    const scriptTag = container.querySelector('script[type="application/ld+json"]');

    expect(scriptTag).toBeInTheDocument();
    expect(scriptTag?.textContent).toBeTruthy();
  });

  it('includes correct schema context and type', () => {
    const { container } = render(
      <ServiceSchema serviceName="Test Service" description="Test description" />
    );
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData['@context']).toBe('https://schema.org');
    expect(jsonData['@type']).toBe('Service');
  });

  it('includes service name and description', () => {
    const { container } = render(
      <ServiceSchema serviceName="Anxiety Therapy" description="Specialized anxiety treatment" />
    );
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.name).toBe('Anxiety Therapy');
    expect(jsonData.description).toBe('Specialized anxiety treatment');
  });

  it('includes provider information', () => {
    const { container } = render(
      <ServiceSchema serviceName="Test" description="Test" />
    );
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.provider).toEqual({
      '@type': 'Person',
      name: 'Andreea Horhocea',
      '@id': 'https://nextgentherapy.co.uk/about#person',
    });
  });

  it('includes service type and category', () => {
    const { container } = render(
      <ServiceSchema serviceName="Test" description="Test" />
    );
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.serviceType).toBe('Professional Mental Health Service');
    expect(jsonData.category).toBe('Health & Medical');
  });

  it('includes service area', () => {
    const { container } = render(
      <ServiceSchema serviceName="Test" description="Test" />
    );
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.areaServed).toHaveLength(2);
    expect(jsonData.areaServed[0].name).toBe('Colchester');
    expect(jsonData.areaServed[1].name).toBe('United Kingdom');
  });

  it('includes available channels', () => {
    const { container } = render(
      <ServiceSchema serviceName="Test" description="Test" />
    );
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.availableChannel).toHaveLength(2);
    expect(jsonData.availableChannel[0].serviceType).toBe('In-Person');
    expect(jsonData.availableChannel[1].serviceType).toBe('Online');
  });

  it('includes opening hours', () => {
    const { container } = render(
      <ServiceSchema serviceName="Test" description="Test" />
    );
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.hoursAvailable).toHaveLength(2);
    expect(jsonData.hoursAvailable[0].dayOfWeek).toEqual(['Monday', 'Tuesday']);
    expect(jsonData.hoursAvailable[1].dayOfWeek).toBe('Friday');
  });

  it('includes offers when price is provided', () => {
    const { container } = render(
      <ServiceSchema
        serviceName="Test"
        description="Test"
        price="60"
        duration="50 minutes"
      />
    );
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.offers).toBeDefined();
    expect(jsonData.offers.price).toBe('60');
    expect(jsonData.offers.priceCurrency).toBe('GBP');
    expect(jsonData.offers.description).toBe('50 minutes session');
  });

  it('does not include offers when price is not provided', () => {
    const { container } = render(
      <ServiceSchema serviceName="Test" description="Test" />
    );
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.offers).toBeUndefined();
  });

  it('includes related medical conditions', () => {
    const { container } = render(
      <ServiceSchema serviceName="Test" description="Test" />
    );
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.isRelatedTo).toHaveLength(3);
    expect(jsonData.isRelatedTo[0].name).toBe('Anxiety Disorders');
    expect(jsonData.isRelatedTo[1].name).toBe('Depression');
    expect(jsonData.isRelatedTo[2].name).toBe('Relationship Issues');
  });

  it('includes service outputs', () => {
    const { container } = render(
      <ServiceSchema serviceName="Test" description="Test" />
    );
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.serviceOutput).toContain('Improved mental wellbeing');
    expect(jsonData.serviceOutput).toContain('Enhanced coping strategies');
  });

  it('applies className when provided', () => {
    const { container } = render(
      <ServiceSchema serviceName="Test" description="Test" className="test-class" />
    );
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    expect(scriptTag).toHaveClass('test-class');
  });
});

describe('Pre-configured Service Schemas', () => {
  it('PsychodynamicTherapySchema renders correctly', () => {
    const { container } = render(<PsychodynamicTherapySchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.name).toBe('Psychodynamic Therapy');
    expect(jsonData.offers.price).toBe('60');
  });

  it('AnxietyTherapySchema renders correctly', () => {
    const { container } = render(<AnxietyTherapySchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.name).toBe('Anxiety Therapy');
    expect(jsonData.description).toContain('anxiety disorders');
  });

  it('DepressionTherapySchema renders correctly', () => {
    const { container } = render(<DepressionTherapySchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.name).toBe('Depression Counselling');
  });

  it('RelationshipTherapySchema renders correctly', () => {
    const { container } = render(<RelationshipTherapySchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.name).toBe('Relationship Therapy');
  });

  it('OnlineTherapySchema renders correctly', () => {
    const { container } = render(<OnlineTherapySchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.name).toBe('Online Therapy');
    expect(jsonData.description).toContain('online');
  });

  it('FreeConsultationSchema renders correctly', () => {
    const { container } = render(<FreeConsultationSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.name).toBe('Free Consultation');
    expect(jsonData.offers.price).toBe('0');
  });
});

describe('Child and Adolescent Therapy Schemas', () => {
  it('ChildTherapySchema renders with correct structure', () => {
    const { container } = render(<ChildTherapySchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData['@type']).toBe('Service');
    expect(jsonData.name).toBe('Child Therapy');
    expect(jsonData.serviceType).toBe('Child Psychology Service');
    expect(jsonData.audience.suggestedMinAge).toBe('5');
    expect(jsonData.audience.suggestedMaxAge).toBe('12');
  });

  it('ChildTherapySchema includes play-based therapy info', () => {
    const { container } = render(<ChildTherapySchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    const therapyApproach = jsonData.additionalProperty.find(
      (p: { name: string }) => p.name === 'Therapy Approach'
    );
    expect(therapyApproach.value).toBe('Play-based therapy');
  });

  it('TeenageTherapySchema renders with correct structure', () => {
    const { container } = render(<TeenageTherapySchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.name).toBe('Teenage Therapy');
    expect(jsonData.serviceType).toBe('Adolescent Psychology Service');
    expect(jsonData.audience.suggestedMinAge).toBe('13');
    expect(jsonData.audience.suggestedMaxAge).toBe('18');
  });

  it('TeenageTherapySchema includes online option', () => {
    const { container } = render(<TeenageTherapySchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    const onlineChannel = jsonData.availableChannel.find(
      (c: { serviceType: string }) => c.serviceType === 'Online'
    );
    expect(onlineChannel).toBeDefined();
  });

  it('YoungAdultTherapySchema renders with correct structure', () => {
    const { container } = render(<YoungAdultTherapySchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.name).toBe('Young Adult Therapy');
    expect(jsonData.serviceType).toBe('Young Adult Psychology Service');
    expect(jsonData.audience.suggestedMinAge).toBe('18');
    expect(jsonData.audience.suggestedMaxAge).toBe('25');
  });

  it('YoungAdultTherapySchema includes relevant conditions', () => {
    const { container } = render(<YoungAdultTherapySchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    const conditions = jsonData.isRelatedTo.map((c: { name: string }) => c.name);
    expect(conditions).toContain('Career Anxiety');
    expect(conditions).toContain('Life Transition Stress');
    expect(conditions).toContain('University Stress');
  });
});
