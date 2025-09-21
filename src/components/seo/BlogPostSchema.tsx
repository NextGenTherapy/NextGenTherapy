interface BlogPostSchemaProps {
  title: string;
  description: string;
  publishedAt: string;
  modifiedAt?: string;
  slug: string;
  excerpt?: string;
  author?: string;
  tags?: string[];
}

export default function BlogPostSchema({
  title,
  description,
  publishedAt,
  modifiedAt,
  slug,
  author = 'Andreea Horhocea',
  tags = [],
}: BlogPostSchemaProps) {
  const url = `https://nextgentherapy.co.uk/blog/${slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: publishedAt,
    dateModified: modifiedAt || publishedAt,
    author: {
      '@type': 'Person',
      name: author,
      jobTitle: 'BACP Registered Psychodynamic Psychotherapist',
      url: 'https://nextgentherapy.co.uk/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Next Generation Therapy',
      url: 'https://nextgentherapy.co.uk',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nextgentherapy.co.uk/images/logo.jpg',
        width: 400,
        height: 400,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    image: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
    keywords:
      tags.length > 0
        ? tags.join(', ')
        : 'therapy, mental health, Colchester, psychodynamic therapy',
    about: {
      '@type': 'Thing',
      name: 'Mental Health and Therapy',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Adults seeking therapy and mental health support',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleSchema),
      }}
    />
  );
}
