import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogPostLayout.module.scss';

interface CornerstoneLink {
  href: string;
  title: string;
  description?: string;
}

interface BlogPostLayoutProps {
  title: string;
  eyebrow: string;
  date?: string;
  readTime?: string;
  seeAlso?: CornerstoneLink[];
  children: React.ReactNode;
}

export default function BlogPostLayout({
  title,
  eyebrow,
  date,
  readTime,
  seeAlso,
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

      {seeAlso && seeAlso.length > 0 && (
        <aside className={styles.seeAlso} aria-labelledby="see-also-heading">
          <h2 id="see-also-heading" className={styles.seeAlsoHeading}>
            Continue reading
          </h2>
          <ul className={styles.seeAlsoList}>
            {seeAlso.map((link) => (
              <li key={link.href} className={styles.seeAlsoItem}>
                <Link href={link.href} className={styles.seeAlsoLink}>
                  <span className={styles.seeAlsoTitle}>{link.title}</span>
                  {link.description && (
                    <span className={styles.seeAlsoDescription}>
                      {link.description}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}

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
