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
    it('renders the main heading', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/About Me/i);
    });

    it('renders the main image', () => {
      const image = screen.getByAltText(/Andreea Horhocea - Psychodynamic Psychotherapist/i);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', '/images/andreea.jpg');
    });

    it('renders the greeting section', () => {
      expect(screen.getByText(/Hi There/i)).toBeInTheDocument();
      expect(screen.getByText(/It's lovely to meet you/i)).toBeInTheDocument();
    });
  });

  describe('Content Sections', () => {
    it('displays therapist qualifications', () => {
      expect(
        screen.getByText(/psychodynamic psychotherapist with a Master's degree/i)
      ).toBeInTheDocument();
    });

    it('displays approach section', () => {
      expect(screen.getByText(/My Approach/i)).toBeInTheDocument();
      expect(
        screen.getByText(/I created this space to offer a therapeutic experience/i)
      ).toBeInTheDocument();
    });

    it('displays practice section', () => {
      expect(screen.getByText(/A Place to Begin/i)).toBeInTheDocument();
    });

    it('mentions BACP registration', () => {
      expect(
        screen.getByText(/British Association for Counselling and Psychotherapy/i)
      ).toBeInTheDocument();
    });
  });

  describe('Gallery Section', () => {
    it('renders therapy environment heading', () => {
      expect(screen.getByText(/My Therapy Environment/i)).toBeInTheDocument();
    });

    it('renders gallery images', () => {
      const galleryImages = [
        'Picture of office with laptop',
        'Picture of doll house for play therapy for children',
        'Picture of shelves including games for children to play with',
      ];

      galleryImages.forEach((alt) => {
        expect(screen.getByAltText(alt)).toBeInTheDocument();
      });
    });
  });

  describe('Navigation Links', () => {
    it('renders About Therapy link', () => {
      const link = screen.getByRole('link', { name: /About Therapy/i });
      expect(link).toHaveAttribute('href', '/about-therapy');
    });

    it('renders Services link', () => {
      const link = screen.getByRole('link', { name: /Services/i });
      expect(link).toHaveAttribute('href', '/services');
    });

    it('renders Book Now link', () => {
      const link = screen.getByRole('link', { name: /Book Now/i });
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
