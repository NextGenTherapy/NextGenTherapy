import {
  isValidEmail,
  sanitizeString,
  validateContactForm,
  formatDate,
  debounce,
} from '../../src/lib/utils';

describe('Utility Functions', () => {
  describe('isValidEmail', () => {
    it('validates correct email addresses', () => {
      const validEmails = [
        'test@example.com',
        'user.name@domain.com',
        'user+tag@example.org',
        'firstname.lastname@subdomain.domain.co.uk',
        'test123@test-domain.com',
        'a@b.co',
        'user@domain-name.com',
      ];

      validEmails.forEach((email) => {
        expect(isValidEmail(email)).toBe(true);
      });
    });

    it('rejects invalid email addresses', () => {
      const invalidEmails = [
        '',
        'plainaddress',
        '@missingdomain.com',
        'missing@.com',
        'two@@domain.com',
        'user@',
        '@domain.com',
        'user name@domain.com', // space
        'user@domain',
        'user@domain.',
      ];

      invalidEmails.forEach((email) => {
        expect(isValidEmail(email)).toBe(false);
      });
    });

    it('trims whitespace before validation', () => {
      expect(isValidEmail('  test@example.com  ')).toBe(true);
      expect(isValidEmail('\t\nuser@domain.com\t\n')).toBe(true);
      expect(isValidEmail('  invalid-email  ')).toBe(false);
    });

    it('handles edge cases', () => {
      expect(isValidEmail('a@b.c')).toBe(true); // minimal valid email
      expect(isValidEmail('a')).toBe(false); // too short
      expect(isValidEmail('a@')).toBe(false); // missing domain
      expect(isValidEmail('@b.c')).toBe(false); // missing local part
    });
  });

  describe('sanitizeString', () => {
    it('removes angle brackets', () => {
      expect(sanitizeString('Hello <script>')).toBe('Hello script');
      expect(sanitizeString('<div>content</div>')).toBe('divcontent/div');
      expect(sanitizeString('Normal text')).toBe('Normal text');
    });

    it('removes javascript protocol', () => {
      expect(sanitizeString('javascript:alert("xss")')).toBe('alert("xss")');
      expect(sanitizeString('JAVASCRIPT:malicious()')).toBe('malicious()');
      expect(sanitizeString('JavaScript:code()')).toBe('code()');
      expect(sanitizeString('legitimate javascript code')).toBe('legitimate javascript code'); // Only removes "javascript:" protocol, not the word
    });

    it('trims whitespace', () => {
      expect(sanitizeString('  hello world  ')).toBe('hello world');
      expect(sanitizeString('\t\ntext\t\n')).toBe('text');
    });

    it('combines all sanitization rules', () => {
      const maliciousInput = '  <script>javascript:alert("xss")</script>  ';
      const expected = 'scriptalert("xss")/script';
      expect(sanitizeString(maliciousInput)).toBe(expected);
    });

    it('preserves legitimate content', () => {
      expect(sanitizeString('Hello world!')).toBe('Hello world!');
      expect(sanitizeString('User input with numbers 123')).toBe('User input with numbers 123');
      expect(sanitizeString('Email: user@domain.com')).toBe('Email: user@domain.com');
    });

    it('handles empty strings', () => {
      expect(sanitizeString('')).toBe('');
      expect(sanitizeString('   ')).toBe('');
    });
  });

  describe('validateContactForm', () => {
    const validData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      message: 'This is a valid message with more than 10 characters.',
    };

    it('returns no errors for valid data', () => {
      const errors = validateContactForm(validData);
      expect(errors).toEqual({});
      expect(Object.keys(errors)).toHaveLength(0);
    });

    describe('firstName validation', () => {
      it('requires firstName to be at least 2 characters', () => {
        const data = { ...validData, firstName: 'A' };
        const errors = validateContactForm(data);
        expect(errors.firstName).toBe('First name must be at least 2 characters long');
      });

      it('trims whitespace before checking length', () => {
        const data = { ...validData, firstName: ' A ' };
        const errors = validateContactForm(data);
        expect(errors.firstName).toBe('First name must be at least 2 characters long');
      });

      it('accepts firstName with exactly 2 characters', () => {
        const data = { ...validData, firstName: 'Jo' };
        const errors = validateContactForm(data);
        expect(errors.firstName).toBeUndefined();
      });

      it('accepts longer firstNames', () => {
        const data = { ...validData, firstName: 'Jonathan' };
        const errors = validateContactForm(data);
        expect(errors.firstName).toBeUndefined();
      });
    });

    describe('lastName validation', () => {
      it('requires lastName to be at least 2 characters', () => {
        const data = { ...validData, lastName: 'D' };
        const errors = validateContactForm(data);
        expect(errors.lastName).toBe('Last name must be at least 2 characters long');
      });

      it('trims whitespace before checking length', () => {
        const data = { ...validData, lastName: '  B  ' };
        const errors = validateContactForm(data);
        expect(errors.lastName).toBe('Last name must be at least 2 characters long');
      });

      it('accepts lastName with exactly 2 characters', () => {
        const data = { ...validData, lastName: 'Do' };
        const errors = validateContactForm(data);
        expect(errors.lastName).toBeUndefined();
      });
    });

    describe('email validation', () => {
      it('validates email using isValidEmail function', () => {
        const data = { ...validData, email: 'invalid-email' };
        const errors = validateContactForm(data);
        expect(errors.email).toBe('Please enter a valid email address');
      });

      it('accepts valid email addresses', () => {
        const data = { ...validData, email: 'test@domain.com' };
        const errors = validateContactForm(data);
        expect(errors.email).toBeUndefined();
      });

      it('handles empty email', () => {
        const data = { ...validData, email: '' };
        const errors = validateContactForm(data);
        expect(errors.email).toBe('Please enter a valid email address');
      });
    });

    describe('message validation', () => {
      it('requires message to be at least 10 characters', () => {
        const data = { ...validData, message: 'Short' };
        const errors = validateContactForm(data);
        expect(errors.message).toBe('Message must be at least 10 characters long');
      });

      it('trims whitespace before checking length', () => {
        const data = { ...validData, message: '  Short   ' };
        const errors = validateContactForm(data);
        expect(errors.message).toBe('Message must be at least 10 characters long');
      });

      it('accepts message with exactly 10 characters', () => {
        const data = { ...validData, message: '1234567890' };
        const errors = validateContactForm(data);
        expect(errors.message).toBeUndefined();
      });

      it('accepts longer messages', () => {
        const data = {
          ...validData,
          message: 'This is a much longer message that should definitely pass validation.',
        };
        const errors = validateContactForm(data);
        expect(errors.message).toBeUndefined();
      });
    });

    describe('multiple field validation', () => {
      it('returns errors for multiple invalid fields', () => {
        const invalidData = {
          firstName: 'A',
          lastName: 'B',
          email: 'invalid',
          message: 'Short',
        };

        const errors = validateContactForm(invalidData);

        expect(errors.firstName).toBe('First name must be at least 2 characters long');
        expect(errors.lastName).toBe('Last name must be at least 2 characters long');
        expect(errors.email).toBe('Please enter a valid email address');
        expect(errors.message).toBe('Message must be at least 10 characters long');
        expect(Object.keys(errors)).toHaveLength(4);
      });

      it('only returns errors for invalid fields', () => {
        const partiallyInvalidData = {
          firstName: 'John', // valid
          lastName: 'D', // invalid
          email: 'john@example.com', // valid
          message: 'Short', // invalid
        };

        const errors = validateContactForm(partiallyInvalidData);

        expect(errors.firstName).toBeUndefined();
        expect(errors.lastName).toBe('Last name must be at least 2 characters long');
        expect(errors.email).toBeUndefined();
        expect(errors.message).toBe('Message must be at least 10 characters long');
        expect(Object.keys(errors)).toHaveLength(2);
      });
    });
  });

  describe('formatDate', () => {
    it('formats dates in British format', () => {
      expect(formatDate('2023-12-25')).toBe('25 December 2023');
      expect(formatDate('2023-01-01')).toBe('1 January 2023');
      expect(formatDate('2023-07-15')).toBe('15 July 2023');
    });

    it('handles different date string formats', () => {
      expect(formatDate('2023/12/25')).toBe('25 December 2023');
      expect(formatDate('December 25, 2023')).toBe('25 December 2023');
    });

    it('handles ISO date strings', () => {
      expect(formatDate('2023-12-25T10:30:00Z')).toBe('25 December 2023');
      expect(formatDate('2023-12-25T10:30:00.000Z')).toBe('25 December 2023');
    });

    it('handles numeric timestamps as strings', () => {
      const timestamp = new Date('2023-12-25').getTime();
      const date = new Date(timestamp);
      expect(formatDate(date.toISOString())).toBe('25 December 2023');
    });

    it('formats dates consistently', () => {
      const date1 = formatDate('2023-01-01');
      const date2 = formatDate('2023-1-1');
      expect(date1).toBe('1 January 2023');
      expect(date2).toBe('1 January 2023');
    });

    it('handles leap years', () => {
      expect(formatDate('2024-02-29')).toBe('29 February 2024');
      expect(formatDate('2023-02-28')).toBe('28 February 2023');
    });
  });

  describe('debounce', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('delays function execution', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 100);

      debouncedFn();
      expect(mockFn).not.toHaveBeenCalled();

      jest.advanceTimersByTime(100);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('cancels previous calls when called again quickly', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 100);

      debouncedFn();
      debouncedFn();
      debouncedFn();

      jest.advanceTimersByTime(50);
      expect(mockFn).not.toHaveBeenCalled();

      jest.advanceTimersByTime(50);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('passes arguments to the debounced function', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 100);

      debouncedFn('arg1', 'arg2', 123);

      jest.advanceTimersByTime(100);
      expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2', 123);
    });

    it('uses the latest arguments when called multiple times', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 100);

      debouncedFn('first');
      debouncedFn('second');
      debouncedFn('third');

      jest.advanceTimersByTime(100);
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toHaveBeenCalledWith('third');
    });

    it('allows separate calls after the wait period', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 100);

      debouncedFn('first');
      jest.advanceTimersByTime(100);
      expect(mockFn).toHaveBeenCalledWith('first');

      debouncedFn('second');
      jest.advanceTimersByTime(100);
      expect(mockFn).toHaveBeenCalledWith('second');
      expect(mockFn).toHaveBeenCalledTimes(2);
    });

    it('works with functions that return values', () => {
      const mockFn = jest.fn().mockReturnValue('result');
      const debouncedFn = debounce(mockFn, 100);

      // Note: debounced functions don't return values immediately
      const result = debouncedFn();
      expect(result).toBeUndefined();

      jest.advanceTimersByTime(100);
      expect(mockFn).toHaveBeenCalled();
      expect(mockFn).toHaveReturnedWith('result');
    });

    it('handles zero wait time', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 0);

      debouncedFn();
      expect(mockFn).not.toHaveBeenCalled();

      jest.advanceTimersByTime(0);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('handles multiple debounced functions independently', () => {
      const mockFn1 = jest.fn();
      const mockFn2 = jest.fn();
      const debouncedFn1 = debounce(mockFn1, 100);
      const debouncedFn2 = debounce(mockFn2, 200);

      debouncedFn1();
      debouncedFn2();

      jest.advanceTimersByTime(100);
      expect(mockFn1).toHaveBeenCalledTimes(1);
      expect(mockFn2).not.toHaveBeenCalled();

      jest.advanceTimersByTime(100);
      expect(mockFn2).toHaveBeenCalledTimes(1);
    });
  });

  describe('Integration tests', () => {
    it('validateContactForm uses isValidEmail internally', () => {
      const data = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'invalid-email-format',
        message: 'This is a valid message.',
      };

      const errors = validateContactForm(data);
      expect(errors.email).toBe('Please enter a valid email address');
    });

    it('sanitizeString can be used on form validation results', () => {
      const maliciousFirstName = '<script>alert("xss")</script>John';
      const sanitized = sanitizeString(maliciousFirstName);

      const data = {
        firstName: sanitized,
        lastName: 'Doe',
        email: 'john@example.com',
        message: 'This is a valid message.',
      };

      const errors = validateContactForm(data);
      // Should still be valid after sanitization
      expect(errors.firstName).toBeUndefined();
    });

    it('debounce can be used with validation functions', () => {
      jest.useFakeTimers();

      const mockValidate = jest.fn().mockImplementation((data) => validateContactForm(data));
      const debouncedValidate = debounce(mockValidate, 300);

      const testData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        message: 'Valid message content',
      };

      // Simulate rapid typing
      debouncedValidate(testData);
      debouncedValidate(testData);
      debouncedValidate(testData);

      expect(mockValidate).not.toHaveBeenCalled();

      jest.advanceTimersByTime(300);
      expect(mockValidate).toHaveBeenCalledTimes(1);
      expect(mockValidate).toHaveBeenCalledWith(testData);

      jest.useRealTimers();
    });
  });
});
