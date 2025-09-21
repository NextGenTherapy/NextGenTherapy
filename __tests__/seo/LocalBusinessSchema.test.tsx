import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import LocalBusinessSchema from '../../src/components/seo/LocalBusinessSchema';

describe('LocalBusinessSchema Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<LocalBusinessSchema />);
    expect(container).toBeInTheDocument();
  });

  it('generates valid JSON-LD structured data', () => {
    const { container } = render(<LocalBusinessSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');

    expect(scriptTag).toBeInTheDocument();
    expect(scriptTag?.textContent).toBeTruthy();
  });

  it('includes correct business information', () => {
    const { container } = render(<LocalBusinessSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    // Test basic business info
    expect(jsonData['@context']).toBe('https://schema.org');
    expect(jsonData['@type']).toBe('LocalBusiness');
    expect(jsonData['@id']).toBe('https://nextgentherapy.co.uk/#localbusiness');
    expect(jsonData.name).toBe('Next Generation Therapy');
    expect(jsonData.url).toBe('https://nextgentherapy.co.uk');
  });

  it('includes correct address information', () => {
    const { container } = render(<LocalBusinessSchema />);
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

  it('includes correct GPS coordinates', () => {
    const { container } = render(<LocalBusinessSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.geo).toEqual({
      '@type': 'GeoCoordinates',
      latitude: 51.8959,
      longitude: 0.9035,
    });
  });

  it('includes contact information', () => {
    const { container } = render(<LocalBusinessSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.telephone).toBe('+447448036017');
    expect(jsonData.email).toBe('andreeatherapytoday@gmail.com');
  });

  it('includes opening hours', () => {
    const { container } = render(<LocalBusinessSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.openingHoursSpecification).toHaveLength(2);

    // Check Monday/Tuesday hours
    const mondayTuesday = jsonData.openingHoursSpecification[0];
    expect(mondayTuesday.dayOfWeek).toEqual(['Monday', 'Tuesday']);
    expect(mondayTuesday.opens).toBe('10:00');
    expect(mondayTuesday.closes).toBe('19:00');

    // Check Friday hours
    const friday = jsonData.openingHoursSpecification[1];
    expect(friday.dayOfWeek).toBe('Friday');
    expect(friday.opens).toBe('09:00');
    expect(friday.closes).toBe('14:00');
  });

  it('includes service area information', () => {
    const { container } = render(<LocalBusinessSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.serviceArea).toEqual({
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 51.8959,
        longitude: 0.9035,
      },
      geoRadius: '50000',
    });
  });

  it('includes therapy services catalog', () => {
    const { container } = render(<LocalBusinessSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.hasOfferCatalog).toBeDefined();
    expect(jsonData.hasOfferCatalog.name).toBe('Therapy Services');
    expect(jsonData.hasOfferCatalog.itemListElement).toHaveLength(2);

    // Check individual therapy service
    const individualTherapy = jsonData.hasOfferCatalog.itemListElement[0];
    expect(individualTherapy.itemOffered.name).toBe('Individual Therapy');
    expect(individualTherapy.price).toBe('60');
    expect(individualTherapy.priceCurrency).toBe('GBP');

    // Check free consultation
    const consultation = jsonData.hasOfferCatalog.itemListElement[1];
    expect(consultation.itemOffered.name).toBe('Free Consultation');
    expect(consultation.price).toBe('0');
  });

  it('includes payment information', () => {
    const { container } = render(<LocalBusinessSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.paymentAccepted).toEqual(['Cash', 'Bank Transfer', 'Card']);
    expect(jsonData.currenciesAccepted).toBe('GBP');
    expect(jsonData.priceRange).toBe('££');
  });

  it('includes proper therapy-focused description', () => {
    const { container } = render(<LocalBusinessSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.description).toContain('psychodynamic therapy');
    expect(jsonData.description).toContain('Colchester, Essex');
    expect(jsonData.description).toContain('BACP registered');
    expect(jsonData.description).toContain('anxiety, depression');
  });

  it('has valid JSON structure', () => {
    const { container } = render(<LocalBusinessSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonText = scriptTag?.textContent || '';

    expect(() => {
      JSON.parse(jsonText);
    }).not.toThrow();
  });
});
