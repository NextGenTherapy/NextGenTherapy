import { NextResponse } from 'next/server';

export function middleware() {
  const response = NextResponse.next();

  response.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self';",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;",
      "style-src 'self' 'unsafe-inline';",
      "img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com;",
      "font-src 'self';",
      "connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com;",
      "frame-src 'none';",
      "object-src 'none';",
      "base-uri 'self';",
      "form-action 'self';",
      "frame-ancestors 'none';"
    ].join(' ')
  );
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");

  return response;
}

export const config = {
  matcher: "/:path*",
};