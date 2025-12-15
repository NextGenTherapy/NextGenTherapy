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

jest.mock('../../src/components/layout/legal-navigation', () => {
  return function MockLegalNavigation({ currentPage }: { currentPage: string }) {
    return (
      <nav data-testid="legal-navigation" data-current={currentPage}>
        Legal Navigation
      </nav>
    );
  };
});

jest.mock('../../src/components/ui/GoogleMapEmbed', () => {
  return function MockGoogleMapEmbed() {
    return <div data-testid="google-map-embed">Google Map Mock</div>;
  };
});

// Import after mocks
import Terms from '../../src/app/terms/page';
import FAQ from '../../src/app/faq/page';
import LocationPage from '../../src/app/location/page';

describe('Additional Pages', () => {
  describe('Terms Page', () => {
    beforeEach(() => {
      render(<Terms />);
    });

    it('renders the main heading', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/Terms|Conditions/i);
    });

    it('displays last updated date', () => {
      expect(screen.getByText(/Last updated:/i)).toBeInTheDocument();
    });

    it('renders legal navigation component', () => {
      const navElements = screen.getAllByTestId('legal-navigation');
      expect(navElements.length).toBeGreaterThan(0);
    });

    it('displays acceptance of terms section', () => {
      expect(screen.getByText(/Acceptance of Counselling Terms/i)).toBeInTheDocument();
    });

    it('displays use license section', () => {
      expect(screen.getByText(/Use License/i)).toBeInTheDocument();
    });

    it('displays professional services disclaimer', () => {
      expect(screen.getByText(/Professional Counselling Services Disclaimer/i)).toBeInTheDocument();
    });

    it('displays privacy section', () => {
      expect(screen.getByText(/4\. Privacy/i)).toBeInTheDocument();
    });

    it('has navigation buttons', () => {
      expect(screen.getByRole('link', { name: /Privacy Policy/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /Book Now/i })).toBeInTheDocument();
    });

    it('renders WebPage schema', () => {
      const { container } = render(<Terms />);
      const scripts = container.querySelectorAll('script[type="application/ld+json"]');
      const schemas = Array.from(scripts).map((script) =>
        JSON.parse(script.textContent || '{}')
      );

      const webPageSchema = schemas.find((s) => s['@type'] === 'WebPage');
      expect(webPageSchema).toBeDefined();
      expect(webPageSchema?.name).toBe('Terms & Conditions');
    });
  });

  describe('FAQ Page', () => {
    beforeEach(() => {
      render(<FAQ />);
    });

    it('renders the main heading', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/FAQ|Frequently Asked Questions/i);
    });

    it('displays therapy cost question', () => {
      expect(screen.getByText(/How much does therapy cost/i)).toBeInTheDocument();
    });

    it('displays online therapy question', () => {
      expect(screen.getByText(/Do you offer online therapy/i)).toBeInTheDocument();
    });

    it('displays session length question', () => {
      expect(screen.getByText(/How long does therapy take/i)).toBeInTheDocument();
    });

    it('displays confidentiality question', () => {
      expect(screen.getByText(/Is therapy confidential/i)).toBeInTheDocument();
    });

    it('displays session price in answers', () => {
      expect(screen.getByText(/£60/i)).toBeInTheDocument();
    });

    it('has book now link', () => {
      const link = screen.getByRole('link', { name: /Book.*consultation/i });
      expect(link).toBeInTheDocument();
    });

    it('renders FAQPage schema', () => {
      const { container } = render(<FAQ />);
      const scripts = container.querySelectorAll('script[type="application/ld+json"]');
      const schemas = Array.from(scripts).flatMap((script) => {
        const data = JSON.parse(script.textContent || '{}');
        // Handle @graph structure
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

  describe('Location Page', () => {
    beforeEach(() => {
      render(<LocationPage />);
    });

    it('renders the main heading', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/Location|Find|Contact/i);
    });

    it('displays address', () => {
      // Multiple mentions exist, check at least one
      const addressTexts = screen.getAllByText(/Colchester Business Centre/i);
      expect(addressTexts.length).toBeGreaterThan(0);
      const streetTexts = screen.getAllByText(/George Williams Way/i);
      expect(streetTexts.length).toBeGreaterThan(0);
    });

    it('displays postcode', () => {
      const postcodes = screen.getAllByText(/CO1 2JS/i);
      expect(postcodes.length).toBeGreaterThan(0);
    });

    it('displays parking information', () => {
      const parkingTexts = screen.getAllByText(/parking/i);
      expect(parkingTexts.length).toBeGreaterThan(0);
    });

    it('displays access information', () => {
      const accessTexts = screen.getAllByText(/accessible/i);
      expect(accessTexts.length).toBeGreaterThan(0);
    });

    it('renders Google Map embed', () => {
      expect(screen.getByTestId('google-map-embed')).toBeInTheDocument();
    });

    it('has book now link', () => {
      const link = screen.getByRole('link', { name: /Book Appointment/i });
      expect(link).toHaveAttribute('href', '/book-now');
    });

    it('has contact email link', () => {
      const link = screen.getByRole('link', { name: /andreeatherapytoday@gmail\.com/i });
      expect(link).toHaveAttribute('href', 'mailto:andreeatherapytoday@gmail.com');
    });

    it('has contact phone link', () => {
      const link = screen.getByRole('link', { name: /\+44 7448 036017/i });
      expect(link).toHaveAttribute('href', 'tel:+447448036017');
    });

    it('renders Place schema', () => {
      const { container } = render(<LocationPage />);
      const scripts = container.querySelectorAll('script[type="application/ld+json"]');
      const schemas = Array.from(scripts).map((script) =>
        JSON.parse(script.textContent || '{}')
      );

      const placeSchema = schemas.find((s) => s['@type'] === 'Place');
      expect(placeSchema).toBeDefined();
      expect(placeSchema?.name).toBe('Next Generation Therapy');
    });
  });
});
