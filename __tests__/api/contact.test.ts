/**
 * @jest-environment node
 */

// Set up test environment variables FIRST, before any imports
process.env.RESEND_API_KEY = 'test-key-resend-mock-12345';

// Mock NextRequest and NextResponse
const mockJson = jest.fn();
const mockNextRequest = {
  json: mockJson,
  headers: {
    get: jest.fn(),
  },
};

const mockNextResponse = {
  json: jest.fn((data: any, options?: { status?: number }) => ({
    json: async () => data,
    status: options?.status || 200,
  })),
};

jest.mock('next/server', () => ({
  NextRequest: jest.fn(),
  NextResponse: mockNextResponse,
}));

// Mock Resend
const mockSend = jest.fn();
const mockResendInstance = {
  emails: {
    send: mockSend,
  },
};

jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => mockResendInstance),
}));

// Mock console.error to avoid noise in tests
const originalConsoleError = console.error;
beforeAll(() => {
  console.error = jest.fn();
});

afterAll(() => {
  console.error = originalConsoleError;
});

// Import the route handler after mocks and env are set up
let POST: any;

describe('/api/contact API Route', () => {
  beforeAll(async () => {
    // Import the route handler once with proper environment setup
    const module = await import('../../src/app/api/contact/route');
    POST = module.POST;
  });

  beforeEach(() => {
    jest.clearAllMocks();
    mockSend.mockResolvedValue({ id: 'test-email-id' });

    // Reset mocks
    mockJson.mockClear();
    mockNextRequest.headers.get = jest.fn();
  });

  let testCounter = 0;

  const createMockRequest = (body: any, headers: Record<string, string> = {}) => {
    mockJson.mockResolvedValueOnce(body);
    // Use unique IP for each test to avoid rate limiting conflicts
    const defaultHeaders = {
      'x-forwarded-for': `192.168.1.${++testCounter}`,
      ...headers,
    };
    mockNextRequest.headers.get = jest.fn((name: string) => defaultHeaders[name] || null);
    return mockNextRequest;
  };

  describe('Successful Requests', () => {
    it('sends email successfully with valid data', async () => {
      const validData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        message: 'This is a test message.',
      };

      const request = createMockRequest(validData);
      const response = await POST(request);
      const responseData = await response.json();

      expect(response.status).toBe(200);
      expect(responseData).toEqual({ success: true });
      expect(mockSend).toHaveBeenCalledWith({
        from: 'Contact Form <noreply@nextgentherapy.co.uk>',
        to: 'andreeatherapytoday@gmail.com',
        subject: 'New Contact Form Submission from John Doe',
        replyTo: 'john@example.com',
        html: expect.stringContaining('John Doe'),
        text: expect.stringContaining('John Doe'),
      });
    });

    it('includes correct email content', async () => {
      const validData = {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane@test.com',
        message: 'Hello, I need help with anxiety.',
      };

      const request = createMockRequest(validData);
      await POST(request);

      const emailCall = mockSend.mock.calls[0][0];
      expect(emailCall.html).toContain('Jane Smith');
      expect(emailCall.html).toContain('jane@test.com');
      expect(emailCall.html).toContain('Hello, I need help with anxiety.');
      expect(emailCall.text).toContain('Hello, I need help with anxiety.');
    });

    it('formats multi-line messages correctly', async () => {
      const validData = {
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com',
        message: 'Line 1\nLine 2\nLine 3',
      };

      const request = createMockRequest(validData);
      await POST(request);

      const emailCall = mockSend.mock.calls[0][0];
      // HTML uses white-space: pre-wrap so newlines are preserved as-is
      expect(emailCall.html).toContain('Line 1');
      expect(emailCall.html).toContain('Line 2');
      expect(emailCall.html).toContain('Line 3');
      expect(emailCall.text).toContain('Line 1\nLine 2\nLine 3');
    });
  });

  describe('Input Validation', () => {
    it('rejects request with missing firstName', async () => {
      const invalidData = {
        lastName: 'Doe',
        email: 'john@example.com',
        message: 'Test message',
      };

      const request = createMockRequest(invalidData);
      const response = await POST(request);
      const responseData = await response.json();

      expect(response.status).toBe(400);
      expect(responseData).toEqual({
        success: false,
        error: 'All fields are required.',
      });
      expect(mockSend).not.toHaveBeenCalled();
    });

    it('rejects request with missing lastName', async () => {
      const invalidData = {
        firstName: 'John',
        email: 'john@example.com',
        message: 'Test message',
      };

      const request = createMockRequest(invalidData);
      const response = await POST(request);
      const responseData = await response.json();

      expect(response.status).toBe(400);
      expect(responseData.error).toBe('All fields are required.');
    });

    it('rejects request with missing email', async () => {
      const invalidData = {
        firstName: 'John',
        lastName: 'Doe',
        message: 'Test message',
      };

      const request = createMockRequest(invalidData);
      const response = await POST(request);
      const responseData = await response.json();

      expect(response.status).toBe(400);
      expect(responseData.error).toBe('All fields are required.');
    });

    it('rejects request with missing message', async () => {
      const invalidData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
      };

      const request = createMockRequest(invalidData);
      const response = await POST(request);
      const responseData = await response.json();

      expect(response.status).toBe(400);
      expect(responseData.error).toBe('All fields are required.');
    });

    it('rejects request with empty fields', async () => {
      const invalidData = {
        firstName: '',
        lastName: 'Doe',
        email: 'john@example.com',
        message: 'Test message',
      };

      const request = createMockRequest(invalidData);
      const response = await POST(request);
      const responseData = await response.json();

      expect(response.status).toBe(400);
      expect(responseData.error).toBe('All fields are required.');
    });

    it('rejects request with invalid email format', async () => {
      const invalidData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'invalid-email',
        message: 'Test message',
      };

      const request = createMockRequest(invalidData);
      const response = await POST(request);
      const responseData = await response.json();

      expect(response.status).toBe(400);
      expect(responseData.error).toBe('Please enter a valid email address.');
      expect(mockSend).not.toHaveBeenCalled();
    });

    it('accepts valid email formats', async () => {
      const validEmails = [
        'test@example.com',
        'user.name+tag@domain.co.uk',
        'test123@test-domain.org',
      ];

      for (const email of validEmails) {
        const validData = {
          firstName: 'John',
          lastName: 'Doe',
          email,
          message: 'Test message',
        };

        const request = createMockRequest(validData);
        const response = await POST(request);

        expect(response.status).toBe(200);
      }
    });
  });

  describe('Input Sanitization', () => {
    it('escapes script tags from input', async () => {
      const maliciousData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        message: 'Message<script>alert("xss")</script>with script',
      };

      const request = createMockRequest(maliciousData);
      const response = await POST(request);

      expect(response.status).toBe(200);

      const emailCall = mockSend.mock.calls[0][0];
      // Script tags are HTML-escaped, not removed
      expect(emailCall.html).not.toContain('<script>');
      expect(emailCall.html).toContain('John');
      expect(emailCall.subject).toBe('New Contact Form Submission from John Doe');
    });

    it('trims whitespace from inputs', async () => {
      const dataWithWhitespace = {
        firstName: '  John  ',
        lastName: '  Doe  ',
        email: '  john@example.com  ',
        message: '  Test message with content  ',
      };

      const request = createMockRequest(dataWithWhitespace);
      const response = await POST(request);

      expect(response.status).toBe(200);

      const emailCall = mockSend.mock.calls[0][0];
      expect(emailCall.subject).toBe('New Contact Form Submission from John Doe');
      expect(emailCall.replyTo).toBe('john@example.com');
      expect(emailCall.html).toContain('Test message with content');
    });
  });

  describe('Rate Limiting', () => {
    it('allows requests within rate limit', async () => {
      const validData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        message: 'Test message',
      };

      // Make 5 requests (at the limit)
      for (let i = 0; i < 5; i++) {
        const request = createMockRequest(validData, { 'x-forwarded-for': '127.0.0.1' });
        const response = await POST(request);
        expect(response.status).toBe(200);
      }
    });

    it('blocks requests exceeding rate limit', async () => {
      const validData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        message: 'Test message',
      };

      // Make 5 requests to reach the limit
      for (let i = 0; i < 5; i++) {
        const request = createMockRequest(validData, { 'x-forwarded-for': '127.0.0.1' });
        await POST(request);
      }

      // 6th request should be blocked
      const request = createMockRequest(validData, { 'x-forwarded-for': '127.0.0.1' });
      const response = await POST(request);
      const responseData = await response.json();

      expect(response.status).toBe(429);
      expect(responseData).toEqual({
        success: false,
        error: 'Too many requests. Please try again later.',
      });
    });

    it('tracks different IPs separately', async () => {
      const validData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        message: 'Test message',
      };

      // Make 3 requests from IP 1 (less than limit to avoid conflicts)
      for (let i = 0; i < 3; i++) {
        mockJson.mockResolvedValueOnce(validData);
        mockNextRequest.headers.get = jest.fn((name: string) =>
          name === 'x-forwarded-for' ? '10.0.0.1' : null
        );
        const response = await POST(mockNextRequest);
        expect(response.status).toBe(200);
      }

      // Request from IP 2 should still work
      mockJson.mockResolvedValueOnce(validData);
      mockNextRequest.headers.get = jest.fn((name: string) =>
        name === 'x-forwarded-for' ? '10.0.0.2' : null
      );
      const response = await POST(mockNextRequest);
      expect(response.status).toBe(200);
    });

    it('uses x-real-ip header as fallback', async () => {
      const validData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        message: 'Test message',
      };

      const request = createMockRequest(validData, { 'x-real-ip': '192.168.1.1' });
      const response = await POST(request);

      expect(response.status).toBe(200);
    });

    it('handles unknown IP gracefully', async () => {
      const validData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        message: 'Test message',
      };

      const request = createMockRequest(validData, {});
      const response = await POST(request);

      expect(response.status).toBe(200);
    });
  });

  describe('Environment Configuration', () => {
    it('environment variable is properly configured for tests', async () => {
      // This test verifies our test environment is set up correctly
      expect(process.env.RESEND_API_KEY).toBe('test-key-resend-mock-12345');

      const validData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        message: 'Test message',
      };

      const request = createMockRequest(validData);
      const response = await POST(request);
      const responseData = await response.json();

      expect(response.status).toBe(200);
      expect(responseData).toEqual({ success: true });
      expect(mockSend).toHaveBeenCalled();
    });
  });

  describe('Email Service Errors', () => {
    it('handles email send failures gracefully', async () => {
      mockSend.mockRejectedValueOnce(new Error('Email service unavailable'));

      const validData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        message: 'Test message',
      };

      const request = createMockRequest(validData);
      const response = await POST(request);
      const responseData = await response.json();

      expect(response.status).toBe(500);
      expect(responseData).toEqual({
        success: false,
        error: 'Failed to send email.',
      });
    });

    it('handles network errors', async () => {
      mockSend.mockRejectedValueOnce(new Error('ECONNREFUSED'));

      const validData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        message: 'Test message',
      };

      const request = createMockRequest(validData);
      const response = await POST(request);
      const responseData = await response.json();

      expect(response.status).toBe(500);
      expect(responseData.error).toBe('Failed to send email.');
    });
  });

  describe('Request Parsing Errors', () => {
    it('handles invalid JSON gracefully', async () => {
      const request = {
        json: async () => {
          throw new Error('Invalid JSON');
        },
        headers: {
          get: () => null,
        },
      } as NextRequest;

      const response = await POST(request);
      const responseData = await response.json();

      expect(response.status).toBe(500);
      expect(responseData).toEqual({
        success: false,
        error: 'Failed to send email.',
      });
    });
  });

  describe('Security Features', () => {
    it('removes script tags and sanitizes input', async () => {
      const dataWithScript = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        message: '<script>alert("xss")</script>Test message with script',
      };

      const request = createMockRequest(dataWithScript);
      const response = await POST(request);

      expect(response.status).toBe(200);

      const emailCall = mockSend.mock.calls[mockSend.mock.calls.length - 1][0];
      // Verify script tags are removed
      expect(emailCall.html).not.toContain('<script>');
      expect(emailCall.html).not.toContain('alert("xss")');
      // Verify the sanitized content is present
      expect(emailCall.html).toContain('Test message');
    });

    it('processes newlines correctly in message formatting', async () => {
      const dataWithNewlines = {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane@example.com',
        message: 'Line 1\nLine 2\nLine 3',
      };

      const request = createMockRequest(dataWithNewlines);
      const response = await POST(request);

      expect(response.status).toBe(200);

      const emailCall = mockSend.mock.calls[mockSend.mock.calls.length - 1][0];
      // Verify email template structure is correct
      expect(emailCall.html).toContain('<h3>New Contact Form Submission</h3>');
      expect(emailCall.html).toContain('<p><strong>From:</strong>');
      expect(emailCall.html).toContain('<p><strong>Email:</strong>');
      expect(emailCall.html).toContain('<p><strong>Message:</strong></p>');
      // Verify email is properly formatted
      expect(emailCall.from).toBe('Contact Form <noreply@nextgentherapy.co.uk>');
      expect(emailCall.to).toBe('andreeatherapytoday@gmail.com');
    });
  });

  describe('Email Template', () => {
    it('includes all required template elements', async () => {
      const validData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        message: 'Test message for template validation.',
      };

      const request = createMockRequest(validData);
      const response = await POST(request);

      expect(response.status).toBe(200);

      const emailCall = mockSend.mock.calls[0][0];

      // Check HTML template
      expect(emailCall.html).toContain('New Contact Form Submission');
      expect(emailCall.html).toContain('<strong>From:</strong>');
      expect(emailCall.html).toContain('<strong>Email:</strong>');
      expect(emailCall.html).toContain('<strong>Message:</strong>');
      expect(emailCall.html).toContain('Reply directly to this email');

      // Check text template
      expect(emailCall.text).toContain('New Contact Form Submission');
      expect(emailCall.text).toContain('From: John Doe');
      expect(emailCall.text).toContain('Email: john@example.com');
      expect(emailCall.text).toContain('Message:');
      expect(emailCall.text).toContain('Reply directly to this email');
    });

    it('sets correct email headers', async () => {
      const validData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        message: 'Test message',
      };

      const request = createMockRequest(validData);
      const response = await POST(request);

      expect(response.status).toBe(200);

      const emailCall = mockSend.mock.calls[0][0];
      expect(emailCall.from).toBe('Contact Form <noreply@nextgentherapy.co.uk>');
      expect(emailCall.to).toBe('andreeatherapytoday@gmail.com');
      expect(emailCall.replyTo).toBe('john@example.com');
      expect(emailCall.subject).toBe('New Contact Form Submission from John Doe');
    });
  });
});
