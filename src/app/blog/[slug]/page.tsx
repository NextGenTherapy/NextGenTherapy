export const runtime = "nodejs";

import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Button from "../../../components/ui/button";
import Link from "next/link";
import styles from "../blog.module.scss";

// Generate static params for all blog posts (for sitemap)
export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(postsDir);

  return files
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => ({
      slug: filename.replace(/\.md$/, ""),
    }));
}

// Dynamic metadata for each blog post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const postsDir = path.join(process.cwd(), "src/content/blog");
  const filePath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return {
      title: "Post not found - Next Generation Therapy",
      description: "This blog post could not be found.",
    };
  }
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return {
    title:
      data.title !== undefined
        ? `${data.title} - Next Generation Therapy`
        : "Blog Post - Next Generation Therapy",
    description: data.summary || "",
    keywords: [
      "therapy",
      "mental health",
      "psychotherapy",
      "emotional well-being",
      "therapy blog",
      "professional therapy",
      data.category === "professional" ? "professional therapy insights" : "personal therapy thoughts",
    ],
    alternates: {
      canonical: `https://nextgentherapy.co.uk/blog/${slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.summary || "",
      url: `https://nextgentherapy.co.uk/blog/${slug}`,
      type: "article",
      publishedTime: data.date,
      authors: ["Andreea"],
      section: data.category === "professional" ? "Professional Thoughts" : "Personal Thoughts",
      images: [
        {
          url: "https://nextgentherapy.co.uk/images/default-social-share.jpg",
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.summary || "",
      images: ["https://nextgentherapy.co.uk/images/default-social-share.jpg"],
    },
    robots: "index, follow",
  };
}

function getAllPosts() {
  const postsDir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(postsDir);
  return files
    .map((filename) => {
      const filePath = path.join(postsDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      // Add error handling for missing frontmatter
      if (!data.title || !data.date) {
        console.warn(`Missing frontmatter in ${filename}`);
        return null;
      }

      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title,
        date: data.date,
      };
    })
    .filter(Boolean) // Remove null entries
    .sort((a, b) => (a!.date < b!.date ? 1 : -1));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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

  const postsDir = path.join(process.cwd(), "src/content/blog");
  const isValidSlug = /^[a-zA-Z0-9-_]+$/.test(slug);
  if (!isValidSlug) {
    return <div>Invalid post slug</div>;
  }

  const filePath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return <div>Post not found</div>;
  }
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  // JSON-LD structured data for blog posts
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.title,
    description: data.summary || "",
    author: {
      "@type": "Person",
      name: "Andreea",
      url: "https://nextgentherapy.co.uk/about",
    },
    publisher: {
      "@type": "Organization", 
      name: "Next Generation Therapy",
      url: "https://nextgentherapy.co.uk",
      logo: {
        "@type": "ImageObject",
        url: "https://nextgentherapy.co.uk/images/default-social-share.jpg",
      },
    },
    datePublished: data.date,
    dateModified: data.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://nextgentherapy.co.uk/blog/${slug}`,
    },
    image: {
      "@type": "ImageObject",
      url: "https://nextgentherapy.co.uk/images/default-social-share.jpg",
      width: 1200,
      height: 630,
    },
    articleSection: data.category === "professional" ? "Professional Thoughts" : "Personal Thoughts",
    keywords: data.category === "professional" 
      ? "therapy, mental health, professional insights, psychotherapy" 
      : "therapy, personal thoughts, mental health, emotional well-being",
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className={styles.main}>
        <article className={styles.blogContent}>
          <h1>{data.title}</h1>
          <p>
            <em>{data.date}</em>
          </p>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          <div className={styles.buttonNav}>
            {prevPost ? (
              <Link href={`/blog/${prevPost.slug}`}>
                <Button>← Previous</Button>
              </Link>
            ) : (
              <span />
            )}
            <Link href="/blog">
              <Button>Back to Blog</Button>
            </Link>
            {nextPost ? (
              <Link href={`/blog/${nextPost.slug}`}>
                <Button>Next →</Button>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
