import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import BlogPostSchema from '../../src/components/seo/BlogPostSchema';

describe('BlogPostSchema Component', () => {
  const mockProps = {
    title: 'Understanding Anxiety Therapy',
    description: 'A comprehensive guide to anxiety therapy approaches',
    slug: 'understanding-anxiety-therapy',
    publishedAt: '2025-01-15',
    modifiedAt: '2025-01-16',
    tags: ['therapy', 'anxiety', 'mental health']
  };

  it('renders without crashing', () => {
    const { container } = render(<BlogPostSchema {...mockProps} />);
    expect(container).toBeInTheDocument();
  });

  it('generates valid JSON-LD structured data', () => {
    const { container } = render(<BlogPostSchema {...mockProps} />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');

    expect(scriptTag).toBeInTheDocument();
    expect(scriptTag?.textContent).toBeTruthy();
  });

  it('includes correct schema context and type', () => {
    const { container } = render(<BlogPostSchema {...mockProps} />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData['@context']).toBe('https://schema.org');
    expect(jsonData['@type']).toBe('Article');
  });

  it('includes basic blog post information', () => {
    const { container } = render(<BlogPostSchema {...mockProps} />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.headline).toBe('Understanding Anxiety Therapy');
    expect(jsonData.description).toBe('A comprehensive guide to anxiety therapy approaches');
    expect(jsonData.url).toBe('https://nextgentherapy.co.uk/blog/understanding-anxiety-therapy');
  });

  it('includes publication dates', () => {
    const { container } = render(<BlogPostSchema {...mockProps} />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.datePublished).toBe('2025-01-15');
    expect(jsonData.dateModified).toBe('2025-01-16');
  });

  it('uses publish date as modified date when modifiedAt is not provided', () => {
    const propsWithoutModified = { ...mockProps };
    delete (propsWithoutModified as any).modifiedAt;

    const { container } = render(<BlogPostSchema {...propsWithoutModified} />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.dateModified).toBe('2025-01-15');
  });

  it('includes correct author information', () => {
    const { container } = render(<BlogPostSchema {...mockProps} />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.author).toEqual({
      '@type': 'Person',
      name: 'Andreea Horhocea',
      jobTitle: 'BACP Registered Psychodynamic Psychotherapist',
      url: 'https://nextgentherapy.co.uk/about'
    });
  });

  it('includes publisher information', () => {
    const { container } = render(<BlogPostSchema {...mockProps} />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.publisher).toEqual({
      '@type': 'Organization',
      name: 'Next Generation Therapy',
      url: 'https://nextgentherapy.co.uk',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nextgentherapy.co.uk/images/logo.jpg',
        width: 400,
        height: 400
      }
    });
  });

  it('includes default image', () => {
    const { container } = render(<BlogPostSchema {...mockProps} />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.image).toBe('https://nextgentherapy.co.uk/images/default-social-share.jpg');
  });

  it('includes main entity information', () => {
    const { container } = render(<BlogPostSchema {...mockProps} />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.mainEntityOfPage).toEqual({
      '@type': 'WebPage',
      '@id': 'https://nextgentherapy.co.uk/blog/understanding-anxiety-therapy'
    });
  });

  it('includes therapy-relevant keywords from tags', () => {
    const { container } = render(<BlogPostSchema {...mockProps} />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.keywords).toBe('therapy, anxiety, mental health');
  });

  it('includes default keywords when no tags provided', () => {
    const propsWithoutTags = { ...mockProps };
    delete (propsWithoutTags as any).tags;

    const { container } = render(<BlogPostSchema {...propsWithoutTags} />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.keywords).toBe('therapy, mental health, Colchester, psychodynamic therapy');
  });

  it('handles different slug formats', () => {
    const propsWithDifferentSlug = {
      ...mockProps,
      slug: 'depression-therapy-techniques',
      title: 'Depression Therapy Techniques'
    };

    const { container } = render(<BlogPostSchema {...propsWithDifferentSlug} />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.url).toBe('https://nextgentherapy.co.uk/blog/depression-therapy-techniques');
    expect(jsonData.headline).toBe('Depression Therapy Techniques');
  });

  it('handles long titles appropriately', () => {
    const propsWithLongTitle = {
      ...mockProps,
      title: 'A Very Long Title About Understanding Complex Anxiety Therapy Approaches and Treatment Methods'
    };

    const { container } = render(<BlogPostSchema {...propsWithLongTitle} />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.headline).toBe('A Very Long Title About Understanding Complex Anxiety Therapy Approaches and Treatment Methods');
  });

  it('validates JSON structure', () => {
    const { container } = render(<BlogPostSchema {...mockProps} />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonText = scriptTag?.textContent || '';

    expect(() => {
      JSON.parse(jsonText);
    }).not.toThrow();
  });

  it('includes all required Article properties', () => {
    const { container } = render(<BlogPostSchema {...mockProps} />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    // Required properties for Article
    expect(jsonData.headline).toBeTruthy();
    expect(jsonData.author).toBeTruthy();
    expect(jsonData.datePublished).toBeTruthy();
    expect(jsonData.publisher).toBeTruthy();
  });

  it('includes healthcare/therapy context', () => {
    const { container } = render(<BlogPostSchema {...mockProps} />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    // Should include therapy-relevant information
    expect(jsonData.publisher.name).toBe('Next Generation Therapy');
    expect(jsonData.author.url).toContain('/about');
  });

  it('generates consistent URLs', () => {
    const { container } = render(<BlogPostSchema {...mockProps} />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.url).toMatch(/^https:\/\/nextgentherapy\.co\.uk\/blog\//);
    expect(jsonData.mainEntityOfPage['@id']).toBe(jsonData.url);
  });

  it('handles special characters in slug', () => {
    const propsWithSpecialChars = {
      ...mockProps,
      slug: 'self-esteem-therapy-tips',
      title: 'Self-Esteem & Therapy Tips'
    };

    const { container } = render(<BlogPostSchema {...propsWithSpecialChars} />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonData = JSON.parse(scriptTag?.textContent || '{}');

    expect(jsonData.url).toBe('https://nextgentherapy.co.uk/blog/self-esteem-therapy-tips');
    expect(jsonData.headline).toBe('Self-Esteem & Therapy Tips');
  });
});