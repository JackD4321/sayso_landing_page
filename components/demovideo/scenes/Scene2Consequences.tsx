'use client';

import { motion } from 'framer-motion';
import { SafeArea } from '../Stage';
import { HighlightText } from '../shared/HighlightText';

const consequences = [
  { text: 'Lost Appointments', icon: '📅' },
  { text: 'Awkward Silences', icon: '😶' },
  { text: 'Prospects Hang Up', icon: '📵' },
  { text: 'Missed Revenue', icon: '💸' },
];

export default function Scene2Consequences() {
  return (
    <SafeArea className="flex flex-col items-center justify-center">
      <HighlightText
        text="Every frozen moment costs you"
        highlights={['costs']}
        highlightColor="text-[#EF4444]"
        className="text-4xl md:text-5xl font-hero font-bold text-slate-900 text-center mb-12"
      />

      <div className="grid grid-cols-2 gap-5 max-w-2xl mx-auto mt-4">
        {consequences.map((item, i) => (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 1.0 + i * 0.4,
              duration: 0.5,
              ease: 'easeOut',
            }}
            className="flex items-center gap-4 bg-white rounded-xl border-l-4 border-[#EF4444] px-6 py-5 shadow-md"
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="text-lg font-semibold text-slate-800">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </SafeArea>
  );
}
