import { chromium, Browser, Page } from 'playwright';
import * as path from 'path';
import * as fs from 'fs';

const BASE_URL = 'http://localhost:3000';

// Pages to capture
const PAGES = [
  // Main pages
  { path: '/', name: 'homepage' },
  { path: '/about', name: 'about' },
  { path: '/services', name: 'services' },
  { path: '/book-now', name: 'book-now' },
  { path: '/pricing', name: 'pricing' },
  { path: '/faq', name: 'faq' },
  { path: '/youth-family-faq', name: 'youth-family-faq' },
  { path: '/trust', name: 'trust' },
  { path: '/location', name: 'location' },
  { path: '/is-this-right-for-you', name: 'is-this-right-for-you' },
  // Service pages
  { path: '/therapy-for-women', name: 'therapy-for-women' },
  { path: '/neurodiversity', name: 'neurodiversity' },
  { path: '/teen-therapy', name: 'teen-therapy' },
  { path: '/child-therapy', name: 'child-therapy' },
  { path: '/romanian-therapy', name: 'romanian-therapy' },
  { path: '/online-therapy', name: 'online-therapy' },
  // Legal pages
  { path: '/privacy-policy', name: 'privacy-policy' },
  { path: '/terms', name: 'terms' },
  // Blog listing
  { path: '/blog', name: 'blog' },
  // Blog posts (all 13)
  { path: '/blog/adolescent-depression-struggles', name: 'blog-adolescent-depression-struggles' },
  { path: '/blog/digital-wellbeing-young-people-mental-health', name: 'blog-digital-wellbeing' },
  { path: '/blog/helping-young-people-friendship-difficulties-social-anxiety', name: 'blog-friendship-difficulties' },
  { path: '/blog/i-didnt-become', name: 'blog-i-didnt-become' },
  { path: '/blog/preparing-for-first-therapy-session', name: 'blog-preparing-first-session' },
  { path: '/blog/school-avoidance-education-feels-impossible', name: 'blog-school-avoidance' },
  { path: '/blog/signs-you-might-benefit-from-therapy', name: 'blog-signs-benefit-therapy' },
  { path: '/blog/supporting-child-through-therapy', name: 'blog-supporting-child' },
  { path: '/blog/understanding-anxiety-young-people', name: 'blog-understanding-anxiety' },
  { path: '/blog/understanding-different-therapy-approaches', name: 'blog-therapy-approaches' },
  { path: '/blog/understanding-different-types-therapy-young-people', name: 'blog-types-therapy' },
  { path: '/blog/youth-mental-health-awareness-colchester', name: 'blog-youth-mental-health' },
  { path: '/blog/understanding', name: 'blog-understanding' },
];

// Viewports to capture
const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 900 },
];

function ensureDir(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

async function waitForPageLoad(page: Page): Promise<void> {
  await page.waitForLoadState('networkidle');
  // Additional wait for fonts and images
  await page.waitForTimeout(500);
}

async function capturePages(browser: Browser, outputDir: string): Promise<void> {
  const pagesDir = path.join(outputDir, '1-pages');
  ensureDir(pagesDir);

  console.log('\n📸 Capturing page screenshots...\n');

  for (const pageInfo of PAGES) {
    for (const viewport of VIEWPORTS) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
      });
      const page = await context.newPage();

      try {
        const url = `${BASE_URL}${pageInfo.path}`;
        console.log(`  → ${pageInfo.name}--${viewport.name}`);

        await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
        await waitForPageLoad(page);

        const filename = `${pageInfo.name}--${viewport.name}.png`;
        await page.screenshot({
          path: path.join(pagesDir, filename),
          fullPage: true,
        });
      } catch (error) {
        console.error(`  ✗ Failed: ${pageInfo.name}--${viewport.name}:`, error instanceof Error ? error.message : error);
      } finally {
        await context.close();
      }
    }
  }
}

