'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SaysoHelpScreenProps {
  onReady: () => void;
}

export function SaysoHelpScreen({ onReady }: SaysoHelpScreenProps) {
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowResult(true);
      onReady();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onReady]);

  return (
    <div className="text-center py-4">
      {/* Bouncing bolt */}
      <motion.div
        animate={showResult ? { y: 0 } : { y: [0, -12, 0] }}
        transition={
          showResult
            ? { duration: 0.3 }
            : { duration: 0.8, repeat: Infinity, ease: 'easeInOut' }
        }
        className="mx-auto mb-4"
      >
        <div className="w-14 h-14 rounded-2xl bg-[#2367EE] flex items-center justify-center mx-auto">
          <svg width="28" height="28" viewBox="0 0 512 512" fill="none">
            <path
              d="M294.4 25.6L115.2 281.6H256L217.6 486.4L396.8 230.4H256L294.4 25.6Z"
              fill="white"
              stroke="white"
              strokeWidth="20"
            />
          </svg>
        </div>
      </motion.div>

      {/* Status text */}
      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.p
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-base font-semibold text-[#1D4871]/60"
          >
            SaySo is seeing how it can help...
          </motion.p>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#1D4871]">
              SaySo can help you!
            </h2>
            <div className="max-w-md mx-auto mt-4 rounded-xl bg-[#2367EE]/5 border-2 border-[#2367EE]/20 p-4 text-left flex flex-col gap-2.5">
              {[
                { emoji: '📅', text: 'Book more appointments' },
                { emoji: '💬', text: 'Ask better questions on calls' },
                { emoji: '📞', text: 'Schedule more calls with confidence' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-lg">{item.emoji}</span>
                  <span className="text-base font-semibold text-[#1D4871]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
