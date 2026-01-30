'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { ProductShowcaseVideo } from './ProductShowcaseSection';

const SUGGESTIONS_COUNT = 3;
const SIGNALS_COUNT = 4;
const CYCLE_DURATION = 12000;

export function HeroWithVideo() {
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

  // Timer
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimerSeconds(prev => prev + 1);
    }, 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  // Suggestion cycling
  useEffect(() => {
    const cleanup = startCycle();
    const cycleInterval = setInterval(() => {
      setCurrentSuggestion(prev => (prev + 1) % SUGGESTIONS_COUNT);
      setCycleKey(prev => prev + 1);
    }, CYCLE_DURATION);
    return () => { cleanup(); clearInterval(cycleInterval); };
  }, [startCycle]);

  // Restart signals on new suggestion
  useEffect(() => {
    const cleanup = startCycle();
    return cleanup;
  }, [cycleKey, startCycle]);

  return (
    <main className="max-w-[1200px] mx-auto px-6 pt-6 md:pt-10 lg:pt-12">
      {/* Headline + CTAs — compact spacing */}
      <div className="max-w-[52rem] mx-auto text-center mb-4 md:mb-5">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-[#1D4871]">
          Win the Moment
        </h1>
        <p className="mt-2 text-sm md:text-base lg:text-lg leading-relaxed text-[#1D4871]/80 mx-auto">
          Guidance that shows up during the call—before the moment passes.
        </p>
        <div className="mt-4 md:mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-[42rem] mx-auto">
          <a
            href="#book-demo"
            className="inline-flex items-center justify-center rounded-full bg-[#2367EE] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#1F5FE0] hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2367EE] focus-visible:ring-offset-2"
          >
            Book a demo
          </a>
          <a
            href="#learn-more"
            className="inline-flex items-center justify-center rounded-full border border-[#1D4871]/20 bg-transparent px-5 py-2.5 text-sm font-semibold text-[#1D4871] transition-all duration-200 hover:bg-[#1D4871]/5 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2367EE] focus-visible:ring-offset-2"
          >
            Learn more about Sayso
          </a>
        </div>
      </div>

      {/* Video mock — scaled down to fit within viewport */}
      <div className="w-[90%] mx-auto">
        <ProductShowcaseVideo
          timerSeconds={timerSeconds}
          cycleKey={cycleKey}
          currentSuggestion={currentSuggestion}
          visibleSignals={visibleSignals}
        />
      </div>
    </main>
  );
}
