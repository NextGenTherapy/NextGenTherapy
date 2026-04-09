import styles from './accessibility.module.scss';
import buttonLinksStyles from '../../components/ui/buttonLinks.module.scss';
import LegalNavigation from '../../components/layout/legal-navigation';
import Button from '../../components/ui/button';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgentherapy.co.uk'),
  title: 'Accessibility Statement | Next Generation Therapy | Colchester',
  description:
    'Our commitment to web accessibility. Learn about the accessibility features of nextgentherapy.co.uk and how to report issues.',
  keywords: [
    'accessibility statement',
    'web accessibility therapy',
    'accessible therapy website',
    'WCAG compliance',
    'accessible psychotherapy Colchester',
  ],
  authors: [{ name: 'Andreea Horhocea' }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://nextgentherapy.co.uk/accessibility',
  },
  openGraph: {
    title: 'Accessibility Statement | Next Generation Therapy',
    description:
      'Our commitment to making nextgentherapy.co.uk accessible to everyone.',
    url: 'https://nextgentherapy.co.uk/accessibility',
    siteName: 'Next Generation Therapy',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function Accessibility() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Accessibility Statement',
    description: 'Accessibility statement for Next Generation Therapy website.',
    url: 'https://nextgentherapy.co.uk/accessibility',
    publisher: {
      '@type': 'Organization',
      name: 'Next Generation Therapy',
      url: 'https://nextgentherapy.co.uk',
    },
    inLanguage: 'en-GB',
    dateModified: '2026-04-09',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://nextgentherapy.co.uk',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Accessibility Statement',
        item: 'https://nextgentherapy.co.uk/accessibility',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className={styles.page}>
        <main className={styles.accessibilityPage}>
          <LegalNavigation currentPage="accessibility" />

          <h1 className={styles.heading}>Accessibility Statement</h1>
          <p className={styles.updated}>
            <strong>Last updated: 9 April 2026</strong>
          </p>

          <p>
            I am committed to making this website accessible to as many people as possible,
            regardless of ability or the technology used to access it. This accessibility
            statement applies to nextgentherapy.co.uk.
          </p>

          <section>
            <h2 className={styles.sectionHeading}>1. Our Commitment</h2>
            <p>
              I want everyone who visits nextgentherapy.co.uk to feel welcome and have a
              positive experience. To help achieve this, I aim to follow accessibility best
              practices and meet recognised accessibility standards.
            </p>
            <p>
              Accessibility is an ongoing process, and I am continually working to improve
              the accessibility of this website.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>2. Conformance Status</h2>
            <p>
              This website aims to conform to the Web Content Accessibility Guidelines (WCAG)
              2.1 at Level AA. These guidelines are internationally recognised standards for
              making web content more accessible.
            </p>
            <p>
              While I strive to meet these standards across the entire website, some content
              may not yet fully conform. I am actively working to identify and address any
              accessibility barriers.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>3. Accessibility Features</h2>
            <p>
              This website has been built with accessibility in mind. Current features include:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Semantic HTML:</strong> Proper heading structure and HTML elements to
                help assistive technologies understand the page content
              </li>
              <li>
                <strong>Keyboard navigation:</strong> All interactive elements can be accessed
                and operated using a keyboard
              </li>
              <li>
                <strong>Screen reader compatibility:</strong> Content is structured to work with
                screen readers and other assistive technologies
              </li>
              <li>
                <strong>Colour contrast:</strong> Text and interactive elements meet minimum
                colour contrast requirements for readability
              </li>
              <li>
                <strong>Focus indicators:</strong> Visible focus indicators show which element
                is currently selected when navigating with a keyboard
              </li>
              <li>
                <strong>Alternative text:</strong> Images include descriptive alternative text
                for screen reader users
              </li>
              <li>
                <strong>Responsive design:</strong> The website adapts to different screen sizes
                and devices, including mobile phones and tablets
              </li>
              <li>
                <strong>Resizable text:</strong> Text can be resized using browser controls
                without loss of content or functionality
              </li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>4. Physical Accessibility</h2>
            <p>
              My therapy room at Colchester Business Centre has been designed with physical
              accessibility in mind:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Ground floor access:</strong> The therapy room is located on the ground
                floor with level access from the entrance
              </li>
              <li>
                <strong>Wheelchair accessibility:</strong> The building and therapy room are
                wheelchair accessible
              </li>
              <li>
                <strong>Sensory-aware environment:</strong> The room features soft lighting,
                calming colours, and minimal sensory distractions
              </li>
              <li>
                <strong>Fidget tools available:</strong> Fidget items are available for clients
                of any age who find them helpful
              </li>
              <li>
                <strong>Stimming welcomed:</strong> The space is neurodivergent-friendly and
                stimming is always welcomed
              </li>
            </ul>
            <p>
              If you have specific accessibility requirements for in-person sessions, please
              let me know when booking and I will do my best to accommodate your needs.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>5. Known Limitations</h2>
            <p>
              Despite best efforts to ensure accessibility, there may be some limitations. If
              you encounter any accessibility barriers, please contact me so I can address
              them.
            </p>
            <p>
              Some older content or third-party components may not fully meet accessibility
              standards. I am working to review and update this content over time.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>6. Feedback and Contact</h2>
            <p>
              I welcome feedback on the accessibility of this website. If you encounter any
              accessibility barriers or have suggestions for improvement, please contact me:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:andreeatherapytoday@gmail.com" className={styles.link}>
                  andreeatherapytoday@gmail.com
                </a>
              </li>
              <li>
                <strong>Telephone:</strong> 07448 036017
              </li>
            </ul>
            <p>
              I aim to respond to accessibility feedback within 5 working days. Where possible,
              I will provide alternative formats or information to help you access the content
              you need.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>7. Enforcement Procedure</h2>
            <p>
              The Equality Act 2010 provides protection against discrimination for people with
              disabilities, including in the provision of services. If you believe you have
              been discriminated against due to accessibility issues, you may have legal
              recourse.
            </p>
            <p>
              For more information about your rights, you can contact:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Equality Advisory Support Service (EASS):</strong>{' '}
                <a
                  href="https://www.equalityadvisoryservice.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  equalityadvisoryservice.com
                </a>
              </li>
              <li>
                <strong>Citizens Advice:</strong>{' '}
                <a
                  href="https://www.citizensadvice.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  citizensadvice.org.uk
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>8. Technical Information</h2>
            <p>
              This website is built using modern web technologies including Next.js and follows
              semantic HTML practices. The website is tested across major browsers and devices.
            </p>
            <p>
              <strong>Compatibility:</strong> This website is designed to work with:
            </p>
            <ul className={styles.list}>
              <li>Modern web browsers (Chrome, Firefox, Safari, Edge)</li>
              <li>Screen readers (VoiceOver, NVDA, JAWS)</li>
              <li>Mobile devices and tablets</li>
              <li>Browser zoom up to 200%</li>
            </ul>
          </section>

          <LegalNavigation currentPage="accessibility" />

          <section className={buttonLinksStyles.buttonLinks}>
            <Button href="/privacy-policy">Privacy Policy</Button>
            <Button href="/terms">Terms of Service</Button>
            <Button href="/book-now">Book Now</Button>
          </section>
        </main>
      </div>
      <BreadcrumbSchema />
    </>
  );
}
