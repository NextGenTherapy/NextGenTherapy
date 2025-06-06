import { createClient } from '@sanity/client';
import Image from 'next/image';
import styles from "./blog.module.css";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
});

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  summary?: string;
  image?: string;
};

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(`*[_type == "post"] | order(_createdAt desc){
    _id,
    title,
    slug,
    summary,
    "image": mainImage.asset->url
  }`);
  return (
    <div className={styles.page}>
      <section className={styles.greeting}>
        <h1>Blog</h1>
      </section>
      <section className={styles.blogList}>
        {posts.map((post) => (
          <a key={post._id} href={`/blog/${post.slug.current}`} className={styles.blogCard}>
            <Image
              src={post.image ?? "/placeholder.jpg"}
              alt={post.title}
              className={styles.blogImage}
              width={600}
              height={400}
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.blogContent}>
              <h2>{post.title}</h2>
              {post.summary && <p>{post.summary}</p>}
              <span className={styles.readMore}>Read more</span>
            </div>
          </a>
        ))}
      </section>
    </div>
  );
}