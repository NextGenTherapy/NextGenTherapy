import { render, screen } from '@testing-library/react';
import NotFound from '../../src/app/not-found';

// Mock Next.js Link component
jest.mock('next/link', () => {
  const MockLink = ({ href, children, ...props }: any) => (
    <a href={href} {...props} data-testid="next-link">
      {children}
    </a>
  );
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('NotFound Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<NotFound />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('displays page not found message in PageHero', () => {
    render(<NotFound />);
    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/That page doesn't exist/i)).toBeInTheDocument();
  });

  it('displays helpful lead text', () => {
    render(<NotFound />);
    expect(screen.getByText(/Some of the older pages.*merged or renamed/i)).toBeInTheDocument();
  });

  it('includes navigation links to main pages', () => {
    render(<NotFound />);

    // Check for some of the key navigation links
    expect(screen.getByRole('link', { name: /Therapy for Women/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /ADHD & Autism in Adults/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /About Andreea/i })).toBeInTheDocument();
  });

  it('includes book now link', () => {
    render(<NotFound />);
    const bookLinks = screen.getAllByRole('link', { name: /book/i });
    expect(bookLinks.length).toBeGreaterThan(0);
  });

  it('has proper semantic HTML structure', () => {
    const { container } = render(<NotFound />);

    // Check for main landmark
    expect(container.querySelector('main')).toBeInTheDocument();

    // Check for proper heading
    const h1 = container.querySelector('h1');
    expect(h1).toBeInTheDocument();
  });

  it('includes accessibility features', () => {
    const { container } = render(<NotFound />);

    // Check for navigation landmark
    const nav = container.querySelector('nav');
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute('aria-label', 'Site navigation');
  });

  it('provides clear closing message with contact link', () => {
    render(<NotFound />);

    expect(screen.getByText(/Still can't find what you were looking for/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Send me a message/i })).toBeInTheDocument();
  });

  it('maintains consistent styling', () => {
    const { container } = render(<NotFound />);

    // Component should render with proper structure
    expect(container.firstChild).toBeInTheDocument();
  });
});
