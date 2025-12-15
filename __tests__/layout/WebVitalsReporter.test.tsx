import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import WebVitalsReporter from '../../src/components/layout/WebVitalsReporter';

// Mock the vitals module
jest.mock('../../src/lib/vitals', () => ({
  initWebVitals: jest.fn(),
}));

import { initWebVitals } from '../../src/lib/vitals';

describe('WebVitalsReporter Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const { container } = render(<WebVitalsReporter />);
    expect(container).toBeInTheDocument();
  });

  it('returns null (renders nothing visible)', () => {
    const { container } = render(<WebVitalsReporter />);
    expect(container.innerHTML).toBe('');
  });

  it('initializes Web Vitals on mount', () => {
    render(<WebVitalsReporter />);

    expect(initWebVitals).toHaveBeenCalledTimes(1);
  });

  it('only initializes Web Vitals once', () => {
    const { rerender } = render(<WebVitalsReporter />);

    // Rerender the component
    rerender(<WebVitalsReporter />);

    // Should still only have been called once (useEffect with [] dependency)
    expect(initWebVitals).toHaveBeenCalledTimes(1);
  });

  it('calls initWebVitals with no arguments', () => {
    render(<WebVitalsReporter />);

    expect(initWebVitals).toHaveBeenCalledWith();
  });
});
