'use client';

import { useEffect, useRef, useState } from 'react';

function useRevealOnScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, revealed };
}

// Panel A: "The Struggle" — agent on a call, frustrated
function PanelTheStruggle() {
  const { ref, revealed } = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className={`relative bg-white rounded-2xl v2-comic-border v2-comic-shadow v2-tilt-left overflow-hidden transition-all duration-600 ${
        revealed ? 'v4-panel-reveal' : 'v4-panel-hidden'
      }`}
    >
      {/* Illustration area */}
      <div className="relative bg-gradient-to-br from-[#f0f2f5] to-[#e8eaed] p-6 md:p-8 flex items-center justify-center min-h-[240px] md:min-h-[280px]">
        {/* Stick figure with headset */}
        <svg viewBox="0 0 300 220" className="w-full max-w-[280px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Desk */}
          <rect x="60" y="160" width="180" height="6" rx="2" fill="#1D4871" opacity="0.2" />
          <rect x="90" y="166" width="8" height="30" rx="2" fill="#1D4871" opacity="0.15" />
          <rect x="202" y="166" width="8" height="30" rx="2" fill="#1D4871" opacity="0.15" />

          {/* Laptop on desk */}
          <rect x="115" y="130" width="70" height="45" rx="3" fill="#94A3B8" stroke="#1D4871" strokeWidth="2" />
          <rect x="120" y="135" width="60" height="33" rx="1" fill="#CBD5E1" />
          <rect x="100" y="175" width="100" height="5" rx="2" fill="#94A3B8" stroke="#1D4871" strokeWidth="1.5" />

          {/* Stick figure body */}
          <circle cx="150" cy="75" r="22" fill="white" stroke="#1D4871" strokeWidth="3" />
          {/* Worried expression */}
          <circle cx="142" cy="72" r="2.5" fill="#1D4871" />
          <circle cx="158" cy="72" r="2.5" fill="#1D4871" />
          <path d="M140 84 Q150 80 160 84" stroke="#1D4871" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Sweat drops */}
          <ellipse cx="175" cy="65" rx="2" ry="3" fill="#60A5FA" opacity="0.6" />
          <ellipse cx="180" cy="75" rx="1.5" ry="2.5" fill="#60A5FA" opacity="0.4" />

          {/* Headset */}
          <path d="M128 65 Q128 45 150 43 Q172 45 172 65" stroke="#1D4871" strokeWidth="3" fill="none" />
          <rect x="124" y="62" width="8" height="14" rx="3" fill="#1D4871" />
          <rect x="168" y="62" width="8" height="14" rx="3" fill="#1D4871" />
          {/* Mic */}
          <path d="M128 76 L120 90" stroke="#1D4871" strokeWidth="2" strokeLinecap="round" />
          <circle cx="118" cy="92" r="4" fill="#1D4871" opacity="0.3" />

          {/* Body */}
          <line x1="150" y1="97" x2="150" y2="140" stroke="#1D4871" strokeWidth="3" strokeLinecap="round" />
          {/* Arms */}
          <line x1="150" y1="110" x2="120" y2="130" stroke="#1D4871" strokeWidth="3" strokeLinecap="round" />
          <line x1="150" y1="110" x2="180" y2="130" stroke="#1D4871" strokeWidth="3" strokeLinecap="round" />

          {/* Clock (urgency) */}
          <circle cx="255" cy="45" r="22" fill="white" stroke="#1D4871" strokeWidth="2.5" />
          <circle cx="255" cy="45" r="18" fill="none" stroke="#1D4871" strokeWidth="1" opacity="0.2" />
          <line x1="255" y1="45" x2="255" y2="32" stroke="#1D4871" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="255" y1="45" x2="265" y2="50" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
          {/* Clock ticks */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const x1 = 255 + Math.cos(rad) * 16;
            const y1 = 45 + Math.sin(rad) * 16;
            const x2 = 255 + Math.cos(rad) * 18;
            const y2 = 45 + Math.sin(rad) * 18;
            return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1D4871" strokeWidth="1.5" />;
          })}
          {/* Alarm lines */}
          <path d="M238 25 L232 19" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
          <path d="M272 25 L278 19" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />

          {/* Explosion speech bubble with frustration */}
          <path
            d="M30 20 L50 8 L55 22 L70 5 L72 25 L90 15 L85 30 L100 28 L90 42 L105 48 L88 55 L98 68 L80 62 L75 78 L62 65 L50 80 L48 62 L30 70 L38 55 L18 52 L35 42 L15 32 L35 30 Z"
            fill="#F97316"
            stroke="#1D4871"
            strokeWidth="2"
          />
          <text x="40" y="38" fontFamily="var(--font-bangers), cursive" fontSize="11" fill="#1D4871" fontWeight="bold">?!@</text>
          <text x="55" y="52" fontFamily="var(--font-bangers), cursive" fontSize="11" fill="#1D4871" fontWeight="bold">?!?</text>
          <text x="42" y="65" fontFamily="var(--font-bangers), cursive" fontSize="9" fill="#1D4871" fontWeight="bold">!?!</text>

          {/* Question marks floating */}
          <text x="35" y="105" fontFamily="var(--font-bangers), cursive" fontSize="18" fill="#EF4444" opacity="0.5">?</text>
          <text x="55" y="115" fontFamily="var(--font-bangers), cursive" fontSize="14" fill="#EF4444" opacity="0.4">?</text>
        </svg>
      </div>

      {/* Caption */}
      <div className="p-4 md:p-5">
        <p className="text-sm md:text-base text-[#1D4871]/80 leading-relaxed">
          Your agent freezes. The prospect objects. The moment is{' '}
          <span className="v2-pow-badge px-2 py-0.5 rounded text-xs font-comic inline-block">GONE</span>.
        </p>
      </div>
    </div>
  );
}

