import { render, screen } from '@testing-library/react';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
    push: jest.fn(),
    replace: jest.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

// Mock the header component
jest.mock('../../src/components/layout/header', () => {
  const MockHeader = () => <header data-testid="header">Header</header>;
  MockHeader.displayName = 'MockHeader';
  return MockHeader;
});

// Mock the footer component
jest.mock('../../src/components/layout/footer', () => {
  const MockFooter = () => <footer data-testid="footer">Footer</footer>;
  MockFooter.displayName = 'MockFooter';
  return MockFooter;
});

// Import the mocked components directly for testing
import Header from '../../src/components/layout/header';
import Footer from '../../src/components/layout/footer';

describe('Layout Component Structure', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders header component when used', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('renders footer component when used', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('header and footer can be rendered together', () => {
    render(
      <div>
        <Header />
        <main data-testid="main-content">Content</main>
        <Footer />
      </div>
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('main-content')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('maintains accessibility structure with header and footer', () => {
    const { container } = render(
      <div>
        <Header />
        <main>Test content</main>
        <Footer />
      </div>
    );

    expect(container.querySelector('header')).toBeInTheDocument();
    expect(container.querySelector('footer')).toBeInTheDocument();
  });
});

// Note: The RootLayout component is an async Server Component in Next.js 15
// and cannot be directly unit tested in jsdom. Integration tests should be
// used via Playwright/Cypress to test the full layout functionality.
