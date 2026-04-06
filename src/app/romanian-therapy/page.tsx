import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABlock from '@/components/ui/CTABlock';
import styles from './romanian-therapy.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Terapie în Limba Română | Romanian Therapist Essex UK',
  description:
    'Therapy in Romanian with a native speaker in Colchester and online across the UK. Psychodynamic therapy for Romanian speakers navigating life between cultures.',
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/romanian-therapy',
  },
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Terapie în Limba Română | Romanian Therapist UK',
    description:
      'Therapy in Romanian with a native speaker in Colchester and online across the UK. Psychodynamic therapy for Romanian speakers.',
    url: 'https://nextgentherapy.co.uk/romanian-therapy',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RomanianTherapyPage() {
  return (
    <>
      <PageHero
        eyebrow="Terapie în Română"
        title="Terapie în Limba Română"
        lead="Therapy in Romanian with a native speaker. For those navigating life between cultures, some things are easier to say in your first language."
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
