// Utility functions for the application

/**
 * Validates an email address
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Sanitizes a string by removing potentially harmful characters
 */
export function sanitizeString(str: string): string {
  return str
    .replace(/[<>]/g, '') // Remove < and > characters
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .trim();
}

/**
 * Validates a UK phone number
 * Accepts formats: 07xxx, +447xxx, 01xxx, 02xxx
 */
export function isValidUKPhone(phone: string): boolean {
  if (!phone || phone.trim() === '') return true; // Phone is optional
  const cleaned = phone.replace(/[\s\-()]/g, '');
  // UK mobile: 07xxx or +447xxx
  // UK landline: 01xxx, 02xxx, 03xxx, or +441xxx, +442xxx, +443xxx
  const ukPhoneRegex = /^(?:(?:\+44|0)(?:7\d{9}|[123]\d{8,9}))$/;
  return ukPhoneRegex.test(cleaned);
}

/**
 * Validates form data for the contact form (legacy)
 */
export function validateContactForm(data: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}): Record<string, string> {
  const errors: Record<string, string> = {};

  if (data.firstName.trim().length < 2) {
    errors.firstName = 'First name must be at least 2 characters long';
  }

  if (data.lastName.trim().length < 2) {
    errors.lastName = 'Last name must be at least 2 characters long';
  }

  if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }

  return errors;
}

/**
 * Validates the enquiry form data
 */
export function validateEnquiryForm(data: {
  name: string;
  email: string;
  phone?: string;
  contactMethod: string;
  enquiryFor: string;
  message?: string;
  gdprConsent: boolean;
}): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters)';
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (data.phone && !isValidUKPhone(data.phone)) {
    errors.phone = 'Please enter a valid UK phone number';
  }

  if (data.contactMethod === 'phone' && (!data.phone || data.phone.trim() === '')) {
    errors.phone = 'Please enter your phone number if you prefer phone contact';
  }

  if (!data.contactMethod) {
    errors.contactMethod = 'Please select how you would like to be contacted';
  }

  if (!data.enquiryFor) {
    errors.enquiryFor = 'Please select who this enquiry is for';
  }

  if (data.message && data.message.length > 1000) {
    errors.message = 'Message must be under 1000 characters';
  }

  if (!data.gdprConsent) {
    errors.gdprConsent = 'Please confirm you consent to being contacted';
  }

  return errors;
}

/**
 * Formats a date string for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Debounce function to limit how often a function can be called
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
