# Next Generation Therapy

A modern, accessible therapy website built with [Next.js 15](https://nextjs.org/), [React 19](https://react.dev/), and TypeScript.  
This project provides information about therapy services, blog articles, and a contact form for prospective clients.

---

## 🚀 Features

- **Next.js 15 App Router** with dynamic routing
- **TypeScript** for type safety and reliability
- **SEO optimized** with dynamic metadata, Open Graph, and Twitter cards
- **Responsive design** using CSS Modules
- **Blog** powered by Markdown files
- **Contact form** with enhanced validation and security
- **Google Analytics** and Vercel Speed Insights
- **Automatic sitemap generation** for SEO
- **Image optimization** and accessibility best practices
- **Error boundaries** for robust error handling
- **Security features** including rate limiting and input sanitization
- **Performance optimizations** with dynamic imports and loading states

## ✅ Recent Improvements (2025-01-01)

### Performance

- ✅ Dynamic imports for heavy components (contact form)
- ✅ Loading states with animated spinners
- ✅ Optimized image loading with Next.js Image component

### Security

- ✅ Rate limiting on contact form API (10 requests per 15 minutes)
- ✅ Enhanced input validation and sanitization
- ✅ XSS protection and secure headers

### Accessibility

- ✅ Comprehensive keyboard navigation support
- ✅ Screen reader compatibility with proper ARIA attributes
- ✅ Focus management and visual indicators
- ✅ Skip links for better navigation
- ✅ Support for reduced motion preferences
- ✅ High contrast mode support

### User Experience

- ✅ Enhanced contact form with real-time validation
- ✅ Better error messages and feedback
- ✅ Loading states for form submission
- ✅ Animated hamburger menu for mobile

### SEO & Technical

- ✅ Structured data (JSON-LD) for services
- ✅ Global error boundaries
- ✅ Improved meta tags and social sharing
- ✅ Better TypeScript configurations

---

## 📁 Project Structure

```
src/
  app/
    about/
    api/
      contact/
    blog/
      [slug]/
    book-now/
    privacy-policy/
    services/
    therapy-101/
    who-i-see/
    layout.tsx
    not-found.tsx
    page.tsx
    ...
  components/
    button.tsx
    buttonLinks.tsx
    contact-form.tsx
    footer.tsx
    header.tsx
    ...
  content/
    blog/
      first-post.md
      ...
  styles/
    globals.css
    variables.css
  utils/
public/
  images/
    default-social-share.jpg
    ...
  sitemap.xml
  sitemap-0.xml
.env.local
```

---

## 🛠️ Getting Started

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Add environment variables:**
   - Create a `.env.local` file in the root:
     ```
     RESEND_API_KEY=your_resend_api_key_here
     ```

3. **Run the development server:**

   ```sh
   npm run dev
   ```

4. **Build for production:**
   ```sh
   npm run build
   npm start
   ```

---

## 📝 Customization

- **Blog posts:**  
  Add Markdown files to `src/content/blog/` with frontmatter for `title`, `date`, and `summary`.

- **Images:**  
  Place images in `public/images/`.  
  The default social share image is `public/images/default-social-share.jpg`.

- **Metadata:**  
  Edit `src/app/layout.tsx` for global SEO and social sharing settings.

---

## 📦 Deployment

This project is ready for deployment on [Vercel](https://vercel.com/).  
Push to your GitHub repo and connect to Vercel for automatic builds and previews.

---

## 📧 Contact

- **Email:** [luke@lstevens.dev](mailto:luke@lstevens.dev)
- **LinkedIn:** [Luke Stevens](https://www.linkedin.com/in/luke-stevens-a117bab5/)
- **GitHub:** [ls99555](https://github.com/ls99555)

---

## 📝 License

MIT

---

\*Built and maintained by [Luke Stevens](https://www.linkedin.com/in/luke-stevens-a117bab5/)
