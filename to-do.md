# Step-by-Step Guide to Finalize Your Next.js Website

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


8. **Integrate analytics and error monitoring**
    - [ ] Change Google Analytics to use your actual domain.
    - [ ] Set up Sentry or LogRocket for error monitoring.

9. **Verify contact form works in production**
    - [ ] (Optional) Verify your sender domain with Resend for best deliverability.

10. **Enhance security with Content Security Policy (CSP)**
    - [ ] Refactor code to eliminate all inline scripts and event handlers.
    - [ ] Implement a nonce-based Content Security Policy for maximum XSS protection and Lighthouse compliance.
        - This requires a custom server or advanced middleware to generate and inject nonces.
        - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_scripts


**Work through each step, commit your changes, and redeploy to Vercel. Your site will be production-ready and follow best practices!**