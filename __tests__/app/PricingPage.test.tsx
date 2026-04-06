import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pricing from '../../src/app/pricing/page';

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

describe('Pricing Page', () => {
  beforeEach(() => {
    render(<Pricing />);
  });

  describe('Page Structure', () => {
    it('renders the page hero with eyebrow', () => {
      expect(screen.getByText(/Therapy Pricing/i)).toBeInTheDocument();
    });

    it('renders the main heading', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/Transparent, straightforward pricing/i);
    });

    it('renders the lead text', () => {
      expect(
        screen.getByText(/£60 per session.*50 minutes.*No hidden fees/i)
      ).toBeInTheDocument();
    });
  });

  describe('Pricing Information', () => {
    it('displays session price', () => {
      expect(screen.getByText('60')).toBeInTheDocument();
      expect(screen.getByText('£')).toBeInTheDocument();
    });

    it('displays session duration', () => {
      expect(screen.getByText(/50-minute sessions/i)).toBeInTheDocument();
    });

    it('displays per session text', () => {
      // "per session" appears in lead text and pricing card
      const matches = screen.getAllByText(/per session/i);
      expect(matches.length).toBeGreaterThan(0);
    });

    it('displays Therapy Sessions heading', () => {
      expect(screen.getByText('Therapy Sessions')).toBeInTheDocument();
    });
  });

  describe('Included Features', () => {
    it('displays what is included heading', () => {
      expect(screen.getByText(/What's Included:/i)).toBeInTheDocument();
    });

    it('lists included features', () => {
      expect(screen.getByText(/Full 50-minute therapy session/i)).toBeInTheDocument();
      expect(screen.getByText(/Professional psychodynamic approach/i)).toBeInTheDocument();
      expect(screen.getByText(/BACP registered therapist/i)).toBeInTheDocument();
      expect(screen.getByText(/Confidential, safe environment/i)).toBeInTheDocument();
      expect(screen.getByText(/In-person or online sessions/i)).toBeInTheDocument();
      expect(screen.getByText(/Flexible scheduling/i)).toBeInTheDocument();
    });
  });

  describe('Payment Information', () => {
    it('displays payment information heading', () => {
      expect(screen.getByText(/Payment Information/i)).toBeInTheDocument();
    });

    it('displays payment methods', () => {
      expect(screen.getByText(/Payment Methods/i)).toBeInTheDocument();
      expect(screen.getByText(/bank transfer only/i)).toBeInTheDocument();
    });

    it('displays cancellation policy', () => {
      expect(screen.getByText(/Cancellation Policy/i)).toBeInTheDocument();
      expect(screen.getByText(/24 hours notice/i)).toBeInTheDocument();
    });
  });

  describe('Value Section', () => {
    it('displays investment heading', () => {
      expect(screen.getByText(/Investment in Your Wellbeing/i)).toBeInTheDocument();
    });

    it('describes value of therapy', () => {
      expect(
        screen.getByText(/investment in your mental health/i)
      ).toBeInTheDocument();
    });
  });

  describe('Call to Action', () => {
    it('renders book your session link', () => {
      const link = screen.getByRole('link', { name: /Book Your Session/i });
      expect(link).toHaveAttribute('href', '/book-now');
    });

    it('displays booking note', () => {
      expect(
        screen.getByText(/Get in touch to arrange your first session/i)
      ).toBeInTheDocument();
    });
  });

  describe('CTA Block', () => {
    it('renders the CTA section', () => {
      expect(screen.getByText(/Ready to take the first step/i)).toBeInTheDocument();
    });

    it('renders book consultation link in CTA', () => {
      // CTA block uses "Book Now" as link text
      const bookLinks = screen.getAllByRole('link', { name: /Book.*(?:Now|Session)/i });
      expect(bookLinks.length).toBeGreaterThan(0);
    });
  });

  describe('JSON-LD Schema', () => {
    it('renders Offer schema', () => {
      const { container } = render(<Pricing />);
      const script = container.querySelector('script[type="application/ld+json"]');
      const schema = JSON.parse(script?.textContent || '{}');

      expect(schema['@type']).toBe('Offer');
      expect(schema.name).toBe('Therapy Session');
      expect(schema.price).toBe('60');
      expect(schema.priceCurrency).toBe('GBP');
    });

    it('includes seller information in schema', () => {
      const { container } = render(<Pricing />);
      const script = container.querySelector('script[type="application/ld+json"]');
      const schema = JSON.parse(script?.textContent || '{}');

      expect(schema.seller).toBeDefined();
      expect(schema.seller['@type']).toBe('LocalBusiness');
      expect(schema.seller.name).toBe('Next Generation Therapy');
    });
  });
});
