import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loading from '../../src/app/loading';

describe('Loading Page', () => {
  it('renders without crashing', () => {
    const { container } = render(<Loading />);
    expect(container).toBeInTheDocument();
  });

  it('displays loading text', () => {
    render(<Loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('has an accessible loading indicator', () => {
    render(<Loading />);
    // The spinner should have aria-label for screen readers
    const spinner = document.querySelector('[aria-label="Loading content"]');
    expect(spinner).toBeInTheDocument();
  });

  it('renders the spinner element', () => {
    const { container } = render(<Loading />);
    // Check for spinner class element
    const spinner = container.querySelector('div > div');
    expect(spinner).toBeInTheDocument();
  });

  it('renders inner spinner element', () => {
    const { container } = render(<Loading />);
    const spinnerInner = container.querySelector('div > div > div');
    expect(spinnerInner).toBeInTheDocument();
  });

  it('has correct structure', () => {
    const { container } = render(<Loading />);

    // Check for container div
    const loadingContainer = container.firstChild as HTMLElement;
    expect(loadingContainer.tagName).toBe('DIV');

    // Check for p tag with loading text
    const loadingText = container.querySelector('p');
    expect(loadingText).toBeInTheDocument();
    expect(loadingText?.textContent).toBe('Loading...');
  });

  it('is a simple component without interactive elements', () => {
    render(<Loading />);

    // Should not have any buttons or links
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
