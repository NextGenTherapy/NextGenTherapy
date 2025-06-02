import { NextResponse } from 'next/server';

function generateNonce() {
  // Simple random nonce generator
  return Buffer.from(crypto.getRandomValues(new Uint8Array(16))).toString('base64');
}

export function middleware() {
  const nonce = generateNonce();

  // Store nonce in a cookie for use in your app (if needed)
  const response = NextResponse.next();
  response.headers.set('x-nonce', nonce);

  // Set strong security headers
  response.headers.set(
    'Content-Security-Policy',
    [
      `default-src 'self';`,
      `script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com https://www.google-analytics.com;`,
      `style-src 'self' 'unsafe-inline';`,
      `img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com;`,
      `font-src 'self';`,
      `connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com;`,
      `frame-src https://www.youtube.com https://www.google.com;`,
      `object-src 'none';`,
      `base-uri 'self';`,
      `form-action 'self';`,
      `frame-ancestors 'self';`,
      `upgrade-insecure-requests;`,
    ].join(' ')
  );
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('Permissions-Policy', 'geolocation=(), microphone=()');

  return response;
}

export const config = {
  matcher: "/:path*",
};