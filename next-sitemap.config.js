const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

module.exports = {
  siteUrl: "https://nextgentherapy.co.uk",
  generateRobotsTxt: false, // We have our own custom robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Set higher priority for important pages
    let priority = 0.7;
    if (path === '/') priority = 1.0;
    if (path === '/about' || path === '/services' || path === '/book-now') priority = 0.9;
    if (path === '/about-therapy' || path === '/blog') priority = 0.8;
    
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
