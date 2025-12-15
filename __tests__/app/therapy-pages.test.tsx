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
  TeenageTherapySchema: function MockTeenageTherapySchema() {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@type': 'Service', name: 'TeenageTherapy' }) }}
      />
    );
  },
  YoungAdultTherapySchema: function MockYoungAdultTherapySchema() {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@type': 'Service', name: 'YoungAdultTherapy' }) }}
      />
    );
  },
}));

// Import after mocks
import ChildTherapyPage from '../../src/app/child-therapy/page';
import TeenageTherapyPage from '../../src/app/teenage-therapy/page';

describe('Therapy Pages', () => {
  describe('Child Therapy Page', () => {
    beforeEach(() => {
      render(<ChildTherapyPage />);
    });

    it('renders the main heading', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/Child Therapy in Colchester/i);
    });

    it('displays subtitle about compassionate support', () => {
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
        expect(screen.getByText(/Behavioural Changes/i)).toBeInTheDocument();
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

    describe('Parent Support', () => {
      it('displays supporting parents section', () => {
        expect(screen.getByText(/Supporting Parents Too/i)).toBeInTheDocument();
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

    describe('Call to Action', () => {
      it('displays CTA heading', () => {
        expect(screen.getByText(/Ready to Take the Next Step\?/i)).toBeInTheDocument();
      });

      it('has book consultation link', () => {
        const link = screen.getByRole('link', { name: /Book a Consultation/i });
        expect(link).toHaveAttribute('href', '/contact');
      });

      it('has learn about approach link', () => {
        const link = screen.getByRole('link', { name: /Learn About My Approach/i });
        expect(link).toHaveAttribute('href', '/about');
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

  describe('Teenage Therapy Page', () => {
    beforeEach(() => {
      render(<TeenageTherapyPage />);
    });

    it('renders the main heading', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/Teenage Therapy in Colchester/i);
    });

    it('displays subtitle about confidential support', () => {
      expect(
        screen.getByText(/Understanding, confidential therapy support/i)
      ).toBeInTheDocument();
    });

    describe('Content Sections', () => {
      it('displays understanding teenage experience heading', () => {
        expect(screen.getByText(/Understanding the Teenage Experience/i)).toBeInTheDocument();
      });

      it('displays signs you might benefit section', () => {
        expect(screen.getByText(/Signs You Might Benefit from Therapy/i)).toBeInTheDocument();
      });

      it('displays approach section', () => {
        expect(screen.getByText(/My Approach to Teenage Therapy/i)).toBeInTheDocument();
      });

      it('displays common issues heading', () => {
        expect(screen.getByText(/Common Issues I Help Teenagers With/i)).toBeInTheDocument();
      });
    });

    describe('Symptom Categories', () => {
      it('lists emotional struggles', () => {
        expect(screen.getByText(/Emotional Struggles/i)).toBeInTheDocument();
        expect(screen.getByText(/Persistent feelings of sadness or emptiness/i)).toBeInTheDocument();
      });

      it('lists school & life challenges', () => {
        expect(screen.getByText(/School & Life Challenges/i)).toBeInTheDocument();
      });

      it('lists social & identity issues', () => {
        expect(screen.getByText(/Social & Identity Issues/i)).toBeInTheDocument();
      });
    });

    describe('Approach Points', () => {
      it('displays your space your pace', () => {
        expect(screen.getByText(/Your Space, Your Pace/i)).toBeInTheDocument();
      });

      it('displays confidentiality respected', () => {
        expect(screen.getByText(/Confidentiality Respected/i)).toBeInTheDocument();
      });

      it('displays no judgment zone', () => {
        expect(screen.getByText(/No Judgment Zone/i)).toBeInTheDocument();
      });
    });

    describe('Common Concerns Grid', () => {
      it('shows anxiety & overwhelm', () => {
        expect(screen.getByText(/Anxiety & Overwhelm/i)).toBeInTheDocument();
      });

      it('shows depression & low mood', () => {
        expect(screen.getByText(/Depression & Low Mood/i)).toBeInTheDocument();
      });

      it('shows school stress', () => {
        expect(screen.getByText(/School Stress/i)).toBeInTheDocument();
      });

      it('shows identity & self-worth', () => {
        expect(screen.getByText(/Identity & Self-Worth/i)).toBeInTheDocument();
      });

      it('shows family relationships', () => {
        expect(screen.getByText(/Family Relationships/i)).toBeInTheDocument();
      });

      it('shows trauma & difficult experiences', () => {
        expect(screen.getByText(/Trauma & Difficult Experiences/i)).toBeInTheDocument();
      });
    });

    describe('For Parents Section', () => {
      it('displays information for parents', () => {
        expect(screen.getByText(/Information for Parents/i)).toBeInTheDocument();
      });
    });

    describe('Practical Info', () => {
      it('displays what to expect heading', () => {
        expect(screen.getByText(/What to Expect from Teenage Therapy/i)).toBeInTheDocument();
      });

      it('shows first session info', () => {
        expect(screen.getByText(/First Session/i)).toBeInTheDocument();
      });

      it('shows building trust', () => {
        const buildingTrust = screen.getAllByText(/Building Trust/i);
        expect(buildingTrust.length).toBeGreaterThan(0);
      });

      it('shows exploring issues', () => {
        expect(screen.getByText(/Exploring Issues/i)).toBeInTheDocument();
      });

      it('shows your journey', () => {
        expect(screen.getByText(/Your Journey/i)).toBeInTheDocument();
      });
    });

    describe('Call to Action', () => {
      it('displays CTA heading', () => {
        expect(screen.getByText(/Ready to Take the First Step\?/i)).toBeInTheDocument();
      });

      it('has book consultation link', () => {
        const link = screen.getByRole('link', { name: /Book a Consultation/i });
        expect(link).toHaveAttribute('href', '/contact');
      });
    });

    describe('JSON-LD Schema', () => {
      it('renders BreadcrumbList schema', () => {
        const { container } = render(<TeenageTherapyPage />);
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
