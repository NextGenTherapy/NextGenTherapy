import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock Next.js components
jest.mock('next/link', () => {
  return function MockLink({
    children,
    href,
    className,
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
  }) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  };
});

jest.mock('next/image', () => {
  return function MockImage(props: {
    src: string;
    alt: string;
    height?: number;
    width?: number;
    className?: string;
  }) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={props.src} alt={props.alt} className={props.className} />;
  };
});

jest.mock('../../src/components/ui/button', () => {
  return function MockButton({
    children,
    href,
  }: {
    children: React.ReactNode;
    href?: string;
  }) {
    if (href) {
      return <a href={href}>{children}</a>;
    }
    return <button type="button">{children}</button>;
  };
});

// Import after mocks
import TrustPage from '../../src/app/trust/page';
import YouthFamilyFAQ from '../../src/app/youth-family-faq/page';

describe('Remaining Pages', () => {
  describe('Trust Page', () => {
    beforeEach(() => {
      render(<TrustPage />);
    });

    it('renders the page with PageHero eyebrow', () => {
      expect(screen.getByText(/Trust & Care/i)).toBeInTheDocument();
    });

    it('renders the main heading', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/Building Trust Through Professional Care/i);
    });

    it('displays lead text about safe environment', () => {
      expect(screen.getByText(/safe, confidential environment/i)).toBeInTheDocument();
    });

    it('displays commitment section', () => {
      expect(screen.getByText(/My Commitment to You/i)).toBeInTheDocument();
    });

    it('displays safe environment', () => {
      expect(screen.getByText(/Safe Environment/i)).toBeInTheDocument();
    });

    it('displays professional standards', () => {
      const headings = screen.getAllByRole('heading', { level: 3 });
      const profStandardsHeading = headings.find((h) => h.textContent?.includes('Professional Standards'));
      expect(profStandardsHeading).toBeInTheDocument();
    });

    it('displays personalized approach', () => {
      expect(screen.getByText(/Personalized Approach/i)).toBeInTheDocument();
    });

    it('displays confidentiality', () => {
      const confidentialityElements = screen.getAllByText(/Confidentiality/i);
      expect(confidentialityElements.length).toBeGreaterThan(0);
    });

    it('displays qualifications section', () => {
      expect(screen.getByText(/Professional Qualifications & Experience/i)).toBeInTheDocument();
    });

    it('shows BACP registration', () => {
      const baccTexts = screen.getAllByText(/BACP Registered/i);
      expect(baccTexts.length).toBeGreaterThan(0);
    });

    it('shows psychodynamic training', () => {
      expect(screen.getByText(/Psychodynamic Training/i)).toBeInTheDocument();
    });

    it('displays CTABlock section', () => {
      expect(screen.getByText(/Let's see if we're the right fit/i)).toBeInTheDocument();
    });

    it('has book now link in CTABlock', () => {
      const link = screen.getByRole('link', { name: /Book Now/i });
      expect(link).toHaveAttribute('href', '/book-now');
    });

    it('renders LocalBusiness schema', () => {
      const { container } = render(<TrustPage />);
      const scripts = container.querySelectorAll('script[type="application/ld+json"]');
      const schemas = Array.from(scripts).flatMap((script) => {
        const data = JSON.parse(script.textContent || '{}');
        if (data['@graph']) {
          return data['@graph'];
        }
        return [data];
      });

      const localBusinessSchema = schemas.find((s) => s['@type'] === 'LocalBusiness');
      expect(localBusinessSchema).toBeDefined();
      expect(localBusinessSchema?.name).toBe('Next Generation Therapy');
    });
  });

  describe('Youth Family FAQ Page', () => {
    beforeEach(() => {
      render(<YouthFamilyFAQ />);
    });

    it('renders the page with PageHero eyebrow', () => {
      expect(screen.getByText(/Youth & Family FAQ/i)).toBeInTheDocument();
    });

    it('renders the main heading', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/Questions from young people and families/i);
    });

    it('displays age groups question', () => {
      expect(screen.getByText(/What age groups do you work with\?/i)).toBeInTheDocument();
    });

    it('displays child therapy question', () => {
      expect(screen.getByText(/How do I know if my child needs therapy\?/i)).toBeInTheDocument();
    });

    it('mentions play therapy', () => {
      const playTherapyTexts = screen.getAllByText(/play.*therapy/i);
      expect(playTherapyTexts.length).toBeGreaterThan(0);
    });

    it('mentions young adults', () => {
      const youngAdultTexts = screen.getAllByText(/young adult/i);
      expect(youngAdultTexts.length).toBeGreaterThan(0);
    });

    it('has related service links', () => {
      // The page links to related services - check any link exists
      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(0);
    });

    it('has CTABlock section', () => {
      expect(screen.getByText(/Let's see if we're the right fit/i)).toBeInTheDocument();
    });

    it('renders FAQPage schema', () => {
      const { container } = render(<YouthFamilyFAQ />);
      const scripts = container.querySelectorAll('script[type="application/ld+json"]');
      const schemas = Array.from(scripts).flatMap((script) => {
        const data = JSON.parse(script.textContent || '{}');
        if (data['@graph']) {
          return data['@graph'];
        }
        return [data];
      });

      const faqSchema = schemas.find((s) => s['@type'] === 'FAQPage');
      expect(faqSchema).toBeDefined();
      expect(faqSchema?.mainEntity?.length).toBeGreaterThan(0);
    });
  });
});
