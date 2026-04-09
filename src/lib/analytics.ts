/**
 * Analytics tracking utilities for Next Generation Therapy
 * Handles GA4 and Vercel Analytics event tracking with consent checking
 */

// Type definitions for tracking events
type TrackingLocation = 'footer' | 'book-now' | 'about';

type EnquiryFor = 'myself' | 'child' | 'other';

interface TrackEventOptions {
  eventName: string;
  ga4EventName: string;
  vercelEventName: string;
  parameters?: Record<string, string | number>;
}

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
    va?: (command: string, eventName: string, params?: Record<string, unknown>) => void;
  }
}

/**
 * Check if user has accepted cookie consent
 */
function hasConsent(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('cookie-consent') === 'accepted';
}

/**
 * Core tracking function that respects cookie consent
 * Sends events to both GA4 and Vercel Analytics
 */
function trackEvent({ eventName, ga4EventName, vercelEventName, parameters = {} }: TrackEventOptions): void {
  // Development logging
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics] Event: ${eventName}`, parameters);
  }

  // Check consent before firing GA4 events
  if (!hasConsent()) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics] Skipped - no cookie consent');
    }
    return;
  }

  // Send to GA4 if available
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', ga4EventName, {
      ...parameters,
      send_to: 'G-3528EDPEXW',
    });

    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics] GA4 event sent: ${ga4EventName}`);
    }
  }

  // Send to Vercel Analytics if available
  if (typeof window !== 'undefined' && window.va) {
    window.va('track', vercelEventName, parameters);

    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics] Vercel event sent: ${vercelEventName}`);
    }
  }
}

/**
 * Track form submission when a user successfully submits the contact form
 */
export function trackFormSubmission(enquiryFor: EnquiryFor, sourcePage: string): void {
  trackEvent({
    eventName: 'Form Submission',
    ga4EventName: 'free_call_requested',
    vercelEventName: 'Free Call Requested',
    parameters: {
      enquiry_for: enquiryFor,
      source_page: sourcePage,
    },
  });
}

/**
 * Track phone link clicks
 */
export function trackPhoneClick(location: TrackingLocation): void {
  trackEvent({
    eventName: 'Phone Click',
    ga4EventName: 'phone_click',
    vercelEventName: 'Phone Click',
    parameters: {
      location,
    },
  });
}

/**
 * Track email link clicks
 */
export function trackEmailClick(location: TrackingLocation): void {
  trackEvent({
    eventName: 'Email Click',
    ga4EventName: 'email_click',
    vercelEventName: 'Email Click',
    parameters: {
      location,
    },
  });
}

/**
 * Track outbound link clicks (external links like BACP profile)
 */
export function trackOutboundClick(destination: string, location: TrackingLocation): void {
  trackEvent({
    eventName: 'Outbound Click',
    ga4EventName: 'outbound_click',
    vercelEventName: 'Outbound Click',
    parameters: {
      destination,
      location,
    },
  });
}

// Export types for use in components
export type { TrackingLocation, EnquiryFor };
