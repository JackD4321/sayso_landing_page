'use client';

import { motion } from 'framer-motion';
import { SafeArea } from '../Stage';
import { HighlightText } from '../shared/HighlightText';

export default function Scene1Problem() {
  return (
    <SafeArea className="flex flex-col items-center justify-center">
      <div className="text-center max-w-3xl mx-auto">
        <HighlightText
          text="You're mid-call. They say something unexpected."
          highlights={[]}
          className="text-4xl md:text-5xl font-hero font-bold text-slate-900 leading-tight"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.4 }}
          className="mt-10"
        >
          <HighlightText
            text="And you freeze."
            highlights={['freeze.']}
            highlightColor="text-[#EF4444]"
            className="text-5xl md:text-6xl font-hero font-bold text-slate-900 leading-tight"
            delay={2.0}
          />
        </motion.div>

        {/* Phone icon with ring animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <motion.div
            animate={{
              rotate: [0, -10, 10, -10, 10, 0],
            }}
            transition={{
              delay: 0.5,
              duration: 0.6,
              repeat: 2,
              repeatDelay: 0.3,
            }}
            className="text-6xl"
          >
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </SafeArea>
  );
}
