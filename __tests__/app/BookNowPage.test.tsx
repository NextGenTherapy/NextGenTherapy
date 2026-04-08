import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookNow from '../../src/app/book-now/page';

// Mock Next.js components
jest.mock('next/image', () => {
  return function MockImage(props: {
    src: string;
    alt: string;
    height?: number;
    width?: number;
    className?: string;
    priority?: boolean;
  }) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={props.src} alt={props.alt} className={props.className} />;
  };
});

jest.mock('next/link', () => {
  return function MockLink({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) {
    return <a href={href}>{children}</a>;
  };
});

jest.mock('next/navigation', () => ({
  usePathname: () => '/book-now',
}));

jest.mock('next/dynamic', () => {
  return function mockDynamic(
    importFn: () => Promise<{ default: React.ComponentType }>,
    options?: { loading?: () => React.ReactNode }
  ) {
    const Loading = options?.loading;
    return function DynamicComponent() {
      return Loading ? <Loading /> : <div data-testid="contact-form">Contact Form Mock</div>;
    };
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

describe('Book Now Page', () => {
  beforeEach(() => {
    render(<BookNow />);
  });

  describe('Page Structure', () => {
    it('renders the page hero eyebrow', () => {
      expect(screen.getByText(/book a free 15-minute call/i)).toBeInTheDocument();
    });

    it('renders the main heading', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/let's start with a free call/i);
    });

    it('renders the lead text describing the call', () => {
      expect(screen.getByText(/informal conversation/i)).toBeInTheDocument();
    });
  });

  describe('What Happens Next Section', () => {
    it('displays what happens after section heading', () => {
      expect(screen.getByText(/what happens after you send this/i)).toBeInTheDocument();
    });

    it('shows the process steps', () => {
      const workingDaysMatches = screen.getAllByText(/1–2 working days/i);
      expect(workingDaysMatches.length).toBeGreaterThan(0);
      expect(screen.getByText(/we'll have the call/i)).toBeInTheDocument();
      expect(screen.getByText(/decide together/i)).toBeInTheDocument();
    });
  });

  describe('Contact Form Section', () => {
    it('displays send enquiry heading', () => {
      const heading = screen.getByRole('heading', { name: /send an enquiry/i });
      expect(heading).toBeInTheDocument();
    });

    it('shows loading state for contact form', () => {
      expect(screen.getByText(/loading contact form/i)).toBeInTheDocument();
    });
  });

  describe('Direct Contact Section', () => {
    it('displays or reach me directly heading', () => {
      expect(screen.getByText(/or reach me directly/i)).toBeInTheDocument();
    });

    it('shows email contact', () => {
      const emailLink = screen.getByRole('link', { name: /andreeatherapytoday@gmail\.com/i });
      expect(emailLink).toHaveAttribute('href', 'mailto:andreeatherapytoday@gmail.com');
    });

    it('shows phone contact', () => {
      const phoneLink = screen.getByRole('link', { name: /\+44 7448 036017/i });
      expect(phoneLink).toHaveAttribute('href', 'tel:+447448036017');
    });
  });

  describe('Location Section', () => {
    it('displays where to find me heading', () => {
      expect(screen.getByText(/where to find me/i)).toBeInTheDocument();
    });

    it('shows in-person session info', () => {
      expect(screen.getByText(/in-person sessions/i)).toBeInTheDocument();
      expect(screen.getByText(/colchester business centre/i)).toBeInTheDocument();
    });

    it('shows online session info', () => {
      const onlineMatches = screen.getAllByText(/online/i);
      expect(onlineMatches.length).toBeGreaterThan(0);
      expect(screen.getByText(/uk-wide/i)).toBeInTheDocument();
    });

    it('has Google Maps link', () => {
      const mapsLink = screen.getByRole('link', { name: /view on google maps/i });
      expect(mapsLink).toHaveAttribute(
        'href',
        expect.stringContaining('google.com/maps')
      );
    });
  });

  describe('Crisis Information', () => {
    it('displays emergency section heading', () => {
      expect(screen.getByText(/if this is an emergency/i)).toBeInTheDocument();
    });

    it('shows NHS 111 information', () => {
      expect(screen.getByText(/nhs 111/i)).toBeInTheDocument();
    });

    it('shows Samaritans information', () => {
      const samaritansMatches = screen.getAllByText(/samaritans/i);
      expect(samaritansMatches.length).toBeGreaterThan(0);
      expect(screen.getByText(/116 123/)).toBeInTheDocument();
    });

    it('shows A&E information', () => {
      // A&E heading is rendered as "A&E"
      const aeHeadings = screen.getAllByRole('heading', { level: 3 });
      const aeHeading = aeHeadings.find((h) => h.textContent === 'A&E');
      expect(aeHeading).toBeDefined();
    });
  });

  describe('Navigation Links', () => {
    it('renders link to is this right for you page', () => {
      const link = screen.getByRole('link', { name: /read about who i work with/i });
      expect(link).toHaveAttribute('href', '/is-this-right-for-you');
    });
  });

  describe('JSON-LD Schema', () => {
    it('renders ContactPage schema', () => {
      const { container } = render(<BookNow />);
      const scripts = container.querySelectorAll('script[type="application/ld+json"]');
      const schemas = Array.from(scripts).map((script) =>
        JSON.parse(script.textContent || '{}')
      );

      const contactSchema = schemas.find((s) => s['@type'] === 'ContactPage');
      expect(contactSchema).toBeDefined();
      expect(contactSchema?.name).toBe('Book a Free 15-Minute Call');
    });

    it('includes offer in schema', () => {
      const { container } = render(<BookNow />);
      const scripts = container.querySelectorAll('script[type="application/ld+json"]');
      const schemas = Array.from(scripts).map((script) =>
        JSON.parse(script.textContent || '{}')
      );

      const contactSchema = schemas.find((s) => s['@type'] === 'ContactPage');
      expect(contactSchema?.offers).toBeDefined();
      expect(contactSchema?.offers['@type']).toBe('Offer');
      expect(contactSchema?.offers.price).toBe('0');
    });

    it('renders BreadcrumbList schema', () => {
      const { container } = render(<BookNow />);
      const scripts = container.querySelectorAll('script[type="application/ld+json"]');
      const schemas = Array.from(scripts).map((script) =>
        JSON.parse(script.textContent || '{}')
      );

      const breadcrumbSchema = schemas.find((s) => s['@type'] === 'BreadcrumbList');
      expect(breadcrumbSchema).toBeDefined();
    });
  });
});
