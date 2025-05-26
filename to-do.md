# Step-by-Step Guide to Finalize Your Next.js Website

---

## [SEO]

1. **Replace all `localhost:3000` URLs in metadata and sitemap with your production domain**
   - Search for `localhost:3000` in your codebase.
   - Update all occurrences in metadata, Open Graph, and `next.sitemap.config.js` to your real domain (e.g., `https://yourdomain.com`).


## [Performance]

3. **Compress and resize all images in `/public/images/`**
   - Use an image optimizer (e.g., [Squoosh](https://squoosh.app/)) to reduce file size.
   - Ensure images are no larger than needed for their display size.




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


14. **Integrate analytics and error monitoring if desired**
    - change google analitcs to actual domain
    - Set up Sentry or LogRocket for error monitoring.


16. **fix submit on contact form**

**Work through each step, commit your changes, and redeploy to Vercel. Your site will be production-ready and follow best practices!**