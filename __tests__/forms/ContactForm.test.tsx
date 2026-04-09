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

    it('shows error for invalid email format', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.type(screen.getByLabelText(/your name/i), 'John Doe');
      await user.type(screen.getByLabelText(/email address/i), 'not-an-email');
      await user.click(screen.getByRole('checkbox'));

      const submitButton = screen.getByRole('button', { name: /send/i });
      await user.click(submitButton);

      expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
      expect(global.fetch).not.toHaveBeenCalled();
    });

    it('shows error for invalid UK phone number', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.type(screen.getByLabelText(/your name/i), 'John Doe');
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com');
      await user.type(screen.getByLabelText(/phone number/i), '123456'); // Invalid UK number
      await user.click(screen.getByRole('checkbox'));

      const submitButton = screen.getByRole('button', { name: /send/i });
      await user.click(submitButton);

      expect(screen.getByText(/please enter a valid uk phone number/i)).toBeInTheDocument();
      expect(global.fetch).not.toHaveBeenCalled();
    });

    it('requires phone number when contact method is phone', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.type(screen.getByLabelText(/your name/i), 'John Doe');
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com');
      // Select phone as contact method but don't enter phone number
      await user.click(screen.getByRole('radio', { name: /^phone$/i }));
      await user.click(screen.getByRole('checkbox'));

      const submitButton = screen.getByRole('button', { name: /send/i });
      await user.click(submitButton);

      expect(screen.getByText(/please enter your phone number if you prefer phone contact/i)).toBeInTheDocument();
      expect(global.fetch).not.toHaveBeenCalled();
    });

    it('focuses first error field on validation failure', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      // Leave name empty, fill email
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com');
      await user.click(screen.getByRole('checkbox'));

      const submitButton = screen.getByRole('button', { name: /send/i });
      await user.click(submitButton);

      // Name field should be focused as it's the first error
      expect(document.activeElement).toBe(screen.getByLabelText(/your name/i));
    });

    it('clears error when user starts typing in field', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      // Submit with invalid email to trigger error
      await user.type(screen.getByLabelText(/your name/i), 'John Doe');
      await user.type(screen.getByLabelText(/email address/i), 'invalid');
      await user.click(screen.getByRole('checkbox'));

      const submitButton = screen.getByRole('button', { name: /send/i });
      await user.click(submitButton);

      // Error should be visible
      expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();

      // Start typing in email field - error should clear
      await user.clear(screen.getByLabelText(/email address/i));
      await user.type(screen.getByLabelText(/email address/i), 'j');

      expect(screen.queryByText(/please enter a valid email address/i)).not.toBeInTheDocument();
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

    it('updates character counter as user types', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      const messageField = screen.getByLabelText(/what's bringing you to therapy/i);

      // Initially 0
      expect(screen.getByText(/0\/1000/)).toBeInTheDocument();

      // Type some text
      await user.type(messageField, 'Hello world');

      // Counter should update (11 characters)
      expect(screen.getByText(/11\/1000/)).toBeInTheDocument();
    });

    it('displays privacy policy link', () => {
      render(<ContactForm />);

      const privacyLink = screen.getByRole('link', { name: /privacy policy/i });
      expect(privacyLink).toHaveAttribute('href', '/privacy-policy');
    });
  });

  describe('All Form Option Combinations', () => {
    // Helper to fill base required fields
    const fillBaseFields = async (user: ReturnType<typeof userEvent.setup>) => {
      await user.type(screen.getByLabelText(/your name/i), 'Jane Smith');
      await user.type(screen.getByLabelText(/email address/i), 'jane@example.com');
      await user.click(screen.getByRole('checkbox'));
    };

    describe('Contact Method Options', () => {
      it('submits successfully with contact method: email (default)', async () => {
        const user = userEvent.setup();
        (global.fetch as jest.Mock).mockResolvedValueOnce({
          ok: true,
          json: async () => ({ success: true }),
        });

        render(<ContactForm />);
        await fillBaseFields(user);

        // Email is already selected by default
        const submitButton = screen.getByRole('button', { name: /send/i });
        await act(async () => {
          await user.click(submitButton);
        });

        await waitFor(() => {
          expect(global.fetch).toHaveBeenCalledWith(
            '/api/contact',
            expect.objectContaining({
              body: expect.stringContaining('"contactMethod":"email"'),
            })
          );
        });

        expect(screen.getByText(/thanks/i)).toBeInTheDocument();
      });

      it('submits successfully with contact method: phone + valid mobile number', async () => {
        const user = userEvent.setup();
        (global.fetch as jest.Mock).mockResolvedValueOnce({
          ok: true,
          json: async () => ({ success: true }),
        });

        render(<ContactForm />);
        await fillBaseFields(user);

        // Select phone and enter valid mobile
        await user.click(screen.getByRole('radio', { name: /^phone$/i }));
        await user.type(screen.getByLabelText(/phone number/i), '07123456789');

        const submitButton = screen.getByRole('button', { name: /send/i });
        await act(async () => {
          await user.click(submitButton);
        });

        await waitFor(() => {
          expect(global.fetch).toHaveBeenCalledWith(
            '/api/contact',
            expect.objectContaining({
              body: expect.stringMatching(/"contactMethod":"phone".*"phone":"07123456789"|"phone":"07123456789".*"contactMethod":"phone"/),
            })
          );
        });

        expect(screen.getByText(/thanks/i)).toBeInTheDocument();
      });

      it('submits successfully with contact method: phone + valid landline number', async () => {
        const user = userEvent.setup();
        (global.fetch as jest.Mock).mockResolvedValueOnce({
          ok: true,
          json: async () => ({ success: true }),
        });

        render(<ContactForm />);
        await fillBaseFields(user);

        // Select phone and enter valid landline
        await user.click(screen.getByRole('radio', { name: /^phone$/i }));
        await user.type(screen.getByLabelText(/phone number/i), '01234567890');

        const submitButton = screen.getByRole('button', { name: /send/i });
        await act(async () => {
          await user.click(submitButton);
        });

        await waitFor(() => {
          expect(global.fetch).toHaveBeenCalled();
        });

        expect(screen.getByText(/thanks/i)).toBeInTheDocument();
      });

      it('submits successfully with contact method: either (no phone)', async () => {
        const user = userEvent.setup();
        (global.fetch as jest.Mock).mockResolvedValueOnce({
          ok: true,
          json: async () => ({ success: true }),
        });

        render(<ContactForm />);
        await fillBaseFields(user);

        // Select either - phone not required
        await user.click(screen.getByRole('radio', { name: /either/i }));

        const submitButton = screen.getByRole('button', { name: /send/i });
        await act(async () => {
          await user.click(submitButton);
        });

        await waitFor(() => {
          expect(global.fetch).toHaveBeenCalledWith(
            '/api/contact',
            expect.objectContaining({
              body: expect.stringContaining('"contactMethod":"either"'),
            })
          );
        });

        expect(screen.getByText(/thanks/i)).toBeInTheDocument();
      });

      it('submits successfully with contact method: either (with phone)', async () => {
        const user = userEvent.setup();
        (global.fetch as jest.Mock).mockResolvedValueOnce({
          ok: true,
          json: async () => ({ success: true }),
        });

        render(<ContactForm />);
        await fillBaseFields(user);

        // Select either and optionally provide phone
        await user.click(screen.getByRole('radio', { name: /either/i }));
        await user.type(screen.getByLabelText(/phone number/i), '07987654321');

        const submitButton = screen.getByRole('button', { name: /send/i });
        await act(async () => {
          await user.click(submitButton);
        });

        await waitFor(() => {
          expect(global.fetch).toHaveBeenCalledWith(
            '/api/contact',
            expect.objectContaining({
              body: expect.stringMatching(/"contactMethod":"either".*"phone":"07987654321"|"phone":"07987654321".*"contactMethod":"either"/),
            })
          );
        });

        expect(screen.getByText(/thanks/i)).toBeInTheDocument();
      });
    });

    describe('Enquiry For Options', () => {
      it('submits successfully with enquiry for: myself (default)', async () => {
        const user = userEvent.setup();
        (global.fetch as jest.Mock).mockResolvedValueOnce({
          ok: true,
          json: async () => ({ success: true }),
        });

        render(<ContactForm />);
        await fillBaseFields(user);

        // Myself is already selected by default
        const submitButton = screen.getByRole('button', { name: /send/i });
        await act(async () => {
          await user.click(submitButton);
        });

        await waitFor(() => {
          expect(global.fetch).toHaveBeenCalledWith(
            '/api/contact',
            expect.objectContaining({
              body: expect.stringContaining('"enquiryFor":"myself"'),
            })
          );
        });

        expect(screen.getByText(/thanks/i)).toBeInTheDocument();
      });

      it('submits successfully with enquiry for: child', async () => {
        const user = userEvent.setup();
        (global.fetch as jest.Mock).mockResolvedValueOnce({
          ok: true,
          json: async () => ({ success: true }),
        });

        render(<ContactForm />);
        await fillBaseFields(user);

        // Select child/teenager
        await user.click(screen.getByRole('radio', { name: /my child or teenager/i }));

        const submitButton = screen.getByRole('button', { name: /send/i });
        await act(async () => {
          await user.click(submitButton);
        });

        await waitFor(() => {
          expect(global.fetch).toHaveBeenCalledWith(
            '/api/contact',
            expect.objectContaining({
              body: expect.stringContaining('"enquiryFor":"child"'),
            })
          );
        });

        expect(screen.getByText(/thanks/i)).toBeInTheDocument();
      });

      it('submits successfully with enquiry for: other (family member)', async () => {
        const user = userEvent.setup();
        (global.fetch as jest.Mock).mockResolvedValueOnce({
          ok: true,
          json: async () => ({ success: true }),
        });

        render(<ContactForm />);
        await fillBaseFields(user);

        // Select family member or partner
        await user.click(screen.getByRole('radio', { name: /a family member or partner/i }));

        const submitButton = screen.getByRole('button', { name: /send/i });
        await act(async () => {
          await user.click(submitButton);
        });

        await waitFor(() => {
          expect(global.fetch).toHaveBeenCalledWith(
            '/api/contact',
            expect.objectContaining({
              body: expect.stringContaining('"enquiryFor":"other"'),
            })
          );
        });

        expect(screen.getByText(/thanks/i)).toBeInTheDocument();
      });
    });

    describe('Message Field', () => {
      it('submits successfully with message content', async () => {
        const user = userEvent.setup();
        (global.fetch as jest.Mock).mockResolvedValueOnce({
          ok: true,
          json: async () => ({ success: true }),
        });

        render(<ContactForm />);
        await fillBaseFields(user);

        // Add a message
        await user.type(
          screen.getByLabelText(/what's bringing you to therapy/i),
          'I have been struggling with anxiety and would like to discuss therapy options.'
        );

        const submitButton = screen.getByRole('button', { name: /send/i });
        await act(async () => {
          await user.click(submitButton);
        });

        await waitFor(() => {
          expect(global.fetch).toHaveBeenCalledWith(
            '/api/contact',
            expect.objectContaining({
              body: expect.stringContaining('I have been struggling with anxiety'),
            })
          );
        });

        expect(screen.getByText(/thanks/i)).toBeInTheDocument();
      });

      it('submits successfully without message (optional field)', async () => {
        const user = userEvent.setup();
        (global.fetch as jest.Mock).mockResolvedValueOnce({
          ok: true,
          json: async () => ({ success: true }),
        });

        render(<ContactForm />);
        await fillBaseFields(user);

        // Don't add a message - it's optional

        const submitButton = screen.getByRole('button', { name: /send/i });
        await act(async () => {
          await user.click(submitButton);
        });

        await waitFor(() => {
          expect(global.fetch).toHaveBeenCalledWith(
            '/api/contact',
            expect.objectContaining({
              body: expect.stringContaining('"message":""'),
            })
          );
        });

        expect(screen.getByText(/thanks/i)).toBeInTheDocument();
      });
    });

    describe('Phone Number Formats', () => {
      it('accepts UK mobile format: 07xxxxxxxxx', async () => {
        const user = userEvent.setup();
        (global.fetch as jest.Mock).mockResolvedValueOnce({
          ok: true,
          json: async () => ({ success: true }),
        });

        render(<ContactForm />);
        await fillBaseFields(user);
        await user.click(screen.getByRole('radio', { name: /^phone$/i }));
        await user.type(screen.getByLabelText(/phone number/i), '07700900123');

        const submitButton = screen.getByRole('button', { name: /send/i });
        await act(async () => {
          await user.click(submitButton);
        });

        await waitFor(() => {
          expect(global.fetch).toHaveBeenCalled();
        });
        expect(screen.getByText(/thanks/i)).toBeInTheDocument();
      });

      it('accepts UK landline format: 01xxxxxxxxxx', async () => {
        const user = userEvent.setup();
        (global.fetch as jest.Mock).mockResolvedValueOnce({
          ok: true,
          json: async () => ({ success: true }),
        });

        render(<ContactForm />);
        await fillBaseFields(user);
        await user.click(screen.getByRole('radio', { name: /^phone$/i }));
        await user.type(screen.getByLabelText(/phone number/i), '01234567890');

        const submitButton = screen.getByRole('button', { name: /send/i });
        await act(async () => {
          await user.click(submitButton);
        });

        await waitFor(() => {
          expect(global.fetch).toHaveBeenCalled();
        });
        expect(screen.getByText(/thanks/i)).toBeInTheDocument();
      });

      it('accepts phone with spaces: 07123 456 789', async () => {
        const user = userEvent.setup();
        (global.fetch as jest.Mock).mockResolvedValueOnce({
          ok: true,
          json: async () => ({ success: true }),
        });

        render(<ContactForm />);
        await fillBaseFields(user);
        await user.click(screen.getByRole('radio', { name: /^phone$/i }));
        await user.type(screen.getByLabelText(/phone number/i), '07123 456 789');

        const submitButton = screen.getByRole('button', { name: /send/i });
        await act(async () => {
          await user.click(submitButton);
        });

        await waitFor(() => {
          expect(global.fetch).toHaveBeenCalled();
        });
        expect(screen.getByText(/thanks/i)).toBeInTheDocument();
      });
    });

    describe('Combined Options - Real World Scenarios', () => {
      it('parent enquiring about child, prefers phone, with message', async () => {
        const user = userEvent.setup();
        (global.fetch as jest.Mock).mockResolvedValueOnce({
          ok: true,
          json: async () => ({ success: true }),
        });

        render(<ContactForm />);

        await user.type(screen.getByLabelText(/your name/i), 'Sarah Wilson');
        await user.type(screen.getByLabelText(/email address/i), 'sarah@example.com');
        await user.click(screen.getByRole('radio', { name: /^phone$/i }));
        await user.type(screen.getByLabelText(/phone number/i), '07555123456');
        await user.click(screen.getByRole('radio', { name: /my child or teenager/i }));
        await user.type(
          screen.getByLabelText(/what's bringing you to therapy/i),
          'My daughter has been struggling at school and I think she would benefit from talking to someone.'
        );
        await user.click(screen.getByRole('checkbox'));

        const submitButton = screen.getByRole('button', { name: /send/i });
        await act(async () => {
          await user.click(submitButton);
        });

        await waitFor(() => {
          const fetchCall = (global.fetch as jest.Mock).mock.calls[0];
          const body = JSON.parse(fetchCall[1].body);
          expect(body.name).toBe('Sarah Wilson');
          expect(body.contactMethod).toBe('phone');
          expect(body.phone).toBe('07555123456');
          expect(body.enquiryFor).toBe('child');
          expect(body.message).toContain('daughter');
        });

        expect(screen.getByText(/thanks/i)).toBeInTheDocument();
      });

      it('adult enquiring for themselves, either contact method, no message', async () => {
        const user = userEvent.setup();
        (global.fetch as jest.Mock).mockResolvedValueOnce({
          ok: true,
          json: async () => ({ success: true }),
        });

        render(<ContactForm />);

        await user.type(screen.getByLabelText(/your name/i), 'Tom Brown');
        await user.type(screen.getByLabelText(/email address/i), 'tom@example.com');
        await user.click(screen.getByRole('radio', { name: /either/i }));
        // myself is default, no message
        await user.click(screen.getByRole('checkbox'));

        const submitButton = screen.getByRole('button', { name: /send/i });
        await act(async () => {
          await user.click(submitButton);
        });

        await waitFor(() => {
          const fetchCall = (global.fetch as jest.Mock).mock.calls[0];
          const body = JSON.parse(fetchCall[1].body);
          expect(body.name).toBe('Tom Brown');
          expect(body.contactMethod).toBe('either');
          expect(body.enquiryFor).toBe('myself');
          expect(body.message).toBe('');
        });

        expect(screen.getByText(/thanks/i)).toBeInTheDocument();
      });

      it('person enquiring for partner, email only, with detailed message', async () => {
        const user = userEvent.setup();
        (global.fetch as jest.Mock).mockResolvedValueOnce({
          ok: true,
          json: async () => ({ success: true }),
        });

        render(<ContactForm />);

        await user.type(screen.getByLabelText(/your name/i), 'Alex Johnson');
        await user.type(screen.getByLabelText(/email address/i), 'alex@example.com');
        // email is default
        await user.click(screen.getByRole('radio', { name: /a family member or partner/i }));
        await user.type(
          screen.getByLabelText(/what's bringing you to therapy/i),
          'I am looking for therapy options for my partner who has been dealing with work-related stress and burnout.'
        );
        await user.click(screen.getByRole('checkbox'));

        const submitButton = screen.getByRole('button', { name: /send/i });
        await act(async () => {
          await user.click(submitButton);
        });

        await waitFor(() => {
          const fetchCall = (global.fetch as jest.Mock).mock.calls[0];
          const body = JSON.parse(fetchCall[1].body);
          expect(body.name).toBe('Alex Johnson');
          expect(body.contactMethod).toBe('email');
          expect(body.enquiryFor).toBe('other');
          expect(body.message).toContain('partner');
          expect(body.message).toContain('burnout');
        });

        expect(screen.getByText(/thanks/i)).toBeInTheDocument();
      });
    });
  });
});
