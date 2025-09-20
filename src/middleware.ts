import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';

  // Redirect www to non-www
  if (host === 'www.nextgentherapy.co.uk') {
    const url = request.nextUrl.clone();
    url.host = 'nextgentherapy.co.uk';
    url.protocol = 'https';

    // Use 301 permanent redirect
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

// Only run on page routes, not on API or static files
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};