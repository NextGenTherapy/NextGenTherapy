import { test, expect } from '@playwright/test';

/**
 * Visual Regression Tests for Next Generation Therapy
 * Captures screenshots and compares against baseline images
 * to detect unintended visual changes
 */

const pages = [
  { name: 'Homepage', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Services', url: '/services' },
  { name: 'Pricing', url: '/pricing' },
  { name: 'Book Now', url: '/book-now' },
  { name: 'FAQ', url: '/faq' },
  { name: 'Testimonials', url: '/testimonials' },
  { name: 'Location', url: '/location' },
  { name: 'About Therapy', url: '/about-therapy' },
  { name: 'Blog', url: '/blog' },
  { name: 'Privacy Policy', url: '/privacy-policy' },
  { name: 'Terms', url: '/terms' }
];

const viewports = [
  { name: 'Desktop', width: 1920, height: 1080 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Mobile', width: 375, height: 812 }
];

// Test each page across different viewports
for (const page of pages) {
  for (const viewport of viewports) {
    test(`Visual: ${page.name} - ${viewport.name}`, async ({ browser }) => {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
        // Consistent font rendering
        deviceScaleFactor: 1,
        hasTouch: viewport.name === 'Mobile'
      });

      const browserPage = await context.newPage();

      try {
        // Navigate to page
        await browserPage.goto(page.url, {
          waitUntil: 'networkidle',
          timeout: 10000
        });

        // Wait for any lazy-loaded content
        await browserPage.waitForTimeout(1000);

        // Hide dynamic content that changes between runs
        await browserPage.addStyleTag({
          content: `
            /* Hide potentially dynamic content for consistent screenshots */
            .scroll-to-top,
            [data-testid="scroll-to-top"],
            .cookie-consent,
            [data-testid="cookie-consent"] {
              visibility: hidden !important;
            }

            /* Ensure consistent font rendering */
            * {
              font-smooth: never;
              -webkit-font-smoothing: none;
              -moz-osx-font-smoothing: none;
            }
          `
        });

        // Take full page screenshot
        await expect(browserPage).toHaveScreenshot(
          `${page.name.toLowerCase().replace(/\s+/g, '-')}-${viewport.name.toLowerCase()}.png`,
          {
            fullPage: true,
            threshold: 0.3,
            maxDiffPixels: 1000
          }
        );

        // Take above-the-fold screenshot for critical rendering path
        if (viewport.name === 'Desktop') {
          await expect(browserPage).toHaveScreenshot(
            `${page.name.toLowerCase().replace(/\s+/g, '-')}-hero.png`,
            {
              clip: { x: 0, y: 0, width: viewport.width, height: 600 },
              threshold: 0.2,
              maxDiffPixels: 500
            }
          );
        }

      } finally {
        await context.close();
      }
    });
  }
}

test.describe('Component Visual Regression', () => {
  test('Header consistency across pages', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 }
    });

    for (const page of pages.slice(0, 3)) { // Test first 3 pages
      const browserPage = await context.newPage();

      try {
        await browserPage.goto(page.url, { waitUntil: 'networkidle' });

        // Screenshot just the header
        const header = browserPage.locator('header');
        await expect(header).toHaveScreenshot(
          `header-${page.name.toLowerCase().replace(/\s+/g, '-')}.png`,
          { threshold: 0.1 }
        );
      } finally {
        await browserPage.close();
      }
    }

    await context.close();
  });

  test('Footer consistency across pages', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 }
    });

    for (const page of pages.slice(0, 3)) { // Test first 3 pages
      const browserPage = await context.newPage();

      try {
        await browserPage.goto(page.url, { waitUntil: 'networkidle' });

        // Screenshot just the footer
        const footer = browserPage.locator('footer');
        await expect(footer).toHaveScreenshot(
          `footer-${page.name.toLowerCase().replace(/\s+/g, '-')}.png`,
          { threshold: 0.1 }
        );
      } finally {
        await browserPage.close();
      }
    }

    await context.close();
  });

  test('Button styles consistency', async ({ page }) => {
    await page.goto('/book-now', { waitUntil: 'networkidle' });

    // Screenshot primary buttons
    const primaryButtons = page.locator('a[data-testid="button"], button[type="submit"]');
    const buttonCount = await primaryButtons.count();

    for (let i = 0; i < Math.min(buttonCount, 3); i++) {
      const button = primaryButtons.nth(i);
      await expect(button).toHaveScreenshot(`button-primary-${i}.png`, {
        threshold: 0.1
      });
    }
  });
});

