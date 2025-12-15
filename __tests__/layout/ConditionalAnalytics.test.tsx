import { render, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import ConditionalAnalytics from '../../src/components/layout/ConditionalAnalytics';

// Mock Next.js Script component
jest.mock('next/script', () => {
  return function MockScript({ id, children, ...props }: { id?: string; children?: string; src?: string }) {
    if (children) {
      return <script id={id} data-testid={id || 'script'}>{children}</script>;
    }
    return <script {...props} data-testid={props.src ? 'gtag-script' : 'script'} />;
  };
});

describe('ConditionalAnalytics Component', () => {
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  };

  const addEventListenerMock = jest.fn();
  const removeEventListenerMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    // Setup localStorage mock
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
      writable: true,
    });

    // Setup dataLayer
    Object.defineProperty(window, 'dataLayer', {
      value: [],
      writable: true,
    });

    // Setup event listeners
    window.addEventListener = addEventListenerMock;
    window.removeEventListener = removeEventListenerMock;
  });

  it('renders nothing when consent is not accepted', () => {
    localStorageMock.getItem.mockReturnValue(null);

    const { container } = render(<ConditionalAnalytics />);

    expect(container.innerHTML).toBe('');
  });

  it('renders nothing when consent is declined', () => {
    localStorageMock.getItem.mockReturnValue('declined');

    const { container } = render(<ConditionalAnalytics />);

    expect(container.innerHTML).toBe('');
  });

  it('renders analytics scripts when consent is accepted', async () => {
    localStorageMock.getItem.mockReturnValue('accepted');

    const { container } = render(<ConditionalAnalytics />);

    await waitFor(() => {
      expect(container.querySelector('[data-testid="gtag-script"]')).toBeInTheDocument();
      expect(container.querySelector('#google-analytics')).toBeInTheDocument();
    });
  });

  it('initializes dataLayer when consent is accepted', async () => {
    localStorageMock.getItem.mockReturnValue('accepted');

    render(<ConditionalAnalytics />);

    await waitFor(() => {
      expect(window.dataLayer).toBeDefined();
    });
  });

  it('checks localStorage on mount', () => {
    localStorageMock.getItem.mockReturnValue(null);

    render(<ConditionalAnalytics />);

    expect(localStorageMock.getItem).toHaveBeenCalledWith('cookie-consent');
  });

  it('sets up event listener for consent changes', () => {
    localStorageMock.getItem.mockReturnValue(null);

    render(<ConditionalAnalytics />);

    expect(addEventListenerMock).toHaveBeenCalledWith(
      'cookie-consent-changed',
      expect.any(Function)
    );
  });

  it('cleans up event listener on unmount', () => {
    localStorageMock.getItem.mockReturnValue(null);

    const { unmount } = render(<ConditionalAnalytics />);
    unmount();

    expect(removeEventListenerMock).toHaveBeenCalledWith(
      'cookie-consent-changed',
      expect.any(Function)
    );
  });

  it('responds to consent changes via custom event', async () => {
    localStorageMock.getItem.mockReturnValue(null);

    const { container, rerender } = render(<ConditionalAnalytics />);

    // Initially no scripts
    expect(container.innerHTML).toBe('');

    // Get the event handler that was registered
    const eventHandler = addEventListenerMock.mock.calls.find(
      (call) => call[0] === 'cookie-consent-changed'
    )?.[1];

    // Simulate consent being accepted
    localStorageMock.getItem.mockReturnValue('accepted');

    // Trigger the event handler
    await act(async () => {
      eventHandler?.();
    });

    // Rerender to see the changes
    rerender(<ConditionalAnalytics />);

    await waitFor(() => {
      expect(container.querySelector('[data-testid="gtag-script"]')).toBeInTheDocument();
    });
  });

  it('includes correct Google Analytics ID in script', async () => {
    localStorageMock.getItem.mockReturnValue('accepted');

    const { container } = render(<ConditionalAnalytics />);

    await waitFor(() => {
      const gtagScript = container.querySelector('[data-testid="gtag-script"]');
      expect(gtagScript?.getAttribute('src')).toContain('G-3528EDPEXW');
    });
  });

  it('includes anonymize_ip in GA config', async () => {
    localStorageMock.getItem.mockReturnValue('accepted');

    const { container } = render(<ConditionalAnalytics />);

    await waitFor(() => {
      const analyticsScript = container.querySelector('#google-analytics');
      expect(analyticsScript?.textContent).toContain('anonymize_ip: true');
    });
  });
});
