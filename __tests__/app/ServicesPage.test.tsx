import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Services from '../../src/app/services/page';

// Mock Next.js components
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

jest.mock('next/navigation', () => ({
  usePathname: () => '/services',
}));

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

describe('Services Page', () => {
  beforeEach(() => {
    render(<Services />);
  });

  describe('Page Structure', () => {
    it('renders the page hero with correct eyebrow', () => {
      expect(screen.getByText(/What I Work With/i)).toBeInTheDocument();
    });

    it('renders the main heading', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(
        /Therapy for women, neurodivergent adults, teenagers, and children/i
      );
    });

    it('renders the lead text', () => {
      expect(
        screen.getByText(/I'm a psychodynamic therapist in Colchester and online/i)
      ).toBeInTheDocument();
    });
  });

  describe('Service Cards', () => {
    it('renders therapy for women card with correct link', () => {
      const link = screen.getByRole('link', { name: /Therapy for women/i });
      expect(link).toHaveAttribute('href', '/therapy-for-women');
      expect(screen.getByText(/overthinking, burnout, self-esteem/i)).toBeInTheDocument();
    });

    it('renders neurodiversity card with correct link', () => {
      const link = screen.getByRole('link', { name: /ADHD and autism in adults/i });
      expect(link).toHaveAttribute('href', '/neurodiversity');
      expect(screen.getByText(/Affirmative therapy for late-diagnosed/i)).toBeInTheDocument();
    });

    it('renders teen therapy card with correct link', () => {
      const link = screen.getByRole('link', { name: /Therapy for teenagers/i });
      expect(link).toHaveAttribute('href', '/teen-therapy');
      expect(screen.getByText(/Ages 13-17/i)).toBeInTheDocument();
    });

    it('renders child therapy card with correct link', () => {
      const link = screen.getByRole('link', { name: /Therapy for children/i });
      expect(link).toHaveAttribute('href', '/child-therapy');
      expect(screen.getByText(/Ages 4-12/i)).toBeInTheDocument();
    });

    it('renders Romanian therapy card with correct link', () => {
      const link = screen.getByRole('link', { name: /Therapy in Romanian/i });
      expect(link).toHaveAttribute('href', '/romanian-therapy');
      expect(screen.getByText(/Terapie în limba română/i)).toBeInTheDocument();
    });

    it('renders online therapy card with correct link', () => {
      const link = screen.getByRole('link', { name: /Online therapy/i });
      expect(link).toHaveAttribute('href', '/online-therapy');
      expect(screen.getByText(/Mon, Tue, Wed, Fri/i)).toBeInTheDocument();
    });
  });

  describe('What I Do Not Offer Section', () => {
    it('renders the section heading', () => {
      expect(screen.getByText(/What I don't offer/i)).toBeInTheDocument();
    });

    it('lists services not offered', () => {
      expect(screen.getByText(/couples therapy/i)).toBeInTheDocument();
      expect(screen.getByText(/short-term CBT/i)).toBeInTheDocument();
      expect(screen.getByText(/forensic work/i)).toBeInTheDocument();
    });
  });

  describe('JSON-LD Schema', () => {
    it('renders Service schema', () => {
      const { container } = render(<Services />);
      const scripts = container.querySelectorAll('script[type="application/ld+json"]');
      const schemas = Array.from(scripts).map((script) =>
        JSON.parse(script.textContent || '{}')
      );

      const serviceSchema = schemas.find((s) => s['@type'] === 'Service');
      expect(serviceSchema).toBeDefined();
      expect(serviceSchema?.name).toBe('Psychodynamic Psychotherapy Services');
      expect(serviceSchema?.provider?.name).toBe('Andreea Horhocea');
    });

    it('renders BreadcrumbList schema', () => {
      const { container } = render(<Services />);
      const scripts = container.querySelectorAll('script[type="application/ld+json"]');
      const schemas = Array.from(scripts).map((script) =>
        JSON.parse(script.textContent || '{}')
      );

      const breadcrumbSchema = schemas.find((s) => s['@type'] === 'BreadcrumbList');
      expect(breadcrumbSchema).toBeDefined();
      expect(breadcrumbSchema?.itemListElement).toHaveLength(2);
    });

    it('does not render FAQPage schema', () => {
      const { container } = render(<Services />);
      const scripts = container.querySelectorAll('script[type="application/ld+json"]');
      const schemas = Array.from(scripts).map((script) =>
        JSON.parse(script.textContent || '{}')
      );

      const faqSchema = schemas.find((s) => s['@type'] === 'FAQPage');
      expect(faqSchema).toBeUndefined();
    });
  });
});
