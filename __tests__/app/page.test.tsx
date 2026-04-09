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
      screen.getByText(/You fit everything in.*And somehow you still feel like you.*re slipping/i)
    ).toBeInTheDocument();
  });

  it('displays the hero image', () => {
    render(<HomePage />);
    const heroImage = screen.getByTestId('next-image');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('alt', expect.stringContaining('Andreea'));
  });

  it('displays the eyebrow text with credentials', () => {
    render(<HomePage />);
    expect(screen.getByText(/Colchester & Online · BACP Registered/i)).toBeInTheDocument();
  });

  it('includes BACP registration mention in trust bar', () => {
    render(<HomePage />);
    expect(screen.getByText('BACP Registered')).toBeInTheDocument();
  });

  it('displays What I Work With section', () => {
    render(<HomePage />);
    expect(screen.getByText('What I Work With')).toBeInTheDocument();
  });

  it('displays service cards', () => {
    render(<HomePage />);
    expect(screen.getByText('Therapy for Women')).toBeInTheDocument();
    expect(screen.getByText('ADHD & Autism in Adults')).toBeInTheDocument();
    expect(screen.getByText('Therapy for Teenagers')).toBeInTheDocument();
  });

  it('includes about section with quote', () => {
    render(<HomePage />);
    expect(
      screen.getByText(/I've worked in NHS schools, SEN provision, Mind, and YMCA/i)
    ).toBeInTheDocument();
  });

  it('displays Andreea credentials', () => {
    render(<HomePage />);
    expect(screen.getByText(/MA Psychodynamic Psychotherapy.*University of Essex.*2020.*BACP Registered/i)).toBeInTheDocument();
  });

  it('includes Romanian language section', () => {
    render(<HomePage />);
    expect(screen.getByText(/Terapie în limba română/i)).toBeInTheDocument();
  });

  it('includes CTA section', () => {
    render(<HomePage />);
    expect(screen.getByText(/Not sure yet.*That.*s what the free call is for/i)).toBeInTheDocument();
  });

  it('includes navigation links', () => {
    render(<HomePage />);
    const links = screen.getAllByTestId('next-link');
    expect(links.length).toBeGreaterThan(0);

    // Check for specific links (using getAllByRole since some appear multiple times)
    const bookLinks = screen.getAllByRole('link', { name: /Book a Free 15-Minute Call/i });
    expect(bookLinks.length).toBeGreaterThan(0);
    expect(screen.getByRole('link', { name: /More about me/i })).toBeInTheDocument();
  });

  it('renders structured data schema', () => {
    const { container } = render(<HomePage />);
    const schema = container.querySelector('script[type="application/ld+json"]');
    expect(schema).toBeInTheDocument();
  });

  it('includes location information', () => {
    render(<HomePage />);
    expect(screen.getByText(/Colchester & Online \(UK\)/i)).toBeInTheDocument();
  });

  it('has proper semantic HTML structure', () => {
    const { container } = render(<HomePage />);

    // Check for main landmark
    expect(container.querySelector('main')).toBeInTheDocument();

    // Check for section elements
    const sections = container.querySelectorAll('section');
    expect(sections.length).toBeGreaterThanOrEqual(5);
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

  it('includes therapy-related content', () => {
    render(<HomePage />);
    expect(screen.getAllByText(/therapy/i).length).toBeGreaterThan(0);
  });

  it('mentions target client groups', () => {
    render(<HomePage />);
    // Multiple mentions of women throughout the page
    expect(screen.getAllByText(/women/i).length).toBeGreaterThan(0);
    // "neurodivergent adults" may appear in multiple places
    expect(screen.getAllByText(/neurodivergent adults/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/teenagers/i).length).toBeGreaterThan(0);
  });

  it('renders all required sections', () => {
    const { container } = render(<HomePage />);

    // Count sections to ensure page completeness
    const sections = container.querySelectorAll('section');
    expect(sections.length).toBeGreaterThanOrEqual(5);
  });
});
