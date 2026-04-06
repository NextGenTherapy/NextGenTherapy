import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutMe from '../../src/app/about/page';

// Mock Next.js components
jest.mock('next/image', () => {
  return function MockImage(props: {
    src: string;
    alt: string;
    height?: number;
    width?: number;
    className?: string;
    priority?: boolean;
    fill?: boolean;
    sizes?: string;
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
    onClick,
  }: {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
  }) {
    if (href) {
      return <a href={href}>{children}</a>;
    }
    return (
      <button type="button" onClick={onClick}>
        {children}
      </button>
    );
  };
});

describe('About Page', () => {
  beforeEach(() => {
    render(<AboutMe />);
  });

  describe('Page Structure', () => {
    it('renders the eyebrow text', () => {
      expect(screen.getByText(/About Andreea/i)).toBeInTheDocument();
    });

    it('renders the main heading', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/Hi, I'm Andreea/i);
    });

    it('renders the main image', () => {
      const image = screen.getByAltText(/Andreea Horhocea — Psychodynamic Psychotherapist/i);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', '/images/andreea.jpg');
    });
  });

  describe('Content Sections', () => {
    it('displays why I do this work section', () => {
      expect(screen.getByRole('heading', { name: /Why I do this work/i })).toBeInTheDocument();
      expect(
        screen.getByText(/I became a therapist because I grew up without access/i)
      ).toBeInTheDocument();
    });

    it('displays training section', () => {
      expect(screen.getByText(/Where I trained and where I've worked/i)).toBeInTheDocument();
    });

    it('displays MSc qualification', () => {
      expect(screen.getByText(/MSc Psychodynamic Psychotherapy/i)).toBeInTheDocument();
      expect(screen.getByText(/University of Essex, 2020/i)).toBeInTheDocument();
    });

    it('displays BACP registration', () => {
      expect(screen.getByText(/BACP Registered Member \(MBACP\)/i)).toBeInTheDocument();
    });

    it('displays CPD training', () => {
      expect(screen.getByText(/Post-qualification training \(CPD\)/i)).toBeInTheDocument();
      expect(screen.getByText(/Neurodiversity \(ADHD and autism/i)).toBeInTheDocument();
      expect(screen.getByText(/Eating disorders/i)).toBeInTheDocument();
    });

    it('displays experience section', () => {
      expect(screen.getByText(/NHS Essex/i)).toBeInTheDocument();
      expect(screen.getByText(/Sir Bobby Robson School, Ipswich/i)).toBeInTheDocument();
      expect(screen.getByText(/Mind \(Mid & North East Essex\)/i)).toBeInTheDocument();
      expect(screen.getByText(/YMCA \(ongoing\)/i)).toBeInTheDocument();
    });
  });

  describe('How I Work Section', () => {
    it('displays how I work heading', () => {
      expect(screen.getByText(/How I work/)).toBeInTheDocument();
    });

    it('displays the approach description', () => {
      expect(screen.getByText(/I'm a psychodynamic therapist/i)).toBeInTheDocument();
    });

    it('displays who I work with', () => {
      expect(
        screen.getByText(/I work with women, neurodivergent adults, teenagers/i)
      ).toBeInTheDocument();
    });

    it('displays who I do not work with', () => {
      expect(screen.getByText(/Who I don't work with/i)).toBeInTheDocument();
      expect(screen.getByText(/couples therapy/i)).toBeInTheDocument();
    });
  });

  describe('Romanian Section', () => {
    it('displays therapy in Romanian heading', () => {
      expect(screen.getByText(/Therapy in Romanian/)).toBeInTheDocument();
    });

    it('displays Romanian CTA', () => {
      expect(screen.getByText(/Dacă preferi terapia în limba română/i)).toBeInTheDocument();
    });
  });

  describe('Navigation Links', () => {
    it('renders Book a free 15-minute call link', () => {
      const link = screen.getByRole('link', { name: /Book a free 15-minute call/i });
      expect(link).toHaveAttribute('href', '/book-now');
    });

    it('renders Romanian contact link', () => {
      const link = screen.getByRole('link', { name: /contactează-mă aici/i });
      expect(link).toHaveAttribute('href', '/book-now');
    });
  });

  describe('JSON-LD Schema', () => {
    it('renders Person schema', () => {
      const { container } = render(<AboutMe />);
      const scripts = container.querySelectorAll('script[type="application/ld+json"]');
      const schemas = Array.from(scripts).map((script) =>
        JSON.parse(script.textContent || '{}')
      );

      const personSchema = schemas.find((s) => s['@type'] === 'Person');
      expect(personSchema).toBeDefined();
      expect(personSchema?.name).toBe('Andreea Horhocea');
      expect(personSchema?.jobTitle).toBe('Psychodynamic Psychotherapist');
    });

    it('renders BreadcrumbList schema', () => {
      const { container } = render(<AboutMe />);
      const scripts = container.querySelectorAll('script[type="application/ld+json"]');
      const schemas = Array.from(scripts).map((script) =>
        JSON.parse(script.textContent || '{}')
      );

      const breadcrumbSchema = schemas.find((s) => s['@type'] === 'BreadcrumbList');
      expect(breadcrumbSchema).toBeDefined();
      expect(breadcrumbSchema?.itemListElement).toHaveLength(2);
    });
  });
});
