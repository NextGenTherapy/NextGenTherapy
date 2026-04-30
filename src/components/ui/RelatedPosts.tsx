import Link from 'next/link';
import styles from './RelatedPosts.module.scss';

export interface RelatedPost {
  slug: string;
  title: string;
  summary?: string;
}

interface RelatedPostsProps {
  posts: RelatedPost[];
  heading?: string;
}

export default function RelatedPosts({ posts, heading = 'Related reading' }: RelatedPostsProps) {
  if (!posts.length) return null;

  return (
    <aside className={styles.relatedPosts} aria-labelledby="related-posts-heading">
      <h2 id="related-posts-heading" className={styles.heading}>
        {heading}
      </h2>
      <ul className={styles.list}>
        {posts.map((post) => (
          <li key={post.slug} className={styles.item}>
            <Link href={`/blog/${post.slug}`} className={styles.link}>
              <h3 className={styles.title}>{post.title}</h3>
              {post.summary ? <p className={styles.summary}>{post.summary}</p> : null}
              <span className={styles.readMore}>Read more &rarr;</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
