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
    it('renders the main heading', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/Book a Therapist in Colchester/i);
    });

    it('renders hero image', () => {
      const image = screen.getByAltText(
        /Book therapy session in Colchester/i
      );
      expect(image).toBeInTheDocument();
    });
  });

  describe('Content Sections', () => {
    it('displays ready to take the first step heading', () => {
      expect(screen.getByText(/Ready to Take the First Step\?/i)).toBeInTheDocument();
    });

    it('displays free consultation offer', () => {
      expect(screen.getByText(/Free 15-Minute Consultation Available/i)).toBeInTheDocument();
    });

    it('describes the no-obligation consultation', () => {
      expect(
        screen.getByText(/Not sure if therapy is right for you\?/i)
      ).toBeInTheDocument();
    });
  });

  describe('Trust Section', () => {
    it('displays professional qualifications', () => {
      expect(screen.getByText(/Professional Qualifications/i)).toBeInTheDocument();
    });

    it('shows BACP registration', () => {
      expect(screen.getByText(/BACP Registered Member/i)).toBeInTheDocument();
    });

    it('shows session information', () => {
      expect(screen.getByText(/Session Information/i)).toBeInTheDocument();
    });

    it('displays session price', () => {
      expect(screen.getByText(/50-minute sessions at £60/i)).toBeInTheDocument();
    });
  });

  describe('Process Section', () => {
    it('displays what happens next heading', () => {
      expect(screen.getByText(/What Happens Next\?/i)).toBeInTheDocument();
    });

    it('shows all process steps', () => {
      expect(screen.getByText(/Submit Your Enquiry/i)).toBeInTheDocument();
      expect(screen.getByText(/Initial Response/i)).toBeInTheDocument();
      expect(screen.getByText(/Free Consultation/i)).toBeInTheDocument();
      expect(screen.getByText(/Book Your Session/i)).toBeInTheDocument();
    });

    it('shows step numbers', () => {
      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByText('2')).toBeInTheDocument();
      expect(screen.getByText('3')).toBeInTheDocument();
      expect(screen.getByText('4')).toBeInTheDocument();
    });
  });

  describe('Contact Information', () => {
    it('displays contact details heading', () => {
      expect(screen.getByText(/My Contact Details/i)).toBeInTheDocument();
    });

    it('shows email contact', () => {
      const emailLink = screen.getByRole('link', {
        name: /Send an email to Andreea Therapy Today/i,
      });
      expect(emailLink).toHaveAttribute('href', 'mailto:andreeatherapytoday@gmail.com');
    });

    it('shows phone contact', () => {
      const phoneLink = screen.getByRole('link', { name: /Call Andreea Therapy Today/i });
      expect(phoneLink).toHaveAttribute('href', 'tel:07448036017');
    });

    it('displays location section', () => {
      expect(screen.getByText(/Location/i)).toBeInTheDocument();
    });

    it('shows address', () => {
      expect(
        screen.getByText(/Colchester Business Centre, 1 George Williams Way/i)
      ).toBeInTheDocument();
    });

    it('displays working hours', () => {
      expect(screen.getByText(/Working Office Hours/i)).toBeInTheDocument();
      expect(screen.getByText(/Monday - Tuesday: 10am - 7pm/i)).toBeInTheDocument();
      expect(screen.getByText(/Friday: 9am - 2pm/i)).toBeInTheDocument();
    });
  });

  describe('Contact Form Section', () => {
    it('displays contact form heading', () => {
      const heading = screen.getByRole('heading', { level: 2, name: /Contact Form/i });
      expect(heading).toBeInTheDocument();
    });

    it('shows loading state for contact form', () => {
      expect(screen.getByText(/Loading contact form.../i)).toBeInTheDocument();
    });
  });

  describe('Navigation Links', () => {
    it('renders About Therapy link', () => {
      const links = screen.getAllByRole('link', { name: /About Therapy/i });
      expect(links.length).toBeGreaterThan(0);
    });

    it('renders Services link', () => {
      const links = screen.getAllByRole('link', { name: /Services/i });
      expect(links.length).toBeGreaterThan(0);
    });
  });

  describe('Google Maps', () => {
    it('renders map iframe', () => {
      const iframe = document.querySelector('iframe');
      expect(iframe).toBeInTheDocument();
      expect(iframe).toHaveAttribute('title', 'Next Generation Therapy Location Map');
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
      expect(contactSchema?.name).toBe('Book Therapy Session');
    });

    it('includes offers in schema', () => {
      const { container } = render(<BookNow />);
      const scripts = container.querySelectorAll('script[type="application/ld+json"]');
      const schemas = Array.from(scripts).map((script) =>
        JSON.parse(script.textContent || '{}')
      );

      const contactSchema = schemas.find((s) => s['@type'] === 'ContactPage');
      expect(contactSchema?.offers).toBeDefined();
      expect(contactSchema?.offers).toHaveLength(2);
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
