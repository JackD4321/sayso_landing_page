'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { ProductShowcaseVideo } from '../landing/ProductShowcaseSection';

const SUGGESTIONS_COUNT = 3;
const SIGNALS_COUNT = 4;
const CYCLE_DURATION = 12000;

// Starburst SVG behind the headline
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

// Action lines SVG behind the CTA
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

export function HeroWithVideoV2() {
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [currentSuggestion, setCurrentSuggestion] = useState(0);
  const [visibleSignals, setVisibleSignals] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startCycle = useCallback(() => {
    setVisibleSignals(0);
    const signalTimers = Array.from({ length: SIGNALS_COUNT }, (_, i) =>
      setTimeout(() => setVisibleSignals(i + 1), 2000 + i * 2000)
    );
    return () => signalTimers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimerSeconds(prev => prev + 1);
    }, 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  useEffect(() => {
    const cleanup = startCycle();
    const cycleInterval = setInterval(() => {
      setCurrentSuggestion(prev => (prev + 1) % SUGGESTIONS_COUNT);
      setCycleKey(prev => prev + 1);
    }, CYCLE_DURATION);
    return () => { cleanup(); clearInterval(cycleInterval); };
  }, [startCycle]);

  useEffect(() => {
    const cleanup = startCycle();
    return cleanup;
  }, [cycleKey, startCycle]);

  return (
    <main className="max-w-[1200px] mx-auto px-6 pt-6 md:pt-10 lg:pt-12">
      {/* Headline + CTAs */}
      <div className="max-w-[52rem] mx-auto text-center mb-4 md:mb-5 relative">
        <HeroBurst />
        <h1 className="font-comic text-5xl sm:text-6xl lg:text-7xl tracking-wide leading-[1.05] text-[#1D4871] relative z-10">
          Win the Moment
        </h1>
        <p className="mt-2 text-sm md:text-base lg:text-lg leading-relaxed text-[#1D4871]/80 mx-auto">
          Guidance that shows up during the call—before the moment passes.
        </p>
        <div className="mt-4 md:mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-[42rem] mx-auto relative">
          <ActionLines />
          <a
            href="#book-demo"
            className="relative z-10 inline-flex items-center justify-center rounded-full bg-[#2367EE] px-5 py-2.5 text-sm font-semibold text-white v2-comic-btn v2-comic-border-light border-[#1D4871] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2367EE] focus-visible:ring-offset-2"
          >
            Book a demo
          </a>
          <a
            href="#learn-more"
            className="relative z-10 inline-flex items-center justify-center rounded-full border-2 border-[#1D4871] bg-white px-5 py-2.5 text-sm font-semibold text-[#1D4871] v2-comic-btn focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2367EE] focus-visible:ring-offset-2"
          >
            Learn more about Sayso
          </a>
        </div>
      </div>

      {/* Video mock — comic border */}
      <div className="w-[90%] mx-auto">
        <div className="v2-comic-border rounded-3xl overflow-hidden v2-comic-shadow">
          <ProductShowcaseVideo
            timerSeconds={timerSeconds}
            cycleKey={cycleKey}
            currentSuggestion={currentSuggestion}
            visibleSignals={visibleSignals}
          />
        </div>
      </div>
    </main>
  );
}
