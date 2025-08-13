import { render, waitFor } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import CookieConsent from '@/components/layout/CookieConsent'
import ConditionalVercelAnalytics from '@/components/layout/ConditionalVercelAnalytics'

// Mock Vercel Analytics
jest.mock('@vercel/analytics/next', () => ({
  Analytics: () => <div data-testid="vercel-analytics">Vercel Analytics</div>
}))

jest.mock('@vercel/speed-insights/next', () => ({
  SpeedInsights: () => <div data-testid="vercel-speed-insights">Speed Insights</div>
}))

// Mock window.dispatchEvent
const originalDispatchEvent = window.dispatchEvent
beforeAll(() => {
  window.dispatchEvent = jest.fn()
})

afterAll(() => {
  window.dispatchEvent = originalDispatchEvent
})

describe('Cookie Consent and Vercel Analytics Integration', () => {
  beforeEach(() => {
    localStorage.clear()
    jest.clearAllMocks()
  })

  describe('CookieConsent Component', () => {
    it('shows cookie consent banner when no consent is stored', () => {
      render(<CookieConsent />)
      
      expect(screen.getByText('We use cookies')).toBeInTheDocument()
      expect(screen.getByText('Accept all cookies')).toBeInTheDocument()
      expect(screen.getByText('Essential cookies only')).toBeInTheDocument()
    })

    it('stores "accepted" when user accepts cookies', async () => {
      const user = userEvent.setup()
      render(<CookieConsent />)
      
      const acceptButton = screen.getByText('Accept all cookies')
      await user.click(acceptButton)
      
      expect(localStorage.getItem('cookie-consent')).toBe('accepted')
    })

    it('stores "declined" when user declines cookies', async () => {
      const user = userEvent.setup()
      render(<CookieConsent />)
      
      const declineButton = screen.getByText('Essential cookies only')
      await user.click(declineButton)
      
      expect(localStorage.getItem('cookie-consent')).toBe('declined')
    })

    it('dispatches custom event when consent changes', async () => {
      const user = userEvent.setup()
      render(<CookieConsent />)
      
      const acceptButton = screen.getByText('Accept all cookies')
      await user.click(acceptButton)
      
      expect(window.dispatchEvent).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'cookie-consent-changed'
        })
      )
    })
  })

  describe('ConditionalVercelAnalytics', () => {
    it('does not render Vercel Analytics when consent is declined', () => {
      localStorage.setItem('cookie-consent', 'declined')
      render(<ConditionalVercelAnalytics />)
      
      expect(screen.queryByTestId('vercel-analytics')).not.toBeInTheDocument()
      expect(screen.queryByTestId('vercel-speed-insights')).not.toBeInTheDocument()
    })

    it('does not render Vercel Analytics when no consent is stored', () => {
      render(<ConditionalVercelAnalytics />)
      
      expect(screen.queryByTestId('vercel-analytics')).not.toBeInTheDocument()
      expect(screen.queryByTestId('vercel-speed-insights')).not.toBeInTheDocument()
    })

    it('renders Vercel Analytics when consent is accepted', () => {
      localStorage.setItem('cookie-consent', 'accepted')
      render(<ConditionalVercelAnalytics />)
      
      expect(screen.getByTestId('vercel-analytics')).toBeInTheDocument()
      expect(screen.getByTestId('vercel-speed-insights')).toBeInTheDocument()
    })
  })

  describe('Integration Test: Cookie consent controls analytics', () => {
    it('enables Vercel Analytics when user accepts cookies', async () => {
      const user = userEvent.setup()
      
      // Render both components in the same container to test real interaction
      render(
        <div>
          <CookieConsent />
          <ConditionalVercelAnalytics />
        </div>
      )
      
      // Initially, analytics should not be present
      expect(screen.queryByTestId('vercel-analytics')).not.toBeInTheDocument()
      
      // Accept cookies
      const acceptButton = screen.getByText('Accept all cookies')
      await user.click(acceptButton)
      
      // Verify localStorage was updated
      expect(localStorage.getItem('cookie-consent')).toBe('accepted')
      
      // Verify custom event was dispatched
      expect(window.dispatchEvent).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'cookie-consent-changed'
        })
      )
    })

    it('keeps analytics disabled when user declines cookies', async () => {
      const user = userEvent.setup()
      
      render(
        <div>
          <CookieConsent />
          <ConditionalVercelAnalytics />
        </div>
      )
      
      // Decline cookies
      const declineButton = screen.getByText('Essential cookies only')
      await user.click(declineButton)
      
      // Analytics should remain disabled
      expect(screen.queryByTestId('vercel-analytics')).not.toBeInTheDocument()
      expect(screen.queryByTestId('vercel-speed-insights')).not.toBeInTheDocument()
      
      // Verify localStorage
      expect(localStorage.getItem('cookie-consent')).toBe('declined')
    })

    it('shows that analytics respect user choice', () => {
      // Test 1: With declined consent
      localStorage.setItem('cookie-consent', 'declined')
      const { unmount } = render(<ConditionalVercelAnalytics />)
      
      expect(screen.queryByTestId('vercel-analytics')).not.toBeInTheDocument()
      unmount()
      
      // Test 2: With accepted consent
      localStorage.setItem('cookie-consent', 'accepted')
      render(<ConditionalVercelAnalytics />)
      
      expect(screen.getByTestId('vercel-analytics')).toBeInTheDocument()
      expect(screen.getByTestId('vercel-speed-insights')).toBeInTheDocument()
    })
  })

  describe('Privacy Compliance Tests', () => {
    it('ensures analytics are disabled by default', () => {
      // Fresh state - no consent stored
      render(<ConditionalVercelAnalytics />)
      
      expect(screen.queryByTestId('vercel-analytics')).not.toBeInTheDocument()
      expect(screen.queryByTestId('vercel-speed-insights')).not.toBeInTheDocument()
    })

    it('only enables analytics with explicit consent', () => {
      // Test different consent values
      const testCases = [
        { consent: null, shouldShow: false, description: 'no consent' },
        { consent: 'declined', shouldShow: false, description: 'declined consent' },
        { consent: 'accepted', shouldShow: true, description: 'accepted consent' },
        { consent: 'invalid', shouldShow: false, description: 'invalid consent value' },
      ]

      testCases.forEach(({ consent, shouldShow, description }) => {
        // Clear and set up test case
        localStorage.clear()
        if (consent) {
          localStorage.setItem('cookie-consent', consent)
        }

        const { unmount } = render(<ConditionalVercelAnalytics />)
        
        if (shouldShow) {
          expect(screen.getByTestId('vercel-analytics')).toBeInTheDocument()
          expect(screen.getByTestId('vercel-speed-insights')).toBeInTheDocument()
        } else {
          expect(screen.queryByTestId('vercel-analytics')).not.toBeInTheDocument()
          expect(screen.queryByTestId('vercel-speed-insights')).not.toBeInTheDocument()
        }
        
        unmount()
      })
    })
  })
})
