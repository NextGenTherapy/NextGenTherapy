import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABlock from '@/components/ui/CTABlock';
import styles from './online-therapy.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Online Therapy UK | Video Sessions Age 16+ | Next Generation Therapy',
  description:
    'Online psychodynamic therapy across the UK. Secure video sessions for clients aged 16 and over. Wednesdays. BACP registered therapist.',
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/online-therapy',
  },
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Online Therapy UK | Next Generation Therapy',
    description:
      'Online psychodynamic therapy across the UK. Secure video sessions for clients aged 16 and over.',
    url: 'https://nextgentherapy.co.uk/online-therapy',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function OnlineTherapyPage() {
  return (
    <>
      <PageHero
        eyebrow="Online Therapy"
        title="Online Therapy Across the UK"
        lead="Secure video sessions for clients aged 16 and over. Same quality therapy, from wherever you are."
      />
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.comingSoon}>
            <p className={styles.message}>
              This page is being developed. In the meantime, please get in touch to discuss how I can
              help.
            </p>
          </div>
        </div>
      </div>
      <CTABlock />
    </>
  );
}
