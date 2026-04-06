import Button from './button';
import styles from './BlogPostNavigation.module.scss';

interface PostLink {
  slug: string;
  title: string;
}

interface BlogPostNavigationProps {
  prevPost?: PostLink | null;
  nextPost?: PostLink | null;
}

export default function BlogPostNavigation({ prevPost, nextPost }: BlogPostNavigationProps) {
  return (
    <nav className={styles.navigation} aria-label="Blog post navigation">
      <div className={styles.container}>
        {prevPost ? (
          <Button href={`/blog/${prevPost.slug}`} variant="outline" className={styles.navButton}>
            &larr; Previous
          </Button>
        ) : (
          <span className={styles.placeholder} />
        )}

        <Button href="/blog" variant="secondary" className={styles.navButton}>
          Back to Blog
        </Button>

        {nextPost ? (
          <Button href={`/blog/${nextPost.slug}`} variant="primary" className={styles.navButton}>
            Next &rarr;
          </Button>
        ) : (
          <span className={styles.placeholder} />
        )}
      </div>
    </nav>
  );
}
