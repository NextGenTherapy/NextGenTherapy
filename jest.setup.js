import '@testing-library/jest-dom'

// Set up environment variables for testing
process.env.RESEND_API_KEY = 'test-key-resend-mock-12345'

// Mock console.error to avoid noise in tests unless testing error handling
const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: An update to') &&
      args[0].includes('was not wrapped in act')
    ) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})
