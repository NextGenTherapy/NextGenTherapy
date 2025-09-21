import { NextRequest, NextResponse } from 'next/server';
import { submitToIndexNow, submitAllPagesToIndexNow } from '@/lib/indexnow';

/**
 * IndexNow API endpoint for manual URL submissions
 * POST /api/indexnow
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { urls, submitAll = false } = body;

    if (submitAll) {
      // Submit all site pages
      const success = await submitAllPagesToIndexNow();

      if (success) {
        return NextResponse.json({
          success: true,
          message: 'All site pages submitted to IndexNow successfully'
        });
      } else {
        return NextResponse.json({
          success: false,
          message: 'Failed to submit pages to IndexNow'
        }, { status: 500 });
      }
    }

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({
        success: false,
        message: 'URLs array is required'
      }, { status: 400 });
    }

    const success = await submitToIndexNow(urls);

    if (success) {
      return NextResponse.json({
        success: true,
        message: `Successfully submitted ${urls.length} URLs to IndexNow`,
        urls: urls
      });
    } else {
      return NextResponse.json({
        success: false,
        message: 'Failed to submit URLs to IndexNow'
      }, { status: 500 });
    }

  } catch (error) {
    console.error('IndexNow API error:', error);
    return NextResponse.json({
      success: false,
      message: 'Internal server error'
    }, { status: 500 });
  }
}

/**
 * GET endpoint for health check
 */
export async function GET() {
  return NextResponse.json({
    message: 'IndexNow API is ready',
    keyFile: 'fa653f17b2f5c3fc3940abf3aad4b728.txt',
    endpoints: [
      'https://api.indexnow.org/indexnow',
      'https://yandex.com/indexnow'
    ]
  });
}