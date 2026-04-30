import type { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BASE_URL = 'https://nextgentherapy.co.uk';

type StaticEntry = {
  path: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
};

const staticPages: StaticEntry[] = [
  { path: '', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/therapy-for-women', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/neurodiversity', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/teen-therapy', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/child-therapy', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/online-therapy', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/romanian-therapy', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/is-this-right-for-you', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pricing', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/location', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/therapy-in-colchester', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/therapy-in-wivenhoe', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/therapy-in-mersea', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/therapy-in-tiptree', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/therapy-in-marks-tey', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/therapy-in-manningtree', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/therapy-in-clacton', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/therapy-in-ipswich', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/book-now', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/youth-family-faq', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/trust', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/accessibility', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/cookies', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
];

function getBlogPosts(): MetadataRoute.Sitemap {
  const postsDir = path.join(process.cwd(), 'src/content/blog');
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'));

  return files.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    const stats = fs.statSync(filePath);

    const slug = filename.replace(/\.md$/, '');
    const lastModified = data.lastUpdated
      ? new Date(data.lastUpdated)
      : data.date
        ? new Date(data.date)
        : stats.mtime;

    return {
      url: `${BASE_URL}/blog/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    };
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticPages.map(
    ({ path: pagePath, changeFrequency, priority }) => ({
      url: `${BASE_URL}${pagePath}`,
      lastModified: now,
      changeFrequency,
      priority,
    }),
  );

  return [...staticEntries, ...getBlogPosts()];
}
