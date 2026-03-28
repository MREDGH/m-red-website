# M-RED Corporate Website

Corporate website for M Real Estate Development B.V. - healthcare real estate developer.

## Stack

- Next.js 16 (App Router) + TypeScript strict
- TailwindCSS v4
- Static site (no database, no auth)
- Bilingual: English (default) + Dutch

## Structure

- `src/app/` - Next.js app router (layout, page, globals.css)
- `src/components/` - React components (hero, focus, values, approach, portal, contact, etc.)
- `src/lib/` - Utilities (translations, cn helper)
- `public/images/` - Static images (logo, hero background, philosophy image)

## Design System

- Primary: #0A2342 (marine blue)
- Accent: #4B6F44 (sustainable green)
- Background: #F4F7F6 (off-white)
- Heading font: Cormorant Garamond (serif)
- Body font: Open Sans (sans-serif)

## Key Points

- Single page with smooth scroll navigation
- Language toggle persists choice in localStorage
- Cookie banner with GA consent (G-9RZYV3J5WR)
- Client Portal links to DDT tool (env: NEXT_PUBLIC_DDT_URL)
- All interactive components use "use client" directive
- Mobile-first responsive design
