# Step-by-Step Guide to Finalize Your Next.js Website

## [SEO]

1. **Replace all `localhost:3000` URLs in metadata and sitemap with your production domain**
   - [ ] Search for `localhost:3000` in your codebase.
   - [ ] Update all occurrences in metadata, Open Graph, and `next.sitemap.config.js` to your real domain (e.g., `https://yourdomain.com`).

## [Performance]

3. **Compress and resize all images in `/public/images/`**
   - [ ] Use an image optimizer (e.g., [Squoosh](https://squoosh.app/)) to reduce file size.
   - [ ] Ensure images are no larger than needed for their display size.


## [Deployment]

5. **Set `NEXT_PUBLIC_SITE_URL` and other env variables for production**
    - [ ] In Vercel or your `.env.production` file, set:
      ```
      NEXT_PUBLIC_SITE_URL=https://yourdomain.com
      ```

6. **Update `next.sitemap.config.js` with your real site URL**
    - [ ] Set `siteUrl: "https://yourdomain.com"` in the config.

7. **Add a custom 404 page (`src/app/not-found.tsx`)**
    - [ ] Create `not-found.tsx` in `src/app/` with a user-friendly message and navigation options.

8. **Integrate analytics and error monitoring**
    - [ ] Change Google Analytics to use your actual domain.
    - [ ] Set up Sentry or LogRocket for error monitoring.

9. **Verify contact form works in production**
    - [ ] Test form submission and confirm email delivery via Resend.
    - [ ] (Optional) Verify your sender domain with Resend for best deliverability.

10. **Add privacy policy and cookie consent if needed**
    - [ ] Add legal pages if you collect user data or use analytics.

**Work through each step, commit your changes, and redeploy to Vercel. Your site will be production-ready and follow best practices!**