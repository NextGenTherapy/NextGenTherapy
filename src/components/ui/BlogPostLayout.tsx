import Image from 'next/image';
import styles from './BlogPostLayout.module.scss';

interface BlogPostLayoutProps {
  title: string;
  eyebrow: string;
  date?: string;
  readTime?: string;
  children: React.ReactNode;
}

export default function BlogPostLayout({
  title,
  eyebrow,
  date,
  readTime,
  children,
}: BlogPostLayoutProps) {
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h1 className={styles.title}>{title}</h1>
        {(date || readTime) && (
          <div className={styles.meta}>
            {date && <span className={styles.date}>{date}</span>}
            {date && readTime && <span className={styles.separator}>·</span>}
            {readTime && <span className={styles.readTime}>{readTime}</span>}
          </div>
        )}
        <div className={styles.divider} />
      </header>

      <div className={styles.body}>{children}</div>

      <aside className={styles.author}>
        <Image
          src="/images/andreea.jpg"
          alt="Andreea Horhocea, Psychodynamic Psychotherapist"
          width={64}
          height={64}
          className={styles.authorPhoto}
        />
        <div className={styles.authorInfo}>
          <span className={styles.authorName}>Andreea Horhocea</span>
          <span className={styles.authorCredentials}>
            Psychodynamic Psychotherapist, BACP Registered
          </span>
        </div>
      </aside>
    </article>
  );
}
