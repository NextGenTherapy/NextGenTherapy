import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Button from '../../src/components/ui/button';

// Mock Next.js components
jest.mock('next/link', () => {
  return function MockLink({ children, href, className, ...props }: any) {
    return <a href={href} className={className} {...props}>{children}</a>;
  };
});

describe('Button Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Button Rendering', () => {
    it('renders as a button by default', () => {
      render(<Button>Click me</Button>);

      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('Click me');
      expect(button).toHaveAttribute('type', 'button');
    });

    it('renders as a link when href is provided with internal path', () => {
      render(<Button href="/about">Go to About</Button>);

      const link = screen.getByRole('link');
      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent('Go to About');
      expect(link).toHaveAttribute('href', '/about');
    });

    it('does not render as link for external URLs (security protection)', () => {
      render(<Button href="https://external.com">External Link</Button>);

      // Should render as button, not link, for security
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });

    it('does not render as link for relative external paths', () => {
      render(<Button href="../external">External Path</Button>);

      // Should render as button, not link, for security
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });
  });

  describe('Button Types', () => {
    it('renders with submit type when specified', () => {
      render(<Button type="submit">Submit</Button>);

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
    });

    it('renders with reset type when specified', () => {
      render(<Button type="reset">Reset</Button>);

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'reset');
    });

    it('defaults to button type when not specified', () => {
      render(<Button>Default Button</Button>);

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'button');
    });
  });

  describe('Button States', () => {
    it('renders as disabled when disabled prop is true', () => {
      render(<Button disabled>Disabled Button</Button>);

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('renders as enabled when disabled prop is false', () => {
      render(<Button disabled={false}>Enabled Button</Button>);

      const button = screen.getByRole('button');
      expect(button).not.toBeDisabled();
    });

    it('renders as enabled by default', () => {
      render(<Button>Default Button</Button>);

      const button = screen.getByRole('button');
      expect(button).not.toBeDisabled();
    });
  });

  describe('Click Handling', () => {
    it('calls onClick handler when button is clicked', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick}>Click me</Button>);

      const button = screen.getByRole('button');
      await user.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when button is disabled', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick} disabled>Disabled Button</Button>);

      const button = screen.getByRole('button');
      await user.click(button);

      expect(handleClick).not.toHaveBeenCalled();
    });

    it('handles click with fireEvent', () => {
      const handleClick = jest.fn();

      render(<Button onClick={handleClick}>Click me</Button>);

      const button = screen.getByRole('button');
      fireEvent.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Styling and Classes', () => {
    it('applies default button class when no className provided', () => {
      render(<Button>Default Style</Button>);

      const button = screen.getByRole('button');
      expect(button).toHaveClass('button');
    });

    it('applies custom className when provided', () => {
      render(<Button className="custom-button">Custom Style</Button>);

      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-button');
      expect(button).not.toHaveClass('button');
    });

    it('applies custom className to link when href provided', () => {
      render(<Button href="/test" className="custom-link">Link Style</Button>);

      const link = screen.getByRole('link');
      expect(link).toHaveClass('custom-link');
    });

    it('applies default button class to link when no className provided', () => {
      render(<Button href="/test">Default Link Style</Button>);

      const link = screen.getByRole('link');
      expect(link).toHaveClass('button');
    });
  });

  describe('HTML Attributes', () => {
    it('passes through additional HTML attributes to button', () => {
      render(
        <Button
          data-testid="custom-button"
          aria-label="Custom button label"
          title="Button title"
        >
          Button with attributes
        </Button>
      );

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('data-testid', 'custom-button');
      expect(button).toHaveAttribute('aria-label', 'Custom button label');
      expect(button).toHaveAttribute('title', 'Button title');
    });

    it('does not pass through type attribute to Next.js Link', () => {
      render(<Button href="/test" type="submit">Link Button</Button>);

      const link = screen.getByRole('link');
      expect(link).not.toHaveAttribute('type');
    });
  });

  describe('Children Content', () => {
    it('renders string children correctly', () => {
      render(<Button>Simple text</Button>);

      expect(screen.getByText('Simple text')).toBeInTheDocument();
    });

    it('renders JSX children correctly', () => {
      render(
        <Button>
          <span>Icon</span>
          <span>Text</span>
        </Button>
      );

      expect(screen.getByText('Icon')).toBeInTheDocument();
      expect(screen.getByText('Text')).toBeInTheDocument();
    });

    it('renders complex children in link mode', () => {
      render(
        <Button href="/complex">
          <strong>Bold</strong> and <em>italic</em> text
        </Button>
      );

      const link = screen.getByRole('link');
      expect(link).toContainHTML('<strong>Bold</strong> and <em>italic</em> text');
    });
  });

  describe('Security Features', () => {
    it('only allows internal paths starting with /', () => {
      // Should render as link for internal paths
      const { unmount } = render(<Button href="/internal">Internal Link</Button>);
      expect(screen.getByRole('link')).toBeInTheDocument();
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
      unmount();

      // Should render as button (blocked) for non-internal paths
      render(<Button href="javascript:alert('xss')">XSS Attempt</Button>);
      expect(screen.queryByRole('link')).not.toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('blocks external URLs', () => {
      const externalUrls = [
        'https://evil.com',
        'http://malicious.site',
        'mailto:test@example.com',
        'tel:+1234567890',
        'javascript:alert("xss")',
        'data:text/html,<script>alert("xss")</script>',
        '../external',
        './external',
        'external.com'
      ];

      externalUrls.forEach(url => {
        const { unmount } = render(<Button href={url}>External</Button>);
        expect(screen.queryByRole('link')).not.toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
        unmount();
      });
    });
  });

  describe('Accessibility', () => {
    it('maintains button semantics', () => {
      render(<Button>Accessible Button</Button>);

      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('maintains link semantics when rendered as link', () => {
      render(<Button href="/accessible">Accessible Link</Button>);

      const link = screen.getByRole('link');
      expect(link).toBeInTheDocument();
    });

    it('properly handles focus', () => {
      render(<Button>Focusable Button</Button>);

      const button = screen.getByRole('button');
      button.focus();
      expect(document.activeElement).toBe(button);
    });

    it('supports keyboard interaction', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick}>Keyboard Button</Button>);

      const button = screen.getByRole('button');
      button.focus();
      await user.keyboard('{Enter}');

      expect(handleClick).toHaveBeenCalled();
    });
  });

  describe('Form Integration', () => {
    it('works as submit button in forms', () => {
      const handleSubmit = jest.fn(e => e.preventDefault());

      render(
        <form onSubmit={handleSubmit}>
          <Button type="submit">Submit Form</Button>
        </form>
      );

      const button = screen.getByRole('button');
      fireEvent.click(button);

      expect(handleSubmit).toHaveBeenCalled();
    });

    it('works as reset button in forms', () => {
      render(
        <form>
          <input defaultValue="test" />
          <Button type="reset">Reset Form</Button>
        </form>
      );

      const button = screen.getByRole('button');
      const input = screen.getByRole('textbox');

      // Change input value
      fireEvent.change(input, { target: { value: 'changed' } });
      expect(input).toHaveValue('changed');

      // Reset form
      fireEvent.click(button);
      expect(input).toHaveValue('test');
    });
  });
});