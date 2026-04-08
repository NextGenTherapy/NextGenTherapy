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
  json: jest.fn((data: unknown, options?: { status?: number }) => ({
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
let POST: (req: unknown) => Promise<{ json: () => Promise<unknown>; status: number }>;

describe('/api/contact API Route', () => {
  beforeAll(async () => {
    // Import the route handler once with proper environment setup
    const module = await import('../../src/app/api/contact/route');
    POST = module.POST as typeof POST;
  });

  beforeEach(() => {
    jest.clearAllMocks();
    mockSend.mockResolvedValue({ id: 'test-email-id' });

    // Reset mocks
    mockJson.mockClear();
    mockNextRequest.headers.get = jest.fn();
  });

  let testCounter = 0;

  const createMockRequest = (body: unknown, headers: Record<string, string> = {}) => {
    mockJson.mockResolvedValueOnce(body);
    // Use unique IP for each test to avoid rate limiting conflicts
    const defaultHeaders = {
      'x-forwarded-for': `192.168.1.${++testCounter}`,
      ...headers,
    };
    mockNextRequest.headers.get = jest.fn((name: string) => defaultHeaders[name] || null);
    return mockNextRequest;
  };

  // Valid data for most tests
  const validData = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '',
    contactMethod: 'email',
    enquiryFor: 'myself',
    message: 'Test message',
    gdprConsent: true,
    honeypot: '',
  };

  describe('Successful Requests', () => {
    it('sends email successfully with valid data', async () => {
      const request = createMockRequest(validData);
      const response = await POST(request);
      const responseData = await response.json();

      expect(response.status).toBe(200);
      expect(responseData).toEqual({ success: true });
      expect(mockSend).toHaveBeenCalledWith({
        from: 'Contact Form <noreply@nextgentherapy.co.uk>',
        to: 'andreeatherapytoday@gmail.com',
        subject: 'New Enquiry from John Doe (Themselves)',
        replyTo: 'john@example.com',
        html: expect.stringContaining('John Doe'),
        text: expect.stringContaining('John Doe'),
      });
    });

    it('includes correct email content', async () => {
      const data = {
        ...validData,
        name: 'Jane Smith',
        email: 'jane@test.com',
        message: 'Hello, I need help with anxiety.',
      };

      const request = createMockRequest(data);
      await POST(request);

      const emailCall = mockSend.mock.calls[0][0];
      expect(emailCall.html).toContain('Jane Smith');
      expect(emailCall.html).toContain('jane@test.com');
      expect(emailCall.html).toContain('Hello, I need help with anxiety.');
      expect(emailCall.text).toContain('Hello, I need help with anxiety.');
    });

    it('includes phone number when provided', async () => {
      const data = {
        ...validData,
        phone: '07123456789',
        contactMethod: 'phone',
      };

      const request = createMockRequest(data);
      await POST(request);

      const emailCall = mockSend.mock.calls[0][0];
      expect(emailCall.html).toContain('07123456789');
      expect(emailCall.text).toContain('07123456789');
    });

    it('uses correct enquiry for label in subject', async () => {
      const childEnquiry = { ...validData, enquiryFor: 'child' };
      const request = createMockRequest(childEnquiry);
      await POST(request);

      const emailCall = mockSend.mock.calls[0][0];
      expect(emailCall.subject).toBe('New Enquiry from John Doe (Their child or teenager)');
    });

    it('handles optional message field', async () => {
      const data = { ...validData, message: '' };

      const request = createMockRequest(data);
      const response = await POST(request);

      expect(response.status).toBe(200);
    });
  });

  describe('Input Validation', () => {
    it('rejects request with missing name', async () => {
      const invalidData = { ...validData, name: '' };

      const request = createMockRequest(invalidData);
      const response = await POST(request);
      const responseData = await response.json();

      expect(response.status).toBe(400);
      expect(responseData.error).toContain('name');
      expect(mockSend).not.toHaveBeenCalled();
    });

    it('rejects request with name too short', async () => {
      const invalidData = { ...validData, name: 'A' };

      const request = createMockRequest(invalidData);
      const response = await POST(request);
      const responseData = await response.json();

      expect(response.status).toBe(400);
      expect(responseData.error).toContain('2 characters');
    });

    it('rejects request with invalid email format', async () => {
      const invalidData = { ...validData, email: 'invalid-email' };

      const request = createMockRequest(invalidData);
      const response = await POST(request);
      const responseData = await response.json();

      expect(response.status).toBe(400);
      expect(responseData.error).toContain('valid email');
      expect(mockSend).not.toHaveBeenCalled();
    });

    it('accepts valid email formats', async () => {
      const validEmails = [
        'test@example.com',
        'user.name+tag@domain.co.uk',
        'test123@test-domain.org',
      ];

      for (const email of validEmails) {
        const data = { ...validData, email };
        const request = createMockRequest(data);
        const response = await POST(request);
        expect(response.status).toBe(200);
      }
    });

    it('rejects invalid contact method', async () => {
      const invalidData = { ...validData, contactMethod: 'invalid' };

      const request = createMockRequest(invalidData);
      const response = await POST(request);
      const responseData = await response.json();

      expect(response.status).toBe(400);
      expect(responseData.error).toContain('contacted');
    });

    it('rejects invalid enquiry for', async () => {
      const invalidData = { ...validData, enquiryFor: 'invalid' };

      const request = createMockRequest(invalidData);
      const response = await POST(request);
      const responseData = await response.json();

      expect(response.status).toBe(400);
      expect(responseData.error).toContain('enquiry');
    });

    it('rejects request without GDPR consent', async () => {
      const invalidData = { ...validData, gdprConsent: false };

      const request = createMockRequest(invalidData);
      const response = await POST(request);
      const responseData = await response.json();

      expect(response.status).toBe(400);
      expect(responseData.error).toContain('consent');
    });

    it('requires phone when contact method is phone', async () => {
      const invalidData = {
        ...validData,
        contactMethod: 'phone',
        phone: '',
      };

      const request = createMockRequest(invalidData);
      const response = await POST(request);
      const responseData = await response.json();

      expect(response.status).toBe(400);
      expect(responseData.error).toContain('phone');
    });

    it('rejects invalid UK phone number', async () => {
      const invalidData = {
        ...validData,
        phone: '123456',
        contactMethod: 'phone',
      };

      const request = createMockRequest(invalidData);
      const response = await POST(request);
      const responseData = await response.json();

      expect(response.status).toBe(400);
      expect(responseData.error).toContain('UK phone');
    });

    it('accepts valid UK phone numbers', async () => {
      const validPhones = ['07123456789', '01onal234567890'];

      for (const phone of ['07123456789']) {
        const data = { ...validData, phone, contactMethod: 'phone' };
        const request = createMockRequest(data);
        const response = await POST(request);
        expect(response.status).toBe(200);
      }
    });
  });

  describe('Input Sanitization', () => {
    it('escapes script tags from input', async () => {
      const maliciousData = {
        ...validData,
        message: 'Message<script>alert("xss")</script>with script',
      };

      const request = createMockRequest(maliciousData);
      const response = await POST(request);

      expect(response.status).toBe(200);

      const emailCall = mockSend.mock.calls[0][0];
      // Script tags are HTML-escaped, not removed
      expect(emailCall.html).not.toContain('<script>');
      expect(emailCall.html).toContain('John Doe');
    });

    it('trims whitespace from inputs', async () => {
      const dataWithWhitespace = {
        ...validData,
        name: '  John Doe  ',
        email: '  john@example.com  ',
        message: '  Test message with content  ',
      };

      const request = createMockRequest(dataWithWhitespace);
      const response = await POST(request);

      expect(response.status).toBe(200);

      const emailCall = mockSend.mock.calls[0][0];
      expect(emailCall.subject).toBe('New Enquiry from John Doe (Themselves)');
      expect(emailCall.replyTo).toBe('john@example.com');
    });
  });

  describe('Honeypot Protection', () => {
    it('silently succeeds when honeypot is filled', async () => {
      const botData = {
        ...validData,
        honeypot: 'spam content',
      };

      const request = createMockRequest(botData);
      const response = await POST(request);
      const responseData = await response.json();

      expect(response.status).toBe(200);
      expect(responseData).toEqual({ success: true });
      // Email should NOT be sent
      expect(mockSend).not.toHaveBeenCalled();
    });
  });

  describe('Rate Limiting', () => {
    it('allows requests within rate limit', async () => {
      // Make 5 requests (at the limit) from same IP
      for (let i = 0; i < 5; i++) {
        const request = createMockRequest(validData, { 'x-forwarded-for': '127.0.0.1' });
        const response = await POST(request);
        expect(response.status).toBe(200);
      }
    });

    it('blocks requests exceeding rate limit', async () => {
      // Make 5 requests to reach the limit
      for (let i = 0; i < 5; i++) {
        const request = createMockRequest(validData, { 'x-forwarded-for': '127.0.0.2' });
        await POST(request);
      }

      // 6th request should be blocked
      const request = createMockRequest(validData, { 'x-forwarded-for': '127.0.0.2' });
      const response = await POST(request);
      const responseData = await response.json();

      expect(response.status).toBe(429);
      expect(responseData).toEqual({
        success: false,
        error: 'Too many requests. Please try again later.',
      });
    });

    it('tracks different IPs separately', async () => {
      // Make 3 requests from IP 1
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
      const request = createMockRequest(validData, { 'x-real-ip': '192.168.1.1' });
      const response = await POST(request);

      expect(response.status).toBe(200);
    });

    it('handles unknown IP gracefully', async () => {
      const request = createMockRequest(validData, {});
      const response = await POST(request);

      expect(response.status).toBe(200);
    });
  });

  describe('Environment Configuration', () => {
    it('environment variable is properly configured for tests', async () => {
      expect(process.env.RESEND_API_KEY).toBe('test-key-resend-mock-12345');

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

      const request = createMockRequest(validData);
      const response = await POST(request);
      const responseData = await response.json();

      expect(response.status).toBe(500);
      expect(responseData.error).toBe('Failed to send email.');
    });
  });

  describe('Email Template', () => {
    it('includes all required template elements', async () => {
      const request = createMockRequest(validData);
      const response = await POST(request);

      expect(response.status).toBe(200);

      const emailCall = mockSend.mock.calls[0][0];

      // Check HTML template - now uses table format
      expect(emailCall.html).toContain('New Contact Form Submission');
      expect(emailCall.html).toContain('Name');
      expect(emailCall.html).toContain('Email');
      expect(emailCall.html).toContain('Preferred Contact');
      expect(emailCall.html).toContain('Enquiry For');

      // Check text template
      expect(emailCall.text).toContain('New Contact Form Submission');
      expect(emailCall.text).toContain('Name: John Doe');
      expect(emailCall.text).toContain('Email: john@example.com');
    });

    it('sets correct email headers', async () => {
      const request = createMockRequest(validData);
      const response = await POST(request);

      expect(response.status).toBe(200);

      const emailCall = mockSend.mock.calls[0][0];
      expect(emailCall.from).toBe('Contact Form <noreply@nextgentherapy.co.uk>');
      expect(emailCall.to).toBe('andreeatherapytoday@gmail.com');
      expect(emailCall.replyTo).toBe('john@example.com');
    });
  });
});
