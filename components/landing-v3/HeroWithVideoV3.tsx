'use client';

import { ProductShowcaseDesktop } from './ProductShowcaseDesktop';

// Starburst SVG behind the headline (same as V2)
function HeroBurst() {
  return (
    <svg
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] md:w-[900px] md:h-[500px] pointer-events-none -z-10"
      viewBox="0 0 900 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Yellow starburst */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 15) * (Math.PI / 180);
        const innerR = 80;
        const outerR = i % 2 === 0 ? 320 : 220;
        const x1 = 450 + Math.cos(angle) * innerR;
        const y1 = 250 + Math.sin(angle) * innerR;
        const x2 = 450 + Math.cos(angle) * outerR;
        const y2 = 250 + Math.sin(angle) * outerR;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#FFDE59"
            strokeWidth={i % 2 === 0 ? 3 : 1.5}
            opacity={i % 2 === 0 ? 0.18 : 0.1}
          />
        );
      })}
    </svg>
  );
}

// Action lines SVG behind the CTA (same as V2)
function ActionLines() {
  return (
    <svg
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[80px] pointer-events-none -z-10"
      viewBox="0 0 500 80"
      fill="none"
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={`l-${i}`}
          x1={0}
          y1={15 + i * 12}
          x2={80 - i * 10}
          y2={15 + i * 12}
          stroke="#2367EE"
          strokeWidth="2"
          opacity={0.15 - i * 0.02}
          strokeLinecap="round"
        />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={`r-${i}`}
          x1={500}
          y1={15 + i * 12}
          x2={420 + i * 10}
          y2={15 + i * 12}
          stroke="#2367EE"
          strokeWidth="2"
          opacity={0.15 - i * 0.02}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

export function HeroWithVideoV3() {
  return (
    <section className="relative bg-white pt-16 pb-6 md:pt-20 md:pb-8 lg:pt-24 lg:pb-10 overflow-hidden v2-halftone">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Top section: headline + tagline + CTAs */}
        <div className="text-center mb-8 md:mb-10">
          {/* Headline with starburst */}
          <div className="relative inline-block mb-4 md:mb-5">
            <HeroBurst />
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#1D4871] tracking-tight"
              style={{ fontFamily: 'var(--font-bangers), cursive' }}
            >
              WIN THE MOMENT
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#1D4871]/80 max-w-2xl mx-auto mb-6 md:mb-8 font-semibold">
            Guidance that shows up during the call—before the moment passes.
          </p>

          {/* CTAs with action lines */}
          <div className="relative inline-flex flex-col sm:flex-row gap-3 sm:gap-4">
            <ActionLines />
            <a
              href="#"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-[#2367EE] text-white text-base sm:text-lg font-bold v2-comic-border v2-comic-btn hover:bg-[#1D4871] transition-colors"
              style={{ fontFamily: 'var(--font-bangers), cursive' }}
            >
              Book a demo
            </a>
            <a
              href="#"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white text-[#1D4871] text-base sm:text-lg font-bold border-2 border-[#1D4871] v2-comic-btn hover:bg-[#F4F4F5] transition-colors"
              style={{ fontFamily: 'var(--font-bangers), cursive' }}
            >
              Learn more about Sayso
            </a>
          </div>
        </div>

        {/* Interactive Desktop Demo Showcase */}
        <div className="mb-0">
          <ProductShowcaseDesktop />
        </div>
      </div>
    </section>
  );
}
