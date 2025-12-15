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
import AboutTherapy from '../../src/app/about-therapy/page';
import TrustPage from '../../src/app/trust/page';
import YouthFamilyFAQ from '../../src/app/youth-family-faq/page';

describe('Remaining Pages', () => {
  describe('About Therapy Page', () => {
    beforeEach(() => {
      render(<AboutTherapy />);
    });

    it('renders the main heading', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/Professional Therapy in Colchester/i);
    });

    it('displays why therapy section', () => {
      expect(screen.getByText(/Why do people seek therapy\?/i)).toBeInTheDocument();
    });

    it('displays how therapy helps section', () => {
      expect(screen.getByText(/How Can Therapy Help\?/i)).toBeInTheDocument();
    });

    it('displays subtitle', () => {
      expect(screen.getByText(/Discover the benefits of therapy/i)).toBeInTheDocument();
    });

    it('displays image', () => {
      const image = screen.getByAltText(/Visual representation of stress/i);
      expect(image).toBeInTheDocument();
    });

    it('has navigation links', () => {
      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(0);
    });

    it('renders WebPage schema', () => {
      const { container } = render(<AboutTherapy />);
      const scripts = container.querySelectorAll('script[type="application/ld+json"]');
      const schemas = Array.from(scripts).map((script) =>
        JSON.parse(script.textContent || '{}')
      );

      const webPageSchema = schemas.find((s) => s['@type'] === 'WebPage');
      expect(webPageSchema).toBeDefined();
      expect(webPageSchema?.name).toBe('About Therapy');
    });
  });

  describe('Trust Page', () => {
    beforeEach(() => {
      render(<TrustPage />);
    });

    it('renders the main heading', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/Trust|Professional Care/i);
    });

    it('displays subtitle', () => {
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

    it('displays call to action', () => {
      expect(screen.getByText(/Ready to Begin Your Journey\?/i)).toBeInTheDocument();
    });

    it('has book consultation link', () => {
      const link = screen.getByRole('link', { name: /Book Free Consultation/i });
      expect(link).toHaveAttribute('href', '/book-now');
    });

    it('has about link', () => {
      const link = screen.getByRole('link', { name: /Learn About My Approach/i });
      expect(link).toHaveAttribute('href', '/about');
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

    it('renders the main heading', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/Youth.*Family.*FAQ|Frequently Asked Questions/i);
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
