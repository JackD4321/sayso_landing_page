'use client';

import { motion } from 'framer-motion';
import { SafeArea } from '../Stage';

export default function Scene9Payoff() {
  return (
    <SafeArea className="flex flex-col items-center justify-center">
      {/* Success card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 15,
          stiffness: 200,
        }}
        className="bg-white rounded-2xl border border-[#E4E4E7] p-8 shadow-lg max-w-sm w-full text-center"
      >
        {/* Checkmark circle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 300, damping: 15 }}
          className="w-16 h-16 rounded-full bg-[#219e66] mx-auto mb-5 flex items-center justify-center"
        >
          <motion.svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.path
              d="M5 13l4 4L19 7"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            />
          </motion.svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-xs text-[#219e66] font-semibold uppercase tracking-wider mb-2">Booked</div>
          <div className="text-xl font-bold text-slate-900 mb-1">Buyer Consultation</div>
          <div className="text-sm text-slate-500 mb-4">Tomorrow &bull; 2:00 PM</div>
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-[#219e66] text-xs font-medium px-3 py-1 rounded-full border border-emerald-200">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 13l4 4L19 7" />
            </svg>
            Confirmed
          </div>
        </motion.div>
      </motion.div>

      {/* Subtle particle burst */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              x: Math.cos(angle) * 120,
              y: Math.sin(angle) * 120,
              scale: [0, 1, 0.5],
            }}
            transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
            className="absolute w-2 h-2 rounded-full bg-[#FFDE59]"
            style={{ top: '50%', left: '50%' }}
          />
        );
      })}
    </SafeArea>
  );
}
