'use client';

import { trackPhoneClick, trackEmailClick, type TrackingLocation } from '@/lib/analytics';

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

const PHONE_NUMBER = '+447448036017';
const PHONE_DISPLAY = '07448 036017';
const EMAIL = 'andreeatherapytoday@gmail.com';

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
