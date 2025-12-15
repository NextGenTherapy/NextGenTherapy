import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PersonSchema from '../../src/components/seo/PersonSchema';

describe('PersonSchema Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<PersonSchema />);
    expect(container).toBeInTheDocument();
  });

  it('generates valid JSON-LD structured data', () => {
    const { container } = render(<PersonSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');

    expect(scriptTag).toBeInTheDocument();
    expect(scriptTag?.textContent).toBeTruthy();
  });

  it('includes correct schema context and type', () => {
    const { container } = render(<PersonSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData['@context']).toBe('https://schema.org');
    expect(jsonData['@type']).toBe('Person');
    expect(jsonData['@id']).toBe('https://nextgentherapy.co.uk/about#person');
  });

  it('includes correct personal information', () => {
    const { container } = render(<PersonSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.name).toBe('Andreea Horhocea');
    expect(jsonData.givenName).toBe('Andreea');
    expect(jsonData.familyName).toBe('Horhocea');
    expect(jsonData.jobTitle).toBe('Psychodynamic Psychotherapist');
    expect(jsonData.url).toBe('https://nextgentherapy.co.uk/about');
  });

  it('includes proper description', () => {
    const { container } = render(<PersonSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.description).toContain('BACP registered');
    expect(jsonData.description).toContain('psychodynamic psychotherapist');
    expect(jsonData.description).toContain('Colchester');
  });

  it('includes image object with proper structure', () => {
    const { container } = render(<PersonSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.image).toEqual({
      '@type': 'ImageObject',
      url: 'https://nextgentherapy.co.uk/images/andreea.jpg',
      width: '400',
      height: '400',
      caption: 'Andreea Horhocea - Psychodynamic Psychotherapist',
    });
  });

  it('includes worksFor organization', () => {
    const { container } = render(<PersonSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.worksFor).toEqual({
      '@type': 'Organization',
      name: 'Next Generation Therapy',
      url: 'https://nextgentherapy.co.uk',
    });
  });

  it('includes BACP membership', () => {
    const { container } = render(<PersonSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.memberOf).toEqual({
      '@type': 'Organization',
      name: 'British Association for Counselling and Psychotherapy',
      alternateName: 'BACP',
      url: 'https://www.bacp.co.uk/',
    });
  });

  it('includes credentials', () => {
    const { container } = render(<PersonSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.hasCredential).toHaveLength(3);

    const mastersDegree = jsonData.hasCredential[0];
    expect(mastersDegree['@type']).toBe('EducationalOccupationalCredential');
    expect(mastersDegree.name).toBe('Masters in Psychodynamic Psychotherapy');
    expect(mastersDegree.educationalLevel).toBe("Master's Degree");

    const bachelorsDegree = jsonData.hasCredential[1];
    expect(bachelorsDegree.name).toBe('BA in Criminology and Social Psychology');

    const bacpCert = jsonData.hasCredential[2];
    expect(bacpCert.name).toBe('BACP Registered Member');
    expect(bacpCert.credentialCategory).toBe('certification');
  });

  it('includes areas of expertise', () => {
    const { container } = render(<PersonSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.knowsAbout).toContain('Psychodynamic Therapy');
    expect(jsonData.knowsAbout).toContain('Anxiety Treatment');
    expect(jsonData.knowsAbout).toContain('Depression Counselling');
    expect(jsonData.knowsAbout).toContain('Relationship Therapy');
  });

  it('includes service area', () => {
    const { container } = render(<PersonSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.areaServed).toHaveLength(2);
    expect(jsonData.areaServed[0]['@type']).toBe('City');
    expect(jsonData.areaServed[0].name).toBe('Colchester');
    expect(jsonData.areaServed[1].name).toBe('United Kingdom');
  });

  it('includes service types', () => {
    const { container } = render(<PersonSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.serviceType).toContain('Psychodynamic Psychotherapy');
    expect(jsonData.serviceType).toContain('Online Therapy');
    expect(jsonData.serviceType).toContain('Mental Health Support');
  });

  it('includes contact point with hours', () => {
    const { container } = render(<PersonSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.contactPoint['@type']).toBe('ContactPoint');
    expect(jsonData.contactPoint.telephone).toBe('+44-7448-036017');
    expect(jsonData.contactPoint.email).toBe('andreeatherapytoday@gmail.com');
    expect(jsonData.contactPoint.hoursAvailable).toHaveLength(2);
  });

  it('includes address information', () => {
    const { container } = render(<PersonSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.address).toEqual({
      '@type': 'PostalAddress',
      streetAddress: 'Colchester Business Centre, 1 George Williams Way',
      addressLocality: 'Colchester',
      addressRegion: 'Essex',
      postalCode: 'CO1 2JS',
      addressCountry: 'GB',
    });
  });

  it('includes service offers', () => {
    const { container } = render(<PersonSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.makesOffer).toHaveLength(2);

    const freeConsultation = jsonData.makesOffer[0];
    expect(freeConsultation.price).toBe('0');
    expect(freeConsultation.itemOffered.name).toBe('Free Consultation');

    const therapySession = jsonData.makesOffer[1];
    expect(therapySession.price).toBe('60');
    expect(therapySession.priceCurrency).toBe('GBP');
  });

  it('applies className when provided', () => {
    const { container } = render(<PersonSchema className="test-class" />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    expect(scriptTag).toHaveClass('test-class');
  });

  it('has valid JSON structure', () => {
    const { container } = render(<PersonSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonText = scriptTag?.textContent || '';

    expect(() => {
      JSON.parse(jsonText);
    }).not.toThrow();
  });
});
