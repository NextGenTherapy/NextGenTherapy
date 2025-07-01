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
 * Validates form data for the contact form
 */
export function validateContactForm(data: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}): Record<string, string> {
  const errors: Record<string, string> = {};

  if (data.firstName.trim().length < 2) {
    errors.firstName = "First name must be at least 2 characters long";
  }

  if (data.lastName.trim().length < 2) {
    errors.lastName = "Last name must be at least 2 characters long";
  }

  if (!isValidEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long";
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
    day: 'numeric'
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
