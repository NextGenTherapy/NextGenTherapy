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
    openGraph: {
      title: data.title,
      description: data.summary || "",
      url: `https://nextgentherapy.co.uk/blog/${slug}`,
      type: "article",
      publishedTime: data.date,
    },
    twitter: {
      card: "summary",
      title: data.title,
      description: data.summary || "",
    },
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

  return (
    <div className={styles.page}>
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
  );
}
