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

describe('Pricing Page', () => {
  beforeEach(() => {
    render(<Pricing />);
  });

  describe('Page Structure', () => {
    it('renders the main heading', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/Therapy Pricing/i);
    });

    it('renders the subtitle', () => {
      expect(
        screen.getByText(/Transparent, straightforward pricing/i)
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
      expect(screen.getByText(/per session/i)).toBeInTheDocument();
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

  describe('Free Consultation', () => {
    it('displays free consultation section', () => {
      expect(screen.getByText(/Free Initial Consultation/i)).toBeInTheDocument();
    });

    it('describes the consultation offer', () => {
      expect(
        screen.getByText(/free 15-20 minute consultation/i)
      ).toBeInTheDocument();
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
        screen.getByText(/Contact me to arrange your free consultation/i)
      ).toBeInTheDocument();
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
