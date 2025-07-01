import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import styles from "./blog.module.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Next Generation Therapy",
  description:
    "Read personal and professional thoughts on therapy, mental health, and emotional well-being. Insights from a qualified psychodynamic psychotherapist in Colchester.",
  keywords: [
    "therapy blog",
    "mental health blog",
    "psychotherapy insights",
    "therapy thoughts",
    "professional therapy advice",
    "personal therapy reflections",
    "Colchester therapist blog",
    "psychodynamic therapy blog",
  ],
  alternates: {
    canonical: "https://nextgentherapy.co.uk/blog",
  },
  openGraph: {
    title: "Blog - Next Generation Therapy",
    description:
      "Read personal and professional thoughts on therapy, mental health, and emotional well-being from a qualified psychotherapist.",
    url: "https://nextgentherapy.co.uk/blog",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Blog - Next Generation Therapy",
    description:
      "Read personal and professional thoughts on therapy, mental health, and emotional well-being from a qualified psychotherapist.",
  },
  robots: "index, follow",
};

type PostMeta = {
  title: string;
  date: string;
  slug: string;
  summary?: string;
  category?: string;
};

function getPosts(): PostMeta[] {
  const postsDir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(postsDir);
  return files
    .map((filename) => {
      const filePath = path.join(postsDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      return {
        title: data.title,
        date: data.date,
        slug: filename.replace(/\.md$/, ""),
        summary: data.summary || "",
        category: data.category || "personal", // Default to personal for existing posts
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

function BlogSection({
  title,
  posts,
  emptyMessage,
}: {
  title: string;
  posts: PostMeta[];
  emptyMessage: string;
}) {
  return (
    <section className={styles.blogSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {posts.length > 0 ? (
        <div className={styles.blogList}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={styles.blogCard}
            >
              <div className={styles.blogContent}>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
                <span className={styles.readMore}>Read more</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <p>{emptyMessage}</p>
        </div>
      )}
    </section>
  );
}

export default function BlogPage() {
  const allPosts = getPosts();
  const personalPosts = allPosts.filter((post) => post.category === "personal");
  const professionalPosts = allPosts.filter(
    (post) => post.category === "professional"
  );

  return (
    <div className={styles.page}>
      <section className={styles.greeting}>
        <h1>Blog</h1>
        <p className={styles.subtitle}>
          Welcome to my thoughts and reflections on therapy, life, and everything
          in between.
        </p>
      </section>

      <div className={styles.main}>
        <BlogSection
          title="Personal Thoughts"
          posts={personalPosts}
          emptyMessage="No personal posts yet. Check back soon for my personal reflections and experiences."
        />

        <BlogSection
          title="Professional Thoughts"
          posts={professionalPosts}
          emptyMessage="No professional posts yet. I'll be sharing insights about therapy, mental health practices, and professional developments soon."
        />
      </div>
    </div>
  );
}
