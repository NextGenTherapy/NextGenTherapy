import { render, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import WebVitalsReporter from '../../src/components/layout/WebVitalsReporter';

jest.mock('../../src/lib/vitals', () => ({
  initWebVitals: jest.fn(),
}));

import { initWebVitals } from '../../src/lib/vitals';

describe('WebVitalsReporter Component', () => {
  const originalNodeEnv = process.env.NODE_ENV;

  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
    Object.defineProperty(process.env, 'NODE_ENV', {
      value: 'production',
      configurable: true,
      writable: true,
    });
  });

  afterAll(() => {
    Object.defineProperty(process.env, 'NODE_ENV', {
      value: originalNodeEnv,
      configurable: true,
      writable: true,
    });
  });

  it('renders nothing visible', () => {
    const { container } = render(<WebVitalsReporter />);
    expect(container.innerHTML).toBe('');
  });

  it('does not initialize Web Vitals without cookie consent', async () => {
    render(<WebVitalsReporter />);
    // Allow effects to flush
    await act(async () => {
      await Promise.resolve();
    });
    expect(initWebVitals).not.toHaveBeenCalled();
  });

  it('initializes Web Vitals when consent is already accepted on mount', async () => {
    localStorage.setItem('cookie-consent', 'accepted');
    render(<WebVitalsReporter />);
    await waitFor(() => {
      expect(initWebVitals).toHaveBeenCalledTimes(1);
    });
    expect(initWebVitals).toHaveBeenCalledWith();
  });

  it('initializes Web Vitals when consent is granted after mount', async () => {
    render(<WebVitalsReporter />);
    await act(async () => {
      localStorage.setItem('cookie-consent', 'accepted');
      window.dispatchEvent(new CustomEvent('cookie-consent-changed'));
    });
    await waitFor(() => {
      expect(initWebVitals).toHaveBeenCalledTimes(1);
    });
  });

  it('does not initialize Web Vitals when consent is declined', async () => {
    localStorage.setItem('cookie-consent', 'declined');
    render(<WebVitalsReporter />);
    await act(async () => {
      await Promise.resolve();
    });
    expect(initWebVitals).not.toHaveBeenCalled();
  });

  it('skips initialization outside production', async () => {
    Object.defineProperty(process.env, 'NODE_ENV', {
      value: 'development',
      configurable: true,
      writable: true,
    });
    localStorage.setItem('cookie-consent', 'accepted');
    render(<WebVitalsReporter />);
    await act(async () => {
      await Promise.resolve();
    });
    expect(initWebVitals).not.toHaveBeenCalled();
  });
});
