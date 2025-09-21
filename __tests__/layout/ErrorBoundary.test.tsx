import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorBoundary from '../../src/components/layout/ErrorBoundary';

// Component that throws an error for testing
function ThrowError({ shouldThrow = false }: { shouldThrow?: boolean }) {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error here</div>;
}

// Component that throws an error in render
function AlwaysThrows() {
  throw new Error('Component crashed');
}

describe('ErrorBoundary Component', () => {
  // Suppress console.error for these tests since we're intentionally throwing errors
  const originalError = console.error;
  beforeAll(() => {
    console.error = jest.fn();
  });

  afterAll(() => {
    console.error = originalError;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Normal Operation', () => {
    it('renders children when there is no error', () => {
      render(
        <ErrorBoundary>
          <div>Child component</div>
        </ErrorBoundary>
      );

      expect(screen.getByText('Child component')).toBeInTheDocument();
      expect(screen.queryByText('Something went wrong')).not.toBeInTheDocument();
    });

    it('renders multiple children when there is no error', () => {
      render(
        <ErrorBoundary>
          <div>First child</div>
          <div>Second child</div>
        </ErrorBoundary>
      );

      expect(screen.getByText('First child')).toBeInTheDocument();
      expect(screen.getByText('Second child')).toBeInTheDocument();
    });
  });

  describe('Error Handling', () => {
    it('catches errors and displays default error UI', () => {
      render(
        <ErrorBoundary>
          <AlwaysThrows />
        </ErrorBoundary>
      );

      expect(screen.getByText('Something went wrong')).toBeInTheDocument();
      expect(
        screen.getByText(/we're sorry, but something unexpected happened/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/please try refreshing the page/i)).toBeInTheDocument();
    });

    it('renders custom fallback UI when provided', () => {
      const customFallback = <div>Custom error message</div>;

      render(
        <ErrorBoundary fallback={customFallback}>
          <AlwaysThrows />
        </ErrorBoundary>
      );

      expect(screen.getByText('Custom error message')).toBeInTheDocument();
      expect(screen.queryByText('Something went wrong')).not.toBeInTheDocument();
    });

    it('logs errors when they occur', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      render(
        <ErrorBoundary>
          <AlwaysThrows />
        </ErrorBoundary>
      );

      expect(consoleSpy).toHaveBeenCalledWith(
        'Error caught by boundary:',
        expect.any(Error),
        expect.any(Object)
      );

      consoleSpy.mockRestore();
    });

    it('does not re-render children after error is caught', () => {
      const { rerender } = render(
        <ErrorBoundary>
          <AlwaysThrows />
        </ErrorBoundary>
      );

      expect(screen.getByText('Something went wrong')).toBeInTheDocument();

      // Re-render with different children should still show error UI
      rerender(
        <ErrorBoundary>
          <div>New child that works</div>
        </ErrorBoundary>
      );

      expect(screen.getByText('Something went wrong')).toBeInTheDocument();
      expect(screen.queryByText('New child that works')).not.toBeInTheDocument();
    });
  });

  describe('Error Recovery', () => {
    it('can recover by rendering a new ErrorBoundary instance', () => {
      const { unmount } = render(
        <ErrorBoundary>
          <AlwaysThrows />
        </ErrorBoundary>
      );

      expect(screen.getByText('Something went wrong')).toBeInTheDocument();

      // Unmount the component
      unmount();

      // Render a fresh ErrorBoundary instance
      render(
        <ErrorBoundary>
          <div>Recovered child</div>
        </ErrorBoundary>
      );

      expect(screen.getByText('Recovered child')).toBeInTheDocument();
      expect(screen.queryByText('Something went wrong')).not.toBeInTheDocument();
    });
  });

  describe('Default Error UI', () => {
    it('has proper HTML structure for default error UI', () => {
      render(
        <ErrorBoundary>
          <AlwaysThrows />
        </ErrorBoundary>
      );

      const errorDiv = screen.getByText('Something went wrong').closest('div');
      expect(errorDiv?.className).toContain('errorBoundary');

      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Something went wrong');
    });

    it('contains user-friendly error message', () => {
      render(
        <ErrorBoundary>
          <AlwaysThrows />
        </ErrorBoundary>
      );

      expect(screen.getByText(/we're sorry/i)).toBeInTheDocument();
      expect(screen.getByText(/something unexpected happened/i)).toBeInTheDocument();
      expect(screen.getByText(/try refreshing the page/i)).toBeInTheDocument();
    });

    it('does not expose technical error details to user', () => {
      render(
        <ErrorBoundary>
          <AlwaysThrows />
        </ErrorBoundary>
      );

      // Should not show the actual error message "Component crashed"
      expect(screen.queryByText('Component crashed')).not.toBeInTheDocument();
      expect(screen.queryByText('Test error')).not.toBeInTheDocument();
    });
  });

  describe('Custom Fallback', () => {
    it('renders custom fallback with React elements', () => {
      const customFallback = (
        <div>
          <h1>Oops!</h1>
          <p>Something broke</p>
        </div>
      );

      render(
        <ErrorBoundary fallback={customFallback}>
          <AlwaysThrows />
        </ErrorBoundary>
      );

      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Oops!');
      expect(screen.getByText('Something broke')).toBeInTheDocument();
    });

    it('renders custom fallback with string content', () => {
      render(
        <ErrorBoundary fallback="Simple error message">
          <AlwaysThrows />
        </ErrorBoundary>
      );

      expect(screen.getByText('Simple error message')).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('handles null children', () => {
      render(<ErrorBoundary>{null}</ErrorBoundary>);

      // Should render without error
      expect(screen.queryByText('Something went wrong')).not.toBeInTheDocument();
    });

    it('handles undefined children', () => {
      render(<ErrorBoundary>{undefined}</ErrorBoundary>);

      // Should render without error
      expect(screen.queryByText('Something went wrong')).not.toBeInTheDocument();
    });

    it('handles empty children', () => {
      render(<ErrorBoundary></ErrorBoundary>);

      // Should render without error
      expect(screen.queryByText('Something went wrong')).not.toBeInTheDocument();
    });

    it('handles conditional rendering that might throw', () => {
      const { rerender } = render(
        <ErrorBoundary>
          <ThrowError shouldThrow={false} />
        </ErrorBoundary>
      );

      expect(screen.getByText('No error here')).toBeInTheDocument();

      // Now make it throw
      rerender(
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );

      expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    });
  });

  describe('Component Lifecycle', () => {
    it('properly implements getDerivedStateFromError', () => {
      // This tests the static method that updates state when error occurs
      const stateUpdate = ErrorBoundary.getDerivedStateFromError(new Error('test'));
      expect(stateUpdate).toEqual({ hasError: true });
    });

    it('calls componentDidCatch when error occurs', () => {
      const spy = jest.spyOn(ErrorBoundary.prototype, 'componentDidCatch');

      render(
        <ErrorBoundary>
          <AlwaysThrows />
        </ErrorBoundary>
      );

      expect(spy).toHaveBeenCalledWith(
        expect.any(Error),
        expect.objectContaining({
          componentStack: expect.any(String),
        })
      );

      spy.mockRestore();
    });
  });

  describe('Accessibility', () => {
    it('error message is accessible', () => {
      render(
        <ErrorBoundary>
          <AlwaysThrows />
        </ErrorBoundary>
      );

      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Something went wrong');
    });
  });
});
