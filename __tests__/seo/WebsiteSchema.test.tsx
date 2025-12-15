import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import WebsiteSchema from '../../src/components/seo/WebsiteSchema';

describe('WebsiteSchema Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<WebsiteSchema />);
    expect(container).toBeInTheDocument();
  });

  it('generates valid JSON-LD structured data', () => {
    const { container } = render(<WebsiteSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');

    expect(scriptTag).toBeInTheDocument();
    expect(scriptTag?.textContent).toBeTruthy();
  });

  it('includes correct schema context and type', () => {
    const { container } = render(<WebsiteSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData['@context']).toBe('https://schema.org');
    expect(jsonData['@type']).toBe('WebSite');
    expect(jsonData['@id']).toBe('https://nextgentherapy.co.uk/#website');
  });

  it('includes correct website information', () => {
    const { container } = render(<WebsiteSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.name).toBe('Next Generation Therapy');
    expect(jsonData.alternateName).toBe('NGT Colchester');
    expect(jsonData.url).toBe('https://nextgentherapy.co.uk');
    expect(jsonData.inLanguage).toBe('en-GB');
  });

  it('includes proper description', () => {
    const { container } = render(<WebsiteSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.description).toContain('psychodynamic therapy');
    expect(jsonData.description).toContain('Colchester');
    expect(jsonData.description).toContain('BACP registered');
  });

  it('includes copyright information', () => {
    const { container } = render(<WebsiteSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.copyrightYear).toBe('2024');
    expect(jsonData.copyrightHolder).toEqual({
      '@type': 'Person',
      name: 'Andreea Horhocea',
      '@id': 'https://nextgentherapy.co.uk/about#person',
    });
  });

  it('includes publisher organization', () => {
    const { container } = render(<WebsiteSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.publisher).toEqual({
      '@type': 'Organization',
      name: 'Next Generation Therapy',
      '@id': 'https://nextgentherapy.co.uk/#organization',
    });
  });

  it('includes search action', () => {
    const { container } = render(<WebsiteSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.potentialAction).toHaveLength(1);
    expect(jsonData.potentialAction[0]['@type']).toBe('SearchAction');
    expect(jsonData.potentialAction[0].target.urlTemplate).toBe(
      'https://nextgentherapy.co.uk/search?q={search_term_string}'
    );
    expect(jsonData.potentialAction[0]['query-input']).toBe('required name=search_term_string');
  });

  it('includes main entity reference', () => {
    const { container } = render(<WebsiteSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.mainEntity).toEqual({
      '@type': 'Organization',
      '@id': 'https://nextgentherapy.co.uk/#organization',
    });
  });

  it('includes about topics', () => {
    const { container } = render(<WebsiteSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.about).toHaveLength(3);
    expect(jsonData.about[0].name).toBe('Psychodynamic Therapy');
    expect(jsonData.about[1].name).toBe('Mental Health Services');
    expect(jsonData.about[2].name).toBe('BACP Therapy');
  });

  it('includes audience information', () => {
    const { container } = render(<WebsiteSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.audience['@type']).toBe('Audience');
    expect(jsonData.audience.audienceType).toBe('People seeking mental health support');
    expect(jsonData.audience.geographicArea).toHaveLength(3);
  });

  it('includes service area with geo coordinates', () => {
    const { container } = render(<WebsiteSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.serviceArea['@type']).toBe('GeoCircle');
    expect(jsonData.serviceArea.geoMidpoint.latitude).toBe(51.8959);
    expect(jsonData.serviceArea.geoMidpoint.longitude).toBe(0.9035);
    expect(jsonData.serviceArea.geoRadius).toBe('50000');
  });

  it('includes relevant keywords', () => {
    const { container } = render(<WebsiteSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.keywords).toContain('therapy Colchester');
    expect(jsonData.keywords).toContain('BACP therapist');
    expect(jsonData.keywords).toContain('online therapy UK');
    expect(jsonData.keywords).toContain('psychodynamic therapy');
  });

  it('applies className when provided', () => {
    const { container } = render(<WebsiteSchema className="test-class" />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    expect(scriptTag).toHaveClass('test-class');
  });

  it('has valid JSON structure', () => {
    const { container } = render(<WebsiteSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonText = scriptTag?.textContent || '';

    expect(() => {
      JSON.parse(jsonText);
    }).not.toThrow();
  });
});
