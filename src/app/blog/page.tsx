import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import styles from "./blog.module.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgentherapy.co.uk"),
  title: "Therapy Blog | Mental Health Insights from Colchester Therapist",
  description:
    "Expert therapy insights & mental health advice from BACP registered psychotherapist Andreea Horhocea. Professional guidance on anxiety, depression, relationships & therapy approaches.",
  keywords: [
    "therapy blog Colchester",
    "mental health blog UK",
    "psychotherapy insights",
    "therapy advice blog",
    "anxiety therapy tips",
    "depression help blog",
    "relationship therapy insights",
    "psychodynamic therapy blog",
    "BACP therapist blog",
    "professional therapy advice",
    "mental health guidance",
    "therapy approaches explained"
  ],
  authors: [{ name: "Andreea Horhocea" }],
  alternates: {
    canonical: "https://nextgentherapy.co.uk/blog",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Therapy Blog | Mental Health Insights from Colchester Therapist",
    description:
      "Expert therapy insights & mental health advice from BACP registered psychotherapist Andreea Horhocea. Professional guidance on anxiety, depression & relationships.",
    url: "https://nextgentherapy.co.uk/blog",
    siteName: "Next Generation Therapy",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Therapy Blog | Mental Health Insights from Colchester Therapist",
    description:
      "Expert therapy insights & mental health advice from BACP registered psychotherapist Andreea Horhocea.",
    images: ["https://nextgentherapy.co.uk/images/default-social-share.jpg"],
  },
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
  id,
}: {
  title: string;
  posts: PostMeta[];
  emptyMessage: string;
  id?: string;
}) {
  return (
    <section className={styles.blogSection} id={id}>
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
          title="Professional Thoughts"
          posts={professionalPosts}
          emptyMessage="No professional posts yet. I'll be sharing insights about therapy, mental health practices, and professional developments soon."
          id="professional-thoughts"
        />

        <BlogSection
          title="Personal Thoughts"
          posts={personalPosts}
          emptyMessage="No personal posts yet. Check back soon for my personal reflections and experiences."
          id="personal-thoughts"
        />
      </div>
    </div>
  );
}
