import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/book-now');
  });

  test('displays contact form correctly', async ({ page }) => {
    // Check form is visible
    await expect(page.getByRole('form')).toBeVisible();

    // Check required fields are present
    await expect(page.getByLabel(/first name/i)).toBeVisible();
    await expect(page.getByLabel(/last name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/message/i)).toBeVisible();

    // Check submit button
    await expect(page.getByRole('button', { name: /send/i })).toBeVisible();
  });

  test('validates form fields', async ({ page }) => {
    const submitButton = page.getByRole('button', { name: /send/i });

    // Try submitting empty form
    await submitButton.click();

    // Form should prevent submission with empty fields (HTML5 validation)
    const firstNameField = page.getByLabel(/first name/i);
    const isValid = await firstNameField.evaluate((input: HTMLInputElement) => input.validity.valid);
    expect(isValid).toBe(false);
  });

  test('submits form with valid data', async ({ page }) => {
    // Fill form with valid data
    await page.getByLabel(/first name/i).fill('John');
    await page.getByLabel(/last name/i).fill('Doe');
    await page.getByLabel(/email/i).fill('john.doe@example.com');
    await page.getByLabel(/message/i).fill('This is a test message for the contact form. It has sufficient length to pass validation.');

    // Mock the API response
    await page.route('/api/contact', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true }),
      });
    });

    // Submit form
    await page.getByRole('button', { name: /send/i }).click();

    // Wait for success message
    await expect(page.getByText(/thank you.*message has been sent/i)).toBeVisible();

    // Form should be reset
    await expect(page.getByLabel(/first name/i)).toHaveValue('');
    await expect(page.getByLabel(/last name/i)).toHaveValue('');
    await expect(page.getByLabel(/email/i)).toHaveValue('');
    await expect(page.getByLabel(/message/i)).toHaveValue('');
  });

  test('handles form submission errors', async ({ page }) => {
    // Fill form with valid data
    await page.getByLabel(/first name/i).fill('John');
    await page.getByLabel(/last name/i).fill('Doe');
    await page.getByLabel(/email/i).fill('john.doe@example.com');
    await page.getByLabel(/message/i).fill('Test message for error handling.');

    // Mock API error response
    await page.route('/api/contact', async (route) => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ success: false, error: 'Failed to send email.' }),
      });
    });

    // Submit form
    await page.getByRole('button', { name: /send/i }).click();

    // Wait for error message
    await expect(page.getByText(/failed to send.*please try again/i)).toBeVisible();

    // Form should retain data on error
    await expect(page.getByLabel(/first name/i)).toHaveValue('John');
    await expect(page.getByLabel(/last name/i)).toHaveValue('Doe');
  });

  test('validates email format', async ({ page }) => {
    // Fill form with invalid email
    await page.getByLabel(/first name/i).fill('John');
    await page.getByLabel(/last name/i).fill('Doe');
    await page.getByLabel(/email/i).fill('invalid-email');
    await page.getByLabel(/message/i).fill('Test message.');

    const submitButton = page.getByRole('button', { name: /send/i });
    await submitButton.click();

    // Email field should be invalid (HTML5 validation)
    const emailField = page.getByLabel(/email/i);
    const isValid = await emailField.evaluate((input: HTMLInputElement) => input.validity.valid);
    expect(isValid).toBe(false);
  });

  test('shows loading state during submission', async ({ page }) => {
    // Fill form with valid data
    await page.getByLabel(/first name/i).fill('John');
    await page.getByLabel(/last name/i).fill('Doe');
    await page.getByLabel(/email/i).fill('john.doe@example.com');
    await page.getByLabel(/message/i).fill('Test message for loading state.');

    // Mock slow API response
    await page.route('/api/contact', async (route) => {
      // Delay response to test loading state
      await new Promise(resolve => setTimeout(resolve, 1000));
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true }),
      });
    });

    // Submit form
    const submitButton = page.getByRole('button', { name: /send/i });
    await submitButton.click();

    // Button should show loading state
    await expect(submitButton).toBeDisabled();

    // Wait for completion
    await expect(page.getByText(/thank you.*message has been sent/i)).toBeVisible();

    // Button should be enabled again
    await expect(submitButton).toBeEnabled();
  });

  test('is accessible with keyboard navigation', async ({ page }) => {
    // Test tab navigation through form
    await page.keyboard.press('Tab'); // First name
    await expect(page.getByLabel(/first name/i)).toBeFocused();

    await page.keyboard.press('Tab'); // Last name
    await expect(page.getByLabel(/last name/i)).toBeFocused();

    await page.keyboard.press('Tab'); // Email
    await expect(page.getByLabel(/email/i)).toBeFocused();

    await page.keyboard.press('Tab'); // Message
    await expect(page.getByLabel(/message/i)).toBeFocused();

    await page.keyboard.press('Tab'); // Submit button
    await expect(page.getByRole('button', { name: /send/i })).toBeFocused();
  });
});