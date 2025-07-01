const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

module.exports = {
  siteUrl: "https://nextgentherapy.co.uk",
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  additionalPaths: async (config) => {
    const result = [];
    
    // Add blog posts to sitemap
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
            priority: 0.8,
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