// Panel B: "Wasted Opportunity" — calendar with X marks
function PanelWastedOpportunity() {
  const { ref, revealed } = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className={`relative bg-white rounded-2xl v2-comic-border v2-comic-shadow v2-tilt-right overflow-hidden transition-all duration-600 ${
        revealed ? 'v4-panel-reveal' : 'v4-panel-hidden'
      }`}
    >
      {/* Illustration area — split panel */}
      <div className="relative bg-gradient-to-br from-[#f0f2f5] to-[#e8eaed] p-6 md:p-8 min-h-[240px] md:min-h-[280px]">
        <div className="flex gap-1 h-full">
          {/* Left sub-panel: confused agent */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <svg viewBox="0 0 120 160" className="w-full max-w-[100px]" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Stick figure at desk */}
              <circle cx="60" cy="40" r="18" fill="white" stroke="#1D4871" strokeWidth="2.5" />
              <circle cx="53" cy="38" r="2" fill="#1D4871" />
              <circle cx="67" cy="38" r="2" fill="#1D4871" />
              <path d="M52 48 Q60 45 68 48" stroke="#1D4871" strokeWidth="2" strokeLinecap="round" fill="none" />

              {/* Headset */}
              <path d="M42 33 Q42 18 60 16 Q78 18 78 33" stroke="#1D4871" strokeWidth="2.5" fill="none" />
              <rect x="38" y="30" width="7" height="10" rx="2.5" fill="#1D4871" />
              <rect x="75" y="30" width="7" height="10" rx="2.5" fill="#1D4871" />

              {/* Body */}
              <line x1="60" y1="58" x2="60" y2="100" stroke="#1D4871" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="60" y1="70" x2="40" y2="88" stroke="#1D4871" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="60" y1="70" x2="80" y2="88" stroke="#1D4871" strokeWidth="2.5" strokeLinecap="round" />

              {/* Laptop */}
              <rect x="30" y="98" width="60" height="6" rx="2" fill="#94A3B8" stroke="#1D4871" strokeWidth="1.5" />
              <rect x="35" y="80" width="50" height="30" rx="2" fill="#CBD5E1" stroke="#1D4871" strokeWidth="1.5" />

              {/* Speech bubble with empty thought */}
              <ellipse cx="95" cy="22" rx="18" ry="12" fill="white" stroke="#1D4871" strokeWidth="2" />
              <path d="M82 30 L78 38 L86 32" fill="white" stroke="#1D4871" strokeWidth="1.5" />
              <text x="86" y="26" fontFamily="var(--font-bangers), cursive" fontSize="12" fill="#1D4871" opacity="0.5">...</text>

              {/* Question marks */}
              <text x="15" y="30" fontFamily="var(--font-bangers), cursive" fontSize="16" fill="#EF4444" opacity="0.6">?</text>
              <text x="5" y="50" fontFamily="var(--font-bangers), cursive" fontSize="13" fill="#EF4444" opacity="0.4">?</text>
              <text x="20" y="60" fontFamily="var(--font-bangers), cursive" fontSize="10" fill="#EF4444" opacity="0.3">?</text>
            </svg>
          </div>

          {/* Divider with arrow */}
          <div className="flex flex-col items-center justify-center px-1">
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
              <path d="M4 8 L12 20 L4 32" stroke="#1D4871" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M12 8 L20 20 L12 32" stroke="#1D4871" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.4" />
            </svg>
          </div>

          {/* Right sub-panel: calendar with red X marks */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <svg viewBox="0 0 140 160" className="w-full max-w-[120px]" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Calendar frame */}
              <rect x="10" y="15" width="120" height="110" rx="6" fill="white" stroke="#1D4871" strokeWidth="2.5" />
              {/* Calendar header bar */}
              <rect x="10" y="15" width="120" height="26" rx="6" fill="#EF4444" stroke="#1D4871" strokeWidth="2.5" />
              <rect x="10" y="30" width="120" height="11" fill="#EF4444" />
              {/* Calendar rings */}
              <rect x="40" y="8" width="6" height="18" rx="3" fill="#1D4871" />
              <rect x="95" y="8" width="6" height="18" rx="3" fill="#1D4871" />

              {/* Day cells with X marks */}
              {[
                [30, 55], [60, 55], [90, 55],
                [30, 80], [60, 80], [90, 80],
                [30, 105], [60, 105],
              ].map(([x, y], i) => (
                <g key={i}>
                  <rect x={x - 10} y={y - 10} width="22" height="18" rx="2" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1" />
                  <path d={`M${x - 5} ${y - 5} L${x + 7} ${y + 5}`} stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
                  <path d={`M${x + 7} ${y - 5} L${x - 5} ${y + 5}`} stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
                </g>
              ))}

              {/* One empty cell (the future) */}
              <rect x="80" y="95" width="22" height="18" rx="2" fill="#F8F8FA" stroke="#CBD5E1" strokeWidth="1" />

              {/* Flame effects around calendar */}
              <path d="M5 90 Q0 80 5 70 Q8 78 12 72 Q10 82 5 90Z" fill="#F97316" opacity="0.3" />
              <path d="M135 60 Q140 50 135 40 Q132 48 128 42 Q130 52 135 60Z" fill="#F97316" opacity="0.3" />
            </svg>
          </div>
        </div>

        {/* "WASTED OPPORTUNITY!" explosion badge overlay */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <div className="relative">
            <svg viewBox="0 0 220 60" className="w-48 md:w-56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 30 L20 10 L35 22 L50 5 L60 20 L80 8 L85 25 L110 5 L108 22 L135 8 L130 25 L155 10 L148 28 L175 12 L165 30 L190 18 L178 35 L200 25 L190 38 L210 35 L195 45 L210 52 L188 50 L195 60 L170 52 L160 62 L150 50 L130 58 L125 45 L100 55 L100 42 L75 52 L78 40 L50 50 L55 38 L30 48 L38 35 L15 42 L22 33 L5 38 Z"
                fill="#EF4444"
                stroke="#1D4871"
                strokeWidth="2"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center font-comic text-white text-xs md:text-sm tracking-wide drop-shadow-sm" style={{ textShadow: '1px 1px 0px #1D4871' }}>
              WASTED OPPORTUNITY!
            </span>
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="p-4 md:p-5">
        <p className="text-sm md:text-base text-[#1D4871]/80 leading-relaxed">
          Missed questions. Missed appointments. Missed revenue.
        </p>
      </div>
    </div>
  );
}

export function PainPointPanelV4() {
  return (
    <section className="bg-[#F8F8FA] py-12 md:py-16 lg:py-20 v2-halftone relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Comic narrator box */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="bg-[#1D4871] text-white px-5 py-2 rounded-lg v2-comic-shadow-sm transform -rotate-1">
            <span className="font-comic text-lg md:text-xl tracking-wide">Meanwhile, without SaySo...</span>
          </div>
        </div>

        {/* Two comic panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <PanelTheStruggle />
          <PanelWastedOpportunity />
        </div>
      </div>
    </section>
  );
}
