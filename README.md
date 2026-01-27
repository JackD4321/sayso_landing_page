# Sayso Landing Page

A high-performance, SEO-first marketing website built with Next.js 14+ App Router, designed for programmatic landing page generation and content marketing.

## 🎯 What We're Building

An SSR/SSG marketing site that prioritizes:
- **SEO Performance**: Server-side rendering, optimized meta tags, structured data
- **Dynamic Landing Pages**: Programmatically generated pages via `[slug]` routes
- **Content Marketing**: MDX-powered blog and articles
- **Brand Consistency**: Centralized design system with Tailwind
- **Developer Experience**: TypeScript, component primitives, clear architecture

## 🛠 Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design tokens
- **Content**: [MDX](https://mdxjs.com/) (planned for blog/articles)
- **Fonts**: `next/font` for Manrope, system stack for Helvetica
- **Deployment**: [Vercel](https://vercel.com/)

## 📁 Folder Structure

```
sayso_landing_page/
├── app/
│   ├── (marketing)/          # Marketing route group (shared layout)
│   │   └── ...               # Static marketing pages (about, pricing, etc.)
│   ├── landing/
│   │   └── [slug]/           # Dynamic landing pages (/landing/*)
│   │       └── page.tsx      # [Future] Template for programmatic pages
│   ├── layout.tsx            # Root layout (fonts, metadata, analytics)
│   ├── page.tsx              # Homepage
│   └── globals.css           # Global styles, Tailwind directives
├── components/
│   ├── ui/                   # Primitive components (Button, Card, Badge)
│   ├── sections/             # Page sections (Hero, Features, CTA, Testimonials)
│   └── layout/               # Layout components (Header, Footer, Nav)
├── content/
│   └── blog/                 # MDX blog posts and articles
│       └── *.mdx             # [Future] SEO content
├── lib/
│   └── seo/                  # SEO utilities (metadata, structured data, OG)
├── docs/
│   └── brand.md              # **Brand guidelines** (fonts, colors, usage rules)
├── styles/
│   └── ...                   # [Optional] Additional stylesheets if needed
├── public/                   # Static assets (images, icons, fonts)
├── tailwind.config.ts        # Tailwind configuration (design tokens)
├── postcss.config.js         # PostCSS configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies and scripts
```

### Folder Purposes

- **`app/(marketing)/`**: Static marketing pages that share a common layout (e.g., `/about`, `/pricing`, `/contact`)
- **`app/landing/[slug]/`**: Dynamic landing pages for programmatic SEO (e.g., `/landing/best-tools-for-x`)
- **`components/ui/`**: Reusable primitive components (buttons, inputs, cards) - the building blocks
- **`components/sections/`**: Composed sections used across pages (hero blocks, feature grids, testimonials)
- **`components/layout/`**: Site-wide layout components (header, footer, navigation)
- **`content/blog/`**: MDX files for blog posts and SEO articles
- **`lib/seo/`**: SEO helper functions (generate metadata, structured data, sitemaps)
- **`docs/`**: Internal documentation (brand guidelines, development notes)

## 🎨 Brand Guidelines

**Complete brand documentation is in [`docs/brand.md`](./docs/brand.md)**

### Quick Reference

**Fonts:**
- Hero: Manrope Bold (30px)
- Headings: Helvetica Bold (18px)
- Body: Helvetica Regular (16px)
- Small: Helvetica Regular (12px)

**Colors:**
- Background: `#F4F4F5`
- Accent Background: `#D7DEE1`
- Primary: `#1D4871`
- CTA: `#2367EE`
- Accent: `#FFDE59` (use sparingly!)

## 🚀 Development

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   ```
   http://localhost:3000
   ```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

## 📋 Development Phases

### ✅ Phase 1: Foundation & Structure (COMPLETE)
- [x] Create brand guidelines documentation
- [x] Set up folder structure
- [x] Configure Tailwind with design tokens
- [x] Document architecture and next steps

### Phase 2: Component Primitives (NEXT)
- [ ] Create UI primitives in `components/ui/`
  - [ ] Button (primary, secondary, ghost variants)
  - [ ] Card (default, elevated)
  - [ ] Badge
  - [ ] Input components (if needed for forms)
- [ ] Create layout components in `components/layout/`
  - [ ] Header with navigation
  - [ ] Footer
- [ ] Configure fonts in root layout (`app/layout.tsx`)
- [ ] Test component variants against brand guidelines

### Phase 3: Section Components
- [ ] Build reusable sections in `components/sections/`
  - [ ] Hero (multiple variants)
  - [ ] Feature grid
  - [ ] Testimonials
  - [ ] CTA blocks
  - [ ] Stats/metrics
- [ ] Ensure sections are composable and configurable

### Phase 4: Landing Pages
- [ ] Build homepage (`app/page.tsx`)
- [ ] Create dynamic landing page template (`app/landing/[slug]/page.tsx`)
- [ ] Implement data fetching for programmatic pages
- [ ] Set up page-level SEO metadata

### Phase 5: Content & SEO
- [ ] Configure MDX for blog posts
- [ ] Build SEO utilities (`lib/seo/`)
  - [ ] Metadata generation
  - [ ] Open Graph images
  - [ ] Structured data (JSON-LD)
  - [ ] Sitemap generation
- [ ] Create blog post templates
- [ ] Write initial SEO content

### Phase 6: Production Ready
- [ ] Add analytics (Vercel Analytics, Google Analytics)
- [ ] Performance optimization (images, fonts, bundle size)
- [ ] Accessibility audit
- [ ] SEO audit
- [ ] Deploy to Vercel

## 📝 Contributing Guidelines

1. **Follow brand guidelines**: All UI must adhere to `docs/brand.md`
2. **Use Tailwind tokens**: No arbitrary values - use defined tokens
3. **TypeScript strict mode**: No `any` types
4. **Component composition**: Build small, reusable pieces
5. **SEO first**: Every page should have proper metadata

## 🔗 Useful Links

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Vercel Deployment Docs](https://vercel.com/docs)

---

**Current Phase**: Phase 1 (Foundation) ✅  
**Next Steps**: Begin Phase 2 - Build component primitives

---

**Last Updated**: January 23, 2026
