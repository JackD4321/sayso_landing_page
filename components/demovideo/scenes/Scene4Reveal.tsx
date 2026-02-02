'use client';

import { motion } from 'framer-motion';
import { SafeArea } from '../Stage';
import Image from 'next/image';

export default function Scene4Reveal() {
  return (
    <SafeArea className="flex flex-col items-center justify-center">
      {/* Radial glow behind logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.15, scale: 1.2 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="absolute w-80 h-80 rounded-full bg-[#2367EE] blur-3xl"
      />

      <div className="relative text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            damping: 15,
            stiffness: 200,
            delay: 0.1,
          }}
          className="mb-8"
        >
          <Image
            src="/logo-pos-transparent-horizontal.png"
            alt="Say So"
            width={320}
            height={90}
            className="mx-auto"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-xl md:text-2xl text-slate-600 font-sans"
        >
          Real-time guidance — <span className="text-[#2367EE] font-semibold">during the call.</span>
        </motion.p>
      </div>
    </SafeArea>
  );
}
