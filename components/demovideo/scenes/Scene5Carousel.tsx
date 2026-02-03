'use client';

import { motion } from 'framer-motion';
import { SafeArea } from '../Stage';
import Image from 'next/image';

const steps = [
  { text: 'Listens to your conversation', icon: '🎧' },
  { text: 'Detects key signals in real time', icon: '📡' },
  { text: 'Shows you what to say next', icon: '💬' },
];

export default function Scene5Carousel() {
  return (
    <SafeArea className="flex flex-col items-center justify-center v2-halftone">
      <div className="-mt-12">
      {/* Say So Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <Image
          src="/logo-pos-transparent-horizontal.png"
          alt="Say So"
          width={200}
          height={56}
          className="mx-auto"
        />
      </motion.div>

      {/* Stacking items */}
      <div className="flex flex-col gap-4 max-w-2xl w-full">
        {steps.map((step, i) => (
          <motion.div
            key={step.text}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.8 + i * 1.2,
              duration: 0.5,
              type: 'spring',
              damping: 20,
              stiffness: 200,
            }}
            className="flex items-center gap-5 bg-white rounded-2xl border-2 border-[#1D4871] px-6 py-5 v2-comic-shadow"
          >
            <span className="text-4xl">{step.icon}</span>
            <span className="text-xl md:text-2xl font-comic text-[#1D4871] tracking-wide">
              {step.text}
            </span>
          </motion.div>
        ))}
      </div>
      </div>
    </SafeArea>
  );
}
