import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock the Button component BEFORE importing Error
jest.mock('../../src/components/ui/button', () => {
  return function MockButton({
    children,
    onClick,
    href,
  }: {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
  }) {
    if (href) {
      return <a href={href}>{children}</a>;
    }
    return <button type="button" onClick={onClick}>{children}</button>;
  };
});

// Import Error component AFTER mocks are set up
import Error from '../../src/app/error';

describe('Error Page', () => {
  const mockReset = jest.fn();
  let consoleErrorSpy: jest.SpyInstance;

  // Create errors inside the test scope
  const createMockError = (message: string) => {
    const err = new window.Error(message);
    return err as globalThis.Error & { digest?: string };
  };

  const createMockErrorWithDigest = () => {
    const err = new window.Error('Test error');
    return Object.assign(err, { digest: 'abc123' }) as globalThis.Error & { digest?: string };
  };

  beforeEach(() => {
    mockReset.mockClear();
    // Create a fresh spy for each test
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  it('renders without crashing', () => {
    const mockError = createMockError('Test error message');
    render(<Error error={mockError} reset={mockReset} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('displays the error title', () => {
    const mockError = createMockError('Test error message');
    render(<Error error={mockError} reset={mockReset} />);
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  it('displays the error message', () => {
    const mockError = createMockError('Test error message');
    render(<Error error={mockError} reset={mockReset} />);
    expect(
      screen.getByText(/We apologise for the inconvenience/i)
    ).toBeInTheDocument();
  });

  it('displays the "Try again" button', () => {
    const mockError = createMockError('Test error message');
    render(<Error error={mockError} reset={mockReset} />);
    expect(screen.getByText('Try again')).toBeInTheDocument();
  });

  it('displays the "Return home" link', () => {
    const mockError = createMockError('Test error message');
    render(<Error error={mockError} reset={mockReset} />);
    const homeLink = screen.getByText('Return home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.closest('a')).toHaveAttribute('href', '/');
  });

  it('displays the "Contact us" link', () => {
    const mockError = createMockError('Test error message');
    render(<Error error={mockError} reset={mockReset} />);
    const contactLink = screen.getByText('Contact us');
    expect(contactLink).toBeInTheDocument();
    expect(contactLink.closest('a')).toHaveAttribute('href', '/book-now');
  });

  it('calls reset function when "Try again" is clicked', () => {
    const mockError = createMockError('Test error message');
    render(<Error error={mockError} reset={mockReset} />);

    fireEvent.click(screen.getByText('Try again'));

    expect(mockReset).toHaveBeenCalledTimes(1);
  });

  it('logs the error to console on mount', () => {
    const mockError = createMockError('Test error message');
    render(<Error error={mockError} reset={mockReset} />);

    expect(consoleErrorSpy).toHaveBeenCalledWith('Application error:', mockError);
  });

  it('logs error with digest when available', () => {
    const mockErrorWithDigest = createMockErrorWithDigest();
    render(<Error error={mockErrorWithDigest} reset={mockReset} />);

    expect(consoleErrorSpy).toHaveBeenCalledWith('Application error:', mockErrorWithDigest);
  });

  it('re-logs when error prop changes', () => {
    const mockError = createMockError('Test error message');
    const { rerender } = render(<Error error={mockError} reset={mockReset} />);

    const newError = createMockError('New error');
    rerender(<Error error={newError} reset={mockReset} />);

    expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
    expect(consoleErrorSpy).toHaveBeenLastCalledWith('Application error:', newError);
  });

  it('has the correct structure with container and content', () => {
    const mockError = createMockError('Test error message');
    const { container } = render(<Error error={mockError} reset={mockReset} />);

    // Check that there are div elements with proper nesting
    const outerDiv = container.firstChild as HTMLElement;
    expect(outerDiv.tagName).toBe('DIV');

    const innerDiv = outerDiv.firstChild as HTMLElement;
    expect(innerDiv.tagName).toBe('DIV');
  });

  it('has h1 heading for accessibility', () => {
    const mockError = createMockError('Test error message');
    render(<Error error={mockError} reset={mockReset} />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toBe('Something went wrong');
  });
});
