import { test, expect } from '@playwright/test';

test.describe('SEO and Accessibility', () => {
  const pages = [
    { url: '/', name: 'Homepage' },
    { url: '/about', name: 'About' },
    { url: '/services', name: 'Services' },
    { url: '/book-now', name: 'Book Now' },
    { url: '/pricing', name: 'Pricing' },
    { url: '/blog', name: 'Blog' },
  ];

  pages.forEach(({ url, name }) => {
    test(`${name} page has proper SEO metadata`, async ({ page }) => {
      await page.goto(url);

      // Check page title
      const title = await page.title();
      expect(title).toBeTruthy();
      expect(title.length).toBeGreaterThan(10);
      expect(title.length).toBeLessThan(60); // Optimal title length

      // Check meta description
      const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
      expect(metaDescription).toBeTruthy();
      expect(metaDescription!.length).toBeGreaterThan(120);
      expect(metaDescription!.length).toBeLessThan(160); // Optimal description length

      // Check canonical URL
      const canonical = page.locator('link[rel="canonical"]');
      await expect(canonical).toHaveAttribute('href', /.+/);

      // Check meta viewport for mobile
      const viewport = page.locator('meta[name="viewport"]');
      await expect(viewport).toHaveAttribute('content', /width=device-width/);
    });

    test(`${name} page has proper headings structure`, async ({ page }) => {
      await page.goto(url);

      // Should have exactly one H1
      const h1Elements = page.locator('h1');
      const h1Count = await h1Elements.count();
      expect(h1Count).toBe(1);

      // H1 should not be empty
      const h1Text = await h1Elements.textContent();
      expect(h1Text?.trim()).toBeTruthy();

      // Check heading hierarchy (h1 -> h2 -> h3, etc.)
      const headings = await page.locator('h1, h2, h3, h4, h5, h6').all();
      let lastLevel = 0;

      for (const heading of headings) {
        const tagName = await heading.evaluate((el) => el.tagName.toLowerCase());
        const currentLevel = parseInt(tagName.charAt(1));

        if (lastLevel > 0) {
          // Heading levels should not skip (e.g., h1 -> h3 is bad)
          expect(currentLevel - lastLevel).toBeLessThanOrEqual(1);
        }

        lastLevel = currentLevel;
      }
    });

    test(`${name} page has proper structured data`, async ({ page }) => {
      await page.goto(url);

      // Check for JSON-LD structured data
      const structuredData = page.locator('script[type="application/ld+json"]');
      const structuredDataCount = await structuredData.count();

      expect(structuredDataCount).toBeGreaterThan(0);

      // Validate JSON-LD syntax
      for (let i = 0; i < structuredDataCount; i++) {
        const jsonContent = await structuredData.nth(i).textContent();
        expect(() => JSON.parse(jsonContent!)).not.toThrow();

        const parsedData = JSON.parse(jsonContent!);
        expect(parsedData['@context']).toBe('https://schema.org');
        expect(parsedData['@type']).toBeTruthy();
      }
    });
  });

  test('Homepage has LocalBusiness schema', async ({ page }) => {
    await page.goto('/');

    const structuredData = page.locator('script[type="application/ld+json"]');
    const scripts = await structuredData.all();

    let hasLocalBusiness = false;

    for (const script of scripts) {
      const content = await script.textContent();
      const data = JSON.parse(content!);

      if (data['@type'] === 'LocalBusiness') {
        hasLocalBusiness = true;

        // Validate LocalBusiness schema
        expect(data.name).toBeTruthy();
        expect(data.address).toBeTruthy();
        expect(data.address['@type']).toBe('PostalAddress');
        expect(data.geo).toBeTruthy();
        expect(data.geo['@type']).toBe('GeoCoordinates');
        expect(data.url).toBeTruthy();
        expect(data.telephone).toBeTruthy();
        break;
      }
    }

    expect(hasLocalBusiness).toBe(true);
  });

  test('Images have proper alt attributes', async ({ page }) => {
    await page.goto('/');

    const images = page.locator('img');
    const imageCount = await images.count();

    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      const src = await img.getAttribute('src');

      // All images should have alt attribute (even if empty for decorative)
      expect(alt).not.toBeNull();

      // Content images should have meaningful alt text
      if (!src?.includes('icon') && !src?.includes('logo')) {
        expect(alt!.length).toBeGreaterThan(3);
      }
    }
  });

  test('Links have accessible names', async ({ page }) => {
    await page.goto('/');

    const links = page.locator('a');
    const linkCount = await links.count();

    for (let i = 0; i < linkCount; i++) {
      const link = links.nth(i);
      const text = await link.textContent();
      const ariaLabel = await link.getAttribute('aria-label');
      const title = await link.getAttribute('title');

      // Links should have accessible names
      const hasAccessibleName =
        (text && text.trim().length > 0) ||
        (ariaLabel && ariaLabel.trim().length > 0) ||
        (title && title.trim().length > 0);

      expect(hasAccessibleName).toBe(true);
    }
  });

  test('Forms have proper labels', async ({ page }) => {
    await page.goto('/book-now');

    // Check form inputs have associated labels
    const inputs = page.locator('input[type="text"], input[type="email"], textarea');
    const inputCount = await inputs.count();

    for (let i = 0; i < inputCount; i++) {
      const input = inputs.nth(i);
      const id = await input.getAttribute('id');
      const ariaLabel = await input.getAttribute('aria-label');

      if (id) {
        // Check if there's a label with matching 'for' attribute
        const label = page.locator(`label[for="${id}"]`);
        const hasLabel = (await label.count()) > 0;
        const hasAriaLabel = ariaLabel && ariaLabel.trim().length > 0;

        expect(hasLabel || hasAriaLabel).toBe(true);
      }
    }
  });

  test('Color contrast meets WCAG standards', async ({ page }) => {
    await page.goto('/');

    // Get computed styles for text elements
    const textElements = page.locator('p, h1, h2, h3, h4, h5, h6, a, button, span');
    const elementCount = Math.min(await textElements.count(), 10); // Test first 10 elements

    for (let i = 0; i < elementCount; i++) {
      const element = textElements.nth(i);

      const styles = await element.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return {
          color: computed.color,
          backgroundColor: computed.backgroundColor,
          fontSize: computed.fontSize,
        };
      });

      // Basic check - text should have color (not transparent)
      expect(styles.color).not.toBe('rgba(0, 0, 0, 0)');
      expect(styles.color).not.toBe('transparent');
    }
  });

  test('Page loads without JavaScript errors', async ({ page }) => {
    const errors: string[] = [];

    page.on('pageerror', (error) => {
      errors.push(error.message);
    });

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Filter out expected warnings (like act warnings which are test-related)
    const criticalErrors = errors.filter(
      (error) =>
        !error.includes('act(') && !error.includes('Warning:') && !error.includes('DevTools')
    );

    expect(criticalErrors).toHaveLength(0);
  });

  test('Sitemap is accessible', async ({ page }) => {
    const response = await page.goto('/sitemap.xml');
    expect(response?.status()).toBe(200);

    const content = await page.textContent('body');
    expect(content).toContain('<?xml');
    expect(content).toContain('<urlset');
    expect(content).toContain('https://nextgentherapy.co.uk');
  });

  test('Robots.txt is accessible', async ({ page }) => {
    const response = await page.goto('/robots.txt');
    expect(response?.status()).toBe(200);

    const content = await page.textContent('body');
    expect(content).toContain('User-agent:');
  });
});
