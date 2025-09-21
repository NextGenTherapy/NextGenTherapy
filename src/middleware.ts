import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';

  // Redirect www to non-www
  if (host === 'www.nextgentherapy.co.uk' || host.startsWith('www.')) {
    // Create the redirect URL with correct host
    const url = request.nextUrl.clone();
    url.host = 'nextgentherapy.co.uk';
    url.protocol = 'https';

    // Preserve pathname and search params
    const redirectUrl = new URL(
      `${url.protocol}//${url.host}${request.nextUrl.pathname}${request.nextUrl.search}`
    );

    // Use 308 permanent redirect (Next.js standard for permanent redirects)
    // 308 preserves the request method, which is important for POST requests
    return NextResponse.redirect(redirectUrl, 308);
  }

  return NextResponse.next();
}

// Match all routes except static files and API routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, robots.txt, sitemap.xml (static files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
