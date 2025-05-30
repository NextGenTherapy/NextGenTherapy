import { NextResponse } from 'next/server';

export function middleware() {
  // All security headers are now set in next.config.ts.
  // This middleware is now a pass-through.
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};