import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

  // Redirect www to non-www
  if (host.startsWith('www.')) {
    const newHost = host.replace('www.', '');
    const redirectUrl = new URL(request.url);
    redirectUrl.host = newHost;
    redirectUrl.protocol = 'https:';
    return NextResponse.redirect(redirectUrl, { status: 301 });
  }

  // Add canonical header for all responses
  const response = NextResponse.next();
  const canonicalUrl = `https://nextgentherapy.co.uk${url.pathname}${url.search}`;
  response.headers.set('Link', `<${canonicalUrl}>; rel="canonical"`);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};