import { NextRequest, NextResponse } from 'next/server';
import { submitToIndexNow, submitAllPagesToIndexNow } from '@/lib/indexnow';

export const runtime = 'nodejs';

/**
 * IndexNow trigger endpoint.
 *
 * Auth: requires INDEXNOW_SECRET env var either via
 *   `Authorization: Bearer <secret>` header, or
 *   `?secret=<secret>` query param (so it can be wired to a Vercel deploy hook).
 *
 * POST body:
 *   { "submitAll": true }                  -> submit every URL in the sitemap
 *   { "urls": ["/blog/foo", "/about"] }    -> submit specific URLs
 *
 * GET (with auth) submits the full sitemap. Without auth it just reports status.
 */
function isAuthorised(request: NextRequest): boolean {
  const expected = process.env.INDEXNOW_SECRET;
  if (!expected) return false;

  const header = request.headers.get('authorization');
  if (header === `Bearer ${expected}`) return true;

  const querySecret = request.nextUrl.searchParams.get('secret');
  if (querySecret && querySecret === expected) return true;

  return false;
}

export async function POST(request: NextRequest) {
  if (!isAuthorised(request)) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = (await request.json().catch(() => ({}))) as {
      urls?: string[];
      submitAll?: boolean;
    };
    const { urls, submitAll = false } = body;

    if (submitAll) {
      const success = await submitAllPagesToIndexNow();
      return NextResponse.json(
        {
          success,
          message: success
            ? 'All sitemap URLs submitted to IndexNow'
            : 'Failed to submit pages to IndexNow',
        },
        { status: success ? 200 : 502 },
      );
    }

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { success: false, message: 'URLs array is required' },
        { status: 400 },
      );
    }

    const success = await submitToIndexNow(urls);
    return NextResponse.json(
      {
        success,
        message: success
          ? `Submitted ${urls.length} URL(s) to IndexNow`
          : 'Failed to submit URLs to IndexNow',
        urls,
      },
      { status: success ? 200 : 502 },
    );
  } catch (error) {
    console.error('IndexNow API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 },
    );
  }
}

export async function GET(request: NextRequest) {
  if (!isAuthorised(request)) {
    return NextResponse.json(
      {
        message: 'IndexNow API is ready',
        keyFile: 'fa653f17b2f5c3fc3940abf3aad4b728.txt',
        endpoints: ['https://api.indexnow.org/indexnow', 'https://yandex.com/indexnow'],
      },
      { status: 200 },
    );
  }

  const success = await submitAllPagesToIndexNow();
  return NextResponse.json(
    {
      success,
      message: success ? 'All sitemap URLs submitted to IndexNow' : 'IndexNow submission failed',
    },
    { status: success ? 200 : 502 },
  );
}
