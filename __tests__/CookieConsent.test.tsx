import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CookieConsent from '../src/components/layout/CookieConsent';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

// Mock window.gtag
const mockGtag = jest.fn();

beforeEach(() => {
  // Reset mocks
  localStorageMock.getItem.mockClear();
  localStorageMock.setItem.mockClear();
  mockGtag.mockClear();

  // Mock localStorage
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
    writable: true,
  });

  // Mock gtag
  Object.defineProperty(window, 'gtag', {
    value: mockGtag,
    writable: true,
  });
});

describe('CookieConsent Component', () => {
  test('shows cookie consent banner when no consent is stored', () => {
    localStorageMock.getItem.mockReturnValue(null);

    render(<CookieConsent />);

    expect(screen.getByText('We use cookies')).toBeInTheDocument();
    expect(screen.getByText('Accept all cookies')).toBeInTheDocument();
    expect(screen.getByText('Essential cookies only')).toBeInTheDocument();
  });

  test('does not show banner when consent is already given', () => {
    localStorageMock.getItem.mockReturnValue('accepted');

    render(<CookieConsent />);

    expect(screen.queryByText('We use cookies')).not.toBeInTheDocument();
  });

  test('sets localStorage and hides banner when user accepts cookies', async () => {
    localStorageMock.getItem.mockReturnValue(null);

    render(<CookieConsent />);

    const acceptButton = screen.getByText('Accept all cookies');
    fireEvent.click(acceptButton);

    expect(localStorageMock.setItem).toHaveBeenCalledWith('cookie-consent', 'accepted');

    await waitFor(() => {
      expect(screen.queryByText('We use cookies')).not.toBeInTheDocument();
    });
  });

  test('sets localStorage to declined and disables analytics when user declines cookies', async () => {
    localStorageMock.getItem.mockReturnValue(null);

    render(<CookieConsent />);

    const declineButton = screen.getByText('Essential cookies only');
    fireEvent.click(declineButton);

    expect(localStorageMock.setItem).toHaveBeenCalledWith('cookie-consent', 'declined');

    // Check that gtag is called to disable page views
    await waitFor(() => {
      expect(mockGtag).toHaveBeenCalledWith('config', 'G-3528EDPEXW', {
        send_page_view: false,
      });
    });

    await waitFor(() => {
      expect(screen.queryByText('We use cookies')).not.toBeInTheDocument();
    });
  });

  test('provides link to privacy policy', () => {
    localStorageMock.getItem.mockReturnValue(null);

    render(<CookieConsent />);

    const privacyLink = screen.getByText('Learn more in our privacy policy');
    expect(privacyLink.closest('a')).toHaveAttribute('href', '/privacy-policy');
  });
});
