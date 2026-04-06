import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABlock from '@/components/ui/CTABlock';
import styles from './therapy-for-women.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Therapy for Women Colchester | Burnout, Anxiety & Self-Worth',
  description:
    'Psychodynamic therapy for women in Colchester and online. Help with overthinking, burnout, body image, and self-worth. BACP registered therapist.',
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/therapy-for-women',
  },
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Therapy for Women | Next Generation Therapy',
    description:
      'Psychodynamic therapy for women dealing with burnout, anxiety, body image, and self-worth. BACP registered therapist in Colchester and online.',
    url: 'https://nextgentherapy.co.uk/therapy-for-women',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function TherapyForWomenPage() {
  return (
    <>
      <PageHero
        eyebrow="Therapy for Women"
        title="Therapy for Women"
        lead="Psychodynamic therapy for women dealing with overthinking, burnout, body image, and the feeling of never quite being enough."
      />

      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.comingSoon}>
            <p className={styles.message}>
              This page is being developed. In the meantime, please get in touch to discuss how I
              can help.
            </p>
          </div>
        </div>
      </div>

      <CTABlock />
    </>
  );
}
