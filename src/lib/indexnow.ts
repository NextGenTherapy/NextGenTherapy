/**
 * IndexNow implementation for instant search engine indexing
 * Notifies Bing and Yandex when content is updated
 */

const INDEXNOW_KEY = 'fa653f17b2f5c3fc3940abf3aad4b728';
const SITE_URL = 'https://nextgentherapy.co.uk';

// IndexNow endpoints
const INDEXNOW_ENDPOINTS = [
  'https://api.indexnow.org/indexnow', // Microsoft Bing
  'https://yandex.com/indexnow' // Yandex
];

export interface IndexNowSubmission {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

/**
 * Submit URLs to IndexNow API
 * @param urls Array of URLs to submit
 * @returns Promise with submission results
 */
export async function submitToIndexNow(urls: string[]): Promise<boolean> {
  if (!urls.length) return false;

  const submission: IndexNowSubmission = {
    host: 'nextgentherapy.co.uk',
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls.map(url => url.startsWith('http') ? url : `${SITE_URL}${url}`)
  };

  try {
    // Submit to all IndexNow endpoints
    const submissions = INDEXNOW_ENDPOINTS.map(async (endpoint) => {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(submission)
      });

      if (response.ok) {
        console.log(`✅ IndexNow: Successfully submitted ${urls.length} URLs to ${endpoint}`);
        return true;
      } else {
        console.warn(`⚠️ IndexNow: Failed to submit to ${endpoint} - Status: ${response.status}`);
        return false;
      }
    });

    const results = await Promise.allSettled(submissions);
    const successCount = results.filter(r => r.status === 'fulfilled' && r.value).length;

    console.log(`📊 IndexNow: ${successCount}/${INDEXNOW_ENDPOINTS.length} endpoints notified successfully`);
    return successCount > 0;

  } catch (error) {
    console.error('❌ IndexNow submission error:', error);
    return false;
  }
}

/**
 * Submit a single URL to IndexNow
 * @param url Single URL to submit
 */
export async function submitUrlToIndexNow(url: string): Promise<boolean> {
  return submitToIndexNow([url]);
}

/**
 * Submit multiple URLs to IndexNow
 * @param urls Array of URLs to submit
 */
export async function submitUrlsToIndexNow(urls: string[]): Promise<boolean> {
  return submitToIndexNow(urls);
}

/**
 * Submit all site pages to IndexNow (for initial setup)
 */
export async function submitAllPagesToIndexNow(): Promise<boolean> {
  const allPages = [
    '/',
    '/about',
    '/about-therapy',
    '/services',
    '/child-therapy',
    '/teenage-therapy',
    '/young-adult-therapy',
    '/lgbtq-therapy',
    '/neurodiversity-therapy',
    '/parent-support',
    '/youth-family-faq',
    '/pricing',
    '/location',
    '/book-now',
    '/faq',
    '/blog',
    '/privacy-policy',
    '/terms',
    '/trust'
  ];

  return submitToIndexNow(allPages);
}