'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SafeArea } from '../Stage';

const phrases = [
  { text: 'Listens to your conversation', icon: '🎧' },
  { text: 'Detects key signals in real time', icon: '📡' },
  { text: 'Shows you what to say next', icon: '💬' },
];

export default function Scene5Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <SafeArea className="flex flex-col items-center justify-center v2-halftone">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-sm text-[#1D4871]/60 font-bold mb-6 tracking-wider uppercase"
      >
        How it works
      </motion.p>

      <div className="relative h-24 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-5"
          >
            <span className="text-5xl">{phrases[index].icon}</span>
            <span className="text-3xl md:text-4xl font-comic text-[#1D4871] tracking-wide">
              {phrases[index].text}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </SafeArea>
  );
}