async function captureHeader(browser: Browser, outputDir: string): Promise<void> {
  const navFolder = path.join(outputDir, '2-components', 'nav');
  ensureDir(navFolder);

  console.log('\n📸 Capturing header screenshots...\n');

  // Desktop header
  {
    const context = await browser.newContext({
      viewport: { width: 1280, height: 900 },
    });
    const page = await context.newPage();

    try {
      await page.goto(BASE_URL, { waitUntil: 'networkidle' });
      await waitForPageLoad(page);

      const header = page.locator('header').first();
      if (await header.isVisible()) {
        console.log('  → header--desktop');
        await header.screenshot({
          path: path.join(navFolder, 'header--desktop.png'),
        });
      }
    } catch (error) {
      console.error('  ✗ Failed: header--desktop:', error instanceof Error ? error.message : error);
    } finally {
      await context.close();
    }
  }

  // Mobile header (closed state)
  {
    const context = await browser.newContext({
      viewport: { width: 375, height: 812 },
    });
    const page = await context.newPage();

    try {
      await page.goto(BASE_URL, { waitUntil: 'networkidle' });
      await waitForPageLoad(page);

      const header = page.locator('header').first();
      if (await header.isVisible()) {
        console.log('  → header--mobile-closed');
        await header.screenshot({
          path: path.join(navFolder, 'header--mobile-closed.png'),
        });
      }

      // Try to open mobile menu
      const menuButton = page.locator('[aria-label*="menu"], [aria-label*="Menu"], button.hamburger, .menu-toggle, .mobile-menu-btn').first();
      if (await menuButton.isVisible()) {
        await menuButton.click();
        await page.waitForTimeout(300);

        console.log('  → header--mobile-open');
        await page.screenshot({
          path: path.join(navFolder, 'header--mobile-open.png'),
          fullPage: false,
        });
      }
    } catch (error) {
      console.error('  ✗ Failed: header--mobile:', error instanceof Error ? error.message : error);
    } finally {
      await context.close();
    }
  }
}

async function captureFooter(browser: Browser, outputDir: string): Promise<void> {
  const footerFolder = path.join(outputDir, '2-components', 'footer');
  ensureDir(footerFolder);

  console.log('\n📸 Capturing footer screenshots...\n');

  for (const viewport of [
    { name: 'desktop', width: 1280, height: 900 },
    { name: 'mobile', width: 375, height: 812 },
  ]) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
    });
    const page = await context.newPage();

    try {
      await page.goto(BASE_URL, { waitUntil: 'networkidle' });
      await waitForPageLoad(page);

      const footer = page.locator('footer').first();
      if (await footer.isVisible()) {
        console.log(`  → footer--${viewport.name}`);
        await footer.screenshot({
          path: path.join(footerFolder, `footer--${viewport.name}.png`),
        });
      }
    } catch (error) {
      console.error(`  ✗ Failed: footer--${viewport.name}:`, error instanceof Error ? error.message : error);
    } finally {
      await context.close();
    }
  }
}

async function captureHero(browser: Browser, outputDir: string): Promise<void> {
  const heroFolder = path.join(outputDir, '2-components', 'hero');
  ensureDir(heroFolder);

  console.log('\n📸 Capturing hero screenshots...\n');

  for (const viewport of [
    { name: 'desktop', width: 1280, height: 900 },
    { name: 'mobile', width: 375, height: 812 },
  ]) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
    });
    const page = await context.newPage();

    try {
      await page.goto(BASE_URL, { waitUntil: 'networkidle' });
      await waitForPageLoad(page);

      // Capture above-fold area (viewport height)
      console.log(`  → hero--${viewport.name}`);
      await page.screenshot({
        path: path.join(heroFolder, `hero--${viewport.name}.png`),
        fullPage: false,
        clip: {
          x: 0,
          y: 0,
          width: viewport.width,
          height: viewport.height,
        },
      });
    } catch (error) {
      console.error(`  ✗ Failed: hero--${viewport.name}:`, error instanceof Error ? error.message : error);
    } finally {
      await context.close();
    }
  }
}

async function main(): Promise<void> {
  const outputDir = path.join(process.cwd(), 'screenshots');
  ensureDir(outputDir);

  console.log('🖼️  Next Gen Therapy - Visual Screenshot Capture\n');
  console.log('================================================');
  console.log(`Output: ${outputDir}`);
  console.log(`Base URL: ${BASE_URL}\n`);

  const browser = await chromium.launch();

  try {
    await capturePages(browser, outputDir);
    await captureHeader(browser, outputDir);
    await captureFooter(browser, outputDir);
    await captureHero(browser, outputDir);

    console.log('\n================================================');
    console.log('✅ Visual audit complete.');
    console.log(`   Screenshots in: ${outputDir}`);
    console.log('================================================\n');
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

main();
