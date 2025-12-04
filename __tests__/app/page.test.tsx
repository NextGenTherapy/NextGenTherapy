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
      screen.getByText(/Hi! I.*m Andreea Horhocea - Therapist in Colchester/i)
    ).toBeInTheDocument();
  });

  it('displays the hero image', () => {
    render(<HomePage />);
    const heroImage = screen.getByTestId('next-image');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('alt', expect.stringContaining('Andreea Horhocea'));
  });

  it('includes BACP registration mention', () => {
    render(<HomePage />);
    expect(screen.getByText(/BACP registered/i)).toBeInTheDocument();
  });

  it('displays about section', () => {
    render(<HomePage />);
    expect(screen.getByText(/About Me/)).toBeInTheDocument();
  });

  it('displays services overview', () => {
    render(<HomePage />);
    expect(screen.getByText(/Who I Help/)).toBeInTheDocument();
  });

  it('displays approach section', () => {
    render(<HomePage />);
    expect(screen.getByText(/My Approach/)).toBeInTheDocument();
  });

  it('includes navigation links', () => {
    render(<HomePage />);
    const links = screen.getAllByTestId('next-link');
    expect(links.length).toBeGreaterThan(0);

    // Check for specific links
    expect(screen.getByRole('link', { name: /About Me/ })).toBeInTheDocument();
  });

  it('renders structured data schema', () => {
    const { container } = render(<HomePage />);
    const schema = container.querySelector('script[type="application/ld+json"]');
    expect(schema).toBeInTheDocument();
  });

  it('includes location information', () => {
    render(<HomePage />);
    // Multiple elements contain Colchester, so use getAllBy
    expect(screen.getAllByText(/Colchester/).length).toBeGreaterThan(0);
  });

  it('has proper semantic HTML structure', () => {
    const { container } = render(<HomePage />);

    // Check for main landmark
    expect(container.querySelector('main')).toBeInTheDocument();

    // Check for section elements
    const sections = container.querySelectorAll('section');
    expect(sections.length).toBeGreaterThan(0);
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
    // Multiple elements contain therapy, so use getAllBy
    expect(screen.getAllByText(/therapy/i).length).toBeGreaterThan(0);
  });

  it('mentions young people and families expertise', () => {
    render(<HomePage />);
    // Multiple elements may contain these terms, so use getAllBy
    expect(screen.getAllByText(/young people/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/families/i).length).toBeGreaterThan(0);
  });

  it('renders all required sections', () => {
    const { container } = render(<HomePage />);

    // Count sections to ensure page completeness
    const sections = container.querySelectorAll('section');
    expect(sections.length).toBeGreaterThanOrEqual(2);
  });
});
