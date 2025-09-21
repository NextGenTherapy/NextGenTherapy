import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('loads successfully', async ({ page }) => {
    await page.goto('/');

    // Check page title
    await expect(page).toHaveTitle(/Next Generation Therapy/);

    // Check main heading is visible
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // Check navigation is present
    await expect(page.getByRole('navigation')).toBeVisible();

    // Check footer is present
    await expect(page.getByRole('contentinfo')).toBeVisible();
  });

  test('has accessible navigation', async ({ page }) => {
    await page.goto('/');

    // Check main navigation links
    const navigation = page.getByRole('navigation');

    await expect(navigation.getByRole('link', { name: /home/i })).toBeVisible();
    await expect(navigation.getByRole('link', { name: /about/i })).toBeVisible();
    await expect(navigation.getByRole('link', { name: /services/i })).toBeVisible();
    await expect(navigation.getByRole('link', { name: /contact/i })).toBeVisible();
  });

  test('cookie consent functionality', async ({ page }) => {
    await page.goto('/');

    // Check if cookie consent banner appears
    const cookieBanner = page.getByText(/we use cookies/i);
    if (await cookieBanner.isVisible()) {
      // Test accepting cookies
      await page.getByRole('button', { name: /accept all cookies/i }).click();

      // Cookie banner should disappear
      await expect(cookieBanner).not.toBeVisible();

      // Check that consent is stored
      const consent = await page.evaluate(() => localStorage.getItem('cookie-consent'));
      expect(consent).toBe('accepted');
    }
  });

  test('loads Core Web Vitals optimally', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');

    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');

    const loadTime = Date.now() - startTime;

    // Should load in under 2.5 seconds for good LCP
    expect(loadTime).toBeLessThan(2500);

    // Check that images have proper loading attributes
    const images = page.locator('img');
    const imageCount = await images.count();

    if (imageCount > 0) {
      // At least some images should have loading="lazy" or priority loading
      const lazyImages = page.locator('img[loading="lazy"]');
      const priorityImages = page.locator('img[priority]');

      const lazyCount = await lazyImages.count();
      const priorityCount = await priorityImages.count();

      expect(lazyCount + priorityCount).toBeGreaterThan(0);
    }
  });
});
