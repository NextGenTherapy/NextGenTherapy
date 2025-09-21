import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import BreadcrumbSchema from '../../src/components/seo/BreadcrumbSchema';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('BreadcrumbSchema Component', () => {
  const { usePathname } = require('next/navigation');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    usePathname.mockReturnValue('/');
    const { container } = render(<BreadcrumbSchema />);
    expect(container).toBeInTheDocument();
  });

  it('generates valid JSON-LD structured data', () => {
    usePathname.mockReturnValue('/services');
    const { container } = render(<BreadcrumbSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');

    expect(scriptTag).toBeInTheDocument();
    expect(scriptTag?.textContent).toBeTruthy();
  });

  it('includes correct schema context and type', () => {
    usePathname.mockReturnValue('/about');
    const { container } = render(<BreadcrumbSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData['@context']).toBe('https://schema.org');
    expect(jsonData['@type']).toBe('BreadcrumbList');
    expect(jsonData.itemListElement).toBeInstanceOf(Array);
  });

  it('always includes home breadcrumb for valid paths', () => {
    usePathname.mockReturnValue('/services');
    const { container } = render(<BreadcrumbSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    const homeItem = jsonData.itemListElement.find((item: any) => item.position === 1);
    expect(homeItem).toBeDefined();
    expect(homeItem.name).toBe('Home');
    expect(homeItem.item).toBe('https://nextgentherapy.co.uk');
  });

  it('generates breadcrumbs for services page', () => {
    usePathname.mockReturnValue('/services');
    const { container } = render(<BreadcrumbSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.itemListElement).toHaveLength(2);

    const servicesItem = jsonData.itemListElement.find((item: any) => item.position === 2);
    expect(servicesItem.name).toBe('Services');
    expect(servicesItem.item).toBe('https://nextgentherapy.co.uk/services');
  });

  it('generates breadcrumbs for pricing page', () => {
    usePathname.mockReturnValue('/pricing');
    const { container } = render(<BreadcrumbSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    const pricingItem = jsonData.itemListElement.find((item: any) => item.position === 2);
    expect(pricingItem.name).toBe('Pricing');
    expect(pricingItem.item).toBe('https://nextgentherapy.co.uk/pricing');
  });

  it('generates breadcrumbs for about page', () => {
    usePathname.mockReturnValue('/about');
    const { container } = render(<BreadcrumbSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    const aboutItem = jsonData.itemListElement.find((item: any) => item.position === 2);
    expect(aboutItem.name).toBe('About');
    expect(aboutItem.item).toBe('https://nextgentherapy.co.uk/about');
  });

  it('generates breadcrumbs for FAQ page', () => {
    usePathname.mockReturnValue('/faq');
    const { container } = render(<BreadcrumbSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    const faqItem = jsonData.itemListElement.find((item: any) => item.position === 2);
    expect(faqItem.name).toBe('FAQ');
    expect(faqItem.item).toBe('https://nextgentherapy.co.uk/faq');
  });

  it('generates breadcrumbs for testimonials page', () => {
    usePathname.mockReturnValue('/testimonials');
    const { container } = render(<BreadcrumbSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    const testimonialsItem = jsonData.itemListElement.find((item: any) => item.position === 2);
    expect(testimonialsItem.name).toBe('Trust & Care');
    expect(testimonialsItem.item).toBe('https://nextgentherapy.co.uk/testimonials');
  });

  it('generates breadcrumbs for book-now page', () => {
    usePathname.mockReturnValue('/book-now');
    const { container } = render(<BreadcrumbSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    const bookNowItem = jsonData.itemListElement.find((item: any) => item.position === 2);
    expect(bookNowItem.name).toBe('Book Now');
    expect(bookNowItem.item).toBe('https://nextgentherapy.co.uk/book-now');
  });

  it('returns null for unsupported paths like /blog', () => {
    usePathname.mockReturnValue('/blog');
    const { container } = render(<BreadcrumbSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');

    // Component doesn't handle /blog directly, only /blog/post-slug, so it returns null
    expect(scriptTag).toBeNull();
  });

  it('generates breadcrumbs with custom items', () => {
    usePathname.mockReturnValue('/custom-page');
    const customItems = [
      { name: 'Home', url: 'https://nextgentherapy.co.uk' },
      { name: 'Custom Page Title', url: 'https://nextgentherapy.co.uk/custom-page' },
    ];
    const { container } = render(<BreadcrumbSchema items={customItems} />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    const customItem = jsonData.itemListElement.find((item: any) => item.position === 2);
    expect(customItem.name).toBe('Custom Page Title');
    expect(customItem.item).toBe('https://nextgentherapy.co.uk/custom-page');
  });

  it('generates breadcrumbs for nested blog post', () => {
    usePathname.mockReturnValue('/blog/anxiety-therapy-guide');
    const { container } = render(<BreadcrumbSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.itemListElement).toHaveLength(3);

    // Check blog parent
    const blogItem = jsonData.itemListElement.find((item: any) => item.position === 2);
    expect(blogItem.name).toBe('Blog');

    // Check specific post - component converts slug to title format
    const postItem = jsonData.itemListElement.find((item: any) => item.position === 3);
    expect(postItem.name).toBe('Anxiety Therapy Guide'); // Component converts slug by replacing - with spaces and capitalizing
  });

  it('maintains proper position ordering', () => {
    usePathname.mockReturnValue('/services');
    const { container } = render(<BreadcrumbSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    const positions = jsonData.itemListElement.map((item: any) => item.position);
    expect(positions).toEqual([1, 2]);

    // Ensure all items have required properties
    jsonData.itemListElement.forEach((item: any) => {
      expect(item['@type']).toBe('ListItem');
      expect(item.position).toBeGreaterThan(0);
      expect(item.name).toBeTruthy();
      expect(item.item).toBeTruthy();
    });
  });

  it('handles root path correctly (returns null)', () => {
    usePathname.mockReturnValue('/');
    const { container } = render(<BreadcrumbSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');

    // Should return null for root path (only Home item, component returns null if length <= 1)
    expect(scriptTag).toBeNull();
  });

  it('has valid JSON structure', () => {
    usePathname.mockReturnValue('/about');
    const { container } = render(<BreadcrumbSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonText = scriptTag?.textContent || '';

    expect(() => {
      JSON.parse(jsonText);
    }).not.toThrow();
  });

  it('uses correct URL format', () => {
    usePathname.mockReturnValue('/services');
    const { container } = render(<BreadcrumbSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    jsonData.itemListElement.forEach((item: any) => {
      expect(item.item).toMatch(/^https:\/\/nextgentherapy\.co\.uk/);
    });
  });
});
