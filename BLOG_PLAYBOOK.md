# Sayso Blog Playbook — SEO Content Guide

## How the System Works

Every blog post is a single `.mdx` file dropped into `content/blog/`. That's it.
The moment a file lands there, the system automatically:

- Generates a static HTML page at `/blog/your-slug`
- Creates a unique `<title>`, meta description, Open Graph tags, and Twitter card
- Injects Article + Breadcrumb structured data (JSON-LD) for Google rich results
- Adds the post to the sitemap with proper priority and `lastModified` date
- Pulls it into the blog index, the featured post slot (if marked), category pages, and related posts

No config, no CMS, no rebuilding routes. Just the file.

---

## Anatomy of an MDX File

Every post has two parts: the **frontmatter** (the metadata block between `---`) and the **content** (the markdown body).

```mdx
---
title: "How to Double Your Appointment Set Rate in 30 Days"
slug: "how-to-double-appointment-set-rate"
description: "Learn the proven strategies top-performing agents use to convert cold calls into booked appointments — with step-by-step playbooks."
category: "cold-calling"
tags: ["appointment setting", "cold calling", "conversion rate", "scripts"]
author:
  name: "Marcus Rivera"
  role: "Sales Coach"
  avatar: "/logo-youtube.png"
  linkedin: "https://linkedin.com/in/marcusrivera"
coverImage: "/blog/covers/double-appointment-set-rate.jpg"
publishedAt: "2026-02-10"
updatedAt: "2026-02-10"
readingTime: 7
featured: false
---

## Your H2 Heading Here

Article content in standard markdown...
```

---

## Frontmatter Field Reference

| Field | Required | SEO Role | Notes |
|---|---|---|---|
| `title` | Yes | `<title>` tag, OG title, Article schema headline | Primary keyword should appear near the front |
| `slug` | Yes | The URL path: `/blog/your-slug` | Lowercase, hyphens only, include primary keyword |
| `description` | Yes | Meta description, OG description | 150–160 chars. Include keyword + a value hook |
| `category` | Yes | Category page grouping, internal linking | Use existing slugs: `cold-calling`, `ai-coaching`, `lead-conversion` |
| `tags` | Yes | Used for search filtering and related posts | 3–6 tags, lowercase with spaces |
| `author.name` | Yes | Author card, Article schema, EEAT signal | Use consistent names across posts |
| `author.role` | Yes | Displayed on author card | e.g. "Sales Coach", "Sayso Team" |
| `author.avatar` | Yes | Author card image | Path to image in `/public` |
| `author.linkedin` | No | Links from author card — boosts credibility | Real LinkedIn URL preferred |
| `coverImage` | Yes | OG image, Twitter card, post card thumbnail | Must be 1200×630px. Unique per post. Path from `/public` |
| `publishedAt` | Yes | Article schema `datePublished`, sitemap | Format: `YYYY-MM-DD` |
| `updatedAt` | Yes | Article schema `dateModified`, sitemap freshness | Update this when you refresh content |
| `readingTime` | Yes | Displayed in post header | Whole number in minutes |
| `featured` | Yes | Pins post to the hero slot on the blog index | Only one post should have `featured: true` |

---

## Cover Image Specs

- **Dimensions:** 1200 × 630px (the standard OG/Twitter card size)
- **Format:** JPG or PNG
- **Location:** `/public/blog/covers/your-image.jpg`
- **Naming:** Match the slug — e.g. slug `cold-calling-scripts-2026` → `cold-calling-scripts-2026.jpg`
- **Why it matters:** This is the image that shows up when someone shares the article on LinkedIn, Slack, iMessage, or Twitter. Every post should have a unique image or shares will all look identical.

---

## How to Write an SEO-Optimized Article

### The structure Google rewards

**1. H1 (your title) — contains the primary keyword**
The `title` frontmatter field becomes the H1. Put your target keyword near the front.

- Good: `"Cold Calling Scripts for Real Estate Teams (2026 Guide)"`
- Weak: `"Our Tips for Better Calls"`

**2. First 100 words — use the keyword naturally**
Google weights early keyword placement. The opening paragraph should name what the article is about immediately.

**3. H2s are topic signals, not clever headlines**
Every `## Heading` in your markdown is read by Google as a subtopic. Use them to cover related keywords and questions people search for.

- Good H2s: `## Why Cold Call Scripts Fail`, `## The 5-Step Appointment Setting Framework`, `## How to Handle Objections on Cold Calls`
- Weak H2s: `## Let's Dive In`, `## The Secret`, `## Wrapping Up`

**4. Target length: 1,500–2,500 words**
For competitive sales/real estate keywords, thin articles don't rank. Google's Helpful Content system specifically targets short AI-generated content that doesn't add value. Longer, more detailed articles outperform.

**5. Include real numbers and specifics**
"Teams using real-time AI coaching see a 38% improvement in appointment set rates" beats "AI coaching helps teams improve." Even if you're citing a published industry study, specifics signal credibility.

**6. End with a FAQ section**
This is the highest-leverage SEO move available to you right now. A FAQ section at the bottom of each article:
- Captures long-tail question queries (people search "how do I increase my appointment set rate" in full sentences)
- Can trigger Google featured snippets — the answer box that appears above all other results
- Feeds future FAQ JSON-LD schema (a code upgrade, not needed now)

Format it like this at the bottom of every article:

