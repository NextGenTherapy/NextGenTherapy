export const runtime = 'nodejs';

import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { notFound } from 'next/navigation';
import BlogPostLayout from '../../../components/ui/BlogPostLayout';
import BlogPostNavigation from '../../../components/ui/BlogPostNavigation';
import CTABlock from '../../../components/ui/CTABlock';
import BlogPostSchema from '../../../components/seo/BlogPostSchema';
import styles from '../blog.module.scss';

// Helper function to calculate read time
function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

// Helper function to format date
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

// Helper function to get eyebrow text from category
function getEyebrow(category: string | undefined): string {
  return category === 'professional' ? 'Professional Thoughts' : 'Personal Thoughts';
}

// Generate static params for all blog posts (for sitemap)
export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'src/content/blog');
  const files = fs.readdirSync(postsDir);

  return files
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => ({
      slug: filename.replace(/\.md$/, ''),
    }));
}

// Dynamic metadata for each blog post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const postsDir = path.join(process.cwd(), 'src/content/blog');
  const isValidSlug = /^[a-zA-Z0-9-_]+$/.test(slug);
  if (!isValidSlug) {
    notFound();
  }
  const filePath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    notFound();
  }
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);

  return {
    metadataBase: new URL('https://nextgentherapy.co.uk'),
    title:
      data.title !== undefined
        ? `${data.title} - Next Generation Therapy Blog`
        : 'Blog Post - Next Generation Therapy',
    description:
      data.summary ||
      'Professional insights and guidance from Next Generation Therapy to support your mental health and wellbeing journey.',
    keywords: [
      'therapy',
      'mental health',
      'psychotherapy',
      'emotional well-being',
      'therapy blog',
      'professional therapy',
      'psychodynamic therapy',
      'anxiety support',
      'depression help',
      'self-esteem',
      'therapy insights',
      data.category === 'professional'
        ? 'professional therapy insights'
        : 'personal therapy thoughts',
      'Andreea Horhocea',
      'Colchester therapy',
      'online therapy',
    ],
    alternates: {
      canonical: `https://nextgentherapy.co.uk/blog/${slug}`,
    },
    authors: [{ name: 'Andreea Horhocea', url: 'https://nextgentherapy.co.uk/about' }],
    openGraph: {
      title: data.title,
      description:
        data.summary ||
        'Professional insights and guidance from Next Generation Therapy to support your mental health and wellbeing journey.',
      url: `https://nextgentherapy.co.uk/blog/${slug}`,
      type: 'article',
      publishedTime: data.date,
      modifiedTime: data.date,
      authors: ['Andreea Horhocea'],
      section: data.category === 'professional' ? 'Professional Insights' : 'Personal Reflections',
      tags: [
        'therapy',
        'mental health',
        'psychotherapy',
        'emotional wellbeing',
        data.category === 'professional' ? 'professional insights' : 'personal thoughts',
      ],
      images: [
        {
          url: 'https://nextgentherapy.co.uk/images/default-social-share.jpg',
          width: 1200,
          height: 630,
          alt: `${data.title} - Next Generation Therapy Blog`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description:
        data.summary || 'Professional insights and guidance from Next Generation Therapy.',
      images: ['https://nextgentherapy.co.uk/images/default-social-share.jpg'],
      creator: '@nextgentherapy',
      site: '@nextgentherapy',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

function getAllPosts() {
  const postsDir = path.join(process.cwd(), 'src/content/blog');
  const files = fs.readdirSync(postsDir);
  return files
    .map((filename) => {
      const filePath = path.join(postsDir, filename);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);

      // Add error handling for missing frontmatter
      if (!data.title || !data.date) {
        console.warn(`Missing frontmatter in ${filename}`);
        return null;
      }

      return {
        slug: filename.replace(/\.md$/, ''),
        title: data.title,
        date: data.date,
      };
    })
    .filter(Boolean) // Remove null entries
    .sort((a, b) => (a!.date < b!.date ? 1 : -1));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!slug) {
    return (
      <div className={styles.loading}>
        <p>Loading post...</p>
      </div>
    );
  }

  const posts = getAllPosts();
  const currentIndex = posts.findIndex((post) => post!.slug === slug);
  const prevPost = posts[currentIndex + 1];
  const nextPost = posts[currentIndex - 1];

  const postsDir = path.join(process.cwd(), 'src/content/blog');
  const isValidSlug = /^[a-zA-Z0-9-_]+$/.test(slug);
  if (!isValidSlug) {
    notFound();
  }

  const filePath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    notFound();
  }
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  const wordCount = content.split(/\s+/).length;

  return (
    <div className={styles.page}>
      <BlogPostSchema
        title={data.title}
        description={
          data.summary ||
          'Professional insights and guidance from Next Generation Therapy to support your mental health and wellbeing journey.'
        }
        publishedAt={data.date}
        slug={slug}
        category={data.category === 'professional' ? 'professional' : 'personal'}
        wordCount={wordCount}
        tags={[
          'therapy',
          'mental health',
          'psychotherapy',
          'emotional wellbeing',
          'anxiety support',
          'depression help',
          'self-esteem',
          data.category === 'professional' ? 'professional insights' : 'personal thoughts',
          'Colchester therapy',
          'online therapy',
        ]}
      />
      <main className={styles.main}>
        <BlogPostLayout
          title={data.title}
          eyebrow={getEyebrow(data.category)}
          date={formatDate(data.date)}
          readTime={calculateReadTime(content)}
        >
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </BlogPostLayout>
        <BlogPostNavigation
          prevPost={prevPost ? { slug: prevPost.slug, title: prevPost.title } : null}
          nextPost={nextPost ? { slug: nextPost.slug, title: nextPost.title } : null}
        />
        <CTABlock />
      </main>
    </div>
  );
}
