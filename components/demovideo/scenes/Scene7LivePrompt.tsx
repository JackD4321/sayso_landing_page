'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SafeArea } from '../Stage';
import { TypewriterText } from '../shared/TypewriterText';

export default function Scene7LivePrompt() {
  const [phase, setPhase] = useState(0);
  // 0: waveform playing (prospect talking)
  // 1: signal detected tag appears
  // 2: coaching prompt types out

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 2000);
    const t2 = setTimeout(() => setPhase(2), 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <SafeArea className="flex items-center justify-center">
      <div className="flex gap-8 w-full max-w-4xl">
        {/* Left: Call view */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 bg-[#18181B] rounded-2xl p-6 flex flex-col"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(239, 68, 68, 0.4)',
                    '0 0 0 6px rgba(239, 68, 68, 0)',
                  ],
                }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-2.5 h-2.5 rounded-full bg-red-500"
              />
              <span className="text-red-400 text-xs font-medium">REC</span>
            </div>
            <span className="text-slate-500 text-xs font-mono">0:47</span>
          </div>

          <div className="text-slate-400 text-xs mb-3 uppercase tracking-wider">Prospect Speaking</div>

          {/* Waveform bars */}
          <div className="flex items-end gap-1 h-16 mb-4">
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  height: phase >= 0 ? [8, Math.random() * 48 + 8, 8] : 8,
                }}
                transition={{
                  duration: 0.4 + Math.random() * 0.3,
                  repeat: phase < 1 ? Infinity : 0,
                  repeatType: 'reverse',
                  delay: i * 0.05,
                }}
                className="flex-1 bg-[#219e66] rounded-full min-h-[8px]"
              />
            ))}
          </div>

          <div className="mt-auto text-slate-600 text-xs italic">
            &quot;We&apos;ve been thinking about selling, but the timing...&quot;
          </div>
        </motion.div>

        {/* Right: Coach panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 bg-white rounded-2xl border-2 border-[#E4E4E7] p-6 flex flex-col"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded bg-[#2367EE] flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-slate-800">Say So Coach</span>
          </div>

          {/* Signal tag */}
          {phase >= 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 mb-4 w-fit"
            >
              <div className="w-2 h-2 rounded-full bg-[#2367EE]" />
              <span className="text-xs font-medium text-[#2367EE]">Pain Point Detected</span>
            </motion.div>
          )}

          {/* Coaching prompt */}
          {phase >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex-1"
            >
              <div className="text-xs text-slate-400 mb-2">Suggested response</div>
              <TypewriterText
                text="Ask: 'What would make a move worth it for you in the next 6 months?'"
                speed={25}
                className="text-sm font-medium text-slate-800 leading-relaxed"
              />
            </motion.div>
          )}

          {/* Blue border pulse on prompt */}
          {phase >= 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ delay: 3, duration: 1.5 }}
              className="absolute inset-0 rounded-2xl border-2 border-[#2367EE] pointer-events-none"
            />
          )}
        </motion.div>
      </div>
    </SafeArea>
  );
}
