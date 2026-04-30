# Action items for Andreea / Luke

## SEO — wire IndexNow on every Vercel deploy
- Set a Vercel environment variable: `INDEXNOW_SECRET` = any long random string (used to authorise the endpoint).
- In Vercel project settings → Git → Deploy Hooks: add a webhook that fires after each production deploy. URL:
  `https://nextgentherapy.co.uk/api/indexnow?secret=<INDEXNOW_SECRET>`
  Method: GET. (The endpoint pulls every URL from the sitemap and submits them to Bing + Yandex IndexNow.)
- One-off manual trigger from your laptop:
  `curl -H "Authorization: Bearer $INDEXNOW_SECRET" -X POST https://nextgentherapy.co.uk/api/indexnow -d '{"submitAll":true}'`

## SEO — blog post slug rename
- File: `src/content/blog/understanding.md`
- Issue: slug is just `understanding`, which is a poor SEO target and unclear in URLs (`/blog/understanding`). The post itself is real content (about hidden anxiety / the invisible weight).
- Suggested rename: `understanding-anxiety-hidden-weight` or `hidden-anxiety-women`.
- Action when confirmed:
  1. Rename the file to the new slug.
  2. Add a 301 redirect in `next.config.ts` from `/blog/understanding` to the new URL.
- Do not rename without confirmation — the existing URL may have inbound links or be indexed.
