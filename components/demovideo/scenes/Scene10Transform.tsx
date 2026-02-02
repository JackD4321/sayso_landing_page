'use client';

import { motion } from 'framer-motion';
import { SafeArea } from '../Stage';
import { HighlightText } from '../shared/HighlightText';

export default function Scene10Transform() {
  return (
    <SafeArea className="flex flex-col items-center justify-center">
      <div className="text-center max-w-3xl mx-auto">
        <HighlightText
          text="More appointments. Same calls."
          highlights={['More', 'appointments.']}
          highlightColor="text-[#2367EE]"
          className="text-4xl md:text-5xl font-hero font-bold text-slate-900 leading-tight mb-6"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="relative inline-block"
        >
          <span className="text-3xl md:text-4xl font-hero font-bold text-slate-900">
            No freezing. No guessing.
          </span>
          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2.2, duration: 0.8, ease: 'easeOut' }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-[#2367EE] origin-left rounded-full"
          />
        </motion.div>
      </div>
    </SafeArea>
  );
}
