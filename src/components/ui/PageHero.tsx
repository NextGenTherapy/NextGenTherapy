import styles from './PageHero.module.scss';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  lead: string;
}

export default function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.lead}>{lead}</p>
      </div>
    </section>
  );
}
