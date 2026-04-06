import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import styles from './not-found.module.scss';

const navigationLinks = [
  { href: '/therapy-for-women', label: 'Therapy for Women' },
  { href: '/neurodiversity', label: 'ADHD & Autism in Adults' },
  { href: '/teen-therapy', label: 'Therapy for Teenagers' },
  { href: '/child-therapy', label: 'Therapy for Children' },
  { href: '/romanian-therapy', label: 'Therapy in Romanian' },
  { href: '/online-therapy', label: 'Online Therapy' },
  { href: '/about', label: 'About Andreea' },
  { href: '/book-now', label: 'Book a free 15-minute call' },
];

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <PageHero
        eyebrow="Page not found"
        title="That page doesn't exist — at least not anymore."
        lead="Some of the older pages on this site have been merged or renamed. Here's where you might have been heading."
      />

      <section className={styles.content}>
        <nav className={styles.linkGrid} aria-label="Site navigation">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        <p className={styles.closing}>
          Still can&apos;t find what you were looking for?{' '}
          <Link href="/book-now">Send me a message</Link> and I&apos;ll point you in the right
          direction.
        </p>
      </section>
    </main>
  );
}
