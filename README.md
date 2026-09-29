# Greeze Monkey Garage — Commercial Web Platform

[![React](https://img.shields.io/badge/React-19.0.0-blue?logo=react&style=flat-square)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript&style=flat-square)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?logo=vite&style=flat-square)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwindcss&style=flat-square)](https://tailwindcss.com/)
[![Google Rating](https://img.shields.io/badge/Google%20Rating-4.9%20%E2%98%85%20(687%20Reviews)-F4B400?logo=google-maps&style=flat-square)](https://www.google.com/maps/search/?api=1&query=Greeze+Monkey+Garage+Electronic+City)

Production-ready commercial web application for **Greeze Monkey Garage**, an independent multi-brand automotive and motorcycle workshop in Neeladri Nagar, Electronic City, Bengaluru.

The platform is designed around **Radical Mechanical Transparency**, featuring upfront itemized WhatsApp estimates, old vs. new parts photo verification, interactive booking funnels, live workshop proof-of-work protocols, and Schema.org local business structured data.

---

## 🏎️ Business & Location Details

- **Business Name**: Greeze Monkey Garage
- **Tagline**: Transparent vehicle service. No guesswork.
- **Address**: No: 3, Sri Sai Complex, 1, Hulimangala Main Rd, opposite Sai Baba Temple, Neeladri Nagar, Shikaripalya, Electronic City, Bengaluru, Hulimangala, Karnataka 560105
- **Phone**: `082483 78737` (`+91 82483 78737`)
- **WhatsApp**: `+91 82483 78737`
- **Coordinates**: `12.8362192, 77.645773`
- **Google Rating**: `4.9 / 5.0` (687 verified customer reviews)
- **Workshop Hours**: Monday – Saturday: `9:00 AM – 8:00 PM` | Sunday: On-call confirmation

---

## 🎨 Visual System & Design Philosophy

The website utilizes a **Warm Premium Automotive** visual language — balancing independent engineering credibility, editorial photography, and local South Bengaluru business accessibility.

### Semantic Color Tokens

| Token | Hex Code | Usage Role |
| :--- | :--- | :--- |
| **Primary Background** | `#F7F5F0` | Warm cream base (70% dominant ratio) |
| **Card / Surface** | `#FFFFFF` | High-contrast component containers and inputs |
| **Primary Typography** | `#17191A` | Deep charcoal for headlines, body copy, and navigation |
| **Dark Containers** | `#202426` | Technical showcase panels, dark proof-of-work cards, and footer |
| **Primary Brand Accent** | `#D97732` | Warm amber-orange for primary CTAs, active pills, and focus states |
| **Secondary Accent** | `#F0B27A` | Soft warm amber for badges, highlights, and status tags |
| **Muted Green Accent** | `#66705F` | Workshop quality badges, certifications, and secondary indicators |
| **Muted Copy** | `#6B6D69` | Secondary descriptions, timestamps, and subtitles |
| **Border / Divider** | `#DDD9D0` | Subtle warm grey architectural borders and table dividers |

---

## 🛠️ Tech Stack

- **Core Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 6](https://vitejs.dev/) with Fast HMR
- **Styling**: [TailwindCSS 3.4](https://tailwindcss.com/) with custom typography and color extensions
- **Routing**: [React Router v7](https://reactrouter.com/) (Browser-based SPA with dynamic breadcrumb trails)
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO & Schema**: Custom Schema.org `AutoRepair` JSON-LD generator with dynamic OpenGraph meta tags

---

## 📂 Project Architecture

```
Garage-website/
├── public/                     # Static root files & favicon
├── src/
│   ├── assets/                 # High-resolution optimized brand & workshop assets
│   │   ├── logo.png            # Cropped modern brand mark (emblem + typography)
│   │   ├── mechanic.png        # Lead master technician hero portrait
│   │   ├── workshop.png        # 4-Ton electro-hydraulic lift bays & workshop floor
│   │   ├── image.png           # Technician & customer diagnostics consultation
│   │   └── image copy.png      # Disc rotor, caliper & old vs new parts audit
│   ├── components/
│   │   ├── booking/            # Multi-step booking wizard (BookingForm.tsx)
│   │   ├── common/             # Button, SEO, SectionHeader, Breadcrumbs, ScrollToTop
│   │   ├── gallery/            # GalleryLightbox, BeforeAfterSlider, FilterPills
│   │   ├── home/               # Hero, TrustStrip, ServicesSection, ProofOfWork,
│   │   │                       # WhyTrustUs, WorkshopGalleryPreview, GoogleReviews,
│   │   │                       # BreakdownCTA, LocationSection, FAQSection, FinalCTA
│   │   └── layout/             # Header (navigation + live WhatsApp status),
│   │                           # Footer (Google rating + maps), MobileActionBar
│   ├── config/
│   │   └── business.ts         # Single Source of Truth: Phone, Address, Coordinates, WhatsApp
│   ├── data/
│   │   ├── gallery.ts          # Structured gallery catalog with before/after comparisons
│   │   ├── reviews.ts          # Real verified customer reviews from Google Maps
│   │   └── services.ts         # 5 primary services, sub-services, workflows, and FAQs
│   ├── layouts/
│   │   └── RootLayout.tsx      # Persistent layout wrapper with global lightbox & scroll restoration
│   ├── pages/                  # Route components (HomePage, CarService, BikeService, etc.)
│   ├── utils/
│   │   └── analytics.ts        # Client analytics tracking (calls, WhatsApp intents, booking funnel)
│   ├── App.tsx                 # Client routing definitions
│   ├── index.css               # Base Tailwind layers, Google Fonts imports & root theme tokens
│   └── main.tsx                # React DOM entry point
├── index.html                  # HTML5 boilerplate with meta tags and preconnect hints
├── package.json                # Project dependencies and npm scripts
├── tailwind.config.js          # Tailwind theme configurations
├── tsconfig.json               # TypeScript compiler options
└── vite.config.ts              # Vite configuration
```

---

## 🚦 Website Routes & Navigation

| Route Path | Page Component | Description |
| :--- | :--- | :--- |
| `/` | `HomePage.tsx` | Main high-conversion landing page with proof-of-work protocol |
| `/services` | `ServicesPage.tsx` | Full diagnostic bay service directory with price estimations |
| `/services/car-service` | `CarServicePage.tsx` | Multi-brand car maintenance, synthetic oil flush, and brake servicing |
| `/services/2-wheeler` | `BikeServicePage.tsx` | 2-wheeler periodic service, chain tensioning, and fork seal repairs |
| `/services/denting-painting` | `DentingPaintingPage.tsx` | Dust-free paint booth, panel beating, and computerized color matching |
| `/services/breakdown-assistance`| `BreakdownAssistancePage.tsx`| Roadside jump-starts, flat tire support, and towing triage in Electronic City |
| `/services/vehicle-inspection` | `VehicleInspectionPage.tsx` | 40+ point pre-purchase checks and digital OBD-II diagnostic scans |
| `/booking` | `BookingPage.tsx` | 6-step interactive vehicle service intake wizard |
| `/about` | `AboutPage.tsx` | Workshop story, 4.9★ Google rating, and equipment credentials |
| `/reviews` | `ReviewsPage.tsx` | 687 verified customer reviews filterable by vehicle category |
| `/gallery` | `GalleryPage.tsx` | Filterable workshop photos with full-screen lightbox |
| `/contact` | `ContactPage.tsx` | Interactive Google Map embed, direct phone dialer, and GPS directions |
| `/faq` | `FAQPage.tsx` | Searchable accordion covering pricing, spare parts, and warranty |
| `/privacy` | `PrivacyPolicyPage.tsx` | Customer data privacy notice and WhatsApp communication policy |

---

## ⚙️ Configuration (`src/config/business.ts`)

All business information is maintained in a single configuration file:

```typescript
import { BUSINESS_CONFIG } from './src/config/business';

// Access phone numbers
BUSINESS_CONFIG.contact.phoneDisplay; // "082483 78737"
BUSINESS_CONFIG.getTelUrl();           // "tel:+918248378737"

// Generate contextual WhatsApp links
BUSINESS_CONFIG.getWhatsAppUrl('booking');
BUSINESS_CONFIG.getWhatsAppUrl('breakdown');
BUSINESS_CONFIG.getWhatsAppUrl('estimate', 'Custom estimate note');

// Get GPS navigation directions
BUSINESS_CONFIG.getDirectionsUrl();
```

---

## 📈 SEO & Structured Data

- **Schema.org AutoRepair JSON-LD**: Injected on all pages via `SEO.tsx` with business coordinates (`12.8362192, 77.645773`), price range, postal address, and aggregate ratings (`4.9★ / 687 reviews`).
- **Dynamic Meta Tags**: Page-specific OpenGraph tags, Twitter cards, canonical links, and viewport settings for high search engine indexing.
- **Local Citations**: Targeted keywords for Electronic City Phase 1 & 2, Neeladri Nagar, Hulimangala, Shikaripalya, and Bettadasanapura.

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js `18.x` or higher
- npm `9.x` or higher

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   cd Garage-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## 🚀 Deployment Instructions

This project builds into standard static assets (`dist/`) and can be hosted on any static hosting provider.

### Vercel / Netlify / Cloudflare Pages
Since this is a Single Page Application (SPA) with client-side routing, ensure all requests route to `index.html`.

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **SPA Rewrites**:
  - **Vercel (`vercel.json`)**:
    ```json
    {
      "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
    }
    ```
  - **Netlify (`_redirects` in `public/`)**:
    ```
    /*    /index.html   200
    ```

---

## 🛡️ License & Commercial Ownership

Commercial sales and demonstration website built for **Greeze Monkey Garage**, Electronic City, Bengaluru. All rights reserved.
