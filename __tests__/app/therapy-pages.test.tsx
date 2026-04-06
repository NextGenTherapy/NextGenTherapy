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

// Mock SEO schema components
jest.mock('@/components/seo/ServiceSchema', () => ({
  ChildTherapySchema: function MockChildTherapySchema() {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@type': 'Service', name: 'ChildTherapy' }) }}
      />
    );
  },
}));

// Import after mocks
import ChildTherapyPage from '../../src/app/child-therapy/page';

describe('Therapy Pages', () => {
  describe('Child Therapy Page', () => {
    beforeEach(() => {
      render(<ChildTherapyPage />);
    });

    it('renders the page with PageHero eyebrow', () => {
      // "Child Therapy" appears in eyebrow, title, and section headings
      const matches = screen.getAllByText(/Child Therapy/i);
      expect(matches.length).toBeGreaterThan(0);
    });

    it('renders the main heading', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/Child Therapy in Colchester/i);
    });

    it('displays lead text about compassionate support', () => {
      expect(screen.getByText(/Compassionate, professional therapy support/i)).toBeInTheDocument();
    });

    describe('Content Sections', () => {
      it('displays understanding your child heading', () => {
        expect(screen.getByText(/Understanding Your Child's World/i)).toBeInTheDocument();
      });

      it('displays when to consider therapy section', () => {
        expect(screen.getByText(/When to Consider Child Therapy/i)).toBeInTheDocument();
      });

      it('displays approach section', () => {
        expect(screen.getByText(/My Approach to Child Therapy/i)).toBeInTheDocument();
      });

      it('displays common concerns heading', () => {
        expect(screen.getByText(/Common Concerns I Help Children With/i)).toBeInTheDocument();
      });
    });

    describe('Symptom Categories', () => {
      it('lists emotional challenges', () => {
        expect(screen.getByText(/Emotional Challenges/i)).toBeInTheDocument();
        expect(screen.getByText(/Persistent sadness or tearfulness/i)).toBeInTheDocument();
      });

      it('lists behavioural changes', () => {
        // "Behavioural Changes" appears in heading and in description text
        const matches = screen.getAllByText(/Behavioural Changes/i);
        expect(matches.length).toBeGreaterThan(0);
        expect(screen.getByText(/Sleep difficulties or nightmares/i)).toBeInTheDocument();
      });

      it('lists life transitions', () => {
        expect(screen.getByText(/Life Transitions/i)).toBeInTheDocument();
        // Multiple mentions of family changes exist
        const familyChanges = screen.getAllByText(/Family changes/i);
        expect(familyChanges.length).toBeGreaterThan(0);
      });
    });

    describe('Approach Points', () => {
      it('displays child-led therapy', () => {
        expect(screen.getByText(/Child-Led Therapy/i)).toBeInTheDocument();
      });

      it('displays safe space', () => {
        expect(screen.getByText(/Safe Space/i)).toBeInTheDocument();
      });

      it('displays family involvement', () => {
        expect(screen.getByText(/Family Involvement/i)).toBeInTheDocument();
      });
    });

    describe('Common Concerns Grid', () => {
      it('shows anxiety & worry', () => {
        expect(screen.getByText(/Anxiety & Worry/i)).toBeInTheDocument();
      });

      it('shows big emotions', () => {
        expect(screen.getByText(/Big Emotions/i)).toBeInTheDocument();
      });

      it('shows family changes', () => {
        const familyChanges = screen.getAllByText(/Family Changes/i);
        expect(familyChanges.length).toBeGreaterThan(0);
      });

      it('shows school difficulties', () => {
        expect(screen.getByText(/School Difficulties/i)).toBeInTheDocument();
      });

      it('shows trauma & loss', () => {
        expect(screen.getByText(/Trauma & Loss/i)).toBeInTheDocument();
      });

      it('shows self-esteem', () => {
        expect(screen.getByText(/Self-Esteem/i)).toBeInTheDocument();
      });
    });

    describe('For Parents Section', () => {
      it('displays For Parents section', () => {
        expect(screen.getByText(/For Parents/i)).toBeInTheDocument();
      });

      it('shows understanding your child card', () => {
        // Multiple headings contain "Understanding Your Child" text
        const matches = screen.getAllByText(/Understanding Your Child/i);
        expect(matches.length).toBeGreaterThan(0);
      });
    });

    describe('Practical Info', () => {
      it('displays what to expect heading', () => {
        expect(screen.getByText(/What to Expect/i)).toBeInTheDocument();
      });

      it('shows initial consultation', () => {
        expect(screen.getByText(/Initial Consultation/i)).toBeInTheDocument();
      });

      it('shows first sessions', () => {
        expect(screen.getByText(/First Sessions/i)).toBeInTheDocument();
      });

      it('shows ongoing work', () => {
        expect(screen.getByText(/Ongoing Work/i)).toBeInTheDocument();
      });

      it('shows regular reviews', () => {
        expect(screen.getByText(/Regular Reviews/i)).toBeInTheDocument();
      });
    });

    describe('Related Services', () => {
      it('displays related services section', () => {
        expect(screen.getByText(/Related Services/i)).toBeInTheDocument();
      });

      it('has teen therapy link', () => {
        const link = screen.getByRole('link', { name: /Teen Therapy/i });
        expect(link).toHaveAttribute('href', '/teen-therapy');
      });

      it('has neurodiversity link', () => {
        const link = screen.getByRole('link', { name: /Neurodiversity Support/i });
        expect(link).toHaveAttribute('href', '/neurodiversity');
      });
    });

    describe('CTA Block', () => {
      it('displays CTABlock', () => {
        expect(screen.getByText(/Ready to take the first step/i)).toBeInTheDocument();
      });

      it('has book now link', () => {
        const link = screen.getByRole('link', { name: /Book Now/i });
        expect(link).toHaveAttribute('href', '/book-now');
      });
    });

    describe('JSON-LD Schema', () => {
      it('renders BreadcrumbList schema', () => {
        const { container } = render(<ChildTherapyPage />);
        const scripts = container.querySelectorAll('script[type="application/ld+json"]');
        const schemas = Array.from(scripts).map((script) =>
          JSON.parse(script.textContent || '{}')
        );

        const breadcrumbSchema = schemas.find((s) => s['@type'] === 'BreadcrumbList');
        expect(breadcrumbSchema).toBeDefined();
        expect(breadcrumbSchema?.itemListElement).toHaveLength(3);
      });
    });
  });
});
