const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

module.exports = {
  siteUrl: 'https://nextgentherapy.co.uk',
  generateRobotsTxt: false, // We have our own custom robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Set strategic priority and changefreq for SEO optimization
    let priority = 0.7;
    let changefreq = 'monthly'; // Default for static pages

    // Homepage - changes frequently with updates
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }
    // Blog index - new posts added regularly
    if (path === '/blog') {
      priority = 0.75;
      changefreq = 'weekly';
    }
    // Individual blog posts - rarely change after publication
    if (path.startsWith('/blog/')) {
      priority = 0.7;
      changefreq = 'monthly';
    }
    // High-intent service pages
    if (path === '/services') priority = 0.95;
    if (path === '/book-now') priority = 0.9;
    if (path === '/pricing') priority = 0.9;
    if (path === '/faq') priority = 0.85;
    if (path === '/trust') priority = 0.85;
    if (path === '/location') priority = 0.8;
    if (path === '/about') priority = 0.85;
    if (path === '/is-this-right-for-you') priority = 0.8;
    // Specialized service pages - high priority for targeted SEO
    if (path === '/therapy-for-women') priority = 0.85;
    if (path === '/neurodiversity') priority = 0.85;
    if (path === '/teen-therapy') priority = 0.85;
    if (path === '/child-therapy') priority = 0.85;
    if (path === '/romanian-therapy') priority = 0.85;
    if (path === '/online-therapy') priority = 0.85;

    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  additionalPaths: async (config) => {
    const result = [];

    // Add blog posts to sitemap with optimized metadata
    try {
      const postsDir = path.join(process.cwd(), 'src/content/blog');
      const files = fs.readdirSync(postsDir);

      files.forEach((filename) => {
        if (filename.endsWith('.md')) {
          const filePath = path.join(postsDir, filename);
          const fileContent = fs.readFileSync(filePath, 'utf-8');
          const { data } = matter(fileContent);
          const slug = filename.replace(/\.md$/, '');

          result.push({
            loc: `/blog/${slug}`,
            changefreq: 'monthly',
            priority: 0.8, // High priority for blog content
            lastmod: data.date || new Date().toISOString(),
          });
        }
      });
    } catch (error) {
      console.warn('Error generating blog post sitemap entries:', error);
    }

    return result;
  },
};
