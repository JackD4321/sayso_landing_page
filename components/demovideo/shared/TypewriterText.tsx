'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursorColor?: string;
}

export function TypewriterText({
  text,
  speed = 30,
  delay = 0,
  className = '',
  cursorColor = 'bg-[#2367EE]',
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (delay > 0) {
      const delayTimer = setTimeout(() => setStarted(true), delay);
      return () => clearTimeout(delayTimer);
    } else {
      setStarted(true);
    }
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed, started]);

  if (!started) {
    return (
      <span className={className}>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          className={`inline-block w-0.5 h-4 ${cursorColor} ml-0.5 align-middle`}
        />
      </span>
    );
  }

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className={`inline-block w-0.5 h-4 ${cursorColor} ml-0.5 align-middle`}
      />
    </span>
  );
}
