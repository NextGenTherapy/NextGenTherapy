# Step-by-Step Guide to Finalize Your Next.js Website

---

## [SEO]

1. **Replace all `localhost:3000` URLs in metadata and sitemap with your production domain**
   - Search for `localhost:3000` in your codebase.
   - Update all occurrences in metadata, Open Graph, and `next.sitemap.config.js` to your real domain (e.g., `https://yourdomain.com`).

2. **Double-check unique meta descriptions for each page**
   - Open each page’s metadata.
   - Ensure the `description` field is unique and accurately describes the page content.

---

## [Performance]

3. **Compress and resize all images in `/public/images/`**
   - Use an image optimizer (e.g., [Squoosh](https://squoosh.app/)) to reduce file size.
   - Ensure images are no larger than needed for their display size.


## [Accessibility]

6. **Add a skip-to-content link**
   - Add an anchor link at the top of your layout:
     ```tsx
     <a href="#main-content" className="skip-link">Skip to content</a>
     ```
   - Style `.skip-link` to be visible on focus.

7. **Ensure all interactive elements have visible focus styles**
   - In your CSS, ensure buttons, links, and form elements have a visible `:focus` style.

8. **Test navigation with keyboard and screen reader**
   - Tab through your site and ensure all elements are accessible.
   - Use a screen reader (VoiceOver, NVDA, etc.) to check for semantic correctness.

---

## [Code Quality]

9. **Remove or define any unused/missing CSS variables**
   - Search for `var(--` in your CSS.
   - Ensure every variable used is defined in `variables.css` or remove unused ones.

10. **Refactor repeated CSS into shared modules if appropriate**
    - Identify repeated styles (e.g., `.greeting`, `.contentTop`).
    - Move them to a shared CSS module or global stylesheet.

---

## [Deployment]

11. **Set `NEXT_PUBLIC_SITE_URL` and other env variables for production**
    - In Vercel or your `.env.production` file, set:
      ```
      NEXT_PUBLIC_SITE_URL=https://yourdomain.com
      ```

12. **Update `next.sitemap.config.js` with your real site URL**
    - Set `siteUrl: "https://yourdomain.com"` in the config.

13. **Add a custom 404 page (`src/app/not-found.tsx`)**
    - Create `not-found.tsx` in `src/app/` with a user-friendly message and navigation options.

---

## [Analytics & Monitoring]

14. **Integrate analytics and error monitoring if desired**
    - Add Google Analytics, Plausible, or similar in your layout.
    - Set up Sentry or LogRocket for error monitoring.

---

## [PWA/Branding]

15. **Add a favicon and web manifest for better branding and PWA support**
    - Place your favicon in `/public/`.
    - Add a `manifest.json` in `/public/` and link it in your layout’s `<head>`.

---

16. **fix submit on contact form**

**Work through each step, commit your changes, and redeploy to Vercel. Your site will be production-ready and follow best practices!**