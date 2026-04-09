import { test, expect, Page } from '@playwright/test';

// Helper function to fill the form with specified options
async function fillForm(
  page: Page,
  options: {
    name?: string;
    email?: string;
    phone?: string;
    contactMethod?: 'email' | 'phone' | 'either';
    enquiryFor?: 'myself' | 'child' | 'other';
    message?: string;
    gdprConsent?: boolean;
  }
) {
  const {
    name = 'Test User',
    email = 'test@example.com',
    phone,
    contactMethod,
    enquiryFor,
    message,
    gdprConsent = true,
  } = options;

  // Fill text fields
  if (name) await page.getByLabel('Your name').fill(name);
  if (email) await page.getByLabel('Email address').fill(email);
  if (phone) await page.getByLabel('Phone number').fill(phone);
  if (message !== undefined) await page.getByLabel(/What's bringing you to therapy/i).fill(message);

  // Select contact method radio
  if (contactMethod) {
    const labels: Record<string, string> = {
      email: 'Email',
      phone: 'Phone',
      either: 'Either',
    };
    await page.getByRole('radio', { name: labels[contactMethod] }).check();
  }

  // Select enquiry for radio
  if (enquiryFor) {
    const labels: Record<string, string> = {
      myself: 'Myself',
      child: 'My child or teenager',
      other: 'A family member or partner',
    };
    await page.getByRole('radio', { name: labels[enquiryFor] }).check();
  }

  // Check GDPR consent
  if (gdprConsent) {
    await page.getByRole('checkbox', { name: /I understand.*Privacy Policy/i }).check();
  }
}

// Helper function to mock the contact API
async function mockContactAPI(
  page: Page,
  response: {
    status: number;
    success: boolean;
    error?: string;
  }
) {
  await page.route('/api/contact', async (route) => {
    await route.fulfill({
      status: response.status,
      contentType: 'application/json',
      body: JSON.stringify({ success: response.success, error: response.error }),
    });
  });
}

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/book-now');
  });

  // ============================================================
  // 1. FORM DISPLAY TESTS
  // ============================================================
  test.describe('Form Display', () => {
    test('renders all form fields correctly', async ({ page }) => {
      // Check form is visible
      await expect(page.locator('form')).toBeVisible();

      // Check text input fields
      await expect(page.getByLabel('Your name')).toBeVisible();
      await expect(page.getByLabel('Email address')).toBeVisible();
      await expect(page.getByLabel('Phone number')).toBeVisible();

      // Check contact method radios
      await expect(page.getByRole('radio', { name: 'Email' })).toBeVisible();
      await expect(page.getByRole('radio', { name: 'Phone' })).toBeVisible();
      await expect(page.getByRole('radio', { name: 'Either' })).toBeVisible();

      // Check enquiry for radios
      await expect(page.getByRole('radio', { name: 'Myself' })).toBeVisible();
      await expect(page.getByRole('radio', { name: 'My child or teenager' })).toBeVisible();
      await expect(page.getByRole('radio', { name: 'A family member or partner' })).toBeVisible();

      // Check message textarea
      await expect(page.getByLabel(/What's bringing you to therapy/i)).toBeVisible();

      // Check GDPR checkbox
      await expect(page.getByRole('checkbox', { name: /I understand.*Privacy Policy/i })).toBeVisible();

      // Check submit button
      await expect(page.getByRole('button', { name: 'Send Message' })).toBeVisible();
    });

    test('shows required indicators on mandatory fields', async ({ page }) => {
      // Check for required indicators (asterisks)
      const nameLabel = page.locator('label[for="name"]');
      await expect(nameLabel).toContainText('*');

      const emailLabel = page.locator('label[for="email"]');
      await expect(emailLabel).toContainText('*');

      // Contact method and enquiry legends should have required indicators
      const contactMethodLegend = page.locator('fieldset').filter({ hasText: 'How would you prefer to be contacted?' }).locator('legend');
      await expect(contactMethodLegend).toContainText('*');

      const enquiryForLegend = page.locator('fieldset').filter({ hasText: 'Are you contacting me about yourself' }).locator('legend');
      await expect(enquiryForLegend).toContainText('*');
    });

    test('displays default radio selections', async ({ page }) => {
      // Email should be selected by default for contact method
      await expect(page.getByRole('radio', { name: 'Email' })).toBeChecked();

      // Myself should be selected by default for enquiry for
      await expect(page.getByRole('radio', { name: 'Myself' })).toBeChecked();
    });
  });

  // ============================================================
  // 2. SUBMISSION COMBINATIONS (9 tests - 3 contactMethods × 3 enquiryFor)
  // ============================================================
  test.describe('Submission Combinations', () => {
    const contactMethods = ['email', 'phone', 'either'] as const;
    const enquiryTypes = ['myself', 'child', 'other'] as const;

    for (const contactMethod of contactMethods) {
      for (const enquiryFor of enquiryTypes) {
        test(`submits successfully with contactMethod=${contactMethod} and enquiryFor=${enquiryFor}`, async ({
          page,
        }) => {
          await mockContactAPI(page, { status: 200, success: true });

          const formOptions: Parameters<typeof fillForm>[1] = {
            name: 'Test User',
            email: 'test@example.com',
            contactMethod,
            enquiryFor,
            message: 'Test message for contact form.',
            gdprConsent: true,
          };

          // Add phone if contact method is phone
          if (contactMethod === 'phone') {
            formOptions.phone = '07123456789';
          }

          await fillForm(page, formOptions);
          await page.getByRole('button', { name: 'Send Message' }).click();

          // Verify success message
          await expect(page.getByText(/Thanks.*I'll be in touch/i)).toBeVisible();

          // Verify form resets
          await expect(page.getByLabel('Your name')).toHaveValue('');
          await expect(page.getByLabel('Email address')).toHaveValue('');
          await expect(page.getByLabel('Phone number')).toHaveValue('');
          await expect(page.getByLabel(/What's bringing you to therapy/i)).toHaveValue('');
          await expect(page.getByRole('checkbox', { name: /I understand.*Privacy Policy/i })).not.toBeChecked();

          // Verify defaults are restored
          await expect(page.getByRole('radio', { name: 'Email' })).toBeChecked();
          await expect(page.getByRole('radio', { name: 'Myself' })).toBeChecked();
        });
      }
    }
  });

  // ============================================================
  // 3. CONTACT METHOD CONDITIONAL LOGIC
  // ============================================================
  test.describe('Contact Method Logic', () => {
    test('phone becomes required when contactMethod=phone', async ({ page }) => {
      await fillForm(page, {
        name: 'Test User',
        email: 'test@example.com',
        contactMethod: 'phone',
        // No phone provided
        gdprConsent: true,
      });

      await page.getByRole('button', { name: 'Send Message' }).click();

      // Should show phone error
      await expect(page.getByText(/Please enter your phone number if you prefer phone contact/i)).toBeVisible();
    });

    test('phone is optional when contactMethod=email', async ({ page }) => {
      await mockContactAPI(page, { status: 200, success: true });

      await fillForm(page, {
        name: 'Test User',
        email: 'test@example.com',
        contactMethod: 'email',
        // No phone provided
        gdprConsent: true,
      });

      await page.getByRole('button', { name: 'Send Message' }).click();

      // Should succeed without phone error
      await expect(page.getByText(/Thanks.*I'll be in touch/i)).toBeVisible();
    });

    test('phone is optional when contactMethod=either', async ({ page }) => {
      await mockContactAPI(page, { status: 200, success: true });

      await fillForm(page, {
        name: 'Test User',
        email: 'test@example.com',
        contactMethod: 'either',
        // No phone provided
        gdprConsent: true,
      });

      await page.getByRole('button', { name: 'Send Message' }).click();

      // Should succeed without phone error
      await expect(page.getByText(/Thanks.*I'll be in touch/i)).toBeVisible();
    });
  });

  // ============================================================
  // 4. FIELD VALIDATION TESTS
  // ============================================================
  test.describe('Field Validation', () => {
    test('name requires minimum 2 characters', async ({ page }) => {
      await fillForm(page, {
        name: 'A', // Only 1 character
        email: 'test@example.com',
        gdprConsent: true,
      });

      await page.getByRole('button', { name: 'Send Message' }).click();

      await expect(page.getByText(/Please enter your name \(at least 2 characters\)/i)).toBeVisible();
    });

    test('name field accepts 2 characters', async ({ page }) => {
      await mockContactAPI(page, { status: 200, success: true });

      await fillForm(page, {
        name: 'Jo', // Exactly 2 characters
        email: 'test@example.com',
        gdprConsent: true,
      });

      await page.getByRole('button', { name: 'Send Message' }).click();

      await expect(page.getByText(/Thanks.*I'll be in touch/i)).toBeVisible();
    });

    test('email requires valid format', async ({ page }) => {
      await fillForm(page, {
        name: 'Test User',
        email: 'invalid-email',
        gdprConsent: true,
      });

      await page.getByRole('button', { name: 'Send Message' }).click();

      await expect(page.getByText(/Please enter a valid email address/i)).toBeVisible();
    });

    test('email field rejects email without domain', async ({ page }) => {
      await fillForm(page, {
        name: 'Test User',
        email: 'test@',
        gdprConsent: true,
      });

      await page.getByRole('button', { name: 'Send Message' }).click();

      await expect(page.getByText(/Please enter a valid email address/i)).toBeVisible();
    });

    test('GDPR consent is required', async ({ page }) => {
      await fillForm(page, {
        name: 'Test User',
        email: 'test@example.com',
        gdprConsent: false,
      });

      await page.getByRole('button', { name: 'Send Message' }).click();

      await expect(page.getByText(/Please confirm you consent to being contacted/i)).toBeVisible();
    });

    test('message allows up to 1000 characters', async ({ page }) => {
      await mockContactAPI(page, { status: 200, success: true });

      // Create a message that is exactly 1000 characters
      const longMessage = 'A'.repeat(1000);

      await fillForm(page, {
        name: 'Test User',
        email: 'test@example.com',
        message: longMessage,
        gdprConsent: true,
      });

      await page.getByRole('button', { name: 'Send Message' }).click();

      // Should succeed
      await expect(page.getByText(/Thanks.*I'll be in touch/i)).toBeVisible();
    });

    test('empty form submission shows validation errors', async ({ page }) => {
      // Clear the defaults first
      await page.getByLabel('Your name').clear();
      await page.getByLabel('Email address').clear();

      await page.getByRole('button', { name: 'Send Message' }).click();

      // Should show name and email errors
      await expect(page.getByText(/Please enter your name/i)).toBeVisible();
      await expect(page.getByText(/Please enter a valid email address/i)).toBeVisible();
      await expect(page.getByText(/Please confirm you consent/i)).toBeVisible();
    });

    test('clears field error when user starts typing', async ({ page }) => {
      // Submit empty form to trigger errors
      await page.getByRole('button', { name: 'Send Message' }).click();

      // Name error should be visible
      await expect(page.getByText(/Please enter your name/i)).toBeVisible();

      // Start typing in name field
      await page.getByLabel('Your name').fill('Test');

      // Error should be cleared
      await expect(page.getByText(/Please enter your name/i)).not.toBeVisible();
    });
  });

  // ============================================================
  // 5. UK PHONE FORMAT TESTS
  // ============================================================
  test.describe('UK Phone Validation', () => {
    test('accepts valid UK mobile: 07123456789', async ({ page }) => {
      await mockContactAPI(page, { status: 200, success: true });

      await fillForm(page, {
        name: 'Test User',
        email: 'test@example.com',
        phone: '07123456789',
        contactMethod: 'phone',
        gdprConsent: true,
      });

      await page.getByRole('button', { name: 'Send Message' }).click();

      await expect(page.getByText(/Thanks.*I'll be in touch/i)).toBeVisible();
    });

    test('accepts valid UK mobile with +44: +447123456789', async ({ page }) => {
      await mockContactAPI(page, { status: 200, success: true });

      await fillForm(page, {
        name: 'Test User',
        email: 'test@example.com',
        phone: '+447123456789',
        contactMethod: 'phone',
        gdprConsent: true,
      });

      await page.getByRole('button', { name: 'Send Message' }).click();

      await expect(page.getByText(/Thanks.*I'll be in touch/i)).toBeVisible();
    });

    test('accepts valid UK landline: 01234567890', async ({ page }) => {
      await mockContactAPI(page, { status: 200, success: true });

      await fillForm(page, {
        name: 'Test User',
        email: 'test@example.com',
        phone: '01234567890',
        contactMethod: 'phone',
        gdprConsent: true,
      });

      await page.getByRole('button', { name: 'Send Message' }).click();

      // Should succeed - UK landline format
      await expect(page.getByText(/Thanks.*I'll be in touch/i)).toBeVisible();
    });

    test('accepts valid UK landline: 02012345678', async ({ page }) => {
      await mockContactAPI(page, { status: 200, success: true });

      await fillForm(page, {
        name: 'Test User',
        email: 'test@example.com',
        phone: '02012345678',
        contactMethod: 'phone',
        gdprConsent: true,
      });

      await page.getByRole('button', { name: 'Send Message' }).click();

      await expect(page.getByText(/Thanks.*I'll be in touch/i)).toBeVisible();
    });

    test('accepts valid UK mobile with spaces: 07123 456 789', async ({ page }) => {
      await mockContactAPI(page, { status: 200, success: true });

      await fillForm(page, {
        name: 'Test User',
        email: 'test@example.com',
        phone: '07123 456 789',
        contactMethod: 'phone',
        gdprConsent: true,
      });

      await page.getByRole('button', { name: 'Send Message' }).click();

      await expect(page.getByText(/Thanks.*I'll be in touch/i)).toBeVisible();
    });

    test('rejects invalid phone format: 555-1234', async ({ page }) => {
      await fillForm(page, {
        name: 'Test User',
        email: 'test@example.com',
        phone: '555-1234',
        contactMethod: 'phone',
        gdprConsent: true,
      });

      await page.getByRole('button', { name: 'Send Message' }).click();

      await expect(page.getByText(/Please enter a valid UK phone number/i)).toBeVisible();
    });

    test('rejects invalid phone format: 12345', async ({ page }) => {
      await fillForm(page, {
        name: 'Test User',
        email: 'test@example.com',
        phone: '12345',
        contactMethod: 'phone',
        gdprConsent: true,
      });

      await page.getByRole('button', { name: 'Send Message' }).click();

      await expect(page.getByText(/Please enter a valid UK phone number/i)).toBeVisible();
    });

    test('rejects invalid phone format: abc123', async ({ page }) => {
      await fillForm(page, {
        name: 'Test User',
        email: 'test@example.com',
        phone: 'abc123',
        contactMethod: 'phone',
        gdprConsent: true,
      });

      await page.getByRole('button', { name: 'Send Message' }).click();

      await expect(page.getByText(/Please enter a valid UK phone number/i)).toBeVisible();
    });

    test('accepts valid landline with Colchester area code: 01206123456', async ({ page }) => {
      await mockContactAPI(page, { status: 200, success: true });

      await fillForm(page, {
        name: 'Test User',
        email: 'test@example.com',
        phone: '01206123456',
        contactMethod: 'phone',
        gdprConsent: true,
      });

      await page.getByRole('button', { name: 'Send Message' }).click();

      // Should succeed - Colchester area code (01206)
      await expect(page.getByText(/Thanks.*I'll be in touch/i)).toBeVisible();
    });
  });

  // ============================================================
  // 6. ERROR HANDLING
  // ============================================================
  test.describe('Error Handling', () => {
    test('shows error message on API error', async ({ page }) => {
      await mockContactAPI(page, {
        status: 500,
        success: false,
        error: 'Failed to send email.',
      });

      await fillForm(page, {
        name: 'Test User',
        email: 'test@example.com',
        gdprConsent: true,
      });

      await page.getByRole('button', { name: 'Send Message' }).click();

      await expect(page.getByText(/Failed to send email/i)).toBeVisible();
    });

    test('shows fallback error message on network error', async ({ page }) => {
      // Mock a network failure
      await page.route('/api/contact', async (route) => {
        await route.abort('failed');
      });

      await fillForm(page, {
        name: 'Test User',
        email: 'test@example.com',
        gdprConsent: true,
      });

      await page.getByRole('button', { name: 'Send Message' }).click();

      await expect(page.getByText(/Unable to send your message/i)).toBeVisible();
    });

    test('form retains data on API error', async ({ page }) => {
      await mockContactAPI(page, {
        status: 500,
        success: false,
        error: 'Server error',
      });

      await fillForm(page, {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '07123456789',
        message: 'Test message content',
        gdprConsent: true,
      });

      await page.getByRole('button', { name: 'Send Message' }).click();

      // Wait for error
      await expect(page.getByText(/Server error/i)).toBeVisible();

      // Form should retain data
      await expect(page.getByLabel('Your name')).toHaveValue('John Doe');
      await expect(page.getByLabel('Email address')).toHaveValue('john@example.com');
      await expect(page.getByLabel('Phone number')).toHaveValue('07123456789');
      await expect(page.getByLabel(/What's bringing you to therapy/i)).toHaveValue('Test message content');
    });

    test('validation errors display inline', async ({ page }) => {
      await page.getByRole('button', { name: 'Send Message' }).click();

      // Check that errors appear near their respective fields
      const nameError = page.locator('#name-error');
      await expect(nameError).toBeVisible();
      await expect(nameError).toHaveRole('alert');

      const emailError = page.locator('#email-error');
      await expect(emailError).toBeVisible();
      await expect(emailError).toHaveRole('alert');

      const gdprError = page.locator('#gdprConsent-error');
      await expect(gdprError).toBeVisible();
      await expect(gdprError).toHaveRole('alert');
    });
  });

  // ============================================================
  // 7. LOADING STATES
  // ============================================================
  test.describe('Loading States', () => {
    test('button shows "Sending..." during submission', async ({ page }) => {
      // Mock slow API response
      await page.route('/api/contact', async (route) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ success: true }),
        });
      });

      await fillForm(page, {
        name: 'Test User',
        email: 'test@example.com',
        gdprConsent: true,
      });

      const submitButton = page.getByRole('button', { name: 'Send Message' });
      await submitButton.click();

      // Button should show loading text
      await expect(page.getByRole('button', { name: 'Sending...' })).toBeVisible();

      // Wait for completion
      await expect(page.getByText(/Thanks.*I'll be in touch/i)).toBeVisible();
    });

    test('button is disabled during submission', async ({ page }) => {
      await page.route('/api/contact', async (route) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ success: true }),
        });
      });

      await fillForm(page, {
        name: 'Test User',
        email: 'test@example.com',
        gdprConsent: true,
      });

      const submitButton = page.getByRole('button', { name: 'Send Message' });
      await submitButton.click();

      // Button should be disabled during submission
      await expect(page.getByRole('button', { name: 'Sending...' })).toBeDisabled();

      // Wait for completion
      await expect(page.getByText(/Thanks.*I'll be in touch/i)).toBeVisible();

      // Button should be enabled again
      await expect(page.getByRole('button', { name: 'Send Message' })).toBeEnabled();
    });

    test('loading message is displayed', async ({ page }) => {
      await page.route('/api/contact', async (route) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ success: true }),
        });
      });

      await fillForm(page, {
        name: 'Test User',
        email: 'test@example.com',
        gdprConsent: true,
      });

      await page.getByRole('button', { name: 'Send Message' }).click();

      // Loading status should be visible
      await expect(page.getByText(/Sending your message/i)).toBeVisible();

      // Wait for completion
      await expect(page.getByText(/Thanks.*I'll be in touch/i)).toBeVisible();
    });
  });

  // ============================================================
  // 8. ACCESSIBILITY
  // ============================================================
  test.describe('Accessibility', () => {
    test('keyboard navigation through all fields', async ({ page }) => {
      // Focus on the first form element
      await page.getByLabel('Your name').focus();
      await expect(page.getByLabel('Your name')).toBeFocused();

      // Tab to email
      await page.keyboard.press('Tab');
      await expect(page.getByLabel('Email address')).toBeFocused();

      // Tab to phone
      await page.keyboard.press('Tab');
      await expect(page.getByLabel('Phone number')).toBeFocused();

      // Tab through contact method radios
      await page.keyboard.press('Tab');
      await expect(page.getByRole('radio', { name: 'Email' })).toBeFocused();

      // Continue through the form (radios navigate with arrows, tab goes to next group)
      await page.keyboard.press('Tab');
      // Should be at enquiry for radio group
      await expect(page.getByRole('radio', { name: 'Myself' })).toBeFocused();

      // Tab to message
      await page.keyboard.press('Tab');
      await expect(page.getByLabel(/What's bringing you to therapy/i)).toBeFocused();

      // Tab to GDPR checkbox (may have intermediate focusable elements like the link)
      await page.keyboard.press('Tab');

      // Tab to submit button
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab'); // May need extra tabs for checkbox span/link
      // Eventually reach submit button
    });

    test('focus moves to first error on validation failure', async ({ page }) => {
      // Submit empty form
      await page.getByRole('button', { name: 'Send Message' }).click();

      // Name field should receive focus (first error)
      await expect(page.getByLabel('Your name')).toBeFocused();
    });

    test('error messages have alert role for screen readers', async ({ page }) => {
      await page.getByRole('button', { name: 'Send Message' }).click();

      // Error messages should have role="alert"
      const nameError = page.locator('#name-error');
      await expect(nameError).toHaveRole('alert');

      const emailError = page.locator('#email-error');
      await expect(emailError).toHaveRole('alert');
    });

    test('success message has proper ARIA attributes', async ({ page }) => {
      await mockContactAPI(page, { status: 200, success: true });

      await fillForm(page, {
        name: 'Test User',
        email: 'test@example.com',
        gdprConsent: true,
      });

      await page.getByRole('button', { name: 'Send Message' }).click();

      const successMessage = page.getByRole('status');
      await expect(successMessage).toBeVisible();
      await expect(successMessage).toHaveAttribute('aria-live', 'polite');
    });

    test('required fields have aria-required attribute', async ({ page }) => {
      await expect(page.getByLabel('Your name')).toHaveAttribute('aria-required', 'true');
      await expect(page.getByLabel('Email address')).toHaveAttribute('aria-required', 'true');
      await expect(page.getByRole('checkbox', { name: /I understand.*Privacy Policy/i })).toHaveAttribute(
        'aria-required',
        'true'
      );
    });
  });

  // ============================================================
  // 9. EDGE CASES
  // ============================================================
  test.describe('Edge Cases', () => {
    test('character counter updates in real-time', async ({ page }) => {
      const messageField = page.getByLabel(/What's bringing you to therapy/i);
      const counter = page.locator('#message-counter');

      // Initially should show 0/1000
      await expect(counter).toHaveText('0/1000');

      // Type some text
      await messageField.fill('Hello');
      await expect(counter).toHaveText('5/1000');

      // Type more text
      await messageField.fill('Hello, this is a longer message for testing purposes.');
      const text = 'Hello, this is a longer message for testing purposes.';
      await expect(counter).toHaveText(`${text.length}/1000`);
    });

    test('honeypot field prevents bot submissions', async ({ page }) => {
      // The honeypot field should be hidden
      const honeypotField = page.locator('#website');
      await expect(honeypotField).toHaveAttribute('tabindex', '-1');

      // The honeypot container should have aria-hidden
      const honeypotContainer = page.locator('[aria-hidden="true"]').filter({ has: honeypotField });
      await expect(honeypotContainer).toBeVisible(); // Container exists but field is hidden from accessibility tree
    });

    test('form clears after successful submission', async ({ page }) => {
      await mockContactAPI(page, { status: 200, success: true });

      await fillForm(page, {
        name: 'Test User',
        email: 'test@example.com',
        phone: '07123456789',
        contactMethod: 'phone',
        enquiryFor: 'child',
        message: 'Test message',
        gdprConsent: true,
      });

      await page.getByRole('button', { name: 'Send Message' }).click();

      await expect(page.getByText(/Thanks.*I'll be in touch/i)).toBeVisible();

      // All fields should be cleared/reset
      await expect(page.getByLabel('Your name')).toHaveValue('');
      await expect(page.getByLabel('Email address')).toHaveValue('');
      await expect(page.getByLabel('Phone number')).toHaveValue('');
      await expect(page.getByLabel(/What's bringing you to therapy/i)).toHaveValue('');
      await expect(page.getByRole('checkbox', { name: /I understand.*Privacy Policy/i })).not.toBeChecked();

      // Radio buttons should reset to defaults
      await expect(page.getByRole('radio', { name: 'Email' })).toBeChecked();
      await expect(page.getByRole('radio', { name: 'Myself' })).toBeChecked();
    });

    test('special characters in name and message are handled', async ({ page }) => {
      await mockContactAPI(page, { status: 200, success: true });

      await fillForm(page, {
        name: "O'Brien-Smith",
        email: 'test@example.com',
        message: 'Testing special chars: é, ñ, ü, "quotes", & ampersand',
        gdprConsent: true,
      });

      await page.getByRole('button', { name: 'Send Message' }).click();

      // Should succeed
      await expect(page.getByText(/Thanks.*I'll be in touch/i)).toBeVisible();
    });
  });
});
