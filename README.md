# Next Generation Therapy

A modern, accessible therapy website built with [Next.js 15](https://nextjs.org/), [React 19](https://react.dev/), and TypeScript.  
This project provides information about therapy services, blog articles, and a contact form for prospective clients.

---

## 🚀 Features

- **Next.js 15 App Router** with dynamic routing
- **TypeScript** for type safety
- **SEO optimized** with dynamic metadata, Open Graph, and Twitter cards
- **Responsive design** using CSS Modules
- **Blog** powered by Markdown files
- **Contact form** with Resend email integration
- **Google Analytics** and Vercel Speed Insights
- **Automatic sitemap generation** for SEO
- **Image optimization** and accessibility best practices

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

*Built and maintained by [Luke Stevens](https://www.linkedin.com/in/luke-stevens-a117bab5/)