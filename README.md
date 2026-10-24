# Patwatoli AI — React landing page

The full landing page converted to React with Vite, JavaScript/JSX, reusable components, and React state for interactions. Includes the original logo and CSS-rendered AI artwork. No backend is included.

## Requirements
Node.js 22.12+ (or supported Node.js 24 LTS) and npm.

## Run locally
```bash
npm install
npm run dev
```
Open the local address printed in the terminal. Do not open index.html directly; JSX requires the Vite development server or production build.

## Build for hosting
```bash
npm run build
npm run preview
```
Upload the contents of `dist/` to your static web host. The production build is also included in this ZIP. `node_modules/` is intentionally excluded.

## Edit the page
- `src/components/Header.jsx`: navigation and mobile menu
- `src/components/Hero.jsx`: hero and connected-model graphic
- `src/components/ModelShowcase.jsx`: model cards and selected model spotlight
- `src/components/UseCases.jsx`: interactive prompt examples and copy action
- `src/components/Pricing.jsx`: plans, prices, billing switch and allowances
- `src/components/FAQ.jsx`: FAQs
- `src/components/Footer.jsx`: company and legal links
- `src/data.js`: model examples and sample prompts
- `src/styles.css`: the original responsive design
- `public/assets/logo.png`: original logo

All model switching, example selection, copying, monthly/annual pricing, and mobile menu controls use React events/state. No direct DOM mutation or HTML injection is used.

## Existing app integration
Buttons point to https://patwatoliai.com/chat. This is a landing page, not the AI backend, authentication system, or payment integration. Update links to match your deployment if required. Copying prompts requires HTTPS or localhost and browser clipboard permissions.

## Pricing
Pro: INR 799/month or INR 7,990/year. Enterprise: INR 2,499/month or INR 24,990/year. Free: 10 million tokens/month, based on the supplied screenshot's allowance and features list (the description in that screenshot inconsistently says 1 million). Monthly token allowances stay unchanged with annual billing.

Fonts load from Google Fonts with system fallbacks. Original CSS graphics are included; no external illustration assets are required.
