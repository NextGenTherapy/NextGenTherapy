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
      expect(screen.getByText(/fees & booking/i)).toBeInTheDocument();
    });

    it('renders the main heading', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/£60 per 50-minute session/i);
    });

    it('renders the lead text', () => {
      expect(screen.getByText(/honest breakdown/i)).toBeInTheDocument();
    });
  });

  describe("What's Included Section", () => {
    it('displays what is included heading', () => {
      expect(screen.getByRole('heading', { name: /what's included in £60/i })).toBeInTheDocument();
    });

    it('lists included features', () => {
      expect(screen.getByText(/full 50-minute session/i)).toBeInTheDocument();
      expect(screen.getByText(/bacp registered/i)).toBeInTheDocument();
      expect(screen.getByText(/weekly slot held for you/i)).toBeInTheDocument();
      expect(screen.getByText(/sensory-aware therapy room/i)).toBeInTheDocument();
      expect(screen.getByText(/worksheets and prompts/i)).toBeInTheDocument();
      expect(screen.getByText(/email contact for logistics/i)).toBeInTheDocument();
      expect(screen.getByText(/clinical supervision/i)).toBeInTheDocument();
    });
  });

  describe('Free 15-Minute Call Section', () => {
    it('displays free call heading', () => {
      expect(screen.getByRole('heading', { name: /the free 15-minute call/i })).toBeInTheDocument();
    });

    it('describes what the call is', () => {
      const freeMatches = screen.getAllByText(/genuinely free/i);
      expect(freeMatches.length).toBeGreaterThan(0);
      const noCommitmentMatches = screen.getAllByText(/no commitment/i);
      expect(noCommitmentMatches.length).toBeGreaterThan(0);
    });

    it('explains what it is and what it is not', () => {
      expect(screen.getByRole('heading', { name: /what it is$/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /what it isn't/i })).toBeInTheDocument();
    });
  });

  describe('How Booking Works Section', () => {
    it('displays how booking works heading', () => {
      expect(screen.getByRole('heading', { name: /how booking works/i })).toBeInTheDocument();
    });

    it('shows booking steps', () => {
      const getInTouchMatches = screen.getAllByText(/get in touch/i);
      expect(getInTouchMatches.length).toBeGreaterThan(0);
      const freeCallMatches = screen.getAllByText(/free 15-minute call/i);
      expect(freeCallMatches.length).toBeGreaterThan(0);
      const firstSessionMatches = screen.getAllByText(/first session/i);
      expect(firstSessionMatches.length).toBeGreaterThan(0);
      const weeklyMatches = screen.getAllByText(/weekly sessions/i);
      expect(weeklyMatches.length).toBeGreaterThan(0);
    });
  });

  describe('Cancellation Section', () => {
    it('displays cancellation heading', () => {
      expect(
        screen.getByRole('heading', { name: /cancellation and missed sessions/i })
      ).toBeInTheDocument();
    });

    it('explains cancellation policy', () => {
      expect(screen.getByText(/non-refundable/i)).toBeInTheDocument();
      expect(screen.getByText(/full £60 is still charged/i)).toBeInTheDocument();
    });
  });

  describe('Payment Section', () => {
    it('displays payment heading', () => {
      expect(screen.getByRole('heading', { name: /^payment$/i })).toBeInTheDocument();
    });

    it('explains payment method', () => {
      expect(screen.getByText(/bank transfer/i)).toBeInTheDocument();
    });
  });

  describe("What I Don't Offer Section", () => {
    it('displays what not offered heading', () => {
      expect(screen.getByRole('heading', { name: /what i don't offer/i })).toBeInTheDocument();
    });

    it('lists what is not offered', () => {
      expect(screen.getByText(/sliding scale/i)).toBeInTheDocument();
      expect(screen.getByText(/insurance billing/i)).toBeInTheDocument();
      expect(screen.getByText(/sessions shorter than 50 minutes/i)).toBeInTheDocument();
      expect(screen.getByText(/pay-as-you-go/i)).toBeInTheDocument();
    });
  });

  describe('Call to Action', () => {
    it('renders book free call link', () => {
      const links = screen.getAllByRole('link', { name: /book a free 15-minute call/i });
      expect(links.length).toBeGreaterThan(0);
      expect(links[0]).toHaveAttribute('href', '/book-now');
    });

    it('displays CTA section heading', () => {
      const ctaHeading = screen.getByRole('heading', {
        name: /^book a free 15-minute call$/i,
      });
      expect(ctaHeading).toBeInTheDocument();
    });
  });

  describe('JSON-LD Schema', () => {
    it('renders Offer schema', () => {
      const { container } = render(<Pricing />);
      const script = container.querySelector('script[type="application/ld+json"]');
      const schema = JSON.parse(script?.textContent || '{}');

      expect(schema['@type']).toBe('Offer');
      expect(schema.name).toBe('Psychodynamic Therapy Session');
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
