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
      expect(heading).toHaveTextContent(/Privacy Policy/i);
    });

    it('displays last updated date', () => {
      expect(screen.getByText(/Last updated:/i)).toBeInTheDocument();
    });

    it('renders legal navigation component', () => {
      const navElements = screen.getAllByTestId('legal-navigation');
      expect(navElements.length).toBeGreaterThan(0);
    });

    it('displays data controller section', () => {
      expect(screen.getByText(/1\. Data Controller/i)).toBeInTheDocument();
    });

    it('displays information collection section', () => {
      expect(screen.getByText(/2\. Information I Collect/i)).toBeInTheDocument();
    });

    it('describes website enquiries', () => {
      // Multiple instances exist in the page (heading + body text references)
      const matches = screen.getAllByText(/Website Enquiries/i);
      expect(matches.length).toBeGreaterThan(0);
    });

    it('describes therapy clients data', () => {
      expect(screen.getByText(/Therapy Clients/i)).toBeInTheDocument();
    });

    it('describes website analytics', () => {
      // Multiple instances exist (heading + references)
      const matches = screen.getAllByText(/Website Analytics/i);
      expect(matches.length).toBeGreaterThan(0);
    });

    it('displays special category data section', () => {
      expect(screen.getByText(/3\. Special Category Data/i)).toBeInTheDocument();
    });

    it('displays legal basis section', () => {
      expect(screen.getByText(/4\. Legal Basis for Processing/i)).toBeInTheDocument();
    });

    it('displays data retention section', () => {
      expect(screen.getByText(/10\. Data Retention/i)).toBeInTheDocument();
    });

    it('displays third party processors section', () => {
      expect(screen.getByText(/13\. Third-Party Processors/i)).toBeInTheDocument();
    });

    it('displays your rights section', () => {
      expect(screen.getByText(/14\. Your Rights/i)).toBeInTheDocument();
    });

    it('lists GDPR rights', () => {
      expect(screen.getByText(/Access:/i)).toBeInTheDocument();
      expect(screen.getByText(/Erasure:/i)).toBeInTheDocument();
    });

    it('displays cookies section', () => {
      expect(screen.getByText(/16\. Cookies/i)).toBeInTheDocument();
    });

    it('displays ICO complaints section', () => {
      // Multiple references exist in the privacy policy
      const matches = screen.getAllByText(/Information Commissioner/i);
      expect(matches.length).toBeGreaterThan(0);
    });

    it('displays contact section', () => {
      expect(screen.getByText(/21\. Contact/i)).toBeInTheDocument();
    });

    it('links to contact email', () => {
      const emailLinks = screen.getAllByRole('link', { name: /andreeatherapytoday@gmail\.com/i });
      expect(emailLinks.length).toBeGreaterThan(0);
      expect(emailLinks[0]).toHaveAttribute('href', 'mailto:andreeatherapytoday@gmail.com');
    });

    it('has navigation buttons', () => {
      // Terms of Service and Cookie Policy may appear multiple times (nav + body references)
      const termsLinks = screen.getAllByRole('link', { name: /Terms of Service/i });
      expect(termsLinks.length).toBeGreaterThan(0);
      const cookieLinks = screen.getAllByRole('link', { name: /Cookie Policy/i });
      expect(cookieLinks.length).toBeGreaterThan(0);
      const bookLinks = screen.getAllByRole('link', { name: /Book Now/i });
      expect(bookLinks.length).toBeGreaterThan(0);
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
