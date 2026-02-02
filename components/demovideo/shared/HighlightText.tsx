'use client';

import { motion } from 'framer-motion';
import { splitWords } from '../utils/splitWords';

interface HighlightTextProps {
  text: string;
  highlights: string[];
  highlightColor?: string;
  className?: string;
  delay?: number;
}

const containerVariants = (delay: number) => ({
  animate: {
    transition: {
      staggerChildren: 0.045,
      delayChildren: delay,
    },
  },
});

const wordVariants = {
  initial: { y: 10, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45 },
  },
};

export function HighlightText({
  text,
  highlights,
  highlightColor = 'text-[#2367EE]',
  className = '',
  delay = 0.05,
}: HighlightTextProps) {
  const words = splitWords(text);
  const lowercaseHighlights = highlights.map((h) => h.toLowerCase());

  return (
    <motion.h1
      className={className}
      variants={containerVariants(delay)}
      initial="initial"
      animate="animate"
    >
      {words.map((word, i) => {
        const cleanWord = word.replace(/[.,!?]/g, '');
        const isHighlight = lowercaseHighlights.includes(cleanWord.toLowerCase());
        return (
          <motion.span
            key={i}
            variants={wordVariants}
            className={isHighlight ? highlightColor : ''}
          >
            {word}{' '}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}
