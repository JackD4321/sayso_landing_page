'use client';

import { motion } from 'framer-motion';
import { SafeArea } from '../Stage';

export default function Scene8Signals() {
  return (
    <SafeArea className="flex flex-col items-center justify-center v2-halftone">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-3xl md:text-5xl font-comic text-[#1D4871] text-center max-w-4xl px-8 leading-tight tracking-wide"
      >
        Sayso helps you say the right thing at the right time.
      </motion.p>
    </SafeArea>
  );
}
