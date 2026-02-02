'use client';

import { motion } from 'framer-motion';
import { SafeArea } from '../Stage';
import { HighlightText } from '../shared/HighlightText';

export default function Scene10Transform() {
  return (
    <SafeArea className="flex flex-col items-center justify-center v2-halftone">
      <div className="text-center max-w-3xl mx-auto">
        <HighlightText
          text="More appointments. Same calls."
          highlights={['More', 'appointments.']}
          highlightColor="text-[#2367EE]"
          className="text-4xl md:text-5xl font-comic text-[#1D4871] leading-tight mb-6 tracking-wide"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="relative inline-block"
        >
          <span className="text-3xl md:text-4xl font-comic text-[#1D4871] tracking-wide">
            No freezing. No guessing.
          </span>
          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2.2, duration: 0.8, ease: 'easeOut' }}
            className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#2367EE] origin-left rounded-full"
          />
        </motion.div>
      </div>
    </SafeArea>
  );
}
