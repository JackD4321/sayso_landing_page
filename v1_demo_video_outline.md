# Say So — V1 Demo Video Outline
## Animated Web Video (PoRelay-Style Scene Player)

**Format:** React + Framer Motion sequential scene player (same architecture as PoRelay demo)
**Target Duration:** ~60–70 seconds
**Aspect Ratio:** 16:9 (1920×1080)
**Style:** Clean, modern B2B SaaS — white backgrounds, Say So blue (#2367EE) accents, yellow (#FFDE59) highlights
**No voiceover, no actors** — all text + animation + UI mockups

---

## Scene Breakdown

### Scene 0 — White Screen (3s)
Clean fade-in. Sets the stage.

---

### Scene 1 — The Problem: Freezing on Calls (5s)
**On Screen:**
"You're mid-call. They say something unexpected."
"And you freeze."

**Animation:**
- Text appears word-by-word (HighlightText style)
- "freeze" highlighted in red
- Phone icon with incoming call indicator, ringing animation
- Subtle tension — icon pulses, then stops

**Feel:** Instant recognition. "That's me."

---

### Scene 2 — The Consequences (5.5s)
**On Screen:**
"Every frozen moment costs you"

**Animation:**
- 4 consequence cards fly in from alternating sides (same pattern as PoRelay Problem2):
  1. "Lost Appointments"
  2. "Awkward Silences"
  3. "Prospects Hang Up"
  4. "Missed Revenue"
- Cards have red left-border accent
- Staggered entrance, 400ms apart

**Feel:** Pain amplification. Stakes are real.

---

### Scene 3 — The Dream (4s)
**On Screen:**
"What if you always knew exactly what to say?"

**Animation:**
- Smooth text entrance, word-by-word
- "exactly what to say" highlighted in Say So blue
- Background subtly shifts from neutral to a light blue warmth

**Feel:** Hope. Curiosity. "Go on…"

---

### Scene 4 — The Reveal (3.5s)
**On Screen:**
"Meet Say So"
_"Real-time guidance — during the call."_

**Animation:**
- Say So logo appears with a subtle scale-up + glow (spring animation)
- Tagline fades in 0.8s after logo
- Brief energy burst around logo (radial gradient flash)

**Feel:** Clarity. "Oh, that's what this does."

---

### Scene 5 — Feature Carousel (6s)
**On Screen:**
Rotating phrases (1.8s each, same as PoRelay carousel):
1. "Listens to your conversation"
2. "Detects key signals in real time"
3. "Shows you what to say next"

**Animation:**
- Each phrase slides up and fades, replaced by the next
- Small icon next to each: ear/waveform, radar/signal, chat bubble

**Feel:** Quick feature understanding without overwhelm.

---

### Scene 6 — Live UI: Starting a Session (5s)
**On Screen:**
Mockup of the Coach Window UI (from actual product):
- Dark rounded card
- "Start Sayso" toggle flips ON
- "Select Prospect" dropdown populates with a name
- Green "Active" indicator pulses on

**Animation:**
- Toggle animates from off → on (slide + color change)
- Prospect name typewriter-fills
- Green dot pulses with a glow
- Timer starts counting: 0:00 → 0:01 → 0:02…

**Feel:** "It's that simple to start."

---

### Scene 7 — Live UI: Real-Time Prompt Appears (8s)
**This is the hero scene.** Show one complete interaction.

**On Screen:**
Split layout:
- **Left side:** Simplified call view — speaker waveform animating (green bars), timer running, "Prospect Speaking" label
- **Right side:** Say So coach panel

**Animation sequence:**
1. Waveform animates for 2s (prospect is talking)
2. A signal tag slides in: "🔵 Pain Point Detected"
3. Beat (0.5s)
4. Coaching prompt types out character-by-character (TypewriterText):
   _"Ask: 'What would make a move worth it in the next 6 months?'"_
5. Prompt glows briefly with blue border pulse

**Feel:** The "aha" moment. This is the product in action.

---

### Scene 8 — Signal Detection Showcase (6s)
**On Screen:**
"Say So detects what matters"

**Animation:**
- 4 signal cards cascade in (staggered, spring animation), matching the actual product's SmartCapture UI:
  1. "Pain Point" — blue tag
  2. "Timeline" — green tag
  3. "Decision Maker" — purple tag
  4. "Objection" — orange tag
- Each card shows a brief quoted snippet:
  - _"We've been thinking about selling for a while…"_
  - _"Ideally before the school year starts"_
  - _"My wife and I need to agree"_
  - _"We're not sure about the market right now"_

**Feel:** Depth. "It catches all of this?"

---

### Scene 9 — The Payoff (4s)
**On Screen:**
Mockup of a success state:
- "Booked" confirmation card (from the Three Steps section of landing page)
- "Buyer Consultation"
- "Tomorrow — 2:00 PM"
- Green checkmark with "Confirmed"
- Subtle confetti/star burst

**Animation:**
- Card scales in with spring bounce
- Checkmark draws itself (SVG path animation)
- Stars/particles radiate outward briefly

**Feel:** Satisfaction. "That's the result."

---

### Scene 10 — Transformation Statement (4s)
**On Screen:**
"More appointments. Same calls."
"No freezing. No guessing."

**Animation:**
- First line appears, then second line
- "No freezing. No guessing." gets an animated underline in Say So blue (draws left to right)

**Feel:** Desire. The transformation is clear.

---

### Scene 11 — CTA (7s)
**On Screen:**
Say So logo (centered)
"Win the moment."
**[Book a Demo]** button with animated glow
_asksayso.com_

**Animation:**
- Logo fades in
- Tagline appears below
- CTA button pulses with a subtle blue glow
- URL fades in last
- Hold for 3 seconds

**Feel:** Action. Clear next step.

---

## Technical Implementation Notes

### Architecture (mirrors PoRelay exactly)
```
sayso_demo_video/
├── app/
│   └── page.tsx                    # Mount point for DemoPlayer
├── components/
│   └── demovideo/
│       ├── DemoPlayer.tsx          # Scene orchestrator (scenes array + timers)
│       ├── Stage.tsx               # 16:9 responsive container + SafeArea
│       ├── scenes/
│       │   ├── Scene0WhiteScreen.tsx
│       │   ├── Scene1Problem.tsx
│       │   ├── Scene2Consequences.tsx
│       │   ├── Scene3Dream.tsx
│       │   ├── Scene4Reveal.tsx
│       │   ├── Scene5Carousel.tsx
│       │   ├── Scene6StartSession.tsx
│       │   ├── Scene7LivePrompt.tsx    # Hero scene
│       │   ├── Scene8Signals.tsx
│       │   ├── Scene9Payoff.tsx
│       │   ├── Scene10Transform.tsx
│       │   └── Scene11CTA.tsx
│       ├── shared/
│       │   ├── HighlightText.tsx    # Word-by-word animated text
│       │   ├── TypewriterText.tsx   # Character-by-character typing
│       │   ├── CoachWindowMockup.tsx # Simplified coach UI mockup
│       │   └── SignalCard.tsx       # Reusable signal tag component
│       └── utils/
│           ├── motionVariants.ts    # Framer Motion presets
│           └── splitWords.ts        # Text splitting utility
├── public/
│   └── media/                      # Logo, icons
├── styles/
│   └── globals.css
├── next.config.js
├── tailwind.config.ts
├── package.json
└── tsconfig.json
```

### Dependencies
- Next.js 14+
- React 18
- Framer Motion
- Tailwind CSS

### Color Constants
```ts
const COLORS = {
  saysoBlue: '#2367EE',
  saysoYellow: '#FFDE59',
  saysoIndigo: '#1D4871',
  success: '#219e66',
  error: '#EF4444',
  warning: '#fba30b',
  dark: '#18181B',
  white: '#F4F4F5',
  border: '#E4E4E7',
}
```

### Scene Timing Summary
| # | Scene | Duration |
|---|-------|----------|
| 0 | White Screen | 3s |
| 1 | Problem — Freezing | 5s |
| 2 | Consequences | 5.5s |
| 3 | Dream | 4s |
| 4 | Reveal — Meet Say So | 3.5s |
| 5 | Feature Carousel | 6s |
| 6 | Live UI — Start Session | 5s |
| 7 | Live UI — Real-Time Prompt | 8s |
| 8 | Signal Detection | 6s |
| 9 | Payoff — Booked | 4s |
| 10 | Transformation Statement | 4s |
| 11 | CTA | 7s |
| | **Total** | **~61s** |

---

## Key Differences from PoRelay Demo

| Aspect | PoRelay | Say So |
|--------|---------|--------|
| Problem | Email overwhelm (counting badges) | Call anxiety (freezing) |
| Product UI shown | Dashboard table, email mockups | Coach window, signal cards, prompt typing |
| Hero scene | Email → Dashboard sync with arrow | Live call → real-time prompt appearing |
| Signals | Status/Type/Date/Note fields | Pain Point / Timeline / Decision Maker / Objection |
| Payoff | "Updates Sync Automatically" | "Booked" confirmation card |
| Tone | Operational efficiency | Personal empowerment / confidence |

---

## Content Sources (from actual product)
- Coach Window UI layout → `coachWindow/components/CoachWindowMain.tsx`
- Signal types & colors → `coachWindow/components/SmartCaptureBox.tsx`
- Coaching prompt examples → landing page `ProductShowcaseSection.tsx`
- "Booked" card → landing page `ThreeStepsSection.tsx`
- Color palette → `styles/Colors.css`
- "Win the moment" tagline → landing page Hero
