import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ContactForm from '../../src/components/forms/contact-form';

// Mock fetch
global.fetch = jest.fn();

// Mock next/link
jest.mock('next/link', () => {
  return function MockLink({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) {
    return <a href={href}>{children}</a>;
  };
});

describe('ContactForm Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (global.fetch as jest.Mock).mockClear();
  });

  describe('Basic Rendering', () => {
    it('renders all form elements', () => {
      render(<ContactForm />);

      // Name field
      expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
      // Email field
      expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
      // Phone field
      expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
      // Contact method radio group
      expect(screen.getByText(/how would you prefer to be contacted/i)).toBeInTheDocument();
      // Enquiry for radio group
      expect(screen.getByText(/are you contacting me about yourself/i)).toBeInTheDocument();
      // Message field
      expect(screen.getByLabelText(/what's bringing you to therapy/i)).toBeInTheDocument();
      // GDPR consent checkbox
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
      // Submit button
      expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
    });

    it('has proper form structure', () => {
      const { container } = render(<ContactForm />);
      const form = container.querySelector('form');
      expect(form).toBeInTheDocument();
      expect(form).toHaveClass('contactForm');
    });

    it('has correct default radio selections', () => {
      render(<ContactForm />);

      // Email is default contact method
      const emailRadio = screen.getByRole('radio', { name: /^email$/i });
      expect(emailRadio).toBeChecked();

      // Myself is default enquiry for
      const myselfRadio = screen.getByRole('radio', { name: /myself/i });
      expect(myselfRadio).toBeChecked();
    });

    it('email field has correct type', () => {
      render(<ContactForm />);
      expect(screen.getByLabelText(/email address/i)).toHaveAttribute('type', 'email');
    });
  });

  describe('Form Validation', () => {
    it('prevents submission with empty required fields', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      const submitButton = screen.getByRole('button', { name: /send/i });
      await user.click(submitButton);

      // Should not call fetch with empty form (validation prevents submission)
      expect(global.fetch).not.toHaveBeenCalled();
    });

    it('requires GDPR consent', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      // Fill in required fields but not GDPR consent
      await user.type(screen.getByLabelText(/your name/i), 'John Doe');
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com');

      const submitButton = screen.getByRole('button', { name: /send/i });
      await user.click(submitButton);

      // Should not call fetch without GDPR consent
      expect(global.fetch).not.toHaveBeenCalled();
    });
  });

  describe('Successful Submission', () => {
    it('submits form with valid data', async () => {
      const user = userEvent.setup();
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

      render(<ContactForm />);

      // Fill with valid data
      await user.type(screen.getByLabelText(/your name/i), 'John Doe');
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com');
      // contactMethod defaults to 'email', enquiryFor defaults to 'myself'
      // Check GDPR consent
      await user.click(screen.getByRole('checkbox'));

      const submitButton = screen.getByRole('button', { name: /send/i });

      await act(async () => {
        await user.click(submitButton);
      });

      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: expect.stringContaining('"name":"John Doe"'),
        });
      });
    });

    it('shows success message after successful submission', async () => {
      const user = userEvent.setup();
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

      render(<ContactForm />);

      // Fill with valid data
      await user.type(screen.getByLabelText(/your name/i), 'John Doe');
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com');
      await user.click(screen.getByRole('checkbox'));

      const submitButton = screen.getByRole('button', { name: /send/i });

      await act(async () => {
        await user.click(submitButton);
      });

      await waitFor(() => {
        expect(screen.getByText(/thanks/i)).toBeInTheDocument();
        expect(screen.getByText(/1–2 working days/i)).toBeInTheDocument();
      });

      // Form should be reset
      expect(screen.getByLabelText(/your name/i)).toHaveValue('');
      expect(screen.getByLabelText(/email address/i)).toHaveValue('');
    });
  });

  describe('Loading State', () => {
    it('shows loading state during submission', async () => {
      const user = userEvent.setup();
      let resolvePromise: (value: unknown) => void;
      const fetchPromise = new Promise((resolve) => {
        resolvePromise = resolve;
      });
      (global.fetch as jest.Mock).mockReturnValueOnce(fetchPromise);

      render(<ContactForm />);

      // Fill with valid data
      await user.type(screen.getByLabelText(/your name/i), 'John Doe');
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com');
      await user.click(screen.getByRole('checkbox'));

      const submitButton = screen.getByRole('button', { name: /send/i });
      await user.click(submitButton);

      // Check loading state
      expect(screen.getByRole('status')).toBeInTheDocument();
      expect(screen.getByText(/sending your message/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /sending/i })).toBeDisabled();

      // Resolve the promise
      resolvePromise!({ ok: true, json: async () => ({ success: true }) });
    });
  });

  describe('Error Handling', () => {
    it('shows error message on submission failure', async () => {
      const user = userEvent.setup();
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        json: async () => ({ error: 'Server error' }),
      });

      render(<ContactForm />);

      // Fill with valid data
      await user.type(screen.getByLabelText(/your name/i), 'John Doe');
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com');
      await user.click(screen.getByRole('checkbox'));

      const submitButton = screen.getByRole('button', { name: /send/i });
      await user.click(submitButton);

      await waitFor(() => {
        expect(screen.getByRole('alert')).toBeInTheDocument();
      });
    });

    it('handles network errors', async () => {
      const user = userEvent.setup();
      (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

      render(<ContactForm />);

      // Fill with valid data
      await user.type(screen.getByLabelText(/your name/i), 'John Doe');
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com');
      await user.click(screen.getByRole('checkbox'));

      const submitButton = screen.getByRole('button', { name: /send/i });
      await user.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/unable to send your message/i)).toBeInTheDocument();
      });
    });
  });

  describe('Accessibility', () => {
    it('has proper form labels', () => {
      render(<ContactForm />);

      expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/what's bringing you to therapy/i)).toBeInTheDocument();
    });

    it('uses proper ARIA attributes for status messages', async () => {
      const user = userEvent.setup();
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

      render(<ContactForm />);

      // Fill and submit form
      await user.type(screen.getByLabelText(/your name/i), 'John Doe');
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com');
      await user.click(screen.getByRole('checkbox'));

      const submitButton = screen.getByRole('button', { name: /send/i });
      await user.click(submitButton);

      await waitFor(() => {
        const successMessage = screen.getByRole('status');
        expect(successMessage).toHaveAttribute('aria-live', 'polite');
      });
    });

    it('maintains focus management', () => {
      render(<ContactForm />);

      const nameInput = screen.getByLabelText(/your name/i);
      nameInput.focus();

      expect(document.activeElement).toBe(nameInput);
    });
  });

  describe('Form Interaction', () => {
    it('prevents double submission', async () => {
      const user = userEvent.setup();

      let resolvePromise: (value: unknown) => void;
      const fetchPromise = new Promise((resolve) => {
        resolvePromise = resolve;
      });
      (global.fetch as jest.Mock).mockReturnValueOnce(fetchPromise);

      render(<ContactForm />);

      // Fill out the form
      await user.type(screen.getByLabelText(/your name/i), 'John Doe');
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com');
      await user.click(screen.getByRole('checkbox'));

      const submitButton = screen.getByRole('button', { name: /send/i });

      // First submission
      await user.click(submitButton);
      expect(submitButton).toBeDisabled();

      // Try to submit again - should be disabled
      await user.click(submitButton);

      expect(global.fetch).toHaveBeenCalledTimes(1);

      // Resolve the promise
      resolvePromise!({ ok: true, json: async () => ({ success: true }) });
    });

    it('allows selecting different contact methods', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      const phoneRadio = screen.getByRole('radio', { name: /^phone$/i });
      await user.click(phoneRadio);

      expect(phoneRadio).toBeChecked();
    });

    it('allows selecting different enquiry types', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      const childRadio = screen.getByRole('radio', { name: /my child or teenager/i });
      await user.click(childRadio);

      expect(childRadio).toBeChecked();
    });
  });

  describe('Edge Cases', () => {
    it('handles malformed JSON response gracefully', async () => {
      const user = userEvent.setup();
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        json: async () => {
          throw new Error('Invalid JSON');
        },
      });

      render(<ContactForm />);

      // Fill out the form
      await user.type(screen.getByLabelText(/your name/i), 'John Doe');
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com');
      await user.click(screen.getByRole('checkbox'));

      const submitButton = screen.getByRole('button', { name: /send/i });
      await user.click(submitButton);

      await waitFor(() => {
        expect(screen.getByRole('alert')).toBeInTheDocument();
      });
    });

    it('shows character counter for message field', () => {
      render(<ContactForm />);

      expect(screen.getByText(/0\/1000/)).toBeInTheDocument();
    });

    it('displays privacy policy link', () => {
      render(<ContactForm />);

      const privacyLink = screen.getByRole('link', { name: /privacy policy/i });
      expect(privacyLink).toHaveAttribute('href', '/privacy-policy');
    });
  });
});
