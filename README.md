# N.O.B.S Technologies — Corporate Website

> **Network Operations & Broadband Solutions Technologies**  
> Smart Solutions. Secure Connections.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-nobstechnologies.co.za-brightgreen?style=for-the-badge)](https://nobstechnologies.co.za)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)

---

## Overview

This is a full-stack corporate website built for **N.O.B.S Technologies**, a South African IT infrastructure and managed services company. The site serves as the company's primary digital presence — covering services, products, projects, blog, and client enquiries.

The project was designed and developed end-to-end by [Roseline Dangazela](https://www.linkedin.com/in/roseline-dangazela-95b718324/), a Full Stack Developer and automation specialist based in Pretoria, South Africa. It demonstrates production-grade frontend architecture using the latest React and Next.js ecosystem tools.

**Live URL:** https://www.nobstechnologies.co.za/

---

## Features

- **Multi-page corporate website** with full routing via Next.js App Router
- **Solutions catalog** — 8 service verticals each with dedicated landing pages (CCTV, Access Control, Networking, Wireless Links, Data Centre & Power, VoIP, Structured Cabling, Managed IT Services)
- **Products catalog** — categorised product listings with detail pages
- **Projects portfolio** — client case studies with filterable categories and individual project detail pages
- **Blog** — editorial content with per-article pages and category tagging
- **Contact & enquiry system** — quick enquiry form, WhatsApp deep-link integration, and full contact page
- **Brand showcase** — partner brand carousel (Cisco, MikroTik, Hikvision, Dell, Fortinet, Ubiquiti)
- **Dark/light theme support** via `next-themes`
- **Responsive design** — mobile-first layout, works across all screen sizes
- **Performance-optimised images** using Next.js `<Image>` with lazy loading and priority rendering
- **Accessible UI components** built on Radix UI primitives (Tabs, Tooltip)
- **Toast notifications** via Sonner
- **Type-safe codebase** — 98.4% TypeScript with strict configuration

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.6 (App Router) |
| Language | TypeScript 5.9 |
| Styling | Tailwind CSS 3.4 |
| UI Primitives | Radix UI (Tabs, Tooltip) |
| Icons | Lucide React, React Icons |
| Routing | Next.js App Router + Wouter |
| Theming | next-themes |
| Notifications | Sonner |
| Utilities | clsx, tailwind-merge, class-variance-authority |
| Linting | ESLint 9 with Next.js config |
| Deployment | Vercel |

---

## Project Structure

```
front/
├── app/                    # Next.js App Router pages and layouts
│   ├── page.tsx            # Homepage
│   ├── about/              # About Us page
│   ├── solutions/          # Solutions overview + 8 sub-pages
│   ├── products/           # Products catalog + category pages
│   ├── projects/           # Portfolio + individual project pages
│   ├── blog/               # Blog listing + individual posts
│   ├── contact/            # Contact page
│   ├── privacy-policy/     # Privacy Policy
│   └── terms/              # Terms of Service
│
├── components/             # Reusable UI components
│   ├── layout/             # Navbar, Footer, TopBar
│   ├── home/               # Hero, About, Solutions, Projects, Blog, Contact sections
│   └── ui/                 # Base UI primitives
│
├── contexts/               # React context providers (theme, etc.)
├── data/                   # Static data — solutions, products, projects, blog posts
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions (cn, etc.)
├── public/                 # Static assets — logo, images, favicons
├── types/                  # Shared TypeScript type definitions
│
├── next.config.ts          # Next.js configuration
├── tailwind.config.mjs     # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/RoselineDC/front.git
cd front

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

---

## Deployment

This project is deployed on **Vercel** with zero-configuration CI/CD. Every push to `main` triggers an automatic deployment.

To deploy your own instance:

1. Fork this repository
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — no build settings required
4. Click **Deploy**

---

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Homepage — hero, about, solutions, projects, blog preview, contact |
| `/about` | Company overview, team, values |
| `/solutions` | All 8 service verticals |
| `/solutions/cctv-surveillance` | CCTV & Surveillance detail |
| `/solutions/access-control` | Access Control detail |
| `/solutions/networking` | Networking detail |
| `/solutions/wireless-links` | Wireless Links detail |
| `/solutions/data-centre-power` | Data Centre & Power detail |
| `/solutions/voip-communications` | VoIP & Communications detail |
| `/solutions/structured-cabling` | Structured Cabling detail |
| `/solutions/managed-it-services` | Managed IT Services detail |
| `/products` | Products catalog |
| `/products/cctv` | CCTV cameras |
| `/products/access-control` | Access control systems |
| `/products/networking` | Networking equipment |
| `/products/wireless` | Wireless devices |
| `/products/power` | Power solutions |
| `/products/cabling` | Cabling & accessories |
| `/projects` | Portfolio — all case studies |
| `/blog` | Blog listing |
| `/contact` | Contact form & details |
| `/privacy-policy` | Privacy Policy |
| `/terms` | Terms of Service |

---

## Design System

The site uses a cohesive, professional design language:

- **Primary colour:** `#7ac943` (green accent)
- **Hero sections:** Full-width black / dark backgrounds
- **Content sections:** Alternating white and light-grey (`#f9fafb`)
- **Typography:** Clean sans-serif with clear hierarchy
- **Icons:** Lucide React for consistency throughout
- **Images:** Next.js `<Image>` with responsive `sizes` attributes and quality optimisation

---

## Key Technical Decisions

**Next.js App Router** was chosen over Pages Router to leverage React Server Components, nested layouts, and the improved file-based routing model — aligning with the current direction of the Next.js ecosystem.

**Radix UI** provides accessible, unstyled primitives that are composed with Tailwind CSS, avoiding the style conflicts common with fully-styled component libraries.

**Wouter** is included as a lightweight client-side routing complement where needed, keeping the bundle lean.

**Static data files** in `/data` keep content management simple and co-located with the codebase — suitable for a business site at this scale without requiring a CMS.

---

## About the Developer

**Roseline Dangazela** — Full Stack Developer & Automation Specialist  
📍 Pretoria, South Africa  
🔗 [linkedin.com/in/roselinedangazela](https://linkedin.com/in/roselinedangazela)  
💻 [github.com/RoselineDC](https://github.com/RoselineDC)

BSc Computer Science student (University of the People) · ALX Africa Software Developer alumnus · Member of The Room professional network.

Currently building production systems at **HINC Group Pty Ltd**, spanning procurement automation, full stack development, and operational systems design.

Other notable projects:
- **Automated Tender Scraper & Procurement Assistant Agent** — reduced sourcing time significantly with AI-driven document processing
- **Lumière CNC and Printers E-commerce Platform** — full-stack e-commerce with custom product configurator
- **/ghost** — a SaaS platform for structured client asset and information collection (Next.js, PostgreSQL, Prisma, Clerk, Cloudinary)

---

## License

This project is proprietary. All rights reserved © 2026 N.O.B.S Technologies.

---

*Built with precision. Deployed with confidence.*