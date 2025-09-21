import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ContactForm from '../../src/components/forms/contact-form';

// Mock fetch
global.fetch = jest.fn();

// Mock the Button component
jest.mock('../../src/components/ui/button', () => {
  return function MockButton({ children, type, disabled, ...props }: any) {
    return (
      <button type={type} disabled={disabled} {...props}>
        {children}
      </button>
    );
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

      expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
    });

    it('has proper form structure', () => {
      const { container } = render(<ContactForm />);
      const form = container.querySelector('form');
      expect(form).toBeInTheDocument();
      expect(form).toHaveClass('contactForm');
    });

    it('all fields are required', () => {
      render(<ContactForm />);

      expect(screen.getByLabelText(/first name/i)).toBeRequired();
      expect(screen.getByLabelText(/last name/i)).toBeRequired();
      expect(screen.getByLabelText(/email/i)).toBeRequired();
      expect(screen.getByLabelText(/message/i)).toBeRequired();
    });

    it('email field has correct type', () => {
      render(<ContactForm />);
      expect(screen.getByLabelText(/email/i)).toHaveAttribute('type', 'email');
    });
  });

  describe('Form Validation', () => {
    it('prevents submission with empty fields', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      const submitButton = screen.getByRole('button', { name: /send/i });
      await user.click(submitButton);

      // Should not call fetch with empty form (validation prevents submission)
      expect(global.fetch).not.toHaveBeenCalled();
    });

    it('validates individual fields for minimum length', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      // Fill with invalid data (too short)
      await user.type(screen.getByLabelText(/first name/i), 'A'); // Too short
      await user.type(screen.getByLabelText(/last name/i), 'B'); // Too short
      await user.type(screen.getByLabelText(/email/i), 'invalid'); // Invalid email
      await user.type(screen.getByLabelText(/message/i), 'Hi'); // Too short

      const submitButton = screen.getByRole('button', { name: /send/i });
      await user.click(submitButton);

      // Should not call fetch with invalid data
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
      await user.type(screen.getByLabelText(/first name/i), 'John');
      await user.type(screen.getByLabelText(/last name/i), 'Doe');
      await user.type(screen.getByLabelText(/email/i), 'john@example.com');
      await user.type(
        screen.getByLabelText(/message/i),
        'This is a valid message with sufficient length for testing purposes.'
      );

      const submitButton = screen.getByRole('button', { name: /send/i });

      await act(async () => {
        await user.click(submitButton);
      });

      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@example.com',
            message: 'This is a valid message with sufficient length for testing purposes.',
          }),
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
      await user.type(screen.getByLabelText(/first name/i), 'John');
      await user.type(screen.getByLabelText(/last name/i), 'Doe');
      await user.type(screen.getByLabelText(/email/i), 'john@example.com');
      await user.type(
        screen.getByLabelText(/message/i),
        'This is a valid message with sufficient length.'
      );

      const submitButton = screen.getByRole('button', { name: /send/i });

      await act(async () => {
        await user.click(submitButton);
      });

      await waitFor(() => {
        expect(
          screen.getByText('Thank you! Your message has been sent successfully.')
        ).toBeInTheDocument();
      });

      // Form should be reset
      expect(screen.getByLabelText(/first name/i)).toHaveValue('');
      expect(screen.getByLabelText(/last name/i)).toHaveValue('');
      expect(screen.getByLabelText(/email/i)).toHaveValue('');
      expect(screen.getByLabelText(/message/i)).toHaveValue('');
    });
  });

  describe('Loading State', () => {
    it('shows loading state during submission', async () => {
      const user = userEvent.setup();
      let resolvePromise: (value: any) => void;
      const fetchPromise = new Promise((resolve) => {
        resolvePromise = resolve;
      });
      (global.fetch as jest.Mock).mockReturnValueOnce(fetchPromise);

      render(<ContactForm />);

      // Fill with valid data
      await user.type(screen.getByLabelText(/first name/i), 'John');
      await user.type(screen.getByLabelText(/last name/i), 'Doe');
      await user.type(screen.getByLabelText(/email/i), 'john@example.com');
      await user.type(screen.getByLabelText(/message/i), 'Valid message content.');

      const submitButton = screen.getByRole('button', { name: /send/i });
      await user.click(submitButton);

      // Check loading state
      expect(screen.getByRole('status')).toBeInTheDocument();
      expect(screen.getByText('Sending your message...')).toBeInTheDocument();
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
        json: async () => ({ message: 'Server error' }),
      });

      render(<ContactForm />);

      // Fill with valid data
      await user.type(screen.getByLabelText(/first name/i), 'John');
      await user.type(screen.getByLabelText(/last name/i), 'Doe');
      await user.type(screen.getByLabelText(/email/i), 'john@example.com');
      await user.type(screen.getByLabelText(/message/i), 'Valid message content.');

      const submitButton = screen.getByRole('button', { name: /send/i });
      await user.click(submitButton);

      await waitFor(() => {
        expect(
          screen.getByText('Sorry, something went wrong. Please try again.')
        ).toBeInTheDocument();
      });
    });

    it('handles network errors', async () => {
      const user = userEvent.setup();
      (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

      render(<ContactForm />);

      // Fill with valid data
      await user.type(screen.getByLabelText(/first name/i), 'John');
      await user.type(screen.getByLabelText(/last name/i), 'Doe');
      await user.type(screen.getByLabelText(/email/i), 'john@example.com');
      await user.type(screen.getByLabelText(/message/i), 'Valid message content.');

      const submitButton = screen.getByRole('button', { name: /send/i });
      await user.click(submitButton);

      await waitFor(() => {
        expect(
          screen.getByText('Sorry, something went wrong. Please try again.')
        ).toBeInTheDocument();
      });
    });
  });

  describe('Textarea Auto-grow', () => {
    it('adjusts textarea height on input', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      const textarea = screen.getByLabelText(/message/i) as HTMLTextAreaElement;

      // Mock scrollHeight
      Object.defineProperty(textarea, 'scrollHeight', {
        value: 150,
        writable: true,
      });

      await user.type(
        textarea,
        'This is a long message that should cause the textarea to grow in height automatically when the content exceeds the default height.'
      );

      // Check that style.height is set to scrollHeight
      expect(textarea.style.height).toBe('150px');
    });
  });

  describe('Accessibility', () => {
    it('has proper form labels', () => {
      render(<ContactForm />);

      expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    });

    it('uses proper ARIA attributes for status messages', async () => {
      const user = userEvent.setup();
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

      render(<ContactForm />);

      // Fill and submit form
      await user.type(screen.getByLabelText(/first name/i), 'John');
      await user.type(screen.getByLabelText(/last name/i), 'Doe');
      await user.type(screen.getByLabelText(/email/i), 'john@example.com');
      await user.type(screen.getByLabelText(/message/i), 'Valid message content.');

      const submitButton = screen.getByRole('button', { name: /send/i });
      await user.click(submitButton);

      await waitFor(() => {
        const successMessage = screen.getByRole('alert');
        expect(successMessage).toHaveTextContent(
          'Thank you! Your message has been sent successfully.'
        );
      });
    });

    it('maintains focus management', () => {
      render(<ContactForm />);

      const firstNameInput = screen.getByLabelText(/first name/i);
      firstNameInput.focus();

      expect(document.activeElement).toBe(firstNameInput);
    });
  });

  describe('Form Interaction', () => {
    it('prevents double submission', async () => {
      const user = userEvent.setup();

      let resolvePromise: (value: any) => void;
      const fetchPromise = new Promise((resolve) => {
        resolvePromise = resolve;
      });
      (global.fetch as jest.Mock).mockReturnValueOnce(fetchPromise);

      render(<ContactForm />);

      // Fill out the form
      await user.type(screen.getByLabelText(/first name/i), 'John');
      await user.type(screen.getByLabelText(/last name/i), 'Doe');
      await user.type(screen.getByLabelText(/email/i), 'john@example.com');
      await user.type(screen.getByLabelText(/message/i), 'Valid message content.');

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
      await user.type(screen.getByLabelText(/first name/i), 'John');
      await user.type(screen.getByLabelText(/last name/i), 'Doe');
      await user.type(screen.getByLabelText(/email/i), 'john@example.com');
      await user.type(screen.getByLabelText(/message/i), 'Valid message content.');

      const submitButton = screen.getByRole('button', { name: /send/i });
      await user.click(submitButton);

      await waitFor(() => {
        expect(
          screen.getByText('Sorry, something went wrong. Please try again.')
        ).toBeInTheDocument();
      });
    });
  });
});
