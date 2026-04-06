import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ScrollToTop from '../../src/components/ui/scroll-to-top';

// Mock document.documentElement and document.body scroll properties
Object.defineProperty(document.documentElement, 'scrollTop', {
  writable: true,
  value: 0,
});

Object.defineProperty(document.body, 'scrollTop', {
  writable: true,
  value: 0,
});

describe('ScrollToTop Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Reset scroll positions
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });

  describe('Basic Rendering', () => {
    it('renders without crashing', () => {
      render(<ScrollToTop />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders as a button element', () => {
      render(<ScrollToTop />);
      const button = screen.getByRole('button');
      expect(button.tagName.toLowerCase()).toBe('button');
    });

    it('displays the up arrow symbol', () => {
      render(<ScrollToTop />);
      expect(screen.getByText('↑')).toBeInTheDocument();
    });

    it('has aria-label for accessibility', () => {
      render(<ScrollToTop />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Scroll to top');
    });
  });

  describe('Scroll Functionality', () => {
    it('scrolls to top when clicked', () => {
      // Set initial scroll positions
      document.documentElement.scrollTop = 500;
      document.body.scrollTop = 500;

      render(<ScrollToTop />);
      const button = screen.getByRole('button');

      fireEvent.click(button);

      expect(document.documentElement.scrollTop).toBe(0);
      expect(document.body.scrollTop).toBe(0);
    });

    it('handles multiple clicks correctly', () => {
      render(<ScrollToTop />);
      const button = screen.getByRole('button');

      // First click
      document.documentElement.scrollTop = 300;
      document.body.scrollTop = 300;
      fireEvent.click(button);

      expect(document.documentElement.scrollTop).toBe(0);
      expect(document.body.scrollTop).toBe(0);

      // Second click (already at top)
      fireEvent.click(button);

      expect(document.documentElement.scrollTop).toBe(0);
      expect(document.body.scrollTop).toBe(0);
    });

    it('works with user event clicks', async () => {
      const user = userEvent.setup();
      document.documentElement.scrollTop = 1000;
      document.body.scrollTop = 1000;

      render(<ScrollToTop />);
      const button = screen.getByRole('button');

      await user.click(button);

      expect(document.documentElement.scrollTop).toBe(0);
      expect(document.body.scrollTop).toBe(0);
    });

    it('resets both document element and body scroll', () => {
      // Some browsers use documentElement, others use body
      document.documentElement.scrollTop = 400;
      document.body.scrollTop = 600;

      render(<ScrollToTop />);
      const button = screen.getByRole('button');

      fireEvent.click(button);

      expect(document.documentElement.scrollTop).toBe(0);
      expect(document.body.scrollTop).toBe(0);
    });
  });

  describe('Accessibility', () => {
    it('is focusable', () => {
      render(<ScrollToTop />);
      const button = screen.getByRole('button');

      button.focus();
      expect(document.activeElement).toBe(button);
    });

    it('can be activated with keyboard', async () => {
      const user = userEvent.setup();
      document.documentElement.scrollTop = 500;

      render(<ScrollToTop />);
      const button = screen.getByRole('button');

      button.focus();
      await user.keyboard('{Enter}');

      expect(document.documentElement.scrollTop).toBe(0);
    });

    it('can be activated with spacebar', async () => {
      const user = userEvent.setup();
      document.documentElement.scrollTop = 500;

      render(<ScrollToTop />);
      const button = screen.getByRole('button');

      button.focus();
      await user.keyboard(' ');

      expect(document.documentElement.scrollTop).toBe(0);
    });

    it('maintains button semantics', () => {
      render(<ScrollToTop />);
      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
      expect(button.tagName.toLowerCase()).toBe('button');
    });

    it('has aria-label for screen readers', () => {
      render(<ScrollToTop />);
      const button = screen.getByRole('button');

      expect(button).toHaveAttribute('aria-label', 'Scroll to top');
    });
  });

  describe('Component Lifecycle', () => {
    it('maintains state across re-renders', () => {
      const { rerender } = render(<ScrollToTop />);

      expect(screen.getByRole('button')).toBeInTheDocument();

      rerender(<ScrollToTop />);

      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(screen.getByText('↑')).toBeInTheDocument();
    });

    it('cleans up properly when unmounted', () => {
      const { unmount } = render(<ScrollToTop />);

      expect(screen.getByRole('button')).toBeInTheDocument();

      unmount();

      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
  });

  describe('User Experience', () => {
    it('provides clear visual indication of function', () => {
      render(<ScrollToTop />);

      // Up arrow clearly indicates scroll-to-top functionality
      expect(screen.getByText('↑')).toBeInTheDocument();
    });
  });

  describe('Performance', () => {
    it('uses direct DOM manipulation for optimal performance', () => {
      // This test ensures the component uses direct scrollTop assignment
      // rather than smooth scrolling or animation which could be slower
      document.documentElement.scrollTop = 1000;

      render(<ScrollToTop />);
      const button = screen.getByRole('button');

      fireEvent.click(button);

      // Should be instant, not animated
      expect(document.documentElement.scrollTop).toBe(0);
    });

    it('handles rapid clicks without issues', () => {
      render(<ScrollToTop />);
      const button = screen.getByRole('button');

      // Rapid fire clicks should not cause issues
      for (let i = 0; i < 10; i++) {
        document.documentElement.scrollTop = 100;
        fireEvent.click(button);
        expect(document.documentElement.scrollTop).toBe(0);
      }
    });
  });
});
