# Claude Blog Automation Game Plan

## Executive Summary

Replace your ChatGPT + custom knowledge base workflow with a Claude-powered system that:
1. **Researches online** before drafting (real data, not fabricated stats)
2. **Writes SEO-optimized articles** matching your exact tone, structure, and voice
3. **Auto-links tools** on first mention within articles
4. **Generates complete `.mdx` files** with frontmatter ready to drop into `content/blog/`
5. **Produces consistent, publication-ready content** in one automated flow

---

## Current State vs. Desired State

### Current Flow (ChatGPT)
1. Manual keyword research → ChatGPT custom GPT → Manual review → Manual link insertion → Manual frontmatter creation → Manual file creation

### Desired Flow (Claude Automated)
1. Keyword input → Claude research + writing + linking + frontmatter → Ready-to-publish `.mdx` file

**Time saved per article:** ~2-3 hours of manual work

---

## The Game Plan: 7-Step Process

### Phase 1: Setup & Knowledge Base Transfer (Week 1)

#### Step 1.1: Create a Claude Blog Agent System
- Create a Claude Code skill or standalone script that encapsulates all your blog writing rules
- Embed your 9 knowledge base documents into a structured prompt that Claude can reference
- Include the complete execution flow from your GPT instructions

**Key components to embed:**
- SEO Article Types (all 9 types with their specific rules)
- Tone Guardrails (what to write, what NOT to write)
- Global Article Rules (competitive framing, economic impact, coaching-at-scale messaging)
- Identity document (Sayso's mission, vision, problem statement)
- ICP (who the articles are for)
- Default Article Template (H1 → TLDR → Intro → Main body → Sayso angle → FAQ → CTA)
- Keyword Style Guide (natural placement, no stuffing)
- LLM Writing Guide (language rules, positioning rules, problem description standards)

#### Step 1.2: Create a Web Research Protocol
- Define what types of research Claude should do before writing
  - Competitor tool research (Shilo, MaverickRE, etc.)
  - Industry statistics and benchmarks
  - Recent trends in real estate sales
  - Real-world use cases and scenarios

**Decision:** Should Claude search the web automatically, or should you provide a research brief first?
- **Recommended:** Hybrid. You provide the keyword + article type, Claude does targeted web searches to gather current data before writing.

#### Step 1.3: Build a Tool Link Registry
- Create a JSON or markdown file mapping tools to their URLs
- Include: MaverickRE, Shilo, Shilo.ai, common CRMs, AI call assistants, etc.
- Claude will reference this to auto-link tools on first mention

**Example format:**
```json
{
  "tools": {
    "MaverickRE": "https://maverickcre.com",
    "Shilo": "https://shilo.ai",
    "ZoomInfo": "https://zoominfo.com",
    // ... etc
  }
}
```

---

### Phase 2: Article Generation Workflow (Per Article)

#### Step 2.1: User Input → Confirmation Protocol
**You provide:**
- Primary keyword
- Article type (from the 9 types: Alternatives, Best X, Pain, Appointment Setting, Tool Breakdown, Comparison, AI, Pillar, Data/Benchmark, Training/Coaching)
- Target audience (usually: team leaders, ISAs, agents)
- Any specific data points or angles you want included

**Claude outputs:**
```
Please confirm or correct:
Article Type: [type from your 9 types]
Intent: [buyer intent / awareness level]
Primary Keyword: [keyword]
Structure: Default Article Template
Research focus: [what Claude will search for]
Estimated word count: [2,500-3,000]
```

You review/approve → Claude proceeds with research phase.

#### Step 2.2: Web Research Phase
Claude executes targeted searches for:
- Current competitor pricing and features (if alternatives/comparison article)
- Industry benchmarks and statistics (with sources)
- Real estate market trends (if relevant)
- Best practices and case studies
- Any tool-specific information needed

**Output:** A research summary with sources that Claude references while writing (prevents hallucinated stats)

#### Step 2.3: Writing Phase
Claude writes the article following:
- Your specific article type rules
- Default template structure
- Tone guardrails (operator voice, no hype, no therapy language)
- Global article rules (competitive framing, economic impact, coaching-at-scale messaging)
- Keyword placement (natural, in title, first H2, TLDR)

**Quality gates:**
- 2,500–3,000 words (never under 2,500)
- Real data only (no made-up statistics)
- Natural keyword placement (no stuffing)
- Proper H2/H3 structure
- Sayso angle included (one dedicated section)
- FAQ section (3-5 questions, max 2 sentences each)
- Soft CTA with Kuvaal's calendar link

#### Step 2.4: Auto-Linking Phase
Claude reviews the draft and:
1. Identifies the first mention of each tool in the article
2. Wraps that first mention with a markdown link using your Tool Link Registry
3. Example: First mention of "MaverickRE" becomes `[MaverickRE](https://maverickcre.com)`
4. Leaves subsequent mentions unlinked (natural reading flow)

**Rule:** Only auto-link on first mention. Don't over-link.

#### Step 2.5: Frontmatter Generation
Claude generates complete frontmatter with:
```mdx
---
title: "[Your H1 Title — Include Primary Keyword]"
slug: "[lowercase-hyphens-keyword-first]"
description: "[150-160 chars, keyword + value hook]"
category: "[cold-calling, ai-coaching, lead-conversion, scripts, team-management]"
tags: ["tag1", "tag2", "tag3", "tag4", "tag5"]
author:
  name: "Marcus Rivera"
  role: "Sales Coach"
  avatar: "/logo-youtube.png"
  linkedin: "https://linkedin.com/in/marcusrivera"
coverImage: "/blog/covers/[slug].jpg"
publishedAt: "YYYY-MM-DD"
updatedAt: "YYYY-MM-DD"
readingTime: [X minutes]
featured: false
---
```

**Note:** Cover image must be created separately (1200×630px), but Claude can suggest the image content.

#### Step 2.6: Output Complete .MDX File
Claude outputs a ready-to-publish `.mdx` file containing:
- Frontmatter (complete)
- Article body with proper markdown formatting
- Internal link suggestions (2-3 related articles with suggested placement)
- Meta title (under 60 chars)
- Meta description (under 155 chars)
- Reading time estimate
- Research sources (commented out or in a final section for your reference)

**File naming convention:** `[slug].mdx`
**Ready to:** Drop directly into `content/blog/` and deploy

---

### Phase 3: Implementation Details

#### Architecture Option A: Custom Claude Code Skill (Recommended)
- Create a `/blog-write` skill that wraps the entire workflow
- You invoke: `/blog-write keyword="appointment setting" type="Appointment Setting Article" target="Team Leaders"`
- Claude handles research → writing → linking → frontmatter → output

**Pros:**
- Simple one-command workflow
- Consistent execution
- Easy to refine over time

**Cons:**
- Requires skill development
- Less flexible for custom requests

#### Architecture Option B: Standalone Blog Agent
- Create a dedicated agent prompt that runs as a separate task
- You provide a JSON input file with keyword, type, and context
- Agent runs through all phases and outputs the complete `.mdx` file

**Pros:**
- More flexible for edge cases
- Can handle longer research workflows
- Can store research summaries for your records

**Cons:**
- Slightly more manual setup per article
- Takes a few more minutes per article

#### Architecture Option C: Hybrid CLI Tool
- Build a simple Node.js or Python CLI that calls Claude's API
- Command: `blog-write --keyword "X" --type "Appointment Setting" --output /blog`
- Handles all orchestration, error handling, and file output

**Pros:**
- Most professional workflow
- Fully automated
- Can integrate with CI/CD

**Cons:**
- Requires development work
- Most complex to set up

**Recommendation:** Start with **Option A (Skill)** for immediate value, then expand to Option C if you want full automation.

---

### Phase 4: Tool Link Registry Setup

#### Create `/blog_instruction/Tool-Link-Registry.json`
```json
{
  "tools": {
    "MaverickRE": "https://maverickcre.com",
    "Shilo": "https://shilo.ai",
    "Shilo.ai": "https://shilo.ai",
    "ZoomInfo": "https://zoominfo.com",
    "HubSpot": "https://hubspot.com",
    "Salesforce": "https://salesforce.com",
    "Twilio": "https://twilio.com",
    "Vonage": "https://vonage.com",
    "Five9": "https://five9.com",
    "NICE": "https://nice.com",
    "Genesys": "https://genesys.com",
    "LinkedIn": "https://linkedin.com",
    "Facebook": "https://facebook.com",
    "YouTube": "https://youtube.com",
    "Google Search Console": "https://search.google.com/search-console",
    "Google Analytics": "https://analytics.google.com",
    "SEMrush": "https://semrush.com",
    "Ahrefs": "https://ahrefs.com",
    "Ubersuggest": "https://ubersuggest.com",
    // Add more as needed
  },
  "rules": {
    "link_only_first_mention": true,
    "case_sensitive": false,
    "exclude_internal_links": true
  }
}
```

#### Implementation in Claude
- Claude loads this registry at the start of writing
- When reviewing the draft, Claude:
  1. Finds first mentions of tools (case-insensitive match)
  2. Wraps them in markdown links
  3. Only links the first occurrence

---

### Phase 5: Research Quality Control

#### What Claude Will Search For
- **Competitor tools:** Features, pricing tiers, use cases
- **Industry data:** Real estate benchmarks, cold calling statistics, conversion rate data
- **Recent news:** Updates to competitor products, industry trends
- **Best practices:** What top teams are doing differently
- **Real scenarios:** Actual use cases from forums, blogs, case studies

#### Source Validation
- Claude provides inline citations for all data (e.g., "According to [Source] (2026)...")
- You can verify sources before publishing
- If Claude can't find supporting data, it flags it for you to research manually

#### Handling Uncertain Data
- If a stat seems questionable, Claude says "Industry reports suggest..." instead of claiming certainty
- Claude avoids vague claims like "many" or "most" without data
- Claude prioritizes grounded language over fabricated specificity

---

### Phase 6: SEO Checklist (Built Into Claude)

Claude automatically ensures:
- ✅ H1 title contains primary keyword
- ✅ Primary keyword in TLDR
- ✅ Primary keyword in first H2
- ✅ Keyword used naturally throughout (3-5 times)
- ✅ Related keywords included in body sections
- ✅ Meta description (150-160 chars) includes keyword
- ✅ Slug is lowercase, hyphenated, keyword-first
- ✅ Internal linking suggestions provided (2-3 related articles)
- ✅ FAQ section for long-tail question capture
- ✅ Reading time calculated
- ✅ Cover image dimensions noted (1200×630px)

---

### Phase 7: Publishing Workflow (No Change)

Once Claude outputs the `.mdx` file:
1. **Create cover image** (1200×630px) — you can use existing design or AI image generator
2. **Save cover image** to `/public/blog/covers/[slug].jpg`
3. **Copy `.mdx` file** to `/content/blog/`
4. **Deploy** — Next.js static generation handles the rest automatically
5. **Monitor** — Check Google Search Console for indexing and CTR

---

## Workflow Timeline Per Article

| Phase | Owner | Time |
|-------|-------|------|
| **1. Keyword + Type Input** | You | 5 min |
| **2. Confirmation** | You | 2 min |
| **3. Research + Writing** | Claude | 3-5 min |
| **4. Auto-linking + Frontmatter** | Claude | 1-2 min |
| **5. Review Draft** | You | 10-15 min |
| **6. Cover Image** | You or Designer | 15-30 min |
| **7. File Creation + Deploy** | You | 2 min |
| **Total Per Article** | | **40-60 min** (vs. 2-3 hours currently) |

---

## Success Metrics

### Content Quality
- [ ] Articles rank for target keywords within 4-6 weeks
- [ ] Bounce rate on blog pages < 50%
- [ ] Average reading time > 3 minutes (shows engagement)
- [ ] Internal links clicked (tracked via GA4)

### Production Efficiency
- [ ] Time to publication: < 1 hour per article
- [ ] Weekly output: 2 articles (current target from playbook)
- [ ] Zero hallucinated statistics in published articles
- [ ] 100% of first-mention tools auto-linked correctly

### SEO Performance
- [ ] Articles indexed within 48 hours of deployment
- [ ] Primary keywords in top 20 within 4 weeks
- [ ] CTR on blog results > 3% (good for new content)
- [ ] Featured snippets triggered on 2+ FAQ sections

---

## Risks & Mitigations

| Risk | Likelihood | Mitigation |
|------|------------|-----------|
| Claude researches outdated data | Medium | Always verify sources; use date filters in web search |
| Auto-linking creates unintended links (tool name matches other words) | Low | Use exact match + context review before publishing |
| Article feels too AI-generated | Low | Your tone guardrails + LLM writing guide are strict enough |
| Keyword placement feels forced | Low | Your keyword style guide emphasizes natural placement |
| Competitor tool info is inaccurate | Medium | Claude searches current sources; you verify before publishing |
| Tool registry misses new competitors | Medium | Update registry quarterly; Claude can ask for clarification |

---

## Phase-by-Phase Implementation

### Week 1: Setup
- [ ] Finalize tool link registry
- [ ] Prepare 3 test articles with keywords/types
- [ ] Brief Claude on the complete framework
- [ ] Run 1-2 test articles to refine the process

### Week 2-3: First Article Batch
- [ ] Generate 2 articles using new process
- [ ] Gather feedback on output quality
- [ ] Refine Claude instructions based on learnings
- [ ] Create internal documentation for your team

### Week 4+: Full Automation
- [ ] Target 2 articles per week (per your playbook)
- [ ] Monitor rankings and traffic
- [ ] Update tool registry as new competitors emerge
- [ ] Build FAQ schema implementation (next SEO upgrade)

---

## Next Steps to Approve

1. **Framework preference:** Do you want to use Claude's web search capability to research before writing, or would you prefer to provide a research brief first?

2. **Tool registry:** Should I build out the initial tool link registry, or do you want to provide a list of tools you mention most frequently?

3. **First test article:** What's your first keyword/article type you want me to write? I can generate a complete `.mdx` file as a proof of concept.

4. **Integration method:** Do you want this as a Claude Code skill (simple, one-command workflow), or as a standalone prompt that you can paste?

5. **Cover image strategy:** Should Claude suggest visual concepts for cover images, or should that remain fully manual?

---

## Long-Term Vision

Once this is working:
- **Content repurposing:** Convert articles into LinkedIn carousels, email sequences, or short-form content
- **Content calendar automation:** Pre-plan your SEO strategy, and Claude generates a full month's worth of articles
- **Link strategy automation:** Track which articles should link to which (pillar articles, cluster articles, related posts)
- **Performance feedback loop:** Monitor rankings, refine keywords, and re-optimize underperforming articles
- **FAQ schema implementation:** Convert FAQ sections into structured JSON-LD for featured snippets

---

**This system turns blog writing from a 2-3 hour manual task into a 40-minute automated process while maintaining or improving quality.**
