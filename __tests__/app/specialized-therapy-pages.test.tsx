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

// Mock SEO schema components
jest.mock('@/components/seo/ServiceSchema', () => ({
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
import YoungAdultTherapyPage from '../../src/app/young-adult-therapy/page';
import LGBTQTherapyPage from '../../src/app/lgbtq-therapy/page';
import NeurodiversityTherapyPage from '../../src/app/neurodiversity-therapy/page';

describe('Specialized Therapy Pages', () => {
  describe('Young Adult Therapy Page', () => {
    beforeEach(() => {
      render(<YoungAdultTherapyPage />);
    });

    it('renders the main heading', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/Young Adult Therapy in Colchester/i);
    });

    it('displays subtitle about professional support', () => {
      expect(
        screen.getByText(/Professional therapy support for young adults/i)
      ).toBeInTheDocument();
    });

    it('displays understanding the journey section', () => {
      expect(screen.getByText(/Understanding the Young Adult Journey/i)).toBeInTheDocument();
    });

    it('displays common challenges section', () => {
      expect(screen.getByText(/Common Young Adult Challenges/i)).toBeInTheDocument();
    });

    it('shows life transitions category', () => {
      const elements = screen.getAllByText(/Life Transitions/i);
      expect(elements.length).toBeGreaterThan(0);
    });

    it('shows career & achievement stress category', () => {
      expect(screen.getByText(/Career & Achievement Stress/i)).toBeInTheDocument();
    });

    it('shows relationships & identity category', () => {
      expect(screen.getByText(/Relationships & Identity/i)).toBeInTheDocument();
    });

    it('displays approach section', () => {
      expect(screen.getByText(/My Approach to Young Adult Therapy/i)).toBeInTheDocument();
    });

    it('displays areas of help section', () => {
      expect(screen.getByText(/Areas I Help Young Adults With/i)).toBeInTheDocument();
    });

    it('shows university students section', () => {
      expect(screen.getByText(/Support for University Students/i)).toBeInTheDocument();
    });

    it('displays practical info section', () => {
      expect(screen.getByText(/What to Expect from Young Adult Therapy/i)).toBeInTheDocument();
    });

    it('displays call to action', () => {
      expect(screen.getByText(/Ready to Invest in Your Future\?/i)).toBeInTheDocument();
    });

    it('has book consultation link', () => {
      const link = screen.getByRole('link', { name: /Book a Consultation/i });
      expect(link).toHaveAttribute('href', '/contact');
    });

    it('renders BreadcrumbList schema', () => {
      const { container } = render(<YoungAdultTherapyPage />);
      const scripts = container.querySelectorAll('script[type="application/ld+json"]');
      const schemas = Array.from(scripts).map((script) =>
        JSON.parse(script.textContent || '{}')
      );

      const breadcrumbSchema = schemas.find((s) => s['@type'] === 'BreadcrumbList');
      expect(breadcrumbSchema).toBeDefined();
    });
  });

  describe('LGBTQ+ Therapy Page', () => {
    beforeEach(() => {
      render(<LGBTQTherapyPage />);
    });

    it('renders the main heading', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/LGBTQ\+ Inclusive Therapy/i);
    });

    it('displays subtitle about affirming support', () => {
      expect(
        screen.getByText(/Affirming, inclusive therapeutic support/i)
      ).toBeInTheDocument();
    });

    it('displays safe space section', () => {
      expect(screen.getByText(/A Safe Space for Your Authentic Self/i)).toBeInTheDocument();
    });

    it('displays why affirming therapy matters section', () => {
      expect(screen.getByText(/Why LGBTQ\+ Affirming Therapy Matters/i)).toBeInTheDocument();
    });

    it('shows identity validation', () => {
      expect(screen.getByText(/Identity Validation/i)).toBeInTheDocument();
    });

    it('shows cultural competence', () => {
      expect(screen.getByText(/Cultural Competence/i)).toBeInTheDocument();
    });

    it('shows minority stress understanding', () => {
      expect(screen.getByText(/Minority Stress Understanding/i)).toBeInTheDocument();
    });

    it('displays areas of support section', () => {
      expect(screen.getByText(/Areas of LGBTQ\+ Support/i)).toBeInTheDocument();
    });

    it('shows coming out support', () => {
      expect(screen.getByText(/Coming Out Support/i)).toBeInTheDocument();
    });

    it('shows gender identity and expression', () => {
      expect(screen.getByText(/Gender Identity and Expression/i)).toBeInTheDocument();
    });

    it('displays age-specific support section', () => {
      expect(screen.getByText(/LGBTQ\+ Support Across Age Groups/i)).toBeInTheDocument();
    });

    it('displays safety section', () => {
      expect(screen.getByText(/Creating a Safe Therapeutic Environment/i)).toBeInTheDocument();
    });

    it('displays intersectionality section', () => {
      expect(screen.getByText(/Understanding Intersectionality/i)).toBeInTheDocument();
    });

    it('displays call to action', () => {
      expect(screen.getByText(/Ready to Begin Your Journey\?/i)).toBeInTheDocument();
    });

    it('displays related services section', () => {
      expect(screen.getByText(/Related Therapy Services/i)).toBeInTheDocument();
    });

    it('has book consultation link', () => {
      const link = screen.getByRole('link', { name: /Book a Consultation/i });
      expect(link).toHaveAttribute('href', '/contact');
    });

    it('renders Service schema', () => {
      const { container } = render(<LGBTQTherapyPage />);
      const scripts = container.querySelectorAll('script[type="application/ld+json"]');
      const schemas = Array.from(scripts).map((script) =>
        JSON.parse(script.textContent || '{}')
      );

      const serviceSchema = schemas.find((s) => s['@type'] === 'Service');
      expect(serviceSchema).toBeDefined();
      expect(serviceSchema?.name).toBe('LGBTQ+ Inclusive Therapy');
    });
  });

  describe('Neurodiversity Therapy Page', () => {
    beforeEach(() => {
      render(<NeurodiversityTherapyPage />);
    });

    it('renders the main heading', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/Neurodiversity Therapy & SEN Support/i);
    });

    it('displays subtitle about specialist therapy', () => {
      expect(
        screen.getByText(/Specialist therapy for neurodivergent children/i)
      ).toBeInTheDocument();
    });

    it('displays understanding neurodiversity section', () => {
      expect(screen.getByText(/Understanding Neurodiversity Through Experience/i)).toBeInTheDocument();
    });

    it('displays SEN experience section', () => {
      expect(screen.getByText(/SEN School Experience & Expertise/i)).toBeInTheDocument();
    });

    it('shows individual learning styles', () => {
      expect(screen.getByText(/Individual Learning Styles/i)).toBeInTheDocument();
    });

    it('shows sensory considerations', () => {
      expect(screen.getByText(/Sensory Considerations/i)).toBeInTheDocument();
    });

    it('displays adaptations section', () => {
      expect(screen.getByText(/Therapeutic Adaptations for Neurodivergent Clients/i)).toBeInTheDocument();
    });

    it('shows flexible session length', () => {
      expect(screen.getByText(/Flexible Session Length/i)).toBeInTheDocument();
    });

    it('shows sensory-friendly environment', () => {
      expect(screen.getByText(/Sensory-Friendly Environment/i)).toBeInTheDocument();
    });

    it('displays age-specific support section', () => {
      expect(screen.getByText(/Neurodiversity Support Across Age Groups/i)).toBeInTheDocument();
    });

    it('displays common challenges section', () => {
      expect(screen.getByText(/Common Challenges I Help Address/i)).toBeInTheDocument();
    });

    it('shows executive function difficulties', () => {
      expect(screen.getByText(/Executive Function Difficulties/i)).toBeInTheDocument();
    });

    it('shows sensory processing challenges', () => {
      expect(screen.getByText(/Sensory Processing Challenges/i)).toBeInTheDocument();
    });

    it('displays exploration section', () => {
      expect(screen.getByText(/Therapy as an Exploration Space/i)).toBeInTheDocument();
    });

    it('displays family support section', () => {
      expect(screen.getByText(/Supporting Families of Neurodivergent Young People/i)).toBeInTheDocument();
    });

    it('displays call to action', () => {
      expect(screen.getByText(/Ready to Support Your Neurodivergent Journey\?/i)).toBeInTheDocument();
    });

    it('displays related services section', () => {
      expect(screen.getByText(/Related Therapy Services/i)).toBeInTheDocument();
    });

    it('has book consultation link', () => {
      const link = screen.getByRole('link', { name: /Book a Consultation/i });
      expect(link).toHaveAttribute('href', '/contact');
    });

    it('renders Service schema', () => {
      const { container } = render(<NeurodiversityTherapyPage />);
      const scripts = container.querySelectorAll('script[type="application/ld+json"]');
      const schemas = Array.from(scripts).map((script) =>
        JSON.parse(script.textContent || '{}')
      );

      const serviceSchema = schemas.find((s) => s['@type'] === 'Service');
      expect(serviceSchema).toBeDefined();
      expect(serviceSchema?.name).toBe('Neurodiversity Therapy & SEN Support');
    });
  });
});
