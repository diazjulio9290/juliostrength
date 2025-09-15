# JulioStrength Boilerplate (merge into your Next.js project)

This folder provides a clean structure for images, components, and content (testimonials, before/after, etc.).

## How to use
1. **Download the ZIP** and extract it.
2. Copy its **contents** into your existing Next.js project root (e.g., `~/juliostrength/`), allowing it to create/merge folders:
   - `src/components` (new)
   - `src/data` (new)
   - `src/app/page.tsx` (will replace your current page with the componentized version)
   - `public/images/...` (new folders for your assets)

3. Start the dev server:
   ```bash
   npm run dev
   ```

4. Replace placeholder text/data in:
   - `src/data/coach.ts`
   - `src/data/plans.ts`
   - `src/data/testimonials.ts`
   - `src/data/transformations.ts`
   - `src/data/faqs.ts`

5. Add images:
   - Hero image: `public/images/coach/hero.jpg`
   - Before/after pairs in: `public/images/clients/before-after/` (update file names in `transformations.ts`)

6. Optional: wire services later
   - Contact form endpoint (Formspree) in `src/components/Contact.tsx` (`action` attribute)
   - Stripe Payment Links in `src/data/plans.ts` (`link` field)

Enjoy!
