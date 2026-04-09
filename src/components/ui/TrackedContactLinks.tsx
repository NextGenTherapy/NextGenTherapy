'use client';

import { trackPhoneClick, trackEmailClick, trackOutboundClick, type TrackingLocation } from '@/lib/analytics';

interface TrackedPhoneLinkProps {
  location: TrackingLocation;
  className?: string;
  children?: React.ReactNode;
}

interface TrackedEmailLinkProps {
  location: TrackingLocation;
  className?: string;
  children?: React.ReactNode;
}

interface TrackedBACPLinkProps {
  location: TrackingLocation;
  className?: string;
  children: React.ReactNode;
}

const PHONE_NUMBER = '+447448036017';
const PHONE_DISPLAY = '07448 036017';
const EMAIL = 'andreeatherapytoday@gmail.com';
const BACP_PROFILE_URL = 'https://www.bacp.co.uk/therapists/385976/andreea-horhocea/london-e16';

/**
 * Phone link with click tracking
 * Tracks clicks to GA4 and Vercel Analytics
 */
export function TrackedPhoneLink({ location, className, children }: TrackedPhoneLinkProps) {
  const handleClick = () => {
    trackPhoneClick(location);
  };

  return (
    <a
      href={`tel:${PHONE_NUMBER}`}
      onClick={handleClick}
      className={className}
      aria-label="Call Andreea"
    >
      {children || PHONE_DISPLAY}
    </a>
  );
}

/**
 * Email link with click tracking
 * Tracks clicks to GA4 and Vercel Analytics
 */
export function TrackedEmailLink({ location, className, children }: TrackedEmailLinkProps) {
  const handleClick = () => {
    trackEmailClick(location);
  };

  return (
    <a
      href={`mailto:${EMAIL}`}
      onClick={handleClick}
      className={className}
      aria-label="Email Andreea"
    >
      {children || EMAIL}
    </a>
  );
}

/**
 * BACP profile link with click tracking
 * Tracks outbound clicks to GA4 and Vercel Analytics
 */
export function TrackedBACPLink({ location, className, children }: TrackedBACPLinkProps) {
  const handleClick = () => {
    trackOutboundClick('bacp_profile', location);
  };

  return (
    <a
      href={BACP_PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
      aria-label="View Andreea's BACP registration"
    >
      {children}
    </a>
  );
}
