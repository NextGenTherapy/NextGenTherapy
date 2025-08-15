const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

module.exports = {
  siteUrl: "https://www.nextgentherapy.co.uk",
  generateRobotsTxt: false, // We have our own custom robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Set strategic priority for SEO optimization
    let priority = 0.7;
    if (path === '/') priority = 1.0;
    if (path === '/services') priority = 0.95;  // Boost services page (Page 6 → Page 1-3)
    if (path === '/book-now') priority = 0.9;
    if (path === '/about') priority = 0.85;
    if (path === '/about-therapy') priority = 0.8;
    if (path === '/blog') priority = 0.75;
    if (path.startsWith('/blog/')) priority = 0.7;
    
    return {
      loc: path,
      changefreq: config.changefreq,
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
      
      files.forEach(filename => {
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
