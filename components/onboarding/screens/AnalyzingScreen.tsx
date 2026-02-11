'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MESSAGES = [
  'Analyzing your responses...',
  'Building your custom profile...',
  'Crunching the numbers...',
];

interface AnalyzingScreenProps {
  onComplete: () => void;
}

export function AnalyzingScreen({ onComplete }: AnalyzingScreenProps) {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    // Advance through messages
    timers.push(setTimeout(() => setMessageIndex(1), 1200));
    timers.push(setTimeout(() => setMessageIndex(2), 2400));
    timers.push(setTimeout(() => onComplete(), 3500));

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center py-20">
      {/* Spinner */}
      <svg
        className="onboarding-spinner w-10 h-10 text-[#2367EE] mb-8"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="opacity-20"
        />
        <path
          d="M12 2a10 10 0 0 1 10 10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* Cycling messages */}
      <AnimatePresence mode="wait">
        <motion.p
          key={messageIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="text-xl md:text-2xl font-bold text-[#1D4871] text-center"
        >
          {MESSAGES[messageIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
