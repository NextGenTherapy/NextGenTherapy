import { NextResponse } from 'next/server';

function generateNonce() {
  return Buffer.from(crypto.getRandomValues(new Uint8Array(16))).toString('base64');
}

export function middleware() {
  const nonce = generateNonce();
  const response = NextResponse.next();
  response.headers.set('x-nonce', nonce);
  return response;
}

export const config = {
  matcher: "/:path*",
};