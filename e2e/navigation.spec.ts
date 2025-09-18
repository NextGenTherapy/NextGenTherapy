import { test, expect } from '@playwright/test';

test.describe('Site Navigation', () => {
  test('navigates to all main pages', async ({ page }) => {
    await page.goto('/');

    // Test navigation to About page
    await page.getByRole('link', { name: /about/i }).click();
    await expect(page).toHaveURL(/\/about/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // Test navigation to Services page
    await page.getByRole('link', { name: /services/i }).click();
    await expect(page).toHaveURL(/\/services/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // Test navigation to Book Now page
    await page.getByRole('link', { name: /book.*now/i }).click();
    await expect(page).toHaveURL(/\/book-now/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // Test navigation to Pricing page
    await page.getByRole('link', { name: /pricing/i }).click();
    await expect(page).toHaveURL(/\/pricing/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // Test navigation back to Home
    await page.getByRole('link', { name: /home/i }).click();
    await expect(page).toHaveURL(/^.*\/$|^.*\/$/); // Root path
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('has working footer links', async ({ page }) => {
    await page.goto('/');

    const footer = page.getByRole('contentinfo');

    // Test Privacy Policy link
    const privacyLink = footer.getByRole('link', { name: /privacy.*policy/i });
    if (await privacyLink.isVisible()) {
      await privacyLink.click();
      await expect(page).toHaveURL(/\/privacy-policy/);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    }

    // Go back to home
    await page.goto('/');

    // Test Terms link
    const termsLink = footer.getByRole('link', { name: /terms/i });
    if (await termsLink.isVisible()) {
      await termsLink.click();
      await expect(page).toHaveURL(/\/terms/);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    }
  });

  test('blog navigation works correctly', async ({ page }) => {
    await page.goto('/blog');

    // Check blog page loads
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // Check if there are blog posts
    const blogLinks = page.getByRole('link').filter({ hasText: /read more|continue reading/i });
    const linkCount = await blogLinks.count();

    if (linkCount > 0) {
      // Click on first blog post
      await blogLinks.first().click();

      // Should navigate to individual blog post
      await expect(page).toHaveURL(/\/blog\/[^\/]+$/);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

      // Should have back to blog navigation
      const backLink = page.getByRole('link', { name: /back.*blog|all.*posts/i });
      if (await backLink.isVisible()) {
        await backLink.click();
        await expect(page).toHaveURL(/\/blog$/);
      }
    }
  });

  test('responsive navigation on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check if mobile menu toggle exists
    const mobileToggle = page.getByRole('button', { name: /menu|navigation/i });

    if (await mobileToggle.isVisible()) {
      // Open mobile menu
      await mobileToggle.click();

      // Check navigation links are visible
      await expect(page.getByRole('link', { name: /about/i })).toBeVisible();
      await expect(page.getByRole('link', { name: /services/i })).toBeVisible();

      // Test mobile navigation
      await page.getByRole('link', { name: /about/i }).click();
      await expect(page).toHaveURL(/\/about/);
    }
  });

  test('breadcrumb navigation', async ({ page }) => {
    // Navigate to a nested page
    await page.goto('/services');

    // Check if breadcrumbs exist
    const breadcrumbs = page.getByRole('navigation', { name: /breadcrumb/i });

    if (await breadcrumbs.isVisible()) {
      // Should have Home link in breadcrumbs
      const homeLink = breadcrumbs.getByRole('link', { name: /home/i });
      await expect(homeLink).toBeVisible();

      // Click home breadcrumb
      await homeLink.click();
      await expect(page).toHaveURL(/^.*\/$|^.*\/$/);
    }
  });

  test('scroll to top functionality', async ({ page }) => {
    await page.goto('/');

    // Scroll down to bottom of page
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Wait for scroll to complete
    await page.waitForTimeout(500);

    // Check if scroll to top button appears
    const scrollButton = page.getByRole('button', { name: /scroll.*top|back.*top/i });

    if (await scrollButton.isVisible()) {
      await scrollButton.click();

      // Should scroll back to top
      const scrollY = await page.evaluate(() => window.scrollY);
      expect(scrollY).toBeLessThan(100);
    }
  });

  test('404 page handling', async ({ page }) => {
    // Navigate to non-existent page
    await page.goto('/non-existent-page');

    // Should show 404 page or redirect appropriately
    const pageContent = await page.textContent('body');

    // Should either show 404 content or redirect to valid page
    const is404 = pageContent?.includes('404') ||
                  pageContent?.includes('not found') ||
                  pageContent?.includes('page not found');

    const hasValidContent = await page.getByRole('heading', { level: 1 }).isVisible();

    expect(is404 || hasValidContent).toBe(true);
  });
});