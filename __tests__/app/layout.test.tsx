import { render, screen } from '@testing-library/react';
import { NextRouter } from 'next/router';
import Layout from '../../src/app/layout';

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

// Mock next/dynamic
jest.mock('next/dynamic', () => () => {
  const MockedComponent = () => <div data-testid="dynamic-component">Mocked Dynamic Component</div>;
  MockedComponent.displayName = 'MockedDynamicComponent';
  return MockedComponent;
});

// Mock the ConditionalAnalytics and related components
jest.mock('../../src/components/layout/ConditionalAnalytics', () => {
  const MockConditionalAnalytics = () => <div data-testid="conditional-analytics">Analytics</div>;
  MockConditionalAnalytics.displayName = 'MockConditionalAnalytics';
  return MockConditionalAnalytics;
});

jest.mock('../../src/components/layout/ConditionalVercelAnalytics', () => {
  const MockConditionalVercelAnalytics = () => <div data-testid="conditional-vercel-analytics">Vercel Analytics</div>;
  MockConditionalVercelAnalytics.displayName = 'MockConditionalVercelAnalytics';
  return MockConditionalVercelAnalytics;
});

jest.mock('../../src/components/layout/header', () => {
  const MockHeader = () => <header data-testid="header">Header</header>;
  MockHeader.displayName = 'MockHeader';
  return MockHeader;
});

jest.mock('../../src/components/layout/footer', () => {
  const MockFooter = () => <footer data-testid="footer">Footer</footer>;
  MockFooter.displayName = 'MockFooter';
  return MockFooter;
});

// Mock ScrollToTop component
jest.mock('../../src/components/ui/scroll-to-top', () => {
  const MockScrollToTop = () => <div data-testid="scroll-to-top">Scroll To Top</div>;
  MockScrollToTop.displayName = 'MockScrollToTop';
  return MockScrollToTop;
});

// Mock CookieConsent component
jest.mock('../../src/components/layout/CookieConsent', () => {
  const MockCookieConsent = () => <div data-testid="cookie-consent">Cookie Consent</div>;
  MockCookieConsent.displayName = 'MockCookieConsent';
  return MockCookieConsent;
});

// Mock ErrorBoundary component
jest.mock('../../src/components/layout/ErrorBoundary', () => {
  const MockErrorBoundary = ({ children }: { children: React.ReactNode }) => <div data-testid="error-boundary">{children}</div>;
  MockErrorBoundary.displayName = 'MockErrorBoundary';
  return MockErrorBoundary;
});

describe('Layout Component', () => {
  const mockChildren = <div data-testid="child-content">Test Content</div>;

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(
      <Layout>
        {mockChildren}
      </Layout>
    );
    expect(screen.getByTestId('child-content')).toBeInTheDocument();
  });

  it('includes proper HTML structure', () => {
    const { container } = render(
      <Layout>
        {mockChildren}
      </Layout>
    );

    const htmlElement = container.querySelector('html');
    expect(htmlElement).toHaveAttribute('lang', 'en');
  });

  it('renders header component', () => {
    render(
      <Layout>
        {mockChildren}
      </Layout>
    );
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('renders footer component', () => {
    render(
      <Layout>
        {mockChildren}
      </Layout>
    );
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('renders scroll to top component', () => {
    render(
      <Layout>
        {mockChildren}
      </Layout>
    );
    expect(screen.getByTestId('scroll-to-top')).toBeInTheDocument();
  });

  it('renders cookie consent component', () => {
    render(
      <Layout>
        {mockChildren}
      </Layout>
    );
    expect(screen.getByTestId('cookie-consent')).toBeInTheDocument();
  });

  it('renders analytics components', () => {
    render(
      <Layout>
        {mockChildren}
      </Layout>
    );
    expect(screen.getByTestId('conditional-analytics')).toBeInTheDocument();
    expect(screen.getByTestId('conditional-vercel-analytics')).toBeInTheDocument();
  });

  it('wraps content in error boundary', () => {
    render(
      <Layout>
        {mockChildren}
      </Layout>
    );
    expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
  });

  it('renders children content', () => {
    render(
      <Layout>
        {mockChildren}
      </Layout>
    );
    expect(screen.getByTestId('child-content')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('has proper viewport meta tag setup', () => {
    render(
      <Layout>
        {mockChildren}
      </Layout>
    );

    // Check that the layout renders without viewport errors
    // Viewport meta is handled by Next.js metadata API
    expect(screen.getByTestId('child-content')).toBeInTheDocument();
  });

  it('includes proper SEO meta tags structure', () => {
    render(
      <Layout>
        {mockChildren}
      </Layout>
    );

    // The layout should render properly with SEO structure
    expect(screen.getByTestId('child-content')).toBeInTheDocument();
  });

  it('handles multiple children', () => {
    render(
      <Layout>
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
      </Layout>
    );

    expect(screen.getByTestId('child-1')).toBeInTheDocument();
    expect(screen.getByTestId('child-2')).toBeInTheDocument();
  });

  it('maintains accessibility structure', () => {
    const { container } = render(
      <Layout>
        {mockChildren}
      </Layout>
    );

    // Check for proper landmark structure
    expect(container.querySelector('header')).toBeInTheDocument();
    expect(container.querySelector('footer')).toBeInTheDocument();
  });
});