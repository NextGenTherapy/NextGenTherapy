interface BlogPostSchemaProps {
  title: string;
  description: string;
  publishedAt: string;
  modifiedAt?: string;
  slug: string;
  author?: string;
  category?: 'professional' | 'personal';
  wordCount?: number;
  tags?: string[];
}

export default function BlogPostSchema({
  title,
  description,
  publishedAt,
  modifiedAt,
  slug,
  author = 'Andreea Horhocea',
  category = 'professional',
  wordCount,
  tags = [],
}: BlogPostSchemaProps) {
  const url = `https://nextgentherapy.co.uk/blog/${slug}`;
  const articleSection =
    category === 'professional' ? 'Professional Insights' : 'Personal Reflections';

  const blogPostSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: author,
      url: 'https://nextgentherapy.co.uk/about',
      jobTitle: 'Psychodynamic Psychotherapist',
      worksFor: {
        '@type': 'Organization',
        name: 'Next Generation Therapy',
        url: 'https://nextgentherapy.co.uk',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Next Generation Therapy',
      url: 'https://nextgentherapy.co.uk',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
        width: 1200,
        height: 630,
      },
    },
    datePublished: publishedAt,
    dateModified: modifiedAt || publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
      width: 1200,
      height: 630,
      alt: `${title} - Next Generation Therapy Blog`,
    },
    articleSection: articleSection,
    ...(wordCount && {
      wordCount: wordCount,
      timeRequired: `PT${Math.ceil(wordCount / 200)}M`,
    }),
    keywords:
      tags.length > 0
        ? tags.join(', ')
        : 'therapy, mental health, Colchester, psychodynamic therapy',
    about: {
      '@type': 'Thing',
      name: 'Mental Health and Therapy',
      description: 'Professional therapy services and mental health support',
    },
    inLanguage: 'en-GB',
    isAccessibleForFree: true,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(blogPostSchema),
      }}
    />
  );
}
