import { NextRequest } from 'next/server';
import { POST } from '../../src/app/api/contact/route';

// Mock Resend
jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: jest.fn(),
    },
  })),
}));

// Mock rate limiting - using a simple mock since rateLimiter might not exist
const mockRateLimit = jest.fn();
jest.mock(
  '../../src/lib/rateLimiter',
  () => ({
    rateLimiter: {
      check: mockRateLimit,
    },
  }),
  { virtual: true }
);

// Mock console methods to avoid noise in tests
const originalConsoleError = console.error;
const originalConsoleLog = console.log;

beforeAll(() => {
  console.error = jest.fn();
  console.log = jest.fn();
});

afterAll(() => {
  console.error = originalConsoleError;
  console.log = originalConsoleLog;
});

describe('Contact API Route', () => {
  let mockResend: any;

  beforeEach(() => {
    jest.clearAllMocks();

    // Mock successful rate limiting by default
    mockRateLimit.mockResolvedValue({ success: true });

    // Get the mocked Resend instance
    const { Resend } = require('resend');
    mockResend = new Resend();
  });

  const createMockRequest = (body: any, method: string = 'POST') => {
    return {
      json: jest.fn().mockResolvedValue(body),
      method,
      headers: new Headers({
        'content-type': 'application/json',
        'x-forwarded-for': '127.0.0.1',
      }),
    } as unknown as NextRequest;
  };

  describe('POST /api/contact', () => {
    const validContactData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello, I would like to book a session.',
    };

    it('successfully sends email with valid data', async () => {
      mockResend.emails.send.mockResolvedValue({
        data: { id: 'email-123' },
        error: null,
      });

      const request = createMockRequest(validContactData);
      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.message).toBe('Email sent successfully');
      expect(mockResend.emails.send).toHaveBeenCalledWith({
        from: 'noreply@nextgentherapy.co.uk',
        to: 'andreeatherapytoday@gmail.com',
        subject: 'New Contact Form Submission',
        html: expect.stringContaining('John Doe'),
      });
    });

    it('handles missing required fields', async () => {
      const incompleteData = {
        name: 'John Doe',
        email: 'john@example.com',
        // missing message
      };

      const request = createMockRequest(incompleteData);
      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.success).toBe(false);
      expect(data.error).toBe('Missing required fields');
    });

    it('validates email format', async () => {
      const invalidEmailData = {
        ...validContactData,
        email: 'invalid-email',
      };

      const request = createMockRequest(invalidEmailData);
      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.success).toBe(false);
      expect(data.error).toBe('Invalid email format');
    });

    it('handles rate limiting', async () => {
      mockRateLimit.mockResolvedValue({
        success: false,
        limit: 5,
        remaining: 0,
        reset: Date.now() + 900000,
      });

      const request = createMockRequest(validContactData);
      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(429);
      expect(data.success).toBe(false);
      expect(data.error).toBe('Too many requests. Please try again later.');
    });

    it('handles Resend API errors', async () => {
      mockResend.emails.send.mockResolvedValue({
        data: null,
        error: { message: 'API Error' },
      });

      const request = createMockRequest(validContactData);
      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.success).toBe(false);
      expect(data.error).toBe('Failed to send email');
    });

    it('handles Resend API exceptions', async () => {
      mockResend.emails.send.mockRejectedValue(new Error('Network error'));

      const request = createMockRequest(validContactData);
      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.success).toBe(false);
      expect(data.error).toBe('Failed to send email');
    });

    it('sanitizes input data', async () => {
      const dataWithHtml = {
        name: '<script>alert("hack")</script>John Doe',
        email: 'john@example.com',
        message: '<img src="x" onerror="alert(1)">Hello',
      };

      mockResend.emails.send.mockResolvedValue({
        data: { id: 'email-123' },
        error: null,
      });

      const request = createMockRequest(dataWithHtml);
      const response = await POST(request);

      expect(response.status).toBe(200);
      expect(mockResend.emails.send).toHaveBeenCalledWith({
        from: 'noreply@nextgentherapy.co.uk',
        to: 'andreeatherapytoday@gmail.com',
        subject: 'New Contact Form Submission',
        html: expect.not.stringContaining('<script>'),
      });
    });

    it('handles invalid JSON in request', async () => {
      const request = {
        json: jest.fn().mockRejectedValue(new Error('Invalid JSON')),
        method: 'POST',
        headers: new Headers({
          'content-type': 'application/json',
          'x-forwarded-for': '127.0.0.1',
        }),
      } as unknown as NextRequest;

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.success).toBe(false);
    });

    it('handles empty request body', async () => {
      const request = createMockRequest({});
      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.success).toBe(false);
      expect(data.error).toBe('Missing required fields');
    });

    it('generates proper email content', async () => {
      mockResend.emails.send.mockResolvedValue({
        data: { id: 'email-123' },
        error: null,
      });

      const request = createMockRequest(validContactData);
      await POST(request);

      const emailCall = mockResend.emails.send.mock.calls[0][0];
      expect(emailCall.html).toContain('John Doe');
      expect(emailCall.html).toContain('john@example.com');
      expect(emailCall.html).toContain('Hello, I would like to book a session.');
      expect(emailCall.html).toContain('New Contact Form Submission');
    });
  });

  describe('HTTP Method Validation', () => {
    it('rejects non-POST requests', async () => {
      const request = createMockRequest({}, 'GET');
      const response = await POST(request);

      expect(response.status).toBe(405);
    });
  });

  describe('Rate Limiting Integration', () => {
    it('calls rate limiter with correct parameters', async () => {
      mockResend.emails.send.mockResolvedValue({
        data: { id: 'email-123' },
        error: null,
      });

      const request = createMockRequest({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello',
      });

      await POST(request);

      expect(mockRateLimit).toHaveBeenCalledWith(
        5, // limit
        '15 m' // window
      );
    });
  });
});
