/* eslint-disable @typescript-eslint/no-require-imports */
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://localhost:3000';

// OG Image dimensions (standard)
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

// Pages to capture for OG images
const OG_PAGES = [
  { path: '/', name: 'og-homepage' },
  { path: '/therapy-for-women', name: 'og-therapy-for-women' },
  { path: '/neurodiversity', name: 'og-neurodiversity' },
  { path: '/teen-therapy', name: 'og-teen-therapy' },
  { path: '/child-therapy', name: 'og-child-therapy' },
  { path: '/romanian-therapy', name: 'og-romanian-therapy' },
  { path: '/online-therapy', name: 'og-online-therapy' },
];

interface Browser {
  newContext: (options: { viewport: { width: number; height: number }; deviceScaleFactor?: number }) => Promise<BrowserContext>;
  close: () => Promise<void>;
}

interface BrowserContext {
  newPage: () => Promise<Page>;
  close: () => Promise<void>;
}

interface Page {
  goto: (url: string, options?: { waitUntil?: string; timeout?: number }) => Promise<void>;
  waitForLoadState: (state: string) => Promise<void>;
  waitForTimeout: (ms: number) => Promise<void>;
  screenshot: (options: {
    path: string;
    type?: 'jpeg' | 'png';
    quality?: number;
    fullPage?: boolean;
    clip?: { x: number; y: number; width: number; height: number };
  }) => Promise<void>;
}

function ensureDir(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

async function generateOGImages(browser: Browser, outputDir: string): Promise<void> {
  console.log('\n📸 Generating OG images...\n');
  console.log(`   Dimensions: ${OG_WIDTH}x${OG_HEIGHT}`);
  console.log(`   Output: ${outputDir}\n`);

  for (const pageInfo of OG_PAGES) {
    const context = await browser.newContext({
      viewport: { width: OG_WIDTH, height: OG_HEIGHT },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();

    try {
      const url = `${BASE_URL}${pageInfo.path}`;
      console.log(`  → ${pageInfo.name}`);

      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

      // Wait for fonts and images to load
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);

      const filename = `${pageInfo.name}.jpg`;
      await page.screenshot({
        path: path.join(outputDir, filename),
        type: 'jpeg',
        quality: 90,
        fullPage: false,
        clip: {
          x: 0,
          y: 0,
          width: OG_WIDTH,
          height: OG_HEIGHT,
        },
      });
    } catch (error) {
      console.error(`  ✗ Failed: ${pageInfo.name}:`, error instanceof Error ? error.message : error);
    } finally {
      await context.close();
    }
  }

  // Copy homepage OG as default social share
  const homepagePath = path.join(outputDir, 'og-homepage.jpg');
  const defaultPath = path.join(path.dirname(outputDir), 'default-social-share.jpg');

  if (fs.existsSync(homepagePath)) {
    fs.copyFileSync(homepagePath, defaultPath);
    console.log(`\n  → Copied og-homepage.jpg to default-social-share.jpg`);
  }
}

async function main(): Promise<void> {
  const outputDir = path.join(process.cwd(), 'public', 'images', 'og');
  ensureDir(outputDir);

  console.log('🖼️  Next Gen Therapy - OG Image Generator\n');
  console.log('==========================================');
  console.log(`Output: ${outputDir}`);
  console.log(`Base URL: ${BASE_URL}\n`);
  console.log('Make sure dev server is running: npm run dev\n');

  const browser = await chromium.launch();

  try {
    await generateOGImages(browser, outputDir);

    console.log('\n==========================================');
    console.log('✅ OG image generation complete.');
    console.log(`   Images in: ${outputDir}`);
    console.log('==========================================\n');
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

main();
