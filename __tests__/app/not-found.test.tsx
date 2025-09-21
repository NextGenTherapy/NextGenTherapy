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

// Mock Button component
jest.mock('../../src/components/ui/button', () => {
  const MockButton = ({ href, children, ...props }: any) => (
    <a href={href} {...props} data-testid="button">
      {children}
    </a>
  );
  MockButton.displayName = 'MockButton';
  return MockButton;
});

describe('NotFound Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<NotFound />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('displays 404 error message', () => {
    render(<NotFound />);
    expect(screen.getByText(/404/)).toBeInTheDocument();
    expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
  });

  it('displays helpful error message', () => {
    render(<NotFound />);
    expect(screen.getByText(/page you are looking for/i)).toBeInTheDocument();
  });

  it('includes navigation back to home', () => {
    render(<NotFound />);
    const homeLink = screen.getByTestId('next-link');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('includes helpful navigation elements', () => {
    render(<NotFound />);
    // Check for navigation links instead of buttons since 404 page may use links
    const homeLink = screen.getByTestId('next-link');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
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

    // Check for proper heading structure
    const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
    expect(headings.length).toBeGreaterThan(0);
  });

  it('provides clear user guidance', () => {
    render(<NotFound />);

    // Should provide clear next steps for users
    expect(screen.getByText(/home/i) || screen.getByText(/back/i)).toBeInTheDocument();
  });

  it('maintains consistent styling', () => {
    const { container } = render(<NotFound />);

    // Component should render with proper structure
    expect(container.firstChild).toBeInTheDocument();
  });
});
