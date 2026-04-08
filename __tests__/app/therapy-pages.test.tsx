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
      const eyebrowMatches = screen.getAllByText(/therapy for children/i);
      expect(eyebrowMatches.length).toBeGreaterThan(0);
    });

    it('renders the main heading', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/when something's not quite right/i);
    });

    it('displays lead text about play-based therapy', () => {
      const playBasedMatches = screen.getAllByText(/play-based/i);
      expect(playBasedMatches.length).toBeGreaterThan(0);
      const ageMatches = screen.getAllByText(/4–12/i);
      expect(ageMatches.length).toBeGreaterThan(0);
    });

    describe('Content Sections', () => {
      it('displays when parents bring children section', () => {
        expect(screen.getByText(/when parents bring children to me/i)).toBeInTheDocument();
      });

      it('displays what I often work with section', () => {
        expect(screen.getByRole('heading', { name: /what i often work with/i })).toBeInTheDocument();
      });

      it('displays how I work with younger children section', () => {
        expect(screen.getByRole('heading', { name: /how i work with younger children/i })).toBeInTheDocument();
      });

      it('displays what sessions look like section', () => {
        expect(screen.getByRole('heading', { name: /what sessions actually look like/i })).toBeInTheDocument();
      });
    });

    describe('What I Work With List', () => {
      it('lists anxiety and worry', () => {
        expect(screen.getByText(/anxiety and worry/i)).toBeInTheDocument();
      });

      it('lists school-related difficulties', () => {
        expect(screen.getByText(/school-related difficulties/i)).toBeInTheDocument();
      });

      it('lists family transitions', () => {
        const matches = screen.getAllByText(/family transitions/i);
        expect(matches.length).toBeGreaterThan(0);
      });

      it('lists behavioural changes', () => {
        const matches = screen.getAllByText(/behavioural changes/i);
        expect(matches.length).toBeGreaterThan(0);
      });

      it('lists sleep difficulties', () => {
        expect(screen.getByText(/sleep difficulties/i)).toBeInTheDocument();
      });

      it('lists neurodiversity', () => {
        const matches = screen.getAllByText(/neurodiversity/i);
        expect(matches.length).toBeGreaterThan(0);
        expect(screen.getByText(/adhd, autism/i)).toBeInTheDocument();
      });

      it('lists trauma and difficult experiences', () => {
        expect(screen.getByText(/trauma and difficult experiences/i)).toBeInTheDocument();
      });

      it('lists self-confidence', () => {
        expect(screen.getByText(/self-confidence and self-esteem/i)).toBeInTheDocument();
      });
    });

    describe('For Parents Section', () => {
      it('displays For Parents section heading', () => {
        expect(screen.getByRole('heading', { name: /for parents: how i work with you/i })).toBeInTheDocument();
      });

      it('mentions parent review meetings', () => {
        expect(screen.getByText(/parent review meetings/i)).toBeInTheDocument();
      });

      it('mentions parent-only sessions', () => {
        expect(screen.getByText(/parent-only sessions/i)).toBeInTheDocument();
      });

      it('mentions professional experience', () => {
        expect(screen.getByText(/nhs essex/i)).toBeInTheDocument();
        expect(screen.getByText(/sir bobby robson school/i)).toBeInTheDocument();
      });
    });

    describe('Working with Schools Section', () => {
      it('displays school liaison section', () => {
        expect(screen.getByRole('heading', { name: /working with school and other professionals/i })).toBeInTheDocument();
      });

      it('mentions SENCo and ELSA', () => {
        expect(screen.getByText(/senco/i)).toBeInTheDocument();
        expect(screen.getByText(/elsa/i)).toBeInTheDocument();
      });

      it('mentions EHCP applications', () => {
        expect(screen.getByText(/ehcp/i)).toBeInTheDocument();
      });
    });

    describe('Limitations Section', () => {
      it('displays what I dont work with heading', () => {
        expect(screen.getByRole('heading', { name: /what i don't work with at this age/i })).toBeInTheDocument();
      });

      it('mentions acute crisis limitations', () => {
        const matches = screen.getAllByText(/acute crisis/i);
        expect(matches.length).toBeGreaterThan(0);
      });

      it('mentions online limitations for under-16s', () => {
        expect(screen.getByText(/online therapy for under-16s/i)).toBeInTheDocument();
      });

      it('has link to online therapy page', () => {
        const link = screen.getByRole('link', { name: /online therapy and who it's for/i });
        expect(link).toHaveAttribute('href', '/online-therapy');
      });
    });

    describe('Crisis Section', () => {
      it('displays crisis signposting heading', () => {
        expect(screen.getByRole('heading', { name: /if your child is in crisis right now/i })).toBeInTheDocument();
      });

      it('shows NHS 111 information', () => {
        expect(screen.getByText(/nhs 111/i)).toBeInTheDocument();
      });

      it('shows Childline information', () => {
        expect(screen.getByText(/childline/i)).toBeInTheDocument();
        expect(screen.getByText(/0800 1111/i)).toBeInTheDocument();
      });

      it('shows A&E information', () => {
        expect(screen.getByText(/a&e at colchester general hospital/i)).toBeInTheDocument();
      });
    });

    describe('CTA Section', () => {
      it('displays CTA heading', () => {
        expect(screen.getByRole('heading', { name: /start with a parent-only conversation/i })).toBeInTheDocument();
      });

      it('has book now link', () => {
        const link = screen.getByRole('link', { name: /book a free 15-minute call/i });
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

      it('renders FAQPage schema', () => {
        const { container } = render(<ChildTherapyPage />);
        const scripts = container.querySelectorAll('script[type="application/ld+json"]');
        const schemas = Array.from(scripts).map((script) =>
          JSON.parse(script.textContent || '{}')
        );

        const faqSchema = schemas.find((s) => s['@type'] === 'FAQPage');
        expect(faqSchema).toBeDefined();
        expect(faqSchema?.mainEntity?.length).toBeGreaterThan(0);
      });
    });
  });
});
