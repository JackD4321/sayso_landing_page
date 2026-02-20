# V4 Landing Page — Style Reference

**Route:** `/v4` | **Entry:** `app/v4/page.tsx`
**Components:** `components/landing-v4/`

---

## Page Sections (in order)

| Component | Purpose |
|---|---|
| `SaysoNavbarV4` | Top nav with demo CTA |
| `HeroWithVideoV4` | Headline + product demo + social proof logos |
| `PainPointPanelV4` | "Without SaySo" comic panels |
| `TransformationSectionV4` | "With SaySo, You're Unstoppable" dark section |
| `ThreeStepsSectionV4` | 3-step how-it-works |
| `FooterV4` | Footer |

All sections are wrapped by `DemoCalendarProvider` — a context that controls the demo booking modal and onboarding flow.

---

## Visual Identity

**Style:** Comic-book B2B — bold outlines, slight tilts, sound-effect badges, halftone texture.

### Colors
| Token | Hex | Use |
|---|---|---|
| Navy | `#1D4871` | Primary text, borders, dark section bg |
| CTA Blue | `#2367EE` | Buttons, links, icons |
| Yellow | `#FFDE59` | Accent badges, CTA on dark bg |
| Light bg | `#F8F8FA` / `white` | Section backgrounds |

### Typography
- **Headlines:** `font-comic` (comic-style font class)
- **Body / Step titles:** `Arial, Helvetica, sans-serif`
- Headline sizes: `text-5xl` → `text-8xl` (hero), `text-3xl` → `text-5xl` (sections)

### Signature CSS Classes
| Class | Effect |
|---|---|
| `v2-comic-border` | Bold navy border |
| `v2-comic-shadow` | Hard offset shadow |
| `v2-tilt-left / right` | Subtle rotation |
| `v2-halftone` | Halftone dot texture |
| `v4-halftone-dark` | Dark halftone (navy sections) |
| `v4-panel-reveal / hidden` | Scroll-triggered panel animation |
| `v4-hero-glow` | Blue glow on hero CTA |
| `v4-hero-float` | Float animation on superhero image |

### Mobile Pattern
Multi-panel sections (PainPoint, ThreeSteps) collapse into a **carousel** on mobile (`md:hidden`), showing one item at a time with dot pagination.

---

**Last updated:** February 2026
