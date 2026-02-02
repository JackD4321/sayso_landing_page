'use client';

import { motion } from 'framer-motion';
import { SafeArea } from '../Stage';
import { HighlightText } from '../shared/HighlightText';

export default function Scene3Dream() {
  return (
    <SafeArea className="flex flex-col items-center justify-center">
      {/* Subtle background shift */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-b from-white to-blue-50"
      />

      <div className="relative text-center max-w-3xl mx-auto">
        <HighlightText
          text="What if you always knew exactly what to say?"
          highlights={['exactly', 'what', 'to', 'say?']}
          highlightColor="text-[#2367EE]"
          className="text-4xl md:text-5xl font-hero font-bold text-slate-900 leading-tight"
        />
      </div>
    </SafeArea>
  );
}
