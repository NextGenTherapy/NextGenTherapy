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

// Import after mocks
import PrivacyPolicy from '../../src/app/privacy-policy/page';

describe('Content Pages', () => {
  describe('Privacy Policy Page', () => {
    beforeEach(() => {
      render(<PrivacyPolicy />);
    });

    it('renders the main heading', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/Therapy Privacy & Client Confidentiality/i);
    });

    it('displays last updated date', () => {
      expect(screen.getByText(/Last updated:/i)).toBeInTheDocument();
    });

    it('renders legal navigation component', () => {
      const navElements = screen.getAllByTestId('legal-navigation');
      expect(navElements.length).toBeGreaterThan(0);
    });

    it('displays information collection section', () => {
      expect(screen.getByText(/Information We Collect/i)).toBeInTheDocument();
    });

    it('describes personal information collection', () => {
      expect(screen.getByText(/Personal Information:/i)).toBeInTheDocument();
    });

    it('describes usage data collection', () => {
      expect(screen.getByText(/Usage Data:/i)).toBeInTheDocument();
    });

    it('describes cookies', () => {
      expect(screen.getByText(/Cookies:/i)).toBeInTheDocument();
    });

    it('displays data controller section', () => {
      const headings = screen.getAllByRole('heading', { level: 2 });
      const dataControllerHeading = headings.find((h) => h.textContent?.includes('Data Controller'));
      expect(dataControllerHeading).toBeInTheDocument();
    });

    it('displays legal basis section', () => {
      expect(screen.getByText(/Legal Basis for Processing/i)).toBeInTheDocument();
    });

    it('displays data retention section', () => {
      expect(screen.getByText(/Data Retention/i)).toBeInTheDocument();
    });

    it('displays third party section', () => {
      expect(screen.getByText(/Third-Party Data Processors/i)).toBeInTheDocument();
    });

    it('displays your rights section', () => {
      const headings = screen.getAllByRole('heading', { level: 2 });
      const yourRightsHeading = headings.find((h) => h.textContent?.includes('Your Rights'));
      expect(yourRightsHeading).toBeInTheDocument();
    });

    it('lists GDPR rights', () => {
      expect(screen.getByText(/Right to access:/i)).toBeInTheDocument();
      expect(screen.getByText(/Right to erasure:/i)).toBeInTheDocument();
    });

    it('displays analytics section', () => {
      expect(screen.getByText(/Analytics and Cookie Controls/i)).toBeInTheDocument();
    });

    it('displays complaints section', () => {
      expect(screen.getByText(/Complaints/i)).toBeInTheDocument();
    });

    it('displays contact section', () => {
      const headings = screen.getAllByRole('heading', { level: 2 });
      const contactHeading = headings.find((h) => h.textContent?.includes('Contact Us'));
      expect(contactHeading).toBeInTheDocument();
    });

    it('links to contact email', () => {
      const emailLinks = screen.getAllByRole('link', { name: /andreeatherapytoday@gmail\.com/i });
      expect(emailLinks.length).toBeGreaterThan(0);
      expect(emailLinks[0]).toHaveAttribute('href', 'mailto:andreeatherapytoday@gmail.com');
    });

    it('has navigation buttons', () => {
      expect(screen.getByRole('link', { name: /Terms of Service/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /Book Now/i })).toBeInTheDocument();
    });

    it('renders WebPage schema', () => {
      const { container } = render(<PrivacyPolicy />);
      const scripts = container.querySelectorAll('script[type="application/ld+json"]');
      const schemas = Array.from(scripts).map((script) =>
        JSON.parse(script.textContent || '{}')
      );

      const webPageSchema = schemas.find((s) => s['@type'] === 'WebPage');
      expect(webPageSchema).toBeDefined();
      expect(webPageSchema?.name).toBe('Privacy Policy');
    });
  });
});
