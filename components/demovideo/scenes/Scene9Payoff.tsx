'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SafeArea } from '../Stage';

const CARD_APPEAR_DELAY_MS = 2500; // time text stays alone before card pops up

export default function Scene9Payoff() {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowCard(true), CARD_APPEAR_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <SafeArea className="flex flex-col items-center justify-center v2-halftone gap-10">
      {/* Intro line: stays on screen the whole time (matches Scene 7 UI) */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-3xl md:text-5xl font-comic text-[#1D4871] text-center max-w-4xl px-8 leading-tight tracking-wide"
      >
        So you book more appointments.
      </motion.p>

      {/* Success card — pops up below the text after delay */}
      {showCard && (
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 15,
          stiffness: 200,
        }}
        className="bg-white rounded-2xl border-2 border-[#1D4871] p-8 v2-comic-shadow max-w-sm w-full text-center"
      >
        {/* Checkmark circle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 300, damping: 15 }}
          className="w-16 h-16 rounded-full bg-[#2367EE] mx-auto mb-5 flex items-center justify-center"
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
          <div className="text-xs text-[#2367EE] font-bold uppercase tracking-wider mb-2 font-comic">Booked</div>
          <div className="text-xl font-bold text-[#1D4871] mb-1">Buyer Consultation</div>
          <div className="text-sm text-[#1D4871]/70 mb-4">Tomorrow &bull; 2:00 PM</div>
          <div className="inline-flex items-center gap-1.5 bg-[#2367EE]/10 text-[#2367EE] text-xs font-bold px-3 py-1 rounded-full border-2 border-[#2367EE]/30">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 13l4 4L19 7" />
            </svg>
            Confirmed
          </div>
        </motion.div>
      </motion.div>
      )}

      {/* Subtle particle burst — only when card is showing */}
      {showCard && [...Array(8)].map((_, i) => {
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
