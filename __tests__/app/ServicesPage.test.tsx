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
    it('renders the main heading', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/Colchester Therapist/i);
    });

    it('renders professional intro', () => {
      expect(
        screen.getByText(/Experienced therapist serving Colchester/i)
      ).toBeInTheDocument();
    });
  });

  describe('Services Overview', () => {
    it('displays who I work with heading', () => {
      expect(screen.getByText(/Who I Work With & What I Help With/i)).toBeInTheDocument();
    });

    it('lists supported groups', () => {
      expect(screen.getByText(/Children and young people seeking therapy/i)).toBeInTheDocument();
      expect(screen.getByText(/Adults experiencing anxiety/i)).toBeInTheDocument();
      expect(screen.getByText(/LGBTQ\+ individuals and couples/i)).toBeInTheDocument();
    });

    it('lists areas of help', () => {
      expect(screen.getByText(/Anxiety & overwhelm/i)).toBeInTheDocument();
      expect(screen.getByText(/Self-esteem & confidence/i)).toBeInTheDocument();
      expect(screen.getByText(/Relationship patterns/i)).toBeInTheDocument();
    });
  });

  describe('Service Types', () => {
    it('displays play therapy section', () => {
      expect(screen.getByText(/Play Therapy for Children in Colchester/i)).toBeInTheDocument();
      // Multiple £60 mentions exist, just check one exists
      const priceElements = screen.getAllByText(/£60 for the therapeutic hour/i);
      expect(priceElements.length).toBeGreaterThan(0);
    });

    it('displays adult therapy section', () => {
      expect(
        screen.getByText(/Adult Therapy in Colchester - Online & In-Person/i)
      ).toBeInTheDocument();
    });
  });

  describe('Age-Specific Services', () => {
    it('renders all age group cards', () => {
      expect(screen.getByText(/Child Therapy \(Ages 5-12\)/i)).toBeInTheDocument();
      expect(screen.getByText(/Teenage Therapy \(Ages 13-17\)/i)).toBeInTheDocument();
      expect(screen.getByText(/Young Adult Therapy \(Ages 18-30\)/i)).toBeInTheDocument();
    });

    it('renders specialized service cards', () => {
      expect(screen.getByText(/Neurodiversity & SEN Support/i)).toBeInTheDocument();
      expect(screen.getByText(/LGBTQ\+ Inclusive Therapy/i)).toBeInTheDocument();
      expect(screen.getByText(/Parent Support & Guidance/i)).toBeInTheDocument();
    });

    it('links to child therapy page', () => {
      const link = screen.getByRole('link', { name: /Learn More About Child Therapy/i });
      expect(link).toHaveAttribute('href', '/child-therapy');
    });

    it('links to teenage therapy page', () => {
      const link = screen.getByRole('link', { name: /Learn More About Teenage Therapy/i });
      expect(link).toHaveAttribute('href', '/teenage-therapy');
    });
  });

  describe('FAQ Section', () => {
    it('renders FAQ heading', () => {
      expect(screen.getByText(/Frequently Asked Questions/i)).toBeInTheDocument();
    });

    it('includes key FAQ questions', () => {
      expect(
        screen.getByText(/What should I expect in my first therapy session/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/How long are therapy sessions\?/i)).toBeInTheDocument();
      expect(screen.getByText(/Is everything I say confidential\?/i)).toBeInTheDocument();
    });
  });

  describe('Location Coverage', () => {
    it('displays location coverage section', () => {
      expect(screen.getByText(/Therapy Coverage Areas/i)).toBeInTheDocument();
    });

    it('shows in-person services', () => {
      expect(screen.getByText(/In-Person Therapy in Colchester/i)).toBeInTheDocument();
    });

    it('shows online services', () => {
      // Multiple mentions may exist
      const onlineTexts = screen.getAllByText(/Online Therapy Sessions/i);
      expect(onlineTexts.length).toBeGreaterThan(0);
    });
  });

  describe('Credentials Section', () => {
    it('displays credentials heading', () => {
      expect(screen.getByText(/Why Choose Our Colchester Therapy Practice/i)).toBeInTheDocument();
    });

    it('shows BACP registration', () => {
      expect(screen.getByText(/BACP Registered/i)).toBeInTheDocument();
    });

    it('shows local expertise', () => {
      expect(screen.getByText(/Local Expertise/i)).toBeInTheDocument();
    });

    it('shows specialized training', () => {
      expect(screen.getByText(/Specialized Training/i)).toBeInTheDocument();
    });
  });

  describe('Navigation Links', () => {
    it('renders About Therapy link', () => {
      const links = screen.getAllByRole('link', { name: /About Therapy/i });
      expect(links.length).toBeGreaterThan(0);
      expect(links[0]).toHaveAttribute('href', '/about-therapy');
    });

    it('renders Book Now link', () => {
      const links = screen.getAllByRole('link', { name: /Book Now/i });
      expect(links.length).toBeGreaterThan(0);
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
    });

    it('renders FAQPage schema', () => {
      const { container } = render(<Services />);
      const scripts = container.querySelectorAll('script[type="application/ld+json"]');
      const schemas = Array.from(scripts).map((script) =>
        JSON.parse(script.textContent || '{}')
      );

      const faqSchema = schemas.find((s) => s['@type'] === 'FAQPage');
      expect(faqSchema).toBeDefined();
      expect(faqSchema?.mainEntity?.length).toBeGreaterThan(0);
    });

    it('renders BreadcrumbList schema', () => {
      const { container } = render(<Services />);
      const scripts = container.querySelectorAll('script[type="application/ld+json"]');
      const schemas = Array.from(scripts).map((script) =>
        JSON.parse(script.textContent || '{}')
      );

      const breadcrumbSchema = schemas.find((s) => s['@type'] === 'BreadcrumbList');
      expect(breadcrumbSchema).toBeDefined();
    });
  });
});
