import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABlock from '@/components/ui/CTABlock';
import styles from './teen-therapy.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Teen Therapy Colchester | Therapist for Teenagers 13-17',
  description:
    'Psychodynamic therapy for teenagers aged 13-17 in Colchester. Help with anxiety, self-harm, school, friendships, and identity. BACP registered therapist.',
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/teen-therapy',
  },
  openGraph: {
    title: 'Teen Therapy Colchester | Next Generation Therapy',
    description:
      'Psychodynamic therapy for teenagers aged 13-17 in Colchester. Help with anxiety, self-harm, school, friendships, and identity.',
    url: 'https://nextgentherapy.co.uk/teen-therapy',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function TeenTherapyPage() {
  return (
    <>
      <PageHero
        eyebrow="Teen Therapy"
        title="Therapy for Teenagers"
        lead="Psychodynamic therapy for teenagers aged 13–17 navigating anxiety, self-harm, school, friendships, and identity."
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
