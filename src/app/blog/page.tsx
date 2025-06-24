import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import styles from "./blog.module.css";

type PostMeta = {
  title: string;
  date: string;
  slug: string;
  summary?: string;
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
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default function BlogPage() {
  const posts = getPosts();
  return (
    <div className={styles.page}>
      <section className={styles.greeting}>
        <h1>Blog</h1>
      </section>
      <section className={styles.blogList}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={styles.blogCard}
          >
            <div className={styles.blogContent}>
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
              <span className={styles.readMore}>Read more</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
