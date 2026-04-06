import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABlock from '@/components/ui/CTABlock';
import styles from './is-this-right-for-you.module.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Is This Right for You? | Next Generation Therapy',
  description:
    'Find out if psychodynamic therapy with Andreea is the right fit for you. Who I work with, who I don\'t, and what to expect from therapy.',
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/is-this-right-for-you',
  },
  openGraph: {
    title: 'Is This Right for You? | Next Generation Therapy',
    description:
      'Find out if psychodynamic therapy with Andreea is the right fit for you. Who I work with, who I don\'t, and what to expect.',
    url: 'https://nextgentherapy.co.uk/is-this-right-for-you',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function IsThisRightForYouPage() {
  return (
    <>
      <PageHero
        eyebrow="Before You Book"
        title="Is This Right for You?"
        lead="Not every therapist is right for every person. Here's who I work with, who I don't, and what to expect if we work together."
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
