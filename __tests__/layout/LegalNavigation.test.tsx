import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import LegalNavigation from '../../src/components/layout/legal-navigation';

// Mock Next.js router
const mockPush = jest.fn();
const mockBack = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
    back: mockBack,
  }),
}));

// Mock the Button component
jest.mock('../../src/components/ui/button', () => {
  return function MockButton({ children, onClick, href, ...props }: any) {
    if (href) {
      return (
        <a href={href} {...props}>
          {children}
        </a>
      );
    }
    return (
      <button onClick={onClick} {...props}>
        {children}
      </button>
    );
  };
});

describe('LegalNavigation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when currentPage is privacy', () => {
    it('renders navigation for privacy policy page', () => {
      render(<LegalNavigation currentPage="privacy" />);

      expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /view terms of service/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    });

    it('links to terms page correctly', () => {
      render(<LegalNavigation currentPage="privacy" />);

      const termsLink = screen.getByRole('link', { name: /view terms of service/i });
      expect(termsLink).toHaveAttribute('href', '/terms');
    });
  });

  describe('when currentPage is terms', () => {
    it('renders navigation for terms page', () => {
      render(<LegalNavigation currentPage="terms" />);

      expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /view privacy policy/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    });

    it('links to privacy policy page correctly', () => {
      render(<LegalNavigation currentPage="terms" />);

      const privacyLink = screen.getByRole('link', { name: /view privacy policy/i });
      expect(privacyLink).toHaveAttribute('href', '/privacy-policy');
    });
  });

  describe('back button functionality', () => {
    it('calls router.back() when browser history exists', async () => {
      const user = userEvent.setup();

      // Mock window.history.length > 1
      Object.defineProperty(window, 'history', {
        value: { length: 5 },
        writable: true,
      });

      render(<LegalNavigation currentPage="privacy" />);

      const backButton = screen.getByRole('button', { name: /back/i });
      await user.click(backButton);

      expect(mockBack).toHaveBeenCalledTimes(1);
      expect(mockPush).not.toHaveBeenCalled();
    });

    it('navigates to home when no browser history exists', async () => {
      const user = userEvent.setup();

      // Mock window.history.length = 1
      Object.defineProperty(window, 'history', {
        value: { length: 1 },
        writable: true,
      });

      render(<LegalNavigation currentPage="privacy" />);

      const backButton = screen.getByRole('button', { name: /back/i });
      await user.click(backButton);

      expect(mockPush).toHaveBeenCalledWith('/');
      expect(mockBack).not.toHaveBeenCalled();
    });
  });

  describe('home link', () => {
    it('links to home page correctly', () => {
      render(<LegalNavigation currentPage="privacy" />);

      const homeLink = screen.getByRole('link', { name: /home/i });
      expect(homeLink).toHaveAttribute('href', '/');
    });
  });

  describe('accessibility', () => {
    it('has proper aria-label for back button', () => {
      render(<LegalNavigation currentPage="privacy" />);

      const backButton = screen.getByRole('button', { name: /back/i });
      expect(backButton).toHaveAttribute('aria-label', 'Go back to previous page');
    });

    it('has proper button type', () => {
      render(<LegalNavigation currentPage="terms" />);

      const backButton = screen.getByRole('button', { name: /back/i });
      expect(backButton).toHaveAttribute('type', 'button');
    });
  });
});
