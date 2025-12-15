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
import ParentSupportPage from '../../src/app/parent-support/page';
import PrivacyPolicy from '../../src/app/privacy-policy/page';

describe('Content Pages', () => {
  describe('Parent Support Page', () => {
    beforeEach(() => {
      render(<ParentSupportPage />);
    });

    it('renders the main heading', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/Parent Support and Guidance/i);
    });

    it('displays subtitle about support', () => {
      expect(
        screen.getByText(/Supporting you as you support your child/i)
      ).toBeInTheDocument();
    });

    it('displays introduction section', () => {
      expect(screen.getByText(/You're Not Alone in This Journey/i)).toBeInTheDocument();
    });

    it('displays what parent support includes section', () => {
      expect(screen.getByText(/What Parent Support and Guidance Includes/i)).toBeInTheDocument();
    });

    it('shows understanding your child section', () => {
      expect(screen.getByText(/Understanding Your Child's Experience/i)).toBeInTheDocument();
    });

    it('shows communication strategies', () => {
      expect(screen.getByText(/Communication Strategies/i)).toBeInTheDocument();
    });

    it('shows managing emotions section', () => {
      expect(screen.getByText(/Managing Your Own Emotions/i)).toBeInTheDocument();
    });

    it('displays common concerns section', () => {
      expect(screen.getByText(/Common Concerns I Help Parents With/i)).toBeInTheDocument();
    });

    it('displays age-specific guidance section', () => {
      expect(screen.getByText(/Age-Specific Parenting Guidance/i)).toBeInTheDocument();
    });

    it('shows all age groups', () => {
      expect(screen.getByText(/Early Childhood \(Ages 3-7\)/i)).toBeInTheDocument();
      expect(screen.getByText(/School Age \(Ages 8-12\)/i)).toBeInTheDocument();
      expect(screen.getByText(/Adolescence \(Ages 13-18\)/i)).toBeInTheDocument();
      expect(screen.getByText(/Young Adults \(Ages 18-25\)/i)).toBeInTheDocument();
    });

    it('displays self-care section', () => {
      expect(screen.getByText(/The Importance of Parent Self-Care/i)).toBeInTheDocument();
    });

    it('displays approach section', () => {
      expect(screen.getByText(/How I Work with Parents/i)).toBeInTheDocument();
    });

    it('displays when to seek support section', () => {
      expect(screen.getByText(/When to Seek Parent Support/i)).toBeInTheDocument();
    });

    it('displays call to action', () => {
      expect(screen.getByText(/Ready to Get Support\?/i)).toBeInTheDocument();
    });

    it('has book consultation link', () => {
      const link = screen.getByRole('link', { name: /Book a Consultation/i });
      expect(link).toHaveAttribute('href', '/contact');
    });

    it('displays related services section', () => {
      expect(screen.getByText(/Related Services/i)).toBeInTheDocument();
    });

    it('renders Service schema', () => {
      const { container } = render(<ParentSupportPage />);
      const scripts = container.querySelectorAll('script[type="application/ld+json"]');
      const schemas = Array.from(scripts).map((script) =>
        JSON.parse(script.textContent || '{}')
      );

      const serviceSchema = schemas.find((s) => s['@type'] === 'Service');
      expect(serviceSchema).toBeDefined();
      expect(serviceSchema?.name).toBe('Parent Support and Guidance');
    });
  });

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