```markdown
## Frequently Asked Questions

### What is a good appointment set rate for cold calling?
A strong appointment set rate for real estate cold calling is 5–8%. Most teams start at 2–3%...

### How long does it take to improve cold call conversion rates?
Most teams see measurable improvement within 30 days when using structured scripts and real-time coaching...

### What's the difference between a cold call script and a cold call framework?
A script is word-for-word; a framework gives agents the structure to adapt in real time...
```

---

## GPT Brief Template

When generating a new article with your custom GPT, use this structure:

```
Write a 2,000-word blog article for Sayso, an AI real-time sales coaching platform for real estate teams.

Primary keyword: [YOUR KEYWORD]
Target audience: Real estate team leaders, ISAs, and sales managers
Tone: Confident, practical, and direct — like advice from a top sales coach, not a marketing blog

Structure requirements:
- H1: Include the primary keyword near the front
- Opening paragraph: Name the problem and the primary keyword within the first 100 words
- H2 headings: Use related keywords and searcher questions as headings (not clever titles)
- Include at least one section with a numbered or bulleted step-by-step framework
- Include real-sounding statistics or industry data points to support claims
- Mid-article: One natural reference to how Sayso's AI coaching solves this problem
- End with a FAQ section (5–7 questions) using long-tail question variations of the keyword
- Closing paragraph: One CTA encouraging the reader to try Sayso

Frontmatter to generate (I'll copy this into the .mdx file):
- title
- slug (lowercase, hyphens, keyword-first)
- description (150–160 chars, includes keyword)
- category (one of: cold-calling, ai-coaching, lead-conversion, scripts, team-management)
- tags (3–5 relevant tags)
- readingTime (estimate in minutes)
```

---

## Categories

Keep posts organized under these category slugs. New categories can be added, but try to stay within these until each has 5+ posts (thin categories don't help SEO):

| Slug | Display Name | Topic |
|---|---|---|
| `cold-calling` | Cold Calling | Scripts, objection handling, call structure |
| `ai-coaching` | AI Coaching | Real-time coaching, Sayso features, AI in sales |
| `lead-conversion` | Lead Conversion | Follow-up, pipeline, conversion rate optimization |
| `scripts` | Scripts & Playbooks | Downloadable script frameworks, talk tracks |
| `team-management` | Team Management | Hiring, training, performance, KPIs |

---

## Publishing Workflow

1. **Identify the keyword** — use Google Search, Google Search Console, or a tool like Ahrefs/Ubersuggest to find what your audience actually searches for
2. **Run the GPT brief** — paste the template above, fill in the keyword and any context
3. **Review and edit** — make sure it reads like a real expert wrote it, not a machine. Add any Sayso-specific details the GPT won't know
4. **Create the cover image** — 1200×630px, save to `/public/blog/covers/`
5. **Create the `.mdx` file** — copy the frontmatter template, fill in all fields, paste the article body
6. **Drop it in `content/blog/`** — the system handles everything else
7. **Deploy** — the new post, sitemap entry, category page, and all metadata are live

---

## SEO Game Plan — Building Authority Over Time

Google doesn't reward new sites overnight. The goal is to build a content library that ranks for a cluster of related keywords, creating a compounding traffic effect.

### Phase 1 — Foundation (First 20 articles)
Focus on your highest-intent keywords. These are terms people search when they're close to buying or actively trying to solve a problem.

Target topics:
- Cold calling scripts for real estate (several variations — city-specific, role-specific)
- Appointment setting strategies
- How to handle objections on real estate calls
- Real estate ISA training and performance
- AI coaching tools for sales teams
- Lead conversion strategies for real estate

**Cadence:** 2 articles per week. Consistency matters more than volume.

### Phase 2 — Authority Building (Articles 21–50)
Expand into broader industry topics that attract links and shares. These don't always convert directly but build domain authority.

Target topics:
- Real estate market trends and how teams adapt
- Cold calling statistics and benchmarks
- Sales team culture and motivation
- Comparisons: AI coaching vs traditional training
- Case studies (once you have customer stories)

**Cadence:** 1–2 articles per week.

### Phase 3 — Pillar Pages (Ongoing)
One long-form "pillar" article per category (3,000–5,000 words) that covers the topic comprehensively. All shorter articles in that category link back to the pillar. The pillar links out to all cluster articles.

Example: `"The Complete Guide to Cold Calling for Real Estate Teams"` becomes the pillar for the `cold-calling` category, with all cold calling articles linking to it.

---

## Content Freshness

Google rewards fresh content. When an article is getting impressions but not clicks, or when industry data changes:

1. Update the article with new information, statistics, or sections
2. Bump the `updatedAt` date in the frontmatter to today's date
3. Redeploy

This signals to Google that the content is actively maintained and re-triggers crawling.

---

## What Makes Google Rank an Article

In order of impact for your use case:

1. **Backlinks** — other sites linking to your articles. This is the #1 factor and the hardest to control. Focus on creating articles worth sharing.
2. **Content quality and depth** — does the article fully answer the query? Is it more useful than the current top results?
3. **Keyword targeting** — is the primary keyword in the title, URL, first paragraph, and H2s?
4. **Page speed** — your Next.js SSG setup already handles this. Pages are pre-rendered and fast.
5. **Structured data** — Article and Breadcrumb JSON-LD are already in place. FAQ schema is the next upgrade.
6. **Internal linking** — the first-mention linking strategy you have is good. Category pages, related posts, and pillar articles amplify this.
7. **Click-through rate** — if your title and description are compelling, more people click your result, which signals quality to Google.
