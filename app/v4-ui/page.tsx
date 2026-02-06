'use client';

import SaysoNavbarV4 from '@/components/landing-v4/SaysoNavbarV4';
import { HeroWithVideoV4 } from '@/components/landing-v4/HeroWithVideoV4';
import { PainPointPanelV4 } from '@/components/landing-v4/PainPointPanelV4';
import { ThreeStepsSectionV4 } from '@/components/landing-v4/ThreeStepsSectionV4';
import { TransformationSectionV4 } from '@/components/landing-v4/TransformationSectionV4';
import { PricingSectionV4 } from '@/components/landing-v4/PricingSectionV4';
import { FooterV4 } from '@/components/landing-v4/FooterV4';
import { DemoCalendarProvider } from '@/components/landing-v4/DemoCalendarProvider';
import Image from 'next/image';

// ─── Section wrapper for catalog entries ─────────────────────────────────────
function CatalogSection({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-comic text-3xl md:text-4xl text-[#1D4871] tracking-wide mb-8 md:mb-10">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

// ─── Subsection heading ──────────────────────────────────────────────────────
function SubHeading({ title, description, file }: { title: string; description?: string; file?: string }) {
  return (
    <div className="mb-6">
      <h3 className="text-xl md:text-2xl font-bold text-[#1D4871] mb-2">{title}</h3>
      {file && (
        <p className="text-sm text-[#1D4871]/60 mb-1">
          <strong>File:</strong> <code className="text-xs bg-[#F4F4F5] px-2 py-0.5 rounded">{file}</code>
        </p>
      )}
      {description && (
        <p className="text-base text-[#1D4871]/70">{description}</p>
      )}
    </div>
  );
}

// ─── Class label shown under examples ────────────────────────────────────────
function ClassLabel({ text }: { text: string }) {
  return (
    <p className="mt-3 text-xs text-[#1D4871]/50 font-mono break-all">
      <code>{text}</code>
    </p>
  );
}

export default function V4UIPage() {
  return (
    <DemoCalendarProvider>
      <div className="min-h-screen bg-white">

        {/* ═══════════════════════════════════════════════════════════════════
            PAGE HEADER
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="bg-white v2-halftone relative pt-20 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
            <div className="inline-block mb-4">
              <span className="v2-pow-badge px-4 py-1.5 rounded-lg text-sm font-comic tracking-wider">
                V4 DESIGN SYSTEM
              </span>
            </div>
            <h1 className="font-comic text-5xl sm:text-6xl lg:text-7xl tracking-wide leading-[1.05] text-[#1D4871] mb-4">
              V4 UI Component Catalog
            </h1>
            <p className="text-base md:text-lg text-[#1D4871]/80 max-w-2xl mx-auto leading-relaxed">
              Every UI element, style, and component used in the V4 comic-book superhero landing page — ready for reuse.
            </p>

            {/* Quick nav */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                { label: 'Colors', href: '#colors' },
                { label: 'Typography', href: '#typography' },
                { label: 'Buttons', href: '#buttons' },
                { label: 'Badges', href: '#badges' },
                { label: 'Cards', href: '#cards' },
                { label: 'Icons', href: '#icons' },
                { label: 'Effects', href: '#effects' },
                { label: 'Sections', href: '#sections' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 rounded-full border-2 border-[#1D4871] text-sm font-bold text-[#1D4871] hover:bg-[#FFDE59]/30 transition-colors v2-comic-btn"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>


        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 1: DESIGN FOUNDATIONS
        ═══════════════════════════════════════════════════════════════════ */}

        {/* ─── 1.1 Color Palette ──────────────────────────────────────── */}
        <CatalogSection title="Color Palette" id="colors">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Background', hex: '#F4F4F5', bg: 'bg-[#F4F4F5]', border: true },
              { name: 'Accent BG', hex: '#D7DEE1', bg: 'bg-[#D7DEE1]', border: true },
              { name: 'Primary', hex: '#1D4871', bg: 'bg-[#1D4871]', textWhite: true },
              { name: 'CTA', hex: '#2367EE', bg: 'bg-[#2367EE]', textWhite: true },
              { name: 'Accent Yellow', hex: '#FFDE59', bg: 'bg-[#FFDE59]', border: true },
              { name: 'White', hex: '#FFFFFF', bg: 'bg-white', border: true },
            ].map((color) => (
              <div key={color.hex} className="rounded-xl v2-comic-border overflow-hidden v2-comic-shadow-sm">
                <div className={`h-20 ${color.bg} ${color.border ? 'border-b-2 border-[#1D4871]' : ''}`} />
                <div className="p-3 bg-white">
                  <p className="font-bold text-sm text-[#1D4871]">{color.name}</p>
                  <p className="text-xs text-[#1D4871]/60 font-mono">{color.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </CatalogSection>


        {/* ─── 1.2 Typography ─────────────────────────────────────────── */}
        <CatalogSection title="Typography" id="typography">
          <div className="space-y-8">

            {/* Font families */}
            <div>
              <SubHeading title="Font Families" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#F4F4F5] p-6 rounded-xl v2-comic-border">
                  <p className="font-comic text-3xl text-[#1D4871] tracking-wide mb-2">Bangers</p>
                  <p className="text-sm text-[#1D4871]/60">Comic headings &amp; badges</p>
                  <ClassLabel text="font-comic (Bangers)" />
                </div>
                <div className="bg-[#F4F4F5] p-6 rounded-xl v2-comic-border">
                  <p className="font-hero text-3xl font-bold text-[#1D4871] mb-2">Manrope</p>
                  <p className="text-sm text-[#1D4871]/60">Hero text (bold 700)</p>
                  <ClassLabel text="font-hero (Manrope)" />
                </div>
                <div className="bg-[#F4F4F5] p-6 rounded-xl v2-comic-border">
                  <p className="font-sans text-3xl text-[#1D4871] mb-2">Helvetica</p>
                  <p className="text-sm text-[#1D4871]/60">Body text &amp; UI</p>
                  <ClassLabel text="font-sans (Helvetica Neue)" />
                </div>
              </div>
            </div>

            {/* Hero Headline */}
            <div>
              <SubHeading title="Hero Headline" />
              <div className="bg-[#F4F4F5] p-6 rounded-xl v2-comic-border">
                <h1 className="font-comic text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-wide leading-[1.05] text-[#1D4871]">
                  Win the Moment
                </h1>
                <ClassLabel text="font-comic text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-wide leading-[1.05] text-[#1D4871]" />
              </div>
            </div>

            {/* Section Headline */}
            <div>
              <SubHeading title="Section Headline (Comic)" />
              <div className="bg-[#F4F4F5] p-6 rounded-xl v2-comic-border">
                <h2 className="font-comic text-3xl md:text-4xl lg:text-5xl text-[#1D4871] tracking-wide">
                  Sayso in 3 Easy Steps
                </h2>
                <ClassLabel text="font-comic text-3xl md:text-4xl lg:text-5xl text-[#1D4871] tracking-wide" />
              </div>
            </div>

            {/* Pricing Title */}
            <div>
              <SubHeading title="Pricing / Card Title" />
              <div className="bg-[#F4F4F5] p-6 rounded-xl v2-comic-border">
                <h3 className="font-comic text-2xl md:text-3xl text-[#1D4871] tracking-wide">
                  Standard
                </h3>
                <ClassLabel text="font-comic text-2xl md:text-3xl text-[#1D4871] tracking-wide" />
              </div>
            </div>

            {/* Body Text */}
            <div>
              <SubHeading title="Body Text" />
              <div className="bg-[#F4F4F5] p-6 rounded-xl v2-comic-border">
                <p className="text-base md:text-lg text-[#1D4871]/80 leading-relaxed max-w-2xl">
                  Guidance that shows up during the call—before the moment passes. Real-time guidance that keeps outbound calls structured and moving toward a booked appointment.
                </p>
                <ClassLabel text="text-base md:text-lg text-[#1D4871]/80 leading-relaxed" />
              </div>
            </div>

            {/* Small / Eyebrow */}
            <div>
              <SubHeading title="Eyebrow / Label Text" />
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-[#F4F4F5] p-6 rounded-xl v2-comic-border">
                  <p className="text-xs tracking-widest uppercase text-[#1D4871]/60 font-bold mb-2">On Light Background</p>
                  <ClassLabel text="text-xs tracking-widest uppercase text-[#1D4871]/60 font-bold" />
                </div>
                <div className="flex-1 bg-[#1D4871] p-6 rounded-xl v2-comic-border">
                  <p className="text-xs tracking-widest uppercase text-[#FFDE59] font-bold mb-2">On Dark Background</p>
                  <ClassLabel text="text-xs tracking-widest uppercase text-[#FFDE59] font-bold" />
                </div>
              </div>
            </div>

            {/* Footer link text */}
            <div>
              <SubHeading title="Footer / Small Body Text" />
              <div className="bg-[#1D4871] p-6 rounded-xl v2-comic-border">
                <p className="text-sm text-white/70 leading-relaxed">Win the Moment — your real-time call superpower.</p>
                <ClassLabel text="text-sm text-white/70 leading-relaxed" />
              </div>
            </div>
          </div>
        </CatalogSection>


        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 2: UI PRIMITIVES
        ═══════════════════════════════════════════════════════════════════ */}

        {/* ─── 2.1 Buttons ────────────────────────────────────────────── */}
        <CatalogSection title="Buttons" id="buttons">
          <div className="space-y-8">

            {/* Primary CTA with Glow */}
            <div>
              <SubHeading title="Primary CTA (with Glow)" description="Used in navbar and hero section. Blue background with comic border and pulsing glow effect." />
              <div className="bg-[#F4F4F5] p-8 rounded-xl v2-comic-border flex flex-wrap items-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#2367EE] text-white font-bold text-sm md:text-base v4-hero-glow border-2 border-[#1D4871] focus:outline-none focus:ring-2 focus:ring-[#2367EE] focus:ring-offset-2"
                  onClick={(e: React.MouseEvent) => e.preventDefault()}
                >
                  <svg width="14" height="14" viewBox="0 0 512 512" fill="none" className="mr-1.5">
                    <path d="M294.4 25.6L115.2 281.6H256L217.6 486.4L396.8 230.4H256L294.4 25.6Z" fill="currentColor" stroke="currentColor" strokeWidth="20"/>
                  </svg>
                  Get Started
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-[#2367EE] px-8 py-3.5 text-lg font-semibold text-white v4-hero-glow v2-comic-border-light border-[#1D4871] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2367EE] focus-visible:ring-offset-2"
                  onClick={(e: React.MouseEvent) => e.preventDefault()}
                >
                  Book a demo
                </a>
              </div>
              <ClassLabel text="rounded-full bg-[#2367EE] text-white font-bold v4-hero-glow border-2 border-[#1D4871]" />
            </div>

            {/* Primary Comic Button */}
            <div>
              <SubHeading title="Primary Comic Button" description="Used in pricing cards. Blue background with comic button press effect." />
              <div className="bg-[#F4F4F5] p-8 rounded-xl v2-comic-border flex flex-wrap items-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm md:text-base font-bold bg-[#2367EE] text-white v2-comic-btn border-2 border-[#1D4871] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2367EE] focus-visible:ring-offset-2"
                  onClick={(e: React.MouseEvent) => e.preventDefault()}
                >
                  Start 8-day free trial
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm md:text-base font-bold bg-[#2367EE] text-white v2-comic-btn border-2 border-[#1D4871] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2367EE] focus-visible:ring-offset-2"
                  onClick={(e: React.MouseEvent) => e.preventDefault()}
                >
                  Unlock Your Power
                </a>
              </div>
              <ClassLabel text="rounded-full bg-[#2367EE] text-white font-bold v2-comic-btn border-2 border-[#1D4871]" />
            </div>

            {/* Accent CTA */}
            <div>
              <SubHeading title="Accent CTA (Yellow)" description="Used in the Transformation section on dark backgrounds." />
              <div className="bg-[#1D4871] p-8 rounded-xl v2-comic-border flex flex-wrap items-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-[#FFDE59] px-7 py-3.5 text-base font-bold text-[#1D4871] v2-comic-btn border-2 border-[#1D4871] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFDE59] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1D4871]"
                  onClick={(e: React.MouseEvent) => e.preventDefault()}
                >
                  <svg width="18" height="18" viewBox="0 0 512 512" fill="none" className="mr-2">
                    <path d="M294.4 25.6L115.2 281.6H256L217.6 486.4L396.8 230.4H256L294.4 25.6Z" fill="#1D4871" stroke="#1D4871" strokeWidth="20"/>
                  </svg>
                  Get Started
                </a>
              </div>
              <ClassLabel text="rounded-full bg-[#FFDE59] text-[#1D4871] font-bold v2-comic-btn border-2 border-[#1D4871]" />
            </div>

            {/* Ghost / Secondary */}
            <div>
              <SubHeading title="Ghost / Secondary Button" description="Transparent with white border, used on dark backgrounds." />
              <div className="bg-[#1D4871] p-8 rounded-xl v2-comic-border flex flex-wrap items-center gap-4">
                <button
                  className="inline-flex items-center justify-center rounded-full bg-transparent px-7 py-3.5 text-base font-bold text-white border-2 border-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1D4871]"
                >
                  Book a Demo
                </button>
              </div>
              <ClassLabel text="rounded-full bg-transparent text-white border-2 border-white hover:bg-white/10" />
            </div>

            {/* Outline */}
            <div>
              <SubHeading title="Outline Button" description="Border-only style used in pricing cards for lower-priority actions." />
              <div className="bg-[#F4F4F5] p-8 rounded-xl v2-comic-border flex flex-wrap items-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm md:text-base font-bold border-2 border-[#1D4871] bg-white text-[#1D4871] v2-comic-btn focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2367EE] focus-visible:ring-offset-2"
                  onClick={(e: React.MouseEvent) => e.preventDefault()}
                >
                  Assemble Your Team
                </a>
              </div>
              <ClassLabel text="rounded-full border-2 border-[#1D4871] bg-white text-[#1D4871] v2-comic-btn" />
            </div>

            {/* Mobile Menu CTA */}
            <div>
              <SubHeading title="Mobile Menu CTA" description="Full-width button used in the mobile nav drawer." />
              <div className="bg-[#F4F4F5] p-8 rounded-xl v2-comic-border max-w-sm">
                <a
                  href="#"
                  className="block w-full px-4 py-3 rounded-full bg-[#2367EE] text-white font-bold text-base text-center v2-comic-btn border-2 border-[#1D4871]"
                  onClick={(e: React.MouseEvent) => e.preventDefault()}
                >
                  Get Started
                </a>
              </div>
              <ClassLabel text="w-full rounded-full bg-[#2367EE] text-white font-bold v2-comic-btn border-2 border-[#1D4871]" />
            </div>
          </div>
        </CatalogSection>


        {/* ─── 2.2 Badges & Labels ────────────────────────────────────── */}
        <CatalogSection title="Badges &amp; Labels" id="badges">
          <div className="space-y-8">

            {/* Pow Badge */}
            <div>
              <SubHeading title="Pow Badge" description="Star-shaped comic sound effect badge. Used for step labels and the 'Most Popular' tag." />
              <div className="bg-[#F4F4F5] p-8 rounded-xl v2-comic-border flex flex-wrap items-center gap-8">
                <span className="v2-pow-badge px-4 py-1.5 rounded-lg text-sm font-comic tracking-wider inline-block">
                  MOST POPULAR
                </span>
                <span className="v2-pow-badge px-2 py-0.5 rounded text-[10px] font-comic tracking-wider inline-block">
                  STEP 1
                </span>
                <span className="v2-pow-badge px-4 py-1.5 rounded-lg text-sm font-comic tracking-wider inline-block">
                  V4 DESIGN SYSTEM
                </span>
              </div>
              <ClassLabel text="v2-pow-badge px-4 py-1.5 rounded-lg font-comic tracking-wider" />
            </div>

            {/* Sound Effect Badge (Star SVG) */}
            <div>
              <SubHeading title="Sound Effect Badge (Star Shape)" description="Star-polygon SVG badges with comic text, rotated for dynamic feel. Used in ThreeStepsSection." />
              <div className="bg-[#F4F4F5] p-10 rounded-xl v2-comic-border flex flex-wrap items-center gap-12">
                {[
                  { text: 'CLICK!', color: '#60A5FA', rotate: 15 },
                  { text: 'ZAP!', color: '#FFDE59', rotate: -10 },
                  { text: 'BOOM!', color: '#FFDE59', rotate: 12 },
                ].map((badge) => (
                  <div key={badge.text} className="relative" style={{ transform: `rotate(${badge.rotate}deg)` }}>
                    <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
                      <polygon
                        points="40,2 48,18 68,8 60,26 78,30 62,40 78,52 60,50 65,70 48,58 40,76 32,58 15,70 20,50 2,52 18,40 2,30 20,26 12,8 32,18"
                        fill={badge.color}
                        stroke="#1D4871"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center font-comic text-[#1D4871] text-xs tracking-wide">
                      {badge.text}
                    </span>
                  </div>
                ))}
              </div>
              <ClassLabel text="SVG polygon star + font-comic text-xs text-[#1D4871]" />
            </div>

            {/* Narrator Box */}
            <div>
              <SubHeading title="Narrator Box" description="Dark label box with comic shadow and slight rotation. Used for section intros." />
              <div className="bg-[#F4F4F5] p-8 rounded-xl v2-comic-border flex flex-wrap items-center gap-6">
                <div className="bg-[#1D4871] text-white px-5 py-2 rounded-lg v2-comic-shadow-sm transform -rotate-1 inline-block">
                  <span className="font-comic text-lg md:text-xl tracking-wide">Without SaySo...</span>
                </div>
                <div className="bg-[#1D4871] text-white px-5 py-2 rounded-lg v2-comic-shadow-sm transform -rotate-1 inline-block">
                  <span className="font-comic text-sm md:text-base tracking-wide">Trusted by Teams Running Outbound Every Day</span>
                </div>
              </div>
              <ClassLabel text="bg-[#1D4871] text-white px-5 py-2 rounded-lg v2-comic-shadow-sm transform -rotate-1" />
            </div>

            {/* Confirmed Pill */}
            <div>
              <SubHeading title="Status Pill" description="Small colored pill for status indicators. Used in the booked appointment step card." />
              <div className="bg-[#F4F4F5] p-8 rounded-xl v2-comic-border flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#2367EE]/10 border-2 border-[#2367EE]/30">
                  <span className="text-[10px] font-bold text-[#2367EE]">Confirmed</span>
                </div>
              </div>
              <ClassLabel text="px-2 py-0.5 rounded-full bg-[#2367EE]/10 border-2 border-[#2367EE]/30" />
            </div>
          </div>
        </CatalogSection>


        {/* ─── 2.3 Cards ──────────────────────────────────────────────── */}
        <CatalogSection title="Cards" id="cards">
          <div className="space-y-10">

            {/* Victory Metric Card */}
            <div>
              <SubHeading
                title="Victory Metric Card"
                description="Icon + title + description with comic border and tilt effect. Used in TransformationSection."
                file="components/landing-v4/TransformationSectionV4.tsx"
              />
              <div className="bg-[#F4F4F5] p-8 rounded-xl v2-comic-border">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { title: 'More Appointments', desc: 'Book meetings at the right moment', tilt: 'v2-tilt-left' },
                    { title: 'Revenue Growth', desc: 'Higher-quality conversations close faster', tilt: 'v2-tilt-right' },
                    { title: 'Week 1 Ready', desc: 'Start coaching from your first call', tilt: 'v2-tilt-left' },
                    { title: 'Always-On Guidance', desc: 'Real-time support on every call', tilt: 'v2-tilt-right' },
                  ].map((card) => (
                    <div key={card.title} className={`bg-white rounded-xl v2-comic-border v2-comic-shadow p-4 md:p-5 ${card.tilt}`}>
                      <div className="mb-2">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <rect x="3" y="5" width="22" height="20" rx="3" stroke="#2367EE" strokeWidth="2" fill="none"/>
                          <path d="M3 10H25" stroke="#2367EE" strokeWidth="2"/>
                          <path d="M10 16L13 19L19 13" stroke="#2367EE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 className="font-comic text-lg md:text-xl text-[#1D4871] tracking-wide mb-1">{card.title}</h3>
                      <p className="text-sm text-[#1D4871]/70 leading-relaxed">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <ClassLabel text="bg-white rounded-xl v2-comic-border v2-comic-shadow p-4 v2-tilt-left/right" />
            </div>

            {/* Pricing Card */}
            <div>
              <SubHeading
                title="Pricing Card"
                description="Feature list card with accent top border, comic shadow, and 'Most Popular' badge option."
                file="components/landing-v4/PricingSectionV4.tsx"
              />
              <div className="bg-[#F4F4F5] p-8 rounded-xl v2-comic-border">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {/* Normal card */}
                  <div className="relative flex flex-col bg-white rounded-2xl v2-comic-border v4-accent-top p-6 v2-comic-shadow">
                    <h3 className="font-comic text-2xl text-[#1D4871] tracking-wide mb-2">Free Trial</h3>
                    <p className="text-3xl font-bold text-[#1D4871] mb-3">8 days free</p>
                    <p className="text-base text-[#1D4871]/70 mb-4 leading-relaxed">Try Sayso on real outbound calls.</p>
                    <ul className="space-y-2 mb-6">
                      {['Real-time prompts', 'Buyer + seller conversations'].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-[#2367EE] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-[#1D4871]/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#" className="w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold bg-[#2367EE] text-white v2-comic-btn border-2 border-[#1D4871]" onClick={(e: React.MouseEvent) => e.preventDefault()}>
                      Start free trial
                    </a>
                  </div>

                  {/* Popular card */}
                  <div className="relative flex flex-col bg-white rounded-2xl v2-comic-border v4-accent-top p-6 v2-comic-shadow-blue shadow-[4px_4px_0px_#2367EE,0_0_20px_rgba(255,222,89,0.3)]">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="v2-pow-badge px-4 py-1.5 rounded-lg text-sm font-comic tracking-wider inline-block">MOST POPULAR</span>
                    </div>
                    <h3 className="font-comic text-2xl text-[#1D4871] tracking-wide mb-2">Standard</h3>
                    <p className="text-3xl font-bold text-[#1D4871] mb-3">$49.99 / month</p>
                    <p className="text-base text-[#1D4871]/70 mb-4 leading-relaxed">For agents who want consistency.</p>
                    <ul className="space-y-2 mb-6">
                      {['Full real-time coaching', 'Priority support'].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-[#2367EE] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-[#1D4871]/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#" className="w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold bg-[#2367EE] text-white v2-comic-btn border-2 border-[#1D4871]" onClick={(e: React.MouseEvent) => e.preventDefault()}>
                      Unlock Your Power
                    </a>
                  </div>

                  {/* Outline card */}
                  <div className="relative flex flex-col bg-white rounded-2xl v2-comic-border v4-accent-top p-6 v2-comic-shadow">
                    <h3 className="font-comic text-2xl text-[#1D4871] tracking-wide mb-2">Enterprise</h3>
                    <p className="text-3xl font-bold text-[#1D4871] mb-3">Talk to sales</p>
                    <p className="text-base text-[#1D4871]/70 mb-4 leading-relaxed">For teams and brokerages.</p>
                    <ul className="space-y-2 mb-6">
                      {['Team onboarding', 'Custom rollout support'].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-[#2367EE] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-[#1D4871]/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#" className="w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold border-2 border-[#1D4871] bg-white text-[#1D4871] v2-comic-btn" onClick={(e: React.MouseEvent) => e.preventDefault()}>
                      Assemble Your Team
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Comic Panel */}
            <div>
              <SubHeading
                title="Comic Panel"
                description="Rounded panel with comic border, shadow, and tilt. Used for pain-point illustrations."
                file="components/landing-v4/PainPointPanelV4.tsx"
              />
              <div className="bg-[#F4F4F5] p-8 rounded-xl v2-comic-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  <div className="relative bg-white rounded-2xl v2-comic-border v2-comic-shadow v2-tilt-left overflow-hidden">
                    <div className="bg-gradient-to-br from-[#f0f2f5] to-[#e8eaed] flex items-center justify-center min-h-[180px]">
                      <p className="text-[#1D4871]/40 font-comic text-xl tracking-wide">Panel A</p>
                    </div>
                  </div>
                  <div className="relative bg-white rounded-2xl v2-comic-border v2-comic-shadow v2-tilt-right overflow-hidden">
                    <div className="bg-gradient-to-br from-[#f0f2f5] to-[#e8eaed] flex items-center justify-center min-h-[180px]">
                      <p className="text-[#1D4871]/40 font-comic text-xl tracking-wide">Panel B</p>
                    </div>
                  </div>
                </div>
              </div>
              <ClassLabel text="bg-white rounded-2xl v2-comic-border v2-comic-shadow v2-tilt-left/right overflow-hidden" />
            </div>
          </div>
        </CatalogSection>


        {/* ─── 2.4 Icons ──────────────────────────────────────────────── */}
        <CatalogSection title="Icons" id="icons">
          <div className="bg-[#F4F4F5] p-8 rounded-xl v2-comic-border">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {/* Lightning Bolt */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl v2-comic-border v2-comic-shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 512 512" fill="none">
                    <path d="M294.4 25.6L115.2 281.6H256L217.6 486.4L396.8 230.4H256L294.4 25.6Z" fill="#2367EE" stroke="#2367EE" strokeWidth="20"/>
                  </svg>
                </div>
                <p className="text-xs text-[#1D4871]/60 text-center">Lightning Bolt</p>
              </div>

              {/* Checkmark */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl v2-comic-border v2-comic-shadow-sm">
                  <svg className="w-6 h-6 text-[#2367EE]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-xs text-[#1D4871]/60 text-center">Checkmark</p>
              </div>

              {/* Calendar */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl v2-comic-border v2-comic-shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                    <rect x="3" y="5" width="22" height="20" rx="3" stroke="#2367EE" strokeWidth="2" fill="none"/>
                    <path d="M3 10H25" stroke="#2367EE" strokeWidth="2"/>
                    <path d="M9 2V6" stroke="#2367EE" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M19 2V6" stroke="#2367EE" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M10 16L13 19L19 13" stroke="#2367EE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-xs text-[#1D4871]/60 text-center">Calendar Check</p>
              </div>

              {/* Revenue */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl v2-comic-border v2-comic-shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                    <path d="M4 22L10 16L15 19L24 8" stroke="#2367EE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 8H24V14" stroke="#2367EE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-xs text-[#1D4871]/60 text-center">Revenue</p>
              </div>

              {/* Rocket */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl v2-comic-border v2-comic-shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                    <path d="M14 3C14 3 10 8 10 16C10 18 11 20 14 22C17 20 18 18 18 16C18 8 14 3 14 3Z" stroke="#2367EE" strokeWidth="2" fill="none"/>
                    <circle cx="14" cy="13" r="2" fill="#2367EE"/>
                    <path d="M12 22L14 26L16 22" stroke="#2367EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
                <p className="text-xs text-[#1D4871]/60 text-center">Rocket</p>
              </div>

              {/* Shield */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl v2-comic-border v2-comic-shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                    <path d="M14 3L4 7V14C4 20 8 24 14 26C20 24 24 20 24 14V7L14 3Z" stroke="#2367EE" strokeWidth="2" fill="none"/>
                    <path d="M10 14L13 17L19 11" stroke="#2367EE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-xs text-[#1D4871]/60 text-center">Shield</p>
              </div>

              {/* Grid */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl v2-comic-border v2-comic-shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 14 14" fill="none">
                    <path d="M2 2H6V6H2V2Z" stroke="#1D4871" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 2H12V6H8V2Z" stroke="#1D4871" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 8H6V12H2V8Z" stroke="#1D4871" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 8H12V12H8V8Z" stroke="#1D4871" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-xs text-[#1D4871]/60 text-center">Grid</p>
              </div>

              {/* Toggle */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl v2-comic-border v2-comic-shadow-sm">
                  <svg width="32" height="18" viewBox="0 0 24 14" fill="none">
                    <rect x="1" y="1" width="22" height="12" rx="6" fill="#2367EE" stroke="none"/>
                    <circle cx="18" cy="7" r="4" fill="white"/>
                  </svg>
                </div>
                <p className="text-xs text-[#1D4871]/60 text-center">Toggle On</p>
              </div>

              {/* Record */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl v2-comic-border v2-comic-shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="5" fill="#EF4444" stroke="#1D4871" strokeWidth="0.5"/>
                  </svg>
                </div>
                <p className="text-xs text-[#1D4871]/60 text-center">Record</p>
              </div>

              {/* LinkedIn */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl v2-comic-border v2-comic-shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#1D4871">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <p className="text-xs text-[#1D4871]/60 text-center">LinkedIn</p>
              </div>

              {/* Instagram */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl v2-comic-border v2-comic-shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#1D4871">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                <p className="text-xs text-[#1D4871]/60 text-center">Instagram</p>
              </div>

              {/* Comic Arrow */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl v2-comic-border v2-comic-shadow-sm">
                  <svg width="36" height="24" viewBox="0 0 90 60" fill="none">
                    <path d="M10 30 C 20 18, 32 14, 45 18 S 62 28, 72 24" stroke="#1D4871" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M64 16 L76 24 L64 33" stroke="#1D4871" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
                <p className="text-xs text-[#1D4871]/60 text-center">Comic Arrow</p>
              </div>
            </div>
          </div>
        </CatalogSection>


        {/* ─── 2.5 Nav Link Style ─────────────────────────────────────── */}
        <CatalogSection title="Navigation Links" id="nav-links">
          <SubHeading title="Desktop Nav Link" description="Bold text with hover color transition. Used in the sticky navbar." />
          <div className="bg-[#F4F4F5] p-8 rounded-xl v2-comic-border flex flex-wrap items-center gap-6">
            {['Home', 'How Sayso Works', 'Demo', 'Download', 'Contact'].map((label) => (
              <a
                key={label}
                href="#"
                className="text-[#1D4871] font-bold text-sm md:text-base hover:text-[#2367EE] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2367EE] focus:ring-offset-2 rounded-lg px-2 py-1"
                onClick={(e: React.MouseEvent) => e.preventDefault()}
              >
                {label}
              </a>
            ))}
          </div>
          <ClassLabel text="text-[#1D4871] font-bold text-sm md:text-base hover:text-[#2367EE] transition-colors" />
        </CatalogSection>


        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 3: CSS EFFECTS & ANIMATIONS
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="bg-[#F8F8FA] border-y-4 border-[#FFDE59]">
          <CatalogSection title="CSS Effects &amp; Animations" id="effects">
            <div className="space-y-8">

              {/* Comic Border & Shadow */}
              <div>
                <SubHeading title="Comic Border &amp; Shadow Variants" description="The core visual language of V4 — thick borders with hard offset shadows." />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl v2-comic-border p-6 text-center">
                    <p className="font-bold text-[#1D4871] text-sm mb-1">Comic Border</p>
                    <ClassLabel text="v2-comic-border" />
                  </div>
                  <div className="bg-white rounded-xl v2-comic-border v2-comic-shadow p-6 text-center">
                    <p className="font-bold text-[#1D4871] text-sm mb-1">Comic Shadow</p>
                    <ClassLabel text="v2-comic-shadow" />
                  </div>
                  <div className="bg-white rounded-xl v2-comic-border v2-comic-shadow-sm p-6 text-center">
                    <p className="font-bold text-[#1D4871] text-sm mb-1">Comic Shadow SM</p>
                    <ClassLabel text="v2-comic-shadow-sm" />
                  </div>
                  <div className="bg-white rounded-xl v2-comic-border v2-comic-shadow-blue p-6 text-center">
                    <p className="font-bold text-[#1D4871] text-sm mb-1">Comic Shadow Blue</p>
                    <ClassLabel text="v2-comic-shadow-blue" />
                  </div>
                </div>
              </div>

              {/* Panel Border & Accent Top */}
              <div>
                <SubHeading title="Panel Border &amp; Accent Top" description="V4-specific border styles used on step cards and pricing cards." />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl v4-panel-border p-6 text-center">
                    <p className="font-bold text-[#1D4871] text-sm mb-1">Panel Border</p>
                    <ClassLabel text="v4-panel-border" />
                  </div>
                  <div className="bg-white rounded-xl v2-comic-border v4-accent-top p-6 text-center">
                    <p className="font-bold text-[#1D4871] text-sm mb-1">Accent Top (4px yellow)</p>
                    <ClassLabel text="v4-accent-top" />
                  </div>
                </div>
              </div>

              {/* Tilt Effects */}
              <div>
                <SubHeading title="Tilt Effects" description="Slight rotations that add comic-book personality. Reset on hover." />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl v2-comic-border v2-comic-shadow p-6 text-center v2-tilt-left">
                    <p className="font-bold text-[#1D4871] text-sm mb-1">Tilt Left</p>
                    <ClassLabel text="v2-tilt-left (-1.5deg)" />
                  </div>
                  <div className="bg-white rounded-xl v2-comic-border v2-comic-shadow p-6 text-center">
                    <p className="font-bold text-[#1D4871] text-sm mb-1">No Tilt</p>
                    <ClassLabel text="(neutral)" />
                  </div>
                  <div className="bg-white rounded-xl v2-comic-border v2-comic-shadow p-6 text-center v2-tilt-right">
                    <p className="font-bold text-[#1D4871] text-sm mb-1">Tilt Right</p>
                    <ClassLabel text="v2-tilt-right (1.5deg)" />
                  </div>
                </div>
              </div>

              {/* Halftone Overlays */}
              <div>
                <SubHeading title="Halftone Overlays" description="Subtle dot-pattern overlays that add comic-book texture to sections." />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative bg-white rounded-xl v2-comic-border overflow-hidden p-8 min-h-[120px] flex items-center justify-center v2-halftone">
                    <p className="font-bold text-[#1D4871] text-sm relative z-10">Light Halftone</p>
                  </div>
                  <div className="relative bg-[#1D4871] rounded-xl v2-comic-border overflow-hidden p-8 min-h-[120px] flex items-center justify-center v4-halftone-dark">
                    <p className="font-bold text-white text-sm relative z-10">Dark Halftone</p>
                  </div>
                </div>
                <ClassLabel text="v2-halftone (light) / v4-halftone-dark (dark)" />
              </div>

              {/* Animations */}
              <div>
                <SubHeading title="Animations" description="CSS keyframe animations used throughout V4." />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                  {/* Hero Float */}
                  <div className="bg-white rounded-xl v2-comic-border v2-comic-shadow p-6 flex flex-col items-center min-h-[180px] justify-center">
                    <div className="v4-hero-float">
                      <Image
                        src="/sayso_superhero_point_right.png"
                        alt="Floating hero"
                        width={80}
                        height={85}
                        className="w-16 h-auto"
                      />
                    </div>
                    <p className="font-bold text-[#1D4871] text-sm mt-4">Hero Float</p>
                    <ClassLabel text="v4-hero-float" />
                  </div>

                  {/* Hero Glow */}
                  <div className="bg-white rounded-xl v2-comic-border v2-comic-shadow p-6 flex flex-col items-center min-h-[180px] justify-center">
                    <button className="px-6 py-3 rounded-full bg-[#2367EE] text-white font-bold v4-hero-glow border-2 border-[#1D4871]">
                      Glowing
                    </button>
                    <p className="font-bold text-[#1D4871] text-sm mt-4">Hero Glow</p>
                    <ClassLabel text="v4-hero-glow" />
                  </div>

                  {/* Slide-in Left */}
                  <div className="bg-white rounded-xl v2-comic-border v2-comic-shadow p-6 flex flex-col items-center min-h-[180px] justify-center">
                    <h3 className="font-comic text-2xl text-[#1D4871] tracking-wide v4-slide-in-left">Slide In!</h3>
                    <p className="font-bold text-[#1D4871] text-sm mt-4">Slide-in Left</p>
                    <ClassLabel text="v4-slide-in-left" />
                  </div>

                  {/* Comic Button Press */}
                  <div className="bg-white rounded-xl v2-comic-border v2-comic-shadow p-6 flex flex-col items-center min-h-[180px] justify-center">
                    <button className="px-6 py-3 rounded-full bg-[#FFDE59] text-[#1D4871] font-bold v2-comic-btn border-2 border-[#1D4871]">
                      Press Me
                    </button>
                    <p className="font-bold text-[#1D4871] text-sm mt-4">Comic Button Press</p>
                    <ClassLabel text="v2-comic-btn" />
                  </div>

                  {/* Glassmorphism */}
                  <div className="bg-gradient-to-br from-[#0d1b2a] to-[#1a2a3a] rounded-xl v2-comic-border p-6 flex flex-col items-center min-h-[180px] justify-center gap-3">
                    <div className="px-4 py-2 rounded-full showcase-glass border border-white/15">
                      <span className="text-xs text-white/80">Glass Effect</span>
                    </div>
                    <div className="px-4 py-2 rounded-xl showcase-glass-strong border border-white/15">
                      <span className="text-xs text-white/90">Strong Glass</span>
                    </div>
                    <p className="font-bold text-white text-sm mt-2">Glassmorphism</p>
                    <ClassLabel text="showcase-glass / showcase-glass-strong" />
                  </div>

                  {/* Starburst */}
                  <div className="bg-[#1D4871] rounded-xl v2-comic-border overflow-hidden p-6 flex flex-col items-center min-h-[180px] justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <svg viewBox="0 0 200 200" className="w-[160px] h-[160px]" fill="none">
                        {Array.from({ length: 24 }).map((_, i) => {
                          const angle = (i * 15) * (Math.PI / 180);
                          const innerR = 20;
                          const outerR = i % 2 === 0 ? 90 : 65;
                          const x1 = 100 + Math.cos(angle) * innerR;
                          const y1 = 100 + Math.sin(angle) * innerR;
                          const x2 = 100 + Math.cos(angle) * outerR;
                          const y2 = 100 + Math.sin(angle) * outerR;
                          return (
                            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFDE59" strokeWidth={i % 2 === 0 ? 2 : 1} opacity={i % 2 === 0 ? 0.3 : 0.15} />
                          );
                        })}
                      </svg>
                    </div>
                    <p className="font-bold text-white text-sm relative z-10">Starburst</p>
                    <p className="text-xs text-white/50 relative z-10 mt-1">SVG radial lines</p>
                  </div>
                </div>
              </div>
            </div>
          </CatalogSection>
        </div>


        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4: FULL SECTION PREVIEWS
        ═══════════════════════════════════════════════════════════════════ */}

        {/* SaysoNavbarV4 */}
        <CatalogSection title="Full Section Previews" id="sections">
          <p className="text-base text-[#1D4871]/70 mb-10 leading-relaxed">
            Each V4 landing page section rendered live. These are the exact components used on <a href="/v4" className="text-[#2367EE] font-bold hover:underline">/v4</a>.
          </p>
        </CatalogSection>

        <section className="py-8 md:py-12">
          <div className="max-w-[1200px] mx-auto px-6">
            <SubHeading
              title="SaysoNavbarV4"
              description="Sticky pill-style navigation bar with comic border, logo, nav links, mobile drawer, and CTA button with glow effect."
              file="components/landing-v4/SaysoNavbarV4.tsx"
            />
            <div className="bg-[#F4F4F5] p-6 rounded-2xl v2-comic-border overflow-hidden">
              <SaysoNavbarV4 />
            </div>
          </div>
        </section>

        {/* HeroWithVideoV4 */}
        <section className="py-8 md:py-12">
          <div className="max-w-[1200px] mx-auto px-6">
            <SubHeading
              title="HeroWithVideoV4"
              description="Two-column hero with comic headline, CTA, live product demo video, superhero character, narrator badge, and scrolling social proof marquee."
              file="components/landing-v4/HeroWithVideoV4.tsx"
            />
          </div>
          <div className="bg-[#F4F4F5] rounded-2xl v2-comic-border mx-4 overflow-hidden">
            <HeroWithVideoV4 />
          </div>
        </section>

        {/* PainPointPanelV4 */}
        <section className="py-8 md:py-12">
          <div className="max-w-[1200px] mx-auto px-6">
            <SubHeading
              title="PainPointPanelV4"
              description="Two comic-style panels showing 'without SaySo' struggle scenarios with scroll-triggered reveal animations and halftone background."
              file="components/landing-v4/PainPointPanelV4.tsx"
            />
          </div>
          <div className="bg-[#F4F4F5] rounded-2xl v2-comic-border mx-4 overflow-hidden">
            <PainPointPanelV4 />
          </div>
        </section>

        {/* TransformationSectionV4 */}
        <section className="py-8 md:py-12">
          <div className="max-w-[1200px] mx-auto px-6">
            <SubHeading
              title="TransformationSectionV4"
              description="Dark navy section with superhero image, yellow starburst, 4 victory metric cards on a 2x2 grid, and dual CTA buttons."
              file="components/landing-v4/TransformationSectionV4.tsx"
            />
          </div>
          <div className="bg-[#F4F4F5] rounded-2xl v2-comic-border mx-4 overflow-hidden">
            <TransformationSectionV4 />
          </div>
        </section>

        {/* ThreeStepsSectionV4 */}
        <section className="py-8 md:py-12">
          <div className="max-w-[1200px] mx-auto px-6">
            <SubHeading
              title="ThreeStepsSectionV4"
              description="3-step visual process flow (Launch Coach, Get prompts, Win the moment) with inline SVG icons, comic sound effect badges, and interactive step cards."
              file="components/landing-v4/ThreeStepsSectionV4.tsx"
            />
          </div>
          <div className="bg-[#F4F4F5] rounded-2xl v2-comic-border mx-4 overflow-hidden">
            <ThreeStepsSectionV4 />
          </div>
        </section>

        {/* PricingSectionV4 */}
        <section className="py-8 md:py-12">
          <div className="max-w-[1200px] mx-auto px-6">
            <SubHeading
              title="PricingSectionV4"
              description="Three pricing tier cards (Free Trial, Standard, Enterprise) with checkmark lists, 'Most Popular' badge, and comic-book styling."
              file="components/landing-v4/PricingSectionV4.tsx"
            />
          </div>
          <div className="bg-[#F4F4F5] rounded-2xl v2-comic-border mx-4 overflow-hidden">
            <PricingSectionV4 />
          </div>
        </section>

        {/* FooterV4 */}
        <section className="py-8 md:py-12">
          <div className="max-w-[1200px] mx-auto px-6">
            <SubHeading
              title="FooterV4"
              description="Dark footer with logo, newsletter signup, 4-column link structure (Product/Company/Legal/Follow Us), social icons, and subtle superhero Easter egg."
              file="components/landing-v4/FooterV4.tsx"
            />
          </div>
          <div className="bg-[#F4F4F5] rounded-2xl v2-comic-border mx-4 overflow-hidden">
            <FooterV4 />
          </div>
        </section>

        {/* Page footer spacer */}
        <div className="py-16" />
      </div>
    </DemoCalendarProvider>
  );
}
