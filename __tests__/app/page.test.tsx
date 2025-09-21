import { render, screen } from '@testing-library/react';
import HomePage from '../../src/app/page';

// Mock Next.js components
jest.mock('next/image', () => {
  const MockImage = ({ src, alt, ...props }: any) => (
    <img src={src} alt={alt} {...props} data-testid="next-image" />
  );
  MockImage.displayName = 'MockImage';
  return MockImage;
});

jest.mock('next/link', () => {
  const MockLink = ({ href, children, ...props }: any) => (
    <a href={href} {...props} data-testid="next-link">
      {children}
    </a>
  );
  MockLink.displayName = 'MockLink';
  return MockLink;
});

// Mock components
jest.mock('../../src/components/ui/button', () => {
  const MockButton = ({ href, children, ...props }: any) => (
    <a href={href} {...props} data-testid="button">
      {children}
    </a>
  );
  MockButton.displayName = 'MockButton';
  return MockButton;
});

jest.mock('../../src/components/seo/LocalBusinessSchema', () => {
  const MockLocalBusinessSchema = () => (
    <script type="application/ld+json" data-testid="local-business-schema">
      {JSON.stringify({ '@type': 'LocalBusiness' })}
    </script>
  );
  MockLocalBusinessSchema.displayName = 'MockLocalBusinessSchema';
  return MockLocalBusinessSchema;
});

jest.mock('../../src/components/seo/BreadcrumbSchema', () => {
  const MockBreadcrumbSchema = () => (
    <script type="application/ld+json" data-testid="breadcrumb-schema">
      {JSON.stringify({ '@type': 'BreadcrumbList' })}
    </script>
  );
  MockBreadcrumbSchema.displayName = 'MockBreadcrumbSchema';
  return MockBreadcrumbSchema;
});

describe('HomePage Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<HomePage />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('displays the main heading', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(
      screen.getByText(/Hi! I am Andreea Horhocea - Therapist in Colchester/)
    ).toBeInTheDocument();
  });

  it('displays the hero image', () => {
    render(<HomePage />);
    const heroImage = screen.getByTestId('next-image');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('alt', expect.stringContaining('Andreea Horhocea'));
  });

  it('includes professional credentials section', () => {
    render(<HomePage />);
    expect(screen.getByText(/Professional Qualifications/)).toBeInTheDocument();
    expect(screen.getByText(/BACP Registered/)).toBeInTheDocument();
  });

  it('displays services overview', () => {
    render(<HomePage />);
    expect(screen.getByText(/Professional Therapy Services/)).toBeInTheDocument();
  });

  it('includes call-to-action buttons', () => {
    render(<HomePage />);
    const buttons = screen.getAllByTestId('button');
    expect(buttons.length).toBeGreaterThan(0);

    // Check for specific CTA buttons
    expect(screen.getByText('Book Now')).toBeInTheDocument();
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('renders structured data schemas', () => {
    render(<HomePage />);
    expect(screen.getByTestId('local-business-schema')).toBeInTheDocument();
    expect(screen.getByTestId('breadcrumb-schema')).toBeInTheDocument();
  });

  it('includes contact information', () => {
    render(<HomePage />);
    expect(screen.getByText(/Colchester/)).toBeInTheDocument();
  });

  it('displays therapy approach information', () => {
    render(<HomePage />);
    expect(screen.getByText(/psychodynamic/i)).toBeInTheDocument();
  });

  it('includes location information', () => {
    render(<HomePage />);
    expect(screen.getByText(/Colchester/)).toBeInTheDocument();
    expect(screen.getByText(/Essex/)).toBeInTheDocument();
  });

  it('has proper semantic HTML structure', () => {
    const { container } = render(<HomePage />);

    // Check for main landmark
    expect(container.querySelector('main')).toBeInTheDocument();

    // Check for section elements
    const sections = container.querySelectorAll('section');
    expect(sections.length).toBeGreaterThan(0);
  });

  it('includes navigation to key pages', () => {
    render(<HomePage />);

    // Check for links to important pages
    const links = screen.getAllByTestId('next-link');
    expect(links.length).toBeGreaterThan(0);
  });

  it('displays accessibility features', () => {
    const { container } = render(<HomePage />);

    // Check for proper heading structure
    const h1 = container.querySelector('h1');
    expect(h1).toBeInTheDocument();

    // Check for alt text on images
    const images = container.querySelectorAll('img');
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')).not.toBe('');
    });
  });

  it('includes therapy-specific content', () => {
    render(<HomePage />);

    // Check for therapy-related keywords and content
    expect(screen.getByText(/therapy/i)).toBeInTheDocument();
    expect(screen.getByText(/counselling/i)).toBeInTheDocument();
  });

  it('displays professional registration information', () => {
    render(<HomePage />);
    expect(screen.getByText(/BACP/)).toBeInTheDocument();
  });

  it('includes location-specific content', () => {
    render(<HomePage />);
    expect(screen.getByText(/Colchester/)).toBeInTheDocument();
  });

  it('renders all required sections', () => {
    const { container } = render(<HomePage />);

    // Count sections to ensure page completeness
    const sections = container.querySelectorAll('section');
    expect(sections.length).toBeGreaterThanOrEqual(3);
  });
});