test.describe('Form Visual Regression', () => {
  test('Contact form states', async ({ page }) => {
    await page.goto('/book-now', { waitUntil: 'networkidle' });

    // Wait for form to load
    await page.waitForSelector('[data-testid="contact-form"]', { timeout: 5000 });

    const form = page.locator('[data-testid="contact-form"]');

    // Initial state
    await expect(form).toHaveScreenshot('contact-form-initial.png', {
      threshold: 0.2
    });

    // Focus state
    await page.locator('input[name="name"]').focus();
    await expect(form).toHaveScreenshot('contact-form-focused.png', {
      threshold: 0.2
    });

    // Filled state
    await page.locator('input[name="name"]').fill('Test User');
    await page.locator('input[name="email"]').fill('test@example.com');
    await page.locator('textarea[name="message"]').fill('Test message for visual regression testing');

    await expect(form).toHaveScreenshot('contact-form-filled.png', {
      threshold: 0.2
    });
  });
});

test.describe('Responsive Design Visual Tests', () => {
  test('Mobile navigation menu', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 375, height: 812 }
    });

    const page = await context.newPage();

    try {
      await page.goto('/', { waitUntil: 'networkidle' });

      // Mobile menu closed
      await expect(page.locator('header')).toHaveScreenshot('mobile-nav-closed.png', {
        threshold: 0.1
      });

      // Open mobile menu
      const menuButton = page.locator('button[aria-label*="menu"], .mobile-menu-toggle, [data-testid="mobile-menu-toggle"]');
      if (await menuButton.isVisible()) {
        await menuButton.click();

        // Mobile menu open
        await expect(page.locator('header')).toHaveScreenshot('mobile-nav-open.png', {
          threshold: 0.2
        });
      }
    } finally {
      await context.close();
    }
  });

  test('Responsive layout breakpoints', async ({ browser }) => {
    const breakpoints = [
      { name: 'Large Desktop', width: 1440, height: 900 },
      { name: 'Small Desktop', width: 1024, height: 768 },
      { name: 'Tablet Portrait', width: 768, height: 1024 },
      { name: 'Mobile Large', width: 414, height: 896 },
      { name: 'Mobile Small', width: 320, height: 568 }
    ];

    for (const breakpoint of breakpoints) {
      const context = await browser.newContext({
        viewport: { width: breakpoint.width, height: breakpoint.height }
      });

      const page = await context.newPage();

      try {
        await page.goto('/', { waitUntil: 'networkidle' });

        // Screenshot hero section at different breakpoints
        await expect(page.locator('main section:first-child, .hero, .greeting')).toHaveScreenshot(
          `hero-${breakpoint.name.toLowerCase().replace(/\s+/g, '-')}.png`,
          { threshold: 0.3 }
        );
      } finally {
        await context.close();
      }
    }
  });
});

test.describe('Dark Mode Visual Tests', () => {
  test('Dark mode compatibility check', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 },
      colorScheme: 'dark'
    });

    const page = await context.newPage();

    try {
      await page.goto('/', { waitUntil: 'networkidle' });

      // Take screenshot with dark mode preference
      await expect(page).toHaveScreenshot('homepage-dark-mode.png', {
        fullPage: true,
        threshold: 0.3
      });
    } finally {
      await context.close();
    }
  });
});

// Performance-aware visual tests
test.describe('Performance Visual Impact', () => {
  test('Image loading states', async ({ page }) => {
    // Block images to test loading states
    await page.route('**/*.{jpg,jpeg,png,gif,webp}', route => route.abort());

    await page.goto('/', { waitUntil: 'networkidle' });

    // Screenshot with images blocked (should show alt text/placeholders)
    await expect(page).toHaveScreenshot('images-blocked.png', {
      fullPage: true,
      threshold: 0.5
    });
  });
});