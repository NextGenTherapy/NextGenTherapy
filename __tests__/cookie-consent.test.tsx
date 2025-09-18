import { render, waitFor, act } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import CookieConsent from '@/components/layout/CookieConsent'
import ConditionalAnalytics from '@/components/layout/ConditionalAnalytics'
import ConditionalVercelAnalytics from '@/components/layout/ConditionalVercelAnalytics'

// Mock Next.js Script component
jest.mock('next/script', () => {
  return function MockScript({ children, ...props }: any) {
    // Ensure window globals are set up properly
    if (typeof window !== 'undefined') {
      (window as any).gtag = (window as any).gtag || jest.fn()
      ;(window as any).dataLayer = (window as any).dataLayer || []
    }

    return <script data-testid="mock-script" {...props}>{children}</script>
  }
})

// Mock Vercel Analytics
jest.mock('@vercel/analytics/next', () => ({
  Analytics: () => <div data-testid="vercel-analytics">Vercel Analytics</div>
}))

jest.mock('@vercel/speed-insights/next', () => ({
  SpeedInsights: () => <div data-testid="vercel-speed-insights">Speed Insights</div>
}))

describe('Cookie Consent and Analytics Integration', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()

    // Set up fresh window globals
    ;(window as any).gtag = jest.fn()
    ;(window as any).dataLayer = []

    jest.clearAllMocks()
  })

  describe('CookieConsent Component', () => {
    it('shows cookie consent banner when no consent is stored', () => {
      render(<CookieConsent />)
      
      expect(screen.getByText('We use cookies')).toBeInTheDocument()
      expect(screen.getByText('Accept all cookies')).toBeInTheDocument()
      expect(screen.getByText('Essential cookies only')).toBeInTheDocument()
    })

    it('does not show banner when consent is already given', () => {
      localStorage.setItem('cookie-consent', 'accepted')
      render(<CookieConsent />)
      
      expect(screen.queryByText('We use cookies')).not.toBeInTheDocument()
    })

    it('stores "accepted" when user accepts cookies', async () => {
      const user = userEvent.setup()
      render(<CookieConsent />)
      
      const acceptButton = screen.getByText('Accept all cookies')
      await user.click(acceptButton)
      
      expect(localStorage.getItem('cookie-consent')).toBe('accepted')
      expect(screen.queryByText('We use cookies')).not.toBeInTheDocument()
    })

    it('stores "declined" when user declines cookies', async () => {
      const user = userEvent.setup()
      render(<CookieConsent />)
      
      const declineButton = screen.getByText('Essential cookies only')
      await user.click(declineButton)
      
      expect(localStorage.getItem('cookie-consent')).toBe('declined')
      expect(screen.queryByText('We use cookies')).not.toBeInTheDocument()
    })

    it('dispatches custom event when consent changes', async () => {
      const user = userEvent.setup()
      const eventSpy = jest.spyOn(window, 'dispatchEvent')
      render(<CookieConsent />)
      
      const acceptButton = screen.getByText('Accept all cookies')
      await user.click(acceptButton)
      
      expect(eventSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'cookie-consent-changed'
        })
      )
    })
  })

  describe('ConditionalAnalytics (Google Analytics)', () => {
    it('does not render Google Analytics when consent is declined', () => {
      localStorage.setItem('cookie-consent', 'declined')
      render(<ConditionalAnalytics />)
      
      expect(screen.queryByTestId('mock-script')).not.toBeInTheDocument()
    })

    it('does not render Google Analytics when no consent is stored', () => {
      render(<ConditionalAnalytics />)
      
      expect(screen.queryByTestId('mock-script')).not.toBeInTheDocument()
    })

    it('renders Google Analytics when consent is accepted', () => {
      localStorage.setItem('cookie-consent', 'accepted')
      render(<ConditionalAnalytics />)
      
      expect(screen.getAllByTestId('mock-script')).toHaveLength(2) // gtag script + inline script
    })

    it('includes correct Google Analytics ID in script', () => {
      localStorage.setItem('cookie-consent', 'accepted')
      render(<ConditionalAnalytics />)
      
      const scripts = screen.getAllByTestId('mock-script')
      const gtagScript = scripts.find((script: HTMLElement) => 
        script.getAttribute('src')?.includes('G-3528EDPEXW')
      )
      
      expect(gtagScript).toBeInTheDocument()
    })

    it('configures analytics with privacy settings', () => {
      localStorage.setItem('cookie-consent', 'accepted')
      render(<ConditionalAnalytics />)
      
      const inlineScript = screen.getAllByTestId('mock-script').find((script: HTMLElement) => 
        script.textContent?.includes('anonymize_ip: true')
      )
      
      expect(inlineScript).toBeInTheDocument()
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

    it('updates when consent changes', async () => {
      render(<ConditionalVercelAnalytics />)

      // Initially no analytics
      expect(screen.queryByTestId('vercel-analytics')).not.toBeInTheDocument()

      // Simulate consent acceptance wrapped in act
      await act(async () => {
        localStorage.setItem('cookie-consent', 'accepted')
        window.dispatchEvent(new CustomEvent('cookie-consent-changed'))
      })

      await waitFor(() => {
        expect(screen.getByTestId('vercel-analytics')).toBeInTheDocument()
      })
    })
  })

  describe('Full Integration Test', () => {
    it('enables both analytics when user accepts cookies', async () => {
      const user = userEvent.setup()
      // Render both components
      render(
        <div>
          <CookieConsent />
          <ConditionalAnalytics />
          <ConditionalVercelAnalytics />
        </div>
      )

      // Initially, analytics should not be present
      expect(screen.queryByTestId('vercel-analytics')).not.toBeInTheDocument()
      expect(screen.queryByTestId('mock-script')).not.toBeInTheDocument()

      // Accept cookies wrapped in act
      await act(async () => {
        const acceptButton = screen.getByText('Accept all cookies')
        await user.click(acceptButton)
      })

      // Wait for analytics to appear
      await waitFor(() => {
        expect(screen.getByTestId('vercel-analytics')).toBeInTheDocument()
        expect(screen.getByTestId('vercel-speed-insights')).toBeInTheDocument()
      })

      // Check for Google Analytics scripts
      await waitFor(() => {
        const scripts = screen.getAllByTestId('mock-script')
        expect(scripts.length).toBeGreaterThanOrEqual(1)
      })
    })

    it('keeps analytics disabled when user declines cookies', async () => {
      const user = userEvent.setup()
      render(
        <div>
          <CookieConsent />
          <ConditionalAnalytics />
          <ConditionalVercelAnalytics />
        </div>
      )

      // Decline cookies wrapped in act
      await act(async () => {
        const declineButton = screen.getByText('Essential cookies only')
        await user.click(declineButton)
      })

      // Analytics should remain disabled
      await waitFor(() => {
        expect(screen.queryByTestId('vercel-analytics')).not.toBeInTheDocument()
        expect(screen.queryByTestId('mock-script')).not.toBeInTheDocument()
      })

      // Verify localStorage
      expect(localStorage.getItem('cookie-consent')).toBe('declined')
    })
  })
})
